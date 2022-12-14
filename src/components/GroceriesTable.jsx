export const GroceriesTable = ({ allGroceries, handleDelete, setSelectedGrocery, setShowUpdateForm }) => (
    <div className='w-full h-full overflow-y-auto overflow-x-hidden scrollbar'>
        <table className=" w-full border-collapse border border-white text-xs xs:text-sm text-center ">
            <thead className='bg-blue-500 text-white break-words sticky top-0'>
                <tr>
                    <th className="border border-white p-1">Description</th>
                    <th className="border border-white p-1">Update</th>
                    <th className="border border-white p-1">Delete</th>
                </tr>
            </thead>
            <tbody>
                {allGroceries && allGroceries.map(grocery => {
                    return (
                        <tr key={grocery.id} className='hover:bg-blue-100'>
                            <td className="border border-white break-words p-[0.3rem]">
                                {grocery.description.charAt(0).toUpperCase() + grocery.description.slice(1)}
                            </td>
                            <td className="border border-white">
                                <button
                                    className="bg-yellow-500 hover:bg-yellow-600 text-[0.6rem] xs:text-[0.7rem] rounded shadow px-2 p-[0.1rem] text-white focus:outline-white ease-linear transition-all duration-150"
                                    onClick={() => {
                                        setSelectedGrocery(grocery)
                                        setShowUpdateForm(true)
                                    }}
                                >
                                    Update
                                </button>
                            </td>
                            <td className="border border-white">
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-[0.6rem] xs:text-[0.7rem] rounded shadow px-2 p-[0.1rem] text-white focus:outline-white ease-linear transition-all duration-150"
                                    onClick={() => handleDelete(grocery.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
)
