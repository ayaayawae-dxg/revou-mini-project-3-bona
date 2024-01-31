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
            activeBg: '#00011e',
            fontSize: 20,
          },
          Select: {
            colorBgElevated: "#00011e",
            optionSelectedColor: "black",
            fontSize: 20
          },
          Input: {
            activeBorderColor: "red"
          },
        },
      }}
    >
      <Home />
    </ConfigProvider>
  );
}

export default App;
