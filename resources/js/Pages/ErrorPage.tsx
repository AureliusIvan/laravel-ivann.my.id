import Button from '@/Components/General/Button'
import { Link } from '@inertiajs/react'
import React from 'react'

export default function ErrorPage() {
    return (
        <section className="bg-[#000000]">
            <div className="container flex items-center min-h-screen px-[2rem] py-[2rem] mx-auto">
                <div className="flex flex-col items-center max-w-sm mx-auto text-center">
                    <p className="p-3 text-sm font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#FFFFFF" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                        </svg>
                    </p>
                    <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Page not found</h1>
                    <p className="mt-4 text-gray-500 dark:text-[#FFFFFF]">
                        The page you are looking for doesn't exist. Here are some helpful links:
                    </p>
                    <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
                        <Button
                            onClick={
                                () => {
                                    if (window.history.length > 1) {
                                        window.history.back();
                                    } else {
                                        window.location.href = "/";
                                    }
                                }}
                        >
                            Go Back
                        </Button>
                        <button
                            onClick={() => window.location.href = "/"}
                            className="
                        w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                            Take me home
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}