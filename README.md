[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Algoritmid ja töövahendid samatekstide kirjutajatele

Praegu on repos üks algoritm - `ladumisalgoritm` leiab etteantud sõnastiku ja algsõna abil kõik algsõnast lähtuvad palindroomsed tekstid (samatekstid).

Kasutusnäide. Sisend:

````js
var sonastik = [
  'aa', 'ta', 'va', 'ava', 'tava', 'vaat', 'taat',
  'vaata', 'avata', 'vaatav', 'avatav', 'tavata',
  'vaatava', 'avatava', 'vaatavat', 'avatavat'];
ladumisalgoritm('ava', sonastik, false);
````
Ladumisalgoritm väljastab:

````
Sõnastik: aa ta va ava tava vaat taat vaata avata vaatav avatav tavata vaatava avatava vaatavat avatavat 
ava ... (ava) 
Leitud samatekstid: 
ava ta avata avatavat ... tavata vaatav aa tava 
ava ta avata va ... avatav aa tava 
ava ta avata vaatavat ... tavata avatav aa tava 
ava ta avatava ... avatav aa tava 
ava tavata avatava ... avata vaatava tava 
ava tavata va ... avatava tava 
ava tavata vaat ... ta avatava tava 
ava tavata vaata va ... avata avatava tava 
ava tavata vaata vaat ... ta avata avatava tava 
ava tavata vaatava ... avata avatava tava 
ava tava ... avatava 
````

Piirangud: 1) genereerib ainult tekste, milles iga sõna esineb üks kord; 2) genereeritava teksti pikkus kuni `8` sõna (saab seada).

---

[Koodikirjeldus](docs/Koodikirjeldus.md) (genereeritud [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown) abil).

Testimine. Testifunktsiooni tunnuseks on nimekuju `<testitava f-ni nimi>TESTID`. Testifunktsioonid on eraldi failis.

Kõige olulisemad andmestruktuurid. `seis` on koostatava teksti siseesitus. `seis` kuju on järgmine: `[[o1, p1, o2], [o3, p2, o4]]`, kus
- massiivi kaks elementi esitavad samateksti pooli; ühe poole tekst on teise poole pahupiditekst
- `p1`, `p2` - on paigalolevad tekstiosad 
- `o1`, `o2`, `o3`, `o4` - on nn "otsad" - tekstiosad, mille tähendus pole veel välja selgitatud selgitatud. Otsad võivad olla laiendatavad sõnadeks. Laiendamisega võivad tekkida uued otsad jne.

Näiteks `[['', 'vaata', ''], ['at', '', 'aav']]` esitab koostatava samateksti seisu, kus sõna `vaata` on ümber pööratud ja jagatud kaheks "otsaks" - `at` ja `aav`. Seisu saab laiendada, otsides sõnastikust sobivaid sõnu `at` ja `aav` laiendamiseks täissõnadeks.

