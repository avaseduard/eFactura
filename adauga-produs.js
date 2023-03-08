// Elemente DOM
const numeArticol = document.querySelector('#input_j_id_x\\:numeArt');
const cantitateFacturata = document.querySelector(
  '#input_j_id_x\\:cantitateFacturata'
);
const unitateDeMasura = document.querySelector('#j_id_x\\:unitateMasuraInner');
const pretNet = document.querySelector('#input_j_id_x\\:pretNet');
const valoareNeta = document.querySelector('#input_j_id_x\\:valoareNeta');
const cotaTva = document.querySelector('#input_j_id_x\\:cotaTVA');
const categorieTva = document.querySelector('#j_id_x\\:categorieTVAInner');

//-- De completat --//
numeArticol.value = 'Codul - Denumirea';
cantitateFacturata.value = 2;
pretNet.value = 123.45;

// Invariabile
unitateDeMasura.value = 'EA';
valoareNeta.value = pretNet.value * cantitateFacturata.value;
cotaTva.value = 19;
categorieTva.value = 'S';
