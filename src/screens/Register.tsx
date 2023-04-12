import { Button, TextField, Typography, styled } from '@mui/material'
import Box from '@mui/material/Box'
import FormControl from '@mui/material'


const Container = styled(Box)({
  width : '100vw',
  height : '100vh',
  background : `linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center`,

    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center',

  })

const Wrapper = styled(Box)({
  width : '40%',
  padding : '20px',
  backgroundColor : 'white'
})

const Form = styled('form')({
  display : 'flex',
  flexWrap : 'wrap'
})

const Title = styled(Typography)({
  fontWeight : '300'
})

const Input = styled(TextField)({
  flex : '1',
  minWidth : '40%',
  margin : '20px 10px 0px 0px',
  padding : '10px'
})

const Agreement = styled(Box)({
  fontSize : '12px',
  margin : '20px 0px',

})

const UserButton = styled(Button)({
  width : '40%',
  border : 'none',
  padding : '15px 20px',
  backgroundColor : 'teal',
  color : 'white',
  cursor : 'pointer',

  '&:hover' : {
    backgroundColor : '#009688'
  }

})

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title variant='h4'>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="first name" />
          <Input placeholder="last name" />
          <Input placeholder="user name" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>

          <UserButton>CREATE</UserButton>

        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register