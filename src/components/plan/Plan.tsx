"use client";
import Image from "../../../node_modules/next/image";
import svg from "@/assets/Free.png";
import svg1 from "@/assets/plan1.png";
import svg2 from "@/assets/plan2.png";
import svg3 from "@/assets/plan3.png";
import Link from "../../../node_modules/next/link";


export default function Plan () {
    return (
        <main className="p-[45px] bg-slate-50">
            <div>
                <div className="text-center">
                    <b className="leading-[50px] text-[35px]">Choose Your Plan</b>
                    <p className="opacity-60 h-[60px] mb-[20px] mt-[20px]">Let's choose the package that is best for you and explore it happily and <br></br> cheerfully.</p>
                </div>
                <div className=" flex justify-center gap-[30px]">
                    <div className="w-[330px] h-[760px] border-[1px] border-grey rounded-[32px] flex-col p-[50px] justify-between flex items-center">
                        <Image src = {svg} alt = "#" priority />
                        <b>Free Plan</b>
                        <Image src = {svg1} alt ="#" priority />
                        <b>Free</b>
                        <Link className="px-[30px] py-[8px] text-red-500 border-[2px] border-red-500 rounded-[32px]" href="/">Select</Link>
                    </div>
                    <div className="w-[330px] h-[760px] border-[1px] border-grey rounded-[32px] flex-col p-[50px] justify-between flex items-center">
                        <Image src = {svg} alt = "#" priority />
                        <b>Free Plan</b>
                        <Image src = {svg2} alt ="#" priority />
                        <b>$9 / mo</b>
                        <Link className="px-[30px] py-[8px] text-red-500 border-[2px] border-red-500 rounded-[32px]" href="/">Select</Link>
                    </div>
                    <div className="w-[330px] h-[760px] border-[1px] border-red-500 rounded-[32px] flex-col p-[50px] justify-between flex items-center">
                        <Image src = {svg} alt = "#" priority />
                        <b>Free Plan</b>
                        <Image src = {svg3} alt ="#" priority />
                        <b>$12 / mo</b>
                        <Link className="px-[30px] py-[8px] text-white border-[1px] bg-red-500 rounded-[32px]" href="/">Select</Link>
                    </div>
                </div>
            </div>
            
        </main>
    )
}