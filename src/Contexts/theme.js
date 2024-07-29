import { createContext, useContext } from 'react';

export const ThemeContext = createContext({
    themeMode: 'light',
    darkTheme: () => { },
    lightTheme : () =>{}
})

export const ThemeProvider = ThemeContext.Provider;

const UseTheme = () => {
    return useContext(ThemeContext);
}
export default UseTheme;