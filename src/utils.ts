export const ROUTES = {
  HOME: '/'
};

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
