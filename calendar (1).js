const jalaali = require('jalaali-js');

function isLeapYear(year) {
    return jalaali.isLeapJalaaliYear(year);
}

function getDaysInMonth(month, year) {
    return jalaali.jalaaliMonthLength(year, month);
}

function generateCalendar(year) {
    const months = [
        'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 
        'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'
    ];
    const days = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'];

    let calendar = '';

    for (let month = 1; month <= 12; month++) {
        calendar += `\n${months[month - 1]} ${year}\n`;
        calendar += days.join(' ') + '\n';

        const firstDay = jalaali.toGregorian(year, month, 1).gd;
        const firstDayOfWeek = new Date(firstDay).getDay();
        const daysInMonth = getDaysInMonth(month, year);

        for (let i = 0; i < firstDayOfWeek; i++) {
            calendar += '    ';
        }

        for (let day = 1; day <= daysInMonth; day++) {
            calendar += (day < 10 ? ' ' + day : day) + '  ';
            if ((day + firstDayOfWeek) % 7 === 0) {
                calendar += '\n';
            }
        }
        calendar += '\n';
    }

    return calendar;
}

const year = jalaali.toJalaali(new Date()).jy;
console.log(generateCalendar(year));