# Proovitöö Web Expert OÜ

## Ülesanne
1. Kuvada välja nimekiri kasutajatest (kasutada https://jsonplaceholder.typicode.com/users mock datana);
2. Iga kasutaja nime peale klikkides peaks viima kasutaja detailvaatesse ja kuvama kasutajaga seotud info (https://jsonplaceholder.typicode.com/users/1 vastavalt id-le);
3. Nimekirja lisada juurde otsingukast, mis võimaldab otsimist kasutaja nime järgi;
4. lisada juurde uue kasutaja lisamise vorm ja uuendada lisamisel nimekirja;
5. lisada juurde kasutaja kustutamine;
6. lisada juurde kasutaja muutmine.

## Minu mõtted ja tegemised

### Mis ma kasutasin
1. React.js
2. React Router v6
3. localstorage
4. shadcn ui

Algselt mõtlesin kasutada Reduxit aga sain aru, et selle projekti jaoks on see 'overkill'. Lisaks mõtlesin ka kasutada TypeScripti aga samal põhjusel jäin mõtlema, et kuna see pisike projekt siis pole sellel otseselt mõtet.

Kirjutasin lihtsa UserList komponendi kus kuvatakse siis kasutajate list tabelis ja igal kasutajal on action nupp millega saab avada kasutaja profiili (UserProfile). UserProfile komponendis on võimalik kas minna tagasi user listi, editida või kustutada kasutajat.
UserListis on võimalik vajutada "Add user" nuppu mis viib UserProfileAdd komponenti kus on siis võimalik lisada kasutaja andmed ja need salvestada. Sarnaselt toimib ka UserProfileEdit komponent. UserProfileEdit ja UserProfileAdd komponendid oleks saanud teha taaskasutatavaks aga lihtsuse mõttes jätsin nad eraldi.

Lisaks veel API endpointide puhul ma initially salvestan kõik userid localstorageisse ja kui refreshida lehte siis ta võtab alguses localstorageist, kuna mul ei ole API backendi üle kontrolli ja lisa funktsioonide jaoks oli vaja muutmist, lisamist ja kustutamist mida ma muidu ei oleks saanud normaalselt teha.

Puudub ka error handeling.