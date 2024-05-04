// NavBar.tsx
interface NavBarProps {
    onMenuClick: () => void;
    onLoginClick: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ onMenuClick, onLoginClick }) => {
    return (
        <>
            <div className="navegation flex flex-row justify-between h-12 bg-[#252525ff]">
                <div className="btn-menu w-fit flex flex-row pl-4">
                    <button onClick={onMenuClick} className="w-auto text-[#fff]">Menu</button>
                </div>
                <div className="search-profile flex flex-row h-full">
                    <input className=" outline-none rounded-md text-md border-none w-28 h-1/2 mt-3 mr-4 border bg-[#cfcfcf] p-2" type="search" />
                    <img onClick={onLoginClick} className=" size-2/3 mt-2 mr-3 cursor-pointer" src="/img/profile.svg" alt="" />
                </div>
            </div>
        </>
    )
}

export default NavBar;
