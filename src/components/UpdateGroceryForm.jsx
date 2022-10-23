export const UpdateGroceryForm = ({ showUpdateForm, setShowUpdateForm, handleUpdate, selectedGrocery, setSelectedGrocery }) => (

    <section className={showUpdateForm ? `w-full text-xs` : `hidden`}>
        <div className="absolute inset-0 z-50 flex items-center justify-center">

            <div className="flex flex-col rounded-lg shadow-lg w-full bg-white mx-10">

                <header className="flex justify-center p-2 border-b border-slate-200 rounded-t">
                    <h3 className="text-xs font-bold">
                        Update Grocery
                    </h3>
                </header>

                <form>
                    <div className="p-6 flex-auto">
                        <input
                            className='shadow-sm appearance-none border border-gray-400 hover:border-blue-500 rounded w-full p-1 text-gray-700  focus:outline-blue-400'
                            value={selectedGrocery.description}
                            maxLength='25'
                            onChange={event => {
                                setSelectedGrocery({
                                    id: selectedGrocery.id,
                                    description: event.target.value
                                })
                            }}
                            type="text"
                        />
                    </div>


                    <div className="flex items-center justify-center p-3 border-t border-slate-200 rounded-b">
                        {/* cancel button */}
                        <button
                            className="bg-red-500 hover:bg-red-700 text-sm text-white font-bold p-1 m-1 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                            onClick={() => setShowUpdateForm(false)}
                        >
                            Cancel
                        </button>

                        {/* update button */}
                        <button
                            className="bg-emerald-500 hover:bg-emerald-700 text-sm text-white font-bold p-1 m-1 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                            onClick={event => handleUpdate(event)}
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
