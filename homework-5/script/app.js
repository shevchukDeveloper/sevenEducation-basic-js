"use strict";

const user = {
  name: "Oleg",
  Bitcoin: {
    currency: "Bitcoin",
    logo: "<img src='https://myfin.by/images/cryptoCurrency/btc.png' width='50px' height='50px' alt='Bitcoin'/>",
    price: 40525.5,
    coins: 4,
  },
  Ethereum: {
    currency: "Ethereum",
    logo: "<img src='https://myfin.by/images/cryptoCurrency/eth.png' width='50px' height='50px' alt='Ethereum'/>",
    price: 3005.03,
    coins: 2,
  },
  bZCash: {
    currency: "bZCash",
    logo: "<img src='https://myfin.by/images/cryptoCurrency/zec.png' width='50px' height='50px' alt='bZCash'/>",
    price: 167.48,
    coins: 20,
  },
  show: function (currencyName) {
    const { logo, price, coins, currency } = currencyName;
    document.write(
      `Доброго дня ${user.name}. На вашому рахунку ${currency} ${logo}
       залишок ${coins} монет.
       Якщо сьогодні конвертувати ваш залишок ви отримаете ${price * 32}грн`
    );
  },
};
const { Bitcoin, Ethereum, bZCash } = user;
user.show(Ethereum);
