import image from './toyota-corolla-01-removebg-preview.png'
import audi from './audia5.png'
import jeep from './jeep.png'
import bmw from './bmw.png'
import golf from './golf.png'
import r8 from './r8.png'
import {motion} from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'


export function BuySection() {
    return (<div className="buy-car-background">
            
    <motion.div className='buy-info'
    initial={{opacity:0, x:-150}}
    whileInView={{opacity:1, x:0}}
    transition={{duration:0.7}}>
        <h1>Your next car is here</h1>
        <hr className='line'/>
        <h2>Find the perfect car for you from hundreds of user listed cars.</h2>
        <br />
        <br />
        <br />
        <Link className='link' to='/search'><button className='btt'>Find your next car</button></Link>

    </motion.div>
    <motion.img className='corolla' src={image}
    initial={{opacity:0, x:150}}
    whileInView={{opacity:1, x:0}}
    transition={{duration:0.7}} />
</div>)
}

export function SellSection() {
    return (<div className='sell-car-background'>
            <motion.img className='audi' src={audi} 
            initial={{opacity:0, x:-150}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:0.5}}/>
            <motion.div className='buy-info' 
            initial={{opacity:0, x:150}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:0.5}}>
                <h1>Sell your car easily</h1>
                <hr className='line'/>
                <h2>List your car and reach hundreds of potential buyers.</h2>
                <br />
                <br />
                <br />
                <button className='btt'>List your car now</button>
            </motion.div>
        </div>)
}

export function InfoAbout() {
    return (<div className='info-about'>
    <motion.div className='logo-box'
    initial={{opacity:0, x:-150}}
    whileInView={{opacity:1, x:0}}
    transition={{duration:0.5}}>
    <h1 className='logo'>carMKT</h1>
    </motion.div>
    <motion.div className='info-box'
    initial={{opacity:0, x:150}}
    whileInView={{opacity:1, x:0}}
    transition={{duration:0.5}}>
        <h2>What we do</h2>
        <hr className='line' />
        <p>We offer a platform that connects the buyer to the seller making it easier than ever to sell and buy used cars </p>
    </motion.div>
</div>)
}

export function FindByType() {
    const navigate = useNavigate()

    return (<div className='find-by-type'>
    <motion.h1 className='find-by-type-text'
    initial={{opacity:0, y:-150}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.5}}>
        Find by type
        </motion.h1>
    <div className='type-container'>
        <motion.div id='sedan-select' className='car-type'
        initial={{opacity:0, y:-150}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.6}} 
    onClick={(e) => navigate('/search/sedan')}
    whileHover={{y:-10}}>
        
            <div className='type-image'>
                <img src={image} />
            </div>
            <h1>Sedan</h1>
        </motion.div>
        <motion.div id='suv-select' className='car-type'
        initial={{opacity:0, y:-150}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.7}} 
    onClick={e => navigate('/search/suv')}
    whileHover={{y:-10}}>
            <div className='type-image'>
                <img src={jeep} />
            </div>
            <h1>SUV</h1>
        </motion.div>
        <motion.div id='hatchback-select' className='car-type'
        initial={{opacity:0, y:-150}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.8}} 
    onClick={e => navigate('/search/hatchback')}
    whileHover={{y:-10}}>
            <div className='type-image'>
                <img src={golf} />
            </div>
            <h1>Hatchback</h1>
        </motion.div>
        <motion.div id='coupe-select' className='car-type'
        initial={{opacity:0, y:-150}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.9}} 
    onClick={e => navigate('/search/coupe')}
    whileHover={{y:-10}}>
            <div className='type-image'>
                <img src={bmw} />
            </div>
            <h1>Coupe</h1>
        </motion.div>
        <motion.div id='sport-select' className='car-type'
        initial={{opacity:0, y:-150}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:1}} 
    onClick={e => navigate('/search/sport')}
    whileHover={{y:-10}}>
            <div className='type-image'>
                <img src={r8} />
            </div>
            <h1>Sport</h1>
        </motion.div>
    </div>
</div>)
}