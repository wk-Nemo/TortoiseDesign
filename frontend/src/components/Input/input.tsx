import React, { InputHTMLAttributes, ReactElement } from "react";
import classNames from "classnames";
import { IconProps } from '../Icon/icon'

type InputSize = 'large' | 'small'
// Omit 忽略泛型中的某个值
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  className?: string;
  disabled?: boolean;
  size?: InputSize;
  icon?: IconProps;
  prepend?: string | ReactElement;
  append?: string | ReactElement;
}

export const Input: React.FC<InputProps> = (props) => {
  // 取出属性
  const {
    className,
    disabled,
    size,
    icon,
    prepend,
    append,
    children,
    ...restProps
  } = props

  // 设置classes
  const classes = classNames('tortoise-input-wrapper', className, {
    [`input-size-${size}`]: size,
    'is-disabled': disabled,
    'input-group': prepend || append,
    'input-group-append': !!append,
    'input-group-prepend': !!prepend
  })

  return (
    // 根据属性判断是否要添加特定的节点
    <div className={classes}>
      <input className="tortoise-input" {...restProps}></input>
    </div>
  )
}

Input.defaultProps = {
  disabled: false,
}

export default Input