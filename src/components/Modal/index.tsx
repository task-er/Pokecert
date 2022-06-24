import React, { ReactElement, useCallback, useEffect } from 'react'
import ModalTemplate from '@templates/ModalTemplate'
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
  const handleKeyPressEsc = useCallback((): void => {
    if (onCancelEvent) {
      onCancelEvent()
    } else if (onOkEvent) {
      onOkEvent()
    }
  }, [onCancelEvent, onOkEvent])

  const handleKeyPressEnter = useCallback((): void => {
    if (onOkEvent) {
      onOkEvent()
    }
  }, [onOkEvent])

  const handleKeyPressEvent = useCallback(
    (event: { key: string }): void => {
      switch (event.key) {
        case 'Escape':
          handleKeyPressEsc()
          break
        case 'Enter':
          handleKeyPressEnter()
          break
        default:
      }
    },
    [handleKeyPressEnter, handleKeyPressEsc],
  )

  useEffect((): (() => void) => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyPressEvent, false)
    } else {
      document.removeEventListener('keydown', handleKeyPressEvent, false)
    }

    return (): void => {
      document.removeEventListener('keydown', handleKeyPressEvent, false)
    }
  }, [isOpen])

  return (
    <ModalTemplate isOpen={isOpen} handleClickOutside={onClickOutsideEvent}>
      <div className="modal-inner-box">
        <h1 data-cy="modal_title_message">{title}</h1>
        <div className="modal-content" data-cy="modal_content_message">
          {content}
        </div>
        <div className="modal-button-list">
          {onOkEvent && (
            <input
              type="button"
              value={onOkText}
              onClick={onOkEvent}
              data-cy="modal_ok_button"
            />
          )}
          {onCancelEvent && (
            <input
              type="button"
              value={onCancelText}
              onClick={onCancelEvent}
              data-cy="modal_cancel_button"
            />
          )}
        </div>
      </div>
    </ModalTemplate>
  )
}

export default Modal
