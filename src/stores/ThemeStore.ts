import { atom } from 'recoil';

let defaultTheme = 'light';
if (typeof window !== 'undefined') {
  const savedTheme = window.localStorage.getItem('theme'); // save the users prefered mode
  if (savedTheme) {
    defaultTheme = savedTheme;
  } else {
    const isDarkMode =
      window.matchMedia && // TODO: Is this working?
      window.matchMedia('(prefers-color-scheme: dark)').matches; //get the default prefered mode
    defaultTheme = isDarkMode ? 'dark' : 'light';
  }
}

export const themeState = atom({
  key: 'theme',
  default: defaultTheme,
});
