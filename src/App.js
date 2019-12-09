import React from 'react';
import './App.css';
import axios from 'axios';


class App extends React.Component{
  constructor() {
    super()
    this.state = {
      user: 'wombat1972',
      pic: []
    } 
  
  }
    
  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.user}`)
      .then(result => {
        this.setState({
          pic: result.data.avatar_url
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
          {this.state.pic.map((pic, id) => (
            <img key={id} src={pic} alt='github avitar' />
          ))}
        </div>
        
      </>
    );
  }
}

export default App;
