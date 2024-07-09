import { DarkModeSwitch } from '../../DarkModeSwitch';

const Header = () => (
  <nav className="bg-white dark:bg-dark-blue h-20 shadow-sm flex justify-center">
    <div className="h-full flex items-center justify-between w-11/12">
      <p className="text-left text-xl font-bold">Where in the world?</p>
      <DarkModeSwitch />
    </div>
  </nav>
);

export { Header };
