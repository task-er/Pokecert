import React, { ReactElement, useEffect } from 'react'
import ModalTemplate from '../../templates/ModalTemplate'
import './index.scss'

interface ModalProps {
  isOpen: boolean
  title?: string
  content: string
  onOkText?: string
  onOkEvent?(): void | React.MouseEventHandler<HTMLDivElement>
  onCancelText?: string
  onCancelEvent?(): void | React.MouseEventHandler<HTMLDivElement>
  onClickOutsideEvent?(): void | React.MouseEventHandler<HTMLDivElement>
}
const Modal = ({
  isOpen,
  title = '알림',
  content,
  onOkText = '확인',
  onOkEvent,
  onCancelText = '취소',
  onCancelEvent,
  onClickOutsideEvent,
}: ModalProps): ReactElement => {
  const handleKeyPressEsc = (): void => {
    if (onCancelEvent) {
      onCancelEvent()
    } else if (onOkEvent) {
      onOkEvent()
    }
  }

  const handleKeyPressEnter = (): void => {
    if (onOkEvent) {
      onOkEvent()
    }
  }

  const handleKeyPressEvent = (event: { key: string }): void => {
    switch (event.key) {
      case 'Escape':
        handleKeyPressEsc()
        break
      case 'Enter':
        handleKeyPressEnter()
        break
      default:
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyPressEvent, false)
    } else {
      document.removeEventListener('keydown', handleKeyPressEvent, false)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPressEvent, false)
    }
  }, [isOpen])

  return (
    <ModalTemplate isOpen={isOpen} handleClickOutside={onClickOutsideEvent}>
      <div className="modal-inner-box">
        <h1>{title}</h1>
        <div className="modal-content">{content}</div>
        <div className="modal-button-list">
          {onOkEvent && (
            <input type="button" value={onOkText} onClick={onOkEvent} />
          )}
          {onCancelEvent && (
            <input type="button" value={onCancelText} onClick={onCancelEvent} />
          )}
        </div>
      </div>
    </ModalTemplate>
  )
}

export default Modal
