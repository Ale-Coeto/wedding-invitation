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
    const copy = async (link: string) => {
        await navigator.clipboard.writeText(link)
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

    // if (!guests || guests.length === 0) {
    //     return (
    //         <div className="flex items-center justify-center h-full">
    //             <p className="text-gray-500">No guests found.</p>
    //         </div>
    //     );
    // }

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
                <div className="flex md:flex-row flex-col justify-center text-center md:text-left md:justify-between items-center mb-3">
                    <div className="pb-4 md:pb-0">
                        {guests && (
                            <>
                                <div>
                                    Confirmados: <span className="text-green-700">{guests.filter(g => g.responded && g.confirmedPasses > 0).length}</span> / {guests.length}
                                </div>
                                <div>
                                    Pases confirmados: <span className="text-green-700">{guests.reduce((acc, g) => acc + (g.responded ? g.confirmedPasses : 0), 0)}</span> / {guests.reduce((acc, g) => acc + g.passes, 0)}
                                </div>
                            </>
                        )}
                    </div>
                    {canEdit && (
                        <Button onClick={handleNewGuest} label="Agregar invitado" />
                    )}
                </div>

                {/* Mobile view */}
                <div className="block md:hidden space-y-4">
                    {guests?.map((guest, key) => (
                        <div key={guest.id} className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-semibold text-lg">#{key + 1} {guest.name}</h3>
                                {canEdit && (
                                    <button onClick={() => handleEditGuest(guest)} className="text-gold hover:text-gold-dark">
                                        <FaRegEdit />
                                    </button>
                                )}
                            </div>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span>Respondió:</span>
                                    <div className={`${guest.responded ? "text-green-700 bg-green-200" : "text-red-700 bg-red-200"} rounded-full text-center px-2 py-1 text-xs`}>
                                        {guest.responded ? "Si" : "No"}
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <span>Pases:</span>
                                    <span>{guest.passes}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Pases confirmados:</span>
                                    <span>{guest.confirmedPasses}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Platillos especiales:</span>
                                    <span>{guest.vegetarian}</span>
                                </div>
                                <div className="mt-4">
                                    <button
                                        onClick={() => copy(`https://aida-y-victor.vercel.app/${guest.id}`)}
                                        className="text-gold text-xs break-all hover:underline"
                                    >
                                        https://aida-y-victor.vercel.app/{guest.id}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop view */}
                <div className="hidden md:block overflow-x-auto">
                    <table className="min-w-full table-auto border border-gray-200">
                        <thead className="bg-gray-100 text-left">
                            <tr>
                                <th className="px-4 py-2 border-b">Número</th>
                                <th className="px-4 py-2 border-b">Nombre</th>
                                <th className="px-4 py-2 border-b">Respondió</th>
                                <th className="px-4 py-2 border-b">Pases</th>
                                <th className="px-4 py-2 border-b">Pases confirmados</th>
                                <th className="px-4 py-2 border-b">Platillos especiales</th>
                                <th className="px-4 py-2 border-b">Link de invitación</th>
                                {canEdit && (
                                    <th className="px-4 py-2 border-b"></th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {guests?.map((guest, key) => (
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
                                    <td className="px-4 py-2 border-b border-text-light">{guest.vegetarian}</td>
                                    <td className="px-4 py-2 border-b border-text-light cursor-pointer hover:text-gold" onClick={() => copy(`https://aida-y-victor.vercel.app/${guest.id}`)}>
                                        <span className="truncate max-w-xs block">https://aida-y-victor.vercel.app/{guest.id}</span>
                                    </td>
                                    {canEdit && (
                                        <td onClick={() => handleEditGuest(guest)} className="px-4 py-2 border-b border-text-light hover:text-gold cursor-pointer">
                                            <FaRegEdit />
                                        </td>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {openModal && (
                <GuestModal isOpen={openModal} onClose={() => setOpenModal(false)} guest={selectedGuest} />
            )}
        </>
    )
}

export default GuestList;