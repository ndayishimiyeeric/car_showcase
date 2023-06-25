'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SearchManufucturer } from '@/components';
import Image from 'next/image';

type SearchBarProps = {
  

};

const SearchButton = ({otherClasses}: {otherClasses: string}) => (
  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt='magngifying glass'
      width={40}
      height={40}
      className='object-contain'
    />
  </button>
)

const SearchBar: React.FC<SearchBarProps> = () => {
  const [manufacturer, setManufacturer] = useState<string>('');
  const [model, setModel] = useState<string>('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer === '' && model === '') return;

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
    
  }

  const updateSearchParams = (model: string, manufacturer: string) => { 
    const searchParams = new URLSearchParams(window.location.search);
    
    if (model) {
      searchParams.set('model', model);
    } else {
      searchParams.delete('model');
    }

    if (manufacturer) {
      searchParams.set('manufacturer', manufacturer);
    } else {
      searchParams.delete('manufacturer');
    }

    const newPathName = `${window.location.pathname}?${searchParams.toString()}`;
    router.push(newPathName);
  }
  
  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManufucturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
        <SearchButton otherClasses='sm:hidden' />
      </div>

      <div className='searchbar__item'>
        <Image
          src="/model-icon.png"
          alt='model icon'
          width={25}
          height={25}
          className='object-contain absolute w-[20px] h-[20px] ml-4'
        />
        <input
          type="text"
          name='model'
          id='model'
          value={model}
          placeholder='Tiguan'
          className='searchbar__input'
          onChange={(e) => setModel(e.target.value)}
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <SearchButton otherClasses='max-sm:hidden' />
    </form>
  )
}
export default SearchBar;