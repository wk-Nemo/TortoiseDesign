import React from 'react'; 
import Button, {ButtonType, ButtonSize} from './components/Button/button';

function App() {
  return (
    <div className="App">
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
  );
}

export default App;
