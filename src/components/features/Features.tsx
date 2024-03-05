"use client";
import Image from "../../../node_modules/next/image";
import svg from "@/assets/Illustration 2.png";
import svg2 from "@/assets/Group 1120.png";

export default function Features() {
    return (
    <main className="flex justify-center p-[45px]">
    <div className="w-[90%] flex flex-row items-center justify-around gap-[30px]">
        <div className="mr-[100px]">
            <Image src = {svg} alt = "#" priority />
        </div>
        <div>
            <b className="w-[381px] h-[100px] leading-[50px] text-[35px]">We Provide Many <br></br> Features You Can Use</b>
            <p className="opacity-60 mt-[30px] mb-[30px]">You can explore the features that we provide with fun and have their own functions each feature.</p>
            <div className="flex mb-[15px]">
                <Image src = {svg2} alt = "#" priority />
                <p className="opacity-60">Powerfull online protection.</p>
            </div>
            <div className="flex mb-[15px]">
                <Image src = {svg2} alt = "#" priority />
                <p className="opacity-60">Internet without borders.</p>
            </div>
            <div className="flex mb-[15px]">
                <Image src = {svg2} alt = "#" priority />
                <p className="opacity-60">Supercharged VPN</p>
            </div>
            <div className="flex mb-[15px]">
                <Image src = {svg2} alt = "#" priority />
                <p className="opacity-60">No specific time limits.</p>
            </div>
        </div>
    </div>
</main>
)
    
}