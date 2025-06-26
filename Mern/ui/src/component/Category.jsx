import React from 'react'
import { NavLink } from 'react-router-dom'

const Category = ({item}) => {
  return (
    <div>
        <NavLink to={"/category" +item.url}>
            <img src={item.imageurl} alt="" style={{width: "150px" }} />  
        </NavLink>
    </div>
  )
}

export default Category
