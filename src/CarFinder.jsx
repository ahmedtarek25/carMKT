import {carData, userData} from './Data'
import { useEffect, useState } from 'react'
import {FiMoreHorizontal} from 'react-icons/fi'
import {Link, Navigate, redirect, useLocation, useParams} from 'react-router-dom'

export function CarFinder(props) {
    
    let search = props.search

    function setSearch(obj) {
        props.setSearch(obj)
    }
    // const [search, setSearch] = useState(location.state != null ? location.state : {
    //     make:'',model:'',yearRange:false,year:'',minYear:'',maxYear:'',maxKM:'',minPrice:'',maxPrice:''
    // })

    function handleChange(e) {
        if (e.target.name == 'yearRange') {
            setSearch({
                ...search,
                yearRange:!search.yearRange
            })
        } else if (e.target.name == 'make') {
            setSearch({
                ...search,
                make:e.target.value,
                model:''
            })
        }
        else {
            setSearch({
                ...search,
                [e.target.name]:e.target.value
            })
        }
    }

    function makeSelections() {
        let x = carData.map((item) => {
            return item.make
        })
        let y = x.filter((item, index) => x.indexOf(item) === index);
        
        return y.map((item) => {
            return <option key={item} value={item}>{item}</option>
        })
    }

    function modelSelections() {
        let x = carData.map((item) => {

            if (item.make == search.make) {
                return item.model
            }
        })
        let y = x.filter((item, index) => x.indexOf(item) === index);
        return y.map((item) => {
            return <option key={item} value={item}>{item}</option>
        })
    }

    function yearSelections() {
        let x = carData.map((item) => {
            if (item.make == search.make) {
                return item.year
            }
        })
        let y = x.filter((item, index) => x.indexOf(item) === index);
        return y.map((item) => {
            return <option key={item} value={item}>{item}</option>
        })
    }

    function handleClick(e) {
        
    }
    return (<div className="finder">
        <form className='container-form'>
            <div className='make-model'>
            <label htmlFor='make' className='finder-labels'>Make:</label>
            <select name="make" onChange={handleChange} className='select-class' value={search.make}>
                <option value=''>Any</option>
                {makeSelections()}
            </select>
            <label htmlFor='model' className='finder-labels'>Model:</label>
            <select name='model' disabled={search.make == "" ? true : false} onChange={handleChange} value={search.model}>
                <option value="">Any</option>
                {modelSelections()}
            </select>
            </div>
            <div className='years'>
            <label htmlFor='yearRange' className='expand-label'><FiMoreHorizontal size={30} color={search.yearRange ? 'blue' : 'black'}/></label>
            <input type='checkbox' name='yearRange' id='yearRange' checked={search.yearRange} onChange={handleChange}/>
            <label htmlFor='year' className='finder-labels'>Year:</label> 
            {search.yearRange ?
            <>
             <input type='number' name='minYear' placeholder='Min year' value={search.minYear} onChange={handleChange}/>
             <input type='number' name='maxYear' placeholder='Max year' value={search.maxYear} onChange={handleChange}/>
             </>
             :<select name="year" onChange={handleChange} value={search.year}>
                <option value=''>Any</option>
                {yearSelections()}
            </select>}
            </div>
            <div className='kms'>
            <label htmlFor='maxKM' className='finder-labels'>Max KMs:</label>
            <input type='number' name='maxKM' value={search.maxKM} onChange={handleChange} />
            </div>
            <div className='price'>
            <label htmlFor='minPrice' className='finder-labels'>Min Price:</label>
            <input type='number' name='minPrice' value={search.minPrice} onChange={handleChange} />
            <label htmlFor='maxPrice' className='finder-labels'>Max Price:</label>
            <input type='number' name='maxPrice' value={search.maxPrice} onChange={handleChange} />
            </div>
            <Link to='/search' state={search}>
                <button className='btt' onClick={handleClick}>Search</button>
            </Link>
        </form>
    </div>)
}

export function CarTile(props) {
    const carId = props.info.id
    const url = '/listing/' + carId
    return (<div className='car-tile'>
    <div className='car-image'>
        <img src={props.info.imgs[0]} />
    </div>
    <div className='car-info'>
        <h1>{props.info.make} {props.info.model} {props.info.year}</h1>
        <h2>${props.info.price}</h2>
        <h3>{props.info.kms} KMs</h3>
    </div>
    <Link to={url}><button className='more-info-btt'>More Info</button></Link>
</div>)
}

