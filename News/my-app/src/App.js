import React from 'react';
import './App.css';
import {Add} from './components/Add';
import {News} from './components/News';

class App extends React.Component {
  state = {
    news: null,
    isLoading: false,
  }

  static getDerivedStateFromProps(props, state) {
    let nextFilteredNews;

    if (Array.isArray(state.news)) {
      nextFilteredNews = [...state.news];

      nextFilteredNews.forEach((item, index) => {
        if (item.bigText.toLowerCase().indexOf('pubg') !== -1) {
          item.bigText = 'SPAM';
        }
      })

      return {
        filteredNews: nextFilteredNews,
      }
    }

    return null
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('http://localhost:3000/newsData.json')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setTimeout(() => {
        this.setState({isLoading: false, news: data});
      }, 1000)
    })
  }

  handleAddNews = (data) => {
    const nextNews = [data, ...this.state.news];
    this.setState({ news: nextNews });
  }

  render() {
    const {news, isLoading} = this.state;

    return (
      <div className='App'>
        <h3>Новости</h3>
        <Add onAddNews={this.handleAddNews}/>
        {isLoading && <p>Loading... Please, wait</p>}
        {Array.isArray(news) && <News data={this.state.news}/>}
      </div>
    );
  }
}

// const App = () => {
//   state = {
//     news: myNews,
//   }

//   return (
//     <div className='App'>
//       <h3>Новости</h3>
//       <Add/>
//       <News data={this.state.news}/>
//     </div>
//   );
// };

export default App;
