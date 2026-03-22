"use client"

import styles from './banner.module.css';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { useSession } from 'next-auth/react';

export default function Banner(){
    const cover = ['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg', '/img/cover4.jpg'];
    const [index, setIndex] = useState(0);
    const router = useRouter();

    const { data:session } = useSession()
    
    return (
        <div className={styles.banner} onClick={() => setIndex(index+1)}>
            <Image src={cover[index%4]}
            alt='cover'
            fill = {true}
            objectFit='cover'/>
            <div className={styles.bannerText}>
                <div className='text-4xl font-semibold text-cyan-800 font-sans'>where every event finds its venue</div>
                <div className='text-base font-normal text-cyan-800 font-sans'>Finding the perfect venue has never been easier, Whether it's a wedding, corporate event, or private party, we connecting people to the perfect place.</div>
            </div>
            {
                session? <div className='z-30 absolute top-5 right-10 font-semibold text-cyan-800 text-xl'>
                    Welcome {session.user?.name}
                </div> : null
            }
                <button 
                    className="absolute bottom-4 right-4 z-30 !px-4 !py-2 
                            bg-white text-cyan-600 text-lg font-semibold 
                            border-2 border-cyan-600 rounded-lg shadow-md 
                            transition-all duration-300 ease-in-out
                            hover:bg-cyan-600 hover:text-white hover:shadow-lg"
                    onClick={(e) => {e.stopPropagation(); router.push('/venue')}}
                >
                    Choose Your Location NOW
                </button>
        </div>
    );
}