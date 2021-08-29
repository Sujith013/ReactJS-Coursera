import React,{Component} from 'react';
import {Media,Card,CardBody,CardTitle,CardText,CardImg,Breadcrumb,BreadcrumbItem,Button,
        Modal,ModalBody,ModalHeader,Label,Col,Row} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Control,LocalForm,Errors} from 'react-redux-form';

const required=(val)=> val&& val.length;
const maxLength=(len)=>(val)=>!(val)||(val.length<=len);
const minLength=(len)=>(val)=>!(val)||(val.length>=len);

class CommentForm extends Component{

  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);

    this.state={
      isModalOpen:false,
    }
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleSubmit(values){
    this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    this.toggleModal();
}

  render(){
    return(
      <div>
      <Button onClick={this.toggleModal} className="btn-secondary"><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>{' '}
       <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}  fade={false}>
         <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
         <ModalBody>
         <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
         <Row>
         <Label htmlFor="Rating" md={2}>Rating</Label>
         <Col md={{size:3, offset:1}}>
                           <Control.select model=".rating" className="form-control" name="Rating" >
                               <option></option>
                               <option>1</option>
                               <option>2</option>
                               <option>3</option>
                               <option>4</option>
                               <option>5</option>
                               <option>6</option>
                           </Control.select> 
                        </Col>
                     </Row>
                     <br/>
         <Row className="form-group">
              <Label htmlFor="firstname" md={2}>Firstname</Label>
            <Col md={10}>
              <Control.text  model=".name" className="form-control" id="firstname" name="firstname" 
              placeholder="firstname"  validators={{required,minLength:minLength(3),maxLength:maxLength(15)}} 
                             />
              <Errors className="text-danger" model="name" show="touched" 
                messages={{
                required:'Required',
                minLength:'Must be greater than 2 characters',
                maxLength:'Less than 15 characters'
                }} />
            </Col>
          </Row>
          <Row className="form-group">
                         <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                         <Col md={10}>
                             <Control.textarea model=".message" id="feedback" name="feedback" 
                             placeholder="feedback" rows="6" className="form-control" 
                             />
                         </Col>
                     </Row>
                     <Row className="form-group">
                         <Col md={{size:10, offset:2}}>
                           <Button type="submit" color="primary">Submit</Button>
                         </Col>
                     </Row>
         </LocalForm>
         </ModalBody>
       </Modal>
       </div>
    );
  }
}

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

function DishDetail({dish,comments,addComment}){

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
      <br/>
      <div>
      <CommentForm addComment={addComment} dishId={dish.id} />
      </div>
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