import { message, Upload } from 'antd'
import React, { useState, useEffect } from 'react'
import { Link, router, useForm } from '@inertiajs/react'
import InputLabel from '@/Components/InputLabel'
import type { UploadProps } from 'antd/lib/upload/interface';
import { PageProps } from '@/types';
import Button from '@/Components/General/Button';
import TextEditor from '@/Components/TextEditor/TextEditor';

import Input from '@/Components/General/Input';
import axios from 'axios';

export default function ProductEditCard(ProductData: any) {
    // ✨ form logic
    const { data, setData, post, progress } = useForm({
        id: ProductData.id,
        title: ProductData.title,
        description: ProductData.description,
        slug: ProductData.slug,
        price: ProductData.price,
        image: null,
    })

    const [imagePreview, setImagePreview] = useState('') //for handling image preview

    function handleChange(e: any) {
        const key = e.target.id;
        const value = e.target.value
        setData(data => ({
            ...data,
            [key]: value,
        }))
    }


    // for handling submit of the edit form
    function handleSubmit(e: any) {
        e.preventDefault()
        console.log("Update Data", data)
        router.post(`/admin/portofolio/${data.id}`, data, {
            forceFormData: true,
        })
    }



    // for handling delete of the edit form
    function handleDelete(e: any) {
        e.preventDefault()
        console.log(data)
        router.delete(`/admin/portofolio/${data.id}`, {
            method: 'delete',
        })
    }



    const [OpenModal, setOpenModal] = useState(false)
    const handleOpenModal = () => { setOpenModal(true) }
    const handleCloseModal = (e: any) => {
        e.preventDefault()
        e.stopPropagation()
        setOpenModal(false)
    }

    useEffect(() => {
        console.log(ProductData)
    }, [])

    return (
        <>
            <button
                className='bg-white overflow-hidden sm:rounded-lg p-boxS flex flex-col gap-2 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] hover:filter hover:brightness-50 transition duration-300'
                onClick={handleOpenModal}
            >
                <img
                    src={ProductData.image}
                    alt={ProductData.title}
                    className='rounded-xl'
                />
                <h1
                    className='font-poppins text-[2rem] font-normal text-primaryBlack text-opacity-75'
                >
                    {ProductData.title}
                </h1>
            </button>
            {/* Modal Edit */}
            <div
                id='Modal-Overlay'
                className={`fixed overflow-hidden top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex justify-center items-center bg-primaryBlack z-30 ${OpenModal === true ? 'flex' : 'hidden'}`}
                onClick={handleCloseModal}
            >
                <form
                    onSubmit={handleSubmit}
                    className={`
                    xl:w-[50rem]
                    h-full min-h-fit w-full relative bg-white overflow-scroll sm:rounded-lg p-boxMd flex flex-col 
                    gap-[1rem] shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] 
                `}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        id='Close-Modal-Button'
                        onClick={handleCloseModal}
                        className='bg-[red] text-primary absolute top-0 right-0 p-boxS hover:opacity-50 cursor-pointer'
                    >
                        X
                    </button>
                    <h1
                        className='font-poppins font-bold text-[2rem]'
                    >
                        Edit Product
                    </h1>
                    <span
                        className='font-poppins opacity-50'
                    >
                        Last updated at: {ProductData.updated_at}
                    </span>
                    <div>
                        <InputLabel
                            title='Title'
                            htmlFor='title'
                            required={true}
                        >
                            Nama Produk
                        </InputLabel>
                        <Input
                            required={true}
                            placeholder='Product title'
                            defaultValue={data.title}
                            onChange={handleChange}
                            id='title'
                        />
                    </div>
                    <div>
                        <InputLabel
                            required={true}
                        >
                            Deskripsi
                        </InputLabel>
                        {/* <Input
                            defaultValue={data.description}
                            onChange={handleChange}
                            id='description'
                            placeholder='Product description'
                        /> */}
                        <TextEditor
                            data={data.description}
                            setContent={
                                (value: any) => {
                                    setData((prevData: any) => ({
                                        ...prevData,
                                        description: value.content,
                                    }))
                                }
                            }
                        />
                    </div>
                    <div>
                        <InputLabel
                            required={true}
                        >
                            Slug
                        </InputLabel>
                        <Input
                            defaultValue={data.slug}
                            onChange={handleChange}
                            id='slug'
                        />
                    </div>
                    <div>
                        <InputLabel
                            required={true}
                        >
                            Harga
                        </InputLabel>
                        <Input
                            type='number'
                            defaultValue={data.price}
                            onChange={handleChange}
                            id='price'
                        />
                    </div>
                    <div>
                        <InputLabel
                            required={true}
                        >
                            File
                        </InputLabel>
                        <input
                            type='file'
                            className='relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-boxS py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-secondary file:px-boxS file:py-[0.32rem] file:text-primaryWhite file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary'
                            id="image" onChange={(event: any) => {
                                setData('image', event.target.files[0])
                                setImagePreview(URL.createObjectURL(event.target.files[0]))
                            }} />

                    </div>
                    <div>
                        <img
                            className='h-full w-full max-w-sm object-cover'
                            src={
                                imagePreview ?
                                    imagePreview
                                    :
                                    ProductData.image.image
                            }
                        />
                        {/* <p>
                            {ProductData.image.image}
                        </p> */}
                    </div>
                    <div
                        className='flex w-full gap-[1rem]'
                    >
                        <Button
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Save
                        </Button>
                        <button
                            type='button'
                            onClick={handleDelete}
                            className="w-full bg-[red] text-white hover:bg-red-700  font-bold py-[0.5rem] px-boxS rounded
                            hover:opacity-50"
                        >
                            Delete
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}


// export default function ProductEditCard(ProductData: any) {
//     useEffect(() => {
//         console.log(ProductData);
//     }, [])
//     return (
//         <>
//             <div className="
//                 p-4 w-full border-2 border-gray-300 shadow-sm rounded-md flex flex-col justify-center items-center hover:shadow-md transition duration-300">
//                 <h1 className="text-2xl w-full text-center font-bold mb-2">{ProductData.title}</h1>
//                 <h2 className="text-gray-500 mb-2">{ProductData.created_at}</h2>
//                 {ProductData.image.image && (
//                     <img
//                         src={ProductData.image.image}
//                         alt={ProductData.title}
//                         className="w-full h-[15rem] object-cover rounded-md mb-2"
//                     />
//                 )}
//                 <p className="
//             text-ellipsis
//             overflow-hidden
//             text-gray-800 line-clamp-3 h-full">{ProductData.description}</p>
//                 <Link
//                     href={`/product/${ProductData.slug}`}
//                     className="mt-2 text-white bg-green-600 hover:bg-green-700 transition duration-300 ease-in-out rounded-md p-2 text-center w-full"
//                 >
//                     Read More
//                 </Link>
//             </div>

//         </>
//     )
// }


// File upload
const { Dragger } = Upload;

const props: UploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};