import React from 'react';
import { Timezone, timezoneSchema, timezoneLabels } from '@/schemas/timezoneSchema';

interface TimezoneSelectorProps {
  selectedTimezone: Timezone;
  onTimezoneChange: (timezone: Timezone) => void;
}

const TimezoneSelector: React.FC<TimezoneSelectorProps> = ({ 
  selectedTimezone, 
  onTimezoneChange 
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // 選択された値をタイムゾーンスキーマで検証
    const value = e.target.value as Timezone;
    const result = timezoneSchema.safeParse(value);
    
    if (result.success) {
      onTimezoneChange(value);
    } else {
      console.error('無効なタイムゾーンが選択されました:', value);
    }
  };

  return (
    <div className="timezone-selector mb-6">
      <label htmlFor="timezone-select" className="block text-lg font-medium mb-2">
        世界時間の選択:
      </label>
      <select
        id="timezone-select"
        value={selectedTimezone}
        onChange={handleChange}
        className="w-full p-2 border rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
      >
        {Object.entries(timezoneLabels).map(([tz, label]) => (
          <option key={tz} value={tz}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimezoneSelector; 