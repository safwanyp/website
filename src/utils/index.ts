import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type {
  CombineClassName,
  DateRange,
  FormatDate,
  ReadingTime
} from './types';

const combineClassNames: CombineClassName = (...inputs) => {
  return twMerge(clsx(inputs));
};

const formatDate: FormatDate = (date) => {
  return Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  }).format(date);
};

const readingTime: ReadingTime = (html) => {
  const textOnly = html.replace(/<[^>]+>/g, '');
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = (wordCount / 200 + 1).toFixed();
  return `${readingTimeMinutes} min read`;
};

const dateRange: DateRange = (startDate, endDate) => {
  const startMonth = startDate.toLocaleString('default', { month: 'short' });
  const startYear = startDate.getFullYear().toString();
  let endMonth;
  let endYear;

  if (endDate) {
    if (typeof endDate === 'string') {
      endMonth = '';
      endYear = endDate;
    } else {
      endMonth = endDate.toLocaleString('default', { month: 'short' });
      endYear = endDate.getFullYear().toString();
    }
  }

  return `${startMonth}${startYear} - ${endMonth}${endYear}`;
};

export { combineClassNames, formatDate, readingTime, dateRange };
