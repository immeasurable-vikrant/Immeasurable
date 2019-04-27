import React, { Component } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators,CarouselCaption } from 'reactstrap';


const items = [
    {
        src: "assets/images/conqueringthemind.jpg",
        altText: 'Slide 1',
        caption : 'Immeasurable is one of the best website I have ever used, it helps me becoming a good human being'
    },

    {
        src: "assets/images/conqueringthemind.jpg",
        altText: 'Slide 2',
        caption : 'Immeasurable is one of the best website I have ever used, it helps me becoming a good human being'
    }
];


class SlideImage extends Component {
    constructor(props) {
        super(props); 
     
     this.state = { activeIndex : 0 };
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
        this.animating = false;
    }

    next() {
        if(this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex});

    }

    previous() {
        if(this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex});
        
    }

    goToIndex(newIndex) {
        if(this.animating) return;
        this.setState({ activeIndex: newIndex});
        
    }


    render() {

        const { activeIndex } = this.state;

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
            <div className="container-fluid slide">
            
            <Carousel className =" col-12 col-md-10 "
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
                >
                   <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />         

                </Carousel>
                </div>
        );
    }

}

export default SlideImage;






