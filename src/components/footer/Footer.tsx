"use client";
import Image from "../../../node_modules/next/image";
import svg from "@/assets/Logo.png";
import svg1 from "@/assets/Facebook.png";
import svg2 from "@/assets/Twitter.png";
import svg3 from "@/assets/Instagram.png";
import text from "@/assets/text.png";
import text2 from "@/assets/text2.png";
import text3 from "@/assets/text3.png";





export default function Footer() {
    return (
        <main className="bg-slate-50 p-[65px]">
            <div>
                <div className="flex justify-between">
                    <div>
                        <Image src={svg} alt= "#" priority />
                        <p className="h-[61px] w-[300px] mt-[20px] mb-[20px] opacity-60"><b>LaslesVPN</b> is a private virtual network that has unique features and has high security.</p>
                        <div className="flex">
                            <Image src={svg1} alt =  "#" priority />
                            <Image src={svg2} alt =  "#" priority />
                            <Image src={svg3} alt =  "#" priority />
                        </div>
                        <p className="opacity-60 mt-[10px]">©2020LaslesVPN</p>

                    </div>
                    <div>
                        <Image src={text} alt= "#" priority />
                    </div>
                    <div>
                        <Image src={text2} alt= "#" priority />
                    </div>
                    <div>
                        <Image src={text3} alt= "#" priority />
                    </div>
                </div>
            </div>
        </main>
    )
}