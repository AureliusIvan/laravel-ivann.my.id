import { Node, mergeAttributes } from '@tiptap/core';
import { Editor, RawCommands } from '@tiptap/react';
// import { toggleBlockType } from '@tiptap/commands'

export const StarNode = Node.create({
    name: 'customNode',

    defaultOptions: {
        HTMLAttributes: {
            class: 'star',
        },
    },

    group: 'block',

    content: 'inline*',

    parseHTML() {
        return [
            {
                tag: 'p',
            },
        ]
    },

    renderHTML({ HTMLAttributes }) {
        return ['p', {
            ...HTMLAttributes,
            class: 'star',
        }, 0]
        
    },

})