import React, { FunctionComponentElement, useContext, useState } from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu'
import { MenuItemProps } from './menuItem'

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

  const openSubMenus = context.defaultOpenSubMenu as Array<string>
  const isOpen = (index && context.mode === 'vertical') ? openSubMenus.includes(index) : false
  const [menuOpen, setOpen] = useState(isOpen)

  const contextFirstIndex = context.index.split('-')[0]
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': contextFirstIndex === index
  })

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    // 调用改变active
    // if(context.onSelect && (typeof index === 'string')) {
    //   context.onSelect(index)
    // }
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

  const clickEvents = context.mode === 'vertical' ? {
    onClick: handleClick
  } : {}
  const hoverEvents = context.mode === 'horizontal' ? {
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
      <div className="submenu-title" {...clickEvents}> 
        {title}
      </div>
      {renderChildren()}
    </li>
  )
}

SubMenu.displayName = 'SubMenu'
export default SubMenu