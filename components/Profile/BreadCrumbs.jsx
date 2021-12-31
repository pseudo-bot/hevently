import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from 'next/link';
export default function BasicBreadcrumbs({name}) {
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb" color='white'>
       <Link passHref href="/"><div className='hover:underline cursor-pointer'>Home</div></Link>
       <Typography className='text-gray-100'>{name}</Typography>
      </Breadcrumbs>
    </div>
  );
}
