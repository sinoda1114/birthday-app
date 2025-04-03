import { format, formatInTimeZone } from 'date-fns-tz';
import { Timezone } from '@/schemas/timezoneSchema';

/**
 * 指定されたタイムゾーンの現在時刻を取得する
 * @param timezone タイムゾーン文字列
 * @returns フォーマット済みの時刻文字列
 */
export const getCurrentTimeInTimezone = (timezone: Timezone): string => {
  const now = new Date();
  return formatInTimeZone(now, timezone, 'HH:mm:ss');
};

/**
 * 指定されたタイムゾーンの現在の日付を取得する
 * @param timezone タイムゾーン文字列
 * @returns フォーマット済みの日付文字列
 */
export const getCurrentDateInTimezone = (timezone: Timezone): string => {
  const now = new Date();
  return formatInTimeZone(now, timezone, 'yyyy/MM/dd');
};

/**
 * 指定されたタイムゾーンの曜日を取得する
 * @param timezone タイムゾーン文字列
 * @returns 曜日を表す文字列
 */
export const getDayOfWeekInTimezone = (timezone: Timezone): string => {
  const now = new Date();
  // 'i'を使用して1-7の数値を取得（1が月曜、7が日曜）
  const dayNum = parseInt(formatInTimeZone(now, timezone, 'i'));
  
  // 曜日の配列を月曜始まりに調整
  const days = ['月', '火', '水', '木', '金', '土', '日'];
  return days[(dayNum - 1) % 7];
}; 