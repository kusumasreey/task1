import './App.css';
import axios from 'axios';
import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users',
      { headers: { 'Content-Type': 'application/json' } })
      .then(response => {
        this.setState({
          data: response.data
        })
      })
      .catch(error => {
        console.log(error);
      })
  }
  render() {
    return (
      <div className="col-xl-8 order-xl-1">
        <div className="card bg-secondary shadow">
          <div className="card-header bg-white border-0">
            <div className="row align-items-center">
              <ul className="responsive-table">
                <li className="col-md-12 table-header">
                  <h3 className="c-1 mb-0">Id</h3>
                  <h3 className="c-4 mb-0">Name</h3>
                  <h3 className="c-4 mb-0">User Name</h3>
                  <h3 className="c-4 mb-0">City</h3>
                  <h3 className="c-4 mb-0">Suite</h3>
                  <h3 className="c-4 mb-0">Zip Code</h3>
                </li>
                <div>
                  {
                    this.state.data.map(post => (
                      <li className="col-md-12 table-row">
                        <div className="c-1">{post.id}</div>
                        <div className="c-4">{post.name}</div>
                        <div className="c-4">{post.username}</div>
                        <div className="c-4">{post.address.city}</div>
                        <div className="c-4">{post.address.suite}</div>
                        <div className="c-4">{post.address.zipcode}</div>
                      </li>
                    ))
                  }
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;