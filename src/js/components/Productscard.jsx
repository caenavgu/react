import React from 'react';


export class Productscard extends React.Component{
    
    render(){
        return(
            <div className="productcard">
              <h2>Fancy Product</h2>
               <img src="https://res.cloudinary.com/teepublic/image/private/s--K79K28BZ--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,h_626/c_crop,g_north_west,h_626,w_470,x_0,y_0/g_north_west,u_upload:v1462829024:production:blanks:a59x1cgomgu5lprfjlmi,x_-395,y_-325/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1446192992/production/designs/135370_1.jpg" class="img-rounded" alt="Cinque Terre" />

               <p>Here's a descriptions of the fancy product</p>

                   <ul>
                        <li>Feature 1</li>
                        <li>Feature 2</li>
                        <li>Feature 3</li>
                        <li>Feature 4</li>
                    </ul>
                    </div>
                );
                }
            }