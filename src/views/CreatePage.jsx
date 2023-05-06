import React, {useState} from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

import FoodForm from '../components/FoodForm'

const CreatePage = () => {
    const nav = useNavigate();
    const { id } = useParams();
    const [formErrors, setFormErrors] = useState({});

    const formSubmit = (food) => {
        axios
        .post('http://localhost:8000/api/foods', food)
        .then((res) => {
            console.log(res)
            nav(`/foods/${res.data.food._id}`);
        })
        .catch((resError) =>{
            console.log(resError);
            setFormErrors(resError.response.data.errors)
        })
    };

    return (
        <div>
            <div className='d-flex justify-content-between align-items-center p-4'>
                <h1>Restaurant Destination Manager</h1>
                <Link to={"/"} className="btn btn-primary" >Back To Restaurants!</Link>
            </div>
            <div><h3>Add A new Restaurant To Your List!</h3></div>
            <FoodForm
            food={{ name: '', cuisines: '', address: '', description: '', recommendation: '', isFastFood: true}}
            formSubmit={formSubmit}
            formErrors={formErrors}
        />
    </div>
    );
};


export default CreatePage;