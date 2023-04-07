import React from 'react'
import { styled } from '@mui/system';
import Box from '@mui/material/Box';

const UserContainer = styled(Box)({
    height : '30px',
    backgroundColor : 'teal',
    color : 'white',
    display : 'flex',
    alignItems : 'center',    // vertical
    justifyContent : 'center', // horizontal
    fontSize : '14px',
    fontWeight : '500'
})

const Announcement = () => {
  return (
    <UserContainer>Super Deal! Free shipping on orders over $50</UserContainer>
  )
}

export default Announcement