import React, { Component } from "react";
import "./style.css";
import moment from 'moment';
import { BrowserRouter as Router,
  Route, Link } from 'react-router-dom';

class BookmarkPage extends Component {
   constructor(props) {
      super(props);

      this.state= {
         id: 0,
         title: '',
         urlToImage: '',
         author: '',
         publishedAt: '',
         description: '',
         url: ''
      }
   }
   componentDidMount(){
      let id = this.props.match.params.id;
      console.log(this.props);
      fetch(`/video-games/${id}.json`)
      .then(response => response.json())
      .then(article => {
         this.setState({
            id: article.id,
            title: article.title,
            urlToImage: article.urlToImage,
            author: article.author,
            publishedAt: article.publishedAt,
            description: article.description,
            url: article.url
         })
      })
   }
   render() {
    return (
      <div className="article">
         <p className="title">{this.state.title}</p>
         <div className="frame">
            <p className="data">{moment(this.state.data).format('LL')}</p>
            <img className="image_url" src={this.state.urlToImage} />
            <p className="blurb">{this.state.description}</p>
         </div>
      </div>
    );
  }
}

moment().format('LL');

export default BookmarkPage;