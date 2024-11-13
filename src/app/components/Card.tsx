
import Image from 'next/image';
import React from 'react'
interface propsType {
    title: string;
    desc: string;
    img: string;
    tags:string[];
}
const Card: React.FC<propsType> = ({title,desc, img, tags}) => {
  return (
    <div className='border bg-cyan-700 w-[300px] card-shadow-lg rounded-lg p-4 sm:w-[350px] ' data-aos="zoom-in-up">
        <div>
            <Image className='w-full sm:w-[350px] h-auto object-cover'
            src={img}
            width={350}
            height={350}
            alt={title}
            />
        </div>
      

      <div className='p-4 space-y-4'>
        <div className='text-4xl font-extralight'>{title}</div>
        <div>{desc}</div>
        <div>
            {tags.map((el) =>
                (<div className='tags' key={el}>

                    {el}
                </div>))}
        </div>
      </div>
    </div>
  )
}

export default Card;
