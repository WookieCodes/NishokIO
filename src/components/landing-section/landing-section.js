import React, {Component} from 'react'
import {} from './landing-section.css'

import Particles from 'react-particles-js';
import {particlesSettings, particlesSettingsMobile} from '../../App';

export default class LandingSection extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            width: 0,
            height:0,
            settings: particlesSettings
        }

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        this.setState({width: window.innerWidth, height: window.innerHeight, settings: this.getParticleSettings()});
    }

    getParticleSettings = () => {
        var screenArea = this.state.width * this.state.height;
        // console.log(screenArea);
        var settings = (screenArea > 400000) ? particlesSettings : particlesSettingsMobile;

        return settings;
    }

    render() {
        return(
            <section className="intro-wrapper">
                <Particles canvasClassName="canvas ParticleCanvas position-fixed h-100 w-100" params={this.getParticleSettings()} />
                <div className="container">
                    <div className="row vh-100">
                        <div className="intro col-12 align-self-center position-relative">
                            <h1>Hey, I'm <span className="name">Nishok Yadav</span>.</h1>
                            <h1>Front-End Web Developer.</h1>
                            <h5>Let's turn your ideas into reality.</h5>
                            <a href="mailto:nishokyadav@gmail.com?subject=Website Inquiry" className="btn btn-main">Hire me</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
};