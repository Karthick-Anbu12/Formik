import React, { useContext } from 'react'
import context from './Context'
import { Link } from 'react-router-dom'

function Authorlist({item,index}) {
    const {removeauthor}=useContext(context)
    return (
        <>
            <div>
                <ul class="list-group">
                    <li class="list-group-item list-group-item-dark mb-2">
                        <span className='fw-bold fs-5 '>{item.name}<span className='fs-6'>,{item.dob}</span>
                        </span>
                        <div className='text-end'>
                            <button className='btn btn-danger ' onClick={()=>removeauthor(index)}>Delete</button>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Authorlist
