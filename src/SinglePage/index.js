import React, { Component } from "react";
import "./style.css";
import moment from 'moment'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class SinglePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      url: '',
      urlToImage: '',
      publishedAt: '',
    }
  }
  componentDidMount() {
    let title = this.props.title;
    console.log(this.props)
    fetch(`https://newsapi.org/v2/top-headlines?country=us&title=${title}&apiKey=a78e0b2dba4b489eb46d9605ed082d65`)
      .then(response => response.json())
      .then(data => {
        console.log('All of articles:', data.articles)
      })
    this.setState({
      article: this.props.currentArticle
    })
  }
  render() {
    console.log('currentArticle:', this.props)
    if (this.props.currentArticle) {
      return (
        <div className='SinglePage'>
          <nav className='nav'>
            <p><Link className='home' to='/'>Home</Link></p>
            <nav className='nav-categories'>
              <Link to="/business" className="business-link">Business</Link>
              <Link to="/politics" className="politics-link">Politics</Link>
              <Link to="/entertainment" className="entertainment-link">Entertainment</Link>
              <Link to="/sports" className="sports-link">Sports</Link>
              <Link to="/science" className="science-link">Science</Link>
            </nav>
          </nav>
          <a href={this.props.currentArticle.url} target="_blank"><h2 className='page-title'>{this.props.currentArticle.title}</h2></a>
            <div className='business-news'>
              <div className='img-description'>
                <a href={this.props.currentArticle.url} target="_blank"><img className='img' src={this.props.currentArticle.urlToImage || 'http://www.bsmc.net.au/wp-content/uploads/No-image-available.jpg'} /></a>
                <h3 className='description'>{this.props.currentArticle.description || 'No description.'}</h3>
              </div>
              <h2 className='title'>By {this.props.currentArticle.author}</h2>
              <h4 className='time'>{this.props.currentArticle.publishedAt = moment(this.props.currentArticle.publishedAt).format('LL')}</h4>
            </div>
          <div>
            <div className="comment-head">
              <h1>Write your Comment.</h1>
            </div>
            <div className="form">
              <form action="/article">
                Comment: <input type="text" comment="comment">
                </input>
                <input type="submit">
                </input>
              </form>
            </div>
          </div>
        </div>
      )
    }
    else {
      return (
        <h1>Loading...</h1>
      )
    }
  }
}

export default SinglePage;
