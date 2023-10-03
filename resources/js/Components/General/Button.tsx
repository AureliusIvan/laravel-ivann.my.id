type Props = {
    children: React.ReactNode;
    onClick?: (e: any) => void;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}


const Button = ({ children, onClick, ...props }: Props) => {
    return (<button
        type="button"
        className={`w-full bg-green text-white hover:bg-blue-70 font-bold py-[0.3rem] px-boxS rounded-sm
        transition-all duration-300 ease-in-out
        ${props.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-50'}
        ${props.className}`
        }
        onClick={onClick}
        disabled={props.disabled}
    >
        {children}
    </button>)
}


export default Button;