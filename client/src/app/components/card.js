"use client"

import axios from "axios";
import { useState, useEffect } from "react";

const Card = () => {    
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

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

    return (
        <div>
            <h1>Lista de Usuários</h1>
            <ul>
                {data.map((user) => (
                    <li key={user.id}>
                        <p>Nome: {user.name}</p>
                        <p>Idade: {user.age}</p>
                        <p>Email: {user.email}</p>
                        <button onClick={() => handleDelete(user.id)}>Deletar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Card;
