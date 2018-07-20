import React, { Component } from "react";
// import "./style.css";
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
      publishedAt: ''
    }
  }
  componentDidMount() {
    let title  = this.props.match.params.title;
    // console.log(title)
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=a78e0b2dba4b489eb46d9605ed082d65/${title}`)
      .then(response => response.json())
      .then(data => {
        console.log(data.articles)
        this.setState({
          title: data.articles.title,
          description: data.articles.description,
          url: data.articles.url,
          urlToImage: data.articles.urlToImage,
          publishedAt: data.articles.publishedAt
        })
      })
  }
  render() {
    return (
      <div className='TechnologyPage'>
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
        <h2 className='page-title'>Technology</h2>
        <div className='container'>
            <div className='technology-news'>
              <h2 className='title'>{this.state.title}</h2>
              <h4 className='time'>{this.state.publishedAt = moment(this.state.publishedAt).format('LL')}</h4>
              <div className='img-description'>
                <a href={this.state.url} target="_blank"><img className='img' src={this.state.urlToImage || 'http://www.bsmc.net.au/wp-content/uploads/No-image-available.jpg'} /></a>
                <h3 className='description'>{this.state.description || 'No description.'}</h3>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default SinglePage;
