import React from 'react';

const ThemeContext = React.createContext({
    dark: false,
    toggle: () => {},
});

export default ThemeContext;

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = React.useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <ThemeContext.Provider value={{ dark: darkMode, toggle: toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};