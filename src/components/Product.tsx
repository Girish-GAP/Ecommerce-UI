import styled from "@emotion/styled"
import { Box} from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { hover } from "@testing-library/user-event/dist/hover";
import { Scale } from "@mui/icons-material";
import { info } from "console";
import * as React from 'react';

interface ProductProps {
    item: {
        id: number,
        img: string
    }
}

const Info = styled(Box)({
    opacity : '0',
    width : '100%',
    height : '100%',
    position : 'absolute',
    top : '0',
    left : '0',
    backgroundColor : 'rgba(0,0,0,0.2)',
    zIndex : '3',
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center',
    transition : 'all 0.5s ease',
    cursor : 'pointer'
})


const Container = styled(Box)({
    flex : '1',
    margin : '5px',
    minWidth : '280px',
    height : '350px',
    display : 'flex',
    alignItems : 'center',
    justifyContent :'center',
    backgroundColor : '#f5fbfd',
    position :'relative',

    '&:hover': {
        '& > *': {
          opacity: 1,
          // add any additional styles for the hover effect here
        },
      },
        
      
})

const Circle = styled(Box)({
     width : '200px',
     height : '200px',
     borderRadius : '50%',
     backgroundColor : 'white',
     position : 'absolute'
})
const Image = styled('img')({
     height : '75%',
     zIndex : '2'
})

const Icon = styled(Box)({
    width : '40px',
    height : '40px',
    borderRadius : '50%',
    backgroundColor : 'white',
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    margin : '10px',
    transition : 'all 0.3s ease',
    
    '&:hover' : {
        backgroundColor : '#e9f5f5',
        transform : 'Scale(1.1)'
    }
})



const Product = ({ item }: ProductProps) => {
    return (
        <Container>
            <Circle/>
            <Image src = {item.img}/>
            <Info>
                <Icon>
                    <ShoppingCartIcon/>
                </Icon>
                <Icon>
                    <SearchIcon/>   
                </Icon>
                <Icon>
                    <FavoriteBorderIcon/>
                </Icon>
            </Info>
        </Container>
    )
}

export default Product