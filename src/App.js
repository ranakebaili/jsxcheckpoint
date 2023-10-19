import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from './Image.js';
import Price from './Price.js';
import Description from './Description.js';
import Name from './Name';

const firstName = "Rana";

function App() {
  return (
    <div className="App">
      <Card className="Card" style={{ width: '18rem' }}>
        <Image className="Img"/>
      <Card.Body>
        <Card.Title className="Title"><Name/></Card.Title>
        <Card.Text>
          <Description/>
          <Price/>
        </Card.Text>
        <Button className='Button' variant="primary">Buy</Button>
      </Card.Body>
    </Card>
      <p>Hello, {firstName ? firstName : 'there'}!</p>
    </div>
  );
}

export default App;
