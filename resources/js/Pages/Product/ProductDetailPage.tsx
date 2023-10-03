import { PageProps } from '@/types'
import React, { useEffect } from 'react'
import { Head, Link, usePage } from '@inertiajs/react'
import Guest from '@/Layouts/GuestLayout'
import { Button, notification, Space } from 'antd';
import SectionContainer from '@/Components/General/SectionContainer';
import ProductCard from '@/Components/Product/ProductCard';
import Header from '@/Components/General/Header';

// 
import BackIcon from './Assets/back-icon.svg'
import ShareIcon from '@/Assets/Icon/ShareIcon.svg'
import CopyIcon from '@/Assets/Icon/CopyIcon.svg'
// import Markdown from 'react-markdown';
// import { MDXEditor, imagePlugin, linkDialogPlugin, linkPlugin, listsPlugin } from '@mdxeditor/editor';
// import Modal from '@/Components/Modal';

// import "@/Styles/ContentPreview.scss"
import "@/Styles/TextEditor.scss"
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Highlight from '@tiptap/extension-highlight';
import TextAlign from '@tiptap/extension-text-align';

type NotificationType = 'success' | 'info' | 'warning' | 'error';



interface Props {
    html: string;
}

// const Preview: React.FC<Props> = ({ html }) => {
//     useEffect(() => {
//         console.log(html)
//     }, [html])
//     return (
//         <div
//             className='ContentPreview'
//             dangerouslySetInnerHTML={{
//                 __html: html
//             }} />
//     );
// };

const Preview = ({ html }: any) => {
    const editor = useEditor({
        editable: false,
        content: html,
        extensions: [
            StarterKit,
            Image,
            Highlight,
            TextAlign

        ]
    })
    return (
        <div
            className='TextEditor'
        >
            <div>
                <EditorContent
                    editor={editor}
                    content={html}
                    className="content-preview" />
            </div>
        </div>
    )
}



export default function ProductDetailPage() {
    const ProductData: any = usePage().props.ProductData
    const RecommendedProduct: any = usePage().props.RecommendedProduct
    const description = ProductData.description

    // Debugger
    useEffect(() => {
    }, [])
    // 


    const [api, contextHolder] = notification.useNotification();

    const openNotificationWithIcon = (type: NotificationType) => {
        api[type]({
            message: 'Copied to clipboard',
        });
    };

    return (
        <>
            <Head>
                <title>
                    {ProductData.title}
                </title>
            </Head>
            {contextHolder} {/*for notification*/}
            <Guest>
                <SectionContainer>
                    <div className="flex flex-col md:flex-row justify-start items-start min-h-screen w-full p-boxS
                    ">
                        <div className="text-secondary flex flex-col gap-[1rem] w-full">
                            <div
                                className='flex w-full'
                            >
                                <button
                                    className=' text-white flex flex-row justify-center items-center 
                                    gap-[0.1rem]  hover:opacity-50'
                                    onClick={() => window.history.back()}
                                >
                                    <img
                                        className='w-[1.7rem] h-[1.7rem]'
                                        src={BackIcon} alt="" />
                                    <div
                                        className='font-poppins text-[1.5rem] font-[400]'
                                    >
                                        Back
                                    </div>
                                </button>
                            </div>
                            <Header
                                title={ProductData.title}
                            />
                            <h2
                                className='font-poppins text-center text-[1rem] 
                                font-[400]  text-secondary'
                            >
                                {ProductData.created_at}
                            </h2>
                            <Preview
                                html={description}
                            />
                            {ProductData.image.map((image: any) => (
                                <img
                                    className='w-full 
                                    h-[20rem] 
                                    object-cover 
                                    object-center'
                                    src={image.image} alt="" />
                            ))}
                            <div
                                className='flex gap-2'>
                                {/* Share Button */}
                                <ShareButton />
                                <button
                                    className='btn bg-secondary text-primaryBlack font-[700]
                                    flex gap-[0.5rem]
                                    justify-center items-center'
                                    onClick={() => {
                                        navigator.clipboard.writeText(window.location.href);
                                        openNotificationWithIcon('success')
                                    }}
                                >
                                    Copy Link

                                    <img className='
                                        h-[1.5rem]
                                        aspect-square'
                                        src={CopyIcon} alt="" />

                                </button>
                            </div>

                        </div>
                    </div>
                    <div className="md:w-1/3
                        p-[1rem] md:p-[2rem] rounded-[0.75rem] 
                        ">
                        <h2
                            className='
                            font-poppins
                            text-[1.5rem] font-semibold my-[1rem] text-secondary'
                        >
                            More project & portofolio from me
                        </h2>
                        <div className="grid grid-cols-1 gap-4">
                            {/* {RecommendedProduct?.map((product: any) => (
                                <ProductCard
                                    key={product.id}
                                    ProductData={product}
                                    width='100%'
                                    rounded={true}
                                />
                            ))} */}
                        </div>
                    </div>
                </SectionContainer>
            </Guest >
        </>
    )
}


function ShareButton() {
    return (<>
        <button
            className='btn bg-secondary text-primaryBlack font-[700]
                        flex
                        gap-[0.5rem]
                        justify-center items-center'
        >
            Share
            <img
                className='h-[1.5rem] aspect-square'
                
                src={ShareIcon} alt=""
            />
        </button></>)
}