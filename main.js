const fs = require('fs')
const json2xls = require('json2xls');
let jsonArray = [{'公司':'同花顺','地址':'杭州'}]
let xls = json2xls(jsonArray);
fs.writeFileSync('name.xlsx',xls,'binary')