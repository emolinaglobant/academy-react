export function getDifficulty (round) {
  switch (round) {
    case 1:
      return 'easy';
    case 2:
      return 'medium';
    case 3:
      return 'medium';
    case 4:
      return 'medium';
    case 5:
      return 'hard';
  
    default:
      break;
  }
}