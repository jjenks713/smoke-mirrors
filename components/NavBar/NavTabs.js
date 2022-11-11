import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

export default function NavTabs({ fixed }) {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <div className={"absolute right-14 pt-1"} >

            <button
                className="z-20 relative left-full mr-10 text-white cursor-pointer text-xl leading-none py-1 border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
            >
                <MenuIcon className="text-4xl" />
            </button>
            <div
                className={
                    "lg:flex flex-grow items-center" +
                    (navbarOpen ? " flex bg-white lg:bg-transparent text-black lg:text-white p-4 rounded-lg" : " hidden")
                }
                id="example-navbar-danger"
            >
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto text-right">
                    <li className="nav-item">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className={"py-1 lg:pr-10 m-auto"}>
                            <Link href="/about">about</Link>
                        </motion.div>
                    </li>
                    <li className="nav-item">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className={"py-1 lg:pr-10 m-auto"}>
                            <Link href="/contact"> contact</Link>
                        </motion.div>
                    </li>
                    <li className="nav-item">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className={"py-1 m-auto"}>
                            <Link href="/contact"> make reservation</Link>
                        </motion.div>
                    </li>
                </ul>
            </div>
        </ div>
    );
}