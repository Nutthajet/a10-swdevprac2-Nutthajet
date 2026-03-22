"use client"

import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import { Rating } from '@mui/material';
import { useState } from 'react';

export default function ProductCard({
    venueName, 
    imgSrc, 
    onRatingChange
}: {
    venueName:string, 
    imgSrc:string, 
    onRatingChange?:Function
}){
    const [ratingValue, setRatingValue] = useState<number | null>(0);
    return(
        <InteractiveCard contentName={venueName}>
            <div className="w-full h-[70%] relative">
                <Image 
                    src={imgSrc}
                    alt = {venueName}
                    fill 
                    className='object-cover rounded-t-lg'
                />
            </div>

            <div className="!px-2 !pt-2 text-xl font-semibold text-cyan-800 mt-2" onClick={(e) => e.stopPropagation()}>
                {venueName}
            </div>
            
            {
                onRatingChange? <Rating 
                    id={`${venueName} Rating`}
                    name={`${venueName} Rating`}
                    data-testid={`${venueName} Rating`}
                    value={ratingValue}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e, newValue) => {
                        setRatingValue(newValue)
                        if(onRatingChange && newValue!=null) onRatingChange(newValue)
                    }}
                    className="!px-2"
                 /> : ""
            }
            
        </InteractiveCard>
    );
}