export const UpdateGroceryForm = ({ showUpdateForm, handleUpdate, selectedGrocery, setSelectedGrocery }) => (

    <section className={showUpdateForm ? `w-full text-xs` : `hidden`}>
        <div className="absolute inset-0 z-50 flex items-center justify-center">

            <div className="flex flex-col rounded-lg shadow-lg w-full bg-white mx-10">

                <header className="flex justify-center p-2 rounded-t">
                    <h3 className="text-xs xs:text-sm font-bold mt-1">
                        Update Grocery
                    </h3>
                </header>

                <form onSubmit={event => handleUpdate(event)}>
                    <div className="p-1 px-6 flex justify-center">
                        <input
                            className='xs:w-2/3  text-xs xs:text-sm shadow-sm appearance-none border border-gray-400 hover:border-blue-500 rounded w-full p-1 text-gray-700  focus:outline-blue-400'
                            value={selectedGrocery.description}
                            maxLength='25'
                            onChange={event => {
                                setSelectedGrocery({
                                    id: selectedGrocery.id,
                                    description: event.target.value
                                })
                            }}
                            type="text"
                            required
                        />
                    </div>


                    <div className="flex items-center justify-center p-3 rounded-b">
                        <button
                            className="bg-yellow-500 hover:bg-yellow-600 text-white text-xs xs:text-sm font-bold py-1 px-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                            // onClick={event => handleUpdate(event)}
                            type="submit"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </section>
)
