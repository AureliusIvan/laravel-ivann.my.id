import { Input } from 'antd'
import React, { useState } from 'react'
import { router } from '@inertiajs/react'

export default function ProductAddCard(data: any) {
    const [edit, setEdit] = useState(false)

    // ✨ form logic

    const [values, setValues] = useState({
        id: data.id,
        title: data.title,
        description: data.description,
        price: data.price,
        image: data.image,
        // add more value here
    })

    function handleChange(e: any) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e: any) {
        e.preventDefault()
        router.post(`/admin/product`, values)
    }
    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white overflow-hidden shadow-sm sm:rounded-lg m-10"
        >
            <Input className="text-gray-500"
                placeholder='title'
                // defaultValue={data.title}
                onChange={handleChange}
                id='title'
            />
            <Input className="text-gray-500"
                placeholder='description'
                // defaultValue={data.description}
                onChange={handleChange}
                id='description'
            />
            <Input className="text-gray-500"
                placeholder='slug'
                // defaultValue={data.slug}
                onChange={handleChange}
                id='slug'
            />
            <Input className="text-gray-500"
                placeholder='price'
                // defaultValue={data.price}
                onChange={handleChange}
                id='price'
            />
            <Input className="text-gray-500"
                placeholder='price'
                // defaultValue={data.price}
                onChange={
                    (e: any) => {
                        setValues(values => ({
                            ...values,
                            image: e.target.files[0],
                        }))
                    }
                }
                id='image'
                type='file'
            />
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-boxS px-boxMd rounded"
            >
                Save
            </button>
        </form>
    )
}