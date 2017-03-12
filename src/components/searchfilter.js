import React, {Component} from 'react';
import '../App.css';


const products = [
  {
    category: 'Sporting Goods',
    price: '$49.99',
    stocked: true,
    name: 'Football'
  }, {
    category: 'Sporting Goods',
    price: '$9.99',
    stocked: true,
    name: 'Baseball'
  }, {
    category: 'Sporting Goods',
    price: '$29.99',
    stocked: false,
    name: 'Basketball'
  }, {
    category: 'Electronics',
    price: '$99.99',
    stocked: true,
    name: 'iPod Touch'
  }, {
    category: 'Electronics',
    price: '$399.99',
    stocked: false,
    name: 'iPhone 5'
  }, {
    category: 'Electronics',
    price: '$199.99',
    stocked: true,
    name: 'Nexus 7'
  }
];
class ProductTable extends React.Component{
  render(){
    let x = products.filter((product) => product.name.toLowerCase().includes(this.props.searchString)).map((product, index)=>(<tr key={index}>
      <td>{product.name}</td>
      <td>{product.price}</td>
    </tr>));
    return(
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{x}</tbody>
    </table>
  )
  };
};

const SearchBar = (props) => (
      <div>
        <form>
          <label>SEARCH :
          </label><input type="text" onChange={props.handleChange} placeholder="search a product..."/>
        </form>
      </div>
    );

class FilterProductTable extends React.Component{
  constructor(props){
    super(props);
    this.state = {currentSearch : ''};
    this.handleChange = this.handleChange.bind(this);
  }
render(){
  return(
  <div>
    <SearchBar handleChange={this.handleChange}/>
    <ProductTable searchString={this.state.currentSearch}/>
  </div>
)
}
handleChange = (event) => {
  this.setState({currentSearch: event.target.value});
}
};

export default FilterProductTable;
