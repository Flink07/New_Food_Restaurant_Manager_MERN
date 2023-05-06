import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from "react-router-dom";

import FoodForm from '../components/FoodForm';


const UpdatePage = (food) => {
    const nav = useNavigate();
    const { id } = useParams();

    const[name, setName] = useState('');
    const[cuisines, setCuisines] = useState('');
    const[address, setAddress] = useState('');
    const[description, setDescription] = useState('');
    const[recommendation, setRecommendation] = useState('');
    const[isFastFood, setIsFastFood] = useState('');
    const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/foods/${id}`)
        .then((res) => {
            const food = res.data.food

            setName(food.name);
            setCuisines(food.cuisines);
            setAddress(food.address);
            setDescription(food.description);
            setRecommendation(food.recommendation);
            setIsFastFood(food.isFastFood);
        })
        .catch((err) => console.log(err))
    }, []);

    const UpdateFood = (food) => {
        axios
        .put(`http://localhost:8000/api/foods/${id}`, food)
        .then((res) => {
            nav(`/foods/${id}`);
        })
        .catch((resError) =>{
            console.log(resError);
            setFormErrors(resError.response.data.errors)
        })
    };


    return (
        <div className=''>
            <div className='d-flex justify-content-between align-items-center p-4'>
                <h1>Edit Restaurant</h1>
                <Link to={"/"} className="btn btn-primary" >Back To Restaurants</Link>
            </div>
            <div><h3>Edit this Restaurant Details!</h3></div>
        {name && <FoodForm 
            
            food={{ name, cuisines, address, description, recommendation, isFastFood}}
            formSubmit={UpdateFood}
            formErrors={formErrors}
        />}
    </div>
    );
};

export default UpdatePage;