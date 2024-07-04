import axios from 'axios';
import { Country } from '../models/Country';

const BASE_URL = 'https://restcountries.com/v3.1';

const getAllCountries = async () => {
  const response = await axios.get<Country[]>(`${BASE_URL}/all`);
  return response.data;
};

// TODO: Make private
const getFilteredResponse = async (fields: string[]) => {
  const fieldsStr = fields.join(',');
  const response = await axios.get<Country[]>(
    `${BASE_URL}/all?fields=${fieldsStr}`,
  );
  return response.data;
};

const getAllRegions = async () => {
  const responseData = await getFilteredResponse(['region']);
  return responseData.map((entry) => entry.region);
};

export { getAllCountries, getAllRegions };
