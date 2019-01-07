import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Albums.css'
import axios from 'axios'


class Albums extends Component {
        state = {
          albumHolder: []
        }
      
        componentDidMount() {
          axios.get('http://localhost:3001/albums').then(resp => {
            this.setState({
              albumHolder: resp.data
            })
          })
        }
        

    render() {
      return (
        <div className="albumsContainer">
            <h1>Photo Albums</h1>
            <div className="holder">
                {this.state.albumHolder.map(x => (
                <Link to={`/Album/${x.id}`}><div className="photo"><img src={x.coverPhoto}/> <div className="name">{x.name}</div></div></Link>
                ))}
            </div>
            
        </div>
    
      )
    }
  }

export default Albums;