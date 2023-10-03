import { Input } from 'antd'
import React, { useState } from 'react'
import { router, useForm } from '@inertiajs/react'

export default function ProductAddCard(ProductData: any) {
    // ✨ form logic
    const { data, setData, post, progress, isDirty } = useForm({
        id: ProductData.id,
        title: ProductData.title,
        description: ProductData.description,
        slug: ProductData.slug,
        price: ProductData.price,
        image: ProductData.image,
    })

    function handleChange(e: any) {
        const key = e.target.id;
        const value = e.target.value
        setData(data => ({
            ...data,
            [key]: value,
        }))
    }

    function handleSubmit(e: any) {
        e.preventDefault()
        console.log(data)
        router.post(`/admin/product`, data, {
            forceFormData: true,
        })
    }
    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white overflow-hidden sm:rounded-lg p-10 flex flex-col gap-2
            shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]
            "
        >
            <Input className="text-gray-500"
                placeholder='title'
                onChange={handleChange}
                id='title'
            />
            <textarea className="text-gray-500"
                placeholder='description'
                // defaultValue={data.description}
                onChange={handleChange}
                id='description'
            >
            </textarea>
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
                type='number'
            />
            <Input className="text-gray-500"
                placeholder='price'
                id='image'
                type='file'
                onChange={(event: any) => setData('image', event.target.files[0])}
            />
            {
                data.image &&
                <img
                    className='w-full max-w-sm h-1/4'
                    src={
                        URL.createObjectURL(data.image)
                    } alt={data.image} />
            }
            <button

                type="submit"
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-[2rem] px-boxMd rounded
                flex gap-[1rem] justify-center items-center
                opacity-50 disabled:cursor-not-allowed`}
            >
                {
                    progress &&
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                    </svg>
                }
                Save Data
            </button>
        </form>
    )
}