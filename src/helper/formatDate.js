import moment from 'moment';

// const formatDate = (duedate,modifiedon) => {
//     // const formattedDueDate = moment(duedate).format('DD/MM/YYYY HH:mm');
//     // const formattedModifiedDate = moment(modifiedon).format('DD/MM/YYYY HH:mm');
//     // // console.log(formattedModifiedDate)
//     // return {formattedDueDate,formattedModifiedDate}

    
// }
const formatDate = (date) =>{
    return moment(date).format('DD/MM/YYYY HH:mm');
}

export default formatDate;
