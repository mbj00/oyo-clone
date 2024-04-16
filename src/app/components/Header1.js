'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Block from './Block';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

function Header1() {
    let [auth, setAuth] = useState(false);
    useEffect(() => {
        const key = Cookies.get('user');
        if (key) {
            setAuth(true);
            return;
        };
        setAuth(false);
    }, [auth])
    const router = useRouter();
    const handleLogout = () => {
        Cookies.remove('user');
        alert("You have loged out successfully")
        router.push('/');
    }
    return (
        <div className='flex justify-between items-center h-18 px-5 border-b-2 border-gray-300'>
            <Link href={'/'}>
                <Image src={"/logo.png"} alt="logo" width={80} height={10} className='' />
            </Link>
            <div className='flex h-full'>
                <Block title={"Become a member"} para={"Additional 10% off on stays"} />
                <Block title={"OYO for Business"} para={"Trusted by 5000 corporates"} />
                <Block title={"List your property"} para={"Start earning in 30 mins."} />
                <Block title={"0124-123456"} para={"Call us to Book Now"} />
                <div className="flex items-center px-3">
                    <Image src={"/login.png"} alt="login/signup" height={25} width={25} />
                    {
                        auth ?
                            <Link href={''} onClick={handleLogout}>
                                <p className='px-2 font-semibold font-sm'>Log out </p>
                            </Link> :
                            <Link href={'../login'}>
                                <p className='px-2 font-semibold font-sm'>Login / Signup</p>
                            </Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header1
