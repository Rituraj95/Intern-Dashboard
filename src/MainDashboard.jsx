import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Payy from './pages/payy'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import CreateProduct from './pages/CreateProduct'
import ProductHighlight from './pages/ProductHighlight'

function MainDashboard() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="products" element={<Products />} />
                </Route>

                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="payy" element={<Payy />} />
                </Route>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="CreateProduct" element={<CreateProduct />} />
                </Route>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="ProductHighlight" element={<ProductHighlight />} />
                </Route>
                
                
            </Routes>
        </Router>
    )
}

export default MainDashboard
