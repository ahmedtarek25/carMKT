import {FaUserCircle} from 'react-icons/fa'
import {Link, useParams, Navigate} from 'react-router-dom'
import {MdOutlineContactSupport} from 'react-icons/md'
import { carData } from './Data'
import { CarTile } from './CarFinder'
import { useEffect } from 'react'

export function CarPage() {
    const params = useParams()

    function getCar() {
        for (let i = 0; i < carData.length; i++) {
            if (carData[i].id == params.id) {
                return carData[i]
            }
        }
    }


    const car = getCar()

    function getSimilarCars() {
        const x = carData.filter(item => {
            return car.type == item.type && car.id != item.id
        })

        const xa = x.sort((a,b) => {
            if (Math.random() > 0.5) {
                return -1
            } else {
                return 1
            }
        })

        return [xa[0], xa[1], xa[2]]
    }

    let z = getSimilarCars().map(item => {
        return <CarTile info={item}/>
    })

    useEffect(() => {
        document.title = car.make + " " + car.model + " " + car.year
    })

    const url = '/u/' + car.listedBy

    return (<div className="container-car-page">
        {getCar() == null ? <Navigate to='/' /> : ''}
        <div className="info-container">
            <div className="car-img-container">
                <img className='car-img-img' src={car.imgs[0]} />
            </div>
            <div className="car-info-container">
                <h1 className='car-title'>{car.make} {car.model} {car.year}</h1>
                <div className='user'><FaUserCircle color='#646262' /><h3>listed by <Link className='link' to={url}><span title='View user profile' style={{color: 'white'}}>{car.listedBy}</span></Link></h3></div>
                <div className='car-description'>
                    <h1 className='car-description-title'>Description</h1>
                    <div className='description-container'>
                        <div className='description-pill'>
                            <h1 className='description-small-title'>Used since:</h1>
                            <div className='description-info-container'><h1>{car.year}</h1></div>
                        </div>
                        <div className='description-pill'>
                            <h1 className='description-small-title'>Kms travelled:</h1>
                            <div className='description-info-container'><h1>{car.kms} KM</h1></div>
                        </div>
                        <div className='description-pill'>
                            <h1 className='description-small-title'>Listed on:</h1>
                            <div className='description-info-container'><h1>{car.listedOn.toLocaleDateString()}</h1></div>
                        </div>
                        <div className='description-pill'>
                            <h1 className='description-small-title'>Asking price:</h1>
                            <div className='description-info-container-price'><h1>${car.price}</h1></div>
                        </div>
                    </div>
                </div>
                <button className='contact-button'><MdOutlineContactSupport />Contact seller</button>
            </div>
            <div className='similiar-cars-container'>
                <h1>Similar cars</h1>
                <div className='car-tiles-similar'>{z}</div>
            </div>
        </div>
    </div>)
}