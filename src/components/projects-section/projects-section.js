import React, {Component} from 'react'
import {} from './projects-section.css'
import PastProject from '../past-project/past-project';

export default class ProjectsSection extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return(
            <section className="projects-section">
                <div className="container">
                    <h1>Projects</h1>
                    <br></br>
                    <div className="row justify-content-around">
                        <PastProject    title="Pok&eacute;Worth" 
                                        desc="Cost-analysis tool for Pok&eacute;mon Go players." 
                                        imgPath="/assets/PokeWorthPortfolio.png"
                                        url="https://www.pokeworth.com"/>
                        <PastProject    title="Louie Louie" 
                                        desc="Hibachi & Sushi Food Truck" 
                                        imgPath="/assets/LouieLouiePortfolio.png"
                                        url="https://www.louielouietogo.com"/>
                    </div>
                </div>
            </section>   
        );
    };
};