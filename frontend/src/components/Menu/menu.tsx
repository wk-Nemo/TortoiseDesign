import React, { useState, createContext } from 'react'
import classNames from 'classnames'
import { MenuItemProps } from './menuItem'

type SelectCallback = (selectIndex: string) => void

type MenuMode = 'horizontal' | 'vertical'
export interface MenuProps {
  defaultIndex?: string;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: SelectCallback;
  defaultOpenSubMenu?: string[];
}
interface IMenuContext {
  index: string;
  onSelect?: SelectCallback;
  mode?: MenuMode;
  defaultOpenSubMenu?: string[];
}

export const MenuContext = createContext<IMenuContext>({index: '0'})

const Menu: React.FC<MenuProps> = (props) => {
  const {
    defaultIndex,
    className,
    mode,
    style,
    onSelect,
    children,
    defaultOpenSubMenu,
  } = props

  const [currentActive, setActive] = useState(defaultIndex)

  const classes = classNames('tortoise-menu', className, {
    'menu-horizontal': mode !== 'horizontal',
    'menu-vertical': mode === 'vertical'
  })

  const handleClick = (index: string) => {
    setActive(index)

    if(onSelect) {
      onSelect(index)
    }
  }

  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : '0',
    onSelect: handleClick,
    mode,
    defaultOpenSubMenu,
  }

  // 确保 Menu 的子组件是 MenuItem
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type

      if(displayName !== 'MenuItem' && displayName !== 'SubMenu') {
        console.error("Warning: Menu has a child which is not a MenuItem component")
      }

      return React.cloneElement(childElement, {
        index: index.toString()
      })
    })
  }

  return (
    <ul
      className={classes}
      style={style}
      data-testid="test-menu"
    >
      <MenuContext.Provider value={passedContext}>
        { renderChildren() }
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
  defaultOpenSubMenu: [],
}

export default Menu