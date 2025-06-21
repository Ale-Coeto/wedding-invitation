"use client";

import type { Guest } from "@prisma/client";
import Modal from "../modal";
import Button from "../button";
import { useState } from "react";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import Title from "../title";


interface ConfirmModalProps {
    isOpen: boolean;
    guest: Guest;
    onConfirm: (pases: number) => void;
    onClose: () => void;
}

const ConfirmModal = ({ isOpen, guest, onConfirm, onClose }: ConfirmModalProps) => {
    const [pases, setPases] = useState(guest.responded ? guest.confirmedPasses : guest.passes);
    const handlePlus = () => {
        if (pases < guest.passes) {
            setPases(pases + 1);
        }
    };
    const handleMinus = () => {
        if (pases > 0) {
            setPases(pases - 1);
        }
    };
    const handleConfirm = () => {
        onConfirm(pases);
        onClose();
    };
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="p-3">
                <Title label="Confirmación de asistencia" className="pb-4" lowercase />
                <div className="font-bold">
                    {guest.name}
                </div>
                <div className="">
                    {guest.passes} {guest.passes === 1 ? "pase asignado" : "pases asignados"}
                </div>
                <div className="flex flex-row items-center justify-center gap-4 py-6">
                    <div>
                        Confirmo:
                    </div>
                    <div className="flex flex-row items-center justify-center gap-4">
                        <FaCircleMinus onClick={handleMinus} className="text-text-light hover:text-text" />
                        <div>
                            {pases}
                        </div>
                        <FaCirclePlus onClick={handlePlus} className="text-text-light hover:text-text" />
                    </div>
                    <div>
                        {pases === 1 ? "pase" : "pases"}
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Button label="Confirmar" onClick={handleConfirm} className="mt-4" />
                </div>
            </div>
        </Modal>
    )
}

export default ConfirmModal;