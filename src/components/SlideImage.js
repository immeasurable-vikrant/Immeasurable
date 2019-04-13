import React, { Component } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators,CarouselCaption } from 'reactstrap';


class SlideImage extends Component {
    constructor(props) {
        super(props); 
       
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExisting = this.onExisting.bind(this);
        this.onExisted = this.onExisted.bind(this);
    }

    onExisting() {
        this.animating = true;
    }

    onExisted() {
        this.animating =false;
    }

    next() {
        if(this.animating) return;
        const nextIndex =this.props.activeIndex === ITEMS.length - 1 ? 0 :this.props.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if(this.animating) return;
        const nextIndex =this.props.activeIndex === 0 ? items.length -1 : this.props.activeIndex -1 ;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if(this.animating) return;
        this.setState({ activeIndex: newIndex});
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






