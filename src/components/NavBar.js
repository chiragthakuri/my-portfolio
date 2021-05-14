import React from "react"
import {NavLink} from "react-router-dom"
import {SocialIcon} from "react-social-icons"

export default function NavBar(){
    return (
        <header className="bg-green-400">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact
                    activeclassName="text-white"
                    className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 
                    hover:text-green-800 text-4xl font-bold cursive tracking-widest">
                        HOME
                    </NavLink>
                    <NavLink to="post"
                    activeclassName="text-red-100 bg-red-700"
                    className="inflex-flex items-center py-3 px-3 my-6 rounded
                    text-red-100 hover:text-green-800">
                    
                        Blog Posts
                    </NavLink>
                    <NavLink to="project"
                    activeclassName="text-red-100 bg-red-700"
                    className="inflex-flex items-center py-3 px-3 my-6 rounded
                     text-red-100 hover:text-green-800">
                        Projects
                    </NavLink>
                    <NavLink to="about"
                    activeclassName="text-red-100 bg-red-700"
                    className="inflex-flex items-center py-3 px-3 my-6 rounded
                     text-red-100 hover:text-green-800">
                        About Me
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://www.facebook.com/chiragbmthakuri" className="mr-4" target="_blank" fgcolor="#fff" style={{height:35, width: 35}}/>
                    <SocialIcon url="https://www.twitter.com/chiragmalla" className="mr-4" target="_blank" fgcolor="#fff" style={{height:35, width: 35}}/>
                    <SocialIcon url="https://www.linkedin.com/in/chiragmalla/" className="mr-4" target="_blank" fgcolor="#fff" style={{height:35, width: 35}}/>
                    <SocialIcon url="https://soundcloud.com/chiragmalla" className="mr-4" target="_blank" fgcolor="#fff" style={{height:35, width: 35}}/>
                    
                </div>
            </div>
        </header>
    )
}