import { Carousel } from "react-bootstrap";

function Home() {
  return (
    <div className="">
      <Carousel style={{ margin: "10px auto"}}>
        <Carousel.Item style={{height:"625px"}}>
          <img
            className="d-block w-100"
            src="./Images/flower1.jpg"
            alt=""
            style={{height:"100%"}}
          />
          <Carousel.Caption>
            <h3>Send your loved ones a beautiful bouquet of fresh flowers</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{height:"625px"}}>
          <img
            className="d-block w-100"
            src="./Images/flower2.jpg"
            alt=""
            style={{height:"100%"}}
          />
          <Carousel.Caption>
            <h3>Send your loved ones a beautiful bouquet of fresh flowers</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{height:"625px"}}>
          <img
            className="d-block w-100"
            src="./Images/flower3.jpg"
            alt=""
            style={{height:"100%"}}
          />
          <Carousel.Caption>
            <h3>Send your loved ones a beautiful bouquet of fresh flowers</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;