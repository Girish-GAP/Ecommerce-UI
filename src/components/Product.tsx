import styled from "@emotion/styled"
import { Box} from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface ProductProps {
    item: {
        id: number,
        img: string
    }
}

const Container = styled(Box)({
    flex : '1',
    margin : '5px',
    minWidth : '280px',
    height : '350px',
    display : 'flex',
    alignItems : 'center',
    justifyContent :'center'
})

const Circle = styled(Box)({
     
})
const Image = styled('img')({
     height : '75%'
})
const Info = styled(Box)({
     
})
const Icon = styled(Box)({
     
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