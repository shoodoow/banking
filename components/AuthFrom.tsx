'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
} from "@/components/ui/form"
import { z } from "zod"
import CustomFormInput from './CustomFormInput'
import { authFormSchema } from '@/lib/utils'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { signIn, signUp } from '@/lib/actions/user.actions'


const AuthFrom = ({ type }: { type: string }) => {
    const [user, setUser] = useState(null)
    const formSchema = authFormSchema(type);
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            address1: "",
            state: "",
            postalCode: "",
            dateOfBirth: "",
            ssn: "",

        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsLoading(true)

        try {
            console.log(values)
            setIsLoading(true)
            if (type === 'sign-in') {
                const newUser = await signIn({
                    email: values.email,
                    password: values.password

                })
                router.push('/')

            }
            if (type === 'sign-up') {
                const response = await signUp(values)
                setUser(response)

            }

        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }

    }


    return (
        <section className='auth-form'>
            <header className='flex flex-col gap-5 md:gap-8'>
                <Link href='/' className='flex mb-12 cursor-pointer items-center'>
                    <Image src='/icons/logo.svg' alt='logo' width={34} height={34} />
                    <h1 className='text-26 font-ibm-plex-serif font-bold text-black-2 px-3 '>Horizon</h1>
                </Link>
                <div className='flex flex-col gap-1 md:gap:3'>
                    <h1 className='text-24 lg:text-36  font-semibold text-gray-900'>
                        {user ? 'Link Account' : type === 'sign-in' ? 'Sign in' : 'Create an account'}
                    </h1>
                    <p className='text-16 lg:text-18 text-gray-600'>
                        {user ? 'Link your account to continue' : 'Please enter your details'}
                    </p>
                </div>
            </header>
            {user ? (
                <div className='flex flex-xol gap-4'>

                </div>
            ) : (
                <>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">


                            {type === 'sign-up' && (
                                <>
                                    <div className='flex gap-4'>
                                        <CustomFormInput control={form.control} name='firstName' lable='First Name' placeholder='Enter your First Name' type='text' />
                                        <CustomFormInput control={form.control} name='lastName' lable='Last Name' placeholder='Enter your Last Name' type='text' />

                                    </div>
                                    <CustomFormInput control={form.control} name='city' lable='City' placeholder='Enter your City' type='text' />

                                    <CustomFormInput control={form.control} name='address1' lable='Address' placeholder='Enter your Address' type='text' />
                                    <div className='flex gap-4'>
                                        <CustomFormInput control={form.control} name='state' lable='State' placeholder='ex: NY' type='text' />

                                        <CustomFormInput control={form.control} name='postalCode' lable='Postal Code' placeholder='ex: 11111' type='text' />
                                    </div>
                                    <div className='flex gap-4'>

                                        <CustomFormInput control={form.control} name='dateOfBirth' lable='Date of Birth' placeholder='YYYY-MM-DD' type='text' />

                                        <CustomFormInput control={form.control} name='ssn' lable='SSN' placeholder='Social Security Number ex:123' type='text' />
                                    </div>


                                </>
                            )}

                            <CustomFormInput control={form.control} name='email' lable='Email' placeholder='Enter your email' type='email' />
                            <CustomFormInput control={form.control} name='password' lable='Password' placeholder='Enter your password' type='password' />
                            <div className='flex flex-col gap-4'>
                                <Button disabled={isLoading} className='form-btn' type="submit">
                                    {isLoading ? (
                                        <>
                                            <Loader2 size={20} className='animate-spin' /> <span className='ml-2'>Loading...</span>
                                        </>
                                    ) : type === 'sign-in' ? 'Sign in' : 'Create account'}
                                </Button>
                            </div>
                        </form>
                    </Form>
                    <footer className='flex flex-center gap-1'>
                        <p className='text-16 lg:text-18 text-gray-600'>
                            {type === 'sign-in' ? 'Don’t have an account? ' : 'Already have an account? '}
                            <Link href={type === 'sign-in' ? '/sign-up' : '/sign-in'} className='form-link cursor-pointer'>
                                {type === 'sign-in' ? 'Create an account' : 'Sign in'}
                            </Link>
                        </p>
                    </footer>
                </>
            )
            }

        </section >
    )
}

export default AuthFrom