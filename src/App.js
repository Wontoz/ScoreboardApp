import logo from './img/Simumatik_Logo.png';
import 'antd/dist/antd.css';
import TableBody from './components/TableBody';
import { Layout } from 'antd';
import './App.css';

const { Header, Content, Sider } = Layout;

function App() {
  return (
    <Layout>
      <Sider className={"sider left"} />
      <Layout>
        <Header className={"header"}>
          <img src={logo} alt="logo" className={"logo"} />
        </Header>
        <Content className={"content"}>
          <TableBody></TableBody>
        </Content>
      </Layout>
      <Sider className={"sider right"} />
    </Layout>
  );
}
export default App;
