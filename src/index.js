export { default as Calendar } from './calendar';
export { default as CalendarList } from './calendar-list';
export { default as Agenda } from './agenda';

import LocaleConfig from 'xdate';

// support Thai
LocaleConfig.locales['th'] = {
  monthNames: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'],
  monthNamesShort: ['ม.ค.', 'ก.พ.', 'ม.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย', 'ธ.ค.'],
  dayNames: ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์'],
  dayNamesShort: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.']
};
   
LocaleConfig.defaultLocale = 'th';

export { LocaleConfig };