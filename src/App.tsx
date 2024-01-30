import { ConfigProvider } from 'antd';
import { Home } from 'pages';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#040040",
        },
      }}
    >
      <Home />
    </ConfigProvider>
  );
}

export default App;
