"use client";
import Image from "../../../node_modules/next/image";
import svg from "@/assets/huge.png";
import svg1 from "@/assets/spon.png";
import svg2 from "@/assets/groo.png";
import svg3 from "@/assets/gro.png";



export default function Network() {
    return (
        <main className="p-[45px] bg-slate-50">
            <div>
                <div className="text-center">
                    <b className="leading-[50px] text-[35px]">Huge Global Network <br></br> of Fast VPN</b>
                    <p className="opacity-60 h-[60px] mt-[10px] mb-[70px]">See <b>LaslesVPN</b> everywhere to make it easier for you when you <br></br>move locations.</p>
                </div>
                <div className="block mx-0 my-0 justify-center flex mb-[20px]">
                    <Image  src = {svg} alt = "#" priority />
                </div>
                <div className="block mx-0 my-0 justify-center flex">
                    <Image  src = {svg1} alt = "#" priority />
                </div>
                <div className="block mx-0 my-0 justify-center flex mb-[60px]">
                    <Image  src = {svg2} alt = "#" priority />
                </div>
                <div className="block mx-0 my-0 justify-center flex mb-[60px]">
                    <Image  src = {svg3} alt = "#" priority />
                </div>
            </div>
        </main>
    )
}