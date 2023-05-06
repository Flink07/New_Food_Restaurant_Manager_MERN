import React, {useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const DeleteButton = ({food}) => {
    const nav = useNavigate();

    const deleteFood = () => {
        axios
            .delete(`http://localhost:8000/api/foods/${food._id}`)
            .then(() => {
                nav('/');
            })
            .catch((err) => console.log(err));
    };

    return (
    <button className='btn btn-danger' onClick={deleteFood}>
        Delete this 
        </button>
    );
};

export default DeleteButton;