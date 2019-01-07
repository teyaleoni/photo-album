import React, { Component } from 'react';
import '../styles/Album.css'
import axios from 'axios'
import { Link } from 'react-router-dom'


class Album extends Component {
  state = {
    singleAlbum: [],
    header: {},
    albumHolder: []
  }

  componentDidMount() {
    const id = this.props.match.params.id
    axios.get(`http://localhost:3001/albums/${id}?_embed=photos`).then(resp => {
      this.setState({
        singleAlbum: resp.data.photos,
        header: resp.data
      })
    })
    axios.get('http://localhost:3001/albums').then(resp => {
            this.setState({
              albumHolder: resp.data
            })
          })
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      const id = newProps.match.params.id
    axios.get(`http://localhost:3001/albums/${id}?_embed=photos`).then(resp => {
      this.setState({
        singleAlbum: resp.data.photos,
        header: resp.data
      })
    })
  }

 }



  
    render() {
      return (
        <div className="albumContainer">
            <h1>{this.state.header.name}</h1>
              <div className="holdsContent">
              <div className="sidebar">
                <ul>
                  {this.state.albumHolder.map(x => (
                   <Link to={`/Album/${x.id}`}> <li className="name2">{x.name}</li></Link>
                    )
                  )} 
                </ul>
                

              </div>

              <div className="picHolder">
                    {this.state.singleAlbum.map(x => (
                      <div className="photo2"><img className="img2" src={x.url}/><div className="caption">{x.name}</div></div>
                      )
                    )} 
                  

              </div>

            </div>
            
        </div>
      )
    }
  }

export default Album;