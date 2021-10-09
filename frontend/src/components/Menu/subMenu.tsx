import React, { FunctionComponentElement, useContext, useState } from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu'
import { MenuItemProps } from './menuItem'
import Icon from '../Icon/icon'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)
export interface SubMenuProps {
  index?: string;
  title?: string;
  className?: string;
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
  const context = useContext(MenuContext)
  const {
    index,
    className,
    title,
    children,
  } = props

  const isVertical = context.mode === 'vertical'

  const openSubMenus = context.defaultOpenSubMenu as Array<string>
  const isOpen = (index && isVertical) ? openSubMenus.includes(index) : false
  const [menuOpen, setOpen] = useState(isOpen)

  const contextFirstIndex = context.index.split('-')[0]
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': contextFirstIndex === index
  })

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(!menuOpen)
  }

  let timer: any
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(() => {
      setOpen(toggle)
    }, 300)
  }

  const clickEvents = isVertical ? { onClick: handleClick } : {}
  const hoverEvents = !isVertical ? {
    onMouseEnter: (e: React.MouseEvent) => { handleMouse(e, true)},
    onMouseLeave: (e: React.MouseEvent) => { handleMouse(e, false)}
  } : {}

  const renderChildren = () => {
    const subMenuClasses = classNames('tortoise-submenu', {
      'menu-opened': menuOpen
    })
    
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type

      console.log(displayName)
      if(displayName !== 'MenuItem') {
        console.error("Warning: SubMenu has a child which is not a MenuItem component")
      }

      return React.cloneElement(childElement, {
        index: `${index}-${i}`
      })
    })

    return (
        <ul className={subMenuClasses}>
          {childrenComponent}
        </ul>
    )
  }

  return (
    <li
      key={index}
      className={classes}
      {...hoverEvents}
    >
      <div className="submenu-title-content" {...clickEvents}>
        <div className="submenu-title"> 
          {title}
        </div>
        { context.mode === 'vertical' &&
          <Icon className="submenu-icon" theme="primary" icon="angle-down"></Icon>
        }
      </div>
      {renderChildren()}
    </li>
  )
}

SubMenu.displayName = 'SubMenu'
export default SubMenu