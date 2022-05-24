import React, { ReactElement, useEffect, useRef, useState } from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import ReportSection1 from '../blocks/ReportSection1'
import ReportFooter from '../blocks/ReportFooter'
import ReportSection2 from '../blocks/ReportSection2'
import ReportHeader from '../blocks/ReportHeader'

// TODO: FE단에서 canvas로 조립하고 바로 pdf로 적용하는 게 아니면 필요 없음.
// TODO: 그냥 사용해봄.
const DefaultLayout = (): ReactElement => {
  const [doc] = useState<jsPDF>(new jsPDF('p', 'px', [1240, 1754]))
  const paperA4Ref = useRef<HTMLDivElement>(null)
  // const pageRef = useRef(1)

  const savePDF = (): void => {
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

        // setCurrentPage((prev) => prev + 1)
        // const num = document.getElementById('pageNum')
        // if (num) {
        //   num.innerHTML = '02 / 02'
        // }

        // 2페이지
        // doc.addPage()
        doc.addImage(imgData, 60, 120, 1120, 1540)
        doc.save('certification.pdf')
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(savePDF, [])

  return (
    <div
      ref={paperA4Ref}
      style={{ width: '1120px', height: '1540px', position: 'fixed' }}
    >
      <ReportHeader />
      <ReportSection1 />
      <ReportSection2 />
      <ReportFooter />
    </div>
  )
}

export default DefaultLayout
