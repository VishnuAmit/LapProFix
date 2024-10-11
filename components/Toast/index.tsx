import React from 'react'
import { Toast } from "flowbite-react";
import { HiFire } from "react-icons/hi";

const index = ({text}) => {
  return (
    <div className='absolute bottom-2 left-1/3 w-1/4'>
        <Toast className='flex justify-between '>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
                <HiFire className="h-full w-full m-auto" />
            </div>
            <div className="ml-3 text-sm font-normal">{text}</div>
            <Toast.Toggle className='flex items-center justify-center'/>
        </Toast>
    </div>
  )
}

export default index
