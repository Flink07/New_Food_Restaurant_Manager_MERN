import React, {useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

import DeleteButton from '../components/DeleteButton';
import Food from '../components/Food';



const Dashboard = () => {
    const [foodList, setFoodList] = useState();
    // insert function to update list and delte 
    useEffect((e) => {
        axios
            .get('http://localhost:8000/api/foods')
            .then((res) => {
                console.log(res);
                setFoodList(res.data.foods);
        })
        .catch((err) => console.log(err));
    }, []);




    return (
        <div className=''>
            <div className='d-flex justify-content-around align-items-center p-4'>
                <div><h1>Restaurant Destination Manager:</h1></div>
            </div>
            <div><h3 className='d-flex justify-content-between align-items-center p-4'>Restaurants to check out soon</h3></div>
            <div className='p-4'>
                <table className='table'>
                    <thead className='table table-dark'>
                        <tr>
                            <th><h4>Restaurant</h4></th>
                            <th><h4>Restaurant Type</h4></th>
                            <th><h4>Location</h4></th>
                            <th><h4>Considered FastFood?</h4></th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        foodList &&
                        foodList.map((food, i) => (
                        <tr key={i}>
                            <td><Link to={`/foods/${food._id}`} ><h2>{food.name}</h2></Link></td>
                            <td>{food.cuisines}</td>
                            <td>{food.address}</td>
                            <td>{food.isFastFood ? 'FastFood' : 'Sit Down'}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='d-flex justify-content-around align-items-center p-4'>
            <Link to="/foods/new" className="btn btn-outline-primary">Add A future Restaurant</Link>
            </div>
        </div>
    );
};

export default Dashboard;