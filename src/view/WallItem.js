import React, { Component } from 'react';

// import style from '../style/wallitem.scss';
import '../style/wallitem.scss'


export default class WallItem extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        // this.state = {
        //     list: [1, 2, 3, 4],
        //     value: 'test'
        // }
    }
    render() {
        return (
            <div className="wallitem">
                <img src={this.props.data.imgs} alt="展示图片"/>
                <span>{this.props.data.title}</span>
            </div>
        );
    }
}