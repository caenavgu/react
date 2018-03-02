/*
*   Modules dependencies
*/
import React from 'react';
import {ProductItem} from './ProductItem';

export class CategoryArea extends React.Component{
  
  constructor() {
    super();
    
    this.state = {
      labels: ['Shirts', 'Coffee Mugs', 'Funny']
    };
  }
  
  render(){
    
    const categoryAreaLabels= this.state.labels.map((label, indexLabels) => {
      // expression goes here:
      return(
        <a  key={indexLabels} className= {(indexLabels==0) ? "nav-item nav-link text-secondary active":'nav-item nav-link text-secondary'} id={label} data-toggle="tab" href={'#'+indexLabels} role="tab" aria-controls={indexLabels} aria-selected="true">{label}</a>
      );
    });
    
    const categoryAreaDiv= this.state.labels.map((label, indexDiv) => {
      // expression goes here:
      return( 
        <div key={indexDiv} className={(indexDiv==0) ? "tab-pane fade show active":'tab-pane fade show'} id={indexDiv} role="tabpanel" aria-labelledby={indexDiv}>
          <div className="container">
            <div className="row"> 
              {this.props.data.map((product, i) => {
              // expression goes here:
                {
                    if(indexDiv==0 && product.product_tags.includes(2)){
                      return(
                      <div className='col-md-2'>
                        <ProductItem key={i} data={product} align={"left"}/>
                      </div>
                      );
                    } 
                    else if(indexDiv==1 &&product.product_tags.includes(3)){
                      return(
                      <div className='col-md-2'>
                        <ProductItem key={i} data={product} align={"left"}/>
                      </div>
                      );
                    }
                    else if(indexDiv==2 &&product.product_tags.includes(5)){
                      return(
                      <div className='col-md-2'>
                        <ProductItem key={i} data={product} align={"left"}/>
                      </div>
                      );
                    }
               } 
              })
              }
            </div>
          </div>
        </div>
      );
    });
    
    return(
      <div className='container'>
        <nav>
          <div className="nav nav-tabs text-uppercase" id="nav-tab" role="tablist">
            {categoryAreaLabels}
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          {categoryAreaDiv}
        </div>
      </div>
    );  
  }
}