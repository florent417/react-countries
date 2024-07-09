import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Countries } from './views/Countries';
import { Layout } from './components/ui/layout/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [{ index: true, Component: Countries }],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
