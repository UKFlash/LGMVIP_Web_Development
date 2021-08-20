import React from 'react'

const Users = ({loading,users}) => {
    return loading ? (
        <div id="main">
          
        </div>
        ) : 
        (
          <div  id="main" >
    
          {users.map(user =>
                      <div className="card">
                        {
                          console.log(user)
                        }
                        <div className="profile">
                          <img src={user.avatar} alt={user.avatar} className="image"></img>
                          <h2 className="name">{user.first_name} {user.last_name}</h2>
                          <h3 className="email">{user.email}</h3>
                          <p className="ID">Id - {user.id}</p>
                          <button className="button button1">Connect</button>
                        </div>
                      </div>
            )
          }
          </div>
        )
}

export default Users;
