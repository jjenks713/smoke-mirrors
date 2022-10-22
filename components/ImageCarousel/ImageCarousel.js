import Button from "@mui/material/Button"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function ImageCarousel() {

    const [indexTab, setIndex] = useState(0);

    const imageArray = [//eslint-disable-line
        {
            url: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1136&q=80",
            alt: "a thing"
        },
        {
            url: "https://images.squarespace-cdn.com/content/v1/5edee990a8696a7b8618fe6d/1592969100838-LFYK2NLO6IOIP3XJ2IUA/salon.jpg",
            alt: "a thing"
        },
        {
            url: "https://images.squarespace-cdn.com/content/v1/54638131e4b00e059c25efd0/1623958573608-1VUYW4OHISCHR9OZTUG9/M1DTW_6SalonDetroit_5.jpg",
            alt: "a thing"
        },
    ]

    useEffect(() => {
        const lastIndex = imageArray.length - 1
        if (indexTab < 0) {
            setIndex(lastIndex)
        }
        if (indexTab > lastIndex) {
            setIndex(0)
        }
    }, [indexTab, imageArray])

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(indexTab + 1)
        }, 5000);
        return () => clearInterval(slider)
    }, [indexTab])

    return (
        <>
            <div>
                {/* <Button onClick={() => setIndex(indexTab - 1)}>Left</Button> */}
                {imageArray.map((image, index) => (
                    <>
                        {indexTab == index ?
                            <motion.div
                                initial={{ rotate: -10, height: 0, opacity: 0 }}
                                animate={{ rotate: 0, height: "100%", opacity: 1 }}
                                transition={{ duration: .5, type: "spring", stiffness: 100 }} key={index}>
                                <img //eslint-disable-line
                                    src={image.url}
                                    alt={image.alt}
                                    className="w-full rounded-2xl shadow-lg"
                                />
                            </motion.div>
                            :
                            null
                        }
                    </>
                ))}

                {/* <Button onClick={() => setIndex(indexTab + 1)}>Right</Button> */}
            </div>
        </>
    )
}