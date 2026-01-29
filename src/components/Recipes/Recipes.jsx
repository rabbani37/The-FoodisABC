import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import CookeTable from "../Table/CookeTable";
import CurrentCook from "../Table/CurrentCook";
  import { ToastContainer, toast } from 'react-toastify';



const Recipes = () => {


    const [recipes, setRecipes] = useState([]);
    const [wantRecipes, setWantRecipes] = useState([]);
    const [currentRecipes, setCurrentRecipes] = useState([]);
    useEffect(() => {
        fetch("feckData.json")
            .then(res => res.json())
            .then(data => setRecipes(data));

    }, [])

    // handle want to cook
    const handleWantToCook = (recipe) => {
        const isExisting = wantRecipes.find(wRecipe => wRecipe.recipe_id === recipe.recipe_id);
        if (isExisting) {
            toast.error(`Already exist. Please Try Another Recipe`)
        } else {
            toast.success("Added The Recipe")
            setWantRecipes([...wantRecipes, recipe])
        }

    }
    // handle preparing 
    const handlePreparing = (recipe) => {
        const remaining = wantRecipes.filter(wRecipe => wRecipe.recipe_id !== recipe.recipe_id)
        setWantRecipes(remaining)
        setCurrentRecipes([...currentRecipes, recipe])

    }



    return (
        <div className="max-w-[1240px] mx-auto">
            {/* header part */}
            <div className="text-center mt-24 mb-10 w-9/12 mx-auto">
                <h2 className="text-[#48448a] font-bold mb-5 text-5xl">Our Recipe</h2>
                <p className="text-gray-700 font-semibold ">
                    Enjoy expertly crafted dishes made fresh daily, blending tradition and creativity to offer unforgettable taste and a delightful food journey.
                    From farm-fresh ingredients to your plate and love in every carefully prepared meal served.
                </p>
            </div>

            {/* Body part */}

            <div className="md:flex  gap-4 ">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-5 ">
                    {
                        recipes.map((recipe, idx) => <Recipe
                            key={idx}
                            recipe={recipe}
                            handleWantToCook={handleWantToCook}
                        ></Recipe>)
                    }
                </div>



                {/* SideBar  */}
                <div className=" border border-gray-400 rounded-md ">


                    <div className="text-center flex flex-col ">
                        <ToastContainer />
                        <h3 className="my-3 text-xl text-[#48448a]  font-semibold">
                            Want to cook: {wantRecipes.length}</h3>
                        <hr className='mx-10 text-gray-300 ' />

                        <div>
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th></th>
                                        <th className="ml-5">Time</th>
                                        <th>Calories</th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                            </table>
                            {
                                wantRecipes.map((recipe, idx) => <CookeTable
                                    key={idx}
                                    recipe={recipe}
                                    handlePreparing={handlePreparing}

                                ></CookeTable>)
                            }
                        </div>
                    </div>




                    <div className="text-center flex flex-col ">
                        <h3 className="my-3 text-xl text-[#48448a]  font-semibold">
                            Currently cooking: {currentRecipes.length}</h3>
                        <hr className='mx-10 text-gray-300 ' />

                        <div>
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th className="ml-5">Time</th>
                                        <th></th>
                                        <th>Calories</th>
                                    </tr>
                                </thead>
                            </table>
                            {
                                currentRecipes.map((recipe, idx) => <CurrentCook
                                    key={idx}
                                    recipe={recipe}
                                ></CurrentCook>)
                            }

                            <hr className='mx-10 text-gray-300 ' />
                            <div className="text-gray-600 p-10  font-bold flex mr-20 gap-16 justify-end">
                                <p>Total Time= {currentRecipes.reduce((p, c) => p + c.preparing_time, 0)} </p>
                                <p>Total Calories= {currentRecipes.reduce((p, c) => p + c.calories, 0)}</p>
                            </div>
                        </div>
                    </div>


                </div>






            </div>


        </div>
    );
};

export default Recipes;