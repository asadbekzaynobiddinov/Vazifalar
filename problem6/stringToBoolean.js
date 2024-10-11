export const stringToBoolean = (str) => {
    if (str.toLowerCase() === 'true') return true;
    if (str.toLowerCase() === 'false') return false;
    throw new Error('Satr "true" yoki "false" bo\'lishi kerak')
}
