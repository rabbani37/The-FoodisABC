


const CurrentCook = ({ recipe }) => {


    const { recipe_name, preparing_time, calories } = recipe;
    // console.log(recipe)
    return (
        <div>
            <table className="table ">
                <tbody>
                    {/* row 1 */}
                    <tr className="hover:bg-base-300 text-gray-500">
                        <th>1</th>
                        <td>{recipe_name}</td>
                        <td>{preparing_time} minutes</td>
                        <td>{calories} Calories </td>

                    </tr>


                </tbody>
            </table>
        </div>
    );
};

export default CurrentCook;