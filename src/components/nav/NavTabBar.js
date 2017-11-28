import React from 'react';
import {Tabs} from 'antd-mobile'
export class NavTabBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {

    const tabs = this.props.rootNavData.map(
      data=>
      {
        return {...data,title:data.name}
      })
    return (
      <div>
        <Tabs
          tabs={tabs}
          onChange={data=>{
            if(data.path!==this.props.history.location.pathname)
              this.props.history.push(data.path)
          }}
        >
          {
            this.props.rootNavData.map(value=> (this.props.history.location.pathname===value.path)?<div key={value.path}>{this.props.children}</div>:<div key={value.path}/>)
          }
        </Tabs>
      </div>
    );
  }
}
