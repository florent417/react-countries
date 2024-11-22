import { useRecoilState } from 'recoil';
import { themeState } from '../stores/ThemeStore';

export const useDarkMode = () => {
  const [theme, setTheme] = useRecoilState(themeState);

  const saveTheme = (chosenTheme: 'light' | 'dark') => {
    const root = window.document.documentElement;
    root.classList.remove(theme);
    root.classList.add(chosenTheme);
    setTheme(chosenTheme);
    window.localStorage.setItem('theme', chosenTheme);
  };

  const toggleTheme = () => {
    saveTheme(theme === 'light' ? 'dark' : 'light');
  };

  return [theme, toggleTheme] as const;
};
