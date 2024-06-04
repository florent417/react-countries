import { DarkModeSwitch } from './DarkModeSwitch';

const Header = () => (
  <div className="bg-white h-14 mb-8 shadow-sm flex justify-center">
    <div className="h-full flex items-center justify-between w-11/12">
      <p className="text-left text-xl font-bold">Where in the world?</p>
      <DarkModeSwitch />
    </div>
  </div>
);

export { Header };
