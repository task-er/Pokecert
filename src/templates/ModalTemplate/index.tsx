import React, { ReactElement, useRef } from 'react'
import ITemplates from '../Itemplates'
import './index.scss'

interface ModalTypes extends ITemplates {
  handleClickOutside?: React.MouseEventHandler<HTMLDivElement>
}
const ModalTemplate = ({
  children,
  handleClickOutside,
}: ModalTypes): ReactElement => {
  const outsideRef = useRef(null)

  // eslint-disable-next-line
  const onClickOutside = (e: any) => {
    e.target === outsideRef.current &&
      handleClickOutside &&
      handleClickOutside(e)
  }

  return (
    <div
      className="modal-template-wrapper"
      ref={outsideRef}
      onClick={onClickOutside}
    >
      {children}
    </div>
  )
}

export default ModalTemplate
