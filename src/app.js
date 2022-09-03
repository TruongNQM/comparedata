const exportToExcel = require("./exportService");
var xlsx = require("xlsx");

var wb = xlsx.readFile("Contact_Rikai_None_IT_COMPANIES.xlsx");

var ws_old = wb.Sheets["None IT Companies"];
var datas_old = xlsx.utils.sheet_to_json(ws_old);

var ws_new = wb.Sheets["Non IT 0829"];
var datas_new = xlsx.utils.sheet_to_json(ws_new);


const workSheetName = "None IT Companies";
const filePath = "Contact_Rikai_Companies_new.xlsx";

exportToExcel(datas_old, datas_new, workSheetName, filePath);
