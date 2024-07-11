import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Countries } from './views/Countries';
import { Layout } from './components/ui/layout/Layout';
import { RecoilRoot } from 'recoil';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [{ index: true, Component: Countries }],
  },
]);

export default function App() {
  return (
    <RecoilRoot>
      <RouterProvider router={router}></RouterProvider>
    </RecoilRoot>
  );
}
