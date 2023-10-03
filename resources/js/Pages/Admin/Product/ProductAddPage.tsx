
import { Input } from 'antd'
import { router, useForm } from '@inertiajs/react'
import AdminLayout from '@/Layouts/AdminLayout';
import SectionContainer from '@/Components/General/SectionContainer';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import InputLabel from '@/Components/InputLabel';
import Button from '@/Components/General/Button';
import { useState, useEffect } from 'react';
// // MDX Editor
// import '@mdxeditor/editor/style.css'
// import { MDXEditor } from '@mdxeditor/editor/MDXEditor'
// import { UndoRedo } from '@mdxeditor/editor/plugins/toolbar/components/UndoRedo'
// import { BoldItalicUnderlineToggles } from '@mdxeditor/editor/plugins/toolbar/components/BoldItalicUnderlineToggles'
// import { toolbarPlugin } from '@mdxeditor/editor/plugins/toolbar'
// import {

//     BlockTypeSelect,
//     ButtonWithTooltip,
//     CodeToggle, CreateLink, InsertImage, InsertTable, ListsToggle, Separator, ToMarkdownOptions, codeBlockPlugin, corePlugin, imagePlugin, linkDialogPlugin, tablePlugin
// } from '@mdxeditor/editor';
// import { linkPlugin } from '@mdxeditor/editor/plugins/link';
// import { listsPlugin } from '@mdxeditor/editor/plugins/lists';
// import { MDXProvider } from '@mdx-js/react';
// import ReactMarkdown from 'react-markdown';
// import { BlockTypeSelect } from '@mdxeditor/editor/plugins/toolbar/components/BlockTypeSelect';
// Tiptap
import { EditorProvider, FloatingMenu, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

// Assets 
import BackIcon from '@/Assets/Icon/back-icon.svg'
import TextEditor from '@/Components/TextEditor/TextEditor';

type imagesType = {
    images: any
}


function goBack(e: any) {
    e.preventDefault();
    router.visit('/admin/portofolio')
}

export default function ProductAddPage(ProductData: any) {
    // ✨ form logic
    const [textData, setTextData] = useState<any>('')
    const { data, setData, post, progress, isDirty, wasSuccessful } = useForm({
        id: ProductData.id,
        title: ProductData.title,
        description: ProductData.description,
        slug: ProductData.slug,
        price: 0,
        images: [],
    })

    function handleChange(e: any) {
        const key = e.target.id;
        const value = e.target.value
        setData(data => ({
            ...data,
            [key]: value,
        }))
    }

    const handleImageChange = (e: any) => {
        try {
            setData((prevData: any) => ({
                ...prevData,
                images: [
                    ...prevData.images,
                    e.target.files
                ],
            }));
        } catch (error) {
            console.log(error)
        }
    };


    function handleSubmit(e: any) {
        e.preventDefault()
        router.post(`/admin/portofolio`, data, {
            forceFormData: true,
        })
    }


    return (
        <AdminLayout>
            <SectionContainer
                className=' bg-white overflow-hidden sm:rounded-lg p-boxMd'
            >
                <form
                    className='flex flex-col gap-[1rem]'
                >
                    <div
                        className='flex flex-row justify-start items-center'
                    >
                        <button
                            className=' text-primaryBlack flex flex-row justify-center items-center 
                                    gap-[0.1rem]
                                    hover:opacity-30'
                            onClick={goBack}
                        >
                            <img
                                className='w-[1.7rem] h-[1.7rem] filter invert-[1]'
                                src={BackIcon} alt="" />
                            <div
                                className='font-poppins text-[1.5rem] font-[400]'
                            >
                                Back
                            </div>
                        </button>
                    </div>
                    <h1
                        className='font-poppins text-[2rem] font-bold text-primaryBlack'
                    >
                        Add Project & Portofolio
                    </h1>
                    <div>
                        <InputLabel htmlFor="title" value="Portofolio Title" />
                        <Input className="block w-full p-2 border rounded-md focus:outline-none"
                            placeholder='title'
                            onChange={handleChange}
                            id='title'
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="description" value="Portofolio Description" />
                        <div
                            className='flex flex-col gap-[1rem]
                        border border-transparentWhite rounded-md'
                        >
                            <TextEditor
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
                    </div>
                    <div>
                        <InputLabel htmlFor="slug" value="Portofolio Slug" />
                        <Input className="block w-full border rounded-md focus:outline-none"
                            placeholder='slug'
                            onChange={handleChange}
                            id='slug'
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="price" value="Portofolio Price" />
                        <Input className="block w-full border rounded-md focus:outline-none"
                            placeholder='price'
                            onChange={handleChange}
                            id='price'
                            type='number'
                            defaultValue={0}
                        />
                    </div>
                    <div>
                        <label
                            className="block mb-2 text-sm font-medium text-primaryBlack">Upload file</label>
                        <input
                            className="block w-full text-sm text-secondary border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none" aria-describedby="file_input_help" id="file_input"
                            type="file"
                            accept='image/*'
                            multiple
                            placeholder='image'
                            onChange={handleImageChange}
                        />
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                        <div
                            className='
                            flex flex-wrap gap-[1rem] mt-2'
                        >
                            {
                                data.images?.map((image: any, i: any) => (
                                    <div
                                        className='flex flex-col gap-[1rem] h-max'
                                    >
                                        <img
                                            key={i}
                                            className='w-full max-w-sm h-1/4'
                                            src={URL.createObjectURL(image[0])}
                                            alt={image[0]} />
                                        {/* Button for deleting image */}
                                        <button
                                            className='btn bg-primaryRed text-white font-[700]'
                                            onClick={() => {
                                                setData((prevData: any) => ({
                                                    ...prevData,
                                                    images: prevData.images.filter((_: any, index: any) => index !== i)
                                                }))
                                            }}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <Button
                        className='fixed bottom-0 left-0'
                        type="submit"
                        onClick={handleSubmit}

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
                        Save
                    </Button>
                </form>
            </SectionContainer>
        </AdminLayout>
    )
}