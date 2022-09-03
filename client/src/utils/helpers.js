export const currencyFormat = (num = 0) => {
    return '£' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  };
