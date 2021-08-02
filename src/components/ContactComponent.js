import React,{Component} from 'react';
import {Breadcrumb,BreadcrumbItem,Button,Form,FormGroup,Label,Input,Col,
FormFeedback} from 'reactstrap';
import {Link} from 'react-router-dom';

class Contact extends Component {
    
    constructor(props){
        super(props);

        this.state={
            firstname:'',
            lastname:'',
            email:'',
            telnum:'',
            feedback:'',
            agree:false,
            ContactType:'Tel.',
            touched:{
                firstname:false,
                lastname:false,
                email:false,
                telnum:false
            }    
        }

        this.handleBlur=this.handleBlur.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleInputchange=this.handleInputchange.bind(this);
    }

    handleInputchange(event){

        const target=event.target;
        const value=target.type==='checkbox' ? target.checked:target.value;
        const name=target.name;

        this.setState({
            [name]: value
          });
       
    }

    handleSubmit(event){
         console.log('current state is :'+JSON.stringify(this.state));
         alert('current state is :'+JSON.stringify(this.state));
         event.preventDefault();
    }
    
    handleBlur=(field)=>(evt)=>{

        this.setState({
            touched:{...this.state.touched,[field]:true}
          });
    }

    validate(firstname,lastname,telnum,email){
        const errors={
            firstname:'',
            lastname:'',
            email:'',
            telnum:'',
        };

        if(this.state.touched.firstname&&firstname.length<3)
        errors.firstname='Firstname should be of >=3 characters';

        if(this.state.touched.firstname&&firstname.length>10)
        errors.firstname='Firstname should be of <=10 characters';

        if(this.state.touched.lastname&&lastname.length<3)
        errors.lastname='lastname should be of >=3 characters';

        if(this.state.touched.lastname&&lastname.length>10)
        errors.lastname='lastname should be of <=10 characters';

        const reg=/^\d+$/;

        if(this.state.touched.telnum&&!reg.test(telnum))
        errors.telnum='Tel no. should contain only numbers';

        if(this.state.touched.telnum&&telnum.length!==10)
        errors.telnum='Tel no. should contain exactly 10 digits';

        if(this.state.touched.email&&email.split('').filter(x=>x==='@').length!==1)
        errors.email='Email should contain an \'@\' sign';

        return errors;
    }
    
    render(){
        const errors=this.validate(this.state.firstname,this.state.lastname,this.state.telnum,this.state.email)
    return(
        <div className="container">
            <Breadcrumb>
          <BreadcrumbItem><Link to="/home">HOME</Link></BreadcrumbItem>
          <BreadcrumbItem>Contact US</BreadcrumbItem> 
        </Breadcrumb>
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info" href="skype.com"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
            <div className="row row-content">
             <div className="col-12">
                <h4>Send Us your feedback</h4>
             </div>
             <div>
                 <Form onSubmit={this.handleSubmit}>
                     <FormGroup row>
                         <Label htmlFor="firstname" md={2}>Firstname</Label>
                         <Col md={10}>
                             <Input type="text" id="firstname" name="firstname" 
                             placeholder="firstname"  value={this.state.firstname}
                                 onChange={this.handleInputchange}
                                 onBlur={this.handleBlur('firstname')}
                                 valid={errors.firstname===''}
                             invalid={errors.firstname!==''}
                             />
                             <FormFeedback>{errors.firstname}</FormFeedback>
                         </Col>
                     </FormGroup>
                     <FormGroup row>
                         <Label htmlFor="lastname" md={2}>Lastname</Label>
                         <Col md={10}>
                             <Input type="text" id="lastname" name="lastname" 
                             placeholder="lastname"  value={this.state.lastname}
                             onChange={this.handleInputchange}
                             onBlur={this.handleBlur('lastname')}
                             valid={errors.lastname===''}
                             invalid={errors.lastname!==''}
                             />
                             <FormFeedback>{errors.lastname}</FormFeedback>
                         </Col>
                     </FormGroup>
                     <FormGroup row>
                         <Label htmlFor="telnum" md={2}>Telephone Number</Label>
                         <Col md={10}>
                             <Input type="tel" id="telnum" name="telnum" 
                             placeholder="tel.no"  value={this.state.telnum}
                             onChange={this.handleInputchange}
                             onBlur={this.handleBlur('telnum')}
                             valid={errors.telnum===''}
                             invalid={errors.telnum!==''}
                             />
                             <FormFeedback>{errors.telnum}</FormFeedback>
                         </Col>
                     </FormGroup>
                     <FormGroup row>
                         <Label htmlFor="email" md={2}>email</Label>
                         <Col md={10}>
                             <Input type="email" id="email" name="email" 
                             placeholder="email"  value={this.state.email}
                             onChange={this.handleInputchange}
                             onBlur={this.handleBlur('email')}
                             valid={errors.email===''}
                             invalid={errors.email!==''}
                             />
                             <FormFeedback>{errors.email}</FormFeedback>
                         </Col>
                     </FormGroup>
                     <FormGroup row>
                        <Col md={{size:6, offset:2}}>
                           <FormGroup check>
                               <Label check>
                                   <Input type="checkbox" name="agree" checked={this.state.agree} 
                                       onChange={this.handleInputchange}
                                   />{''}
                                <strong>May we Contact You?</strong>
                               </Label>
                           </FormGroup>
                        </Col>
                        <Col md={{size:3, offset:1}}>
                           <Input type="select" name="ContactType" 
                           value={this.state.ContactType} onChange={this.handleInputchange}>
                               <option>Tel.</option>
                               <option>Email</option>
                           </Input> 
                        </Col>
                     </FormGroup>
                     <FormGroup row>
                         <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                         <Col md={10}>
                             <Input type="textarea" id="feedback" name="feedback" 
                             placeholder="feedback"  value={this.state.feedback}
                                 rows="12" onChange={this.handleInputchange}
                             />
                         </Col>
                     </FormGroup>
                     <FormGroup row>
                         <Col md={{size:10, offset:2}}>
                           <Button type="submit" color="primary">Send Feedback</Button>
                         </Col>
                     </FormGroup>
                 </Form>
             </div>
            </div>
        </div>
    );
    }
}

export default Contact;