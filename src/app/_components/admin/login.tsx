"use client";
import Button from "../button"
import { signIn } from 'next-auth/react';

const Login = () => {
    return (
        <Button
            label="Sign in"
            className="mt-4"
            onClick={() => signIn(undefined, { callbackUrl: '/admin' })}
        />
    )
}

export default Login;