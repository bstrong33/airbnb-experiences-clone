function Card(props) {
    return (
        <div className='Card-container'>
            <img src={require(`../images/${props.img}`)} alt="" className='card-image'/>
            <div className='rating-container'>
                <img src={require("../images/star.png")} alt="" height="20px" />
                <span>{props.stats.rating}</span>
                <span className='grey'>({props.stats.reviewCount}) • </span>
                <span className='grey'>{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className='bold'>From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card;