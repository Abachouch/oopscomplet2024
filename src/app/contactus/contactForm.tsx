'use client';

import { useState } from "react";

export default function ContactForm() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function handleSubmit(e: any) {
        e.preventDefault()
       
        fetch('/api/v1/sendmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,email,message
            })
        }).then(res => res.json())
        .then(data => {
            console.log(data)
            setName('')
            setEmail('')
            setMessage('')
        })
        .catch(err => {
            console.log(err)
        })
    }
    return (
        <form onSubmit={(e)=> {
            handleSubmit(e)
        }} className="contact-form">
            <header className="contact-form-header">
                <h1 className="contact-from-heading">Contact us</h1>
                <p className="contact-form-subheading">Our team would love to hear from you.</p>
            </header>

            <div className="contact-form-body">
                <input onChange={(e) => { setName(e.currentTarget.value) }} value={name} type="text" className="contact-form-input" placeholder="Full Name" />
                <input  onChange={(e) => { setEmail(e.currentTarget.value) }} value={email}  type="email" className="contact-form-input" placeholder="Email" />
                <textarea  onChange={(e) => { setMessage(e.currentTarget.value) }} value={message}  placeholder="Message" className="contact-form-textarea" name="message" id="message" cols={30} rows={10}></textarea>
                <button type="submit" className="cta  " >Send Message</button>
            </div>
        </form>
    )
}