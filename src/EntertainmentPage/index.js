import React, { Component } from "react";
import "./style.css";

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
      <div> 
        {this.state.entertainmentNews.map(article => 
         <h1>{article.title} <a href={article.url} target="_blank">{article.url}</a></h1>   
      )}
      </div>
    )
  }
}

export default EntertainmentPage;
