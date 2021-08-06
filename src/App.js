import logo from './img/Simumatik_Logo.png';
import 'antd/dist/antd.css';
import TableBody from './components/TableBody';
import { Layout } from 'antd';
import './App.css';

const { Header, Content, Sider } = Layout;

function App() {
  return (
    <Layout>
      <Header className={"header"}>
        <img src={logo} alt="logo" className={"logo"} />
      </Header>
      <Sider className={"sider left"} />
      <Layout>
        <Content className={"content"}>
          <TableBody></TableBody>
        </Content>
      </Layout>
      <Sider className={"sider right"} />
    </Layout>
  );
}
export default App;
