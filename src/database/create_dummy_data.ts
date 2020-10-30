// This is a file that was run only once to create the JSON data for the database.
// As such it is only included here for transparancy reasons and is not implemented
// in any other part of the code. There is only one image of a cat included to reduce
// bandwidth when cloning this repo. These were generated using this repo: https://github.com/theaklair/those-cats-do-not-exist
// The code will probably still work but will only generate one entry.

import { randomBytes } from "crypto";

// To check out the result install and run: ts-node create_dummy_data.ts
const fs = require('fs');
// var faker = require('xfaker');
let faker = require('faker');
faker.seed(42);
faker.locale = 'nb_NO'

function generateData(csv_data:string) {
    let entry = []
    let gend:boolean;
    let races = ["Ragdoll", "Persian", "British Horthår", "Norsk Skogkatt", "Sphynx", "Siameser", "Burmeser", "Maine Coon", "Balineser", "Russisk Blå", "Himalayakatt", "Munckin", "Blandingsrase"]

    let cats_folder = fs.readdirSync('src/database/cat_pictures');
    let end = (cats_folder.length)
    // Ensures 50/50 split on genders of cats, and chooses how many entries to be made.
    // Currently limited to 100 as this is the amount of images currently created.
    for (let i = 0; i <= end-1; i++) {
        if (i > (end / 2) ) {
            gend = false;
        } else {
            gend = true;
        }

        // Fake info of the post:
        // Date creations cast to UTC (integer)
        let date_published = (faker.date.recent(200)).toISOString();
        let date_str = date_published.slice(0, 10);
        let year = (date_str.slice(0, 4));
        let month = date_str.slice(5, 7);
        let day = date_str.slice(8, 10);
        // Add new Date() to get the date as date-object.
        let utc_date_published = (Date.UTC(year, month, day));
        // console.log("utc_date_published: " + utc_date_published);
        let loc_data = csv_data.split("\n")
        // Randomized so that not all the locations are from the same muncipality.
        let rand = Math.floor(Math.random() * 967000);
        let location = loc_data[rand].split(",");
        let county_name = location[4];
        let county_code = location[3];
        let street_name = location[1];

        let no_likes = Math.floor(Math.random() * 100)

        // Fake info of the owner:
        let owner_fn = faker.name.firstName();
        let owner_ln = faker.name.lastName();
        let email = faker.internet.email(owner_fn, owner_ln);
        let phone = faker.phone.phoneNumberFormat(2).replace(/\s+/g, '');

        // Fake info of the cat:
        let cat_gend:string;
        if (gend) {
            cat_gend = "male";
        } else {
            cat_gend = "female";
        }

        // Make the names' gender match the cats set gender
        let cat_name = faker.name.firstName(gend ? 1 : 0);
        let date_born = (faker.date.past(12, 0o1-0o1-2020)).toISOString();
        let date_str2 = date_born.slice(0, 10);
        let year2 = (date_str2.slice(0, 4));
        let month2 = date_str2.slice(5, 7);
        let day2 = date_str2.slice(8, 10);
        // Add new Date() to convert to date-object
        let utc_date_born = (Date.UTC(year2, month2, day2));
        // console.log("utc_date_born: " + utc_date_born);

        let image_adress = "http://folk.ntnu.no/aleksamk/cats/"+cats_folder[i];

        // TODO: Maybe add description of the cat
        entry.push({
            "post": {
                "date_published": utc_date_published, // integer UTC-date-time
                "county_code": county_code, // string of county code, eg 3050
                "county_name": county_name, // string of county name
                "street_name": street_name, // string of adress (no number as we want the data to be real, but not too spesific)
                "likes": no_likes
            },
            "owner": {
                "first_name": owner_fn, 
                "last_name": owner_ln,
                "email": email,
                "phone": phone // string as we want to be flexible if we add country codes
            },
            "cat": {
                "cat_name": cat_name,
                "cat_gender": cat_gend, // string, female or male
                "cat_birthdate": utc_date_born, // int
                "cat_img_rel_adr": image_adress,// string of an actual hosted image
                "cat_race": races[Math.floor(Math.random() * 13)]
            }
        });
    }
    return { "data": entry }
}

function readFile() {
    // Data from https://kartkatalog.geonorge.no/metadata/matrikkelen-adresse/f7df7a18-b30f-4745-bd64-d0863812350c
    // The reason for gathering data from an external source instead of using faker was to create actual real-world adresses.
    // Faker does not give adresses that are consistent. The country could be Belgia while the city could be New York.
    // This seemed a bit too silly so instead we use real world data here.
    let file = "src/database/kartdata.csv";
    let final = fs.readFileSync(file, 'utf8')
    return final;
}

let location_data = readFile()
let dataObj = generateData(location_data);
// console.log(JSON.stringify(dataObj));
console.log(dataObj.data);
let json_data = JSON.stringify(dataObj.data);

fs.writeFile('src/database/data.json', json_data, (err:any) => {
    if (err) {
        throw err;
    }
    console.log("JSON data is saved to data.json");
});