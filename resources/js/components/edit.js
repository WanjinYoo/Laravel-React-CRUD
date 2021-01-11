import React from 'react'


export default function Edit(props) {
    console.log(props.location.aboutProps.description)
    return (
        <div>
        <div className ="container">
        <h3>Edit items :: </h3>
            <form action = {`/api/items/${props.location.aboutProps.id}`} method = "post">
                <div className="form-group">
                     <label htmlFor="title">title</label>
                    <input type="text" class="form-control" name="title" placeholder="title" defaultValue={props.location.aboutProps.title} />
                </div>

                <div className="form-group">
                    <label htmlFor="title">description</label>
                    <input type="text" class="form-control" name="description" placeholder="title" defaultValue= {props.location.aboutProps.description} />
                </div>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    </div>
    )
}
