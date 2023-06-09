import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Logo from '@components/layout/Logo'
import MenuButton from '@components/buttons/MenuButton'

const Header = () => {
    return (
        <header className="bg-white p-[20px] md:py-[30px] md:px-[90px] border-b flex justify-between items-center fixed w-full z-40">
            <div className="flex justify-start items-center hidden md:block">
                <h1 className="text-sm font-light uppercase text-text">design & development studio</h1>
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center ">
                <Logo/>
            </div>
            <MenuButton/>
        </header>
    );
};

export default Header;

