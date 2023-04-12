import { Button, Link, TextField, Typography, styled } from '@mui/material'
import Box from '@mui/material/Box'
import FormControl from '@mui/material'


const Container = styled(Box)({
  width: '100vw',
  height: '100vh',
  background: `linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center`,

  backgroundSize: 'cover',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

})

const Wrapper = styled(Box)({
  width: '35%',
  padding: '20px',
  backgroundColor: 'white'
})

const Form = styled('form')({
  display: 'flex',
  flexDirection : 'column',

})

const Title = styled(Typography)({
  fontWeight: '300'
})

const Input = styled(TextField)({
  flex: '1',
  minWidth: '40%',
  margin: '10px 0px',
  padding: '10px'
})

const Agreement = styled(Box)({
  fontSize: '12px',
  margin: '20px 0px',

})

const UserButton = styled(Button)({
  width: '40%',
  border: 'none',
  padding: '15px 20px',
  backgroundColor: 'teal',
  color: 'white',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '#009688'
  },
  marginBottom : '10px'

})

const UserLink = styled(Link)({
    margin : '5px 0px',
    fontSize : '12px',
    textDecoration : 'underline',
    cursor : 'pi'
})

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title variant='h4'>LOG IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />

          <UserButton>LOGIN</UserButton>
          <UserLink>DO NOT YOU REMEMBER THE PASSWORD</UserLink>
          <UserLink>CREATE A NEW ACCOUNT</UserLink>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login