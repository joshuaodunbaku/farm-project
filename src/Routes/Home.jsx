import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import IMAGES from "../assets/images";
import AnimatedCard from "../Components/AnimatedCard";

const Home = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Frontend Developer",
      message:
        "This service was a game-changer. Highly professional and reliable!",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Michael Smith",
      role: "Project Manager",
      message:
        "Great experience overall. Timely delivery and excellent support.",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Linda Osei",
      role: "UI/UX Designer",
      message:
        "Beautiful designs and top-notch implementation. Will recommend!",
      image: "https://via.placeholder.com/100",
    },
  ];

  return (
    <>
      <div className="container-fluid background-1">
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-12 col-md-6 d-flex gap-4 flex-column justify-content-center">
              <h1 className="display-1 fw-bold">
                Natural Trusted Oil Collection
              </h1>
              <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
                asperiores dicta debitis cum id voluptas in, excepturi facilis,
                quam fugit architecto expedita pariatur facere illo possimus!
                Nostrum distinctio repellendus ratione.
              </div>
              <div className="btn-div">
                <Button className="donate-btn px-5 py-3">Explore</Button>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <img
                src={IMAGES.image_1}
                alt=""
                className="img-fluid rounded-3"
              />
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="container mt-5">
        <div>
          <h2 className="text-center mb-3 display-5">A NATURAL CHOICE</h2>
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="d-flex flex-column gap-3">
                <img
                  src={IMAGES.image_2}
                  className="img-fluid rounded-3"
                  alt=""
                  width="100%"
                />
                <div>
                  <h3>A header here</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur quasi, quod recusandae consequatur, rerum magnam
                    sunt autem quisquam perspiciatis numquam, incidunt dicta.
                    Libero pariatur aspernatur, sint explicabo architecto quod
                    nisi.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="d-flex flex-column gap-3">
                <img
                  src={IMAGES.image_3}
                  className="img-fluid rounded-3"
                  alt=""
                  width="100%"
                />
                <div>
                  <h3>A header here</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur quasi, quod recusandae consequatur, rerum magnam
                    sunt autem quisquam perspiciatis numquam, incidunt dicta.
                    Libero pariatur aspernatur, sint explicabo architecto quod
                    nisi.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="d-flex flex-column gap-3">
                <img
                  src={IMAGES.image_2}
                  className="img-fluid rounded-3"
                  alt=""
                  width="100%"
                />
                <div>
                  <h3>A header here</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur quasi, quod recusandae consequatur, rerum magnam
                    sunt autem quisquam perspiciatis numquam, incidunt dicta.
                    Libero pariatur aspernatur, sint explicabo architecto quod
                    nisi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <h2 className="text-center mb-4 display-6">
          PURE SELF-CARE INGREDIENTS
        </h2>
        <div className="d-flex justify-content-evenly align-items-center flex-wrap">
          <div className="text-center">
            <img
              src={IMAGES.image_1}
              className="img-fluid rounded-circle"
              alt="ingredient"
              width={"100px"}
            />
            <p>Name here</p>
          </div>

          <div className="text-center">
            <img
              src={IMAGES.image_1}
              className="img-fluid rounded-circle"
              alt="ingredient"
              width={"100px"}
            />
            <p>Name here</p>
          </div>

          <div className="text-center">
            <img
              src={IMAGES.image_1}
              className="img-fluid rounded-circle"
              alt="ingredient"
              width={"100px"}
            />
            <p>Name here</p>
          </div>

          <div className="text-center">
            <img
              src={IMAGES.image_1}
              className="img-fluid rounded-circle"
              alt="ingredient"
              width={"100px"}
            />
            <p>Name here</p>
          </div>

          <div className="text-center">
            <img
              src={IMAGES.image_1}
              className="img-fluid rounded-circle"
              alt="ingredient"
              width={"100px"}
            />
            <p>Name here</p>
          </div>

          <div className="text-center">
            <img
              src={IMAGES.image_1}
              className="img-fluid rounded-circle"
              alt="ingredient"
              width={"100px"}
            />
            <p>Name here</p>
          </div>
        </div>
      </div>

      <div className="container-fluid text-light text-center py-5 background-2 py-3 mt-5">
        <h2 className="mb-4 display-5 fw-bold text-uppercase">
          Reasons to Choose Natural
        </h2>

        <div className="container py-3">
          <div className="row gy-4">
            <div className="col-12 col-md-4">
              <div className="p-4 h-100 border border-light rounded-4">
                <h4 className="fw-semibold mb-3">Zero Cholesterol</h4>
                <p className="text-light small">
                  Enjoy foods that promote a healthier heart. Our natural
                  products are free of cholesterol, helping you maintain optimal
                  cardiovascular health without compromising on taste.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="p-4 h-100 border border-light rounded-4">
                <h4 className="fw-semibold mb-3">Zero Trans Fats</h4>
                <p className="text-light small">
                  Say goodbye to harmful trans fats. We ensure all our products
                  support better metabolism, lower inflammation, and overall
                  wellness for you and your family.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="p-4 h-100 border border-light rounded-4">
                <h4 className="fw-semibold mb-3">100% Natural</h4>
                <p className="text-light small">
                  No additives. No chemicals. No shortcuts. Just nature’s
                  goodness—grown, harvested, and delivered with love and
                  transparency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="container my-4">
        <div className="py-5 bg-light">
          <Container>
            <h2 className="display-6 text-center mb-4">What Our Clients Say</h2>
            <Row className="gy-4">
              {testimonials.map((testimonial, index) => (
                <Col key={index} md={4}>
                  <AnimatedCard>
                    <div className="volunteer-img-container">
                      <img
                        src={IMAGES.image_1}
                        alt={testimonial.name}
                        className="volunteer-img rounded-circle mb-3"
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div>
                      <p className="fst-italic">"{testimonial.message}"</p>
                      <h4 className="mb-0">{testimonial.name}</h4>
                      <small className="text-muted">{testimonial.role}</small>
                    </div>
                  </AnimatedCard>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Home;
