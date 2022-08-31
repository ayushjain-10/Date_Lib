const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const daysShort = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

class D {
	constructor(...args) {
		this._date = new Date(...args)
	}

    get year() {
        return this._date.getFullYear()
      }

    get yr() {
        return this._date.getFullYear().toString().substring(2)
        }
    
    get month() {
        return months[this._date.getMonth()]
      }

    get mon() {
        return monthsShort[this._date.getMonth()]
      }
    
    get day() {
        return days[this._date.getDay()]
      }

    get dy() {
        return daysShort[this._date.getDay()]
     }

    get date() {
        return this._date.getDate()
      }

    
    get hours() {
        return this._date.getHours()
      }

    get mins() {
        return this._date.getMinutes()
      }

    get secs() {
        return this._date.getSeconds()
      }

}

const date = new D('02/11/2003')
console.log(date.date)
console.log(date.yr)
console.log(date.day)