import { LoaderFunctionArgs } from 'react-router-dom';
import {
  getCountriesByCountryCodes,
  getCountry,
} from '../services/CountriesService';
import { Country } from '../models/Country';

export type CountryDetailsData = {
  countryData: Country;
  borderCountries: Country[];
};

export const countryDetailsLoader = async ({
  params,
}: LoaderFunctionArgs): Promise<CountryDetailsData> => {
  if (!params.country) {
    throw new Error('Expected params.country');
    // maybe route to 404 page or redirect to home page with a toast saying "Country not found" or something for better UX
  }
  const { country } = params;
  const countryData = await getCountry(country);
  let borderCountries: Country[] = [];
  if (countryData.borders) {
    borderCountries = await getCountriesByCountryCodes(countryData.borders);
  }
  return { countryData, borderCountries };
};
// Inspired by: https://www.dhiwise.com/post/guide-to-routing-in-react-using-useloaderdata-typescript#structuring-the-sample-route
