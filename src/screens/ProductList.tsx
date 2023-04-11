import styled from '@emotion/styled'
import { Box, Select, Typography, MenuItem } from '@mui/material'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { useState } from 'react'

const UserContainer = styled(Box)({

})

const Title = styled(Typography)({
    margin: '20px'
})
const FilterContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between'
})
const Filter = styled(Box)({
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    margin: '20px'
})

const FilterText = styled(Box)({
    fontSize: '20px',
    fontWeight: '600',
    marginRight : '20px'
})

const UserSelect = styled(Select)({

})

const Option = styled(MenuItem)({

})

const ProductList = () => {

    return (
        <UserContainer>
            <Navbar />
            <Announcement />
            <Title variant='h5'>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products  </FilterText>

                    <FormControl sx={{ width: '100px', marginRight : '20px' }}>
                        <InputLabel id="demo-simple-select-label">Colors</InputLabel>
                        <UserSelect
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                        >
                            <Option value={10}>Ten</Option>
                            <Option value={20}>Twenty</Option>
                            <Option value={30}>Thirty</Option>
                        </UserSelect>
                    </FormControl>

                    <FormControl sx={{ width: '100px' }}>
                        <InputLabel id="demo-simple-select-label">Size</InputLabel>
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




                <Filter>
                    <FilterText>Sort products</FilterText>

                    <FormControl sx={{ width: '100px' }}>
                        <InputLabel id="demo-simple-select-label">Newest</InputLabel>
                        <UserSelect
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                        >
                            <Option value={'acs'}>Price (asc)</Option>
                            <Option value={'desc'}>Price (desc)</Option>
                        </UserSelect>
                    </FormControl>
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </UserContainer>
    )
}

export default ProductList