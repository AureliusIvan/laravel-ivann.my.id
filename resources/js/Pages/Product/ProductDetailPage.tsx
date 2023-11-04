import { PageProps } from '@/types'
import React, { useEffect, useState } from 'react'
import { Head, Link, usePage } from '@inertiajs/react'
import Guest from '@/Layouts/GuestLayout'
import { Button, notification, Space, Modal } from 'antd';
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
import "@/Styles/ContentPreview.scss"
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Highlight from '@tiptap/extension-highlight';
import TextAlign from '@tiptap/extension-text-align';
import TagComponent from '@/Components/Product/TagComponent';
import TiptapLink from '@tiptap/extension-link';

import "./ProductDetailPage.scss"

type NotificationType = 'success' | 'info' | 'warning' | 'error';


interface Props {
    html: string;
}


const ShareText = () => {
    const link = window.location.href
    return `Hey Check this Out! ${link}`
}


const Preview = ({ html }: any) => {
    const editor = useEditor({
        editable: false,
        content: html,
        extensions: [
            StarterKit,
            Image,
            Highlight,
            TextAlign,
            Image.configure({
                inline: true,
                allowBase64: true,
            }),
            TiptapLink.configure({
                HTMLAttributes: {
                    class: 'link',
                },
                openOnClick: false,
            }),
        ]
    })

    useEffect(() => {
        console.log(html)
    }, [html])
    return (
        <div
            className='TextEditor'
        >
            <div
            >
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

    //modal state
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    // Debugger
    useEffect(() => {
        console.log(ProductData)
        // console.log(RecommendedProduct)
    }, [])

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
            <Modal
                centered
                className='ModalShare'
                title="Share to your friends!"
                open={isModalOpen}
                onOk={handleOk} onCancel={handleCancel}
                footer={null}
            >
                {/* share on instagram dll */}
                <div
                    className='flex flex-col gap-2'
                >
                    <a href={`https://api.whatsapp.com/send?text=${ShareText()}`} data-action="share/whatsapp/share">Share via Whatsapp web</a>
                </div>
            </Modal>
            <Guest>
                <div
                    className='
                    product-detail-container
                    flex
                    justify-center items-center w-full h-full'
                >
                    <div
                        className='xl:w-[50rem]
                        '
                    >
                        <div className="flex flex-col md:flex-row justify-start 
                                        items-start min-h-screen p-boxS">
                            <div className="text-secondary flex flex-col gap-[1rem] w-full">
                                <div className='flex w-full'>
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

                                <div
                                    className='flex gap-2'
                                >
                                    <TagComponent
                                        tag='code'
                                    />
                                    <TagComponent
                                        tag='life'
                                    />
                                </div>
                                <Header
                                    title={ProductData.title}
                                    createdAt={ProductData.created_at}
                                />


                                <Preview
                                    html={description}
                                />
                                <div
                                    className='flex gap-2'>
                                    {/* Share Button */}
                                    <button
                                        className='btn bg-secondary text-primaryBlack font-[700]
                                    flex gap-[0.5rem]
                                    justify-center items-center'
                                        onClick={showModal}
                                    >
                                        Share

                                        <img className='h-[1.5rem] aspect-square'
                                            src={ShareIcon} alt="" />
                                    </button>
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
                    </div>
                </div>
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






const ShareCard = ({ icon, link, title }: { icon: string, link: string, title?: string }) => {
    return (
        <a
            href={link}
            target='_blank'
            className="w-fit h-fit relative
            flex justify-center items-center gap-[1rem]
            ">
            <div className="
            w-11 h-11 md:w-13 md:h-13 left-0 top-0 
            rounded-full bg-secondary cursor-pointer pointer-events-auto hover:bg-opacity-50 transition-all duration-300 ease-in-out p-[0.5rem]"
            >
                <img
                    className='
                    w-full h-full object-contain'
                    src={icon} alt="" />
            </div>
            <p
                className='
                md:hidden
                block  text-white text-[1rem] md:text-[0.875rem] font-[500] text-center mt-[0.5rem]'
            >
                {title}
            </p>
        </a>
    )
}