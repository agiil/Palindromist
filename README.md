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

---

[Koodikirjeldus](docs/Koodikirjeldus.md) (genereeritud jsdoc-to-markdown abil)
