// components/Chatbot.jsx

import React, { useState } from 'react';
import { Modal, Button, InputGroup, Form } from 'react-bootstrap';

const Chatbot = ({ mentor, show, handleClose }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        { sender: 'User', text: newMessage },
      ]);
      setNewMessage('');
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Chat avec {mentor ? mentor.name : ''}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="chat-box" style={{ maxHeight: '300px', overflowY: 'scroll', marginBottom: '20px' }}>
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender === 'User' ? 'user-message' : 'mentor-message'}`}>
              <strong>{message.sender}:</strong> {message.text}
            </div>
          ))}
        </div>

        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Écrivez votre message..."
          />
          <Button variant="primary" onClick={handleSendMessage}>Envoyer</Button>
        </InputGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fermer
        </Button>
        <Button variant="primary" onClick={() => alert('Réservation confirmée')}>
          Confirmer la réservation
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Chatbot;
