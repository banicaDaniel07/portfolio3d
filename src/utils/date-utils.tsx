import { ONE_HOUR } from "./constants";

export const getTimeFromSeconds = (totalSeconds: number) => {
    if (!totalSeconds) return '00:00:00';
    if (totalSeconds === ONE_HOUR) return '01:00:00';
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const result = `0${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    return result
}