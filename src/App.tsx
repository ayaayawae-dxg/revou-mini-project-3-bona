import { ConfigProvider } from "antd";
import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import router from "router";
import theme from "theme";

function App() {
  return (
    <ConfigProvider theme={theme}>
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </ConfigProvider>
  );
}

export default App;
