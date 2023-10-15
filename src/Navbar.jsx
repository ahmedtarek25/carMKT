import {Link} from 'react-router-dom'

function Navbar() {

    return (
        <div className="navbar">
            <Link className='link' to='/'>
                <h1 className="logo">carMKT</h1>
            </Link>
            <div className="navbtt">
                <Link className='link' to='search'><h1>Buy</h1></Link>
                <Link className='link' to='search/sedan'><h1>Types</h1></Link>
                <h1>Sell</h1>
            </div>
            <div className="login">
                <button className='loginbutton' onClick={e => alert('nothing here')}>Login/Signup</button>
            </div>
        </div>
    )
}
export default Navbar