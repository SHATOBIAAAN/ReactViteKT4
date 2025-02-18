import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            })
    }, [])

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
