import { TextField, Button } from '@mui/material'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { send } from 'emailjs-com';

export default function ContactForm() {
    const [toSend, setToSend] = useState({
        from_name: '',
        phone_number: '',
        message: '',
        reply_to: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            process.env.PROJECT_ID,
            process.env.TEMPLATE_ID,
            toSend,
            process.env.USER_ID
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert("Your email has been sent successfully, we will respond as soon as possible")
                setToSend({
                    from_name: '',
                    phone_number: '',
                    message: '',
                    reply_to: '',
                })
            })
            .catch((err) => {
                console.log('FAILED...', err);
                alert("There was an error, please try again")
            });
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };


    return (
        <form className='flex flex-col text-center' onSubmit={onSubmit}>
            <div className='py-8'>
                <TextField value={toSend.from_name} onChange={handleChange} name='from_name' type={"name"} id="standard-basic" label="name" variant="standard" required />
            </div>
            <div className='py-8'>
                <TextField value={toSend.phone_number} onChange={handleChange} name='phone_number' type={"tel"} id="standard-basic" label="phone number" variant="standard" required />
            </div>
            <div className='py-8'>
                <TextField value={toSend.reply_to} onChange={handleChange} name='reply_to' type={"email"} id="standard-basic" label="email" variant="standard" required />
            </div>

            <div className='py-8'>
                <TextField value={toSend.message} onChange={handleChange} name='message' type={"text"} id="standard-basic" label="message" variant="standard" required />
            </div>

            <motion.div whileHover={{ scale: 1.1 }} className='p-12'>
                <button className="border-solid border-2 border-neutral-500 py-2 px-10 rounded-2xl">Submit</button>
            </motion.div>
        </form>
    )
}