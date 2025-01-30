import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

// images

import recent_img1 from '../Assets/Images/recent1.jpg';
import recent_img2 from '../Assets/Images/recent2.jpg';
import recent_img3 from '../Assets/Images/recent3.jpg';
import recent_img4 from '../Assets/Images/recent4.jpg';
import recent_img5 from '../Assets/Images/recent5.jpg';
import recent_img6 from '../Assets/Images/recent6.jpg';

function Recent() {
  return (
    <div className="recent_sec">
      <Container>
        <Row>

            <Col lg={12}>
                <div className="recent-title">
                <h6>Our Recent Projects</h6>   
                <h2>Our Special Projects See Now</h2>
                </div>
            </Col>

            <Col lg={4}>
             <div className="recent-card-main">
               <div className="recent-img">
                  <img src={recent_img1} alt="recent-img-1" />
                  <div className="recent-overlay">
                    <a href="">
                      <i class="bi bi-plus"></i>
                    </a>
                    <div className="content">
                       <h4>Interiors</h4>
                        <h5>Mechanical Trim</h5>
                        <Button className="recent_btn">Read More</Button>
                    </div>
                  </div>
               </div>
             </div>
            </Col>
            <Col lg={4}>
             <div className="recent-card-main">
               <div className="recent-img">
                  <img src={recent_img2} alt="recent-img-2" />
                  <div className="recent-overlay">
                    <a href="">
                      <i class="bi bi-plus"></i>
                    </a>
                    <div className="content">
                       <h4>Modern Bridge</h4>
                        <h5>Stone Harbor</h5>
                        <Button className="recent_btn">Read More</Button>
                    </div>
                  </div>
               </div>
             </div>
            </Col>
            <Col lg={4}>
             <div className="recent-card-main">
               <div className="recent-img">
                  <img src={recent_img3} alt="recent-img-3" />
                  <div className="recent-overlay">
                    <a href="">
                      <i class="bi bi-plus"></i>
                    </a>
                    <div className="content">
                       <h4>Buildings</h4>
                        <h5>Ferguson Family YMCA</h5>
                        <Button className="recent_btn">Read More</Button>
                    </div>
                  </div>
               </div>
             </div>
            </Col>

            <Col lg={4}>
             <div className="recent-card-main last-card">
               <div className="recent-img">
                  <img src={recent_img4} alt="recent-img-4" />
                  <div className="recent-overlay">
                    <a href="">
                      <i class="bi bi-plus"></i>
                    </a>
                    <div className="content">
                       <h4> Houses</h4>
                        <h5>Eisenhower Elementary</h5>
                        <Button className="recent_btn">Read More</Button>
                    </div>
                  </div>
               </div>
             </div>
            </Col>
            <Col lg={4}>
             <div className="recent-card-main last-card">
               <div className="recent-img">
                  <img src={recent_img5} alt="recent-img-5" />
                  <div className="recent-overlay">
                    <a href="">
                      <i class="bi bi-plus"></i>
                    </a>
                    <div className="content">
                       <h4>Buildings, Houses</h4>
                        <h5>Jewelers Mutual</h5>
                        <Button className="recent_btn">Read More</Button>
                    </div>
                  </div>
               </div>
             </div>
            </Col>
            <Col lg={4}>
             <div className="recent-card-main last-card">
               <div className="recent-img">
                  <img src={recent_img6} alt="recent-img-6" />
                  <div className="recent-overlay">
                    <a href="">
                      <i class="bi bi-plus"></i>
                    </a>
                    <div className="content">
                       <h4>Buildings, Houses</h4>
                        <h5>Construction Managment</h5>
                        <Button className="recent_btn">Read More</Button>
                    </div>
                  </div>
               </div>
             </div>
            </Col>

         
        </Row>
      </Container>
     
    </div>
  );
}

export default Recent;
