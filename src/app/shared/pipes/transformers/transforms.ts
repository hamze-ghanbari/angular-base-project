import moment from "jalali-moment";

export const tomanTransform = (value: number | string): number => Math.floor(+value / 10);

export const seperateNumberTransform = (value: string | number): string => value ? Number(value).toLocaleString() : '';

export const persianNumbersTransform = (value: string): string => {
    return value.replace(/0/g, '۰').replace(/1/g, '۱').replace(/2/g, '۲').replace(/3/g, '۳').replace(/4/g, '۴')
        .replace(/5/g, '۵').replace(/6/g, '۶').replace(/7/g, '۷').replace(/8/g, '۸').replace(/9/g, '۹')
}

export const jalaliTimeTransform = (value: string | Date): string => {
    if (!value || value === '0001-01-01T00:00:00') { return ''; }
    const MomentDate = moment(value);
    if (MomentDate.isBefore('0622-03-22')) {
        return '';
    }
    let result = MomentDate.format('HH:mm:ss');
    if (result === '00:00:00') { result = ''; }
    return result;
}

export const jalaliDateTransform = (value: string | Date): string => {
    if (!value || value === '0001-01-01T00:00:00') { return ''; }
    const MomentDate = moment(value);
    if (MomentDate.isBefore('0622-03-22')) {
        return '';
    }
    return MomentDate.format('jYYYY/jM/jD');
}
