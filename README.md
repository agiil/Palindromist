# Palindromist

Algoritmid ja töövahendid samatekstide kirjutajatele

Praegu pakub ühte algoritmi - `ladumisalgoritm` leiab etteantud sõnastiku ja algsõna abil kõik algsõnast lähtuvad palindroomsed tekstid (samatekstid).

Kasutusnäide. Sisend:

````
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

[Koodikirjeldus](docs/Koodikirjeldus.md) (genereeritud [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown) abil)

Testimine. Testifunktsiooni tunnus on nimekuju `<testitava f-ni nimi>TESTID`. Testid on koodi koosseisus.

Kõige olulisemad andmestruktuurid. `seis` on koostatava teksti siseesitus. Kuju: `[[o1, p1, o2], [o3, p2, o4]]`, kus
- massiivi kaks elementi esitavad samateksti pooli; ühe poole tekst on teise poole pahupiditekst
- `p1`, `p2` - on paigalolevad tekstiosad 
- `o1`, `o2`, `o3`, `o4` - on nn "otsad" - tekstiosad, mille tähendus, s.t kas need on sõnad või on sõnadeks laiendatavad, pole veel selgitatud.

Näiteks `[['', 'vaata', ''], ['at', '', 'aav']]`.
