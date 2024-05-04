// SideBar.tsx
import { useEffect, useRef } from 'react';

interface SideBarProps {
    show: boolean;
    onClose: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ show, onClose }) => {
    const sidebarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event: { target: any; }) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <>
            <div ref={sidebarRef} className={`sidebar flex flex-col bg-[#252525ff] min-h-screen w-1/2 fixed top-0 transition-transform duration-200 ease-in-out ${show ? 'left-0' : '-left-full'} z-10`}>
                <div className="btn-close min-h-10 flex flex-row align-middle pl-6 pt-4">
                    <button className='text-[#fff]' onClick={onClose}>Cerrar</button>
                </div>
                <div className="links flex flex-col justify-items-center align-middle pl-7 pt-7">
                    <a className="mt-5 text-[#fff]" href="">Inicio</a>
                    <a className="mt-5 text-[#fff]" href="">Series</a>
                    <a className="mt-5 text-[#fff]" href="">Peliculas</a>
                    <a className="mt-5 text-[#fff]" href="">Estrenos</a>
                    <a className="mt-5 text-[#fff]" href="">Tutoriales</a>
                </div>
            </div>
        </>
    )
}

export default SideBar;
