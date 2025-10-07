# Test: Kámen, nůžky, papír

Cílem tohoto zadání je vytvoření jednoduché hry zvané "Kámen, nůžky, papír". Během toho by měli studenti předvést, že rozumí:

- předávání hodnot mezi komponentami
- obsluze událostí
- uchování stavu komponent
- použití hooku useState

## Zadání

Bezprostředním cílem je dokončení aplikace do použitelného stavu. K dispozici máte základní strukturu komponent, css moduly k nim patřící a připojené assety.

Z dokumentace máte povolenou oficiální dokumentaci a své vlastní poznámky v sešitu nebo OneNote.

## Účel komponent

### PlayPage

Je nejzajímavější komponenta. Musí obsahovat prostředky pro zobrazení voleb hráče a počítače včetně definice vhodných datových typů. Dále musí obsahovat prostředky (funkci) pro vyhodnocení vítěze daného kola, to zahrnuje datový typ pro vrácení výsledku.

### ResultPage

Slouží jen pro zobrazení výsledku hry. Musí tedy dostávat obě skóre a musí umět přepnout obrazovku tlačítkem "Cancel".

### Choices

Je jednoduchá komponenta sloužící jako obal pro volby hráče a počítače. Dostává informaci o tom jaký symbol má být vybraný a akci, která slouží pro obsluhu kliknutí na daný symbol v případě hráče. V případě počítače tato vlastnost nebude vůbec použita a tato props je volitelná (např. chooseAction?: (...) => void;). Jinak vykresluje jen tři komponenty Figure, kterým předává vhodná data. V této komponentě jsou odstraněné jen závislosti na datových typech z nadřízených komponent.

### Figure

Obsahuje jeden symbol (kámen, nůžky, papír). Tuto komponentu máte k dispozici celou. Tato komponenta slouží zároveň jako nápověda datových typů z nadřazených komponent. Máte ji k dispozici, protože zpracování toho, že je akce pro kliknutí volitelná, je docela složité a zabere neadekvátně mnoho času.

### Layout

Obalová komponenta obalující prostor herních stránek. Tato komponenta je kontejner a je hotová.

## Screenshoty

Herní obrazovka

![Herní obrazovka](/screenshots/playscreen.png)

Zobrazení výsledků

![Výsledek](/screenshots/resultscreen.png)