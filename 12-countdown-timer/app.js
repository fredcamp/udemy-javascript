const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const items = deadline.querySelectorAll('h4')

const tempDate = new Date()
const tempYear = tempDate.getFullYear()
const tempMonth = tempDate.getMonth()
const tempDay = tempDate.getDate() + 10
// let futureDate = new Date(2022, 11, 25, 8, 30, 0)

const futureDate = new Date(tempYear, tempMonth, tempDay, 10, 30, 0)

const weekday = weekdays[futureDate.getDay()]
const date = futureDate.getDate()
const month = months[futureDate.getMonth()]
const year = futureDate.getFullYear()
const hours = futureDate.getHours()
const mins = futureDate.getMinutes()

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year}, ${hours}:${mins}am`

// future time in ms
const futureTime = futureDate.getTime()

const format = num => {
  if (num < 10) num = `0${num}`
  return num
}

const getRemainingTime = () => {
  const today = new Date().getTime()
  let t = futureTime - today

  if (t < 0) {
    clearInterval(countdown)
    deadline.innerHTML = `<h4 class"expired">sorry, this giveaway has expired</h4>`
  }

  const oneDay = 1000 * 60 * 60 * 24
  const oneHour = 1000 * 60 * 60
  const oneMin = 1000 * 60
  const oneSec = 1000

  const days = Math.floor(t / oneDay)
  const hours = Math.floor((t % oneDay) / oneHour)
  const mins = Math.floor((t % oneHour) / oneMin)
  const secs = Math.floor((t % oneMin) / oneSec)

  const values = [days, hours, mins, secs]

  items.forEach((item, index) => {
    item.textContent = format(values[index])
  })
}

const countdown = setInterval(getRemainingTime, 1000)

getRemainingTime()
