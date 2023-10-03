import React from 'react'
import { usePage } from '@inertiajs/react'
import { router } from '@inertiajs/react'

export default function EmailFormSection() {

    const [values, setValues] = React.useState<any>({
        email: '',
        name: '',
        message: ''
    })


    function handleChange(e: any) {
        const key = e.target.id;
        const value = e.target.value
        setValues((values: any) => ({
            ...values,
            [key]: value,
        }))
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        console.log(values)
        router.post('/api/send-email', values)
    }
    return (
        <div className="p-5 shadow-xl rounded-lg overflow-hidden">
            <h2 className="text-2xl font-semibold mb-4">Kirim pesan ke kami:</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="relative">
                    <input
                        id="email"
                        onChange={handleChange}
                        placeholder="Email / Nomor Telepon"
                        className="w-full h-10 px-4 border-2 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                        type="text"
                    />
                </div>
                <div className="relative">
                    <input
                        id="name"
                        onChange={handleChange}
                        placeholder="Nama"
                        className="w-full h-10 px-4 border-2 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                        type="text"
                    />
                </div>
                <div className="relative">
                    <textarea
                        id="message"
                        onChange={handleChange}
                        placeholder="Pesan"
                        className="w-full h-32 px-4 py-2 border-2 rounded-md shadow-sm resize-none focus:outline-none focus:ring focus:ring-blue-300"
                    ></textarea>
                </div>
                <button
                    className="w-full h-10 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition duration-300"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>

    )
}
