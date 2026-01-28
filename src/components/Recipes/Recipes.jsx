import { useEffect, useState } from "react";
import Recipe from "./Recipe";



const Recipes = () => {

    const [recipes, setRecipes] = useState([]);


    useEffect(() => {
        fetch("feckData.json")
            .then(res => res.json())
            .then(data => setRecipes(data));

    }, [])

    console.log(recipes)

    return (
        <div className="container mx-auto">
            {/* header part */}
            <div className="text-center mt-24 mb-10 w-9/12 mx-auto">
                <h2 className="text-[#48448a] font-bold mb-5 text-5xl">Our Recipe</h2>
                <p className="text-gray-700 font-semibold ">
                    Enjoy expertly crafted dishes made fresh daily, blending tradition and creativity to offer unforgettable taste and a delightful food journey.
                    From farm-fresh ingredients to your plate and love in every carefully prepared meal served.
                </p>
            </div>

            {/* Body part */}

            <div className="grid grid-cols-3">
                <div className="grid grid-cols-2 gap-5 col-span-2">
                    {
                        recipes.map((recipe,idx) => <Recipe
                            key={idx}
                            recipe={recipe}
                        ></Recipe>)
                    }
                </div>

                <div className="col-span-1">

                </div>
            </div>


        </div>
    );
};

export default Recipes;