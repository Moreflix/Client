import { useState, useEffect } from 'react';
import video1 from "/video/video1.mp4"
import video2 from "/video/video2.mp4"
import video3 from "/video/video3.mp4"


const videos = [
    { src: video1, title: 'Titulo 1', description: 'Descripcion 1' },
    { src: video2, title: 'Titulo 2', description: 'Descripcion 2' },
    { src: video3, title: 'Titulo 3', description: 'Descripcion 3' },
    // Añade más videos según sea necesario
];


const Carouseltest = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % videos.length);
        }, 5000); // Cambia el video cada 3 segundos
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-full w-full">
            {videos.map((video, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                    <video className="w-full h-full object-cover" src={video.src} autoPlay muted loop />
                    <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent p-4 w-full">
                        <p className="text-white">{video.title}</p>
                        <p className="text-white">{video.description}</p>
                    </div>
                </div>
            ))}
            <div className="absolute bottom-0 w-full flex justify-center space-x-2 p-4">
                {videos.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full ${index === activeIndex ? 'bg-white' : 'bg-gray-500'}`}
                        onClick={() => setActiveIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carouseltest;



