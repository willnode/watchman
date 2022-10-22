
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