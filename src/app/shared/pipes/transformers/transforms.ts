import { imageRegex } from "@shared/validations/regex/regex";
import moment from "jalali-moment";

export const tomanTransform = (value: number | string): number => Math.floor(+value / 10);

export const seperateNumberTransform = (value: string | number): string => value ? Number(value).toLocaleString() : '';

export const persianNumbersTransform = (value: string): string => {
    return value.replace(/0/g, '۰').replace(/1/g, '۱').replace(/2/g, '۲').replace(/3/g, '۳').replace(/4/g, '۴')
        .replace(/5/g, '۵').replace(/6/g, '۶').replace(/7/g, '۷').replace(/8/g, '۸').replace(/9/g, '۹')
}

export const fileIconTransform = (value: string): string => {
    if (value.toLowerCase() == 'application/pdf') {
      return 'picture_as_pdf';
    } else if (imageRegex.test(value)) {
      return 'image';
    } else {
      return 'insert_drive_file'
    }
  }

export const formatBytesTransform = (bytes: number, decimals = 2): string => {
    if (!+bytes) return '0 Bytes'
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['B', 'KB', 'MB', 'GB']

    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
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
