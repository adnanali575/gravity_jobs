export function hours(hours: number): string {
  let h: number = hours;
  if (h > 12) h = hours - 12;
  if (h < 10) return "0" + h.toString();
  else return h.toString();
}

export function minutes(minutes: number): string {
  if (minutes < 10) return "0" + minutes?.toString();
  else return minutes?.toString();
}

export function period(hours: number): string {
    if (hours > 12) return "PM";
    else return "AM";
  };
