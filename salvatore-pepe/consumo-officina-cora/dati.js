/* Consumo d'officina CO.RA.: prodotti di uso quotidiano da riordinare insieme ai tergi.
   Listino CO.RA. del 1/5/2026, prezzi al 12/11/2026, netti IVA esclusa. Contributo trasporto CO.RA. 2,8% (minimo 11,20 €).
   Il kit auto pulita va a multipli di 50; gli altri prodotti si ordinano a pezzo. */
const AGGIORNATO = "12/11/2026";
const PRODOTTI = [ /* id, nome, descrizione, foto, unità, sconto, passo (multiplo d'ordine, se manca 1), varianti: [codice, etichetta, listino, netto] */
  {id: "kit", nome: "Kit auto pulita", desc: "5 protezioni monouso: sedile, volante, pomello, tappetino, leva del freno a mano.",
   foto: "kit-volante", unita: "kit", sconto: 46, passo: 50, varianti: [["000120869", "", 1.80, 0.97]]},
  {id: "karbon", nome: "Guanti nitrile Karbon", desc: "Box da 100, neri.", foto: "50nk-m", unita: "box", sconto: 50,
   varianti: [["50NK-S", "S", 8.80, 4.40], ["50NK-M", "M", 8.80, 4.40], ["50NK-L", "L", 8.80, 4.40], ["50NK-XL", "XL", 8.80, 4.40]]},
  {id: "onyx", nome: "Guanti nitrile Onyx", desc: "Box da 100, neri, i più economici.", foto: "35nk-m", unita: "box", sconto: 50,
   varianti: [["35NK-M", "M", 6.90, 3.45], ["35NK-XL", "XL", 6.90, 3.45]]},
  {id: "dynamite", nome: "Guanti nitrile Dynamite", desc: "Box da 100, blu, spessi, per i lavori pesanti.", foto: "72nb-m", unita: "box", sconto: 50,
   varianti: [["72NB-S", "S", 14.60, 7.30], ["72NB-M", "M", 14.60, 7.30], ["72NB-L", "L", 14.60, 7.30]]},
  {id: "pasta", nome: "Pasta lavamani Sigill", desc: "Barattolo da 900 mL, per meccanici.", foto: "000308280", unita: "pezzo", sconto: 50,
   varianti: [["000308280", "", 6.30, 3.15]]},
  {id: "freni", nome: "Pulitore freni Sigill Jet", desc: "Spray da 500 mL, freni e frizioni.", foto: "000304329", unita: "pezzo", sconto: 50,
   varianti: [["000304329", "", 10.40, 5.20]]},
  {id: "sblocca", nome: "Sbloccante Sigill Ultra Sblock", desc: "Spray da 400 mL.", foto: "000304238", unita: "pezzo", sconto: 50,
   varianti: [["000304238", "", 12.60, 6.30]]},
  {id: "grasso", nome: "Grasso spray Sigill", desc: "Spray da 400 mL.", foto: "000304242", unita: "pezzo", sconto: 50,
   varianti: [["000304242", "", 11.40, 5.70]]},
  {id: "wd40", nome: "WD-40 Professionale", desc: "Cartone da 6 bombolette da 400 mL, doppio spray.", foto: "391057", unita: "cartone", sconto: 46,
   varianti: [["391057", "", 78.00, 42.12]]},
  {id: "carta", nome: "Bobine carta Papernet", desc: "Cartone da 2 bobine in pura cellulosa microgoffrata, 848 strappi.", foto: "404260", unita: "cartone", sconto: 46,
   varianti: [["404260", "", 34.00, 18.36]]}
];
const TRASPORTO = {perc: 2.8, minimo: 11.20};
const euro = n => n.toFixed(2).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " €";
