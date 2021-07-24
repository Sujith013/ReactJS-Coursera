import React from 'react';
import {Media,Card,CardBody,CardTitle,CardText,CardImg} from 'reactstrap';

function DishDetail(props){

    const comments=props.SelectedDish.comments.map((comments)=>{

        return (
  
          <div key={comments.id}>
            
            <Media>
                <Media body>
                <h4>{comments.comment}</h4>
                <h4>--{comments.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}</h4>
            </Media>
            </Media>

          </div>
        );
      });

     return(
    <div>
    <Media>
    <Media className="col-md-5 m-1">
      <Card>
        <CardImg width="100%" src={props.SelectedDish.image} alt={props.SelectedDish.name} />
        <CardBody>
        <CardTitle >{props.SelectedDish.name}</CardTitle>
        <CardText>{props.SelectedDish.description}</CardText> 
        </CardBody>
      </Card>
      </Media>
      <Media className="col-md-5 m-1">
      <Media body>
      <h4>Comments</h4>
      <h4>{comments}</h4>
      </Media>
      </Media>
      </Media>
      </div>
      );
    
  }

export default DishDetail