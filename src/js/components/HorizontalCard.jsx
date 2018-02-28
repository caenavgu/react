import React from 'react';

export class HorizontalCard extends React.Component{
    
    render(){
        return(
  <section>
  <div className="container py-3">
    <div className="card">
      <div className="row ">
        <div className="col-md-4">
            <img src="/src/img/homeProducts/devshui-help.jpg" className="w-100"/>
          </div>
          <div className="col-md-8 px-3">
            <div className="card-block px-3">
              <h4 className="card-title">Dear Miami: WE LOVE YOU</h4>
              <p className="card-text">Did we come off too strong? Hopefully not- each order that you make contributes to the lesser priveleged to learn the skills they need to help contribute to Miami's diverse, flourishing tech landscape.</p>
              <p className="card-text">If you know someone that has the drive to learn, you can nominate them to receive a partial or full scholarship to a certified local coding academy.</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>

        </div>
      </div>
    </div>
            </section>

             );
    }
    
}