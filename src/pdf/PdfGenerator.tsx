import store from '@redux/config'
import React, { ReactElement } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import DefaultLayout from './layout'

class PdfGenerator {
  private wrapper: HTMLDivElement

  public constructor() {
    this.wrapper = document.createElement('div')
  }

  public download = (): void => {
    this.mountPdfWrapperAtBody()
    this.renderPdfPage()
    this.unmountPdfWrapperAtBody()
  }

  private mountPdfWrapperAtBody = (): void => {
    document.body.appendChild(this.wrapper)
  }

  private renderPdfPage = (): void => {
    const pdf: ReactElement = (
      <Provider store={store}>
        <DefaultLayout />
      </Provider>
    )
    ReactDOM.render(pdf, this.wrapper)
  }

  private unmountPdfWrapperAtBody = (): void => {
    const isUnmounted: boolean = ReactDOM.unmountComponentAtNode(this.wrapper)
    if (isUnmounted && this.wrapper.parentNode) {
      this.wrapper.parentNode.removeChild(this.wrapper)
    }
  }
}

export default PdfGenerator
