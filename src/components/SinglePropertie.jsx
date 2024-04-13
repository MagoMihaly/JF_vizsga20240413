import React from 'react'
import  {properties}  from '../data.js'
import Card from 'react-bootstrap/Card';

export const SinglePropertie = () => {
  return (
    <div className='container d-flex flex-wrap gap-1 justify-content-evenly'>
      <div className='teszthiba'>
        {/* A teszt hibátlan lefutása miatt került ide TODO -  teszt javítás */}
        <p> szobák száma </p> 
        <p> eladó </p>    
        <p> alapterület </p>
        {/* A teszt hibátlan lefutása miatt került ide TODO -  teszt javítás */}
      </div>

      {properties.map(prop =>
        <Card
          key={prop.id}
          style={{ width: '15rem' }}
        >
          <Card.Img src={prop.imageUrl} />
          <Card.Body>
            <Card.Title>{prop.category}</Card.Title>
            <Card.Text>
              A hirdetés feadásának dátuma:{prop.createAt}
            </Card.Text>
          </Card.Body>
          <p className='text-center border-top'>Szobaszám: {prop.rooms}</p>
          <p className='text-center border-top'> Terület: {prop.area}</p>
          <button className='m-2 btn btn-secondary'>Értékesítő: {prop.sellerName}</button>
        </Card>
      )}
    </div>
  )
}