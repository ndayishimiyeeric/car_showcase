import { Hero, SearchBar, CustomFilter, CarCard } from '@/components'
import Image from 'next/image'
import { fetchCars } from '@/store'

export default async function Home() {
  const cars = await fetchCars();
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
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {cars?.map((car, idx) => (
                <CarCard car={car} key={idx} /> 
              ))}
            </div>
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
