import { DarkModeSwitch } from '../../DarkModeSwitch';

export const Header = () => (
  <nav className="bg-white dark:bg-dark-blue h-20 shadow-sm flex justify-between items-center w-full px-10">
    <p className="text-left text-md md:text-xl font-bold">
      Where in the world?
    </p>
    <DarkModeSwitch />
  </nav>
);
