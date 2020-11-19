import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import AboutTextImg from '../Image/AboutTextImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const {
    title,
    img,
    engagementImg,
    threesheetsImg,
    paragraphOne,
    paragraphTwo,
    paragraphThree,
  } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  const hr = {
    borderLeft: '5px solid #FFF',
    marginLeft: '33%',
    height: '100%',
  };

  return (
    <section id="about">
      <Container>
        <Title title={title} />
        <Row className="about-wrapper">
          <Col xl={{ span: 4, order: 1 }} lg={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="Christmas Card 2019" filename={img} />{' '}
              </div>
            </Fade>
          </Col>
          <Col xl={{ span: 1, order: 2 }} lg={{ order: 'last' }}>
            <div style={hr} />
          </Col>
          <Col xl={{ span: 7, order: 3 }} lg={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <Row>
                  <Col md={6} sm={12}>
                    {' '}
                    <p className="about-wrapper__info-text">
                      {paragraphOne || 'If you see this, something went wrong.'}
                    </p>
                  </Col>
                  <Col md={6} sm={12}>
                    {' '}
                    <AboutTextImg
                      alt="Location of our first date, Three Sheets in New Haven"
                      filename={threesheetsImg}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={{ number: 4, order: 'first' }} xs={{ span: 12, order: 2 }}>
                    <AboutTextImg
                      alt="Sam and Maggie in the Berkshires, shortly after Sam proposed"
                      filename={engagementImg}
                    />
                  </Col>
                  <Col md={{ number: 8, order: 'last' }} xs={{ span: 12, order: 1 }}>
                    <p className="about-wrapper__info-text">
                      {paragraphTwo || 'If you see this, something went wrong.'}
                    </p>
                  </Col>
                </Row>
                <Row xl={12}>
                  {' '}
                  <p className="center about-wrapper__info-text">
                    {paragraphThree || 'If you see this, something went wrong.'}
                  </p>
                </Row>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
