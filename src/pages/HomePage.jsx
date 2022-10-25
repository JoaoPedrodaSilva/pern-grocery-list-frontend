import axios from '../axios'
import { useEffect, useState } from 'react'
import { GroceriesTable } from "../components/GroceriesTable"
import { MessageModal } from "../components/MessageModal"
import { AddGroceryForm } from "../components/AddGroceryForm"
import { UpdateGroceryForm } from "../components/UpdateGroceryForm"

const fetchData = async () => {
    const response = await axios.get("/api")
    return response.data.groceries
}

export const HomePage = () => {
    const [allGroceries, setAllGroceries] = useState(null)
    const [description, setDescription] = useState('')
    const [message, setMessage] = useState(null)
    const [showMessageModal, setShowMessageModal] = useState(false)
    const [showUpdateForm, setShowUpdateForm] = useState(false)
    const [selectedGrocery, setSelectedGrocery] = useState(null)


    //get all groceries
    useEffect(() => {
        fetchData().then(setAllGroceries)
    }, [])

    //auto close message modal
    useEffect(() => {
        const timer = setTimeout(() => setShowMessageModal(false), 3000)
        return () => clearTimeout(timer)
    }, [showMessageModal])

    const handleAdd = async event => {
        event.preventDefault()
        if (allGroceries.length > 15) {
            setMessage({
                message: "Sorry, only 15 groceries allowed.",
                color: "text-red-500"
            })
            setShowMessageModal(true)
        } else {
            try {
                await axios.post('/api', {
                    description: description
                })
                fetchData().then(setAllGroceries)
                setDescription("")
                setMessage({
                    message: "Grocery added.",
                    color: "text-green-500"
                })
                setShowMessageModal(true)
            } catch (error) {
                console.log(error)
            }
        }
    }

    const handleDelete = async (id) => {
        try {
            setAllGroceries(allGroceries.filter(grocery => grocery.id !== id))
            setMessage({
                message: "Grocery deleted.",
                color: "text-green-500"
            })
            setShowMessageModal(true)
            await axios.delete(`/api/${id}`)
        } catch (error) {
            console.error(error.message)
        }
    }

    const handleUpdate = async event => {
        event.preventDefault()
        try {
            await axios.put(`/api/${selectedGrocery.id}`, {
                description: selectedGrocery.description
            })
            setShowUpdateForm(false)
            fetchData().then(setAllGroceries)
            setMessage({
                message: "Grocery description updated.",
                color: "text-green-500"
            })
            setShowMessageModal(true)
        } catch (error) {
            console.error(error.message)
        }
    }


    return (
        <div className="relative h-full flex flex-col gap-1 p-2">
            <h1 className="text-center font-bold xs:text-lg">
                Groceries List
            </h1>

            <AddGroceryForm
                description={description}
                setDescription={setDescription}
                handleAdd={handleAdd}
            />

            {showMessageModal &&
                <MessageModal
                    message={message}
                />
            }

            <GroceriesTable
                allGroceries={allGroceries}
                handleDelete={handleDelete}
                setShowUpdateForm={setShowUpdateForm}
                setSelectedGrocery={setSelectedGrocery}
            />

            {showUpdateForm &&
                <UpdateGroceryForm
                    showUpdateForm={showUpdateForm}
                    setShowUpdateForm={setShowUpdateForm}
                    handleUpdate={handleUpdate}
                    selectedGrocery={selectedGrocery}
                    setSelectedGrocery={setSelectedGrocery}
                />
            }

        </div>
    )
}
