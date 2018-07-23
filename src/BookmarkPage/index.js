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
      let title = this.props.title
      console.log(this.props);
      fetch(`https://newsapi.org/v2/top-headlines?country=us&title=${title}&apiKey=a78e0b2dba4b489eb46d9605ed082d65`)
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