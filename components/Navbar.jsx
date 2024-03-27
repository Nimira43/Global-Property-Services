const Navbar = () => {
    return (
        <nav className="bg-yellow-500 border-b border-black">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-20 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                        <button
                            type="button"
                            id="mobile-dropdown-button"
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-red-700 hover:text-black"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="block h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        </button>
                    </div>

                    <div
                        className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
                    >
                        <a className="flex flex-shrink-0 items-center" href="/index.html">
                            <span className="hidden md:block text-red-700 text-2xl font-bold ml-2"
                            >Global Property Services</span
                            >
                        </a>
                        <div className="hidden md:ml-6 md:block">
                            <div className="flex space-x-2">
                                <a
                                    href="/index.html"
                                    className="text-black hover:text-red-700 px-2 py-1"
                                >Home</a
                                >
                                <a
                                    href="/properties.html"
                                    className="text-black hover:text-red-700 px-2 py-1"
                                >Properties</a
                                >
                                <a
                                    href="/add-property.html"
                                    className="text-black hover:text-red-700 px-2 py-1"
                                >Add Property</a
                                >
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block md:ml-6">
                        <div className="flex items-center">
                            <button
                                className="flex items-center text-black hover:text-red-700 rounded-md px-2 py-1"
                            >
                                <i className="fa-brands fa-google text-yellow-500 mr-2"></i>
                                <span>Login or Register</span>
                            </button>
                        </div>
                    </div>

                    <div
                        className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0"
                    >
                        <a href="messages.html" className="relative group">
                            <button
                                type="button"
                                className="relative rounded-full bg-red-700 p-1 text-yellow-500 hover:bg-black"
                            >
                                <span className="absolute -inset-1.5"></span>
                                <span className="sr-only">View notifications</span>
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                                    />
                                </svg>
                            </button>
                            <span
                                className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-700 transform translate-x-1/2 -translate-y-1/2 bg-black rounded-full"
                            >
                                2
                            </span>
                        </a>
                        <div className="relative ml-3">
                            <div>
                                <button
                                    type="button"
                                    className="relative flex rounded-full bg-red-700 text-sm"
                                    id="user-menu-button"
                                    aria-expanded="false"
                                    aria-haspopup="true"
                                >
                                    <span className="absolute -inset-1.5"></span>
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        className="h-8 w-8 rounded-full"
                                        src="images/profile.png"
                                        alt=""
                                    />
                                </button>
                            </div>

                            <div
                                id="user-menu"
                                className="hidden absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="user-menu-button"
                                tabindex="-1"
                            >
                                <a
                                    href="/profile.html"
                                    className="block px-4 py-2 text-sm text-gray-700"
                                    role="menuitem"
                                    tabindex="-1"
                                    id="user-menu-item-0"
                                >Your Profile</a
                                >
                                <a
                                    href="saved-properties.html"
                                    className="block px-4 py-2 text-sm text-gray-700"
                                    role="menuitem"
                                    tabindex="-1"
                                    id="user-menu-item-2"
                                >Saved Properties</a
                                >
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700"
                                    role="menuitem"
                                    tabindex="-1"
                                    id="user-menu-item-2"
                                >Sign Out</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <a
                        href="/index.html"
                        className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                    >Home</a
                    >
                    <a
                        href="/properties.html"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                    >Properties</a
                    >
                    <a
                        href="/add-property.html"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                    >Add Property</a
                    >
                    <button
                        className="flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 my-4"
                    >
                        <i className="fa-brands fa-google mr-2"></i>
                        <span>Login or Register</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar