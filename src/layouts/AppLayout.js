import React,{Component} from 'react'
import {NavTabBar} from "../components/nav/NavTabBar";
import {NavBar} from 'antd-mobile'

import {_} from 'underscore'
export class AppLayout extends Component{
  render() {
    return <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>

      {(_.contains(_.pluck(this.props.rootNavData,'path'),this.props.history.location.pathname))?<NavTabBar {...this.props} />:<NavBar
      mode="dark"
      leftContent="返回"
      onLeftClick={()=>this.props.history.goBack()}
    >{_.find(this.props.navData,value=>value.path===this.props.history.location.pathname).name}</NavBar>}

    </div>
  }

}
