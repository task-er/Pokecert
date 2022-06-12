import React, { ReactElement, useRef } from 'react'
import ITemplates from '../Itemplates'
import './index.scss'

interface ModalTypes extends ITemplates {
  isOpen: boolean
  handleClickOutside?: React.MouseEventHandler<HTMLDivElement>
}
const ModalTemplate = ({
  children,
  isOpen,
  handleClickOutside,
}: ModalTypes): ReactElement => {
  const outsideRef = useRef(null)

  const onClickOutside: React.MouseEventHandler<HTMLDivElement> = (e) => {
    // eslint-disable-next-line
    e.target === outsideRef.current &&
      handleClickOutside &&
      handleClickOutside(e)
  }

  return (
    <div
      className={`modal-template-wrapper ${isOpen ? 'show' : ''}`}
      ref={outsideRef}
      onClick={onClickOutside}
    >
      {children}
    </div>
  )
}

export default ModalTemplate
