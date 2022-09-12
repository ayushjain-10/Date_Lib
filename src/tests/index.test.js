const D = require('../src/index.js')

const today = new Date ()
const a = new D(today)
const birthday = new Date(1997, 9, 30, 3, 4, 5)
const b = new D(birthday)


test('D.year', () => {
    expect(b.year).toBe( birthday.getFullYear() )
})

test('D.yr', () => {
    expect(b.yr).toBe( 97 )
})

test('D.month', () => {
    expect(b.month).toBe( 'October' )
})

test('D.mon', () => {
    expect(b.mon).toBe( 'Oct' )
})

test('D.day', () => {
    expect(b.day).toBe( 'Thursday' )
})

test('D.dy', () => {
    expect(b.dy).toBe( 'Thur' )
})

test('D.date', () => {
    expect(b.date).toBe( 30 )
})

test('D.hours', () => {
    expect(a.hours).toBe( today.getHours() )
})

test('D.mins', () => {
    expect(a.mins).toBe( today.getMinutes() )
})

test('D.secs', () => {
    expect(a.secs).toBe( today.getSeconds() )
})

test('D.format()', () => {
    expect(b.format()).toBe( '1997 October 30' )
})

test('D.format(y/m/d)', () => {
    expect(b.format('y/m/d')).toBe( '97/Oct/30' )
})

test('D.format(H:I:S)', () => {
    expect(b.format('H:I:S')).toBe( '03:04:05' )
})

test('D.format(h:i:s)', () => {
    expect(b.format('h:i:s')).toBe( '3:4:5' )
})

test('D.format(Y-M-D h:I:S)', () => {
    expect(b.format('Y-M-D h:I:S')).toBe( '1997-October-30 3:04:05' )
})

test('D.format(M #)', () => {
    expect(b.format('M #')).toBe( 'October 30th' )
})

test('D.When(1997, 9, 30, 3, 4, 5)', () => {
    expect(b.when()).toBe( 'The date was 25 years 1 months ago' )
})

test('D.When(2022, 8, 30)', () => {
    const date = new Date(2022, 8, 30)
    const newDate = new D(date)
    expect(newDate.when()).toBe( 'The date is 27 days from now on.' )
})

test('D.When(2022, 8, 1)', () => {
    const date = new Date(2022, 8, 1)
    const newDate = new D(date)
    expect(newDate.when()).toBe( 'The date is 2 days ago.' )
})

test('D.When(2022, 6, 30)', () => {
    const date = new Date(2022, 6, 30)
    const newDate = new D(date)
    expect(newDate.when()).toBe( 'The date is 2 months ago.' )
})
test('D.When(2022, 10, 30)', () => {
    const date = new Date(2022, 10, 30)
    const newDate = new D(date)
    expect(newDate.when()).toBe( 'The date is 2 months from now on.' )
})