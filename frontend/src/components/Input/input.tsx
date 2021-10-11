import React, { InputHTMLAttributes, ReactElement } from "react";
import classNames from "classnames";
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import Icon from '../Icon/icon'

type InputSize = 'large' | 'small'
// Omit 忽略泛型中的某个值
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  className?: string;
  disabled?: boolean;
  size?: InputSize;
  icon?: IconProp;
  addonBefore?: string | ReactElement;
  addonAfter?: string | ReactElement;
}

export const Input: React.FC<InputProps> = (props) => {
  // 取出属性
  const {
    className,
    disabled,
    size,
    icon,
    addonBefore,
    addonAfter,
    children,
    ...restProps
  } = props
  console.log(icon)

  // 设置classes
  const classes = classNames('tortoise-input-wrapper', className, {
    [`input-size-${size}`]: size,
    'is-disabled': disabled,
    'input-group': addonBefore || addonAfter,
    'input-group-add-before': !!addonBefore,
    'input-group-add-after': !!addonAfter
  })

  return (
    // 根据属性判断是否要添加特定的节点
    <div className={classes}>
      {!!addonBefore &&
        <div className="tortoise-input-pre">{addonBefore}</div>
      }
      <div className="tortoise-icon-with-input">
        {icon &&
          <div className="tortoise-input-icon-wrapper">
            <Icon icon={icon}></Icon>
          </div>
        }
        <input className="tortoise-input" {...restProps}></input>
      </div>
      {!!addonAfter &&
        <div className="tortoise-input-after">{addonAfter}</div>
      }
    </div>
  )
}

Input.defaultProps = {
  disabled: false,
}

export default Input