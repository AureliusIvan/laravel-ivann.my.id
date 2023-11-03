const getSuggestionItems = (query: any) => {
    return [
        {
            title: "H1",
            command: ({ editor, range }: any) => {
                editor
                    .chain()
                    .focus()
                    .deleteRange(range)
                    .setNode("heading", { level: 1 })
                    .run();
            }
        },
        {
            title: "H2",
            command: ({ editor, range }: any) => {
                editor
                    .chain()
                    .focus()
                    .deleteRange(range)
                    .setNode("heading", { level: 2 })
                    .run();
            }
        },
        {
            title: "bold",
            command: ({ editor, range }: any) => {
                editor.chain().focus().deleteRange(range).setMark("bold").run();
            }
        },
        {
            title: "italic",
            command: ({ editor, range }: any) => {
                editor.chain().focus().deleteRange(range).setMark("italic").run();
            }
        },
        {
            title: "image",
            command: ({ editor, range }: any) => {
                console.log("call some function from parent");
                editor.chain().focus().deleteRange(range).setNode("paragraph").run();
            }
        }
    ]
        .filter((item) => item.title.toLowerCase().startsWith(query.toLowerCase()))
        .slice(0, 10);
};

export default getSuggestionItems;
