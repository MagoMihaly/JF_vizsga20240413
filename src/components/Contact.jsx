import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';


export const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataFromForm = {
      email,
      message,
      timestamp: new Date()
    }
    console.log(dataFromForm);
  }


  return (
    <div className='.container mw700 mx-auto shadow p-3'>
      <h3 className='fw-bold'>Lépj velünk kapcsolatba</h3>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" placeholder="name@example.com"
            value={email} onChange={(e) => (setEmail(e.target.value))} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Üzenet: </Form.Label>
          <Form.Control as="textarea" rows={3}
            value={message} onChange={(e) => (setMessage(e.target.value))} />
        </Form.Group>
        <button className='btn btn-primary mb-3' onClick={handleSubmit}>Küldés</button>
      </Form>

    </div>
  )
}
