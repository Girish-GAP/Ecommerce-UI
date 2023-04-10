import React from 'react'
import styled from '@emotion/styled'
import { Box, List, ListItem, Typography } from '@mui/material'
import Facebook from '@mui/icons-material/Facebook';
import { Instagram, Pinterest, Twitter } from '@mui/icons-material';
import Place from '@mui/icons-material/Place';
import Call from '@mui/icons-material/Call';
import Email from '@mui/icons-material/Email';

const UserContainer = styled(Box)({
    display: 'flex',

})

const Left = styled(Box)({
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
})

const Logo = styled(Typography)({

})

const Description = styled(Typography)({
    margin: '20px 0px'
})

const SocialContainer = styled(Box)({
    display: 'flex',
})

const SocialIcon = styled(Box)(({ color }) => ({
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    color: 'white',
    backgroundColor: `${color}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '20px'
}))

const Center = styled(Box)({
    flex: '1',
    padding: '20px',

})

const Right = styled(Box)({
    flex: '1',
    padding: '20px'
})

const Title = styled(Typography)({
    marginBottom: '30px'
})

const UserList = styled(List)({
    margin: '0',
    padding: '0',
    display: 'flex',
    flexWrap: 'wrap',
})

const UserListItem = styled(ListItem)({
    width: '50%',
    marginBottom: '10px'
})

const ContactItem = styled(Box)({
    marginBottom : '20px',
    display : 'flex',
    alignItems : 'center',
})

const Payment = styled('img')({

})

const Footer = () => {
    return (
        <UserContainer>
            <Left>
                <Logo variant='h3'>GIRI</Logo>
                <Description>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim commodi in illum ratione tempora corrupti, corporis vel nihil vero, consequuntur quam, a sed qui fugiat voluptatum perspiciatis nobis similique facere!
                </Description>
                <SocialContainer>
                    <SocialIcon color={'#3B5999'}>
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color={'#e4405f'}>
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color={'#55acee'}>
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color={'#e60023'}>
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>

            <Center>
                <Title variant='h6'>Useful Links</Title>
                <UserList>
                    <UserListItem>Home</UserListItem>
                    <UserListItem>Home</UserListItem>
                    <UserListItem>Home</UserListItem>
                    <UserListItem>Home</UserListItem>
                    <UserListItem>Home</UserListItem>
                    <UserListItem>Home</UserListItem>
                    <UserListItem>Home</UserListItem>

                </UserList>
            </Center>

            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Place style={{marginRight : '10px'}}/> 101, Baker street, britan, England.
                </ContactItem>
                <ContactItem>
                    <Call style={{marginRight : '10px'}} /> + 1 234 56 78
                </ContactItem>
                <ContactItem>
                    <Email  style={{marginRight : '10px'}}/> contact@giri.dev
                </ContactItem>


                <Payment src = "https://i.ibb.co/Qfvn4z6/payment.png"></Payment>
            </Right>

        </UserContainer>
    )
}

export default Footer