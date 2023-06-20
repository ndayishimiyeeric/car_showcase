const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';

const headers = {
		'X-RapidAPI-Key': '05fb592477msh7ead4be030b6b24p12fd34jsn0cdaa3c381e8',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
};
  
export const fetchCars = async () => {
  const response = await fetch(url, { headers: headers });
  const result = await response.json();
  return result;
}