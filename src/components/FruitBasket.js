import React, { Component } from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';


const FruitBasket = (props) => {

  debugger

  return (
   <div className="fruit-basket">
     <Filter filters={props.filters} handleChange={props.updateFilterCallback}/>
     <FilteredFruitList fruit={props.fruit} filters={props.filters}/>
   </div>
   );
}

  FruitBasket.defaultProps = {
    fruit: "",
    filters: "",
    currentFilter: "",
    updateFilterCallback: "",
  }

export default FruitBasket;

