import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import { renderRoutes } from 'react-router-config'
import { Layout } from "antd";
import routes from '@src/router'
import Aside from '@src/components/Aside'
import CHeader from '@src/components/Header'
import './app.less'

const { Header, Content, Sider } = Layout;

function App() {
  return (
    <Router>
      <div className="html">
        <div className="aside">
          <Sider className="sider">
            <Aside />
          </Sider>
        </div>
        <div className="body">
          <Header className="header">
            <CHeader />
          </Header>
          <Content className="content">
            {renderRoutes(routes)}
          </Content>
        </div>
      </div>
    </Router>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
