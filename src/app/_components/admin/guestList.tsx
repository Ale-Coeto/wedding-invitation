"use client";
import { api } from "~/trpc/react";
import Spinner from "../spinner";
import toast from "react-hot-toast";
import Button from "../button";
import { FaRegEdit } from "react-icons/fa";
import { useState } from "react";
import GuestModal from "./guestModal";
import type { Guest } from "@prisma/client";

const GuestList = () => {
    const [openModal, setOpenModal] = useState(false);
    const [selectedGuest, setSelectedGuest] = useState<Guest | null>(null);
    const { data: guests, isLoading } = api.guest.getAll.useQuery();
    const copy = (link: string) => {
        navigator.clipboard.writeText(link)
            .then(() => {
                toast.success("Copiado!")
            })
    }

    const { data: user, isLoading: isUserLoading } = api.user.getUser.useQuery();

    if (isLoading || isUserLoading) {
        return (
            <div className="flex items-center justify-center h-full">
                <Spinner />
            </div>
        );
    }

    if (!guests || guests.length === 0) {
        return (
            <div className="flex items-center justify-center h-full">
                <p className="text-gray-500">No guests found.</p>
            </div>
        );
    }

    const canEdit = user?.admin;

    const handleNewGuest = () => {
        setSelectedGuest(null);
        setOpenModal(true);
    }

    const handleEditGuest = (guest: Guest) => {
        setSelectedGuest(guest);
        setOpenModal(true);
    }

    return (
        <>
            <div className="p-10 font-sans text-sm">
                <div className="flex flex-row justify-between items-center mb-3">
                    <div>
                        <div>
                            Confirmados: <span className="text-green-700">{guests.filter(g => g.responded && g.confirmedPasses > 0).length}</span> / {guests.length}
                        </div>
                        <div>
                            Pases confirmados: <span className="text-green-700">{guests.reduce((acc, g) => acc + (g.responded ? g.confirmedPasses : 0), 0)}</span> / {guests.reduce((acc, g) => acc + g.passes, 0)}
                        </div>
                    </div>
                    {canEdit && (
                        <Button onClick={handleNewGuest} label="Agregar invitado" />
                    )}
                </div>
                <table className="min-w-full table-auto border border-gray-200">
                    <thead className="bg-gray-100 text-left">
                        <tr>
                            <th className="px-4 py-2 border-b">Número</th>
                            <th className="px-4 py-2 border-b">Nombre</th>
                            <th className="px-4 py-2 border-b">Respondió</th>
                            <th className="px-4 py-2 border-b">Pases</th>
                            <th className="px-4 py-2 border-b">Pases confirmados</th>
                            <th className="px-4 py-2 border-b">Link de invitación</th>
                            {canEdit && (
                                <th className="px-4 py-2 border-b"></th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {guests.map((guest, key) => (
                            <tr key={guest.id} className="hover:bg-gray-50">
                                <td className="px-4 py-2 border-b border-text-light">{key + 1}</td>
                                <td className="px-4 py-2 border-b border-text-light">{guest.name}</td>
                                <td className="px-4 py-2 border-b border-text-light">
                                    <div className={`${guest.responded ? "text-green-700 bg-green-200" : "text-red-700 bg-red-200"} rounded-full text-center px-3 w-min`}>
                                        {guest.responded ? "Si" : "No"}
                                    </div>
                                </td>
                                <td className="px-4 py-2 border-b border-text-light">{guest.passes}</td>
                                <td className="px-4 py-2 border-b border-text-light">{guest.confirmedPasses}</td>
                                <td className="px-4 py-2 border-b border-text-light" onClick={() => copy(`https://aida-y-victor.vercel.app/${guest.id}`)}>https://aida-y-victor.vercel.app/{guest.id}</td>
                                {canEdit && (
                                    <td onClick={() => handleEditGuest(guest)} className="px-4 py-2 border-b border-text-light hover:text-gold">
                                        <FaRegEdit  />
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {openModal && (
                <GuestModal isOpen={openModal} onClose={() => setOpenModal(false)} guest={selectedGuest} />
            )}
        </>
    )
}

export default GuestList;