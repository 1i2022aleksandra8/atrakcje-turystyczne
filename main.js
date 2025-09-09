    const miejscowosc = document.querySelector('#miejscowosc');
    const woj = document.querySelector('#wojewodztwo');
    const tur = document.querySelector('#turystyczna');
    const hist = document.querySelector('#historyczna');
    const roz = document.querySelector('#rozrywka');
    const opis = document.querySelector('#opis');
    const dodaj = document.querySelector('#dodaj');
    const lista = document.querySelector('#lista');

    const atrakcje = [];

    dodaj.addEventListener('click', () => {
      const miejsce = miejscowosc.value.trim();
      const wybraneWoj = woj.value;
      const tekstOpisu = opis.value.trim();
      const typy = [];

      if (tur.checked) typy.push('Turystyczna');
      if (hist.checked) typy.push('Historyczna');
      if (roz.checked) typy.push('Rozrywka');

      if (!miejsce || !wybraneWoj || !tekstOpisu || typy.length === 0) {
        alert('Uzupełnij wszystkie pola i wybierz typ atrakcji.');
        return;
      }

      const atrakcja = {
        miejscowosc: miejsce,
        wojewodztwo: wybraneWoj,
        rodzaje: typy,
        opis: tekstOpisu
      };

      atrakcje.push(atrakcja);
      pokazAtrakcje();
      wyczyscFormularz();
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
      woj.value = '';
      tur.checked = false;
      hist.checked = false;
      roz.checked = false;
      opis.value = '';
    }
