import React, { Component } from 'react'

const getMenuContent = ({ path, name }) => {
  <a href={path? path: '/'} style={{color: '#fff2e8'}}>
    {name}
  </a>
}
export default class LayoutDefault extends Component {
  constructor () {
    super (props)
    this.state = {
      loading: false,
      tips: '稍等一下'
    }
  }

  componentDidMount() {
    window.__LOADING__ = this.toggleLoading
  }

  componentWillUnMount () {
    window.__LOADING__ = null
  }

  render() {
    const { children } = this.props
    const { loading, tip } = this.state
    return (
      <div className='flex-column' style={{width: '100%', height:'100%'}}>
        <Menu
          style={{fontSize: 13.5, backgroundColor:'#000'}}
          mode='horizontal'
          defaultSelectedKeys={[this.matchRouteName]}
        >
          {
            navRoutes.map((e, i) => {
              <Menu.Item key={e.name}>
                {
                  getMenuContent({...e})
                }
              </Menu.Item>
            })
          }
        </Menu> 
        <Spin
          spinning={loading}
          tip={tip}
          wrapperClassName='content-spin full'
        >
          {children}
        </Spin>
      </div>
    )
  }

}