import logo from './logo.svg';
import 'antd/dist/antd.css';
import TableBody from './components/Table';
import TableHeader from './components/TableHeader';
import AddPlayerButton from './components/AddPlayerButton';
import { Layout} from 'antd';
import './App.css';

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
        <Header style = {{
          width: '100vw',
          position: 'fixed',
          left: 0,
          border: '1px solid black',
          backgroundColor: '#F0F2F5',
          zIndex: '999'
        }}>Header </Header>
        <Content style={{
          width: '60%',
          margin: '60px auto auto auto',
          padding: '0'
        }}>
          <TableHeader></TableHeader>
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
