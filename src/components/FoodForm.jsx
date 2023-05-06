import React, { useState } from 'react';


const FoodForm = ({ food, formSubmit, formErrors }) => {
    const [name, setName] = useState(food.name)
    const [cuisines, setCuisines] = useState(food.cuisines)
    const [address, setAddress] = useState(food.address)
    const [description, setDescription] = useState(food.description)
    const [recommendation, setRecommendation] = useState(food.recommendation)
    const [isFastFood, setIsFastFood] = useState(food.isFastFood)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, cuisines, address, description, recommendation, isFastFood)
        formSubmit({
            name,
            cuisines,
            address,
            description,
            recommendation,
            isFastFood,
        });
    };
    
    return (
        <form className='' onSubmit={handleSubmit}>
            <p className=''>
                Name:
                <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                {formErrors.name ? (
                <p className='text-danger'>{formErrors.name.message}</p>
                ) : (
                    ''
                )}      
            </p>
            <p>
                Cuisines:
                <select name='cuisines' onChange={(e) => setCuisines(e.target.value)}>
                    <option value=""> </option>
                    <option value="Mexican">Mexican</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Sushi">Sushi</option>
                    <option value="Mediterranean">Mediterranean</option>
                    <option value="Thai">Thai</option>
                    <option value="Tacos">Tacos</option>
                    <option value="Burgers">Burgers</option>
                    <option value="Pizza">Pizza</option>
                    <option value="Italian">Italian</option>
                    <option value="Seafood">Seafood</option>
                    <option value="BBQ">BBQ</option>
                    <option value="Peruvian">Peruvian</option>
                    <option value="Indian">Indian</option>
                    <option value="Other">Other</option>
                </select>
                
                
                {/* <input 
                type="text"
                value={cuisines}
                min="1"
                onChange={(e) => setCuisines(e.target.value)}
                /> */}


                {formErrors.cuisines ? ( 
                <p className='text-danger'>{formErrors.cuisines.message}</p>
                ) : (
                    ''
                )} 
            </p>
            <p>
                Address:
                <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                />
                {formErrors.address ? (
                <p className='text-danger'>{formErrors.address.message}</p>
                ) : (
                    ''
                )}      
            </p>
            <p>
                Description:
                <input 
                rows="30"
                cols="30"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
                {formErrors.description ? (
                <p className='text-danger'>{formErrors.description.message}</p>
                ) : (
                    ''
                )} 
            </p>
            <p>
                Recommendation:
                <input
                type="text"
                value={recommendation}
                onChange={(e) => setRecommendation(e.target.value)}
                />
                {formErrors.recommendation ? (
                <p className='text-danger'>{formErrors.recommendation.message}</p>
                ) : (
                    ''
                )}      
            </p>
            <p>
                isFastFood:
                <input 
                type="checkbox"
                checked={isFastFood}
                onChange={(e) => setIsFastFood(e.target.checked)}
                />
                {formErrors.isFastFood ? (
                <p className='text-danger'>{formErrors.isFastFood.message}</p>
                ) : (
                    ''
                )} 
            </p>
            <button className='btn btn-outline-success'>Submit</button>
        </form>
    );
};

export default FoodForm;