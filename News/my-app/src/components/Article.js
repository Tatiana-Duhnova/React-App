import React from 'react';
import PropTypes from 'prop-types';

class Article extends React.Component {
    state = {
      visible: false,

    }
  
    handleReadMoreClick = (e) => {
      e.preventDefault();
      this.setState({visible: true});
    }
  
    render() {
      const {author, text, bigText} = this.props.data;
      const {visible} = this.state;
  
      return (
        <div className='news'>
          <p>{author}: </p>
          <span>{text}</span>
          {!visible && <a href="#readmore" onClick={this.handleReadMoreClick}>Подробнее...</a>}
          {visible && <React.Fragment><p className='white'>{bigText}</p> <a href='#close' onClick={() => this.setState({visible: false})}>Скрыть</a></React.Fragment>}
        </div>
      );
    }
  }
  
  Article.propTypes = {
    data: PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      bigText: PropTypes.string.isRequired
    })
  }

  export {Article}