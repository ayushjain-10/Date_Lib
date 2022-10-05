const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const daysShort = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

class D {
    _date: Date
    constructor(...args: number[]) {
        // @ts-ignore: Unreachable code error
        this._date = new Date (...args)
    }

    /**
     * If date is 1997, 9, 30, 3, 4, 5, return 1997
     * @param {Number} 
     * @returns {Number} 'return year'
     */ 
    get year(): number {
        return this._date.getFullYear()
    }

    /**
     * If date is 1997, 9, 30, 3, 4, 5, return 97
     * @param {Number} 
     * @returns {Number} 'return the year in short. 1997 => 97'
     */ 
    get yr(): string {
        return this._date.getFullYear().toString().substring(2)
    }

    /**
     * If date is 1997, 9, 30, 3, 4, 5, return 'October'
     * @param {Number} 
     * @returns {String} 'return name of the month.'
     */ 
    get month(): string {
        return months[this._date.getMonth()]
    }

    /**
     * If date is 1997, 9, 30, 3, 4, 5, return 'Oct'
     * @param {Number} 
     * @returns {String} 'return name of the month in short.'
     */ 
    get mon(): string {
        return monthsShort[this._date.getMonth()]
    }

    /**
     * If date is 1997, 9, 30, 3, 4, 5, return 'Thursday'
     * @param {Number} 
     * @returns {String} 'return name of the day.'
     */ 
    get day(): string {
        return days[this._date.getDay()]
    }

    /**
     * If date is 1997, 9, 30, 3, 4, 5, return 'Thur'
     * @param {Number} 
     * @returns {String} 'return name of the day in short.'
     */ 

    get dy(): string {
        return daysShort[this._date.getDay()]
    }

    /**
     * If date is 1997, 9, 30, 3, 4, 5, return '30'
     * @param {Number} 
     * @returns {Number} 'return the number for date.'
     */ 
    get date(): number {
        return this._date.getDate()
    }

    /**
     * If date is 1997, 9, 30, 3, 4, 5, return '3'
     * @param {Number} 
     * @returns {Number} 'return the number for hours.'
     */ 
    get hours(): number {
        return this._date.getHours()
    }

    /**
     * If date is 1997, 9, 30, 3, 4, 5, return '4'
     * @param {Number} 
     * @returns {Number} 'return number for minutes.'
     */ 
    get mins(): number {
        return this._date.getMinutes()
    }

    /**
     * If date is 1997, 9, 30, 3, 4, 5, return '5'
     * @param {Number} 
     * @returns {Number} 'return the number for seconds.'
     */ 
    get secs(): number {
        return this._date.getSeconds()
    }

    /**
     * if there is no input string, return the year, month, and date. Else, return dateComponents + any string that is passed into the function'
     * if format('y/m/d') -> year/month/date , if format('H:I:S') -> paddedhours/ paddedmonths/ padded seconds. 
     * @param {*} mask 
     * @returns {String}'return the formatted input string 
     */

    format(mask= ''): string {
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
                else if (char === '3') {
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

    /**
     * if now === (2022, 8, 7, 3, 4, 5), return now - custom date to state how many days, months, or years are from now on or ago.
     * if new_date == (2022, 9, 7, 3, 4, 5) return The date is 1 month from now on.'
     * @param {Number}
     * @returns {String} 'return a statement that indicates how many days, months, or years are from now on or ago. 
     */
     when(): string {
        const now:Date = new Date()
        const comparedDate: Date = new Date(this._date)
        const ny: number = now.getFullYear()
        const nm: number = now.getMonth()
        const nd: number = now.getDate()
        const cy: number = comparedDate.getFullYear()
        const cm: number = comparedDate.getMonth()
        const cd: number = comparedDate.getDate()

        if (ny === cy) {
            if (cm > nm) { // sep - jan
                if ((cm - nm) > 1) {
                    return(`The date is ${cm - nm} months from now on.`)
                }
                else {
                    return(`The date is ${cm - nm} month from now on.`)
                }
            }
            else if (nm === cm) {
                if (nd > cd) {
                    if ((nd-cd) > 1) {
                        return (`The date is ${nd - cd} days ago.`)
                    }
                    else {
                        return (`The date is ${nd - cd} day ago.`)
                    }
                }
                else if (nd === cd) {
                    return ('Today')
                }
                else {
                    if ((cd-nd) > 1) {
                        return (`The date is ${cd-nd} days from now on.`)
                    }
                    else {
                        return (`The date is ${cd-nd} day from now on.`)
                    }
                }
            }
            else {
                if ((nm-cm) > 1) {
                    return (`The date is ${nm-cm} months ago.`)
                }
                else {
                    return (`The date is ${nm-cm} month ago.`)
                }
            }

        }
        else if (ny < cy) { // done
            if ((cy - ny) > 1){ 
                return (`The date is ${cy-ny} years from now on.`)
            }
            else {
                return (`The date is ${cy-ny} year from now on.`)
            }
        }
        else if (ny > cy ) { // 2022 > 2021
            if ((nm-cm) < 11 && nm !== cm && nm > cm) {
                return(`The date was ${ny-cy} years ${nm-cm} months ago`)
            }
            else if ((nm-cm) < 11 && nm !== cm && cm > nm) {
                return(`The date was ${ny-cy} years ${cm-nm} months ago`)
            }
            else {
                return(`The date was ${ny-cy} year ago`)
            }
        }
     }
        

}

const d = new D(2017, 0, 2, 3, 4, 5)
console.log(d.format())              // 2017 January 02
console.log(d.format('y/m/d'))       // 17/Jan/2
console.log(d.format('H:I:S'))       // 03:04:05
console.log(d.format('h:i:s'))       // 3:4:5
console.log(d.format('Y-M-D h:I:S')) // 2017-January-02 3:04:05 
console.log(d.format('Y-M-D# h:I:S'))
console.log(d.format('-----'))

const d1 = new D(2019, 0, 2, 3, 4, 5)
console.log(d.when()) // 6 months ago
const d2 = new D(2021, 0, 2, 3, 4, 5)
console.log(d2.when()) // 2 years from now on
const d3 = new D(2022, 0, 2, 3, 4, 5)
console.log(d3.when()) // 3 years from now on

module.exports = D