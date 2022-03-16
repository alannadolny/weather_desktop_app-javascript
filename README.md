# WEATHER APP

## SPIS TREŚCI

- [URUCHOMIENIE PROJEKTU](#uruchomienie-projektu)
- [UŻYTE TECHNOLOGIE / BIBLIOTEKI](#użyte-technologie-/-biblioteki)
- [FUNKCJONALNOŚCI](#funkcjonalności)
- [STATUS PROJEKTU](#status-projektu)
- [ZRZUTY EKRANU](#zrzuty-ekranu)

## URUCHOMIENIE PROJEKTU

Aby uruchomić projekt należy wejść w folder projektu i wpisać poniższe polecenie, w celu zainstalowania zależności

```
yarn install
```

lub

```
npm i
```

Następnie należy wpisać następujące dane w pliku .env.local w folderze projektu

```
BROWSER=none
REACT_APP_API_KEY=(twój klucz do OpenWeather api)
```

Po zainstalowaniu zależności oraz uzupełneniu pliku środowiskowego wystarczy już wpisać

```
npm run dev
```

lub

```
yarn run dev
```

## UŻYTE TECHNOLOGIE / BLIBLOTEKI

- electron
- react (17.0.2)
- axios
- chart.js
- leaflet
- radium
- react-animations
- react-chartjs-2
- react-leaflet
- react-leaflet-custom-control
- react-router-dom

## FUNKCJONALNOŚCI

- Aplikacja poprzez użycie electrona jest aplikacją desktopową
- Użytkownik może wybrać lokację do sprawdzenia pogody poprzez mapę (możliwe przesuwanie pinezki, przybliżanie przyciskami oraz kółkiem myszy)
- Użytkownik zatwierdza wybraną lokację poprzez naciśnięcie dedykowanego przycisku
- Na stronie z pogodą wyświetlają się informację odnośnie pogody w danym miejscu (temperatura, ikona obecnej pogody, ciśnienie, opis pogody, zachmurzenie, wilgotność, prędkość wiatru oraz kierunek wiatru)
- W dolnej części wyświetlany jest wykres z temperaturą zmierzoną w ciągu ostatnich 12h
- Punkty na wykresie przedstawiają pogodę jaka panowała w danym momencie
- W prawym górnym roku znajduje się minimapa z zaznaczonym przez użytkownika punktem, służy ona do powrotu do mapy głównej, gdzie użytkownik ponownie może wybrać lokację

## STATUS PROJEKTU

Projekt został zakończony (16.03.2022)

## ZRZUTY EKRANU

<img src="./img/map.gif"/>
<img src="./img/weather.gif"/>
