import axios from '../axios'
import { useEffect, useState, useCallback } from 'react'
import { GroceriesTable } from "../components/GroceriesTable"
import { AddGroceryForm } from "../components/AddGroceryForm"
import { UpdateGroceryForm } from "../components/UpdateGroceryForm"

export const HomePage = () => {
    const [allGroceries, setAllGroceries] = useState(null)
    const [description, setDescription] = useState('')
    const [showUpdateForm, setShowUpdateForm] = useState(false)
    const [selectedGrocery, setSelectedGrocery] = useState({})


    //get all groceries
    useEffect(() => {
        console.log("...")
        const getGroceries = async () => {
            const response = await axios.get("/api")
            setAllGroceries(response.data.groceries)
        }
        getGroceries()
    }, [])


    const handleAdd = async event => {
        event.preventDefault()
        try {
            await axios.post('/api', {
                description: description
            })
            // window.location.reload(true)
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async id => {
        try {
            await axios.delete(`/api/${id}`)
            setAllGroceries(allGroceries.filter(grocery => grocery.id !== id))
        } catch (error) {
            console.error(error.message)
        }
    }

    const handleUpdate = async event => {
        event.preventDefault()
        try {
            console.log("run")
            await axios.put(`/api/${selectedGrocery.id}`, {
                description: selectedGrocery.description
            })
            setShowUpdateForm(false)
            // window.location.reload(true)
        } catch (error) {
            console.error(error.message)
        }
    }


    return (
        <div className="relative h-full flex flex-col gap-2">
            <h1 className="text-center">
                Groceries List
            </h1>

            <AddGroceryForm
                description={description}
                setDescription={setDescription}
                handleAdd={handleAdd}
            />

            <GroceriesTable
                allGroceries={allGroceries}
                handleDelete={handleDelete}
                setShowUpdateForm={setShowUpdateForm}
                setSelectedGrocery={setSelectedGrocery}
            />

            <UpdateGroceryForm
                showUpdateForm={showUpdateForm}
                setShowUpdateForm={setShowUpdateForm}
                handleUpdate={handleUpdate}
                selectedGrocery={selectedGrocery}
                setSelectedGrocery={setSelectedGrocery}
            />
        </div>
    )
}
