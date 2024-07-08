import { LoaderFunctionArgs } from 'react-router-dom';
import { getCountry } from '../services/CountriesService';
import { Country } from '../models/Country';

export const countryDetailsLoader = async ({
  params,
}: LoaderFunctionArgs): Promise<Country> => {
  if (!params.country) {
    throw new Error('Expected params.country');
  }
  const { country } = params;

  return await getCountry(country);
};
// Inspired by: https://www.dhiwise.com/post/guide-to-routing-in-react-using-useloaderdata-typescript#structuring-the-sample-route
