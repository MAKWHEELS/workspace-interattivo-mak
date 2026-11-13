/* Spazzole tergi CO.RA. TotalFit sciolte: i 16 codici con il listino CO.RA. del 1/5/2025, a −60%. Prezzi netti IVA esclusa.
   Ogni ordine CO.RA. ha il contributo trasporto del 2,8% (minimo 11,20 €), calcolato in bolla. */
const SCONTO = 0.40; /* −60% sul listino */
const CODICI = [ /* codice, mm, pollici, listino € */
  ["TF300",300,12,11.00],["TF330",330,13,11.00],["TF350",350,14,11.00],["TF380",380,15,11.00],
  ["TF400",400,16,11.00],["TF450",450,18,11.00],["TF480",480,19,11.00],["TF500",500,20,11.00],
  ["TF530",530,21,12.60],["TF550",550,22,12.60],["TF580",580,23,12.60],["TF600",600,24,12.60],
  ["TF650",650,26,12.60],["TF700",700,28,12.60],["TF750",750,30,24.10],["TF800",800,32,26.30]
];
const TRASPORTO = {perc: 2.8, minimo: 11.20};
const netto = c => Math.round(c[3] * SCONTO * 100) / 100;
const euro = n => n.toFixed(2).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " €";
