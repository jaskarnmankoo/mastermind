export const ROUTES = {
  HOME: '/'
};

/** Determines the color to show on a hint */
export const determineHintColor = (hint: number): string => {
  switch (hint) {
    case 0:
      return '';
    case 1:
      return 'bg-yellow-400';
    case 2:
      return 'bg-green-600';
    default:
      return '';
  }
};

/** Returns a random Int lower than max */
export const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * max);
};
