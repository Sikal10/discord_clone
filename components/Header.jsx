import Image from "next/image";
import logo from "../public/images/discord.svg";
import {MdMenu} from "react-icons/md";

const Header = () => {
    return (
        <header className={"bg-[#295de7] py-4 px-5 lg:px-28 flex justify-between items-center"}>
            {/*left*/}
            <figure className={"relative w-32 h-12"}>
                <Image layout={"fill"} src={logo} />
            </figure>

            {/*middle hidden on mobile*/}
            <nav className={"hidden lg:flex space-x-6"}>
                <button className={"nav-links"}>Download</button>
                <button className={"nav-links"}>Why Discord?</button>
                <button className={"nav-links"}>Nitro</button>
                <button className={"nav-links"}>Safety</button>
                <button className={"nav-links"}>Support</button>
            </nav>

            {/*right*/}
            <section className={"flex items-center space-x-3"}>
                <button className={"rounded-full font-medium whitespace-nowrap transition duration-200 ease-in-out hover:text-[#5825f6] shadow-2xl bg-white py-[7px] px-[16px] lg:px-4 text-xs md:text-sm"}>Login</button>
                <MdMenu className={"lg:hidden w-[40px] h-[40px] text-white"} />
            </section>
        </header>
    );
};

export default Header;