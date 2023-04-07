import styled from "@emotion/styled"
import { Box, Button, Typography } from "@mui/material"

interface CategoriesItemProps {
    item :  {
      id : number,
      img : string,
      title : string,
    }
}

const UserContainer = styled(Box)({
  flex : '1',
  margin : '3px',
  height : '70vh',
  position : 'relative'
})

const Image = styled('img')({
  width : '100%',
  height : '100%',
  objectFit : 'cover'
})

const Title = styled(Typography)({
  color : 'white',
  marginBottom : '20px' 
})

const Info = styled(Box)({
  position : 'absolute',
  top : '0',
  left : '0',
  width : '100%',
  height : '100%',
  display : 'flex',
  flexDirection : 'column',
  alignItems : 'center',
  justifyContent : 'center'
})

const UserButton = styled(Button)({
  border : 'none',
  backgroundColor : 'white',
  padding : '10px',
  color : 'gray'
})

const CategoriesItem = ({item} : CategoriesItemProps) => {
  return (
    <UserContainer>
        <Image src = {item.img}/>
        <Info>
          <Title variant="h4">{item.title}</Title>
          <UserButton variant="outlined">SHOP NOW</UserButton>
        </Info>
    </UserContainer>
  )
}

export default CategoriesItem