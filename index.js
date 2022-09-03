var xlsx = require("xlsx");
var wb = xlsx.readFile("Contact_Rikai_None_IT_COMPANIES.xlsx");

var ws_old = wb.Sheets["None IT Companies"];
var datas_old = xlsx.utils.sheet_to_json(ws_old);

var ws_new = wb.Sheets["Non IT 0829"];
var datas_new = xlsx.utils.sheet_to_json(ws_new);

var mapper = {}
for (const data of datas_old) {
    mapper[data.Key] = data.CompanyUrl
}


var resurts = []
for (const data of datas_new){
    const com = mapper[data.Key] 
    if(com !== data.CompanyUrl){
        resurts.push(data)
    }
}

var newWB = xlsx.utils.book_new();
var newWS = xlsx.utils.json_to_sheet(resurts);
xlsx.utils.book_append_sheet(newWB, newWS, "None IT Companies");

xlsx.writeFile(newWB, "Contact_Rikai_Companies_new.xlsx");
