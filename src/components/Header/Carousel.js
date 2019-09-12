import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from '../../../node_modules/reactstrap';

const items = [
    {
    src: 'https://apod.nasa.gov/apod/image/1803/OrionMosaic_Lim_960.jpg',
    altText: '2018-03-21',
    caption: 'Camera Orion'
    // .get: https://api.nasa.gov/planetary/apod?api_key=rVirHCdgkXLZlCcTQ0UETIEJeZXpcnqCPucnRdGz&date=2018-03-21
    },
    {
    src: 'https://apod.nasa.gov/apod/image/1806/M24Colombari1024.jpg',
    altText: '2018-06-29',
    caption: 'Messier 24: Sagittarius Star Cloud'
    // .get: https://api.nasa.gov/planetary/apod?api_key=rVirHCdgkXLZlCcTQ0UETIEJeZXpcnqCPucnRdGz&date=2018-06-29
    },
    {
    src: 'https://apod.nasa.gov/apod/image/1809/perseid11aug18-p.gif',
    altText: '2018-09-08',
    caption: 'Real Time Perseid'
    // .get: https://api.nasa.gov/planetary/apod?api_key=rVirHCdgkXLZlCcTQ0UETIEJeZXpcnqCPucnRdGz&date=2018-09-08
    }
];

class Example extends Component {
    constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    }

    onExiting() {
    this.animating = true;
    }

    onExited() {
    this.animating = false;
    }

    next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
    }

    previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
    }

    render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
        return (
        <CarouselItem
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={item.src}
        >
            <img src={item.src} alt={item.altText} />
            <CarouselCaption captionText={item.altText} captionHeader={item.caption} />
        </CarouselItem>
        );
    });

    return (
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


export default Example;