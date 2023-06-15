"use client"

import React from 'react';
import Image from 'next/image';
import { CustomButtonProps } from '@/types';


const CustomButton:React.FC<CustomButtonProps> = ({title, containerStyles, handleClick, btnType}) => {
  
  return (
    <button
      disabled={false}
      type={btnType || 'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>
        {title}
      </span>
    </button>
  )
}
export default CustomButton;