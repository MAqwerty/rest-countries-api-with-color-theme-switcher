import React from 'react';
import './CountryDetails.css';
import BackSVG from "./../../assets/svg/arrow-undo-circle-outline.svg"
import { Link,useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function CountryDetails() {
  const axios = require('axios').default;
  
  const[Response,setResponse]=useState("")
  const[loading,setloading]=useState(true)

  let { CountryName } = useParams();

  useEffect(async()=>{
      try {    
        const GETresponse = await axios.get(`https://restcountries.com/v3.1/alpha/${CountryName}`);
        setResponse(GETresponse.data)
      }catch (error) {
        console.error(error);
      }
      setloading(false)
  },[CountryName]);

  return (
    <> 
      <main className='CountryDetails-Main'>
        <div className='container-Back-BTN'>
          <Link className='Back-BTN' to="/"><img src={BackSVG} alt="BackSVG" className='BackSVG'/>Back</Link>
        </div>
      
        {loading?(
          <article className='container-Country-Details'>
            <div className='container-IMG-Country' >
             <Skeleton duration={1} width={550} height={350} baseColor="#ebebeb" highlightColor="#a3a3a3" />
            </div>
           <article className='container-TEXT-Details'>
             <Skeleton duration={1} width={500} height={25} baseColor="#ebebeb" highlightColor="#a3a3a3" />
             <article className='TEXTs-Details'>
               <div>
                 <p><Skeleton duration={1} width={250} height={15} baseColor="#ebebeb" highlightColor="#a3a3a3" count={5} /></p>
               </div>
               <div>
                 <p><Skeleton duration={1} width={250} height={15} baseColor="#ebebeb" highlightColor="#a3a3a3" count={3} /></p>
               </div>
             </article>
             <article className='container-Border-Countries'>
               <p><Skeleton duration={1} width={300} height={20} baseColor="#ebebeb" highlightColor="#a3a3a3" /></p>   
             </article>
           </article>
         </article>)
         :(
           Response.map((item, index) => (
            <article className='container-Country-Details' key={index}>

              <div className='container-IMG-Country' >
                <img src={item.flags.png} alt={item.name.common} className="IMG-Country" />
              </div>

            <article className='container-TEXT-Details'>

                <p className='Title-name-Details'>{item.name.common}</p>

              <article className='TEXTs-Details'>
                <div>
                  <p><b>Native Name :</b> {item.name.nativeName[Object.keys(item.name.nativeName)[0]].official}</p>
                  <p><b>Population :</b> {item.population}</p>
                  <p><b>Region :</b> {item.region}</p>
                  <p><b>Sub Region :</b> {item.subregion}</p>
                  <p><b>Capital :</b> {item.capital}</p>
                </div>
                <div>
                  <p><b>Top Level Domain :</b> {item.tld}</p>
                  <p><b>Currencies :</b> {item.currencies[Object.keys(item.currencies)[0]].name}</p>
                  <p><b>Languages :</b> {item.languages[Object.keys(item.languages)[0]]}</p>
                </div>
              </article>

              <article className='container-Border-Countries'>
                <p><b>Border Countries :</b></p>
                <div className='container-BTN-Countries'>
                  {
                    item.borders ? item.borders.map((item, index) => (
                      <Link to={`/${item.toLowerCase()}`} key={index} className="BTNs-borders">{item}</Link>
                    )) : '-'
                  }
                </div>       
              </article>
            </article>
          </article>
          )))
          }
      </main>
    </>
  );
}

export default CountryDetails;

