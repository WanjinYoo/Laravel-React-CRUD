import React from 'react'

export default function items(props) {
    return (

             <div className= "col-md-4">
                <div className="card">
                          <div className='card-header'>{props.title}</div>
                          <div className="card-body">{props.description}
                          <hr />
                          <button className= "btn btn-primary">Edit</button>
                          <button className= "btn btn-danger">Delete</button>
                          </div>
                </div>
            </div>

    )
}
