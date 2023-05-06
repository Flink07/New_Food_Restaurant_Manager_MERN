import React  from 'react'
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const Food = ({ food }) => {
    return (
        <div className='p-4 d-flex justify-content-between align-items-center border border-black rounded'>
            <div>
                <Link to={`/foods/${food._id}`} ><h2>{food.name}</h2></Link>
                <h3>{food.cuisines}</h3>
                <h3>{food.address}</h3>
                <h3>{food.description}</h3>
                <h3>{food.recommendation}</h3>
                <h3>{food.isFastFood ? 'True' : 'False'}</h3>
            </div>
            <DeleteButton food={food}/>
        </div>
    );
};

export default Food;