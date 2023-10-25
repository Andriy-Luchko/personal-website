import React from 'react';
import HeaderLink from './headerLink';

const Header = () => {
    return (
    <div className="bg-slate-800 py-4">
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