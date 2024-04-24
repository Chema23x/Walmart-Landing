import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from 'next/link'


function handleClick(event) {
  event.preventDefault();
  // console.info('You clicked a breadcrumb.');
}

export default function BasicBreadcrumbs({page, previousPage, hidePage}) {
  return (
    <div className="hidden md:flex md:justify-start md:w-10/12 md:ml-24 lg:ml-32">
        <div role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb">
            <Link className='hover:underline text-blue-900' color="text-blue-900" href="/Home">
                Inicio
            </Link>
            <button
            className='hover:underline text-blue-900'
            color="text-blue-900"
            onClick={hidePage}
            >
             {previousPage}
             </button>
            <span 
              className=' text-blue-900'
              color="text-blue-900">
              {page}
            </span>
        </Breadcrumbs>
        </div>
    </div>
  );
}