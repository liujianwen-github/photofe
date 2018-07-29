import React, {
    Component
} from 'react';
import $http from 'axios'
// components
import Item from './WallItem'
// css
import '../style/wall.scss'
import $conf from '../config'
export default class Wall extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            createItem: {
                title: ''
            }
        }

        // 绑定this的方法
        this.detailChange = this.detailChange.bind(this)
        this.fileChange = this.fileChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    componentWillMount() {
        $http({
            method: 'GET',
            url: '/photo/items'
        }).then(({
            data
        }) => {
            console.log(data);
            this.setState({
                list: data.data || []
            })
        })
    }
    // 列表数据渲染
    renderList(list) {
        return list.map((element, index) => {
            return (<Item key={element.id + index} data={element}/>)
        })
    }
    // 详情修改数据绑定
    detailChange(e) {
        let c = this.state.createItem
        c.title = e.target.value
        this.setState({
            createItem: c
        })
    }
    fileChange(e) {
        let c = this.state.createItem
        c.imgs.push(e.target.value)
        this.setState({
            createItem: c
        })
    }
    // 创建条目表单提交
    submitForm() {
        console.log(this)
        // console.log(this.refs.fileImg.files[0])
        let file = this.refs.fileImg.files[0]
        let form = new FormData()
        form.set('imgs', file)
        form.set('title', this.state.createItem.title)
        $http({
            method: 'POST',
            url: 'http://localhost:8000/photo/item',
            data: form
        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.error(err)
        })
    }
    render() {
        return (
            <div className="wall">
                <div className="list">{this.renderList(this.state.list)}</div>
                <div>
                    <input type="file" ref="fileImg" />
                    <input type="text" onChange={this.detailChange} value={this.state.createItem.title} />
                    <button onClick={this.submitForm}>submit</button>
                </div>
                {this.state.createItem.title}
            </div>
        );
    }
}