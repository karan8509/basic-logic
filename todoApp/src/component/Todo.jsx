import React, { useState } from 'react'

const Todo = () => {
  const [input, setInput] = useState("")
  const [product, setProduct] = useState([])
  const handleClick = () => {
    setInput((prevStat) =>  setProduct([...prevStat, product] ))
    setInput("")
  }
  const handleDelete = (id) => {
    console.log(id)
  }
  return (
    <div>
      <h1 style={{ color: "red" }}>Todo app</h1>
      {/* <div style={{ display: 'flex' }}> */}
        <input type="text" name="text" placeholder='Enter Today Task' value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={handleClick}>Add</button>
      {/* </div> */}
      <ul>{product.map((err) => (
        <>
        <li><span>{err}</span>  <button onClick={() => handleDelete(err)}>Delete</button></li>
        </>
      ))}</ul>
      </div>
  )
}

export default Todo
