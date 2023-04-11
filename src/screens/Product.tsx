import styled from "@emotion/styled"
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { Add, Remove } from "@mui/icons-material"


const UserContainer = styled(Box)({

})

const UserWrapper = styled(Box)({
    padding: '50px',
    display: 'flex'
})

const ImgContainer = styled(Box)({
    flex: 1
})

const Image = styled('img')({
    width: '100%',
    height: '90vh',
    objectFit: 'cover'
})

const InfoContainer = styled(Box)({
    flex: 1,
    padding: '0px 50px'
})

const Title = styled(Typography)({

})

const Description = styled(Typography)({
    margin: '20px 0px'
})


const Price = styled(Typography)({

})

const FilterContainer = styled(Box)({
    width: '50%',
    margin: '30px 0px',
    display: 'flex',
    justifyContent: 'space-between'
})
const Filter = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px'
})

const FilterTitle = styled(Box)({

})

const FilterColor = styled(Typography)(({ color }) => ({
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: `${color}`,
    margin: '0px 5px',
    cursor: 'pointer'
}))


const FilterText = styled(Typography)({
    fontSize: '20px',
    fontWeight: '600',
    marginRight: '20px',
})

const UserSelect = styled(Select)({

})

const Option = styled(MenuItem)({

})


const AddContainer = styled(Box)({
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
})

const AmountContainer = styled(Box)({
    margin: '20px',
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center'
})

const Amount = styled(Box)({
    width : '30px',
    height : '30px',
    borderRadius : '30px',
    border : '1px solid teal',
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center',
    margin : '0px 5px'
})

const UserButton = styled(Button)({
    padding : '15px',
    border : '1px solid teal',
    backgroundColor : 'white',
    color : 'black',
    fontWeight : '500',

    '&:hover' : {
        backgroundColor : '#f8f4f4'
    }
}) 


const Product = () => {
    return (
        <UserContainer>
            <Navbar />
            <Announcement />

            <UserWrapper>
                <ImgContainer>
                    <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
                </ImgContainer>

                <InfoContainer>
                    <Title variant="h4" >Denim Jumpsu it</Title>
                    <Description variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, perferendis ipsam quas sit, rem a ipsum impedit inventore aut repellat maxime vero similique dolores enim fuga beatae amet? Illo, maiores.</Description>
                    <Price variant="h5">$ 100</Price>

                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="gray" />
                        </Filter>

                        <Filter>

                            <FormControl sx={{ width: '100px' }}>
                                <InputLabel
                                    id="demo-simple-select-label">Size</InputLabel>
                                <UserSelect
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Age"
                                >
                                    <Option value={'XS'}>XS</Option>
                                    <Option value={'S'}>S</Option>
                                    <Option value={'M'}>M</Option>
                                    <Option value={'L'}>L</Option>
                                    <Option value={'XL'}>XL</Option>
                                </UserSelect>
                            </FormControl>
                        </Filter>
                    </FilterContainer>

                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount >1</Amount>
                            <Add  />
                        </AmountContainer>

                        <UserButton >ADD TO CART</UserButton>


                    </AddContainer>

                </InfoContainer>
            </UserWrapper>

            <Newsletter />
            <Footer />
        </UserContainer>
    )
}

export default Product