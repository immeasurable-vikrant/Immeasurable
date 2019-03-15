import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderQuestionItem({ dish,onClick}) {
        
    return( 
        <Card onClick= { () => onClick(dish.id)} >
            <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                     <CardTitle >{dish.name}</CardTitle>
             </CardImgOverlay>
        </Card>
    );
}

    const Question = (props) => {
        
        const question = props.dishes.map(dish => {
            return (
                <div key={dish.id} className='col-12 col-md-5 m-1'>
                <RenderQuestionItem dish= {dish} onClick= {props.onClick} />
                   
                </div>
            );
        });
        return (
            <div className='container'>
                <div className='row'>
                    {question}
                </div>
            </div>
        );

          
    }
        
export default Question; 