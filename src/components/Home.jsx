import React from 'react';
import haz from '/haz.jpg';
import panel from '/panel.jpg';
import nyaralo from '/nyaralo.jpg';
import Card from 'react-bootstrap/Card';
import background from '/background.png';

export const Home = () => {
  return (
    <div className='mw1200 container'>
      <header style={{'background-image': `url(${background})`, 'backgroundSize': 'cover', 'backgroundPosition': 'center' , height: '40vh'}}>
        <h1 className='p-3 cus-color3'>Ingatlaniroda</h1>
      </header>
      <main className='text-center'>
        <h4 className='p-3 cus-color3'>Ingatlanok minden kategóriában</h4>
        <div className="container d-flex flex-wrap justify-content-center gap-2">
          <Card 
            className='p-1 bg-cus-color1'
            style={{ width: '18rem' }}>
            <Card.Img src={haz} alt='haz' />
            <Card.Body>
              <Card.Title className='cus-color3'>Házak</Card.Title>
            </Card.Body>
          </Card>
          <Card 
            className='p-1 bg-cus-color1'
            style={{ width: '18rem' }}>
            <Card.Img src={panel} alt='lakasok' />
            <Card.Body>
              <Card.Title className='cus-color3'>Lakások</Card.Title>
            </Card.Body>
          </Card>
          <Card 
            className='p-1 bg-cus-color1'
            style={{ width: '18rem' }}>
            <Card.Img src={nyaralo} alt='nyaralok'/>
            <Card.Body>
              <Card.Title className='cus-color3'>Nyaralók</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </main >
      <footer>    
        <p className='border-top m-3 text-center'>
          © 2024 JF project. All rights reserved.
        </p>
      </footer>
    </div >
  )
}
