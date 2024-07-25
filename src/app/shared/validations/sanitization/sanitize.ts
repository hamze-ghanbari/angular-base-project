import { scriptRegex } from "../regex/regex";

export function sanitize(value: string): string {
    return value.replace(scriptRegex, "");
}

export function sanitizeFormData<T extends Object>(value: T): T {
    Object.keys(value).forEach((item) => {
        (value as any)[item] = sanitize((value as any)[item]);
    });
    return value;
}
