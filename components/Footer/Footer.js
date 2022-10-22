import Image from "next/image"
import { motion } from 'framer-motion'
import Link from "next/link"
import logo from "../../public/images/logo-white.png"
import bg from "../../public/images/abb-logo.png"

export default function Footer() {

    return (
        <footer
            className={"text-left py-24 bg-neutral-700 backdrop-blur-lg hero"}
            style={{

            }}>
            <div className="container mx-auto px-20 m-auto ">
                <div className="py-20">
                    <motion.div
                        whileHover={{ scale: 1.1 }}>
                        <Link href="/"><Image src={logo} alt="smoke/mirrors" width={200} height={50} className="w-10" /></Link>
                    </motion.div>
                </div>
                <div className="text-2xl">
                    801-555-5555
                    <br />
                    <br />
                    50 w Kensington Ave<br />
                    Salt Lake City, UT<br />
                    84104
                </div>
            </div>
        </footer>
    )
}