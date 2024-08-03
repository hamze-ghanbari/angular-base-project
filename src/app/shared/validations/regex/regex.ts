export const phoneRegex = /^[0]{1}[9]{1}[0-9]{9}$/;

export const jalaliDateRegex = /^[0-9]{4}\/[0-9]{1,2}\/[0-9]{1,2}$/;

export const jalaliTimeRegex = /^[0-9]{2}\:[0-9]{2}\:[0-9]{2}$/;

export const numberRegex = /^\d*\.?\d*$/;

export const faAlphaRegex = /^[ضصثقفغعهخحجچشسیبلاتنمکگپظطزرذدئوِِّژؤيةإأءًٌٍَُِّۀآ ?><;,{}[\]\-_+=!@#$%\^&*|']*$/;

export const enAlphaRegex = /^[a-zA-Z ?><;,{}[\]\-_+=!@#$%\^&*|']*$/i;

export const scriptRegex = /<[\b]?[^>]*>[\s\S]*?<\/[\b]?[^>]*>/ig;

export const imageRegex = /\/(jpe?g|tiff?|png|webp|bmp)$/i;

export const wordRegex = /\.docx$/i;