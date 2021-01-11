import React from 'react'

export default function New() {
    return (
        <div>

            <div className ="container">
            <h3>New items ::</h3>
                <form action = "/api/items" method = "POST">
                    <div className="form-group">
                        <label for="title">Title</label>
                        <input type="text" class="form-control" name="title" placeholder="title" />
                    </div>

                    <div className="form-group">
                        <label for="title">description</label>
                        <input type="text" class="form-control" name="description" placeholder="title" />
                    </div>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        </div>
    )
}
