import type { ClassValue } from 'clsx';

type CombineClassName = (...inputs: ClassValue[]) => string;
type FormatDate = (date: Date) => string;
type ReadingTime = (html: string) => string;
type DateRange = (startDate: Date, endDate?: Date | string) => string;

export type { CombineClassName, FormatDate, ReadingTime, DateRange };
