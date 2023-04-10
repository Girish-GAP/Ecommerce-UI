import React from 'react'
import Send from '@mui/icons-material/Send';
import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';


const UserContainer = styled(Box)({
    height: '60vh',
    backgroundColor: '#fcf5f5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
})

const Title = styled(Typography)({
    marginBottom: '20px'
})

const Description = styled(Box)({
    fontSize: '24px',
    fontWeight: '300',
    marginBottom: '20px'
})

const InputContainer = styled(Box)({
    width: '50%',
    height: '40px',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems : 'center',
    border : '1px solid lightgray'
})

const Input = styled('input')({
    height : '100%', 
    border : 'none',
    flex : '8',
    paddingLeft : '20px'
})

const UserButton = styled(Button)({
    flex : '1',
    border : 'none',
    backgroundColor : 'teal',
    color : 'white',

    '&:hover' : {
        backgroundColor :'teal'
    }
})


const Newsletter = () => {
    return (
        <UserContainer>
            <Title variant='h2'>Newsletter</Title>
            <Description>Get timely updates from your favorite products.</Description>
            <InputContainer>
                <Input placeholder='your email' />

                <UserButton variant='outlined'>
                    <Send />
                </UserButton>
            </InputContainer>

        </UserContainer>
    )
}

export default Newsletter