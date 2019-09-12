// COMPONENT MADE DAY 1; COMPONENT REPLACED WITH PICOFTHEDAY.JS

import React from 'react';

const ArticleCards = props => {
    return(
        <div className='article-card' key={props.index}>
            <h2>{props.title}</h2>
            <p className='date'>Date: {props.date}</p>
            <img className='apod-image' src={props.url} alt='galaxy'></img>
            <p className='article-desc'>{props.explanation}</p>
            <p className='article-copyright'>Copyright: {props.copyright}</p>
        </div>
    )

}

export default ArticleCards;

// COMPONENT MADE DAY 1; COMPONENT REPLACED WITH PICOFTHEDAY.JS