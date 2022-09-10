// https://www.omnicalculator.com/finance/debt-to-equity

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const debttoequityratioRadio = document.getElementById('debttoequityratioRadio');
const totalliabilitiesRadio = document.getElementById('totalliabilitiesRadio');
const stockholdersequityRadio = document.getElementById('stockholdersequityRadio');

let debttoequityratio;
let totalliabilities = v1;
let stockholdersequity = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

debttoequityratioRadio.addEventListener('click', function() {
  variable1.textContent = 'Total liabilities';
  variable2.textContent = 'Stockholders\' equity';
  totalliabilities = v1;
  stockholdersequity = v2;
  result.textContent = '';
});

totalliabilitiesRadio.addEventListener('click', function() {
  variable1.textContent = 'Debt to equity ratio';
  variable2.textContent = 'Stockholders\' equity';
  debttoequityratio = v1;
  stockholdersequity = v2;
  result.textContent = '';
});

stockholdersequityRadio.addEventListener('click', function() {
  variable1.textContent = 'Debt to equity ratio';
  variable2.textContent = 'Total liabilities';
  debttoequityratio = v1;
  totalliabilities = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(debttoequityratioRadio.checked)
    result.textContent = `Debt to equity ratio = ${computedebttoequityratio().toFixed(2)}`;

  else if(totalliabilitiesRadio.checked)
    result.textContent = `Total liabilities = ${computetotalliabilities().toFixed(2)}`;

  else if(stockholdersequityRadio.checked)
    result.textContent = `Stockholders' equity = ${computestockholdersequity().toFixed(2)}`;
})

// calculation

function computedebttoequityratio() {
  return Number(totalliabilities.value) / Number(stockholdersequity.value);
}

function computetotalliabilities() {
  return Number(debttoequityratio.value) * Number(stockholdersequity.value);
}

function computestockholdersequity() {
  return Number(totalliabilities.value) / Number(debttoequityratio.value);
}