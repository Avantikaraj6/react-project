import { useState, useEffect } from "react";
import Records from "./data/data.json";
import { Col, Row, Container } from "react-bootstrap";

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(Records.length);

  useEffect(() => {
    setLength(Records.length);
    console.log(Records.length);
  }, []);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    } else if (currentIndex == length) {
      setCurrentIndex();
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  return (
    <div className="footer">
      <h1 className="mb-4 mt-4">React Carousel</h1>
      <Container className=" carousel-container ">
        <div className="carousel-wrapper">
          <Container className="carousel-content-wrapper">
            <Col
              className="carousel-content"
              style={{ transform: `translateX(-${currentIndex * 50}%)` }}
            >
              {Records.map((product) => {
                return (
                  <img
                    src={product.image}
                    className="image-carousel"
                    alt={product.title}
                  />
                );
              })}
            </Col>
          </Container>
        </div>
      </Container>

      <div >
        {currentIndex > 0 && (
          <button onClick={prev} className="left-arrow">
            &lt;
          </button>
        )}

        {currentIndex < length - 1 && (
          <button onClick={next} className="right-arrow">
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default Skills;
