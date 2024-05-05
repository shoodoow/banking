'use server'

import { ID } from "node-appwrite"
import { createAdminClient, createSessionClient } from "../appwerite"
import { cookies } from "next/headers"
import { parseStringify } from "../utils"


export const signIn = async ({ email, password }: signInProps) => {
    try {
        const { account } = await createAdminClient();
        const response = await account.createEmailPasswordSession(email, password);
        cookies().set("appwrite-session", response.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });
        return parseStringify(response);
    } catch (error) {
        console.log(error)
    }
}

export const signUp = async (userData: SignUpParams) => {
    try {
        const { account } = await createAdminClient();

        const newUserAccount = await account.create(ID.unique(),
            userData.email,
            userData.password,
            `${userData.firstName} ${userData.lastName}`

        );

        const session = await account.createEmailPasswordSession(userData.email, userData.password);

        cookies().set("aappwrite-session", session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });

        return parseStringify(newUserAccount);

    } catch (error) {
        console.log(error)
    }
}

// ... your initilization functions

export async function getLoggedInUser() {
    try {
        const { account } = await createSessionClient();
        const user = await account.get();
        return parseStringify(user);
    } catch (error) {
        return null;
    }
}


export const signOut = async () => {
    try {
        const { account } = await createSessionClient();
        await account.deleteSession("current");
        cookies().delete("appwrite-session");
        return true;
    } catch (error) {
        console.log(error)
    }
}