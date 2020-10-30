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

## Database 
# Datasett:
Datasettet er opprettet i en automatisert prosess ved hjelp av [Faker](https://www.npmjs.com/package/faker), [kartdata](https://kartkatalog.geonorge.no/metadata/matrikkelen-adresse/f7df7a18-b30f-4745-bd64-d0863812350c) og [kattebilder](https://thiscatdoesnotexist.com/). All dataen blir generert av create_dummy_data.ts kjørt en gang som resulterer i filen data.json som ble satt inn i MongoDB manuelt. Kartdataen ble brukt for å generere realistiske adresser som er konsekvente, da faker hadde en tendens til å lage adresser med feil, eks Land: Belgia, By: New York, Gate: Merkurveien. Kattebildene er generert ved hjelp av [those-cats-do-not-exist](https://github.com/theaklair/those-cats-do-not-exist) som lagrer de AI-genererte kattebildene i en mappe.

# MongoDB:
MongoDB er satt opp på VM  ......


## Design
De fleste UI-komponenter kommer fra [React Bootstrap](https://react-bootstrap.github.io/). Noen komponenter er også hentet fra [Semantic UI](https://react.semantic-ui.com/) der Bootstrap ikke holdt mål. Ved å bruke bootstrap som rammeverk for designet sørger det for et konsekvent og reaktivt design. Faker er benyttet da dette lar oss lett generere modifisert dummy-data raskt og enkelt. Noe custom styling har blitt brukt, hovedsaklig for å forsørge at vi følger en fargepalett. For custom styling har vi benyttet [sass/scss](https://sass-lang.com/) da dette gjør det smertefrit å bruke variabler og velge de elementene vi ønsker å style. I stede for en konvensjonell liste-view har vi gått for en card-view løsning, med argumentet at det i bunn og grunn har akuratt den samme funksjonen som en liste med en fast rekkefølge.

## Testing


### Kilder:
* https://www.howtographql.com/graphql-js/0-introduction/
* [MongoDB Dokumentasjon](https://docs.mongodb.com/manual/)
* [GrpahQL API for MongoDB](https://docs.mongodb.com/realm/graphql/)
* [Kattebilder](https://thiscatdoesnotexist.com/) og [kode for bulk-download av kattebilder](https://github.com/theaklair/those-cats-do-not-exist)
* [Setup server](https://dev.to/loujaybee/using-create-react-app-with-express)

## Krav til innhold og funksjonalitet

Løsningen skal være en prototyp på en søkbar katalog med frontend hvor brukeren skal kunne formulere et søk og få presentert et søkeresultat, og en backend som gruppa selv har installert og satt opp.

Søkemulighet eks med en dialog/form/søkefelt for input av søk

Listebasert presentasjon av søk hvor det er lagt opp til håndtering av store resultatsett med enten blaing i sider, eller dynamisk laster av flere resultater ved scrolling

Muligheten for å se mer detaljer om hvert av objekten

Mulighet for sortering og filtrering av resultatsettet (merk at sortering og filtrering skal utføres på hele resultatsettet og ikke bare det som tilfeldigvis er laster inn på klienten)

Det skal inngå en eller annen form for brukergenererte data som skal lagres (persistent på databaseserveren) og  presenteres (enten bruker som legger til informasjon, reviews, ratings etc, historikk om søkene eller annet, handleliste).

God design, fornuftige valg og løsninger som harmonerer med typen data dere velger

Database som er installert på virtuell maskin med tilstrekkelig data for å prøve ut prototypen

## Krav til bruk av teknologi

Brukergrensesnitt skal være basert på React og prosjektet skal initialiseres med create-react-app, implementasjon i Typescript

Bruk av state managment enten basert på Redux eller MobX (- eller komponenter som gir samme funksjonalitet)

Egendefinert/utvikler REST API eller GraphQL backend, fritt valg av database på backend, men dere skal benytte en backend som er driftet av gruppa, 

Bruk av gode og relevante komponenter og bibliotek (fritt valg og vi oppfordrer til mest mulig gjenbruk

## Krav til testing og dokumentasjon

Testingen skal dekke forskjellige former for enhetstesting som er aktuelle for å teste en React applikasjon, samt at det skal være en form for automatisert end-2-end testing

Prosjektet dokumenteres med en README.md i git repositoriet.

Dokumentasjonen skal diskutere, forklare og vise til alle de viktigste valgene og løsningene som gruppa gjør (inklusive valg av komponenter og api).

Koden skal være lettlest og godt strukturert og kommentert slik at den er lett å sette seg inn i. Bruk av kommentarer skal være tilpasset at eksterne skal inspisere koden.

Gruppa skal oppsummere den enkeltes bidrag i prosjektet i en egen fil som leveres i BB (dette er personopplysninger som ingen vil at skal ligge på git ;-)

