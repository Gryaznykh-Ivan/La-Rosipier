import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Index() {
    return (
        <div className="app bg-bg min-h-screen text-sm">
            <Header />
            <div className="relative">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
