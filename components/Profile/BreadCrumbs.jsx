import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
export default function BasicBreadcrumbs() {
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb" color='white'>
       <a className='hover:underline' href="/">Home</a>
       <Typography className='text-gray-100'>Sarang Gupta</Typography>
      </Breadcrumbs>
    </div>
  );
}
