"use client";
import { api } from "~/trpc/react";
import Button from "../button";
import Section from "../section"
import Title from "../title";
import Spinner from "../spinner";
import toast from "react-hot-toast";
import { useState } from "react";
import ConfirmModal from "./confirmModal";
import { FiPlus } from "react-icons/fi";
import VeganModal from "./veganModal";

const ConfirmationSection = ({ id }: { id: string }) => {
    const [modify, setModify] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [openVeganModal, setOpenVeganModal] = useState(false);
    const { data: guest, isLoading, error } = api.guest.getGuest.useQuery(id);
    const utils = api.useUtils();
    const confirmAttendance = api.guest.confirmAttendance.useMutation({
        onSuccess: async (data) => {
            toast.success("Asistencia confirmada" + (data.confirmedPasses === 1 ? ` (${data.confirmedPasses} pase)` : ` (${data.confirmedPasses} pases)`));
            await utils.guest.invalidate();
        },
        onError: (error) => {
            toast.error("Error al confirmar asistencia: " + error.message);
        },
    });

    const confirmVegetarian = api.guest.confirmVegetarian.useMutation({
        onSuccess: async (data) => {
            toast.success("Platillos especiales confirmados" + (data.vegetarian === 1 ? ` (${data.vegetarian} platillo)` : ` (${data.vegetarian} platillos)`));
            await utils.guest.invalidate();
        },
        onError: (error) => {
            console.log("NELL")
            toast.error("Error al confirmar platillos especiales: " + error.message);
        },
    });

    if (isLoading) {
        return (
            <Section>
                <Spinner />
            </Section>)
    }

    if (error || !guest) {
        return (
            <Section>
                <div className="flex flex-col items-center justify-center">
                    <Title label="Error" className="pb-6" />
                    <p className="text-center text-text italic">
                        No hemos podido encontrar tu invitación. Por favor, verifica el enlace o contacta con el organizador.
                    </p>
                </div>
            </Section>
        );
    }

    const handleVeganConfirm = (plates: number) => {
        confirmVegetarian.mutate({ id: guest.id, vegetarian: plates });
        setOpenVeganModal(false);
    };

    const handleConfirm = (pases: number) => {
        confirmAttendance.mutate({ id: guest.id, confirmedPasses: pases });
        setModify(false);
    };

    const handleQuickConfirm = () => {
        const pases = guest.responded ? guest.confirmedPasses : guest.passes;
        confirmAttendance.mutate({ id: guest.id, confirmedPasses: pases });
        setModify(false);
    };

    return (
        <>
            <Section>
                <div className="flex flex-col items-center justify-center">
                    <Title label="Confirmación" className="pb-6" />
                    {guest.responded && !modify ? (
                        <>
                            <p className="text-center text-text italic">
                                Gracias por confirmar tu asistencia <br />
                            </p>
                            <div className="font-bold pt-10 pb-0">
                                {guest.name ?? "Invitado"}
                            </div>
                            <div className="pt-0">
                                {guest.confirmedPasses} {guest.confirmedPasses === 1 ? "pase confirmado" : "pases confirmados"}
                            </div>
                            <div className="pb-8">
                                {guest.vegetarian == 1 ? `(${guest.vegetarian} platillo especial)` : `${guest.vegetarian} platillos especiales`}
                            </div>
                            <Button label="Cambiar respuesta" onClick={() => setModify(true)} />
                        </>
                    ) : (
                        <>
                            <p className="text-center text-text italic">
                                Queremos compartir este momento contigo, <br />
                                ayúdanos confirmando tu asistencia
                            </p>
                            <div className="font-bold pt-10 pb-0">
                                {guest.name ?? "Invitado"}
                            </div>
                            <div className="pt-0">
                                {guest.passes} {guest.passes === 1 ? "pase disponible" : "pases disponibles"}
                            </div>
                            {modify && (
                                <>
                                    <div className="pt-0">
                                        {guest.confirmedPasses} {guest.confirmedPasses === 1 ? "pase confirmado" : "pases confirmados"}
                                    </div>
                                </>
                            )}

                            <div className="flex flex-col items-center justify-center pt-10">
                                <div className="pb-2 font-semibold">
                                    ¿Vegetariano/Vegano?
                                </div>
                                <button
                                    onClick={() => setOpenVeganModal(true)}
                                    className="p-2 bg-white rounded-full shadow hover:bg-gray-200 transition"
                                >
                                    <FiPlus />
                                </button>
                            </div>

                            <div className="flex flex-row justify-center gap-4 pt-10">
                                <Button label="Más opciones" secondary onClick={() => setOpenModal(true)} />
                                <Button label="Confirmar" onClick={handleQuickConfirm} />
                            </div>

                        </>
                    )}

                </div>
            </Section>
            {openModal && (
                <ConfirmModal
                    isOpen={openModal}
                    onClose={() => setOpenModal(false)}
                    onConfirm={handleConfirm}
                    guest={guest}
                />
            )}
            {openVeganModal && (
                <VeganModal
                    isOpen={openVeganModal}
                    onClose={() => setOpenVeganModal(false)}
                    onConfirm={handleVeganConfirm}
                    guest={guest}
                />
            )}
        </>
    )
}

export default ConfirmationSection;