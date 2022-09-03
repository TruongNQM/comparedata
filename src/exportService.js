const xlsx = require("xlsx");
const path = require("path");

const exportExcel = (data, workSheetName, filePath)=>{
    const newWB = xlsx.utils.book_new();
    const workSheetData = [
        ... data,
    ];
    const newWS = xlsx.utils.json_to_sheet(workSheetData);
    xlsx.utils.book_append_sheet(newWB, newWS, workSheetName);
    xlsx.writeFile(newWB, path.resolve(filePath));

};

const exportToExcel = (datas_old, datas_new, workSheetName, filePath)=>{
    var mapper = {}
    for (const data of datas_old) {
        mapper[data.Key] = data.CompanyUrl
    }

    var datas = []
    for (const data of datas_new){
        const com = mapper[data.Key] 
        if(com !== data.CompanyUrl){
            datas.push(data)
        }
    }

    exportExcel(datas, workSheetName, filePath)
};

module.exports = exportToExcel