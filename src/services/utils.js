
const getMonth = (monthNum) => {
    if (monthNum === 1) {
        return "January";
    }
    if (monthNum === 2) {
        return "February";
    }
    if (monthNum === 3) {
        return "March";
    }
    if (monthNum === 4) {
        return "April";
    }
    if (monthNum === 5) {
        return "May";
    }
    if (monthNum === 6) {
        return "June";
    }
    if (monthNum === 7) {
        return "July";
    }
    if (monthNum === 8) {
        return "August";
    }
    if (monthNum === 9) {
        return "September";
    }
    if (monthNum === 10) {
        return "October";
    }
    if (monthNum === 11) {
        return "November";
    }
    if (monthNum === 12) {
        return "December";
    }
}

const getDateAsString = (dateNum) => {
    if(dateNum == 1){
        return "1st";
    }
    if(dateNum == 2){
        return "2nd";
    }
    if(dateNum == 3){
        return "3rd";
    }
    if(dateNum == 21){
        return "21st";
    }
    if(dateNum == 22){
        return "22nd";
    }
    if(dateNum == 23){
        return "23rd";
    }
    if(dateNum == 31){
        return "31st";
    }
    return dateNum.toString() + 'th';
}

export const getDate = (newDate) => {
    if(newDate.toLowerCase() === "currently"){
        return "Currently";
    }
    else{
        let newDateChars = newDate.split("/");
        let date = getDateAsString(parseInt(newDateChars[0]));
        let month = getMonth(parseInt(newDateChars[1]));
        let year = newDateChars[2];
        return date + " " + month + " " + year;
    }
}