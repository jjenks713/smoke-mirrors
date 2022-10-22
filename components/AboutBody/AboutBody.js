import marcelle from "../../public/images/marcelle.jpg"
import josh from "../../public/images/josh.png"
import { Card } from "@mui/material"
import Image from "next/image"
import { motion } from "framer-motion"


export default function AboutBody() {

    const peopleArray = [
        {
            name: "Marcelle Hopkins", title: "Owner/Stylist", bio: "something about the person", image: marcelle
        },
        {
            name: "Josh Jenkin", title: "Owner", bio: "something about the person", image: josh
        },
        {
            name: "Marcelle Hopkins", title: "Owner/Stylist", bio: "something about the person", image: marcelle
        },
        {
            name: "Marcelle Hopkins", title: "Owner/Stylist", bio: "something about the person", image: marcelle
        },
        {
            name: "Marcelle Hopkins", title: "Owner/Stylist", bio: "something about the person", image: marcelle
        },
        {
            name: "Marcelle Hopkins", title: "Owner/Stylist", bio: "something about the person", image: marcelle
        }
    ]
    const cardVariants = {
        offscreen: {
            y: 300,
            rotate: -10,
            opacity: 0,
        },
        onscreen: {
            y: 50,
            rotate: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };
    return (
        <div className="text-center py-32">
            <div className="text-9xl pb-10">About</div>
            <div className="text-5xl pb-10">Meet our team</div>
            <motion.div className="flex flex-wrap justify-center"
                initial="offscreen"
                animate="onscreen"
            >
                {peopleArray.map((people, index) => (
                    <>
                        <motion.Card className="m-10 p-10 shadow-2xl rounded-2xl bg-gradient-to-tr from-white to-neutral-600"
                            variants={cardVariants}
                            key={index}>
                            <div className="rounded-2xl">
                                <Image className="rounded-2xl" src={people.image} alt={people.name} width={150} height={150} />
                            </div>
                            <div className="text-3xl">{people.name}</div>
                            <div className="text-2xl">{people.title}</div>
                            <div className="text-xl">{people.bio}</div>

                        </motion.Card>
                    </>
                ))}
            </motion.div>

        </div>
    )
}