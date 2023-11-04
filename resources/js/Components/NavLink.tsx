import { Link, InertiaLinkProps } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }: InertiaLinkProps & { active: boolean }) {
    return (
        <Link
            {...props}

        >
            <span
                className={`flex flex-row items-center gap-2.5 text-[1.25rem] focus:none text-white
                    justify-center relative 
                    ${active ? 'font-bold' : ''}
                    `}
            >
                <div
                    className={`${active ? 'opacity-1' : 'opacity-0'} bg-secondary h-[0.5rem] w-[0.5rem] rounded-full 
                    absolute left-[-1rem] top-[0.5rem] transition duration-300 ease-in-out
                    `}
                />
                {children}
            </span>
        </Link>
    );
}
