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
Backenden var implementert på den virtuelle maskinen til IDI og vi brukte mongoDB for databasen og kjørte serveren i express på port 3000 slik at man 
kan nå databasen utenfor NTNUs nett. Først lagde vi en database i neo4j med Apollo, men bestemte oss for å heller bruke MERN stacken, da det var mer 
ressurser ute for bruk av denne. Vi brukte PM2 for å daemonisere index.js filen der express-serveren kjørte, slik at vi slapp å være innlogget i 
Secure Shellen. 

Dataene genererte vi selv ved å bruke AI-genererte kattebilder og en csv-fil med alle addressene for eierne, samt et skript for å generere kattenavn og 
parametre for knappen. 

## Database 
# Datasett:
Datasettet er opprettet i en automatisert prosess ved hjelp av [Faker](https://www.npmjs.com/package/faker), [kartdata](https://kartkatalog.geonorge.no/metadata/matrikkelen-adresse/f7df7a18-b30f-4745-bd64-d0863812350c) og [kattebilder](https://thiscatdoesnotexist.com/). All dataen blir generert av create_dummy_data.ts kjørt en gang som resulterer i filen data.json som ble satt inn i MongoDB manuelt. Kartdataen ble brukt for å generere realistiske adresser som er konsekvente, da faker hadde en tendens til å lage adresser med feil, eks Land: Belgia, By: New York, Gate: Merkurveien. Faker gir også ukonsekvente resultater med navn og kjønn, forsøkt å bruke xfaker til å fikse dette uten hell, kjønnene er derfor ikke konsekvente med navnene. Kattebildene er generert ved hjelp av [those-cats-do-not-exist](https://github.com/theaklair/those-cats-do-not-exist) som lagrer de AI-genererte kattebildene i en mappe.

# MongoDB:
MongoDB er satt opp på VM  ......

Orginalt ønsket vi å bruke GRAND-stack med GraphQL, React, Apollo og Neo4j Database. Vi fikk satt opp Neo4j og interagert med den gjennom Cypher, men resten av implementasjonen viste seg å bli unødvendig komplisert. Neo4j er en grafdatabase, og i teorien ville dette i sammarbeid med GraphQL gitt oss raskere CRUD-operasjoner. Hadde vi hatt mer tid til oppgaven ville vi fortsatt med dette. Vi endte derfor opp med en mer tradisjonell web-stack, MERN (MongoDB, Express, React og Node). MERN er en veldig populær web-stack og har god dokumentasjon samt mange eksempler og ressurser.

# REST:
....

# Express
...


## Design
De fleste UI-komponenter kommer fra [React Bootstrap](https://react-bootstrap.github.io/). Noen komponenter er også hentet fra [Semantic UI](https://react.semantic-ui.com/) der Bootstrap ikke holdt mål. Ved å bruke bootstrap som rammeverk for designet sørger det for et konsekvent og reaktivt design. Faker er benyttet da dette lar oss lett generere modifisert dummy-data raskt og enkelt. Noe custom styling har blitt brukt, hovedsaklig for å forsørge at vi følger en fargepalett. For custom styling har vi benyttet [sass/scss](https://sass-lang.com/) da dette gjør det smertefrit å bruke variabler og velge de elementene vi ønsker å style. I stede for en konvensjonell liste-view har vi gått for en card-view løsning, med argumentet at det i bunn og grunn har akuratt den samme funksjonen som en liste med en fast rekkefølge.

## Testing
For End-2-end testing ble det forsøkt å bruke [Cypress](https://www.cypress.io/). Dette resulterte i en veldig liten og litt uferdig test men grunnet dårlig prioritering av tid rakk dette ikke fullføres.
Det eksisterer også en snapshot test i JEST men denne funker desverre ikke av samme grunn.

For å kjøre testen:
npm install cypress --save-dev
npm run cypress:open

### Kilder:
* [GraphQL](https://www.howtographql.com/graphql-js/0-introduction/)
* [MongoDB Dokumentasjon](https://docs.mongodb.com/manual/)
* [GrpahQL API for MongoDB](https://docs.mongodb.com/realm/graphql/)
* [Kattebilder](https://thiscatdoesnotexist.com/) og [kode for bulk-download av kattebilder](https://github.com/theaklair/those-cats-do-not-exist)
* [Redux Dokumentasjon + tutoritals](https://redux.js.org/)
* [Setup server](https://dev.to/loujaybee/using-create-react-app-with-express)
