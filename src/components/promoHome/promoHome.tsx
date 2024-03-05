"use client";
import Image from "../../../node_modules/next/image";
import svg from "@/assets/Illustration 1.png";


export default function PromoHome() {
    return (
    <main className="mx-auto flex justify-center p-[45px]">
        <div className="w-[90%] flex flex-row items-centerjustify-around gap-[30px]">
            <div>
                <p className="text-5xl w-[555px] leading-17 h-[140px] mb-[10px]">Want anything to be easy with <b>LaslesVPN</b></p>
                <p className="h-[60px] w-[555px] opacity-60 text-[16px] mb-[10px]">Provide a network for all your needs with ease and fun using <b>LaslesVPN</b> discover interesting features from us.</p>
                <button className="w-[250px] h-[65px] bg-red-500 rounded-[10px] text-white border-[1px] leading-6"><b>Get Started</b></button>
            </div>
            <div>
                <Image src = {svg} alt = "#" priority />
            </div>
        </div>
    </main>
    )
};