import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TipTapImage from '@tiptap/extension-image'
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import React, { useEffect, useState } from 'react'
import "@/Styles/TextEditor.scss"
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import { createRoot } from 'react-dom/client';
import axios from 'axios';
// import { TextEditorFeat } from './Feature';

const Button = ({ func, className, children, disabled, active }: {
    func?: any,
    className?: string,
    children: React.ReactNode
    disabled?: boolean,
    active?: boolean
}) => {
    useEffect(() => {
        console.log("active:", active);
    }, [active])
    return (
        <button
            onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                // setActive(!active)
                func()
            }}
            disabled={disabled}
            className={`bg-primaryBlack
            text-white font-bold p-boxS 
            ${className}`}

            style={{
                backgroundColor: active ? "#1F2937" : "#F9F5F2",
                color: active ? "#F9F5F2" : "#1F2937",
                // border: "2px solid rgba(0, 0, 0, 0.7)",
                height: "2rem",
                width: "fit-content",
                padding: "0.2rem",
            }}
        >
            {children}
        </button>
    )
}

const MenuBar = ({ editor }: any) => {
    if (!editor) {
        return null
    }

    const addImage = () => {
        const url = window.prompt('Enter the image URL or Drag and Drop the image to the editor')
        if (url) {
            editor.chain().focus().setImage({ src: url }).run()
        }
    }

    const TextEditorFeat = [

        {
            "title": "bold",
            "active": editor.isActive("bold"),
            "func": () => editor.chain().focus().toggleBold().run(),
            "disabled": !editor.can().chain().focus().toggleBold().run(),
            "icon": 'https://www.svgrepo.com/show/507537/bold.svg'
        },
        {
            "title": "italic",
            "active": editor.isActive("italic"),
            "func": () => editor.chain().focus().toggleItalic().run(),
            "disabled": !editor.can().chain().focus().toggleItalic().run(),
        },
        {
            "title": "strike",
            "active": editor.isActive("strike"),
            "func": () => editor.chain().focus().toggleStrike().run(),
            "disabled": !editor.can().chain().focus().toggleStrike().run()
        },
        {
            "title": "code",
            "active": editor.isActive("code"),
            "func": () => editor.chain().focus().toggleCode().run(),
            "disabled": !editor.can().chain().focus().toggleCode().run()
        },
        {
            "title": "Highlight",
            "active": editor.isActive("highlight"),
            "func": () => editor.chain().focus().toggleHighlight().run(),
            "disabled": ""
        },
        {
            "title": "left",
            "active": editor.isActive("textAlign", { align: "left" }),
            "func": () => editor.chain().focus().setTextAlign('left').run(),
            "disabled": ""
        },
        {
            "title": "center",
            "active": editor.isActive("textAlign", { align: "center" }),
            "func": () => editor.chain().focus().setTextAlign('center').run(),
            "disabled": ""
        },
        {
            "title": "right",
            "active": editor.isActive("textAlign", { align: "right" }),
            "func": () => editor.chain().focus().setTextAlign('right').run(),
            "disabled": ""
        },
        {
            "title": "clear marks",
            "active": editor.isActive("textAlign", { align: "right" }),
            "func": () => editor.chain().focus().unsetAllMarks().run(),
            "disabled": ""
        },
        {
            "title": "clear nodes",
            "active": editor.isActive("textAlign", { align: "right" }),
            "func": () => editor.chain().focus().clearNodes().run(),
            "disabled": ""
        },
        {
            "title": "paragraph",
            "active": editor.isActive("paragraph"),
            "func": () => editor.chain().focus().setParagraph().run(),
            "disabled": ""
        },
        {
            "title": "h1",
            "active": editor.isActive("heading", { level: 1 }),
            "func": () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
            "disabled": ""
        },
        {
            "title": "h2",
            "active": editor.isActive("heading", { level: 2 }),
            "func": () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
            "disabled": ""
        },
        {
            "title": "h3",
            "active": editor.isActive("heading", { level: 3 }),
            "func": () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
            "disabled": ""
        },
        {
            "title": "h4",
            "active": editor.isActive("heading", { level: 4 }),
            "func": () => editor.chain().focus().toggleHeading({ level: 4 }).run(),
            "disabled": ""
        },
        {
            "title": "h5",
            "active": editor.isActive("heading", { level: 5 }),
            "func": () => editor.chain().focus().toggleHeading({ level: 5 }).run(),
            "disabled": ""
        },
        {
            "title": "h6",
            "active": editor.isActive("heading", { level: 6 }),
            "func": () => editor.chain().focus().toggleHeading({ level: 6 }).run(),
            "disabled": ""
        },
        {
            "title": "bulletlist",
            "active": editor.isActive("bulletList"),
            "func": () => editor.chain().focus().toggleBulletList().run(),
            "disabled": ""
        },
        {
            "title": "ordered list",
            "active": editor.isActive("orderedList"),
            "func": () => editor.chain().focus().toggleOrderedList().run(),
            "disabled": ""
        },
        {
            "title": "code block",
            "active": editor.isActive("codeBlock"),
            "func": () => editor.chain().focus().toggleCodeBlock().run(),
            "disabled": ""
        },
        {
            "title": "blockquote",
            "active": editor.isActive("blockquote"),
            "func": () => editor.chain().focus().toggleBlockquote().run(),
            "disabled": ""
        },
        {
            "title": "horizontal rule",
            "active": editor.isActive("horizontalRule"),
            "func": () => editor.chain().focus().setHorizontalRule().run(),
        },
        {
            // for image
            "title": "image",
            "active": editor.isActive("image"),
            "func": () => addImage(),
        },
        {
            // custom button
            "title": "custom button",
            "active": false,
            "func": () => {
                console.log("custom button clicked");
            },
        }
    ]
    return (
        <div className='menu-bar'>
            {/* Modal Gallery */}
            <Button>
                Test    
            </Button>
            {
                TextEditorFeat.map((item, index) => (
                    <Button
                        key={index}
                        func={item.func}
                        active={item.active}
                        className='
                        align-middle border-2 border-black
                        border-opacity-50
                        rounded-md
                        '
                    >
                        {item.icon ?
                            <img src={item.icon}

                                alt={item.title}
                                className={`object-contain h-full
                                ${item.active ? "filter invert" : ""}
                                `}
                            />
                            : item.title}
                    </Button>
                ))
            }
        </div>
    )
}

