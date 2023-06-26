import { Hero, SearchBar, CustomFilter, CarCard, ShowMore } from '@/components'
import Image from 'next/image'
import { fetchCars } from '@/store'
import { FilterProps } from '@/types'
import { fuels, yearsOfProduction } from '@/constants';

export default async function Home({searchParams}:{searchParams: FilterProps}) {
  const cars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    model: searchParams.model || '',
    fuel: searchParams.fuel || '',
    year: searchParams.year || 2022,
    limit: searchParams.limit || 10,
  });

  const isDataEmpty = !Array.isArray(cars) || cars.length < 1 || !cars;
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className='home__filters'>
          <SearchBar />
          <div className='home__filter-container'>
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {cars?.map((car, idx) => (
                <CarCard car={car} key={idx} /> 
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNextPage={(searchParams.limit || 10) > cars.length}
            />
          </section>
        ) : (
            <div className='home__error-container'>
              <h2 className='text-black text-xl font-bold'>Ooops, no results</h2>
              <p>{ cars?.message }</p>
            </div>
        )}
      </div>
    </main>
  )
}
