import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import RatingStars from '../components/RatingStars'
import Loader from '../components/Loader'
interface Product {
    title: string
    price: number
    description: string
    image: string
    rating: { rate: number }
}

const ProductDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState<Product | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                setLoading(false)
            })
    }, [id])

    if (loading) return <Loader />
    if (!product) return <div>Product not found</div>

    return (
        <div className="product-details">
            <button onClick={() => navigate(-1)}>Назад</button>
            <img src={product.image} alt={product.title} />
            <h1>{product.title}</h1>
            <RatingStars rating={product.rating.rate} />
            <p className="price">${product.price}</p>
            <p className="description">{product.description}</p>
        </div>
    )
}

export default ProductDetails
