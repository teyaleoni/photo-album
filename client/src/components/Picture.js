import React, { Component } from 'react';
import '../styles/Picture.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Picture extends Component {
  state = {
    header: '',
    mainPic: '',
    albumNumber: 0,
    albumHolder: [],
  }

  componentDidMount() {
    const id = this.props.match.params.id
    axios.get(`http://localhost:3001/photos/${id}`).then(resp => {
      this.setState({
        header: resp.data.name,
        mainPic: resp.data.url,
        albumNumber: resp.data.albumId
      })
    }) 
  }

  componentWillReceiveProps(newProps) {
    const id = newProps.match.params.id
    axios.get(`http://localhost:3001/photos/${id}`).then(resp => {
      this.setState({
        header: resp.data.name,
        mainPic: resp.data.url,
        albumNumber: resp.data.albumId
      })
    }) 
  }

  handleClick = (e) => {
    // e.preventDefault()
  }
  
  render() {
    let id = Number(this.props.match.params.id)
    console.log(id)
    return (
      <div className="pictureContainer">
          <h1>{this.state.header}</h1>
        <div className = "photo">
          <Link to={"/Photos/" + (id-1)}><button onClick={this.handleClick}>Back</button></Link>
          <img className="pic" src = {this.state.mainPic} />
          <Link to={"/Photos/" + (id+1)}><button onClick={this.handleClick}>Forward</button></Link></div>
          
      </div>
    )
  }
}




export default Picture;