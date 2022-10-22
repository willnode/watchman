
/**
 * @param {string} time
 */
export function parseDateFromTime(time) {
    const date = new Date();
    const [hour, minute] = time.split(':');
    date.setHours(parseInt(hour));
    date.setMinutes(parseInt(minute));
    return (Number)(date);
}

/** @param {Date} date */
export function getDateString(date) {
    return date.toLocaleDateString('sv', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
}

/** @param {Date} date */
export function getTimeString(date) {
    return date.toLocaleTimeString('sv', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    });
}

export function getYearProgress(date) {
    const start = (Number)(new Date(date.getFullYear(), 0, 0));
    const diff = date - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const day = diff / oneDay;
    return (day / 365);
}