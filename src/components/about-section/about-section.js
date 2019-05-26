import React, {Component} from 'react'
import {} from './about-section.css'

import Bar from '../../components/bar/bar';

export default class AboutSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <section className="about-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-xs-12 d-flex flex-column align-items-center">
                        <h1>Who am I?</h1>
                        <img className="mx-auto rounded" src="/assets/Nishok.jpeg" alt="Nishok"></img>
                        <p>I'm a Front-End web developer living in Las Vegas, Nevada who enjoys making eye-popping, intuitive websites. 
                        <br></br><br></br>
                        Outside of this nerdy world of coding, I am... well... a nerd. I enjoy Game of Thrones, Star Wars, Marvel, gaming, and food: lots and lots of food.</p>
                    </div>
                    <div className="skills-wrapper col-lg-6 col-xs-12 align-self-center">
                        <div className="row skills-row justify-content-center text-center">
                            <Bar className="col-6" text="HTML" anim="4"></Bar>
                            <Bar className="col-6" text="CSS" anim="1"></Bar>
                        </div>
                        <div className="row skills-row justify-content-center text-center">
                            <Bar className="col-6" text="React" anim="0"></Bar>
                            <Bar className="col-6" text="JavaScript" anim="3"></Bar>
                        </div>
                        <div className="row skills-row justify-content-center text-center">
                            <Bar className="col-6" text="Node.js" anim="2"></Bar>
                            <Bar className="col-6" text="Responsive design" anim="5"></Bar>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    };
};