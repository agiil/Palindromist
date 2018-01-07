/**
 * Testid funktsioonile sonaEsineb.
 */
function sonaEsinebTESTID () {
  function sonaEsinebTEST (sona, seis, tulemus) {
    if (sonaEsineb(sona, seis) === tulemus) {
      console.log('OK')
    } else {
      console.log('NOK: ' + sona)
    }
  }

  const seis = [['', 'abi saab iba', ''], ['', 'kes kus mis', '']]
  sonaEsinebTEST('abi', seis, true)
  sonaEsinebTEST('saab', seis, true)
  sonaEsinebTEST('iba', seis, true)
  sonaEsinebTEST('kes', seis, true)
  sonaEsinebTEST('kus', seis, true)
  sonaEsinebTEST('mis', seis, true)
  sonaEsinebTEST('bi', seis, false)
  sonaEsinebTEST('s', seis, false)
}

/**
 * taiendaSonaks testide komplekt
 */
function taiendaSonaksTESTID () {
  console.log('taiendaSonaksTEST')

  function taiendaSonaksTEST (tj, sonastik, kustOtsast, tulemus) {
    if (JSON.stringify(taiendaSonaks(tj, sonastik, kustOtsast)) === JSON.stringify(tulemus)) {
      console.log('OK')
    } else {
      console.log('NOK: ' + tj)
    }
  }

  taiendaSonaksTEST('a', ['abi', 'iba', 'tiba'], 'eest', ['ib', 'tib'])
  taiendaSonaksTEST('bi', ['abi', 'iba', 'alibi'], 'eest', ['a', 'ali'])
  taiendaSonaksTEST('ib', ['abi', 'iba'], 'eest', [])
  taiendaSonaksTEST('ib', ['tibi', 'iba'], 'eest', [])
  taiendaSonaksTEST('ib', ['tibi', 'iba'], 'tagant', ['a'])
  taiendaSonaksTEST('b', ['tibi', 'iba'], 'tagant', [])
  taiendaSonaksTEST('tib', ['tibi', 'iba'], 'tagant', ['i'])
  taiendaSonaksTEST('tibi', ['tibi', 'iba'], 'eest', [])
  taiendaSonaksTEST('iba', ['tibi', 'iba'], 'tagant', [])
}
