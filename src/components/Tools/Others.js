import moment from "moment";

export const TextRuntime = (runtime) => {
    const duration = moment.duration(runtime, 'minutes');
    return `${duration.hours()}h ${duration.minutes()}min`;
}