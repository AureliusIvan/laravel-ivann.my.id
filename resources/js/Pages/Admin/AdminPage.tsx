import AdminLayout from '@/Layouts/AdminLayout'
import { Link } from '@inertiajs/react'
import React from 'react'

export default function AdminPage() {
    return (
        <AdminLayout
        >
            <div
                className='flex flex-col items-center justify-center w-full h-full'
            >
                <div
                    className='Heading
                    flex flex-col items-center justify-center
                    bg-blue-950 shadow-md p-boxMd w-full gap-[1rem] 
                    '
                >
                    <h1
                        className='text-[#000000] text-4xl font-semibold mb-3'
                    >
                        Welcome to Admin Dashboard
                    </h1>
                    <p
                        className='text-gray-400'
                    >
                        Configure your website here
                    </p>
                    <div>
                        <a
                            target='_blank'
                            href='/'
                            className='text-white rounded-sm p-boxS  text-xl font-semibold bg-green no-underline
                            hover:bg-opacity-70 flex gap-[1rem] justify-center items-center'
                        >
                            Open your website
                            <img src="https://www.svgrepo.com/show/478273/internet-3.svg"
                                className='w-[2rem] h-[2rem] filter invert-[1]'
                                alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </AdminLayout >
    )
}