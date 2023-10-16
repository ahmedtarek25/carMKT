import { Link, NavLink } from "react-router-dom";
import {AiFillGithub} from 'react-icons/ai'
import {motion} from 'framer-motion'

export function Footer() {
    return (<div className="big-footer">
    <div className="footer">
        <div className="footer-logo">
            <div className="logo-box">
                <h1 className='logo'>carMKT</h1>
            </div>
        </div>
        
        <div className="quick-links">
            <ul>
                <li><NavLink style={({isActive}) => {return {color: isActive ? 'grey' : 'white'}}} to='/' className='quicklinks'>Home</NavLink></li>
                <li><NavLink style={({isActive}) => {return {color: isActive ? 'grey' : 'white'}}} to='/search' className='quicklinks'>Search listings</NavLink></li>
                <li><NavLink style={({isActive}) => {return {color: isActive ? 'grey' : 'white'}}} to='/search/sedan' className='quicklinks'>Search by car type</NavLink></li>
                <li><NavLink style={({isActive}) => {return {color: isActive ? 'grey' : 'white'}}} to='/sell'className='quicklinks'>Sell your car</NavLink></li>
            </ul>
        </div>
    </div>
    <div className="dev-area">
        <h1 className="dev">Website developed by <span><a className="linkaa" href='https://github.com/ahmedtarek25' target="_blank" rel="noopener noreferrer">Ahmed Tarek</a></span></h1>
        <motion.div whileHover={{scale:1.2}}>
            <a href="https://github.com/ahmedtarek25" target="_blank" rel="noopener noreferrer">
                <AiFillGithub color='white' size='20'/>
            </a>
        </motion.div>
        </div>
    </div>) 
}