import React from 'react'
import { Link } from 'react-router-dom'
import { getCurrentUser, logout } from '../services/auth'

const Header: React.FC = () => {
    const currentUser = getCurrentUser();

    const handleLogout = () => {
        logout();
        window.location.reload();
    };

    return (
        <header className="bg-primary text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">TCL Promo</Link>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link to="/" className="hover:underline">Home</Link></li>
                        <li><Link to="/products" className="hover:underline">Products</Link></li>
                        <li><Link to="/about" className="hover:underline">About</Link></li>
                        {currentUser ? (
                            <>
                                <li><Link to="/dashboard" className="hover:underline">Dashboard</Link></li>
                                <li><button onClick={handleLogout} className="hover:underline">Logout</button></li>
                            </>
                        ) : (
                            <>
                                <li><Link to="/login" className="hover:underline">Login</Link></li>
                                <li><Link to="/register" className="hover:underline">Register</Link></li>
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
