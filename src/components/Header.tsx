import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
    return (
        <header className="bg-primary text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">TCL Promo</Link>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link to="/" className="hover:underline">Home</Link></li>
                        <li><Link to="/products" className="hover:underline">Products</Link></li>
                        <li><Link to="/about" className="hover:underline">About</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
