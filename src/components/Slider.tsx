import styled from "@emotion/styled"
import { Box, Button, Typography } from "@mui/material"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { sliderItems } from "../data";
import { useState } from 'react';

interface ArrowProps {
    direction: 'left' | 'right';
}

interface SlideProps {
    bg: string
}

interface UserWrapperProps {
    slideindex : number
}

const UserContainer = styled(Box)({
    width: '100%',
    height: '100vh',    // viewport height // full height of the browser window
    display: 'flex',
    position: 'relative',   // if child uses postion absolute
    overflow: 'hidden' // for slider
})

const Arrow = styled(Box)<ArrowProps>(({ direction }) => ({
    width: '50px',
    height: '50px',
    backgroundColor: '#fff7f7',
    borderRadius: '50%',
    // to center its item horizontally and vertically
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    // left and right arrow should be opposite edge
    position: "absolute",
    top: '0',
    bottom: '0',
    left: direction === 'left' ? '10px' : undefined,
    right: direction === 'right' ? '10px' : undefined,
    margin: 'auto',
    cursor: 'pointer',
    opacity: '0.5', // tansferancy
    zIndex: '2'
}))

// const UserWrapper = styled(Box)({
const UserWrapper = styled(Box)<UserWrapperProps>(({slideindex})=>({
    display: 'flex',
    height: '100% ',   // 100% of its parent height 
    transition : 'all 1.5s ease',   
    transform : `TranslateX(${slideindex * -100}vw)`
}))

// const Slide = styled(Box)({
const Slide = styled(Box)<SlideProps>(({ bg }) => ({
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: `#${bg}`
}))

const ImgContainer = styled(Box)({
    height: '100vh',
    flex: '1'
})

const UserImage = styled('img')({
    height: '80%'
})

const InfoContainer = styled(Box)({
    flex: '1',
    padding: '50px'
})

const Title = styled(Typography)({
    fontWeight: '600'
})

const Description = styled(Typography)({
    margin: '50px 0px',    // top-bottm  left-right
    fontSize: '20px',
    fontWeight: '500',
    letterSpacing: '3px'

})

const UserButton = styled(Button)({
    padding: '10px',
    fontSize: '20px',
    color: 'black',
    borderColor: 'black'
})



const Slider = () => {

    const [slideindex, setSlideIndex] = useState(0);

    const handleClick = (direction: string) => {
        if(direction === 'left'){
            console.log("le")
            setSlideIndex(slideindex > 0 ? slideindex-1 : 2)    // 0 1 2 // if not first then -1 else last 2
        }
        else{
            setSlideIndex(slideindex < 2 ? slideindex + 1 : 0)
        }
    }

    return (
        <UserContainer>
            {/* passing prop to style component*/}
            <Arrow direction="left" onClick={() => handleClick('left')}>
                <KeyboardArrowLeftIcon />
            </Arrow>

            <UserWrapper slideindex = {slideindex}>
                {
                    sliderItems.map((item) => (

                        <Slide key = {item.id} bg={item.bg}>
                            <ImgContainer>
                                <UserImage src={item.img} />
                            </ImgContainer>

                            <InfoContainer>
                                <Title variant="h2">{item.title}</Title>
                                <Description variant="body1">{item.desc}</Description>
                                <UserButton variant="outlined">SHOW NOW</UserButton>
                            </InfoContainer>
                        </Slide>
                    ))
                }
            </UserWrapper>

            <Arrow direction="right" onClick={() => handleClick('right')}>
                <KeyboardArrowRightIcon />
            </Arrow>
        </UserContainer>
    )
}

export default Slider
