import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Carousel from '../Header/Carousel';
import PicOfDay from '../Article/PicOfDay';
import styled from '../../../node_modules/styled-components';

const RandomBtn = styled.button`
    border: none;
    margin: 20px 0;
    border-radius: 5px;
    padding: 8px;
    background: rgb(108,117,125);
    color: white;
`

export default function ArticleList() {
    
    // CREATING NON-STATIC DATES
    const 
    fullDate = new Date(),
    day = fullDate.getDate(),
    month = fullDate.getMonth() + 1,
    year = fullDate.getFullYear(),
    today = year + '-' + month + '-' + day;

    // CREATING USESTATE
    const 
    [apod, setApod] = useState([]),
    [date, setDate] = useState(`${today}`);
    
    // CREATING MONTH RANDOMIZER
    const mm = Math.floor((Math.random())*11) + 1;
    
    // CREATING DAY RANDOMIZER BASED ON MONTH
    let num = 30;
    if(mm === 2){
        num = 28
    }else if(mm === 4 || 6 || 9 || 11){
        num = 30
    }
    const dd = Math.floor((Math.random())*num) + 1;
    
    // SETTING YEAR TO 2018
    const yyyy = 2018;
    
    // CREATING FULL DATE FORMAT
    const newDate = yyyy + '-' + mm + '-' + dd;

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=rVirHCdgkXLZlCcTQ0UETIEJeZXpcnqCPucnRdGz&date=${date}`)
        .then(response => {
            console.log(response)
            const apod = response.data;
            setApod([apod]);
        })
        .catch(error => {
            console.log('PepeHands', error);
        });
    }, [date])

    return(
        
        <div className='container'>
            <div className='randomArticle'>
                <RandomBtn style={{outline:'none'}} className='dateRandom' onClick={() => setDate(newDate)}>
                    Random APOD
                </RandomBtn>
            </div>
            <div className='article'>
                {apod.map((item, index) => {
                    return (
                        <>
                            {/* <Carousel/> */}

                            <PicOfDay
                            key={index}
                            title={item.title}
                            date={item.date}
                            url={item.url}
                            explanation={item.explanation}
                            copyright={item.copyright}/>
                        </>
                    )
                })}
            </div>
        </div>
    )
}