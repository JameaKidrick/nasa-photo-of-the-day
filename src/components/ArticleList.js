import React, { useState, useEffect } from 'react';
import axios from '../../node_modules/axios'
import ArticleCards from './ArticleCards'

export default function ArticleList() {
    // creating useState
    const fullDate = new Date();
    const day = fullDate.getDate();
    const month = fullDate.getMonth() + 1;
    const year = fullDate.getFullYear();
    const today = year + '-' + month + '-' + day;

    const [apod, setApod] = useState([]);
    const [date, setDate] = useState(`${today}`);
    
    console.log('Today',today);


    const x = Math.floor((Math.random())*11) + 1;
    console.log(x <= 12);
    console.log('Month', x);
    let num = 30;
    if(x === 2){
        num = 28
    }else if(x === 4 || 6 || 9 || 11){
        num = 30
    }
    const y = Math.floor((Math.random())*num) + 1;
    console.log(y <= 31);
    console.log('Day', y);
    
    const z = 2019;
    console.log('Year', z);

    const newDate = z + '-' + x + '-' + y;
    console.log('Date', newDate)
    

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
            <h1>ArticleList</h1>
            <div className='article'>
                {apod.map((item, index) => {
                    return (
                        <ArticleCards 
                        key={index}
                        title={item.title}
                        date={item.date}
                        url={item.url}
                        explanation={item.explanation}
                        copyright={item.copyright}/>
                    )
                })}
            </div>
            <div className='randomArticle'>
                <button className='dateRandom' onClick={() => setDate(newDate)}>
                    Random
                </button>
            </div>
        </div>
    )
}