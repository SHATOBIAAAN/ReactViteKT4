import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import RatingStars from '../components/RatingStars'
import Loader from '../components/Loader'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

interface Product {
    id: number
    title: string
    price: number
    rating: { rate: number }
    image: string
}

const ProductsPage = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'https://fakestoreapi.com/products',
                )
                if (!response.ok) throw new Error('Ошибка загрузки')
                const data = await response.json()
                setProducts(data)
            } catch (error) {
                console.error('Ошибка:', error)
                navigate('/error')
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [navigate])

    if (loading) return <Loader />

    return (
        <>
            <Header />
            <div className="products-grid">
                {products.map(product => (
                    <Link
                        key={product.id}
                        to={`/product/${product.id}`}
                        className="product-card"
                    >
                        <img src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                        <RatingStars rating={product.rating.rate} />
                        <p>${product.price}</p>
                    </Link>
                ))}
            </div>
            <Footer />
            <ScrollToTop />
        </>
    )
}

export default ProductsPage
