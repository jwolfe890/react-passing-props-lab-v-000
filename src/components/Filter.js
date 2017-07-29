import React, { Component } from 'react';

const Filter = props => {

    return ( 
      <select defaultValue='all' onChange={props.handleChange}>
      <option value='all'>All</option>
      {props.filters.map(filter => <option key={filter} value={filter}>{filter}</option>
        )}
      </select> 
      ); 

};

  Filter.defaultProps = {
    filters: [],
    handleChange: "",
  }

export default Filter;

