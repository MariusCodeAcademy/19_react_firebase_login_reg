## Feedback.jsx

Užduotis: Sukurti React.js komponentą Feedback.jsx, skirtą rodyti pranešimus projekte. Atvaizdavimas turi būti valdomas iš Redux uiSlice.

Reikalavimai:

1. Komponentas turi turėti dinamiškai atnaujinamą pranešimo tekstą ir stilių.
2. Komponentas turi rodyti pranešimą iš Redux uiSlice būsenos msg ir type savybių.
3. Komponentas turi turėti mygtuką arba funkciją, kuri leidžia paslėpti pranešimą.
4. Komponentas turi turėti stiliaus aprašymus, kurie leidžia tinkamai atvaizduoti pranešimo tekstą ir stilių.
5. Komponentas turi būti eksportuojamas kaip atskiras modulis ir gali būti importuojamas ir naudojamas bet kurioje vietoje projekte.
6. Su šiuo komponentu prisiloginant atvaizduoti 'loading', 'success' ir 'error' busenas

Galiausiai, yra daugybė būdų, kaip implementuoti šią užduotį, tačiau būtų naudinga naudoti useSelector ir useDispatch hooks, kad pasiektumėte ir atnaujintumėte Redux uiSlice būseną iš komponento.
