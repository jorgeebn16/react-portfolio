import React from "react";
import whatsfordinner from "../images/whats-for-dinner.png";
import starwars from "../images/star-wars-quiz.png";
import myrecipes from "../images/my-foddies-recipes.png";
import wheather from "../images/weather-app.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () =>{

    //Popup options
    
    ///whatsfordinner
    // const openPopupboxwhatsfordinner1 = () =>{
    //     const content = (
    //     <>
    //         <img className="portfolio-image-popupbox" src={whatsfordinner} alt="What's fro Dinner Project..." />
    //         <br></br>
    //         <b>GitHub Repository</b> <a className="hyper-link" onClick={() => window.open("https://github.com/jorgeebn16/whats-for-dinner")}>
    //             https://github.com/jorgeebn16/whats-for-dinner</a>
    //         <br></br>
    //         <b>Deployment URL</b> <a className="hyper-link" onClick={() => window.open("https://jorgeebn16.github.io/whats-for-dinner/")}>
    //             https://jorgeebn16.github.io/whats-for-dinner/</a>
    //     </>
    //     )
    //     PopupboxManager.open({content})
    // }

    // const popupboxConfigwhatsfordinner1 ={
    //     titleBar:{
    //         enable:true,
    //         text: "What's for Dinner"
    //     },
    //     fadeIn: true,
    //     fadeSpeed:500
    // }

    // ///starwars
    // const openPopupboxstarwars1 = () =>{
    //     const content = (
    //     <>
    //         <img className="portfolio-image-popupbox" src={starwars} alt="Star Wars Quiz Project..." />
    //         <br></br>
    //         <b>GitHub Repository</b> <a className="hyper-link" onClick={() => window.open("https://github.com/jorgeebn16/4-Web-APIs-Challenge")}>
    //         https://github.com/jorgeebn16/4-Web-APIs-Challenge</a>
    //         <br></br>
    //         <b>Deployment URL</b> <a className="hyper-link" onClick={() => window.open("https://jorgeebn16.github.io/4-Web-APIs-Challenge/")}>
    //         https://jorgeebn16.github.io/4-Web-APIs-Challenge/</a>
    //     </>
    //     )
    //     PopupboxManager.open({content})
    //     }

    // const popupboxConfigstarwars1 ={
    //     titleBar:{
    //         enable:true,
    //         text: "Star Wars Quiz"
    //     },
    //      fadeIn: true,
    //     fadeSpeed:500
    // }


    // ///myrecipes
    // const openPopupboxmyrecipes1 = () =>{
    //     const content = (
    //     <>
    //         <img className="portfolio-image-popupbox" src={myrecipes} alt="Star Wars Quiz Project..." />
    //         <br></br>
    //         <b>GitHub Repository</b> <a className="hyper-link" onClick={() => window.open("https://github.com/jorgeebn16/my-foodie-recipes")}>
    //         https://github.com/jorgeebn16/my-foodie-recipes</a>
    //         <br></br>
    //         <b>Deployment URL</b> <a className="hyper-link" onClick={() => window.open("https://my-foddies-recipes.herokuapp.com/")}>
    //         https://my-foddies-recipes.herokuapp.com/</a>
    //     </>
    //     )
    //     PopupboxManager.open({content})
    //     }
    
    // const popupboxConfigmyrecipes1 ={
    //     titleBar:{
    //         enable:true,
    //         text: "My Foddie Recipes"
    //     },
    //      fadeIn: true,
    //     fadeSpeed:500
    // }

    // ///wheather
    // const openPopupboxwheather1= () =>{
    //     const content = (
    //     <>
    //         <img className="portfolio-image-popupbox" src={wheather} alt="Wheather API Dashboard..." />
    //         <br></br>
    //         <b>GitHub Repository</b> <a className="hyper-link" onClick={() => window.open("https://github.com/jorgeebn16/6-Server-Side-APIs-Challenge")}>
    //         https://github.com/jorgeebn16/6-Server-Side-APIs-Challenge</a>
    //         <br></br>
    //         <b>Deployment URL</b> <a className="hyper-link" onClick={() => window.open("https://jorgeebn16.github.io/6-Server-Side-APIs-Challenge/")}>
    //         https://jorgeebn16.github.io/6-Server-Side-APIs-Challenge</a>
    //     </>
    //     )
    //     PopupboxManager.open({content})
    //     }
    
    // const popupboxConfigwheather1 ={
    //     titleBar:{
    //         enable:true,
    //         text: "Wheather API Dashboard"
    //     },
    //      fadeIn: true,
    //     fadeSpeed:500
    // }

    ///whatsfordinner
    const openPopupboxwhatsfordinner = () =>{
        const content = (
        <>
            <img className="portfolio-image-popupbox" src={whatsfordinner} alt="What's fro Dinner Project..." />
            <br></br>
            <b>GitHub Repository</b> <a className="hyper-link" onClick={() => window.open("https://github.com/jorgeebn16/whats-for-dinner")}>
                https://github.com/jorgeebn16/whats-for-dinner</a>
            <br></br>
            <b>Deployment URL</b> <a className="hyper-link" onClick={() => window.open("https://jorgeebn16.github.io/whats-for-dinner/")}>
                https://jorgeebn16.github.io/whats-for-dinner/</a>
        </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigwhatsfordinner ={
        titleBar:{
            enable:true,
            text: "What's for Dinner"
        },
        fadeIn: true,
        fadeSpeed:500
    }

    ///starwars
    const openPopupboxstarwars = () =>{
        const content = (
        <>
            <img className="portfolio-image-popupbox" src={starwars} alt="Star Wars Quiz Project..." />
            <br></br>
            <b>GitHub Repository</b> <a className="hyper-link" onClick={() => window.open("https://github.com/jorgeebn16/4-Web-APIs-Challenge")}>
            https://github.com/jorgeebn16/4-Web-APIs-Challenge</a>
            <br></br>
            <b>Deployment URL</b> <a className="hyper-link" onClick={() => window.open("https://jorgeebn16.github.io/4-Web-APIs-Challenge/")}>
            https://jorgeebn16.github.io/4-Web-APIs-Challenge/</a>
        </>
        )
        PopupboxManager.open({content})
        }

    const popupboxConfigstarwars ={
        titleBar:{
            enable:true,
            text: "Star Wars Quiz"
        },
         fadeIn: true,
        fadeSpeed:500
    }


    ///myrecipes
    const openPopupboxmyrecipes = () =>{
        const content = (
        <>
            <img className="portfolio-image-popupbox" src={myrecipes} alt="Star Wars Quiz Project..." />
            <br></br>
            <b>GitHub Repository</b> <a className="hyper-link" onClick={() => window.open("https://github.com/jorgeebn16/my-foodie-recipes")}>
            https://github.com/jorgeebn16/my-foodie-recipes</a>
            <br></br>
            <b>Deployment URL</b> <a className="hyper-link" onClick={() => window.open("https://my-foddies-recipes.herokuapp.com/")}>
            https://my-foddies-recipes.herokuapp.com/</a>
        </>
        )
        PopupboxManager.open({content})
        }
    
    const popupboxConfigmyrecipes ={
        titleBar:{
            enable:true,
            text: "My Foddie Recipes"
        },
         fadeIn: true,
        fadeSpeed:500
    }

    ///wheather
    const openPopupboxwheather= () =>{
        const content = (
        <>
            <img className="portfolio-image-popupbox" src={wheather} alt="Wheather API Dashboard..." />
            <br></br>
            <b>GitHub Repository</b> <a className="hyper-link" onClick={() => window.open("https://github.com/jorgeebn16/6-Server-Side-APIs-Challenge")}>
            https://github.com/jorgeebn16/6-Server-Side-APIs-Challenge</a>
            <br></br>
            <b>Deployment URL</b> <a className="hyper-link" onClick={() => window.open("https://jorgeebn16.github.io/6-Server-Side-APIs-Challenge/")}>
            https://jorgeebn16.github.io/6-Server-Side-APIs-Challenge</a>
        </>
        )
        PopupboxManager.open({content})
        }
    
    const popupboxConfigwheather ={
        titleBar:{
            enable:true,
            text: "Wheather API Dashboard"
        },
         fadeIn: true,
        fadeSpeed:500
    }

    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxwhatsfordinner}>
                        <img className="portfolio-image" src={whatsfordinner} alt="What's for Dinner..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxstarwars}>
                        <img className="portfolio-image" src={starwars} alt="Star Wars Quiz..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box"onClick={openPopupboxmyrecipes}>
                        <img className="portfolio-image" src={myrecipes} alt="My Foddie Recipes..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box"onClick={openPopupboxwheather}>
                        <img className="portfolio-image" src={wheather} alt="Wheather API Dashboard..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>
                    {/* <div className="portfolio-image-box" onClick={openPopupboxwhatsfordinner1}>
                        <img className="portfolio-image" src={whatsfordinner} alt="What's for Dinner..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div> */}
                    {/* - */}
                    {/* <div className="portfolio-image-box" onClick={openPopupboxstarwars1}>
                        <img className="portfolio-image" src={starwars} alt="Star Wars Quiz..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div> */}
                    {/* - */}
                    {/* <div className="portfolio-image-box"onClick={openPopupboxmyrecipes1}>
                        <img className="portfolio-image" src={myrecipes} alt="My Foddie Recipes..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div> */}
                    {/* - */}
                    {/* <div className="portfolio-image-box"onClick={openPopupboxwheather1}>
                        <img className="portfolio-image" src={wheather} alt="Wheather API Dashboard..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div> */}
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigwhatsfordinner}/>
            <PopupboxContainer {...popupboxConfigstarwars}/>
            <PopupboxContainer {...popupboxConfigmyrecipes}/>
            <PopupboxContainer {...popupboxConfigwheather}/>
            {/* <PopupboxContainer {...popupboxConfigwhatsfordinner1}/>
            <PopupboxContainer {...popupboxConfigstarwars1}/>
            <PopupboxContainer {...popupboxConfigmyrecipes1}/>
            <PopupboxContainer {...popupboxConfigwheather1}/> */}
        </div>
    )
}

export default Portfolio;