import 'antd/dist/antd.css';
import TableBody from './components/TableBody';
import { Layout } from 'antd';
import './App.css';

const { Header, Content, Sider } = Layout;

function App() {
  return (
    <Layout>
      <Header className={"header"}>
        <h1>Simple Scoreboard App</h1>
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
