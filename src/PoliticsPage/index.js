import React, { Component } from "react";
import "./style.css";
import moment from 'moment'

class PoliticsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      politicsNews: []
    }
  }
  componentDidMount(){
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=politics&apiKey=a78e0b2dba4b489eb46d9605ed082d65')
    .then(response => response.json())
    .then(data => {
      console.log(data.articles)
      this.setState({
        politicsNews: data.articles
    })
  })
  }
  render() {
    return (
      <div>
        <h2 className='page-title'>Politics</h2>
          <div className='container'> 
            {this.state.politicsNews.map(article => 
             <div className='business-news'>
                <a href={article.url} target="_blank"><h2 className='title'>{article.title}</h2></a>
                <h4 className='time'>{article.publishedAt = moment(article.publishedAt).format('LL')}</h4>
                <div className='img-description'>
                  <a href={article.url} target="_blank"><img className='img' src={article.urlToImage} alt='' /></a>
                  <h3 className='description'>{article.description}</h3>
                </div>
              </div>
            )}
          </div>
      </div>
    )
  }
}

export default PoliticsPage;
