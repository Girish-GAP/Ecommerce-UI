import React from 'react'
import { Box, Grid, TextField, Typography  } from '@mui/material';
import { styled } from '@mui/system';
import { Search} from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const UserContainer = styled(Box)({
    height: '60px',
    backgroundColor: 'light-greay'

})

const UserWrapper = styled(Box)({
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between'
})


const Left = styled(Box)({
    // width : '33.3%' // 100/3
    flex: 1,
    display : 'flex',
    alignItems : 'center'
})

const Language = styled(Box)({
    fontSize: '14px',
    cursor: 'pointer'
})

const SearchContainer = styled(Box)({
    border : '0.5px solid lightgray',
    display : 'flex',
    alignItems : 'center',
    marginLeft : '25px',
    padding : '5px',
})

const Input = styled(TextField)({
    border : 'none',
})

const Center = styled(Box)({
    flex: 1
})

const Logo = styled(Typography)({
     fontWeight : 'bold',
     textAlign : 'center',
})

const Right = styled(Box)({
    flex: 1,
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'flex-end',
    
})

const MenuItem = styled(Box)({
    fontSize : '14px',
    cursor : 'pointer',
    marginRight : '25px',  
})



const Navbar = () => {
    return (
        <UserContainer>
            <UserWrapper>
                <Left>
                    <Language>En</Language>
                    <SearchContainer>
                        <Input size="small"/>
                        {/* <input type="text" style={{padding:"1rem"}}/> */}
                        <Search style={{color : 'gray', fontSize : '23px'}}/>
                    </SearchContainer>
                </Left>

                <Center><Logo variant='h4'>GIRI SPACE</Logo></Center>
                <Right>
                     <MenuItem>REGISTER</MenuItem>
                     <Badge badgeContent={4} color = "primary">
                        <ShoppingCartIcon style = {{cursor : 'pointer'}}/>
                     </Badge>
                </Right>
            </UserWrapper>
        </UserContainer>
    )
}

export default Navbar