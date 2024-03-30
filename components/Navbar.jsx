'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import profileDefault from '@/assets/images/profile.png';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

    return (
        <nav className="bg-blue-100 border-b border-black">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-20 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                        <button
                            type="button"
                            id="mobile-dropdown-button"
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:text-blue-600"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                        >
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="block h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        </button>
                    </div>

                    <div
                        className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
                    >
                        <Link className="flex flex-shrink-0 items-center" href="/">
                            <span className="hidden md:block text-blue-600 text-2xl font-bold ml-2"
                            >Global Property Services</span>
                        </Link>
                        <div className="hidden md:ml-6 md:block">
                            <div className="flex space-x-2">
                                <Link
                                    href="/"
                                    className="text-black hover:text-blue-600 px-2 py-1 font-medium"
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/properties"
                                    className="text-black hover:text-blue-600 px-2 py-1 font-medium"
                                >
                                    Properties
                                </Link>
                                <Link
                                    href="/properties/add"
                                    className="text-black hover:text-blue-600 px-2 py-1 font-medium"
                                >
                                    Add Property
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block md:ml-6">
                        <div className="flex items-center">
                            <button
                                className="flex items-center text-blue-600 hover:text-black rounded-md px-2 py-1 font-medium
                                border-2 border-blue-600 hover:border-black"
                            >
                                <span>Login or Register</span>
                            </button>
                        </div>
                    </div>

                    <div
                        className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0"
                    >
                        <Link href="/messages" className="relative group">
                            <button
                                type="button"
                                className="relative rounded-full bg-blue-600 p-1 text-white hover:bg-black"
                            >
                                <span className="absolute -inset-1.5"></span>
                                <span className="sr-only">View notifications</span>
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                                    />
                                </svg>
                            </button>
                            <span
                                className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs Linkont-bold leading-none text-blue-600 transform translate-x-1/2 -translate-y-1/2 bg-white rounded-full"
                            >
                                2
                            </span>
                        </Link>
                        <div className="relative ml-3">
                            <div>
                                <button
                                    type="button"
                                    className="relative flex rounded-full bg-black text-sm"
                                    id="user-menu-button"
                                    aria-expanded="false"
                                    aria-haspopup="true"
                                    onClick={() => setIsProfileMenuOpen((prev) => !prev)}
                                >
                                    <span className="absolute -inset-1.5"></span>
                                    <span className="sr-only">Open user menu</span>
                                    <Image
                                        className="h-8 w-8 rounded-full"
                                        src={profileDefault}
                                        alt=""
                                    />
                                </button>
                            </div>

                            {isProfileMenuOpen && (
                                <div
                                    id="user-menu"
                                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="user-menu-button"
                                    tabIndex="-1"
                                >
                                    <Link
                                        href="/profile"
                                        className="block px-4 py-2 text-sm text-blue-600"
                                        role="menuitem"
                                        tabIndex="-1"
                                        id="user-menu-item-0"
                                    >
                                        Your Profile
                                    </Link>
                                    <Link
                                        href="/properties/saved"
                                        className="block px-4 py-2 text-sm text-blue-600"
                                        role="menuitem"
                                        tabIndex="-1"
                                        id="user-menu-item-2"
                                    >
                                        Saved Properties
                                    </Link>
                                    <button
                                        className="block px-4 py-2 text-sm text-blue-600"
                                        role="menuitem"
                                        tabIndex="-1"
                                        id="user-menu-item-2"
                                    >
                                        Sign Out
                                    </button>
                                </div>    
                            )}
                            
                        </div>
                    </div>
                </div>
            </div>

            { isMobileMenuOpen && (
                <div id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        <Link
                            href="/"
                            className="text-black hover:text-blue-600 block rounded-md px-2 py-1 text-base font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            href="/properties"
                            className="text-black hover:text-blue-600 block rounded-md px-2 py-1 text-base font-medium"
                        >
                            Properties
                        </Link>
                        <Link
                            href="/properties/add"
                            className="text-black hover:text-blue-600 block rounded-md px-2 py-1 text-base font-medium"
                        >
                            Add Property
                        </Link>
                        <button
                            className=" text-blue-600 hover:text-black px-2 py-1 text-base font-medium rounded-md border-2 border-blue-600 hover:border-black"
                        >
                            <span>Login or Register</span>
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar
