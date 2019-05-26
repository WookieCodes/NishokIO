import React, {Component} from 'react';
import {} from './home-page.css';

import LandingSection from '../../components/landing-section/landing-section';
import AboutSection from '../../components/about-section/about-section';
import ProjectsSection from '../../components/projects-section/projects-section';
import LinkList from '../../components/link-list/link-list';

export const mySocials = [
    { name: "envelope", url: "mailto:nishokyadav@gmail.com?subject=Website Inquiry", group: "fas" },
    { name: "linkedin", url: "https://www.linkedin.com/in/nishokyadav/" },
    { name: "github", url: "https://www.github.com/wookiecodes" }
];

export default class HomePage extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return(
            <div className="home-page-wrapper">
                <LandingSection></LandingSection>

                <AboutSection></AboutSection>

                <ProjectsSection></ProjectsSection>  

                <div className="footer-wrapper">
                    <div className="container">
                        <div className="row flex-column">
                            <div className="col-12 text-center">
                                <p>nishokyadav@gmail.com</p>
                                <LinkList links={mySocials} bkgdColor="#f5f5f5" iconColor="#00020E"/>
                            </div>
                        </div>
                    </div>
                </div>          
            </div>
        );
    };
};