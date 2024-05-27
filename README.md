# Tutorijal:

Node Modules koji nedostaju u projektu: https://drive.google.com/file/d/1N3FwVvdfOKjXnToF-4Dgfgdi0l_-KqHZ/view?usp=drive_link

Snimak: https://www.youtube.com/watch?v=38xaSWEEwhw

Angular CLI: https://v17.angular.io/cli

JSON to TypeScript: https://transform.tools/json-to-typescript

json-server: https://www.npmjs.com/package/json-server

Bootstrap: https://getbootstrap.com/docs/5.3/getting-started/introduction/

**Komande:**

1. Prvo proveriti da li je instaliran angular, ako nije otvorite cmd i unesite ovu komandu: **npm install -g @angular/cli@17**
2. Kreira se folder na desktopu, pa u cmd unesete lokaciju do tog foldera, npr: **cd C:\Users\lazar\OneDrive\Desktop\ssa**
3. Kreira se projekat: **ng new ssa** i bira **CSS**
4. Zatim komande **cd ssa** pa **code .** kako bi otvorili VS
5. Nakon kreiranja model klase u okviru projekta, pokrece se json server komandom: **npm install json-server** i zatim komanda **npx json-server db.json** (potrebno je da db.json fajl bude kreiran u okviru projekta a ne u src folderu ili gde vec)
6. Zatim pokrenuti terminal u okviru VS, i sledecu komandu: **ng g s services/product**, pa nakon sredjivanja product service klase, pokrece se komanda za kreiranje komponenti: **ng g c components/product**
7. Nakon postavljanja rute, komandom **ng serve --open** pokrecemo server i pristupamo putem url-a: http://localhost:4200/, http://localhost:4200/products da vidimo proizvode
8. U okviru novog command prompta potrebno je pokrenuti sledecu komandu za kreiranje komponenti detalja: **ng g c components/detalji**
9. Ne gasiti command prompt dok je aktivan server!

Klase koje se menjaju:

1. Index.html -> ubacuje se link i skripta ka bootstrapu
2. app.routes.ts -> ruta ka detaljima i proizvodima
3. db.json
4. Model klasa
5. services - product.service.ts -> getAll, getById i URL
6. components - detalji i product -> detalji.component.ts, detalji.component.html i product.component.ts, product.component.html 
