"use client"

import React, { useState } from "react";
import ThemeSwitch from "../ThemeSwitch";
import Link from "next/link";
import { signIn, signOut, useSession } from 'next-auth/react';
import { Avatar, Dropdown } from 'flowbite-react';
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const Header = () => {
    const session = useSession();
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const popupCenter = () => {
        let url = "/signin"
        let title = "Sample Sign In"
        const dualScreenLeft = window.screenLeft ?? window.screenX;
        const dualScreenTop = window.screenTop ?? window.screenY;

        const width =
            window.innerWidth ?? document.documentElement.clientWidth ?? screen.width;

        const height =
            window.innerHeight ??
            document.documentElement.clientHeight ??
            screen.height;

        const systemZoom = width / window.screen.availWidth;

        const left = (width - 500) / 2 / systemZoom + dualScreenLeft;
        const top = (height - 550) / 2 / systemZoom + dualScreenTop;

        const newWindow = window.open(
            url,
            title,
            `width=${500 / systemZoom},height=${550 / systemZoom
            },top=${top},left=${left}`
        );

        newWindow?.focus();
    };


    const socialAction = (action: string) => {
        setIsLoading(true);

        signIn(action, { redirect: false })
            .then((callback) => {
                if (callback?.error) {
                    toast.error('Invalid credentials!');
                }

                if (callback?.ok) {
                    toast.success('Login Succesfull!');
                    router.push('/')
                }
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <>
            <section className=" top-txt ">
                <div className="head container ">
                    <div className="head-txt ">
                        <p>Free shipping, 30-day return or refund guarantee.</p>
                    </div>
                    <div className="flex items-center pr-5">
                        <span className="hidden md:block">
                            <ThemeSwitch />

                        </span>
                        {session.status == "loading" &&
                            <div role="status pl-10">
                                <svg aria-hidden="true" className="inline w-6 h-6 mr-2 text-gray-100 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                        }
                        {session?.status === 'authenticated' && <>
                            <p className="mr-4 ml-3 hidden md:block">Hello, {session?.data?.user?.name}</p>
                            <Dropdown
                                placement="bottom-end"
                                className="dark:bg-gray-700 animate-fade-in fade-in"
                                inline
                                label={<Avatar alt="User settings"
                                    bordered
                                    img={session?.data?.user?.image || ""}
                                    // onError={(e) => { e.target.onerror = null; e.target.src = 'https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png' }} 
                                    rounded
                                />}
                            >
                                <Dropdown.Header>
                                    <span className="block text-sm">
                                        {session?.data?.user?.name}
                                    </span>
                                    <span className="block truncate text-sm font-medium">
                                        {session?.data?.user?.email}
                                    </span>
                                </Dropdown.Header>
                                <Dropdown.Item className="m-0 p-0">
                                    <Link href="/" className="p-4 text-start w-full">Profile</Link>
                                </Dropdown.Item>
                                {/* <Dropdown.Item className="m-0 p-0">
                                <Link href="/me" className="p-4 text-start w-full">Public chat</Link>
                            </Dropdown.Item> */}
                                <Dropdown.Divider />
                                <Dropdown.Item onClick={() => signOut()}>
                                    Sign out
                                </Dropdown.Item>
                            </Dropdown>

                        </>}
                        {session?.status === 'unauthenticated' &&
                            <button onClick={popupCenter} className=" rounded-lg text-sm px-5 text-center inline-flex items-center mr-2 ml-1 px-5 text-center inline-flex items-center mr-2 inline-flex items-center transition duration-150 ease-in-out group hover:text-blue-400 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out">
                                <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                                    <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd" />
                                </svg>
                                Sign in
                                <svg className="w-4 h-4 ml-1 tracking-normal text-blue-400 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </button>
                        }


                    </div>
                </div>
            </section>
            <nav className="navbar">
                <div className="navbar-container">
                    <input type="checkbox" name="" id="checkbox" />
                    <div className="hamburger-lines">
                        <span className="line line1" />
                        <span className="line line2" />
                        <span className="line line3" />
                    </div>
                    <ul className="menu-items">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/products">Products</Link>
                        </li>
                        <li>
                            <a href="#news">Blog</a>
                        </li>
                    </ul>
                    <div className="logo">
                        <img src="https://i.postimg.cc/TP6JjSTt/logo.webp" alt="" />
                    </div>
                </div>
            </nav>

        </>

    );
}


export default Header