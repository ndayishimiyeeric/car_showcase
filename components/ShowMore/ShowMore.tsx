"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import { ShowMoreProps } from '@/types';
import { CustomButton } from '@/components';
import { updateSearchParams } from '@/store';


const ShowMore: React.FC<ShowMoreProps> = ({ pageNumber, isNextPage }) => {
  const router = useRouter();

  const handleNavigate = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams('limit', newLimit.toString());
    router.push(newPathName);
  }
  
  return (
    <div className='w-full flex-center gap-5 mt-10'>
      {!isNextPage && (
        <CustomButton
          title='Show More'
          btnType='button'
          containerStyles='bg-primary-blue text-white rounded-full'
          handleClick={handleNavigate}
        />
      )}
    </div>
  )
}
export default ShowMore;