import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BsInfoSquare} from 'react-icons/bs'
import {DiCodeBadge} from 'react-icons/di'
import {AiOutlineContacts} from 'react-icons/ai'


const Nav = () => {
    const [activeNavItem,setActiveNavItem]=React.useState(0)
    
    return (
        <nav>
            <ul>
             <li>
                    <a  href="#/"
                        onClick={()=>{
                           setActiveNavItem(0)
                       }}
                       style={{
                                color:activeNavItem===0?"blue":""
                        }}
                    >
                        <AiOutlineHome />
                    </a>
                </li>
                <li>
                    <a href="#about"
                       onClick={()=>{
                           setActiveNavItem(1)
                       }}     
                       style={{
                           color:activeNavItem===1?"blue":""
                       }}                                              
                    >
                        <BsInfoSquare />
                    </a>
                </li>
                <li>
                    <a  href="#knowledges"
                        onClick={()=>{
                           setActiveNavItem(2)
                       }}
                       style={{
                           color:activeNavItem===2?"blue":""
                       }}
                    >
                        <DiCodeBadge />
                    </a>
                </li>
                <li>
                    <a  href="#contact"
                        onClick={()=>{
                           setActiveNavItem(3)
                       }}
                       style={{
                           color:activeNavItem===3?"blue":""
                       }}
                    >
                        <AiOutlineContacts />
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
