'use client';

import { useState } from "react";

export default function SubscribeForm() {
    const [email, setEmail] = useState("")
    
    const handleUbmit = (e: any) => {
        e.preventDefault()
        fetch("/api/v1/subscribe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify({email})
            }).then((res) => {
                if (res.status === 200) {
                    setEmail("")
                    // alert("Thank you for subscribing")
                } else {
                    // alert("Something went wrong")
                }
            })
    }
    
    return (
    <form action="/" method="POST" className="footer-subscribe-form" onSubmit={(e)=> {
        handleUbmit(e)
    }}>
        <input onChange={(e)=> { 
            setEmail(e.target.value)
          }} className="footer-subscribe-input" type="email" name="email" id="email"
          placeholder="Enter your email" aria-label="your email address" value={email} />
        <button className="footer-subscribe-button" type="submit">Subscribe</button>
      </form>
    )
}