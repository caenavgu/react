/*
*   Modules dependencies
*/
import React from 'react';

export class Carousel extends React.Component{
  
  constructor() {
    super();
    
    this.state = {
       carouselPoster : [
                  {URL:'/src/img/homeCarousel/shirt-1.png'}, 
                  {URL:'/src/img/homeCarousel/mug-1.png'}, 
                  {URL:'/src/img/homeCarousel/bump-1.png'} 
                  ],
    }
  }
    
  render(){
    
    const carouseIndicatorslAsHTMLElemetns = this.state.carouselPoster.map((cIndexPoster, i) => {
      // expression goes here:
      return( <li key={i} data-target="#carouselExampleIndicators" data-slide-to={i}></li>
      );
    });
    
    const carouselAsHTMLElemetns = this.state.carouselPoster.map((cPoster, index) => {
      // expression goes here:
      return( 
        <div key={index} className="carousel-item">
          <img className="d-block img-fluid" src={cPoster.URL} alt={index} />
        </div>
      );
    });
    
    return(
      <div className="container-fluid">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" size="small">
          <ol className="carousel-indicators">{carouseIndicatorslAsHTMLElemetns}</ol>
          <div className="carousel-inner" role="listbox">{carouselAsHTMLElemetns}</div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      );
  }
    
}