import React, { Component } from "react";
import "./style.css";

class BusinessPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      businessNews: []
    }
  }
  componentDidMount(){
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a78e0b2dba4b489eb46d9605ed082d65')
    .then(response => response.json())
    .then(data => {
      console.log(data.articles)
      this.setState({
        businessNews: data.articles
    })
  })
  }
  render() {
    return (
      <div> 
        {this.state.businessNews.map(article => 
         <h1>{article.title} <a href={article.url} target="_blank">{article.url}</a></h1>   
      )}
      </div>
    )
  }
}

export default BusinessPage;
