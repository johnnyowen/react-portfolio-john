import React from 'react';
import './style.css';
// ^ importing react and styles

const Nav = ({ pages, currentPage, setCurrentPage }) => {
  return (
    <nav className="d-flex justify-content-between align-items-center">
      {/* maps the links and gives them proper functions, coming from App.js pages array */}
        {pages.map(page => (
            <li  
            key={page} 
            className={`${page === currentPage && 'active'}`}
            onClick={() => setCurrentPage(page)}>
                {page}
            </li>
        ))}
    </nav>
  )
};

export default Nav;