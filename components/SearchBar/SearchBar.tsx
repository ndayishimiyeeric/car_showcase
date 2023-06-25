'use client'

import React, { useState } from 'react';
import { SearchManufucturer } from '@/components';
import {} from '@/types';

type SearchBarProps = {
  

};

const SearchBar: React.FC<SearchBarProps> = () => {
  
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  const [manufacturer, setManufacturer] = useState<string>('');
  
  return (
    <form className='searchbar'>
      <div className='searchbar__item'>
        <SearchManufucturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
      </div>
    </form>
  )
}
export default SearchBar;