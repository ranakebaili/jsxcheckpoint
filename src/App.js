import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from './Image.js';
import Price from './Price.js';
import Description from './Description.js';
import Name from './Name';

const firstName = "Rana";
const img2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ09-oUv5xlwZKWGUAFRzDd961ROsCGY6ajtXFW9Rix0drMCJHj-3qb&usqp=CAE&s"

function App() {
  return (
    <div className="App">
      <Card className="Card" style={{ width: '18rem' }}>
        {/* product`s image */}
        <Image className="Img"/>
      <Card.Body>
        {/*Name */}
        <Card.Title className="Title"><Name/></Card.Title>
        <Card.Text>
                  {/*description and price */}
          <Description/>
          <Price/>
        </Card.Text>
                {/*Button */}
        <Button className='Button' variant="primary">Buy</Button>
      </Card.Body>
    </Card>
            {/*Name condition */}
      <p>Hello, {firstName ? firstName : 'there'}!</p>
      {firstName && (
  <img className="Img2" src={img2} alt="welcome" />
)}

    </div>
  );
}

export default App;
