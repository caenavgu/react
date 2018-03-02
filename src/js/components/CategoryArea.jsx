/*
*   Modules dependencies
*/
import React from 'react';
import {ProductItem} from './ProductItem';

export class CategoryArea extends React.Component{
  
  constructor() {
    super();
    
    this.state = {
      labels: ['SHIRTS', 'COFFEE MUGS', 'FUNNY']
    };
  }
  
  render(){
    
    const categoryAreaLabels= this.state.labels.map((label, index) => {
      // expression goes here:
      return(
        <a  key={index} className= {(index==0) ? "nav-item nav-link text-secondary active":'nav-item nav-link text-secondary'} id={label} data-toggle="tab" href={index} role="tab" aria-controls={index} aria-selected="true">{label}</a>
      );
    });
    
    const categoryAreaDiv= this.state.labels.map((label, index) => {
      // expression goes here:
      return( 
        <div key={index} className={(index==0) ? "tab-pane fade show active":'tab-pane fade show'} id={label} role="tabpanel" aria-labelledby={index}>
          <div className="container">
            <div className="row">
              {this.props.data.map((product, index) => {
              // expression goes here:
                {
                  if(index < 12){
                    return(
                    <div className='col-md-2'>
                      <ProductItem key={index} data={product} align={"left"}/>
                    </div>
                    );}
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
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
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