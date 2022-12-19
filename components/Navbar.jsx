//Next Imports
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

//Style Imports
import logo from "../public/mariposa.svg"
import style from "../styles/navbar.module.css"

//Components Imports
import ResponsiveAppBar from "./ResponsiveAppBar";

export default function Navbar () {
    const route = useRouter().route
    return (
        <ResponsiveAppBar />
        // <nav className={ style.nav }>
        //     <Link className={ style.link }
        //         href='/'>
        //         <Image
        //             className={ style.image } 
        //             src={logo}/>
        //     </Link>
        //     <Link className={ route=='/tools' ? style.linkSelected : style.link }
        //         href='/tools'>
        //         Herramientas
        //     </Link>
        //     <Link className={ route=='/info' ? style.linkSelected : style.link }
        //         href='/info'>
        //         Info
        //     </Link>
        // </nav>
    )
}