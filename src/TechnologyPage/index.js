import React, { Component } from "react";
import "./style.css";

class TechnologyPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      techNews: []
    }
  }
  componentDidMount(){
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=a78e0b2dba4b489eb46d9605ed082d65')
    .then(response => response.json())
    .then(data => {
      for(let title in data) {
      console.log(data[title])
      }
      this.setState({
        techNews: {
          title: data.articles[0].title,
          url: data.articles[0].url
        }
    })
  })
  }
  render() {
    return (
      <div>
        <h1>{this.state.techNews.title}</h1>
        <a href={this.state.techNews.url}>{this.state.techNews.url}</a>
      </div>
    )
  }
}

export default TechnologyPage;
