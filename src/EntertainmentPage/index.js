import React, { Component } from "react";
import "./style.css";
import moment from 'moment'

class EntertainmentPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entertainmentNews: []
    }
  }
  componentDidMount(){
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=a78e0b2dba4b489eb46d9605ed082d65')
    .then(response => response.json())
    .then(data => {
      console.log(data.articles)
      this.setState({
        entertainmentNews: data.articles
    })
  })
  }
  render() {
    return (
      <div className='EntertainmentPage'>
        <h2 className='page-title'>Entertainment</h2>
          <div className='container'> 
            {this.state.entertainmentNews.map(article => 
             <div className='entertainment-news'>
                <a href={article.url} target="_blank"><h2 className='title'>{article.title}</h2></a>
                <h4 className='time'>{article.publishedAt = moment(article.publishedAt).format('LL')}</h4>
                <div className='img-description'>
                  <a href={article.url} target="_blank"><img className='img' src={article.urlToImage || 'http://www.bsmc.net.au/wp-content/uploads/No-image-available.jpg'}  /></a>
                    <h3 className='description'>{article.description || "No description."} </h3>
                </div>
              </div>
            )}
          </div>
      </div>
    )
  }
}

export default EntertainmentPage;
