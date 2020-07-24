import React from 'react';

const Header = () => {
    return (
        <div className='ui secondary pointing menu'>
            <a href="/" className="item">Expanding List</a>
            <a href="/dropdown" className="item">DropDown</a>
            <a href="/search" className="item">Wiki Search</a>
            <a href="/translate" className="item">Translate</a>



        </div>
    );
}

export default Header;
