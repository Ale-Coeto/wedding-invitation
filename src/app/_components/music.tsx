"use client";

import { useEffect, useRef, useState } from "react";
import { FaVolumeMute, FaVolumeUp, FaPlay } from "react-icons/fa";
import { GoArrowDownRight } from "react-icons/go";

const BackgroundMusic = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [muted, setMuted] = useState(false);
    const [started, setStarted] = useState(false);
    const [showOverlay, setShowOverlay] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowOverlay(false);
        }, 4000);
        return () => clearTimeout(timer);
    }, []);

    const startMusic = () => {
        if (audioRef.current) {
            audioRef.current.volume = 0.2;
            audioRef.current.play().catch((e) => {
                console.warn("Playback error:", e);
            });
            setStarted(true);
            setShowOverlay(false);
        }
    };

    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !audioRef.current.muted;
            setMuted(audioRef.current.muted);
        }
    };

    return (
        <>
            {showOverlay && (
                <div className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center">
                    <div className="text-white text-center animate-bounce">
                        <p className="text-lg mb-2">Click para música</p>
                        <GoArrowDownRight className="text-4xl mx-auto" />
                    </div>
                </div>
            )}

            <div className="fixed bottom-4 right-4 z-50">
                <audio ref={audioRef} loop src="/audio/ill_be.mp3" />
                {!started ? (
                    <button
                        onClick={startMusic}
                        className="p-2 bg-white rounded-full shadow hover:bg-gray-200 transition"
                    >
                        <FaPlay />
                    </button>
                ) : (
                    <button
                        onClick={toggleMute}
                        className="p-2 bg-white rounded-full shadow hover:bg-gray-200 transition"
                    >
                        {muted ? <FaVolumeMute /> : <FaVolumeUp />}
                    </button>
                )}
            </div>
        </>
    );
};

export default BackgroundMusic;
