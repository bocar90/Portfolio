import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/capstone.gif";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { sendEmail } from "./Contact";
export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ ", Software Engineer."];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                {/* <span className="tagline">Welcome to my Portfolio</span> */}
                {/* <h1>{`Hi! I'm Bokar Dieng `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Engineer!" ]'><span className="wrap">{text}</span></span></h1> */}

                <h1>  {`Hi! I'm `}
  <span className="white-text">
   
    Bokar Dieng
  </span>
  <span className="txt-rotate" dataPeriod="1000" data-rotate='["Software Engineer!"]'>
    <span className="wrap">{text}</span>
  </span>
</h1>

<p>I am a Class of 2021 graduate of the CUNY College of Staten Island in Computer Science with a minor in Mathematics. I am a former Fraud & Revenue Insurance Manager at Orange Guinee and currently enrolled in a Java bootcamp with Per Scholas to improve my programming and soft skills. I am passionate about anything related to computer science, especially data analysis and software engineering.</p>
               
{/* <div className="button-box">
  <div className="rounded-box"> */}
    <button type="button" className="bubble-button" onClick={sendEmail}>
      Let’s Connect
      <i className="fas fa-envelope"></i>
    </button>
  {/* </div>
</div> */}

              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
