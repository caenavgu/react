import React from 'react';


export class Productscard extends React.Component{
    
    render(){
        return(
<div className="card-deck">
  <div className="card">
    <img className="card-img-top" src="/src/img/homeProducts/product-shirt-panda.png" alt="Card image cap" />
    <div className="card-block">
      <h4 className="card-title">HOT AF PANDA SHIRT 1</h4>
      <p className="card-text">Panda, panda: you're ready for anything when you wear this limited edition, super awesome tee.</p>
      <p className="card-text"><small className="text-muted">Natural swag.</small></p>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="/src/img/homeProducts/product-shirt-bsod.png" alt="Card image cap" />
    <div className="card-block">
      <h4 className="card-title">Blue Shirt of Death</h4>
      <p className="card-text">This shirt is only available in blue.</p>
      <p className="card-text"><small className="text-muted">Limited run!</small></p>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="/src/img/homeProducts/product-shirt-password.png" alt="Card image cap" />
    <div className="card-block">
      <h4 className="card-title">Your Mom's Password...</h4>
      <p className="card-text">No dev shirt before or since has started so many fights. Great way to get the night started!</p>
      <p className="card-text"><small className="text-muted">Come at me, dev.</small></p>
    </div>
  </div>
</div>
                );
                }
            }