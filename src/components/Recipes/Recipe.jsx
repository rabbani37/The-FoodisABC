import { IoTimeOutline } from "react-icons/io5";
import { FaFire } from "react-icons/fa";


const Recipe = ({ recipe,handleWantToCook }) => {


    const { recipe_image, recipe_name, short_description, ingredients, calories, preparing_time } = recipe
    // console.log(recipe)
    return (
        <div className=''>
            <div className=" flex flex-col card bg-base-200 shadow-md border border-gray-300">
                <figure className="p-3">
                    <img
                        src={recipe_image}
                        alt={recipe_name}
                        className="rounded-xl max-h-48 w-full" />
                </figure>
                <div className="card-body grow-2 p-4">
                    <h2 className="card-title text-2xl">{recipe_name}</h2>
                    <p>{short_description}</p>
                    <hr className='text-gray-300' />
                    <div>
                        <h4 className='text-xl'>Ingredients: {ingredients.length} </h4>
                        <div className='text-gray-500 pl-6 '>
                            {ingredients.map((i, idx) => <ul key={idx} className='list-disc'>
                                <li className='lis'>{i}</li>
                            </ul>)}
                        </div>
                    </div>
                    <hr className='text-gray-300' />
                    <div className="flex items-center  gap-10">
                        <div className="flex items-center gap-2 text-gray-500">
                            <IoTimeOutline />
                            <p>{preparing_time} minutes</p>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500">
                            <FaFire />
                            <p>{calories} calories</p>
                        </div>
                    </div>
                    <div className=" ">
                        <button onClick={()=>handleWantToCook(recipe)}
                         className="btn mt-auto rounded-3xl btn-success">Want To Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;