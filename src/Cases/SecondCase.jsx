const SecondCase = ({ day, month, year }) => {
  const baseYear = 2020;

  const nearestYear = year - (year % 4);
  const plusDay = (year % 4) + 1;

  const firstDayOfYear = (nearestYear) => {
    const yearCalculation = (Math.abs(nearestYear - baseYear) / 4) % 7;
    if (nearestYear >= baseYear) {
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
    march: 59,
    april: 90,
    may: 120,
    june: 151,
    july: 181,
    august: 212,
    september: 243,
    october: 273,
    november: 304,
    december: 334,
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

  const startedDayOfNearestYear = firstDayOfYear(nearestYear);

  const totalIndex = days.indexOf(`${startedDayOfNearestYear}`) + plusDay;

  const innerCase = () => {
    if (totalIndex > 6) {
      return totalIndex - 7;
    } else {
      return totalIndex;
    }
  };

  const plusIndex = (Number(dayAndMonth[`${month}`]) + Number(day)) % 7;

  const IndexOfTotalDay = plusIndex + innerCase(totalIndex) - 1;

  if (IndexOfTotalDay <= 6 && IndexOfTotalDay > 0) {
    return <h1>{days[IndexOfTotalDay]}</h1>;
  } else if (IndexOfTotalDay < 0) {
    return <h1>{days[IndexOfTotalDay + 7]}</h1>;
  } else {
    return <h1>{days[IndexOfTotalDay - 7]}</h1>;
  }
};

export default SecondCase;
