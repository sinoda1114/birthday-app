import { z } from 'zod';

// タイムゾーンの列挙型定義
export const timezoneSchema = z.enum([
  'Asia/Tokyo',        // 日本
  'UTC',               // 協定世界時
  'Europe/London',     // イギリス
  'America/New_York',  // 米国東部
  'America/Los_Angeles', // 米国西部
  'Europe/Paris',      // フランス
  'Asia/Shanghai',     // 中国
  'Australia/Sydney',  // オーストラリア
  'Pacific/Auckland',  // ニュージーランド
  'Asia/Singapore',    // シンガポール
  'Asia/Seoul',        // 韓国
]);

// タイムゾーン型の定義
export type Timezone = z.infer<typeof timezoneSchema>;

// タイムゾーン表示名のマッピング
export const timezoneLabels: Record<Timezone, string> = {
  'Asia/Tokyo': '日本時間（東京）',
  'UTC': '協定世界時（UTC）',
  'Europe/London': 'イギリス時間（ロンドン）',
  'America/New_York': '米国東部時間（ニューヨーク）',
  'America/Los_Angeles': '米国西部時間（ロサンゼルス）',
  'Europe/Paris': 'フランス時間（パリ）',
  'Asia/Shanghai': '中国時間（上海）',
  'Australia/Sydney': 'オーストラリア時間（シドニー）',
  'Pacific/Auckland': 'ニュージーランド時間（オークランド）',
  'Asia/Singapore': 'シンガポール時間',
  'Asia/Seoul': '韓国時間（ソウル）',
}; 