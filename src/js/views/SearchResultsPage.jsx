import React from 'react';
import { Link } from 'react-router-dom';
import {ProductItem} from '../components/ProductItem';
import {SearchResults} from '../components/SearchResults';

export class SearchResultsPage extends React.Component{
    
constructor () {
    super ()
        this.state = {
      labels: [{
            url_image_product:'https://i.imgur.com/TqtTOPa.jpg',
            name_product:'Python Shirt',
            name_brand:'Devshui Tech',
            product_status:'In Stock',
            description_product:'',
            price_product:'$14.99',
            quantity_products_stock:'',
            product_tags:''
      }]
    };
}
    
    render(){
        const productsAsHTMLElements = this.state.labels.map((product, i) => {
            return (<SearchResults key={i} data={product} />);
      }
    );
    
        return(
                <div className='container-fluid'>
                {productsAsHTMLElements}
                </div>
            );
    }
    
}