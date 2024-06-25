import React from 'react'

const Header: React.FC = () => {
    return (
        <header className="bg-primary text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">TCL Promo</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">Products</a></li>
                        <li><a href="#" className="hover:underline">About</a></li>
                        <li><a href="#" className="hover:underline">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
