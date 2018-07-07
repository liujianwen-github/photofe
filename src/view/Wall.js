import React, { Component } from 'react';

export default class Wall extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [1, 2, 3, 4],
            value: 'test'
        }
        // 
        this.handleChange = this.handleChange.bind(this)
        setTimeout(() => {
            this.setState({ list: [2] })
        }, 3000);
    }
    // 列表数据渲染
    renderList(list) {
        return list.map((element, index) => {
            return (<li key={index}>{element}</li>)
        });
    }
    handleChange(e) {
        console.log(this)
        this.setState({ value: e.target.value })
    }
    render() {
        return (
            <div className="wall">
                <ul>{this.renderList(this.state.list)}</ul>
                <input type="text" onChange={this.handleChange} value={this.state.value}/>
                {this.state.value}
            </div>
        );
    }
}