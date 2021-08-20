import React, { Component } from 'react'
import Users from "./components/cards";
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = { users_data :[], 
      loading : true
    }

    this.updateState = this.updateState.bind(this)
  }

  updateState(){
    document.getElementById("main").style.display='inline-block';
    const link="https://reqres.in/api/users?page=1";
    fetch(link)
    .then(Response => Response.json())
    .then((users) => {

      this.setState({users_data :users.data, 
      loading: false
    })
    console.log(users.data);
    })
    .catch((error) => {
      console.error(error)
    })
  }

  render(){
    return (<>
    <nav>
      <div className="box">
        <div className="row">
          <div className="logo">
            <h1>L G M</h1>
          </div>

          <div className="button">
            <button onClick={this.updateState}>Get Users</button>
          </div>
        </div>
      </div>
    </nav>
    
    <div className="box2">
      <Users loading={this.state.loading} users={this.state.users_data}/>
    </div>
    </>
    )
  }
}

export default App;
