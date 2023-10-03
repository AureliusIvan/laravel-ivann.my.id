import { PageProps } from '@/types'
import React, { useEffect } from 'react'
import { useForm } from '@inertiajs/react'
import { router } from '@inertiajs/react'
import AdminLayout from '@/Layouts/AdminLayout'
import { Popconfirm } from 'antd'
import Button from '@/Components/General/Button'
import Input from '@/Components/General/Input'

export default function WebConfigPage({ webconfigs }: PageProps<{ webconfigs: any }>) {
    return (
        <AdminLayout>
            <div
                className="text-black flex flex-col justify-center items-center"
            >
                <div
                    className='Heading
                    flex flex-col items-center justify-center
                    bg-secondary shadow-md p-boxS w-full'
                >
                    <h1
                        className='text-white text-4xl font-semibold mb-3'
                    >
                        Website Configurations
                    </h1>
                    <p
                        className='text-primaryWhite'
                    >
                        Edit your website configurations here
                    </p>
                </div>
                <div
                    className=' overflow-visible sm:rounded-lg
                    w-[50rem] m-10 flex flex-col'
                >
                    {webconfigs ?
                        webconfigs.map((webconfig: any) => {
                            return (
                                <WebconfigItemCard key={webconfig.id}
                                    {...webconfig}
                                />
                            )
                        })
                        :
                        <div>
                            Error | Please Refresh
                        </div>
                    }
                </div>
            </div>
        </AdminLayout>
    )
}


// Card

const WebconfigItemCard = (webconfig: any) => {
    const defaultData = {
        id: webconfig.id,
        title: webconfig.title,
        category: webconfig.category,
        value: webconfig.value,
    }

    const { data, setData, post, processing, errors } = useForm({
        id: webconfig.id,
        title: webconfig.title,
        category: webconfig.category,
        value: webconfig.value,
    })
    // submit form 
    const [isDisabled, setIsDisabled] = React.useState(false);

    // handle change
    const handleChange = (e: any) => {
        const key = e.target.id;
        const value = e.target.value
        setData(data => ({
            ...data,
            [key]: value,
        }))
    }
    const handleSubmit = (e: any) => {
        e.preventDefault()
        console.log(data)
        router.post(`/admin/webconfig`, data, {
            forceFormData: true,
        })
    }

    // check if value doesn't change
    useEffect(() => {
        console.log(data.value)
        if (JSON.stringify(defaultData) === JSON.stringify(data) || errors.value || data.value === "") {
            setIsDisabled(true)
        } else {
            setIsDisabled(false)
        }
    }, [data])

    return (
        <form
            onSubmit={handleSubmit}
            className=" overflow-hidden
            p-boxMd
            w-full flex flex-col gap-3
            my-4 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]
            "
        >
            <h1 className="font-poppins text-[1.5rem] font-semibold">
                {webconfig.alias}
            </h1>
            {webconfig.type === 'image' || webconfig.type === 'file' ? (
                <>
                    <img src={webconfig.value} alt="" className='w-full max-w-sm h-1/4' />
                    <input type='file' className='input border border-gray-400 rounded-md focus:outline-none        focus:ring-2 focus:ring-blue-600 focus:border-transparent text-black'
                        id="value"

                        onChange={(event: any) => setData('value', event.target.files[0])} />
                </>
            ) : webconfig.type === 'text' ? (
                <Input
                    required
                    placeholder={`Input ${webconfig.alias}`}
                    // defaultValue={webconfig.value}
                    onChange={handleChange}
                    id='value'
                    value={data.value}
                />
            ) : webconfig.type === 'textarea' ? (
                <textarea
                    placeholder='Input description'
                    // defaultValue={webconfig.value}
                    onChange={handleChange}
                    id='value'
                />
            ) : (
                <Input
                    // defaultValue={webconfig.value}
                    onChange={handleChange}
                    id='value'
                />
            )}
            {
                webconfig.updated_at &&
                <p className="text-primaryBlack text-opacity-50 font-poppins">Last updated at: {webconfig.updated_at}</p>
            }
            <div
                className='flex gap-[1rem]'
            >
                {/* <Popconfirm
                    title="Ubah data"
                    description="
                Apakah anda yakin ingin mengubah data ini?"
                    onConfirm={handleSubmit}
                    okText="Yes"
                    cancelText="No"
                    disabled={processing}
                    okButtonProps={{
                        color: "#198754",
                    }}
                    okType='primary'
                > */}
                <Button
                    onClick={handleSubmit}
                    type='button'
                    disabled={processing || isDisabled}
                >
                    Submit
                </Button>
                {/* </Popconfirm> */}
                <Button
                    onClick={() => {
                        setData('value', defaultData.value)

                    }}
                    className='bg-primaryRed'
                >
                    Reset
                </Button>
            </div>
        </form>
    )
}
