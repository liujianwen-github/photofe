import React, { Component } from 'react';
import $http from 'axios'
// components
import Item from './WallItem'
// css
import '../style/wall.scss'
export default class Wall extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [{
                id: 'weweweawd22232',
                imgs: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531048036049&di=e0ad666d3e73730b45f884d342b8a97e&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Ffd039245d688d43ffdcaed06711ed21b0ff43be6.jpg'],
                detail: '详情简介1'
            }, {
                id: 'weweweawd221232',
                imgs: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531048036049&di=e0ad666d3e73730b45f884d342b8a97e&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Ffd039245d688d43ffdcaed06711ed21b0ff43be6.jpg'],
                detail: '详情简介2'
            }],
            createItem: {
                title: '',
                detail: ''
            }
        }

        // 绑定this的方法
        this.detailChange = this.detailChange.bind(this)
        this.fileChange = this.fileChange.bind(this)
        this.submitForm = this.submitForm.bind(this )
        // setTimeout(() => {
        //     this.setState({ list: [] })
        // }, 3000);
    }
    // 列表数据渲染
    renderList(list) {
        return list.map((element, index) => {
            return (<Item key={element.id + index} data={element}></Item>)
        })
    }
    // 详情修改数据绑定
    detailChange(e) {
        let c = this.state.createItem
        c.detail = e.target.value
        this.setState({ createItem: c })
    }
    fileChange(e) {
        let c = this.state.createItem
        c.imgs.push(e.target.value)
        this.setState({ createItem: c })
    }
    // 创建条目表单提交
    submitForm() {
        console.log(this)
        // console.log(this.refs.fileImg.files[0])
        let file = this.refs.fileImg.files[0]
        let form = new FormData()
        form.set('file',file)
        form.set('detail',this.state.createItem.detail)
        $http({
            method:'POST',
            url:'http://localhost:8080/photo/item',
            data:form
        }).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.error(err)
        })
    }
    render() {
        return (
            <div className="wall">
                <div className="list">{this.renderList(this.state.list)}</div>
                <div>
                    <input type="file" ref="fileImg"  />
                    <input type="text" onChange={this.detailChange} value={this.state.createItem.detail} />
                    <button onClick={this.submitForm}>submit</button>
                </div>
                {this.state.createItem.detail}
            </div>
        );
    }
}