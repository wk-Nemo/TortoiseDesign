import React, { useState } from "react";
import classNames from "classnames";
import Icon from '../Icon/icon'
import Transition from '../Transition/transition'

export enum AlertType {
  success = 'success',
  default = 'default',
  danger = 'danger',
  warning = 'warning'
}

interface BaseAlertProps {
  className?: string;
  message?: string;
  description?: string;
  type?: AlertType;
  closeable?: Boolean;
  onClose?: () => void;
}

const Alert: React.FC<BaseAlertProps> = (props) => {
  const {
    className,
    message,
    description,
    type,
    closeable,
    onClose,
  } = props

  const [hide, setHide] = useState(false)

  const classes = classNames('alert', className, {
    [`alert-${type}`]: type,
    [`alert-${closeable}`]: closeable,
  })

  const handleClose = (e: React.MouseEvent) => {
    if(onClose) {
      onClose()
    }
    setHide(true)
  }

  return (
    <Transition
      in={!hide}
      timeout={600}
      animation="zoom-in-top"
    >
      <div className={classes}>
        <div className="alert-content">
          <div className="alert-content-message">{message}</div>
          <div className="alert-content-description">{description}</div>
        </div>
        { closeable &&
          <button
            className="alert-close-icon"
            onClick={handleClose}
          >
            <Icon icon="times" theme="dark" size="1x"></Icon>
          </button>
        }
      </div>
    </Transition>
  )
}

Alert.defaultProps = {
  type: AlertType.default,
  closeable: false,
}

export default Alert;