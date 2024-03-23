import moment from "moment";

export const TextRuntime = (runtime) => {
    const duration = moment.duration(runtime, 'minutes');
    return `${duration.hours()}h ${duration.minutes()}min`;
}

export const getYear = (release_date) => {
    return moment(release_date).format("YYYY")
}