// import React from 'react'
// import { Redirect } from 'react-router-dom'
// import { Card, CardBody, CardImg, CardText, CardTitle, Button, Jumbotron } from 'reactstrap';
// import Blog from './BlogComponent';

// class Wisdom  extends React.Component {
//   state = {
//     redirect: false,
//     selectedCard : null
//   }
//   setRedirect = () => {
//     this.setState({
//       redirect: true
//     })
//   }
//   renderRedirect = () => {
//     if (this.state.redirect) {
//       return <Redirect to='/blogs' />
//     }
//   }

//   onSelectedCard(article) {
//     this.setState({
//         selectedCard : article
//     })
//   }




  
//   render () {

//     const articleList = this.props.articles.map((article) => {
//         return (
//         <div key={article.id} className="col-12 col-md-4 col-article" >
//           <Card onClick={this.setRedirect}>
//            <CardImg top width="100%" src={article.image} alt={article.name} />
//                <CardBody>
//                   <CardTitle>{article.name}</CardTitle>
                       
//                           <CardText>{article.description}</CardText>
//                               <Button onClick= {() => this.onSelectedCard(article) }>Redirect</Button>
//                </CardBody>
               
//           </Card>
        
//         </div>
//       );
//    })

   
//   return(
     
//       <div className="conatiner">
//       <Jumbotron className="jumbotron-wisdom"    >
//                    <div className="container">    
//                        <div className="row row-header">
//                            <div className="col-12 col-sm-10">
//                           <h1>Immeasurable</h1>
//                            <p><h3>As there is a technology to create external wellbeing, there is a whole dimension of science and technology to create inner wellbeing.</h3></p>
//                                <Button className="btn-sub">Subscribe Now</Button>
//                            </div>
//                        </div>
//                        </div>
//                    </Jumbotron>
//           <div className="row">
//             <div className="col-12 col-md-10 offset-1">
//               <h2 className="text-center ideas"><b>"Ideas and Perspective you won't find anywhere else."</b></h2>
//             </div>
//             {this.renderRedirect()}
           
//               {articleList}
            
//         </div>
//       <Blog article={this.state.selectedCard} ></Blog>
//    </div>
//   );



   
//   }
// }
// export default Wisdom;


import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import Blog from './BlogComponent'

class Wisdom extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedArticle: null
        }
    }

    onSelectedArticle(article) {
        this.setState({
            selectedArticle: article
        })
    }

    render() {
        const menu = this.props.articles.map(article => {
            return (
                <div key={article.id} className='col-12 col-md-5 m-1'>
                    <Card onClick={() => this.onSelectedArticle(article)} >
                        <CardImg width="100%" src={article.image} alt={article.name} />
                        <CardImgOverlay>
                            <CardTitle >{article.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return (
            <div className='container'>
                <div className='row'>
                    {menu}
                </div>
                <Blog article ={this.state.selectedArticle}></Blog>
            </div>
        );
    }
}

export default Wisdom; 