import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import ImageCarousel from "../ImageCarousel/ImageCarousel"

export default function Header() {

    return (
        <>
            <div className={"pt-44 flex flex-wrap"}>
                <div className="flex-col w-full md:w-1/2 mb-20">
                    <div className="text-8xl md:text-9xl mb-20">
                        smoke /<br />mirrors
                    </div>
                    <div className="text-3xl md:pr-20">
                        The newest premier salon, offering a variety of services from haircuts to full foils to permanent cosmetics. &nbsp;
                        <Link href="/contact"><motion.span whileHover={{ scale: 1.05, cursor: "pointer" }} className="text-black underline">Contact Us</motion.span></Link> now to set up an appointment
                    </div>
                </div>
                <div className="flex-col w-full md:w-1/2 rounded-xl">
                    <ImageCarousel />
                </div>
            </div>
        </>
    )
}