import React from 'react';
import './App.css';
import axios from 'axios';


class App extends React.Component{
  constructor() {
    super()
    this.state = {
      user: 'wombat1972',
      pic: '',
      name: '',
      uid: '',
      followers: []
    } 
  
  }
    
  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.user}`)
      .then(result => {
        this.setState({
          pic: result.data.avatar_url,
          name: result.data.name,
          uid: result.data.login,
        })
        console.log(result)
      })
      .catch(error => {
        console.log('error:', error)
      })

    //   Axios.get(`https://api.github.com/users/${this.state.user}/followers`)
    //   .then (result => {
    //     this.setState ({
    //     followers: result.data
    //   })  
    // })
  }

  render() {
    return(
      <>
        <h1>Github User Card</h1>
        <div>
          <h1>Github profile for: {this.state.name}</h1>
          <h2>Profile name: {this.state.uid}</h2>
          <img src={this.state.pic} alt='github avatar' />
        </div>
        
      </>
    );
  }
}

export default App;
