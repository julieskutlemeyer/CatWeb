# Prosjekt 3

### Find-A-Cat
Find-A-Cat er en nettside der du kan gi bort eller finne katter som gis bort. Databasen er fyllt med dummy-data fra AI-genererte bilder av katter.
Kontaktinformasjonen er tilgjengelig for alle, så vi anbefaler brukeren å ikke bruke en e-mail som de ikke er fortrolig med.

### Kravspesifikasjon
* Søkemulighet
* Listebasert presentasjon
* Dynamisk Scrolling
* Detaljert visning av hvert element
* Mulighet for å filtrere elementer
* Brukergenerert data

### Implementasjon
* PM2 for å kjøre express-serveren som daemon på IT2810


## State-management
 
Vi valgte å ta i bruk React- Redux som hovedstrukturen for state-management i applikasjonen vår.
Redux var godt dokumentert, og state-håndteringen vår har hentet hovedinsiprasjonen sin fra "tutoritals"i dokumentasjonen.
Hoved-logikken i vår applikasjon er en liste med katteobjekter, "cats", som blir oppdatert ved både filtrering, søk og pagination.
Redux er nyttig fordi den kan både hente ut og oppdatere staten til en applikasjon, fra hvilken som helst komponenter i trestrukturen. 
Vi satt derfor kattelisten som en egen state, som ble oppdatert ved både både filtreringskomponent, søkekomponent og pagination. 
For å kunne rendre hver enkelt katt på nettsiden var vi nødt til å bruke .map, som en en array-funksjon som mapper hver enkelt element i arraye, til det som blir returnert.
I dette tilfelle er visning av kattene. 
For å kunne se mer detaljert view av hver enkelt katt brukte vi router. 
Når "view" (link) blir trykket på, endrer route path til "posts/:catId", der "catId" er hver enkelte katts ID.
Denne blir hentet via post._id(som da er en del av returneringen som skjer i .map funksjonen). 
Vi hadde problemer med å få hentet ut hver enkelt parameter fra databasen som egne komponenter (som feks post._id). 
Dette var et TypeScript-problem som vi møtte løse ved å lage interfaces for alle parameterne i databasen vi skulle bruke.
Videre lagde vi en "hoved"-interface, Posts, som inneholdt alle parameterne og deres typer. 
vider ekunne vi mappe med hver enkelt post med type Posts (fra interface). 

## Backend

## Testing

## Design

## Eksterne biblioteker

### Kilder:
* https://www.howtographql.com/graphql-js/0-introduction/
* [MongoDB Dokumentasjon](https://docs.mongodb.com/manual/)
* [GrpahQL API for MongoDB](https://docs.mongodb.com/realm/graphql/)
* [Kattebilder](https://thiscatdoesnotexist.com/) og [kode for bulk-download av kattebilder](https://github.com/theaklair/those-cats-do-not-exist)
* [Redux Dokumentasjon + tutoritals](https://redux.js.org/)