import logo from './img/Simumatik_Logo.png';
import 'antd/dist/antd.css';
import TableBody from './components/Table';
import { Layout } from 'antd';
import './App.css';
import { useState } from 'react';

const { Header, Content, Sider } = Layout;

function App() {
  return (
    <Layout>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'relative',
          left: 0,
          backgroundColor: '#F0F2F5'
        }}
      ></Sider>
      <Layout>
        <Header style={{
          width: '100vw',
          position: 'fixed',
          left: 0,
          border: '1px solid black',
          backgroundColor: '#F0F2F5',
          zIndex: '999'
        }}>
          <img src={logo} style={{
            width: '200px'
          }}></img>
        </Header>
        <Content style={{
          width: '60%',
          margin: '60px auto auto auto',
          padding: '0'
        }}>
          <TableBody></TableBody>
        </Content>
      </Layout>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'relative',
          right: 0,
          backgroundColor: '#F0F2F5'
        }}
      ></Sider>
    </Layout>
  );
}
export default App;
