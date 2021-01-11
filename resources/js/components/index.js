import React,{ useState } from 'react'
import Items from './items';
import { Link } from 'react-router-dom'

export default function Index() {
    const [items,setItems] = useState([]);
    axios.get('./api/items')
    .then((res) => {
        setItems(res.data);
    })
    const itemList = items.map((item) => {
        return (
            <Items
            title = {item.title}
            description = {item.description}
            />
        )
    })

    return (
        <div className="container">

            <h3>BASIC CRUD SYSTEM USING LARAVEL / REACT</h3>
             <br />
             <Link
                 className= "btn btn-success"
                     to="/create"
             >New</Link>
              <hr />
             <div className="row">
                 {itemList}
            </div>
       </div>
    )
}
