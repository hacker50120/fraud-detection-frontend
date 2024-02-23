'use client'

import React from 'react';
import {
    Avatar,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from '@nextui-org/react';
import {ThemeSwitcher} from '@/components/ThemeSwitcher';
import Link from "next/link";

const Header = () => {
    return (
        <Navbar isBordered isBlurred={false}>
            <Link href='/'>
                <NavbarBrand>
                    <p className='font-bold text-inherit cursor-pointer'>URLSlicer</p>
                </NavbarBrand>
            </Link>

            <NavbarContent as='div' justify='end'>
                <NavbarItem>
                    <ThemeSwitcher/>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
};

export default Header;