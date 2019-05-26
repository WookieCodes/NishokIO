import React, {Component} from 'react'
import {} from './past-project.css'

export default class PastProject extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="project-wrapper">
                <img src={this.props.imgPath}></img>
                <a href={this.props.url}>
                    <div className="img-desc-wrapper d-flex flex-column align-items-center justify-content-center text-center">
                        <h3 className="img-title">{this.props.title}</h3>
                        <p className="img-desc">{this.props.desc}</p>
                    </div>
                </a>
            </div>
        );
    };
};