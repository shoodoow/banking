import { z } from "zod"
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { Control, FieldPath, } from 'react-hook-form'
import { authFormSchema } from "@/lib/utils"
const formSchema = authFormSchema('sign-up')

const CustomFormInput = ({ control, name, lable, placeholder, type }: {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    lable: string,
    placeholder: string
    type: string

}) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <div className='form-item'>
                    <FormLabel className='form-lable' htmlFor={name}>{lable}</FormLabel>
                    <div className='flex w-full flex-col'>
                        <FormControl>
                            <Input
                                className='input-class'
                                {...field}
                                id={name}
                                type={type}
                                placeholder={placeholder}
                            />
                        </FormControl>
                        <FormMessage className='form-message mt-2' />

                    </div>
                </div>
            )}
        />
    )
}

export default CustomFormInput