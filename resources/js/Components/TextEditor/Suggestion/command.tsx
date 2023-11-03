import { Extension } from "@tiptap/core";
import Suggestion from "@tiptap/suggestion";

const Commands = Extension.create({
    name: "mention",

    defaultOptions: {
        suggestion: {
            char: "/",
            startOfLine: false,

            command: ({ editor, range, props }: any) => {
                props.command({ editor, range, props });
            },

            // Define your list of commands here
            items: ({ editor, query }: any) => {
                let items = [
                    { command: 'bold', description: 'Make text bold' },
                    { command: 'italic', description: 'Make text italic' },
                    // Add more commands as needed
                ];

                if (query) {
                    items = items.filter(item => item.command.startsWith(query));
                }

                return items;
            },

            // Define how your commands should be rendered in the dropdown
            render: () => ({
                onStart: ({ editor, item, command }: any) => {
                    return (
                        <div onClick={command}>
                            <strong>{item.command}</strong> - {item.description}
                        </div>
                    );
                }
            })
        }
    },

    addProseMirrorPlugins() {
        return [
            Suggestion({
                editor: this.editor,
                ...this.options.suggestion
            })
        ];
    }
});

export default Commands;
