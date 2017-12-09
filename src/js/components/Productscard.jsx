import React from 'react';


export class Productscard extends React.Component{
    
    render(){
        return(
<div className="card-deck">
  <div className="card">
    <img className="card-img-top" src="/src/img/homeProducts/product-shirt-panda.png" alt="Card image cap" />
    <div className="card-block">
      <h4 className="card-title">HOT AF PANDA SHIRT 1</h4>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="/src/img/homeProducts/product-shirt-panda.png" alt="Card image cap" />
    <div className="card-block">
      <h4 className="card-title">HOT AF PANDA SHIRT 2</h4>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="/src/img/homeProducts/product-shirt-panda.png" alt="Card image cap" />
    <div className="card-block">
      <h4 className="card-title">HOT AF PANDA SHIRT 3</h4>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
                );
                }
            }