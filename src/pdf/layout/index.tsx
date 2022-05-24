import React, { ReactElement, useEffect, useState } from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const DefaultLayout = (): ReactElement => {
  const [doc] = useState<jsPDF>(new jsPDF('p', 'px', [1240, 1754]))

  const savedoc = () => {
    try {
      const input = document.getElementById('af')
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
        doc.addImage(imgData, 60, 120, 1120, 1540)
        doc.save('a.pdf')
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(savedoc, [])

  return (
    <div id="af" style={{ width: '1120px', height: '1540px' }}>
      축하합니다.
    </div>
  )
}

export default DefaultLayout
