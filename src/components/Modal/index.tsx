import React, { ReactElement } from 'react'
import ModalTemplate from '../../templates/ModalTemplate'
import './index.scss'

interface ModalProps {
  title?: string
  content: string
  onOkText?: string
  onOkEvent?: React.MouseEventHandler<HTMLDivElement>
  onCancelText?: string
  onCancelEvent?: React.MouseEventHandler<HTMLDivElement>
  onClickOutsideEvent?: React.MouseEventHandler<HTMLDivElement>
}
const Modal = ({
  title = '알림',
  content,
  onOkText = '확인',
  onOkEvent,
  onCancelText = '취소',
  onCancelEvent,
  onClickOutsideEvent,
}: ModalProps): ReactElement => {
  return (
    <ModalTemplate handleClickOutside={onClickOutsideEvent}>
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
