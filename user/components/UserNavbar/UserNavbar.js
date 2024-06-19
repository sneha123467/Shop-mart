import React, { useContext,useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaHeart } from 'react-icons/fa';
import logo from '../../../Assets/logo.png';
import cart_icon from '../../../Assets/cart_icon.png';
import './UserNavbar.css';
import { CartContext } from '../CartContext';

const UserNavbar = () => {
    const [menu, setMenu] = useState("shop");
    const { cart } = useContext(CartContext);
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="" />
                <p>SHOP SMART</p>
            </div>

            <ul className='nav-menu'>
                <li onClick={() => setMenu("home")}><Link to='/'>Home</Link>{menu === "home" ? <hr /> : null}</li>
                <li onClick={() => setMenu("groceries")}><Link to='/groceries'>Groceries</Link>{menu === "groceries" ? <hr /> : null}</li>
                <li onClick={() => setMenu("clothes")}><Link to='/clothes'>Clothes</Link>{menu === "clothes" ? <hr /> : null}</li>
                <li onClick={() => setMenu("accessories")}><Link to='/accessories'>Accessories</Link>{menu === "accessories" ? <hr /> : null}</li>
            </ul>

            <div className='nav-login-cart'>
                <button><Link to='/login'>Login</Link></button>
                <Link to='/wishlist'><span className='wishlist-icon'><FaHeart /></span></Link>
                <Link to='/cart'><img src={cart_icon} alt="" />({cart.length})</Link>
                <div className="nav-cart-count">0</div>
                <Link to='/user'><span className='user-icon'><FaUser /></span></Link>
            </div>
        </div>
    );
};

export default UserNavbar;
