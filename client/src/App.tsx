import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";
import Index from './pages/Index';

import IndexTemplate from './templates/Index'

export default function App() {
    return (
        <Routes>
            <Route path="/" element={ <IndexTemplate /> }>
                <Route path="/" element={<Index />} />
            </Route>
        </Routes>
    )
}
