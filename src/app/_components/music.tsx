// components/BackgroundMusic.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const BackgroundMusic = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [muted, setMuted] = useState(false);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.2; // adjust volume
            audioRef.current.play().catch((e) => {
                console.warn("Autoplay failed:", e);
            });
        }
    }, []);

    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !audioRef.current.muted;
            setMuted(audioRef.current.muted);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <audio ref={audioRef} loop src="/audio/ill_be.mp3" />
            <button
                onClick={toggleMute}
                className="p-2 bg-white rounded-full shadow hover:bg-gray-200 transition"
            >
                {muted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>
        </div>
    );
};

export default BackgroundMusic;
