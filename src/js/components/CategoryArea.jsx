import React from 'react';

export class CategoryArea extends React.Component{
    
    render(){
        
        return(
<div className='container'>
  <nav className="nav nav-tabs" id="myTab" role="tablist">
    <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">New Stuff </a>
    <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">On Sale </a>
    <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Gifts Under 50 </a>
  </nav>
  
  <div className="tab-content" id="nav-tabContent">
  
  <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
    <div className='row'>
      <div className='col-2 card' id='productSmall' style={{padding: 0}}>
        <img className="card-img-top" src="http://lorempixel.com/150/150/technics/" alt="Card image cap"/>
        <div className="card-body">
          <p className="card-text">productName.</p>
          <p className="card-text">productPrice</p>
        </div>
      </div>
      <div className='col-2 card' id='productSmall' style={{padding: 0}}>
        <img className="card-img-top" src="http://lorempixel.com/150/150/technics/" alt="Card image cap"/>
        <div className="card-body">
          <p className="card-text">productName.</p>
          <p className="card-text">productPrice</p>
        </div>
      </div>
      <div className='col-2 card' id='productSmall' style={{padding: 0}}>
        <img className="card-img-top" src="http://lorempixel.com/150/150/technics/" alt="Card image cap"/>
        <div className="card-body">
          <p className="card-text">productName.</p>
          <p className="card-text">productPrice</p>
        </div>
      </div>
      <div className='col-2 card' id='productSmall' style={{padding: 0}}>
        <img className="card-img-top" src="http://lorempixel.com/150/150/technics/" alt="Card image cap"/>
        <div className="card-body">
          <p className="card-text">productName.</p>
          <p className="card-text">productPrice</p>
        </div>
      </div>
      <div className='col-2 card' id='productSmall' style={{padding: 0}}>
        <img className="card-img-top" src="http://lorempixel.com/150/150/technics/" alt="Card image cap"/>
        <div className="card-body">
          <p className="card-text">productName.</p>
          <p className="card-text">productPrice</p>
        </div>
      </div>
      <div className='col-2 card' id='productSmall' style={{padding: 0}}>
        <img className="card-img-top" src="http://lorempixel.com/150/150/technics/" alt="Card image cap"/>
        <div className="card-body">
          <p className="card-text">productName.</p>
          <p className="card-text">productPrice</p>
        </div>
      </div>
   
      <div className='row'>
        <button type="button" className="btn btn-warning float-right">Warning</button>
      </div>
    </div>
  </div>

  
  <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">..2.
  <button type="button" className="btn btn-warning float-right">Warning</button>
  </div>
  <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">..3.
  <button type="button" className="btn btn-warning float-right">Warning</button>
  </div>
  
  </div>
</div>

            );  
    }
    
}