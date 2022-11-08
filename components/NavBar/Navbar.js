import logo from "../../public/images/logo-white.png"
import Image from "next/image"
import Link from "next/link"
import { motion } from 'framer-motion'
import NavTabs from "./NavTabs"

export default function Navbar() {

    return (
        <>
            <div className={"z-50 h-32 sticky top-0 flex backdrop-opacity-10 backdrop-blur-sm bg-gradient-to-r from-neutral-800 to-neutral-900"}>
                <div className={"container mx-auto flex m-auto justify-between align-middle"}>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        className={"cursor-pointer"}
                    >
                        <Link href="/"><Image src={logo} alt="smoke/mirrors" width={250} height={50} className="w-10" /></Link>
                    </motion.div>
                    <div className={"flex align-middle text-2xl"}>
                        <NavTabs />
                    </div>
                </div>

            </div>
        </>
    )
}