/**
 * Created by yanzi on 2017/9/13.
 */
//main.js
import React, { PropTypes, Component } from 'react'
import ReactDom from 'react-dom';
import Login from './conponent/Login.jsx';

class LandingPage extends Component{
    constructor(props){
        super(props);
        this.state={
            isShow:false
        }
    }
    clickHandle(){
        this.setState({isShow:true})

    }

    render(){
        return (<div>
            <span onClick={this.clickHandle.bind(this)}>点我登录</span>
            <Login isShow={this.state.isShow} onClose={() => {this.setState({isShow:false})}}/>
        </div>)
    }
}
ReactDom.render(
    <LandingPage>
    </LandingPage>,
    document.getElementById('content')
);