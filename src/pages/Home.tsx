import React from 'react'

const Home: React.FC = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-primary mb-4">Welcome to TCL Promo</h1>
            <p className="text-lg mb-4">Discover our wide range of promotional materials to boost your brand.</p>
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors">
                Browse Products
            </button>
        </div>
    )
}

export default Home
