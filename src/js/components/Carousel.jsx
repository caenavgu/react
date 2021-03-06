/*
*   Modules dependencies
*/
import React from 'react';

export class Carousel extends React.Component{
  
  constructor() {
    super();
    
    this.state = {
       carouselPoster : [
          {URL:'/src/img/homeCarousel/dev-shui-ambi-banner.png'},
          {URL:'/src/img/homeCarousel/shirt-1.png'},
          {URL:'/src/img/homeCarousel/mug-1.png'}, 
          {URL:'/src/img/homeCarousel/bump-1.png'},
                  ]
    }
  }
    
  render(){
    
    const carouseIndicatorslAsHTMLElemetns = this.state.carouselPoster.map((IndexPoster, i) => {
      // expression goes here:
      return( <li key={i} data-target="#carouselExampleIndicators" data-slide-to={i} className={(i==0) ? "active":''} ></li>
      );
    });
    
    const carouselAsHTMLElemetns = this.state.carouselPoster.map((cPoster, index) => {
      // expression goes here:
      return( 
        <div key={index} className={(index==0) ? "carousel-item active":"carousel-item"}>
          <img className="d-block img-fluid" src={cPoster.URL} alt={index} />
        </div>
      );
    });
    
    return(
      <div className="container-fluid no-gutters p-0">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" size="small">
          <ol className="carousel-indicators">{carouseIndicatorslAsHTMLElemetns}</ol>
          <div className="carousel-inner" role="listbox">{carouselAsHTMLElemetns}</div>
        </div>
      </div>
      );
  }
    
}