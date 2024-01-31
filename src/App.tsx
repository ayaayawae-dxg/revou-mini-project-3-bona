import { ConfigProvider } from 'antd';
import { Home } from 'pages';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#341eff",
          colorTextBase: "white"
        },
        components: {
          DatePicker: {
            colorBgElevated: '#00011e',
            activeBg: '00011e',
          },
        },
      }}
    >
      <Home />
    </ConfigProvider>
  );
}

export default App;
