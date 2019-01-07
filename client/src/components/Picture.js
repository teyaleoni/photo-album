import React, { Component } from 'react';
import '../styles/Picture.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Picture extends Component {
  state = {
    header: {}
  }

  componentDidMount() {
    const id = this.props.match.params.id
    axios.get(`http://localhost:3001/album/${id}?_embed=photos`).then(resp => {
      this.setState({
        header: resp.data
      })
    })
  //   axios.get('http://localhost:3001/albums').then(resp => {
  //           this.setState({
  //             albumHolder: resp.data
  //           })
  //         })
  // }

  // componentWillReceiveProps(newProps) {
  //   if (this.props.match.params.id !== newProps.match.params.id) {
  //     const id = newProps.match.params.id
  //   axios.get(`http://localhost:3001/albums/${id}?_embed=photos`).then(resp => {
  //     this.setState({
  //       // singleAlbum: resp.data.photos,
  //       header: resp.data
  //     })
  //   })
   }

 



  
    render() {
      return (
        <div className="albumContainer">
            <h1>{this.state.header.name}</h1>
        </div>
      )
  }
}




export default Picture;