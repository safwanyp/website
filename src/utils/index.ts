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
  const startDateObj = new Date(startDate);
  const endDateObj = endDate ? new Date(endDate) : null;

  const startMonth = startDateObj.toLocaleString('default', { month: 'short' });
  const startYear = startDateObj.getFullYear().toString();
  let endMonth;
  let endYear;

  if (endDateObj) {
    if (typeof endDateObj === 'string') {
      endMonth = '';
      endYear = endDateObj;
    } else {
      endMonth = endDateObj.toLocaleString('default', { month: 'short' });
      endYear = endDateObj.getFullYear().toString();
    }
  } else {
    endMonth = 'Present';
    endYear = '';
  }

  return `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
};

export { combineClassNames, formatDate, readingTime, dateRange };
