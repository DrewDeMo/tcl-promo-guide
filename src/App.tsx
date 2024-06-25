import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary mb-4">Welcome to TCL Promo</h1>
        <p className="text-lg">Browse our extensive catalog of promotional materials.</p>
      </main>
      <Footer />
    </div>
  )
}

export default App
