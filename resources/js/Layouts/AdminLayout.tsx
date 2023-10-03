import Navbar from '@/Components/General/Navbar/Navbar'
import React, { PropsWithChildren, ReactNode, useState } from 'react'
import "@/Styles/global.scss"
import { InertiaLinkProps, Link } from '@inertiajs/react'
import ApplicationLogo from '@/Components/ApplicationLogo'
import { User } from '@/types'
// import NavLink from '@/Components/NavLink'
import Dropdown from '@/Components/Dropdown'
import ResponsiveNavLink from '@/Components/ResponsiveNavLink'


export default function AdminLayout({ header, children }: PropsWithChildren<{ header?: ReactNode }>) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <>
            <div className="w-full min-h-screen bg-gray-100" >
                <nav className="w-full bg-[#FFFFFF] border-b border-gray-100 fixed left-0 top-0 z-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex justify-center items-center">
                                    {
                                        Route.map((item, index) => (
                                            <NavLink
                                                key={index}
                                                href={route(item.route)}
                                                active={route().current(item.route)}>
                                                {item.name}
                                            </NavLink>
                                        ))
                                    }
                                </div>
                            </div>


                            {/*  */}
                            <div className="hidden sm:flex sm:items-center sm:ml-6">
                                <div className="ml-3 relative">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex justify-center items-center rounded-md">
                                                <button
                                                    type="button"
                                                    className="flex justify-center items-center p-[0.5rem] border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:filter hover:brightness-50 focus:outline-none transition ease-in-out duration-150"
                                                >
                                                    {/* {user.name} */}
                                                    <svg
                                                        className="h-5 w-5"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                            <Dropdown.Link href={route('logout')} method="post" as="button">
                                                Log Out
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </div>

                            <div className="-mr-2 flex items-center sm:hidden">
                                <button
                                    onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                    className="inline-flex items-center justify-center p-boxS rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 24 24">
                                        <path
                                            className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                        <path
                                            className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                        <div className="pt-boxS pb-boxS space-y-1">
                            {
                                Route.map((item, index) => (
                                    <ResponsiveNavLink
                                        href={item.path}
                                        active={route().current(item.path)}
                                        key={index}>
                                        {item.name}
                                    </ResponsiveNavLink>
                                ))
                            }

                        </div>

                        <div className="pt-4 pb-1 border-t border-gray-200">
                            <div className="px-4">
                                <div className="font-medium text-base text-gray-800">
                                    {/* {user.name} */}
                                    user
                                </div>
                                <div className="font-medium text-sm text-gray-500">
                                    {/* {user.email} */}
                                </div>
                            </div>

                            <div className="mt-3 space-y-1">
                                <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
                                <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                    Log Out
                                </ResponsiveNavLink>
                            </div>
                        </div>
                    </div>
                </nav>
                <div id='SafeZone'
                    className='w-full h-[4rem]'
                />

                {header && (
                    <header className="bg-white shadow">
                        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                    </header>
                )}

                <main>{children}</main>
            </div>
        </>
    )
}


const Route = [
    {
        name: 'Dashboard',
        path: '/admin',
        route: 'admin'
    },
    {
        name: 'Web Config',
        path: '/admin/webconfig',
        route: 'admin.webconfig'
    },
    {
        name: 'Portofolio Config',
        path: '/admin/portofolio',
        route: 'admin.product'
    },
    {
        name: 'Gallery Config',
        path: '/admin/gallery',
        route: 'admin.gallery'
    }
]



// function classNames(...classes: any) {
//     return classes.filter(Boolean).join(' ')
// }

function NavLink({ active = false, className = '', children, ...props }: InertiaLinkProps & { active: boolean }) {
    return (
        <Link
            {...props}

        >
            <span
                className={`flex flex-row items-center gap-2.5 text-[1.25rem] focus:none text-[#000000]
                    ${active ? 'font-bold' : ''}
                    `}
            >
                <div
                    className={`${active ? 'opacity-1' : 'opacity-0'} bg-secondary h-[0.5rem] w-[0.5rem] rounded-full `}
                />
                {children}
            </span>
        </Link>
    );
}
