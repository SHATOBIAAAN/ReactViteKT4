import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import ProductDetails from './pages/ProductDetails'
import NotFoundPage from './pages/NotFoundPage'
import ScrollToTop from './components/ScrollToTop'

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Navigate to="/products" />,
        },
        {
            path: '/product/:id',
            element: <ProductDetails />,
        },
        {
            path: '/products',
            element: <ProductsPage />,
        },
        {
            path: '*',
            element: <NotFoundPage />,
        },
    ],
    {
        basename: import.meta.env.BASE_URL,
    },
)

function App() {
    return (
        <>
            <RouterProvider router={router} />
            <ScrollToTop />
        </>
    )
}

export default App
