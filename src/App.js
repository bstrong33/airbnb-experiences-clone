import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Card from './components/Card';
import data from './data';

function App() {
  const cards = data.map(card => {
    return <Card
      id={card.id}
      title={card.title}
      description={card.description}
      price={card.price}
      img={card.coverImg}
      stats={card.stats}
      location={card.location}
      openSpots={card.openSpots}
    />
  })
  return (
    <div className="App">
      <Navbar />
      <Body />
      <div className='all-cards'>
        {cards}
      </div>
    </div>
  );
}

export default App;