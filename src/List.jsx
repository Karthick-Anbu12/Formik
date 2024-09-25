import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import context from './Context'

function List({ item ,index}) {
    const {removebook}=useContext(context)

    return (
        <>
            <div>
                <ul class="list-group">
                    <li class="list-group-item list-group-item-dark mb-2">
                        <div className='fw-bold fs-5'>{item.title}<span className='fs-6'>,{item.author}</span></div>
                        <div className='text-end'>
                            <button className='btn btn-danger ' onClick={()=>removebook(index)}>Delete</button>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default List
