Ez az applikáció egy időjárás jelentő app, kiegészítve egy google-maps navigációval.

A "Weather" oldalon tetszőleges városokra tudunk keresni a keresőbox segítségével. Az adott város begépelése után nyomjunk entert, majd látható lesz az adott város időjárása.  (Weather API) 

A szív gomb megnyomásával az adott várost a kedvencekhez adjuk, local storage tárolóban tároljuk azt. Miután tetszőleges várost hozzáadtunk a kedvencekhez, a menüsorban a "Maps" ikonra kattintva átnavigáljuk magunkat a másik oldalra.

A kedvencek listázása gomb megnyomásával megjelenik az összes város, amit az előző oldalon kedveltünk. A város neve melletti PIN-re kattintva, a balra látható térképen egy Marker kerül le oda, ahol az adott város fekszik, illetve a térképünk egyből oda navigál minket. ( geoCode) (react-google-maps)

Kiegészítő funkcióként egy gomb segítségével változtathatjuk az oldal háttérszínét feketére vagy fehérre.
Az olalt értékelni is lehet 5 csillag segítségével, ami a Map fülön a térkép mellett található. (react-star-ratings)
