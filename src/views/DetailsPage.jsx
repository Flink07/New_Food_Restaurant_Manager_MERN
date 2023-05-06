import React, {Component, useEffect, useState } from 'react';
import axios from 'axios'
import {Link, useParams } from 'react-router-dom'
// import '../index.css';
import DeleteButton from '../components/DeleteButton';


const DetailsPage = () => {
    const { id } = useParams();
    const [oneFood, setOneFood] = useState()

    useEffect( () => {
        axios.get(`http://localhost:8000/api/foods/${id}`)
        .then((res) => {
            console.log(res);
            setOneFood(res.data.food);
        })
        .catch((err) => console.log(err));
    }, []);

    return (
        <div className='filter text-white'>
            <div className='d-flex justify-content-around align-items-center p-4'>
                <h1>Restaurant Details</h1>
                <Link to={"/"} className="btn btn-primary" >Back to Restaurants</Link>
            </div>
            {
                oneFood && (
                    <div className='justify-content-around align-items-center p-4'>
                        <div><h1>{oneFood.name}</h1></div><hr></hr>
                        <div><h3>Type of Food: {oneFood.cuisines}</h3></div>
                        <div><h3>Location: {oneFood.address}</h3></div>
                        <div><h3>Restaurant Description: {oneFood.description}</h3></div>
                        <div><h3>Recommended Item: {oneFood.recommendation}</h3></div>
                        <div><h3>Restaurant Type: {oneFood.isFastFood ? 'Fast Food' : 'Sit Down'}</h3></div><hr></hr>
                        <div><Link to={`/foods/${oneFood._id}/edit`} className="btn btn-success">Edit Food</Link></div><hr></hr>
                        <DeleteButton food={oneFood} />
                    </div>
                )
            }
        </div>
    );
};

export default DetailsPage;