"use client"

import axios from "axios";
import { useState, useEffect } from "react";

const Modal = ({user, onClose, onUserUpdated}) => {
   const [editedUser, setEditedUser] = useState({ ...user });
    
    const handleChange = (e) => {
        setEditedUser({
            ...editedUser,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3001/usuarios/editar/${user.id}`, editedUser);
            onUserUpdated(editedUser);
            onClose();
        } catch (error) {
            console.error("Erro ao editar o usuário:", error.message);
        }
    }


    return (
        <div className="modal"> 
          <div className="modal-content">
            <span className="close" onClick={onClose}>&times;</span>
            <h2>Editar Usuário</h2>
            <form onSubmit={handleSubmit}>
              <input 
              type="text" 
              name="name" 
              placeholder="Nome" 
              value={editedUser.name} 
              onChange={handleChange} 
              required /><br 
              />
              <input 
              type="number" 
              name="age" 
              placeholder="Idade" 
              value={editedUser.age} 
              onChange={handleChange} 
              required /><br 
              />
              <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              value={editedUser.email} 
              onChange={handleChange} 
              required /><br 
              />
              <button type="submit">Salvar</button>
            </form>
          </div>
        </div>
      );
};

export default Modal;