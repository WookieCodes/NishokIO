import React, {Component} from 'react'
import {} from './bar.css'

export default class Bar extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return(
            <div className={"bar-wrapper " + this.props.className}>
                <div className="bar d-flex align-items-center justify-content-center">
                    <div className="bar-text text-center">{this.props.text}</div>
                </div>
                <div className={"bar-fill-" + this.props.anim + " bar-fill position-relative"}></div>
            </div>
        );
    };
};