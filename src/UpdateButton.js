import React from 'react';

import Button from '@mui/material/Button';

export default function BasicButtons({
  onClick,
}) {
  return (
    
    <Button onClick={onClick} variant="contained">Contained</Button>
     
  );
}