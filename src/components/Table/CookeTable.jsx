


const CookeTable = ({ recipe,handlePreparing }) => {


    const {recipe_name, preparing_time,calories }= recipe;
   
    return (
        <div >
            <table className="table ">
                <tbody>
                    {/* row 1 */}
                    <tr className="hover:bg-base-300 text-gray-500">
                        <th>1</th>
                        <td>{recipe_name}</td>
                        <td>{preparing_time} minutes</td>
                        <td>{calories} Calories </td>
                        <td><button onClick={()=>handlePreparing(recipe)}
                        className="px-4 py-2 text-black bg-green-500 rounded-3xl">Preparing</button></td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default CookeTable;