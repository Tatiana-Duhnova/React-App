import React from 'react';
import PropTypes from 'prop-types';

class Add extends React.Component {
    state = {
      name: '',
      text: '',
      bigText: '',
      agree: false,
    }
  
    showValue = (e) => {
      e.preventDefault();
  
      const {name, text, bigText} = this.state;
      this.props.onAddNews({
        id: +new Date(),
        author: name, 
        text,
        bigText
      });
    }
  
    handleChange = (e) => {
      const {id, value} = e.currentTarget;
      this.setState({[id]: value});
    }
  
    handleCheckboxChange = (e) => {
      this.setState({agree: e.currentTarget.checked});
    }
  
    validate = () => {
      const {name, text, agree} = this.state;
  
      if (name.trim() && text.trim() && agree) {
        return true;
      }
  
      return false;
    }
  
    render () {
      const {name, text, bigText,} = this.state;
  
      return (
        <React.Fragment>
          <form className='form'>
            <input 
              id='name'
              type='text'
              className='add_autor' 
              placeholder='Your name'
              value={name}
              onChange={this.handleChange}
            />
  
            <textarea 
              id='text'
              className='add_text' 
              placeholder='News text'
              value={text}
              onChange={this.handleChange}>
            </textarea>
  
            <textarea 
              id='bigText'
              className='add_text'
              value={bigText}
              onChange={this.handleChange}
              placeholder='News text more'>
            </textarea>
  
            <label className='add_chekbox'>
              <input type='checkbox' onChange={this.handleCheckboxChange}/> Agree to the rules
            </label>
  
            <button className='btn' disabled={!this.validate()} onClick={this.showValue}>Add news</button>
          </form>
        </React.Fragment>
      );
    }
  }
  
  Add.propTypes = {
    onAddNews: PropTypes.func.isRequired,
  }

  export {Add}