import { FC } from 'react'

interface RatingProps {
    rating: number
}

const RatingStars: FC<RatingProps> = ({ rating }) => {
    const roundedRating = Math.round(rating)

    return (
        <div className="rating">
            {Array.from({ length: 5 }, (_, index) => (
                <span
                    key={index}
                    className={`star ${index < roundedRating ? 'filled' : ''}`}
                >
                    ★
                </span>
            ))}
        </div>
    )
}

export default RatingStars
