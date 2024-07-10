import { downloadType } from "./download";

export type uploadType =  Pick<downloadType, 'state' | 'progress'>;