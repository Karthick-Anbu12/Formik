import React, { useContext } from 'react'
import context from "./Context"
import List from './List'
import Authorlist from './Authorlist'
import { Link } from 'react-router-dom'

function Dashboard() {

  const { author ,book} = useContext(context)
  return (
    <div>
      <h1 className='mt-1'>Books -{book.length}</h1>
      <div className='container mb-2'>
        {book.map((item, index) => {
          return <List item={item} index={index}></List>
        })
        }
        <Link className='btn btn-primary' to={'/bookform'} >Add book</Link>
      </div>
      <h1 className='mt-1'>Author-{author.length}</h1>
      <div className='container mb-2'>
        {
          author.map((item, index) => {
            return <Authorlist item={item} index={index}></Authorlist>
          })
        }
         <Link className='btn btn-primary' to={'/authorform'} >Add Author</Link>
      </div>
     

    </div>
  )
}

export default Dashboard

