import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Countries } from './views/Countries';
import { Layout } from './components/ui/layout/Layout';
import { CountryDetails } from './views/CountryDetails';
import { countryDetailsLoader } from './loaders/CountryDetailsLoader';
import { RecoilRoot } from 'recoil';

// TODO: How to add country details as a child of Countries list
const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Countries },
      {
        path: 'country/:country',
        Component: CountryDetails,
        loader: countryDetailsLoader,
      },
    ],
  },
]);

export default function App() {
  return (
    <RecoilRoot>
      <RouterProvider router={router}></RouterProvider>
    </RecoilRoot>
  );
}
