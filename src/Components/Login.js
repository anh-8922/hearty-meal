import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SignupForm from './SignupForm';

import '../Styles/component.css';


export default function Login() {
  const [logInfo, setLogInfo] = useState(true)
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setLogInfo(breakpoint);
    setShow(true)
  }

  return (
    <>
      <Button id="login-button" variant="primary" onClick={handleShow}>
       Sign up
      </Button>
      <Modal show={show} fullscreen={logInfo} onHide={() => setShow(false)} id="Recipe-board">
        <Modal.Header id='recipe-modal' closeButton>
          <Modal.Title style={{color: 'black'}}>Sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body  id='recipe-modal' >
          <SignupForm/>
        </Modal.Body>
      </Modal>
    </>
  
      
  
  );
}