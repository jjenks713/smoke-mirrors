import { TextField, Button } from '@mui/material'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    console.log(name)

    function formSubmit(event) {
        console.log(name, phone, email, message)
    }


    return (
        <form className='flex flex-col text-center' onSubmit={formSubmit}>
            <div className='py-8'>
                <TextField value={name} onChange={(e) => setName(e.target.value)} type={"text"} id="standard-basic" label="name" variant="standard" required />
            </div>
            <div className='py-8'>
                <TextField value={phone} onChange={(e) => setPhone(e.target.value)} type={"tel"} id="standard-basic" label="phone" variant="standard" required />
            </div>
            <div className='py-8'>
                <TextField value={email} onChange={(e) => setEmail(e.target.value)} type={"email"} id="standard-basic" label="email" variant="standard" required />
            </div>
            <div className='py-8'>
                <TextField value={message} onChange={(e) => setMessage(e.target.value)} type={"text"} id="standard-basic" label="message" variant="standard" required />
            </div>

            <motion.div whileHover={{ scale: 1.1 }} className='p-12'>
                <button className="border-solid border-2 border-neutral-500 py-2 px-10 rounded-2xl">Submit</button>
            </motion.div>
        </form>
    )
}