import React from 'react';
import './Home.css';
import searchSVG from "./../../assets/svg/search-outline.svg"
import Top from "./../../assets/svg/chevron-up-outline.svg"
import Card from '../Cards/Card';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Home () {
  const axios = require('axios').default;
  
  const[Country,setCountry]=useState("")
  const[Region,setRegion]=useState("")

  const[Response,setResponse]=useState("")
  const[Result,setResult]=useState("")

  const[loading,setloading]=useState(true)
  const[GETDATA,setGETDATA]=useState(true)

  useEffect(async()=>{
    if(GETDATA){
      try {    
        const GETresponse = await axios.get('https://restcountries.com/v3.1/all');
        setResponse(GETresponse.data)

      }catch (error) {
        console.error(error);
      }
      setGETDATA(false)
    }
});

// .......................filterS.........................//
useEffect(() => {
  if(Response.length>0){

    if(Region == "All"){setRegion(false)}

      let FilterResult = Response.filter(
      item =>
      (!Country || item.name.common.toLowerCase().includes(Country.toLowerCase())) &&
      (!Region || item.region === Region)
    );
  
    setResult(FilterResult,setloading(false));
  }}, [Response,Country,Region])

// .....................scrollToTop.....................//
  let rootElement = document.documentElement
  function scrollToTop() {
    // Scroll to top logic
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <> 
      <main className='Home-main'>
          <article className='filters'>
            {loading?(<div className='BOX-Skeleton'><Skeleton width={350} height={50} duration={1} baseColor="#ebebeb" highlightColor="#a3a3a3" /></div>):(
              <>
                <div className='BOX-search'>
                  <img className='searchSVG' src={searchSVG} alt="searchSVG" />
                  <input className='input-Country' type="text" value={Country} onChange={(e) => setCountry(e.target.value)} placeholder="Search for a country..."/>
                </div>
              </>
            )}
          
            <div className='BOX-region'>
              {loading?(<div className='BOX-Skeleton'><Skeleton width={250} height={50} duration={1} baseColor="#ebebeb" highlightColor="#a3a3a3" /></div>):(
              <>
                <p>Filters By Region :</p>
                <select name="" id="" className='input-region' value={Region} onChange={(e)=>{setRegion(e.target.value)}} >
                  <option className='option-item' value="All">All</option>
                  <option className='option-item' value="Africa">Africa</option>
                  <option className='option-item' value="Americas">Americas</option>
                  <option className='option-item' value="Asia">Asia</option>
                  <option className='option-item' value="Europe">Europe</option>
                  <option className='option-item' value="Oceania">Oceania</option>
                </select>
              </>
              )}
            </div>
          </article>

          <article className='container-Countries'>
            {(loading)?(
            <div className='Container-Skeleton'>
              <div className='Card-Skeleton'><Skeleton className='Skeleton' duration={1} width={260} height={150} baseColor="#ebebeb" highlightColor="#a3a3a3" /><p><Skeleton baseColor="#ebebeb" highlightColor="#a3a3a3" className='Skeleton' /></p><Skeleton count={3} className='Skeleton' width={100} height={10} baseColor="#ebebeb" highlightColor="#a3a3a3" /></div>
              <div className='Card-Skeleton'><Skeleton className='Skeleton' duration={1} width={260} height={150} baseColor="#ebebeb" highlightColor="#a3a3a3" /><p><Skeleton baseColor="#ebebeb" highlightColor="#a3a3a3" className='Skeleton' /></p><Skeleton count={3} className='Skeleton' width={100} height={10} baseColor="#ebebeb" highlightColor="#a3a3a3" /></div>
              <div className='Card-Skeleton'><Skeleton className='Skeleton' duration={1} width={260} height={150} baseColor="#ebebeb" highlightColor="#a3a3a3" /><p><Skeleton baseColor="#ebebeb" highlightColor="#a3a3a3" className='Skeleton' /></p><Skeleton count={3} className='Skeleton' width={100} height={10} baseColor="#ebebeb" highlightColor="#a3a3a3" /></div>
              <div className='Card-Skeleton'><Skeleton className='Skeleton' duration={1} width={260} height={150} baseColor="#ebebeb" highlightColor="#a3a3a3" /><p><Skeleton baseColor="#ebebeb" highlightColor="#a3a3a3" className='Skeleton' /></p><Skeleton count={3} className='Skeleton' width={100} height={10} baseColor="#ebebeb" highlightColor="#a3a3a3" /></div>
            </div>
            ):(            
            Result.map((item, index) => {
              return(
                  <Link to={`${item.cca3.toLowerCase()}`} className='LinkS-CountryDetails'  key={index}>
                      <Card
                          img={item.flags.png}
                          title={item.name.common}
                          population={item.population}
                          region={item.region}
                          capital={item.capital}
                      />
                  </Link>
              );
            }))
           }
          </article>
          <button className="scrollToTopBtn" onClick={scrollToTop}><img className='Top-SVG' src={Top} alt=""/>TOP</button>
      </main>
    </>
  );
}

export default Home;

