class DateGenerator {
  private now: Date
  private year: number
  private month: number
  private day: number
  private hour: number
  private minute: number

  constructor() {
    this.now = new Date()
    this.year = this.now.getFullYear()
    this.month = this.now.getMonth() + 1
    this.day = this.now.getDate()
    this.hour = this.now.getHours()
    this.minute = this.now.getMinutes()
  }

  generate = (): string => {
    const padMonth = this.month.toString().padStart(2, '0')
    const padDay = this.day.toString().padStart(2, '0')
    const padHour = this.hour.toString().padStart(2, '0')
    const padMinute = this.minute.toString().padStart(2, '0')

    return `${this.year}-${padMonth}-${padDay} ${padHour}:${padMinute}`
  }
}

export default DateGenerator
