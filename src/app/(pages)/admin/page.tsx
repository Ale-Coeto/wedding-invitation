
import Button from "~/app/_components/button";
import { signIn } from 'next-auth/react';
import { auth } from "~/server/auth";
import Link from "next/link";
import Login from "~/app/_components/admin/login";
import GuestList from "~/app/_components/admin/guestList";
import { api } from "~/trpc/react";
import Spinner from "~/app/_components/spinner";

const AdminPage = async () => {
    const session = await auth();

    if (!session?.user) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="font-bold">Access Denied</h1>
                <p>You must be logged in to view this page.</p>
                <Login />

            </div>
        )
    }

    return (
        <div className="flex flex-col items-center pt-20">
            <h1 className="font-bold text-lg">Invitados</h1>
            <p> Lista de invitados, estado y número de pases</p>
            <div>
                <GuestList />
            </div>
            
            <Link
                href={"/api/auth/signout"}
            >
                <Button
                    label="Sign out"
                    className="mt-4"
                />
            </Link>
        </div>
    );
}

export default AdminPage;