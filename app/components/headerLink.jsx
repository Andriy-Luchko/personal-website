import React from 'react';
import Link from 'next/link';

const headerLink = ({link, text}) => {
  return (
    <Link href={link} key={text}>
        <div className="px-4">
        <p className="text-white capitalize">{text}</p>
        </div>
    </Link>
  )
}

export default headerLink