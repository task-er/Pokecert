import React, {
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import html2canvas from 'html2canvas'
import JsPDF from 'jspdf'
import ReportSection1 from '@report-blocks/ReportSection1'
import ReportFooter from '@report-blocks/ReportFooter'
import ReportSection2 from '@report-blocks/ReportSection2'
import ReportHeader from '@report-blocks/ReportHeader'

// Note: FE단에서 canvas로 조립하고 바로 pdf로 적용하는 게 아니면 필요 없음.
const DefaultLayout = (): ReactElement => {
  // A4 resolution /4
  const [doc] = useState<JsPDF>(new JsPDF('p', 'px', [620, 879]))
  const paperA4Ref = useRef<HTMLDivElement>(null)

  const savePDF = useCallback((): void => {
    try {
      const input = paperA4Ref.current
      if (!input) throw new Error('err.')

      const area = input.getBoundingClientRect()
      html2canvas(input, {
        allowTaint: true,
        useCORS: true,
        logging: false,
        scale: 1,
        scrollX: 0,
        scrollY: -window.scrollY,
        width: area.width,
        height: area.height,
      }).then(async (canvas) => {
        const imgData = canvas.toDataURL()

        doc.addImage(imgData, 30, 60, 560, 759)
        doc.save('certification.pdf')
      })
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }, [])

  useEffect(savePDF, [])

  return (
    <div
      ref={paperA4Ref}
      style={{ width: '560px', height: '699px', position: 'fixed' }}
    >
      <ReportHeader />
      <ReportSection1 />
      <ReportSection2 />
      <ReportFooter />
    </div>
  )
}

export default DefaultLayout
