import React from 'react';
import axios from 'axios';
import UserCard from "./UserCard";


class App extends React.Component{
  constructor() {
    super()
    this.state = {
      user: 'wombat1972',
      pic: '',
      name: '',
      uid: '',
      bio: ''
    } 
  
  }
    
  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.user}`)
      .then(result => {
        this.setState({
          pic: result.data.avatar_url,
          name: result.data.name,
          uid: result.data.login,
          bio: result.data.bio
        })
        console.log(result)
      })
      .catch(error => {
        console.log('error:', error)
      })
  }

  render() {
    return(
      <>
        <h1>Github User Card</h1>
        <div>
          <h1>Github profile for: {this.state.name}</h1>
          <h2>Profile name: {this.state.uid}</h2>
          <img src={this.state.pic} alt='github avatar' />
          <p>Bio: {this.state.bio} </p>
        </div>
        
      </>
    );
  }
}

export default User;