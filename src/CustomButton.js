import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


export default function IconLabelButtons({
  onClick,
  variant = 'outlined',
  margin = '10px'
}) {
  return (
    
    <Button 

      className='delete-button'
      onClick={onClick}
      sx={{
        margin: margin
      }}
      

      variant={variant} 
      startIcon={<DeleteIcon />}>
          Delete Book
    </Button>


    
      
    
  );
}