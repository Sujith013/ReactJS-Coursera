import React from 'react';
import {Media,Card,CardBody,CardTitle,CardText,CardImg,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

function Rendercmts({comments}){

  const comts=comments.map((comments)=>{

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

  return (
 
    <div>{comts}</div>
  
  );

}

function DishDetail({dish,comments}){

  if(dish!=null)
     return(
    <div className="container">
    <div className="row">
    <Breadcrumb>
          <BreadcrumbItem><Link to="/home">HOME</Link></BreadcrumbItem>
          <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
          <BreadcrumbItem active>{dish.name}</BreadcrumbItem> 
        </Breadcrumb>
    </div>
    <Media>
    <Media className="col-md-5 m-1">
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
        <CardTitle >{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText> 
        </CardBody>
      </Card>
      </Media>
      <Media className="col-md-5 m-1">
      <Media body>
      <h4>Comments</h4>
      <Rendercmts comments={comments} />
      </Media>
      </Media>
      </Media>
      </div>
      );
  else
   return(
     <div></div>
   );    
  }

export default DishDetail