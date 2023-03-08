// Elemente DOM
const cumparator = document.querySelector('#input_j_id_u\\:numeCump');
const stradaFactura = document.querySelector('#input_j_id_u\\:stradaCump');
const codPostalFactura = document.querySelector(
  '#input_j_id_u\\:codPostalCump'
);
const localitateFactura = document.querySelector(
  '#input_j_id_u\\:localitateCump'
);
const codTaraFactura = document.querySelector('#j_id_u\\:codTaraCumpInner');
const subdiviziuneFactura = document.querySelector(
  '#input_j_id_u\\:subdivCump'
);
const codFiscal = document.querySelector('#input_j_id_u\\:identificatorCump');
const stradaLivrare = document.querySelector('#input_j_id_u\\:stradaLivrare');
const codPostalLivrare = document.querySelector(
  '#input_j_id_u\\:codPostalLivrare'
);
const localitateLivrare = document.querySelector(
  '#input_j_id_u\\:localitateLivrare'
);
const codTaraLivrare = document.querySelector('#j_id_u\\:codTaraLivrareInner');
const subdiviziuneLivrare = document.querySelector(
  '#input_j_id_u\\:subdivLivrare'
);
const persoanaContact = document.querySelector(
  '#input_j_id_u\\:numeContactCump'
);
const telefonContact = document.querySelector('#input_j_id_u\\:telefonCump');
const emailContact = document.querySelector('#input_j_id_u\\:emailCump');

//-- De completat --//
cumparator.value = 'Client srl';
stradaFactura.value = 'Al. Avion nr. 10';
codPostalFactura.value = '810052';
localitateFactura.value = 'Brasov';
subdiviziuneFactura.value = 'RO-BV';
codFiscal.value = '1234567';
persoanaContact.value = 'Popescu Ion';
telefonContact.value = '072000000';
emailContact.value = 'email@network.ro';

// Optionale
stradaLivrare.value = stradaFactura.value;
codPostalLivrare.value = codPostalFactura.value;
localitateLivrare.value = localitateFactura.value;
subdiviziuneLivrare.value = subdiviziuneFactura.value;

// Invariabile
codTaraFactura.value = 'RO';
codTaraLivrare.value = codTaraFactura.value;
