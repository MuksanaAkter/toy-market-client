import React from 'react';
import { Button, Card,Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import IngredientData from './ingredientData';
import Rating from 'react-rating';


const RecipeCard = ({recipes}) => {
    //console.log(recipes.rating1);
    const { _id, recipe_Img1, recipe_name1, ingredients, cooking_method1,rating1 } = recipes;
    return (
        <div>
            <div>
            <Card style={{ width: '25rem' }} className='me-5 my-5'>
      <Card.Img variant="top" src={recipe_Img1} />
      <Card.Body>
        <Card.Title>{recipe_name1}</Card.Title>
        <div className="">
                    {ingredients.map((ingredient) => (
                        <IngredientData
                          key={ingredient._id}
                          ingredient={ingredient}
                        ></IngredientData>
                      ))
                }
            </div>
        <Card.Text>
          {cooking_method1}
        </Card.Text>
        <Rating
                        placeholderRating={rating1}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    ></Rating>
                    <span> {rating1}</span>
        {/* <Button variant="primary">{rating1}</Button> */}
      </Card.Body>
    </Card>
            </div>
        </div>
    );
};

export default RecipeCard;