'use client';
import {useState } from 'react'
import CityPicker from './cityPicker';

export default function HomeSearchForm(){

    const [gender , setGender] = useState('male') ; 
    const [fullName , setFullName] = useState('') ;
    const [age , setAge] = useState('') ;
    const [location , setLocation] = useState('') ;
    
    function handleSubmit(event : React.MouseEvent<HTMLButtonElement>){
        event.preventDefault() ;
        localStorage.setItem('fullname' , fullName) ;
        localStorage.setItem('age' , age) ;
        localStorage.setItem('location' , location) ;
        localStorage.setItem('gender' , gender) ;
        window.location.href = "/search" ;
    } 

    return (
        <form id="homeSearch" action="" method="" className="search-form">
                    <input value={fullName} onChange={(e)=> {
                        setFullName(e.currentTarget.value)
                    }} placeholder="Full Name" type="text" name="fullname" id="fullname" className="search-input search-name"
                        aria-label="Full Name" />
                    <fieldset className="search-form-row">
                        <input value={age} onChange={(e)=> {
                            setAge(e.currentTarget.value)
                        }} placeholder="Age" type="number" min={1} max="100" name="age" id="age" className="search-input search-age"
                            aria-label="Age" />
                            
                        <div className="search-sex">
                            <span className="search-sex-container">
                                <input className="search-sex-radio" aria-label='male' onChange={(e)=> {
                                    setGender(e.currentTarget.value)
                                }} checked={gender === 'male'} type="radio" name="sex" id="male" value="male" />
                                <span className="search-sex-label">Male</span>
                            </span>
                            <span className="search-sex-container">
                                <input className="search-sex-radio" aria-label='Female'  onChange={(e)=> {
                                    setGender(e.currentTarget.value)
                                }}  checked={gender === 'female'} type="radio" name="sex"  id="female" value="female" />
                                <span className="search-sex-label">Female</span>
                            </span>
                        </div>
                    </fieldset>
   

                    <CityPicker selectedCity="" onCitySelected={(city:string)=> {
                        setLocation(city)
                    }} />
                    <button onClick={ handleSubmit} className="search-submit" id="homeSearchBtn" >Start Searching</button>
                </form>
    )
}