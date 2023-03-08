const initialDate = new Date().toLocaleDateString('ro-RO');
console.log(initialDate);

const date = new Date();
date.setDate(date.getDate() + 33);
const payDate = date.toLocaleDateString('ro-RO');
console.log(payDate);