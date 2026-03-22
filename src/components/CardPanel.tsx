"use client"

import { useReducer } from "react";
import ProductCard from "./Card";
import Link from "next/link";

export default function CardPanel(){
    const ratingReducer = (state: Map<string, number>, 
        action:{type:string; venueName:string, rating?:number}) => {
            switch(action.type){
                case 'updateRating':{
                    if(action.rating != undefined){
                        const newState = new Map(state);
                        newState.set(action.venueName, action.rating)
                        return newState
                    }
                    return state
                }
                case 'remove':{
                    const newState = new Map(state)
                    newState.delete(action.venueName);
                    return newState
                }
                default:
                    return state
            }
        }
    const initialmap = new Map([["The Bloom Pavilion", 0], 
        ["Spark Space", 0], 
        ["The Grand Table", 0]])
    const [ratingMap, dispatch] = useReducer(ratingReducer, initialmap);

    const mockCardRepo = [{vid:"001", name:"The Bloom Pavilion", img:"/img/bloom.jpg"},
        {vid:"002", name:"Spark Space", img:"/img/sparkspace.jpg"},
        {vid:"003", name:"The Grand Table", img:"/img/grandtable.jpg"}]

    return (
        <div>
            <div className="!mb-10 flex flex-row flex-wrap justify-around content-around gap-y-10">
                {
                    mockCardRepo.map((cardItem) => (
                        <Link href={`/venue/${cardItem.vid}`} className="w-1/5" key={cardItem.vid}>
                        <ProductCard venueName={cardItem.name} imgSrc={cardItem.img} key={cardItem.vid}
                        onRatingChange={(newRating:number) => {
                            dispatch({type:'updateRating', venueName:cardItem.name, rating:newRating})
                        }}/>
                        </Link>
                    ))
                }
            </div>

            <div className="!ml-8 w-full text-xl font-bold pl-16">
                Venue List with Ratings: {ratingMap.size}
            </div>

            {Array.from(ratingMap).map(([venueName, rating])=>(
                <div key={venueName} data-testid={venueName} 
                        onClick={() => {dispatch({type:'remove', venueName:venueName})}}
                        className="!ml-8">
                    <span>{venueName}</span>
                    <span>: {rating}</span>
                </div>
            ))}
        </div>
    );
}