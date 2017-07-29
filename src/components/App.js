import React, { Component }  from 'react';
import FruitBasket from './FruitBasket';
import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      fruit: [],
      currentFilter: null,
      filters: [],
      selectedFilter: null
    };

    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ selectedFilter: event.target.value });
  }

  componentWillMount() {
    this.fetchFilters();
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  render() {
    return (
        <FruitBasket 
          fruit={this.state.fruit}
          filters={this.state.filters}
          currentFilter={this.state.currentFilter}
          updateFilterCallback={this.handleFilterChange}
        />
    );
  }
}

export default App;
