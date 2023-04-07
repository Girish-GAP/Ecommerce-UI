import styled from "@emotion/styled"
import { Box } from "@mui/material"
import { popularProducts } from "../data"
import Product from "./Product"

const Container = styled(Box)({
  display : 'flex',
  padding : '20px',
  flexWrap : 'wrap',
  justifyContent : 'space-between',
  alignItems : 'center',
  
})  

const Products = () => {
  return (
    <Container>
        {
            popularProducts.map((item)=>(
                <Product item = {item} key = {item.id}/>
            ))
        }
        
    </Container>
  )
}

export default Products