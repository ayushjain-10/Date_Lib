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

    format(mask= '') {
        let dateStr = ''
        //use for loop to loop over each character in str
        //use if-else conditions to match the characters and append them to dateStr inside for
        //use getter functions to match the characters inside consitions
        // if no match is found then append the original character to dateStr
        for (let i = 0; i < mask.length; i++) {
            if (mask[i] === 'Y') {
                dateStr += this.year
            } else if (mask[i] === 'y') {
                dateStr += this.yr
            } else if (mask[i] === 'm') {
                dateStr += this.mon
            } else if (mask[i] === 'M') {
                dateStr += this.month
            } else if (mask[i] === 'D') {
                dateStr= dateStr + '0' + this.date
            } else if (mask[i] === 'd') {
                dateStr += this.date
            } else if (mask[i] === 'H') {
                dateStr= dateStr + '0' + this.hours
            } else if (mask[i] === 'h') {
                dateStr += this.hours
            } else if (mask[i] === 'I') {
                dateStr= dateStr + '0' + this.mins
            } else if (mask[i] === 'i') {
                dateStr += this.mins
            } else if (mask[i] === 'S') {
                dateStr= dateStr + '0' + this.secs
            } else if (mask[i] === 's') {
                dateStr += this.secs
            } else if (mask[i] === '#') {
                let char = dateStr.charAt(dateStr.length-1)
                if(char === '1'){
                    dateStr += 'st'
                }
                else if(char === '2'){
                    dateStr += 'nd'
                }
                else if (dateStr.char === '3') {
                    dateStr += 'rd'
                }
                else {
                    dateStr += 'th'
                }
            } else {
                dateStr +=mask[i]
            }
        }
        return dateStr
    }

}

const d = new D(2017, 0, 2, 3, 4, 5)
console.log(d.format())              // 2017 January 02
console.log(d.format('y/m/d'))       // 17/Jan/2
console.log(d.format('H:I:S'))       // 03:04:05
console.log(d.format('h:i:s'))       // 3:4:5
console.log(d.format('Y-M-D h:I:S')) // 2017-January-02 3:04:05 
console.log(d.format('Y-M-D# h:I:S'))