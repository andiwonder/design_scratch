var myobj = [
  {
    name: 'Bahraini Dinar',
    conversion: '1 USD = 0.38 BHD'
  },
  {
    name: 'Bitcoin',
    conversion: '1 USD = 0.00011014 BTC'
  },
  {
    name: 'Bitcoin Cash',
    conversion: '1 USD = 0.00074438 BCH'
  },
  {
    name: 'Brazilian Real',
    conversion: '1 USD = 3.50 BRL'
  },
  {
    name: 'Bulgarian Lev',
    conversion: '1 USD = 1.61 BGN'
  },
  {
    name: 'Central African CFA Franc',
    conversion: '1 USD = 538.33 XAF'
  },
  {
    name: 'Central Pacific Franc',
    conversion: '1 USD = 97.93 CFP'
  },
  {
    name: 'Chinese Yuan Renminbi',
    conversion: '1 USD = 6.32 CNY'
  },
  {
    name: 'Croatian Kuna',
    conversion: '1 USD = 6.09 HRK'
  },
  {
    name: 'Cuban Convertible Peso',
    conversion: '1 USD = 1.00 CUC'
  },
  {
    name: 'Czech Koruna',
    conversion: '1 USD = 20.90 CZK'
  },
  {
    name: 'Danish Krone',
    conversion: '1 USD = 6.11 DKK'
  },
  {
    name: 'Dash',
    conversion: '1 USD = 0.00212149 DASH'
  },
  {
    name: 'East Caribbean Dollar',
    conversion: '1 USD = 2.70 XCD'
  },
  {
    name: 'Emirati Dirham',
    conversion: '1 USD = 3.37 AED'
  },
  {
    name: 'Ethereum',
    conversion: '1 USD = 0.00157158 ETH'
  },
  {
    name: 'Euro',
    conversion: '1 USD = 0.82 EUR'
  },
  {
    name: 'Gold (oz)',
    conversion: '1 USD = 0.000755'
  },
  {
    name: 'Great British Pound',
    conversion: '1 USD = 0.72 GBP'
  },
  {
    name: 'Hong Kong Dollar',
    conversion: '1 USD = 7.85 HKD'
  },
  {
    name: 'Hungarian Forint',
    conversion: '1 USD = 257.04 HUF'
  },
  {
    name: 'Indian Rupee',
    conversion: '1 USD = 66.98 INR'
  },
  {
    name: 'Indonesian Rupiah',
    conversion: '1 USD = 13,920.00 IDR'
  },
  {
    name: 'Israeli Shekel',
    conversion: '1 USD = 3.59 ILS'
  },
  {
    name: 'Japanese Yen',
    conversion: '1 USD = 109.18 JPY'
  },
  {
    name: 'Jordanian Dinar',
    conversion: '1 USD = 0.71 JOD'
  },
  {
    name: 'Lebanese Pound',
    conversion: '1 USD = 1,507.50 LBP'
  },
  {
    name: 'Litecoin',
    conversion: '1 USD = 0.00674126 LTC'
  },
  {
    name: 'Malaysian Ringgit',
    conversion: '1 USD = 3.92 MYR'
  },
  {
    name: 'Mexican Peso',
    conversion: '1 USD = 19.06 MXN'
  },
  {
    name: 'Monero',
    conversion: '1 USD = 0.00374911 XMR'
  }
];

{
  /*<div class="w-75 
                          currency-page-display 
                          d-flex flex-row p-2 
                          align-items-start                           
                          border border-secondary">
                <img src="https://fxmapper.com/images/flags/Australia-flag-48.png" alt="">
                <div class="ml-4">
                  <h5>Australion dollar</h5>
                  <h6>1 USD = 1.32 AUD</h6>                
                </div>
              </div>
*/
}

myobj.map(obj => {
  const $div = $('<div />', {
    class: 'my-2 mx-2 w-100 currency-page-display d-flex flex-row p-2 align-items-start'
  });
  const $img = $('<img />', { src: 'https://fxmapper.com/images/flags/Australia-flag-48.png' });
  const $innerdiv = $('<div />', { class: 'ml-4' });
  const $h5 = $('<h5 />').text(obj.name);
  const $h6 = $('<h6 />').text(obj.conversion);
  $innerdiv.append($h5);
  $innerdiv.append($h6);
  $div.append($img);
  $div.append($innerdiv);
  $('#selection-row-1').append($div);
});

myobj.map(obj => {
  const $div = $('<div />', {
    class: 'my-2 mx-2 w-100 currency-page-display d-flex flex-row p-2 align-items-start'
  });
  const $img = $('<img />', { src: 'https://fxmapper.com/images/flags/Australia-flag-48.png' });
  const $innerdiv = $('<div />', { class: 'ml-4' });
  const $h5 = $('<h5 />').text(obj.name);
  const $h6 = $('<h6 />').text(obj.conversion);
  $innerdiv.append($h5);
  $innerdiv.append($h6);
  $div.append($img);
  $div.append($innerdiv);
  $('#selection-row-2').append($div);
});
