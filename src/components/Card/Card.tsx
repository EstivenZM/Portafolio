import React from "react";
import style from "./Card.module.css"
import Link from "next/link";
import { SquareArrowUpRight } from 'lucide-react';


interface CardProps{
    image: string;
    title: string;
    description:string;
    url:string
}

const Card = ({image, title,description,url}:CardProps) => {
    return (
        <>
            <div className="bg-blue-500 w-[300px] shadow-lg">
                <div className="w-full h-[220px]">
                    <img src={image} alt="" className="h-full w-full" />
                </div>
                <div className="bg-[#d8d8d8] flex p-5">
                    <div className="flex flex-col gap-5">
                        <div>
                            <h2 className={style["title-card"]}>{title}</h2>
                        </div>
                        <div>
                            <p className="primary-color">{description}</p>
                        </div>
                        <Link href={url} className="link flex gap-2 text-[#a855f7]">
                            Ver mas <SquareArrowUpRight />
                            <span className="line"></span>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card