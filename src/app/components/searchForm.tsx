'use client'

import CityPicker from "./cityPicker";
import FilePicker from "./filesPicker";
import { useState, useEffect } from 'react'


export default function SearchForm(){

    const [fullName, setFullName] = useState('');
    const [age, setAge] = useState('');
    const [location, setLocation] = useState('');
    const [gender, setGender] = useState('male');

    const [formError, setFormError] = useState<{ fullName?: string, age?: string }>({ fullName: undefined, age: undefined })

    useEffect(() => {
        setFullName(localStorage.getItem('fullname') || '');
        setAge(localStorage.getItem('age') || '');
        setLocation(localStorage.getItem('location') || '');
        setGender(localStorage.getItem('gender') || 'male');
    }, [])

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const errors: { fullName?: string, age?: string } = {};

        // localStorage.setItem('age' , age) 
        // localStorage.setItem('fullname' , fullName) 
        // localStorage.setItem('location' , location) 
        // localStorage.setItem('gender' , gender)
        if (!fullName.trim()) {
            errors.fullName = 'Please enter your name';
            return;
        }
        if (!age.trim()) {
            errors.age = 'Please enter your age';
        } else if (isNaN(parseInt(age)) || +age < 18) {
            errors.age = 'Please enter a valid age (must be 18 or older)';
        }
        if (Object.keys(errors).length === 0) {
            // Form is valid, proceed with your form submission logic
            fetch('/api/v1/search', {
                "method": "POST",
                "headers": {
                    "content-type": "application/json",
                },
                "body": JSON.stringify({
                    searchQuery : {
                        name : fullName,
                    age : age,
                    gender :gender ,
                    location : location,
                    }
                })
            }).then(res => res.json())
                .then(data => {
                    console.log(data)
                    window.location.href = "/teaser-result"
                })
                .catch(err => console.log(err)) 

           

        } else {
            // Form is invalid, update the state with errors
            setFormError(errors);
        }
    }

    return(
        <form onSubmit={handleSubmit} action="search" className="primary-search">
        <div className="search-form-card">
            <header className="primary-search-header">
                <h1 className="primary-search-heading">Search for partner</h1>
                <p className="primary-search-subheading">Enter the name and the age of you partner and we will search in all
                    dating app and get back you with accurate result</p>
            </header>

            <div className="search-form-inputes">
                <input onBlur={(e) => {
                    if (e.currentTarget.value.trim() === '') {
                        setFormError({ fullName: "name is recuired" })
                    }
                    else {
                        setFormError({ fullName: undefined })
                    }
                }} onChange={(e) => { setFullName(e.currentTarget.value) }} value={fullName} className={formError.fullName ? 'invalid' : ''} aria-label='full name' required placeholder="Name" type="text" name="fullname" id="fullname" />
                {formError.fullName && <p className="error-message">{formError.fullName}</p>}
                <input onChange={(e) => { 
                    const value =  parseInt(e.currentTarget.value , 10) | 0 ;
                    if (  value <= 120) {
                       setAge(e.currentTarget.value)
                      }
                    //setAge(e.currentTarget.value)

                    }} className={formError.age ? 'invalid' : ''} value={age} aria-label='Age' required placeholder="Age" type="number" max="120" min="18" name="age" id="age" />
                {formError.age && <p className="error-message">{formError.age}</p>}

                <div className="search-sex">
                    <span className="search-sex-container">
                        <input className="search-sex-radio" onChange={(e)=> {
                            setGender(e.currentTarget.value)
                        }} checked={gender === 'male'} type="radio" name="sex" id="male" value="male" />
                        <span className="search-sex-label">Male</span>
                    </span>
                    <span className="search-sex-container">
                        <input className="search-sex-radio"  onChange={(e)=> {
                            setGender(e.currentTarget.value)
                        }}  checked={gender === 'female'} type="radio" name="sex" id="female" value="female" />
                        <span className="search-sex-label">Female</span>
                    </span>
                </div>

                < CityPicker selectedCity={location} onCitySelected={(city: string) => {
                    setLocation(city)
                }} />

            </div>
        </div>
        <FilePicker/>
        <button  type='submit' className="cta primary-search-form-cta">Start Searching</button>
    </form>
    )
}