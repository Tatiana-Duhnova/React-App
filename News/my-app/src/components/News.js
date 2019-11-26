import React from 'react'
import PropTypes from 'prop-types'
import { Article } from './Article'

class News extends React.Component {
  renderNews = () => {
    const {data} = this.props;
    let newsTemplate = null;
  
    if (data.length) {
      newsTemplate = this.props.data.map(function(item) {
        return <Article key={item.id} data={item}/>
      });
    } else {
      newsTemplate = <p>К сожалению, новостей нет</p>
    }
  
    return newsTemplate;
  }
  
  render() {
    const {data} = this.props;
      
    return (
      <div>
        {data.length ? <strong onClick={this.setCounter}>Всего новостей: {data.length}</strong> : null}
        {this.renderNews()}
      </div>
    );
  }
}
  
News.propTypes = {
  data: PropTypes.array.isRequired  
}

export { News }