import React from 'react';
import {NavDropdown, Navbar, Container, Nav, Card} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img_1 from '../../src/images/img_1.jpg';
import img_2 from '../../src/images/2.jpg';
import img_3 from '../../src/images/3.jpg';
import img_4 from '../../src/images/4.jpg';
import img_5 from '../../src/images/5.jpg';
import img_6 from '../../src/images/6.jpg';
import './Style.css';


const Index = () =>{

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          margin: 10
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


  return (
      <div>
<div className='container'>
<div className='row'>
  <Carousel 
  className="p40"
  responsive={responsive} 
  autoPlay={false}
  showDots={true}
  >
    <div>
    <Card className="card">
    <img src={img_1} alt="img"/>
    <div className='text'>
    <h5>Heading</h5>
     <p>In publishing and graphic design, Lorem ipsum is a placeholder text</p>
     </div></Card>
     </div>
    <div><Card><img src={img_2}/>
    <div className='text'>
    <h5>Heading</h5>
     <p>In publishing and graphic design, Lorem ipsum is a placeholder text</p>
     </div></Card></div>
    <div><Card><img src={img_3}/>
    <div className='text'>
    <h5>Heading</h5>
     <p>In publishing and graphic design, Lorem ipsum is a placeholder text</p>
     </div></Card></div>
    <div><Card><img src={img_4}/>
    <div className='text'>
    <h5>Heading</h5>
     <p>In publishing and graphic design, Lorem ipsum is a placeholder text</p>
     </div> </Card></div>
    
    <div><Card><img src={img_5}/>
    <div className='text'>
    <h5>Heading</h5>
     <p>In publishing and graphic design, Lorem ipsum is a placeholder text</p>
     </div>
    </Card></div>
    <div>
    <Card>
    <img src={img_6}/>
    <div className='text'>
    <h5>Heading</h5>
     <p>In publishing and graphic design, Lorem ipsum is a placeholder text</p>
     </div>
    </Card>
    </div>
  </Carousel>
  </div>
  </div>
</div>

  );
};

export default Index;