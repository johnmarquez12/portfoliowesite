import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Navbar = () => {
    return (
        <header className="bg-blue-navbar">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink 
                        to="/" 
                        exact 
                        activeClassName="text-white"
                        className="inflex-flex items-center py-6 px-3 mr-4 text-white hover:text-blue-background text-4xl font-bold cursive tracking-widest">
                        John Marquez
                    </NavLink>
                    <NavLink 
                        to="/post" 
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-black"
                        activeClassName="font-bold text-blue-background bg-blue-300 opacity-50">
                        Blogs
                    </NavLink>
                    <NavLink 
                        to="/project" 
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-black"
                        activeClassName="font-bold text-blue-background bg-blue-300 opacity-50">
                        Projects
                    </NavLink>
                    <NavLink 
                        to="/about" 
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-black"
                        activeClassName="font-bold text-blue-background bg-blue-300 opacity-50">
                        About
                    </NavLink>
                </nav>
                <div className="inline-flex items-center text-2xl py-3 px-3 my-6">
                    <Link className="hover:text-blue-linkedin" to={{ pathname: "https://www.linkedin.com/in/john-marquez-a80b1216a/" }} target="_blank">
                        <FontAwesomeIcon className="mr-4" icon={faLinkedin}/>  
                    </Link>
                    <Link className="hover:text-white" to={{ pathname: "https://github.com/johnmarquez12" }} target="_blank">
                        <FontAwesomeIcon className="mr-4" icon={faGithub}/>  
                    </Link>
                </div>
            </div>
        </header>
    )
}
