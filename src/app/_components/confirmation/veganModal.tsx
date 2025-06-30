"use client";

import type { Guest } from "@prisma/client";
import Modal from "../modal";
import Button from "../button";
import { useState } from "react";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import Title from "../title";


interface VeganModalProps {
    isOpen: boolean;
    guest: Guest;
    onConfirm: (plates: number) => void;
    onClose: () => void;
}

const VeganModal = ({ isOpen, guest, onConfirm, onClose }: VeganModalProps) => {
    const [plates, setPlates] = useState(guest.vegetarian ?? 0);
    const handlePlus = () => {
        if (plates < guest.passes) {
            setPlates(plates + 1);
        }
    };
    const handleMinus = () => {
        if (plates > 0) {
            setPlates(plates - 1);
        }
    };
    const handleConfirm = () => {
        onConfirm(plates);
        onClose();
    };
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="p-3">
                <Title label="Platillos especiales" className="pb-4" lowercase />
                <div className="font-bold">
                </div>
                <div className="">
                    Veganos o vegetarianos
                </div>
                <div className="flex flex-row items-center justify-center gap-4 py-6">
                    <div className="flex flex-row items-center justify-center gap-4">
                        <FaCircleMinus onClick={handleMinus} className="text-text-light hover:text-text" />
                        <div>
                            {plates}
                        </div>
                        <FaCirclePlus onClick={handlePlus} className="text-text-light hover:text-text" />
                    </div>
                    <div>
                        {plates === 1 ? "platillo" : "platillos"}
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Button label="Confirmar" onClick={handleConfirm} className="mt-4" />
                </div>
            </div>
        </Modal>
    )
}

export default VeganModal;