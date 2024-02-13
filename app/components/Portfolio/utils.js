function createDateFromMonthYearString(dateString) {
    // Assuming the format is "month, year"
    const [month, year] = dateString.split(',').map(str => str.trim());

    // JavaScript months are 0-indexed, so we subtract 1 from the month
    const dateObject = new Date(`${month} 1, ${year}`);
    
    return dateObject;
}

export default createDateFromMonthYearString;