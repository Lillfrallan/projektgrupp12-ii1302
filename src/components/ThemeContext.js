import React from 'react';

/**
 * Helps to keep the state of the light/dark modes even after refreshes.
 * 
 * @param {String} defaultValue of the theme
 * @param {Integer} key 
 * @returns 
 */
const useStickyState = (defaultValue, key) => {
    const [value, setValue] = React.useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null
        ? JSON.parse(stickyValue)
        : defaultValue;
    });
    React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
}

export { useStickyState }
