import { motion } from "framer-motion"

export default function CardBody() {

    const cardInfo = [
        {
            num: 1, title: "Haircuts", text: "something even better baby", color: "black"
        },
        {
            num: 2, title: "Color", text: "something even better baby", color: "black"
        },
        {
            num: 3, title: "Permanent Cosmetics", text: "something even better baby", color: "black"
        },
        {
            num: 4, title: "Style", text: "something even better baby", color: "black"
        }
    ]
    let cardVariants = {
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
    }

    return (
        <div className="pb-20 pt-36 z-0">
            <div className="text-8xl text-center pb-20">Services we Provide</div>
            <motion.div
                className={"hidden lg:flex flex-wrap justify-between pb-44 overflow-hidden"}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}>
                {cardInfo.map((info, index) => (
                    <motion.div
                        variants={cardVariants}
                        key={index}
                        className={"mx-auto flex-col text-xl mb-20 rounded-2xl p-10 bg-gradient-to-tr from-white to-neutral-600 shadow-2xl text-black w-72"}>
                        <div className="h-1/2 pb-10 text-3xl sm:text-5xl flex flex-wrap">{info.title}</div>
                        <div className="h-1/2 pt-4 pb-4">{info.text}</div>
                    </motion.div>
                ))}
            </motion.div>
            <div
                className={"flex lg:hidden flex-wrap justify-between pb-44 overflow-hidden"}
            >
                {cardInfo.map((info, index) => (
                    <div
                        key={index}
                        className={"mx-auto text-xl mb-20 rounded-2xl p-10 bg-gradient-to-tr from-white to-neutral-600 shadow-2xl text-black w-72"}>
                        <div className="pb-10 text-3xl sm:text-5xl flex flex-wrap">{info.title}</div>
                        <div className="pb-4">{info.text}</div>
                    </div>
                ))}
            </div>
        </div>

    )
}