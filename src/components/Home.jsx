import React from 'react'
import profilePic from '../assets/profilepic.jpg'

export const Home = () => {
    return (
        <div>
            <header className="relative items-center flex flex-row justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-black font-bold cursive leading-none lg:leading-snug home-name">
                    Hi I'm 
                    <span className="text-blue-navbar"> John Marquez</span>
                </h1>
                <div className="text-center mt-4">
                    <img className="w-1/4 mb-1/4 rounded-full border-solid border-black" src={profilePic} alt=""/>
                </div>
                <p className="text-center">
                    I'm a 4th Year Student at UBC studying Computer Engineering.
                </p>
            </header>
        </div>
        
        
    )
}
