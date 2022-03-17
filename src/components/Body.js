import activities from '../images/activities.png'

function Body() {
    return (
        <div className='Body'>
            <div className='Body-Elements'>
                <img src={activities} alt="" height="350px" />
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts, all without leaving home.</p>
            </div>
        </div>
    )
}

export default Body;