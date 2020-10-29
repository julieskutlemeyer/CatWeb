"use strict";
// This is a file that was run only once to create the JSON data for the database.
// As such it is only included here for transparancy reasons and is not implemented
// in any other part of the code. There is only one image of a cat included to reduce
// bandwidth when cloning this repo. These were generated using this repo: https://github.com/theaklair/those-cats-do-not-exist
// The code will probably still work but will only generate one entry.
exports.__esModule = true;
// To check out the result install and run: ts-node create_dummy_data.ts
var fs = require('fs');
var faker = require('faker');
faker.seed(42);
faker.locale = 'nb_NO';
function generateData(csv_data) {
    var entry = [];
    var gend;
    var races = ["Ragdoll", "Persian", "British Horthår", "Norsk Skogkatt", "Sphynx", "Siameser", "Burmeser", "Maine Coon", "Balineser", "Russisk Blå", "Himalayakatt", "Munckin", "Blandingsrase"];
    var cats_folder = fs.readdirSync('src/database/cat_pictures');
    var end = (cats_folder.length);
    // Ensures 50/50 split on genders of cats, and chooses how many entries to be made.
    // Currently limited to 100 as this is the amount of images currently created.
    for (var i = 0; i <= end - 1; i++) {
        if (i > (end / 2)) {
            gend = false;
        }
        else {
            gend = true;
        }
        // Fake info of the post:
        // Date creations cast to UTC (integer)
        var date_published = (faker.date.recent(200)).toISOString();
        var date_str = date_published.slice(0, 10);
        var year = (date_str.slice(0, 4));
        var month = date_str.slice(5, 7);
        var day = date_str.slice(8, 10);
        // Add new Date() to get the date as date-object.
        var utc_date_published = (Date.UTC(year, month, day));
        // console.log("utc_date_published: " + utc_date_published);
        var loc_data = csv_data.split("\n");
        // Randomized so that not all the locations are from the same muncipality.
        var rand = Math.floor(Math.random() * 967000);
        var location = loc_data[rand].split(",");
        var county_name = location[4];
        var county_code = location[3];
        var street_name = location[1];
        var no_likes = Math.floor(Math.random() * 100);
        // Fake info of the owner:
        var owner_fn = faker.name.firstName();
        var owner_ln = faker.name.lastName();
        var email = faker.internet.email(owner_fn, owner_ln);
        var phone = faker.phone.phoneNumberFormat(2).replace(/\s+/g, '');
        // Fake info of the cat:
        var cat_gend = void 0;
        if (gend) {
            cat_gend = "male";
        }
        else {
            cat_gend = "female";
        }
        // Make the names' gender match the cats set gender
        var cat_name = faker.name.firstName(gend);
        var date_born = (faker.date.past(12, 1 - 1 - 2020)).toISOString();
        var date_str2 = date_born.slice(0, 10);
        var year2 = (date_str2.slice(0, 4));
        var month2 = date_str2.slice(5, 7);
        var day2 = date_str2.slice(8, 10);
        // Add new Date() to convert to date-object
        var utc_date_born = (Date.UTC(year2, month2, day2));
        // console.log("utc_date_born: " + utc_date_born);
        var image_adress = "http://folk.ntnu.no/aleksamk/cats/" + cats_folder[i];
        // TODO: Maybe add description of the cat
        entry.push({
            "post": {
                "date_published": utc_date_published,
                "county_code": county_code,
                "county_name": county_name,
                "street_name": street_name,
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
                "cat_gender": cat_gend,
                "cat_birthdate": utc_date_born,
                "cat_img_rel_adr": image_adress,
                "cat_race": races[Math.floor(Math.random() * 13)]
            }
        });
    }
    return { "data": entry };
}
function readFile() {
    // Data from https://kartkatalog.geonorge.no/metadata/matrikkelen-adresse/f7df7a18-b30f-4745-bd64-d0863812350c
    // The reason for gathering data from an external source instead of using faker was to create actual real-world adresses.
    // Faker does not give adresses that are consistent. The country could be Belgia while the city could be New York.
    // This seemed a bit too silly so instead we use real world data here.
    var file = "src/database/kartdata.csv";
    var final = fs.readFileSync(file, 'utf8');
    return final;
}
var location_data = readFile();
var dataObj = generateData(location_data);
// console.log(JSON.stringify(dataObj));
console.log(dataObj.data);
var json_data = JSON.stringify(dataObj.data);
fs.writeFile('src/database/data.json', json_data, function (err) {
    if (err) {
        throw err;
    }
    console.log("JSON data is saved to data.json");
});
