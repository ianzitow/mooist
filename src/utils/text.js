import moment from 'moment';

export const renderTemperature = (temp) => Math.ceil(temp) + '°';
export const unixToHumanReadable = (unix) => moment.unix(unix).format('DD/MM');
