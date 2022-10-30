import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";
import Collection from './pages/collections/collection';
import Index from './pages/Index';
import Delivery from './pages/information/Delivery';
import FAQ from './pages/information/FAQ';
import PrivacyPolicy from './pages/information/PrivacyPolicy';
import RefundPolicy from './pages/information/RefundPolicy';
import TermsOfService from './pages/information/TermsOfService';
import WaysOfPayment from './pages/information/WaysOfPayment';

import IndexTemplate from './templates/Index'

export default function App() {
    return (
        <Routes>
            <Route path="/" element={ <IndexTemplate /> }>
                <Route path="/" element={<Index />} />
                <Route path="/collections/:collectionId" element={<Collection />} />

                {/* INFORMATIONS */}
                <Route path="/faq" element={<FAQ />} />
                <Route path="/delivery" element={<Delivery />} />
                <Route path="/refund-policy" element={<RefundPolicy />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/ways-of-payment" element={<WaysOfPayment />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
            </Route>
        </Routes>
    )
}
