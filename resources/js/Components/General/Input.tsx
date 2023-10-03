import React from 'react';


type Props = {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder?: string,
    type?: string,
    value?: string,
    id?: string,
    required?: boolean,
    defaultValue?: string | any,
    name?: string,
}

const Input = ({ ...props }: Props) => {
    return (
        <input
            placeholder={props.placeholder}
            type={props.type}
            onChange={(e) => props.onChange && props.onChange(e)}
            className={`block w-full px-[0.8rem] border rounded-md focus:outline-none text-opacity-30 focus:font-semibold`}
            value={props.value}
            id={props.id}
            name={props.name || props.id}
            {...props}
            required={props.required}
        />

    )
}

Input.defaultProps = {
}


export default Input;