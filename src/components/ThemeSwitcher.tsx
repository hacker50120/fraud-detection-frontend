'use client';

import {useTheme} from 'next-themes';
import {useEffect, useState} from 'react';
import {Switch} from '@nextui-org/react';
import {Icons} from '@/components/Icons';

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false);
    const {theme, setTheme} = useTheme();
    const [isDarkMode, setIsDarkMode] = useState(theme === 'dark');

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const handleThemeToggle = () => {
        setIsDarkMode(!isDarkMode);
        setTheme(isDarkMode ? 'light' : 'dark');
    };

    return (
        <Switch
            defaultSelected
            size='sm'
            color='primary'
            checked={isDarkMode}
            onChange={handleThemeToggle}
            thumbIcon={({isSelected, className}) =>
                isSelected ? (
                    <Icons.sun className={className}/>
                ) : (
                    <Icons.moon className={className}/>
                )
            }
        />
    );
}

