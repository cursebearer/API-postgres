"use client"

import axios from "axios";
import { useState, useEffect } from "react";
import Modal from "../Modal/modal";

const Card = () => {    
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null); 
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:3001/usuarios/todos")
            .then((response) => {
                setData(response.data.users);
                console.log(response.data.users);
            })
            .catch((err) => {
                setError(err);
            });
    }, []);

    if (error) {
        return <div>Erro: {error.message}</div>;
    }

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/usuarios/deletar/${id}`);
            setData(data.filter(user => user.id !== id));  
        } catch (error) {
            console.error("Erro ao deletar o usuário:", error.message);
        }
    };

    const handleEdit = (user) => {
        setSelectedUser(user);
        setIsModalOpen(true);
      };

    const handleUserUpdated = (updatedUser) => {
        setData(data.map(user => (user.id === updatedUser.id ? updatedUser : user)));
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedUser(null); 
    };

    return (
        <div>
            <h1>Lista de Usuários</h1>
            <ul>
                {data.map((user) => (
                    <li key={user.id}>
                        <p>Nome: {user.name}</p>
                        <p>Idade: {user.age}</p>
                        <p>Email: {user.email}</p>
                        <button onClick={() => handleEdit(user)}>Editar</button>
                        <button onClick={() => handleDelete(user.id)}>Deletar</button>
                        
                    </li>
                ))}
            </ul>
            {isModalOpen && selectedUser && (
            <Modal 
            user={selectedUser} 
            onClose={handleCloseModal} 
            onUserUpdated={handleUserUpdated}
            />
            )}
        </div>
    );
}

export default Card;
