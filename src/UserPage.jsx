import { Navigate, useParams } from "react-router-dom"
import {carData, userData} from './Data'
import {FaUserCircle} from 'react-icons/fa'
import { CarTile } from "./CarFinder"

export function UserPage() {
    const params = useParams()

    function findUser() {
        for (let i = 0; i < userData.length; i++) {
            if (userData[i].username == params.id) {
                return userData[i]
            }
        }
    }
    
    function findUserListings() {
        let x = carData.filter(item => {
            return item.listedBy == params.id
        })
        return x.map(item => {
            return <CarTile info={item}/>
        })
    }

    const user = findUser()

    return (<div>
        {user != null ? '' : <Navigate to='/'/>}
        <div className="user-page-container">
            <div className="user-page-container-2">
                <div className="user-info">
                    <div className="user-icon">
                        <FaUserCircle size={200} color={'white'} />
                    </div>
                    <div className="user-details">
                        <h1>{params.id}</h1>
                        <h3>Joined on {user == null ? "" : user.joined.toLocaleDateString()}</h3>
                    </div>
                    <div className="contact-user">
                        <button>Contact user</button>
                    </div>
                </div>
                <div className="user-listings">
                    <h1>All {params.id} listings</h1>
                    <div className="car-tiles-listings">
                        {findUserListings()}
                    </div>
                </div>
            </div>
        </div>
    </div>)
}