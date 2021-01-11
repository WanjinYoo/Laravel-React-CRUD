import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <div className="container">

            <h3>BASIC CRUD SYSTEM USING LARAVEL / REACT</h3>
            <br />
             <button className= "btn btn-success">NEW +</button>
             <hr />
                <div className="row">
                    <div className= "col-md-4">
                        <div className="card">
                        <div className='card-header'>Straw Berry</div>
                            <div className="card-body"> This Straw Berry is unpopluar and not worth
                            <hr />
                            <button className= "btn btn-primary">Edit</button>
                            <button className= "btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>

                    <div className= "col-md-4">
                        <div className="card">
                        <div className='card-header'>Item list</div>
                            <div className="card-body"> Item components
                            <hr />
                            <button className= "btn btn-primary">Edit</button>
                            <button className= "btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>

                    <div className= "col-md-4">
                        <div className="card">
                        <div className='card-header'>Item list</div>
                            <div className="card-body"> Item components
                            <hr />
                            <button className= "btn btn-primary">Edit</button>
                            <button className= "btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
