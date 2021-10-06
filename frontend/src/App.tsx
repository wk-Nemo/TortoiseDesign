import React from 'react'; 
import Button, { ButtonType, ButtonSize } from './components/Button/button';
import Alert, { AlertType } from './components/Alert/alert';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem'

function App() {
  return (
    <div className="App">
      <div className="item buttons">
        <Button className="hello" onClick={(e) => {e.preventDefault(); alert(123)}}>Hello</Button>
        <Button
          disabled={true}
        >Disabled Button</Button>
        <Button
          btnType={ButtonType.Primary}
          size={ButtonSize.Large}
        >Large Primary</Button>
        <Button
          btnType={ButtonType.Danger}
          size={ButtonSize.Small}
        >small Danger</Button>
        <Button
          btnType={ButtonType.Link}
          href="http://www.baidu.com"
        >BaiDu Link</Button>
        <Button
          btnType={ButtonType.Link}
          disabled={true}
          href="http://www.baidu.com"
        >Disabled Link</Button>
      </div>
      <Menu defaultIndex={0}>
        <MenuItem>
          cool Link 1
        </MenuItem>
        <MenuItem>
          cool Link 2
        </MenuItem>
        <MenuItem>
          cool Link 3
        </MenuItem>
      </Menu>
      <div className="item alerts">
        <Alert
          closeable={true}
          message="default Alert"
          description="this is a default Alert"
        ></Alert>
        <Alert
          message="success Alert"
          type={AlertType.success}
        ></Alert>
        <Alert
          message="danger Alert"
          type={AlertType.danger}
        ></Alert>
        <Alert
          message="warning Alert"
          type={AlertType.warning}
        ></Alert>
      </div>
    </div>
  );
}

export default App;
