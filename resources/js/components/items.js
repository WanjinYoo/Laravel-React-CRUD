import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function items(props) {
    return (

             <div className= "col-md-4">
                <div className="card">
                          <div className='card-header'>{props.title}</div>
                          <div className="card-body">{props.description}
                          <hr />
                          <Link
                             className= "btn btn-primary"
                             to= {{
                                pathname: `/edit/${props.id}`,
                                aboutProps: {
                                    id: props.id,
                                    title: props.title,
                                    description: props.description
                                }
                             }}
                         >Edit</Link>
                          <button
                          className= "btn btn-danger"
                          onClick= {()=> {
                              axios.delete(`./api/items/${props.id}`)
                          } }>
                              Delete</button>
                          </div>
                </div>
            </div>

    )
}
