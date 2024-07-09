import { Outlet } from 'react-router-dom';
import { Header } from './Header';

const Layout = () => {
  return (
    <>
      <Header />
      <main className="flex justify-center pt-8">
        <Outlet />
      </main>
    </>
  );
};

export { Layout };
