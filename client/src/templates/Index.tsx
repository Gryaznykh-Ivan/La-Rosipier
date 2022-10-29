import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Index() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-1 mt-16">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
