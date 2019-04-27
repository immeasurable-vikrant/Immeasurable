import React from 'react'
import { Redirect } from 'react-router-dom'
import { Card, CardBody, CardImg, CardText, CardTitle, Button, Jumbotron } from 'reactstrap';


class Wisdom  extends React.Component {
  state = {
    redirect: false
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/blogs' />
    }
  }




  
  render () {

    const articleList = this.props.articles.map((article) => {
        return (
        <div key={article.id} className="col-12 col-md-4 col-article" >
          <Card onClick={this.setRedirect}>
           <CardImg top width="100%" src={article.image} alt={article.name} />
               <CardBody>
                  <CardTitle>{article.name}</CardTitle>
                       
                          <CardText>{article.description}</CardText>
                              <Button onClick={this.setRedirect}>Redirect</Button>
               </CardBody>
               
          </Card>
        
        </div>
      );
   })

   
  return(
     
      <div className="conatiner">
      <Jumbotron className="jumbotron-wisdom"    >
                   <div className="container">    
                       <div className="row row-header">
                           <div className="col-12 col-sm-10">
                          <h1>Immeasurable</h1>
                           <p><h3>As there is a technology to create external wellbeing, there is a whole dimension of science and technology to create inner wellbeing.</h3></p>
                               <Button className="btn-sub">Subscribe Now</Button>
                           </div>
                       </div>
                       </div>
                   </Jumbotron>
          <div className="row">
            <div className="col-12 col-md-10 offset-1">
              <h2 className="text-center ideas"><b>"Ideas and Perspective you won't find anywhere else."</b></h2>
            </div>
            
              {articleList}
              {this.renderRedirect()}
        </div>
   </div>
  );



   
  }
}
export default Wisdom;

