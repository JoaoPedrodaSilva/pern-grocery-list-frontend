export const AddGroceryForm = ({ description, setDescription, handleAdd }) => (
    <form
        className='w-full flex items-center justify-center text-xs xs:text-sm gap-1 pb-1'
        onSubmit={handleAdd}
    >

        <input
            className='shadow-sm appearance-none border border-gray-400 hover:border-blue-500 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-400'
            id='todo-input'
            type="text"
            placeholder='Add your grocery here...'
            maxLength='25'
            value={description}
            onChange={event => setDescription(event.target.value)}
            required
        />

        <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline ease-linear transition-all duration-150'
            type='submit'
        >
            Add
        </button>

    </form>
)
