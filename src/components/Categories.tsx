import {categories} from "../data"
import { Box } from "@mui/system"
import styled from "@emotion/styled"
import CategoriesItem from "./CategoriesItem"

const UserContainer = styled(Box)({
  display : 'flex',
  padding : '20px',
  justifyContent : "space-between"
})


const Categories = () => {
  return (
    <UserContainer>
        {
            categories.map((item)=>(
                <CategoriesItem item = {item}></CategoriesItem>
            ))
        }
    </UserContainer>
  )
}

export default Categories