export default ({ setData, data, setContent }: any) => {
    function uploadImage(file: any) {
        const data = new FormData();
        data.append('image', file);
        return axios.post('/api/uploadimage', data);
    };
    const editor = useEditor({
        onUpdate: ({ editor }: any) => {
            setContent({
                content: editor.getHTML(),
            })
        },
        extensions: [
            HorizontalRule.configure({
                HTMLAttributes: {
                    class: 'horizontal-rule',
                },
            }),
            StarterKit,
            TipTapImage.configure({
                inline: true,
                allowBase64: true,
            }),
            TextAlign.configure({
                types: ["heading", "paragraph"],
            }),
            Highlight,

        ],
        editorProps: {
            handleDrop: function (view, event, slice, moved) {
                if (!moved && event.dataTransfer && event.dataTransfer.files && event.dataTransfer.files[0]) { // if dropping external files
                    let file = event.dataTransfer.files[0]; // the dropped file
                    let filesize: number = parseFloat(((file.size / 1024) / 1024).toFixed(4));
                    if ((file.type === "image/jpeg" || file.type === "image/png") && filesize < 10) { // check valid image type under 10MB
                        // check the dimensions
                        let _URL = window.URL || window.webkitURL;
                        let img = new Image();

                        img.src = _URL.createObjectURL(file);
                        img.onload = function () {
                            if (img.width > 5000 || img.height > 5000) {
                                window.alert("Your images need to be less than 5000 pixels in height and width."); // display alert
                            } else {
                                // valid image so upload to server
                                // uploadImage will be your function to upload the image to the server or s3 bucket somewhere
                                uploadImage(file).then(function (response) { // response is the image url for where it has been saved    
                                    // insert the image into the editor
                                    view.dispatch(view.state.tr.replaceSelectionWith(view.state.schema.nodes.image.create({
                                        src: response.data.data.url,
                                        alt: file.name,
                                        title: file.name,
                                    })));
                                    // do something with the response
                                }).catch(function (error) {
                                    console.log(error);
                                    if (error) {
                                        window.alert("There was a problem uploading your image, please try again.");
                                    }
                                });
                            }
                        };
                    } else {
                        window.alert("Images need to be in jpg or png format and less than 10mb in size.");
                    }
                    return true; // handled
                }
                return false; // not handled use default behaviour
            }
        },
        content: data,
        onBlur: ({ editor }: any) => {
            setContent({
                content: editor.getHTML(),
            })
        }
    })


    return (
        <div
            className='TextEditor'
        >
            <div>
                <MenuBar editor={editor} />
                <EditorContent
                    allowFullScreen={true}
                    placeholder='Start typing...'
                    editor={editor}
                    className="content-editor" />
            </div>
        </div>
    )
}