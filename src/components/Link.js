import React from 'react';

const Link = ({className, href, children}) => {
    const onClick=(e)=>{
        e.preventDefault();
        window.history.pushState({}, '', href)
    }

    return (
        <div>
            <a onClick={onClick}
            className={className}
            href={href}
            >{children}</a>
        </div>
    );
}

export default Link;
