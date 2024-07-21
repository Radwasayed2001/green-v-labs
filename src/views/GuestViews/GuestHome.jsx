import { Card, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Footer from './Footer';
import Lab from "../../assets/NewLab4.png"
// import './GuestHome.css';  // Make sure to create this CSS file

export default function GuestHome() {
  return (
    <div className='bg-light'>
      <Container>
      <div className="row h-100">
        <div className="oval-shape col-md-4 animation">
          <img src={Lab} alt=""style={{
            maxWidth: "100%",
            height: "400px",
            borderRadius: "50%",
          }} />
        </div>
        <div className="col-md-8 m-md-auto mt-5">
          <h1>Join GreenVLabs Now</h1>
          <p>Get ready to move students from a one-time science experiment to practicing any time you want! Feel the full power of virtual experiments</p>
          <Button variant="outline-dark">Request a Demo</Button>
        </div>
      </div>
      
        <div className="my-5 pt-5 text-center" style={{borderTop: "solid 1px #eee"}}>
          <h1>Guide the Best Science Lab Simulation Experience Ever</h1>
        </div>
        <div className="mt-3 row container py-5" style={{display: "flex", justifyContent: "center", width: "100%", flexWrap: "wrap"}}>
          <div className="col-md-4">
            <Card className='mb-3 shadow' border="success" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>3D Virtual Experiments</Card.Title>
                <Card.Text>
                  Engage in immersive 3D experiments.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className='mb-3 shadow' border="success" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Awesome Game-Like Experience</Card.Title>
                <Card.Text>
                  Enjoy a fun, game-like interface.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className='mb-3 shadow' border="success" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Virtual Experiments</Card.Title>
                <Card.Text>
                  Conduct realistic virtual experiments.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
      <Footer/>
    </div>
  );
}
