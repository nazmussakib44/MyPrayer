export const getCurrentPrayerInfo = (prayerTimes, currentDate = new Date()) => {
  // Define the order of prayers throughout the day
  const prayerOrder = [
    { name: 'Fajr', time: prayerTimes.Fajr },
    { name: 'Dhuhr', time: prayerTimes.Dhuhr },
    { name: 'Asr', time: prayerTimes.Asr },
    { name: 'Maghrib', time: prayerTimes.Maghrib },
    { name: 'Isha', time: prayerTimes.Isha }
  ];

  // Convert time strings to Date objects for comparison
  const prayersWithDates = prayerOrder.map(prayer => {
    const [hours, minutes] = prayer.time.split(':').map(Number);
    const prayerDate = new Date(currentDate);
    prayerDate.setHours(hours, minutes, 0, 0);
    return { ...prayer, date: prayerDate };
  });

  let currentPrayer = null;
  let nextPrayer = null;
  let isInBufferPeriod = false;

  for (let i = 0; i < prayersWithDates.length; i++) {
    const prayer = prayersWithDates[i];
    const nextInList = prayersWithDates[(i + 1) % prayersWithDates.length];
    
    // Calculate buffer end time (prayer time + 30 minutes)
    const bufferEnd = new Date(prayer.date);
    bufferEnd.setMinutes(bufferEnd.getMinutes() + 30);

    if (currentDate >= prayer.date && currentDate < bufferEnd) {
      // Within 30-minute buffer period after prayer time
      currentPrayer = prayer;
      nextPrayer = nextInList;
      isInBufferPeriod = true;
      break;
    } else if (currentDate >= bufferEnd && currentDate < nextInList.date) {
      // After buffer period but before next prayer
      nextPrayer = nextInList;
      break;
    }
  }

  // Determine which prayer to show
  const displayPrayer = currentPrayer || nextPrayer;
  const status = (currentPrayer && isInBufferPeriod) ? 'now' : 'next';
  const targetTime = (currentPrayer && isInBufferPeriod) ? currentPrayer.date : nextPrayer.date;

  // Calculate remaining time
  let remainingMs = targetTime - currentDate;
  
  // Handle case where we just passed the prayer time
  if (remainingMs < 0) {
    remainingMs = 0;
  }

  const remainingHours = Math.floor(remainingMs / (1000 * 60 * 60));
  const remainingMinutes = Math.floor((remainingMs % (1000 * 60 * 60)) / (1000 * 60));

  // Format remaining time string
  let remainingTime = '';
  if (remainingHours > 0) {
    remainingTime += `${remainingHours}h `;
  }
  remainingTime += `${Math.round(remainingMinutes)}m`;

  return {
    prayer: displayPrayer.name,
    remaining_time: remainingTime,
    status: status,
    is_in_buffer: isInBufferPeriod
  };
};