"use client";
import Image from "../../../node_modules/next/image";
import svg from "@/assets/1.png";
import svg2 from "@/assets/2.png";
import svg3 from "@/assets/3.png";



export default function About() {
    return (
        <main className="mx-auto flex justify-center p-[45px]">
            <div className="h-[100px] w-[90%] flex flex-row items-center justify-around  ">
                <div className="flex items-center text-center">
                    <Image className="mr-[10px]" src = {svg} alt = "#" priority />
                    <div>
                    <b>90+</b>
                    <p className="opacity-60" >Users</p>
                    </div>
                    
                </div>
                <div className="h-[125px] w-[2px] bg-[#EEEFF2]"></div>
                <div className="flex items-center text-center">
                    <Image className="mr-[10px]" src = {svg2} alt = "#" priority />
                    <div>
                    <b>30+</b>
                    <p className="opacity-60" >Location</p>
                    </div>
                    
                </div>
                <div className="h-[125px] w-[2px] bg-[#EEEFF2]"></div>
                <div className="flex items-center text-center">
                    <Image className="mr-[10px]" src = {svg3} alt = "#" priority />
                    <div>
                    <b>50+</b>
                    <p className="opacity-60" >Server</p>
                    </div>
                    
                </div>
            </div>
        </main>
    )
}