import React from 'react';
import PropTypes from 'prop-types';

class DeleteLastItem extends React.Component {
  
  render(){
    return (
        <button onClick={this.props.deleteLastItem} disabled={this.props.buttonDisabled}>
          Delete Last Item
        </button>
    );
  }
}



DeleteLastItem.propTypes = {
    deleteLastItem: PropTypes.func.isRequired,
    buttonDisabled: PropTypes.bool.isRequired,
}

export default DeleteLastItem