import React from 'react';
import HeaderLink from './headerLink';

// Header shared across all pages, exists in root layout
// Uses HeaderLink component which uses next Link and styles it
const Header = () => {
    return (
    <div className="bg-zinc-950 py-4 border-solid border-b-2 border-zinc-900">
        <div className="container mx-auto">
            <div className="flex flex-row">
                <HeaderLink link="/" text="Home"/>
                <HeaderLink link="/about" text="About"/>
                <HeaderLink link="/contact" text="Contact"/>
            </div>
        </div>
    </div>
  );
}

export default Header