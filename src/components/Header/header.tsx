"use client";
import Image from "../../../node_modules/next/image";
import svg from "@/assets/Logo.png";
import Link from "../../../node_modules/next/link";


export default function Header() {
    return (
    <main className="mx-auto flex justify-center">
        <div className="h-[100px] w-[90%] flex flex-row items-center justify-around">
            <div>
                <Image src = {svg} alt="#" priority />
            </div>
            <div className="flex flex-row gap-[50px]">
            <Link className={`opacity-60 text-[16px]`} href="/" >About</Link>
            <Link className={`opacity-60 text-[16px]`} href="/" >Features</Link>
            <Link className={`opacity-60 text-[16px]`} href="/" >Pircing</Link>
            <Link className={`opacity-60 text-[16px]`} href="/" >Testimonials</Link>
            <Link className={`opacity-60 text-[16px] mr-40px`} href="/" >Help</Link>
            </div>
            <div className="flex flex-row gap-[30px] items-center">
            <Link href="/">Sign In</Link>
            <Link className="px-[30px] py-[8px] text-orange-500 border-[1px] border-orange-500 rounded-[32px]" href="/">Sign Up</Link>
            </div>
        </div>
    </main>
    );
}