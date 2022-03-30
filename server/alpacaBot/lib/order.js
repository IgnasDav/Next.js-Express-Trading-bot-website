const buyMarket = async () => {
  await new Promise((res) => {
    setTimeout(() => {
      res({ price: 10.35 });
    });
  });
};

const sellStop = async () => {
  await new Promise((res) => {
    setTimeout(() => {
      res({ price: 10.35 });
    });
  });
};

const sellLimit = async () => {
  await new Promise((res) => {
    setTimeout(() => {
      res({ price: 10.35 });
    });
  });
};

export { buyMarket, sellStop, sellLimit };
