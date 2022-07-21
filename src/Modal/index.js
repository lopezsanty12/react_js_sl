import React from 'react';
import ReactDOM from 'react-dom';
import { TodoForm } from '../TodoForm';
import './Modal.css';

function Modal( { children }) {
    return ReactDOM.createPortal(
        <div className='ModalBackground'>
            <TodoForm />
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };