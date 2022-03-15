import katie from './katie.png'
import star from './star.png'

function Card() {
    return (
        <div>
            <img src={katie} alt="" />
            <div className='rating-container'>
                <img src={star} alt="" />
                <p>5.0</p>
                <p>(6) - USA</p>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <div>
                <p>From $136</p>
                <p>/ person</p>
            </div>
        </div>
    )
}

export default Card;