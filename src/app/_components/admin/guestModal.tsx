import { api } from "~/trpc/react";
import Modal from "../modal"
import Title from "../title";
import { useState } from "react";
import type { Guest } from "@prisma/client";
import Button from "../button";
import toast from "react-hot-toast";

interface ConfirmModalProps {
    isOpen: boolean;
    onClose: () => void;
    guest?: Guest | null;
}

const GuestModal = ({ isOpen, onClose, guest }: ConfirmModalProps) => {
    const newGuest = guest === null;
    const [name, setName] = useState(guest?.name ?? "");
    const [passes, setPasses] = useState(guest?.passes ?? 1);
    const utils = api.useUtils();

    const createGuest = api.guest.createGuest.useMutation({
        onSuccess: async () => {
            toast.success("Invitado creado correctamente");
            await utils.guest.invalidate();
            onClose();
        },
        onError: (error) => {
            toast.error("Error al crear el invitado: " + error.message);
            console.error("Error creating guest:", error);
        },
    });

    const updateGuest = api.guest.updateGuest.useMutation({
        onSuccess: async () => {
            toast.success("Invitado actualizado correctamente");
            await utils.guest.invalidate();
            onClose();
        },
        onError: (error) => {
            toast.error("Error al actualizar el invitado: " + error.message);
            console.error("Error updating guest:", error);
        },
    });

    const deleteGuest = api.guest.deleteGuest.useMutation({
        onSuccess: async () => {
            toast.success("Invitado eliminado correctamente");
            await utils.guest.invalidate();
            onClose();
        },
        onError: (error) => {
            toast.error("Error al eliminar el invitado: " + error.message);
            console.error("Error deleting guest:", error);
        },
    });

    const handleSave = () => {
        if (newGuest) {
            createGuest.mutate({ name, passes });
        } else {
            updateGuest.mutate({ id: guest?.id ?? "", name, passes });
        }
    }

    const handleDelete = () => {
        if (!guest?.id) return;
        if (window.confirm("¿Estás seguro de que quieres eliminar este invitado? Esta acción no se puede deshacer.")) {
            deleteGuest.mutate(guest.id);
        }
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <Title label={newGuest ? "Nuevo invitado" : "Editar invitado"} className="pb-4" lowercase />
            <div className="flex flex-col gap-2">
                <div>
                    <div>
                        Nombre
                    </div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Nombre del invitado"
                    />

                </div>
                <div>
                    <div className="mt-4">
                        Pases asignados
                    </div>
                    <input
                        type="number"
                        value={passes}
                        onChange={(e) => setPasses(Number(e.target.value))}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Número de pases asignados"
                        min="1"
                    />
                </div>
            </div>
            <div className="flex flex-row justify-center pt-10 gap-4">
                {!newGuest && (
                    <Button label="Eliminar" onClick={handleDelete} secondary />
                )}
                <Button label="Guardar" onClick={handleSave} />
            </div>
        </Modal>
    )
}

export default GuestModal;