import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  textStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  icon?: string;
  isDisabled?: boolean;
}

export interface SearchManufucturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: string;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

export interface FilterProps { 
  manufacturer: string;
  model: string;
  fuel: string;
  year: number;
  limit: number;
}


export interface OptionProps {
  title: string;
  value: string;
}
export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNextPage: boolean;
}
