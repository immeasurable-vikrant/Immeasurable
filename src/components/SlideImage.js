import React, { Component } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators,CarouselCaption } from 'reactstrap';


const items = [
    {
        src: "assets/images/conqueringthemind.jpg",
        altText: 'Slide 1',
        caption : 'Slide 1'
    },

    {
        src: "assets/images/conqueringthemind.jpg",
        altText: 'Slide 2',
        caption : 'Slide 2'
    },

    {
        src: "assets/images/conqueringthemind.jpg",
        altText: 'Slide 2',
        caption : 'Slide 2'
    },
];


class SlideImage extends Component {
    constructor(props) {
        super(props); 
     
     
    }


    render() {

        const { activeIndex } = this.props;

        const slides = items.map((item) => {
            return(
                <CarouselItem
                onExiting={this.onExisting}
                onExisted={this.onExisted}
                key ={item.src}
                >
                <img src= {item.src} alt={item.altText} />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
                </CarouselItem>
            );
        });

        return(
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
                >
                   <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />         

                </Carousel>
        );
    }

}

export default SlideImage;






