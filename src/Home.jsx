
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import {CarFinder, FinderContainer } from './CarFinder'
import {BuySection, FindByType, InfoAbout, SellSection} from './HomeComp'


function Home() {
    const [search, setSearch] = useState({
        make:'',model:'',yearRange:false,year:'',minYear:'',maxYear:'',maxKM:'',minPrice:'',maxPrice:''
    })
    useEffect(() => {
        document.title = 'Home'
    }) 

    return (<div>
        <BuySection />
        <SellSection />
        <InfoAbout />
        <FindByType />
        <FinderContainer search={search} setSearch={setSearch}/>
    </div>)
}

export default Home