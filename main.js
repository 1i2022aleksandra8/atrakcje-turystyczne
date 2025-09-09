const miejscowosc = document.querySelector('#miejscowosc');
const wojewodztwo = document.querySelector('#wojewodztwo');
const turystyczna = document.querySelector('#turystyczna');
const historyczna = document.querySelector('#historyczna');
const rozrywka = document.querySelector('#rozrywka');
const opis = document.querySelector('#opis');
const dodaj = document.querySelector('#dodaj');
const wyczysc = document.querySelector('#wyczysc');
const lista = document.querySelector('#lista');

let atrakcje = [];

dodaj.addEventListener('click', () => {
  const miejsce = miejscowosc.value.trim();
  const woj = wojewodztwo.value;
  const opisTekst = opis.value.trim();
  const typy = [];

  if (turystyczna.checked) typy.push('Turystyczna');
  if (historyczna.checked) typy.push('Historyczna');
  if (rozrywka.checked) typy.push('Rozrywka');

  if (!miejsce) {
    alert('Wpisz miejscowość lub region.');
    return;
  }

  if (!woj || !opisTekst || typy.length === 0) {
    alert('Uzupełnij wszystkie pola i wybierz przynajmniej jeden typ atrakcji.');
    return;
  }

  const atrakcja = {
    miejscowosc: miejsce,
    wojewodztwo: woj,
    rodzaje: typy,
    opis: opisTekst
  };

  atrakcje.push(atrakcja);
  pokazAtrakcje();
  wyczyscFormularz();
});

wyczysc.addEventListener('click', () => {
  atrakcje = [];
  lista.innerHTML = '';
});

function pokazAtrakcje() {
  lista.innerHTML = '';
  atrakcje.forEach((a, i) => {
    const div = document.createElement('div');
    div.className = 'attraction-item';
    div.innerHTML = `<strong>${i + 1}. Miejscowość:</strong> ${a.miejscowosc}<br>
                     <strong>Województwo:</strong> ${a.wojewodztwo}<br>
                     <strong>Rodzaj:</strong> ${a.rodzaje.join(', ')}<br>
                     <strong>Opis:</strong> ${a.opis}`;
    lista.appendChild(div);
  });
}

function wyczyscFormularz() {
  miejscowosc.value = '';
  wojewodztwo.value = '';
  turystyczna.checked = false;
  historyczna.checked = false;
  rozrywka.checked = false;
  opis.value = '';
}



