import React, { useState } from "react";
import classNames from "classnames";

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
          <svg viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
        </button>
      }
    </div>
  )
}

Alert.defaultProps = {
  type: AlertType.default,
  closeable: false,
}

export default Alert;