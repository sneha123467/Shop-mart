import React from 'react';
import { useLocation } from 'react-router-dom';
import UserNavbar from "./components/UserNavbar/UserNavbar.js";
import AdminNavbar from '../admin/AdminNavbar/AdminNavbar.js';

const Navbar = () => {
    const location = useLocation();
    const isAdminPage = location.pathname.startsWith('/admin');

    return (
        <>
            {isAdminPage ? <AdminNavbar /> : <UserNavbar />}
            
        </>
    );
};

export default Navbar;
