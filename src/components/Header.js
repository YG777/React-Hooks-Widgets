import React from 'react';
import Link from './Link';

const Header = () => {
    return (
        <div className='ui secondary pointing menu'>
            <Link href="/" className="item">Expanding List</Link>
            <Link href="/dropdown" className="item">DropDown</Link>
            <Link href="/search" className="item">Wiki Search</Link>
            <Link href="/translate" className="item">Translate</Link>



        </div>
    );
}

export default Header;
