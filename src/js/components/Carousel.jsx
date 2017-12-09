import React from 'react';

export class Carousel extends React.Component{
    
    render(){
        return(
  
  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" size="small">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner" role="listbox">
    <div className="carousel-item active">
      <img className="d-block img-fluid" src="/src/img/homeCarousel/shirt-1.png" alt="Shirt Sale" />
    </div>
    <div className="carousel-item">
      <img className="d-block img-fluid" src="/src/img/homeCarousel/mug-1.png" alt="World's Best Mug Everrrr" />
    </div>
    <div className="carousel-item">
      <img className="d-block img-fluid" src="/src/img/homeCarousel/bump-1.png" alt="bumper stickers" />
    </div>
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