export function CarResult(props) {
    let search = props.search
    const [sorting, setSorting] = useState('listedOn')


    function queryCars() {
        let z = carData
        if (search.make != '') {
            z = z.filter((item) => {
                return search.make == item.make
            })
        }
        if (search.model != '') {
            z = z.filter((item) => {
                return search.model == item.model
            })
        }
        if (search.yearRange) {
            let min
            let max
            if (search.minYear == '') {
                 min = 0
            } else {
                 min = search.minYear
            }
            if (search.maxYear == '') {
                 max = 10000000
            } else {
                 max = search.maxYear
            }
            z = z.filter((item) => {
                return item.year >= min && item.year <= max
            })
        } else {
            if (search.year != '') {
                z = z.filter(item => {
                    return search.year == item.year
                })
            }
        }
        
        if (search.maxKM != '') {
            z = z.filter(item => {
                return item.kms <= search.maxKM
            })
        }
        
        let minP
        let maxP
        if (search.minPrice == '') {
            minP = 0
        } else {
            minP = search.minPrice
        }
        if (search.maxPrice == '') {
            maxP = 10000000000000000000000000000000000000
        } else {
            maxP = search.maxPrice
        }

        z = z.filter(item => {
            return item.price >= minP && item.price <= maxP
        })
        return z

    }

    let v = queryCars().sort((a,b) => {
        if (sorting == 'lprice') {
            if (a.price < b.price) {
                return -1
            }
        } else if (sorting == 'hprice') {
            if (a.price > b.price) {
                return -1
            }
        } else {
        if (a[sorting] > b[sorting]) {
            return 1
        } else {
            return -1
        }
    }
    })

    let y = v.map((item) => {
        return <CarTile info={item}/>
    })
    return (
        <div className='results-container'>
            <h1>Showing {y.length} results</h1>
            <div className='toolbar-container'>
                <select className='sorter' name='sorting' value={sorting} onChange={(e) => setSorting(e.target.value)}>
                    <option value='listedOn'>Sort by date listed</option>
                    <option value='year'>Sort by year</option>
                    <option value='lprice'>Sort by lowest price</option>
                    <option value='hprice'>Sort by highest price</option>
                </select>
            </div>
            <div className='results-container-2'>
                {y}
            </div>
        </div>
    )
}

export function FinderContainer(props) {
    return (<div className='finder-container'>
    <div className='finder-text-container'>
        <h1>Find your perfect car</h1>
    </div>
    <CarFinder search={props.search} setSearch={props.setSearch} />
</div>)
}

export function SearchPage() {
    useEffect(() => {
        document.title = 'Search listings'
    })
    const location = useLocation()
    const [search, setSearch] = useState(location.state != null ? location.state : {
        make:'',model:'',yearRange:false,year:'',minYear:'',maxYear:'',maxKM:'',minPrice:'',maxPrice:''
    })
    return (<>
        <FinderContainer search={search} setSearch={setSearch} />
        <CarResult search={search}/>
    </>
    )
}

export function SearchByType() {
    
    const params = useParams()
    const types = [
        'sedan', 'suv', 'sport', 'hatchback', 'coupe'
    ]
    const [navigateTo, setNavigate] = useState('')
    const [changeSite, setChangeSite] = useState(false)
    const [sorting, setSorting] = useState('listedOn')
    useEffect(() => {
        const str = params.id
        const str2 = params.id == 'suv' ? 'SUV' : str.charAt(0).toUpperCase() + str.slice(1);
        document.title = 'All ' + str2 + ' Cars'
    })
    let x = carData.filter(item => {
        return item.type == params.id
    })

    let v = x.sort((a,b) => {
        if (sorting == 'lprice') {
            if (a.price < b.price) {
                return -1
            }
        } else if (sorting == 'hprice') {
            if (a.price > b.price) {
                return -1
            }
        } else {
        if (a[sorting] > b[sorting]) {
            return 1
        } else {
            return -1
        }
    }
    })

    let y = v.map(item => {
        return <CarTile info={item} />
    })

    return (<div>
        {types.includes(params.id) ? null : <Navigate to='/'/>}
        <div className='results-container'>
            <div className='type-switcher-text'><h1>Showing all </h1>
            <select className='type-switcher' value={params.id} onChange={(e) => {
                setNavigate(e.target.value)
                setChangeSite(true)
            }}>
                <option value='sedan'>Sedan</option>
                <option value='suv'>SUV</option>
                <option value='coupe'>Coupe</option>
                <option value='sport'>Sport</option>
                <option value='hatchback'>Hatchback</option>
            </select></div>
            {changeSite ? <Navigate to={'/search/' + navigateTo} /> : null}
            <div className='toolbar-container'>
                <select className='sorter' name='sorting' value={sorting} onChange={(e) => setSorting(e.target.value)}>
                    <option value='listedOn'>Sort by date listed</option>
                    <option value='year'>Sort by year</option>
                    <option value='lprice'>Sort by lowest price</option>
                    <option value='hprice'>Sort by highest price</option>
                </select>
            </div>
            <div className='results-container-2'>
                {y}
            </div>
        </div>
    </div>)
}