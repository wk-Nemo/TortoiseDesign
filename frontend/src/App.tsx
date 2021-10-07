// import React from 'react'; 
// import Button, { ButtonType, ButtonSize } from './components/Button/button';
// import Alert, { AlertType } from './components/Alert/alert';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu';

function App() {
  return (
    <div className="App">
      {/* <div className="item buttons">
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
      </div> */}
      <Menu
        defaultIndex='0'
        defaultOpenSubMenu={['2']}
        onSelect={(index) => {console.log(index)}}
      >
        <MenuItem>
          cool Link 1
        </MenuItem>
        <MenuItem disabled>
          cool Link 2
        </MenuItem>
        <MenuItem>
          cool Link 3
        </MenuItem>
        <MenuItem>
          cool Link 4
        </MenuItem>
      </Menu>
      <Menu
        defaultIndex='0'
        defaultOpenSubMenu={['2']}
        onSelect={(index) => {console.log(index)}}
      >
        <MenuItem>
          cool Link 1
        </MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>
            dropdown 1
          </MenuItem>
          <MenuItem>
            dropdown 2
          </MenuItem>
        </SubMenu>
        <MenuItem>
          cool Link 3
        </MenuItem>
      </Menu>
      {/* <Menu
        defaultIndex='0'
        mode='vertical'
        defaultOpenSubMenu={['2']}
        className="menu-width"
        onSelect={(index) => {console.log(index)}}
      >
        <MenuItem>
          cool Link 1
        </MenuItem>
        <MenuItem disabled>
          cool Link 2
        </MenuItem>
        <MenuItem>
          cool Link 3
        </MenuItem>
        <MenuItem>
          cool Link 4
        </MenuItem>
      </Menu> */}
      <Menu
        defaultIndex='0'
        mode='vertical'
        defaultOpenSubMenu={['2']}
        className="menu-width"
        onSelect={(index) => {console.log(index)}}
      >
        <MenuItem>
          cool Link 1
        </MenuItem>
        <MenuItem disabled>
          cool Link 2
        </MenuItem>
        <SubMenu title="cool Link3">
          <MenuItem>
            drop1
          </MenuItem>
          <MenuItem>
            drop2
          </MenuItem>
          <MenuItem>
            drop3
          </MenuItem>
        </SubMenu>
        <MenuItem>
          cool Link 4
        </MenuItem>
      </Menu>
      {/* <div className="item alerts">
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
      </div> */}
    </div>
  );
}

export default App;
