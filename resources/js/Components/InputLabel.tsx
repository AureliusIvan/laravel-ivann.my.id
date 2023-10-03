import { LabelHTMLAttributes } from 'react';

export default function InputLabel({ value, className = '', children, required, ...props }: LabelHTMLAttributes<HTMLLabelElement> & { value?: string, required?: boolean }) {
    return (
        <label {...props} className={`font-poppins block font-medium text-sm text-primaryBlack` + className}>
            {value ? value : children} {required && <span className='font-poppins text-primaryRed'>*</span>}
        </label>
    );
}
