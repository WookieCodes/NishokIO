import React, {Component} from 'react'
import {} from './link-list.css'
import CircleLink from '../../components/circle-link/circle-link';

export default class LinkList extends Component {

    CreateLinkList = () => {
        const list = this.props.links.map(link => {
            return(
                <CircleLink key={link.name} site={link} group={link.group} bkgdColor={this.props.bkgdColor} iconColor={this.props.iconColor}/>
            );
        });

        return list;
    }

    render() {
        return(
            <div className={"link-list row " + this.props.className}>
                    {this.CreateLinkList()}
            </div>
        );
    };
};