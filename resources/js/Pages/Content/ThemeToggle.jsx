import React from 'react';

const ThemeToggle = ({ theme, setTheme }) => {
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <button
        onClick={toggleTheme}
        className="p-2 bg-gray-200 dark:bg-gray-800 rounded"
        >
        {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </button>
    );
};

export default ThemeToggle;
