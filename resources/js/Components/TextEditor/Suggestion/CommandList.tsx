import React, { Component } from "react";
import { ReactRenderer } from "@tiptap/react";

interface CommandListProps extends React.PropsWithChildren<{}> {
    items: any[];
    command: (item: any) => void;
    render: (props: any) => any;
    
}


class CommandList extends Component<CommandListProps> {
    state = {
        selectedIndex: 0
    };

    onKeyDown({ event }: any) {
        if (event.key === "ArrowUp") {
            this.upHandler();
            return true;
        }

        if (event.key === "ArrowDown") {
            this.downHandler();
            return true;
        }

        if (event.key === "Enter") {
            this.enterHandler();
            return true;
        }

        return false;
    }

    upHandler() {
        this.setState({
            selectedIndex:
                (this.state.selectedIndex + this.props.items.length - 1) %
                this.props.items.length
        });
    }

    downHandler() {
        this.setState({
            selectedIndex: (this.state.selectedIndex + 1) % this.props.items.length
        });
    }

    enterHandler() {
        this.selectItem(this.state.selectedIndex);
    }

    selectItem(index: any) {
        const item = this.props.items[index];

        if (item) {
            this.props.command(item);
        }
    }

    render() {
        const { items }: any = this.props;
        return (
            <div className="items">
                {items.map((item: any, index: any) => {
                    return (
                        <button
                            className={`item ${index === this.state.selectedIndex ? "is-selected" : ""
                                }`}
                            key={index}
                            onClick={() => this.selectItem(index)}
                        >
                            {item.element || item.title}
                        </button>
                    );
                })}
            </div>
        );
    }
}

export default CommandList;