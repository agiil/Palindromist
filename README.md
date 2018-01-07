# Palindromist
Algorithms and Tools for Palindrome Writers
<a name="ladumisalgoritm"></a>

## ladumisalgoritm(algsona, sonastik, kuvaToorikud)
Leiab ja kuvab kõik samatekstid

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| algsona | <code>string</code> | sõna, millest otsingut alustatakse |
| sonastik | <code>array</code> | massiiv sõnadest, mida samatekstide ehitamisel kasutatakse; sõna on esitatud stringina |
| kuvaToorikud | <code>boolean</code> | kas kuvada ka leitud toorikud, s.t samatekstid, mille otstes või ka keskel võib olla tähenduseta tekstiosi |


* [ladumisalgoritm(algsona, sonastik, kuvaToorikud)](#ladumisalgoritm)
    * [~pahupidi(str)](#ladumisalgoritm..pahupidi) ⇒ <code>string</code>
    * [~taiendaSonaks(tj, sonastik, kustOtsast)](#ladumisalgoritm..taiendaSonaks) ⇒ <code>array</code>
    * [~taiendaSonaksTESTID()](#ladumisalgoritm..taiendaSonaksTESTID)
    * [~kuvaSeis(seis)](#ladumisalgoritm..kuvaSeis)
    * [~kuvaSonastik(sonastik)](#ladumisalgoritm..kuvaSonastik)
    * [~kuvaLeiud(leiud)](#ladumisalgoritm..kuvaLeiud)
    * [~kuvaLeitudSamatekstid(leiud)](#ladumisalgoritm..kuvaLeitudSamatekstid)
    * [~sonaEsineb(s, seis)](#ladumisalgoritm..sonaEsineb) ⇒ <code>boolean</code>
    * [~sonaEsinebTESTID()](#ladumisalgoritm..sonaEsinebTESTID)
    * [~laienda(tase, maxTase, seis)](#ladumisalgoritm..laienda)

<a name="ladumisalgoritm..pahupidi"></a>

### ladumisalgoritm~pahupidi(str) ⇒ <code>string</code>
Tagastab ümberpööratud sõne

**Kind**: inner method of [<code>ladumisalgoritm</code>](#ladumisalgoritm)  
**Returns**: <code>string</code> - ümberpööratud sõne  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | algsõne |

<a name="ladumisalgoritm..taiendaSonaks"></a>

### ladumisalgoritm~taiendaSonaks(tj, sonastik, kustOtsast) ⇒ <code>array</code>
Tagastab massiivi tähejadadest, mis sisendis antud tähejadaga sidurdatult annavad sõnastikus esinevaid sõnu

**Kind**: inner method of [<code>ladumisalgoritm</code>](#ladumisalgoritm)  
**Returns**: <code>array</code> - tähejadad, mis tj-ga sidurdatult annavad sõnastikus esinevaid sõna; tähejada võib olla ka tühi; kui selliseid tähejadu ei leidu, siis tagastatakse tühi massiiv.  

| Param | Type | Description |
| --- | --- | --- |
| tj | <code>string</code> | tähejada |
| sonastik | <code>array</code> | sõnade massiiv |
| kustOtsast | <code>string</code> | 'eest' või 'tagant' |

<a name="ladumisalgoritm..taiendaSonaksTESTID"></a>

### ladumisalgoritm~taiendaSonaksTESTID()
taiendaSonaks testide komplekt

**Kind**: inner method of [<code>ladumisalgoritm</code>](#ladumisalgoritm)  
<a name="ladumisalgoritm..kuvaSeis"></a>

### ladumisalgoritm~kuvaSeis(seis)
Kuvab koostatava samateksti ("seisu")

**Kind**: inner method of [<code>ladumisalgoritm</code>](#ladumisalgoritm)  

| Param | Type |
| --- | --- |
| seis | <code>array</code> | 

<a name="ladumisalgoritm..kuvaSonastik"></a>

### ladumisalgoritm~kuvaSonastik(sonastik)
Kuvab sõnastiku

**Kind**: inner method of [<code>ladumisalgoritm</code>](#ladumisalgoritm)  

| Param | Type |
| --- | --- |
| sonastik | <code>array</code> | 

<a name="ladumisalgoritm..kuvaLeiud"></a>

### ladumisalgoritm~kuvaLeiud(leiud)
Kuvab leitud toorikud (samatekstid, mis võivad sisaldada tähenduseta osi)

**Kind**: inner method of [<code>ladumisalgoritm</code>](#ladumisalgoritm)  

| Param | Type | Description |
| --- | --- | --- |
| leiud | <code>set</code> | leitud toorikute hulk |

<a name="ladumisalgoritm..kuvaLeitudSamatekstid"></a>

### ladumisalgoritm~kuvaLeitudSamatekstid(leiud)
Kuvab leitud samatekstid

**Kind**: inner method of [<code>ladumisalgoritm</code>](#ladumisalgoritm)  

| Param | Type | Description |
| --- | --- | --- |
| leiud | <code>set</code> | leitud toorikute hulk |

<a name="ladumisalgoritm..sonaEsineb"></a>

### ladumisalgoritm~sonaEsineb(s, seis) ⇒ <code>boolean</code>
Kontrollib, kas sõna s esineb
    seisu seis paikapandud osades. See on spetsialiseeritud otsing.

**Kind**: inner method of [<code>ladumisalgoritm</code>](#ladumisalgoritm)  

| Param | Type | Description |
| --- | --- | --- |
| s | <code>string</code> | sõna |
| seis | <code>array</code> | otsitava teksti "seis" |

<a name="ladumisalgoritm..sonaEsinebTESTID"></a>

### ladumisalgoritm~sonaEsinebTESTID()
Testid funktsioonile sonaEsineb.

**Kind**: inner method of [<code>ladumisalgoritm</code>](#ladumisalgoritm)  
<a name="ladumisalgoritm..laienda"></a>

### ladumisalgoritm~laienda(tase, maxTase, seis)
Rekursiivne funktsioon, mis kontrollib läbi "seisu" kõik 4 otsa ja püüab neid laiendada.

**Kind**: inner method of [<code>ladumisalgoritm</code>](#ladumisalgoritm)  

| Param | Type | Description |
| --- | --- | --- |
| tase | <code>number</code> | otsingusügavus; algseisu tase on 0 |
| maxTase | <code>number</code> | maksimaalne otsingusügavus |
| seis | <code>array</code> | otsitava samateksti "seis" |

