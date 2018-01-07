/**
 * Leiab ja kuvab kõik samatekstid
 * @param {string} algsona - sõna, millest otsingut alustatakse
 * @param {array} sonastik - massiiv sõnadest, mida samatekstide ehitamisel kasutatakse; sõna on esitatud stringina
 * @param {boolean} kuvaToorikud - kas kuvada ka leitud toorikud, s.t samatekstid, mille otstes või ka keskel võib olla tähenduseta tekstiosi
 */
function ladumisalgoritm(algsona, sonastik, kuvaToorikud) {

  /**
   * Tagastab ümberpööratud sõne
   * @param {string} str - algsõne
   * @returns {string} ümberpööratud sõne
  */
  function pahupidi(str) {
    if (str === undefined) {
      return undefined;
    }
    if (str === null) {
      return null;
    }
    if (str === '') {
      return '';
    }
    return str.split('').reverse().join('');
  }

  /**
   * Tagastab massiivi tähejadadest, mis sisendis antud tähejadaga sidurdatult annavad sõnastikus esinevaid sõnu
   * @param {string} tj - tähejada
   * @param {array} sonastik - sõnade massiiv
   * @param {string} kustOtsast - 'eest' või 'tagant'
   * @returns {array} tähejadad, mis tj-ga sidurdatult annavad sõnastikus esinevaid sõna; tähejada võib olla ka tühi; kui selliseid tähejadu ei leidu, siis tagastatakse tühi massiiv.
  */
  function taiendaSonaks(tj, sonastik, kustOtsast) {
    var tulem = [];
    sonastik.forEach(s => {
      if (s.length >= tj.length) {
        if (kustOtsast == 'eest') {
          if (s.endsWith(tj)) {
            tulem.push(s.substring(0, s.length - tj.length));
          }
        } else if (kustOtsast == 'tagant') {
          if (s.startsWith(tj)) {
            tulem.push(s.substring(tj.length));
          }
        } else {
          console.log('taiendaSonaks: Viga parameetris kustOtsast')
        }
      }
    });
    return tulem;
  }

  /**
   * taiendaSonaks testide komplekt
   */
  function taiendaSonaksTESTID() {
    console.log('taiendaSonaksTEST');

    function taiendaSonaksTEST(tj, sonastik, kustOtsast, tulemus) {
      if (JSON.stringify(taiendaSonaks(tj, sonastik, kustOtsast)) == JSON.stringify(tulemus)) {
        console.log('OK');
      } else {
        console.log('NOK: ' + tj);
      }
    }

    taiendaSonaksTEST('a', ['abi', 'iba', 'tiba'], 'eest', ['ib', 'tib']);
    taiendaSonaksTEST('bi', ['abi', 'iba', 'alibi'], 'eest', ['a', 'ali']);
    taiendaSonaksTEST('ib', ['abi', 'iba'], 'eest', []);
    taiendaSonaksTEST('ib', ['tibi', 'iba'], 'eest', []);
    taiendaSonaksTEST('ib', ['tibi', 'iba'], 'tagant', ['a']);
    taiendaSonaksTEST('b', ['tibi', 'iba'], 'tagant', []);
    taiendaSonaksTEST('tib', ['tibi', 'iba'], 'tagant', ['i']);
    taiendaSonaksTEST('tibi', ['tibi', 'iba'], 'eest', []);
    taiendaSonaksTEST('iba', ['tibi', 'iba'], 'tagant', []);
  }

  /**
   * Kuvab koostatava samateksti ("seisu")
   * @param {array} seis 
   */
  function kuvaSeis(seis) {
    console.log(
      (seis[0][0] == '' ? '' : '(' + seis[0][0] + ') ') +
      seis[0][1] +
      (seis[0][2] == '' ? '' : ' (' + seis[0][2] + ')') +
      ' ... ' +
      (seis[1][0] == '' ? '' : '(' + seis[1][0] + ') ') +
      seis[1][1] +
      (seis[1][2] == '' ? '' : ' (' + seis[1][2] + ')')
    );
  }

  /**
   * Kuvab sõnastiku
   * @param {array} sonastik 
   */
  function kuvaSonastik(sonastik) {
    var s = 'Sõnastik: ';
    sonastik.forEach(sona => {
      s = s + sona + ' ';
    });
    console.log(s);
  }

  /**
   * Kuvab leitud toorikud (samatekstid, mis võivad sisaldada tähenduseta osi)
   * @param {set} leiud - leitud toorikute hulk
   */
  function kuvaLeiud(leiud) {
    for (let leid of leiud) {
      kuvaSeis(JSON.parse(leid));
    };
  }

  /**
   * Kuvab leitud samatekstid
   * @param {set} leiud - leitud toorikute hulk
   */
  function kuvaLeitudSamatekstid(leiud) {
    console.log('Leitud samatekstid: ');
    for (let leid of leiud) {
      const seis = JSON.parse(leid);
      if (
        seis[0][0] === '' && seis[0][2] === '' &&
        seis[1][0] === '' && seis[1][2] === '') {
        kuvaSeis(JSON.parse(leid));
      }
    };
  }

  /**
   * Kontrollib, kas sõna s esineb
    seisu seis paikapandud osades. See on spetsialiseeritud otsing.
    @param {string} s - sõna
    @param {array} seis - otsitava teksti "seis"
    @return {boolean}
   */
  function sonaEsineb(sona, seis) {
    return (
      seis[0][1] === sona ||
      seis[0][1].startsWith(sona + ' ') ||
      seis[0][1].endsWith(' ' + sona) ||
      seis[0][1].includes(' ' + sona + ' ') ||
      seis[1][1] === sona ||
      seis[1][1].startsWith(sona + ' ') ||
      seis[1][1].endsWith(' ' + sona) ||
      seis[1][1].includes(' ' + sona + ' ')
    ); 
  }

  /**
   * Testid funktsioonile sonaEsineb.
   */
  function sonaEsinebTESTID() {

    function sonaEsinebTEST(sona, seis, tulemus) {
      if (sonaEsineb(sona, seis) === tulemus) {
        console.log('OK');
      } else {
        console.log('NOK: ' + sona);
      }
    }

    const seis = [['', 'abi saab iba', ''], ['', 'kes kus mis', '']];
    sonaEsinebTEST('abi', seis, true);
    sonaEsinebTEST('saab', seis, true);
    sonaEsinebTEST('iba', seis, true);
    sonaEsinebTEST('kes', seis, true);
    sonaEsinebTEST('kus', seis, true);
    sonaEsinebTEST('mis', seis, true);
    sonaEsinebTEST('bi', seis, false);
    sonaEsinebTEST('s', seis, false);
  }

  /**
   * Rekursiivne funktsioon, mis kontrollib läbi "seisu" kõik 4 otsa ja püüab neid laiendada.
   * @param {number} tase - otsingusügavus; algseisu tase on 0
   * @param {number} maxTase - maksimaalne otsingusügavus
   * @param {array} seis - otsitava samateksti "seis" 
  */
  function laienda(tase, maxTase, seis, sonastik) {
    if (seis[0][0] !== '') {
      // Leia täiendused sõnaks
      var taiendused = taiendaSonaks(seis[0][0], sonastik, 'eest');
      taiendused.forEach(t => {
        // Täienda seisu, kuid sõna ei tohi kaks korda esineda
        if (sonaEsineb(t + seis[0][0], seis)) {
          return;
        }
        var uusSeis = [];
        /* Lisa leitud sõna paigasolevale osale, tee uuritud ots
          tühjaks ja lisa täienduse pöörd vastasotsa 
        */
        uusSeis.push(['', t + seis[0][0] + ' ' + seis[0][1], seis[0][2]]);
        uusSeis.push([seis[1][0], seis[1][1], pahupidi(t)]);
        leiud.add(JSON.stringify(uusSeis));
        if (tase < maxTase) {
          laienda(tase + 1, maxTase, uusSeis, sonastik);
        }
      });
    }
    if (seis[0][2] !== '') {
      // Leia täiendused sõnaks
      var taiendused = taiendaSonaks(seis[0][2], sonastik, 'tagant');
      taiendused.forEach(t => {
        // Täienda seisu, kuid sõna ei tohi kaks korda esineda
        if (sonaEsineb(seis[0][2] + t, seis)) {
          return;
        }
        var uusSeis = [];
        /* Lisa leitud sõna paigasolevale osale, tee uuritud ots
          tühjaks ja lisa täienduse pöörd vastasotsa 
        */
        uusSeis.push([seis[0][0], seis[0][1] + ' ' + seis[0][2] + t, '']);
        uusSeis.push([pahupidi(t), seis[1][1], seis[1][2]]);
        leiud.add(JSON.stringify(uusSeis));
        if (tase < maxTase) {
          laienda(tase + 1, maxTase, uusSeis, sonastik);
        }
      });
    }
    if (seis[1][0] !== '') {
      // Leia täiendused sõnaks
      var taiendused = taiendaSonaks(seis[1][0], sonastik, 'eest');
      taiendused.forEach(t => {
        // Täienda seisu, kuid sõna ei tohi kaks korda esineda
        if (sonaEsineb(t + seis[1][0], seis)) {
          return;
        }
        var uusSeis = [];
        /* Lisa leitud sõna paigasolevale osale, tee uuritud ots
          tühjaks ja lisa täienduse pöörd vastasotsa 
        */
        uusSeis.push([seis[0][0], seis[0][1], pahupidi(t)]);
        uusSeis.push(['', t + seis[1][0] + ' ' + seis[1][1], seis[1][2]]);
        leiud.add(JSON.stringify(uusSeis));
        if (tase < maxTase) {
          laienda(tase + 1, maxTase, uusSeis, sonastik);
        }
      });
    }
    if (seis[1][2] !== '') {
      // Leia täiendused sõnaks
      var taiendused = taiendaSonaks(seis[1][2], sonastik, 'tagant');
      taiendused.forEach(t => {
        // Täienda seisu, kuid sõna ei tohi kaks korda esineda
        if (sonaEsineb(seis[1][2] + t, seis)) {
          return;
        }
        var uusSeis = [];
        /* Lisa leitud sõna paigasolevale osale, tee uuritud ots
          tühjaks ja lisa täienduse pöörd vastasotsa 
        */
        uusSeis.push([pahupidi(t), seis[0][1], seis[0][2]]);
        uusSeis.push([seis[1][0], seis[1][1] + ' ' + seis[1][2] + t, '']);
        leiud.add(JSON.stringify(uusSeis));
        if (tase < maxTase) {
          laienda(tase + 1, maxTase, uusSeis, sonastik);
        }
      });
    }
  }

  var seis = [['', algsona, ''], [pahupidi(algsona), '', '']];
  var leiud = new Set();
  
  kuvaSonastik(sonastik);
  kuvaSeis(seis);
  laienda(0, 7, seis, sonastik);
  if (kuvaToorikud) {
    kuvaLeiud(leiud);
  }
  kuvaLeitudSamatekstid(leiud);
}

var sonastik = [
  'aa', 'ta', 'va', 'ava', 'tava', 'vaat', 'taat',
  'vaata', 'avata', 'vaatav', 'avatav', 'tavata',
  'vaatava', 'avatava', 'vaatavat', 'avatavat'];
ladumisalgoritm('ava', sonastik, false);
  
