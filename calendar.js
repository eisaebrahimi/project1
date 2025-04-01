function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function getDaysInMonth(month, year) {
    return [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
}

function generateCalendar(year) {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    let calendar = '';

    for (let month = 0; month < 12; month++) {
        calendar += `\n${months[month]} ${year}\n`;
        calendar += days.join(' ') + '\n';

        let firstDay = new Date(year, month, 1).getDay();
        let daysInMonth = getDaysInMonth(month, year);

        for (let i = 0; i < firstDay; i++) {
            calendar += '    ';
        }

        for (let day = 1; day <= daysInMonth; day++) {
            calendar += (day < 10 ? ' ' + day : day) + '  ';
            if ((day + firstDay) % 7 === 0) {
                calendar += '\n';
            }
        }
        calendar += '\n';
    }

    return calendar;
}

const year = new Date().getFullYear();
console.log(generateCalendar(year));