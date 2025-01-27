import React, { useRef, useEffect } from 'react';
import './VideoPlayer.css';
import video from '../../assets/SmartEcoSchool.mp4';

const VideoPlayer = ({ playerState, setPlayerState }) => {
    const videoRef = useRef(null); // Referencia al elemento <video>

    // Efecto para pausar el vídeo cuando playerState es false
    useEffect(() => {
        if (!playerState && videoRef.current) {
            videoRef.current.pause(); // Pausa el vídeo
            videoRef.current.currentTime = 0; // Reinicia el vídeo al principio
        }
    }, [playerState]);

    const closePlayer = (e) => {
        if (e.target === e.currentTarget) {
            setPlayerState(false);
        }
    };

    return (
        <div
            className={`video-player ${playerState ? '' : 'hide'}`}
            onClick={closePlayer}
        >
            <video ref={videoRef} src={video} autoPlay muted controls></video>
        </div>
    );
};

export default VideoPlayer;