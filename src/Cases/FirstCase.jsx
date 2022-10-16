const FirstCase = ({ day, month, year }) => {
  const baseYear = 2020;

  const firstDayOfYear = () => {
    const yearCalculation = (Math.abs(year - baseYear) / 4) % 7;
    if (year >= baseYear) {
      if (yearCalculation === 0) {
        return "wednesday";
      } else if (yearCalculation === 1) {
        return "monday";
      } else if (yearCalculation === 2) {
        return "saturday";
      } else if (yearCalculation === 3) {
        return "thursday";
      } else if (yearCalculation === 4) {
        return "tuesday";
      } else if (yearCalculation === 5) {
        return "sunday";
      } else {
        return "friday";
      }
    } else {
      if (yearCalculation === 0) {
        return "wednesday";
      } else if (yearCalculation === 1) {
        return "friday";
      } else if (yearCalculation === 2) {
        return "sunday";
      } else if (yearCalculation === 3) {
        return "tuesday";
      } else if (yearCalculation === 4) {
        return "thursday";
      } else if (yearCalculation === 5) {
        return "saturday";
      } else {
        return "monday";
      }
    }
  };

  const dayAndMonth = {
    january: 0,
    february: 31,
    march: 60,
    april: 91,
    may: 121,
    june: 152,
    july: 182,
    august: 213,
    september: 244,
    october: 274,
    november: 305,
    december: 335,
  };

  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  const startedDay = firstDayOfYear(year);
  const indexOfStartedDay = days.indexOf(`${startedDay}`);

  const totalDay = Number(dayAndMonth[`${month}`]) + Number(day);
  const plusDay = totalDay % 7;
  const totalIndex = plusDay + indexOfStartedDay - 1;

  if (totalIndex <= 6 && totalIndex > 0) {
    return <h1>{days[totalIndex]}</h1>;
  } else if (totalIndex < 0) {
    return <h1>{days[totalIndex + 7]}</h1>;
  } else {
    return <h1>{days[totalIndex - 7]}</h1>;
  }
};

export default FirstCase;
