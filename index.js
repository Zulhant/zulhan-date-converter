exports.dateConverter = function(datedata) {
  let monthArray = ['','Januari','Pebruari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']
  let dateNow = new Date(datedata)
  let date = dateNow.getDate()
  let month = dateNow.getMonth()
  let year = dateNow.getFullYear()
  let time = dateNow.getHours()
  let minute = dateNow.getMinutes()

  let getDate = date > 9 ? date : `0${date}`
  let gettime = time > 9 ? time : `0${time}`
  let getminute = minute > 9 ? minute : `0${minute}`

  return `${getDate} ${monthArray[month]} ${year} ${gettime}.${getminute}`
}
