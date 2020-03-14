const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "need specific cpu"
    })
})

router.get('/:cpuname', (req, res, next) => {
    const cpu = req.params.cpuname;

    switch(cpu) {
        
        case 'Intel Core i9-9900KS 4.0 GHz (8 cores)':
return res.json({
score:'1413'
})
break;

case 'Intel Core i9-9900KF 3.6 GHz (8 cores)':
return res.json({
score:'1347'
})
break;

case 'Intel Core i9-9900K 3.6 GHz (8 cores)':
return res.json({
score:'1341'
})
break;

case 'Intel Core i7-8086K 4.0 GHz (6 cores)':
return res.json({
score:'1334'
})
break;

case 'Intel Core i7-9700KF 3.6 GHz (8 cores)':
return res.json({
score:'1314'
})
break;

case 'Intel Core i7-9700K 3.6 GHz (8 cores)':
return res.json({
score:'1313'
})
break;

case 'AMD Ryzen 9 3950X 3.5 GHz (16 cores)':
return res.json({
score:'1309'
})
break;

case 'Intel Core i9-9900 3.1 GHz (8 cores)':
return res.json({
score:'1294'
})
break;

case 'AMD Ryzen 7 3800X 3.9 GHz (8 cores)':
return res.json({
score:'1288'
})
break;

case 'Intel Core i5-9600KF 3.7 GHz (6 cores)':
return res.json({
score:'1288'
})
break;

case 'Intel Core i7-7740X 4.3 GHz (4 cores)':
return res.json({
score:'1287'
})
break;

case 'Intel Core i7-8700K 3.7 GHz (6 cores)':
return res.json({
score:'1283'
})
break;

case 'AMD Ryzen 9 3900X 3.8 GHz (12 cores)':
return res.json({
score:'1280'
})
break;

case 'AMD Ryzen Threadripper 3970X 3.7 GHz (32 cores)':
return res.json({
score:'1280'
})
break;

case 'AMD Ryzen Threadripper 3960X 3.8 GHz (24 cores)':
return res.json({
score:'1272'
})
break;

case 'AMD Ryzen 7 3700X 3.6 GHz (8 cores)':
return res.json({
score:'1258'
})
break;

case 'Intel Core i5-9600K 3.7 GHz (6 cores)':
return res.json({
score:'1252'
})
break;

case 'Intel Core i5-8600K 3.6 GHz (6 cores)':
return res.json({
score:'1247'
})
break;

case 'AMD Ryzen 5 3600X 3.8 GHz (6 cores)':
return res.json({
score:'1247'
})
break;

case 'Intel Core i7-7700K 4.2 GHz (4 cores)':
return res.json({
score:'1237'
})
break;

case 'Intel Core i7-9700 3.0 GHz (8 cores)':
return res.json({
score:'1220'
})
break;

case 'Intel Core i7-9700F 3.0 GHz (8 cores)':
return res.json({
score:'1213'
})
break;

case 'Intel Core i7-8700B 3.2 GHz (6 cores)':
return res.json({
score:'1203'
})
break;

case 'AMD Ryzen 5 3600 3.6 GHz (6 cores)':
return res.json({
score:'1203'
})
break;

case 'Intel Core i9-10940X 3.3 GHz (14 cores)':
return res.json({
score:'1199'
})
break;

case 'Intel Core i7-9800X 3.8 GHz (8 cores)':
return res.json({
score:'1195'
})
break;

case 'Intel Core i9-9980HK 2.4 GHz (8 cores)':
return res.json({
score:'1185'
})
break;

case 'Intel Core i9-10900X 3.7 GHz (10 cores)':
return res.json({
score:'1184'
})
break;

case 'Intel Core i9-7980XE 2.6 GHz (18 cores)':
return res.json({
score:'1182'
})
break;

case 'Intel Core i7-8700 3.2 GHz (6 cores)':
return res.json({
score:'1181'
})
break;

case 'Intel Core i5-7600K 3.8 GHz (4 cores)':
return res.json({
score:'1180'
})
break;

case 'Intel Core i3-7350K 4.2 GHz (2 cores)':
return res.json({
score:'1177'
})
break;

case 'Intel Core i9-10980XE 3.0 GHz (18 cores)':
return res.json({
score:'1176'
})
break;

case 'Intel Core i9-10920X 3.5 GHz (12 cores)':
return res.json({
score:'1174'
})
break;

case 'Intel Core i7-5950HQ 2.9 GHz (4 cores)':
return res.json({
score:'1173'
})
break;

case 'Intel Core i3-8350K 4.0 GHz (4 cores)':
return res.json({
score:'1172'
})
break;

case 'AMD Ryzen 5 3500X 3.6 GHz (6 cores)':
return res.json({
score:'1169'
})
break;

case 'Intel Core i9-9960X 3.1 GHz (16 cores)':
return res.json({
score:'1164'
})
break;

case 'Intel Core i5-9500 3.0 GHz (6 cores)':
return res.json({
score:'1164'
})
break;

case 'Intel Core i5-7640X 4.0 GHz (4 cores)':
return res.json({
score:'1157'
})
break;

case 'Intel Core i9-9920X 3.5 GHz (12 cores)':
return res.json({
score:'1152'
})
break;

case 'Intel Core i7-6700K 4.0 GHz (4 cores)':
return res.json({
score:'1150'
})
break;

case 'Intel Core i7-7820X 3.6 GHz (8 cores)':
return res.json({
score:'1150'
})
break;

case 'Intel Core i7-8569U 2.8 GHz (4 cores)':
return res.json({
score:'1150'
})
break;

case 'Intel Core i9-9940X 3.3 GHz (14 cores)':
return res.json({
score:'1147'
})
break;

case 'Intel Core i9-9980XE 3.0 GHz (18 cores)':
return res.json({
score:'1145'
})
break;

case 'Intel Core i9-7900X 3.3 GHz (10 cores)':
return res.json({
score:'1142'
})
break;

case 'Intel Core i9-7940X 3.1 GHz (14 cores)':
return res.json({
score:'1142'
})
break;

case 'Intel Xeon W-3175X 3.1 GHz (28 cores)':
return res.json({
score:'1141'
})
break;

case 'Intel Core i9-9900X 3.5 GHz (10 cores)':
return res.json({
score:'1138'
})
break;

case 'AMD Ryzen 5 3500 3.6 GHz (6 cores)':
return res.json({
score:'1137'
})
break;

case 'Intel Core i5-8600 3.1 GHz (6 cores)':
return res.json({
score:'1136'
})
break;

case 'Intel Core i9-7960X 2.8 GHz (16 cores)':
return res.json({
score:'1132'
})
break;

case 'Intel Core i9-8950HK 2.9 GHz (6 cores)':
return res.json({
score:'1131'
})
break;

case 'Intel Core i9-9880H 2.3 GHz (8 cores)':
return res.json({
score:'1126'
})
break;

case 'Intel Xeon W-3245 3.2 GHz (16 cores)':
return res.json({
score:'1121'
})
break;

case 'Intel Core i7-7800X 3.5 GHz (6 cores)':
return res.json({
score:'1116'
})
break;

case 'Intel Core i9-7920X 2.9 GHz (12 cores)':
return res.json({
score:'1113'
})
break;

case 'Intel Core i7-9850H 2.6 GHz (6 cores)':
return res.json({
score:'1112'
})
break;

case 'Intel Xeon W-2155 3.3 GHz (10 cores)':
return res.json({
score:'1103'
})
break;

case 'Intel Core i5-6600K 3.5 GHz (4 cores)':
return res.json({
score:'1102'
})
break;

case 'Intel Xeon W-2191B 2.3 GHz (18 cores)':
return res.json({
score:'1101'
})
break;

case 'Intel Xeon W-3275M 2.5 GHz (28 cores)':
return res.json({
score:'1099'
})
break;

case 'Intel Core i7-8559U 2.7 GHz (4 cores)':
return res.json({
score:'1096'
})
break;

case 'Intel Core i3-9100F 3.6 GHz (4 cores)':
return res.json({
score:'1092'
})
break;

case 'Intel Xeon W-3235 3.3 GHz (12 cores)':
return res.json({
score:'1092'
})
break;

case 'Intel Xeon E3-1270 v6 3.8 GHz (4 cores)':
return res.json({
score:'1090'
})
break;

case 'Intel Core i5-8500 3.0 GHz (6 cores)':
return res.json({
score:'1089'
})
break;

case 'Intel Xeon E-2176M 2.7 GHz (6 cores)':
return res.json({
score:'1089'
})
break;

case 'Intel Core i5-9400F 2.9 GHz (6 cores)':
return res.json({
score:'1089'
})
break;

case 'Intel Xeon W-2145 3.7 GHz (8 cores)':
return res.json({
score:'1087'
})
break;

case 'Intel Core i7-8809G 3.1 GHz (4 cores)':
return res.json({
score:'1083'
})
break;

case 'Intel Xeon E3-1275 v6 3.8 GHz (4 cores)':
return res.json({
score:'1082'
})
break;

case 'Intel Xeon W-2150B 3.0 GHz (10 cores)':
return res.json({
score:'1081'
})
break;

case 'Intel Xeon E3-1240 v6 3.7 GHz (4 cores)':
return res.json({
score:'1081'
})
break;

case 'Intel Core i5-9400 2.9 GHz (6 cores)':
return res.json({
score:'1076'
})
break;

case 'Intel Core i5-8500B 3.0 GHz (6 cores)':
return res.json({
score:'1074'
})
break;

case 'Intel Xeon E3-1275 v5 3.6 GHz (4 cores)':
return res.json({
score:'1073'
})
break;

case 'Intel Core i7-9750H 2.6 GHz (6 cores)':
return res.json({
score:'1072'
})
break;

case 'Intel Xeon W-2135 3.7 GHz (6 cores)':
return res.json({
score:'1070'
})
break;

case 'AMD Ryzen Threadripper 2920X 3.5 GHz (12 cores)':
return res.json({
score:'1070'
})
break;

case 'Intel Core i7-4790K 4.0 GHz (4 cores)':
return res.json({
score:'1068'
})
break;

case 'Intel Core i7-7700 3.6 GHz (4 cores)':
return res.json({
score:'1068'
})
break;

case 'Intel Core i3-9100 3.6 GHz (4 cores)':
return res.json({
score:'1068'
})
break;

case 'Intel Xeon W-2125 4.0 GHz (4 cores)':
return res.json({
score:'1064'
})
break;

case 'AMD Ryzen 7 2700X 3.7 GHz (8 cores)':
return res.json({
score:'1062'
})
break;

case 'Intel Core i7-5775C 3.3 GHz (4 cores)':
return res.json({
score:'1061'
})
break;

case 'Intel Core i5-8400H 2.5 GHz (4 cores)':
return res.json({
score:'1061'
})
break;

case 'AMD Ryzen Threadripper 2950X 3.5 GHz (16 cores)':
return res.json({
score:'1058'
})
break;

case 'Intel Xeon W-2140B 3.2 GHz (8 cores)':
return res.json({
score:'1056'
})
break;

case 'Intel Core i7-8700T 2.4 GHz (6 cores)':
return res.json({
score:'1055'
})
break;

case 'Intel Core i5-8400 2.8 GHz (6 cores)':
return res.json({
score:'1052'
})
break;

case 'AMD Ryzen 5 2600X 3.6 GHz (6 cores)':
return res.json({
score:'1051'
})
break;

case 'Intel Core i3-7320 4.1 GHz (2 cores)':
return res.json({
score:'1050'
})
break;

case 'Intel Core i5-7600 3.5 GHz (4 cores)':
return res.json({
score:'1043'
})
break;

case 'Intel Core i3-6320 3.9 GHz (2 cores)':
return res.json({
score:'1039'
})
break;

case 'Intel Core i5-8279U 2.4 GHz (4 cores)':
return res.json({
score:'1037'
})
break;

case 'Intel Xeon W-3223 3.5 GHz (8 cores)':
return res.json({
score:'1032'
})
break;

case 'Intel Core i7-8850H 2.6 GHz (6 cores)':
return res.json({
score:'1031'
})
break;

case 'Intel Core i7-8665U 1.9 GHz (4 cores)':
return res.json({
score:'1031'
})
break;

case 'Intel Xeon E3-1230 v6 3.5 GHz (4 cores)':
return res.json({
score:'1028'
})
break;

case 'Intel Core i7-7567U 3.5 GHz (2 cores)':
return res.json({
score:'1027'
})
break;

case 'Intel Xeon E3-1270 v5 3.6 GHz (4 cores)':
return res.json({
score:'1023'
})
break;

case 'AMD Ryzen Threadripper 2970WX 3.0 GHz (24 cores)':
return res.json({
score:'1023'
})
break;

case 'Intel Core i3-7300 4.0 GHz (2 cores)':
return res.json({
score:'1021'
})
break;

case 'AMD Ryzen Threadripper 2990WX 3.0 GHz (32 cores)':
return res.json({
score:'1020'
})
break;

case 'Intel Xeon E3-1535M v6 3.1 GHz (4 cores)':
return res.json({
score:'1013'
})
break;

case 'Intel Core i3-8300 3.7 GHz (4 cores)':
return res.json({
score:'1012'
})
break;

case 'AMD Ryzen 3 2300X 3.5 GHz (4 cores)':
return res.json({
score:'1012'
})
break;

case 'Intel Core i5-9300H 2.4 GHz (4 cores)':
return res.json({
score:'1012'
})
break;

case 'Intel Core i7-6900K 3.2 GHz (8 cores)':
return res.json({
score:'1009'
})
break;

case 'Intel Core i7-7820HK 2.9 GHz (4 cores)':
return res.json({
score:'1007'
})
break;

case 'Intel Core i7-6850K 3.6 GHz (6 cores)':
return res.json({
score:'1003'
})
break;

case 'Intel Xeon E3-1240 v5 3.5 GHz (4 cores)':
return res.json({
score:'1003'
})
break;

case 'Intel Core i7-8750H 2.2 GHz (6 cores)':
return res.json({
score:'1003'
})
break;

case 'Intel Xeon E3-1281 v3 3.7 GHz (4 cores)':
return res.json({
score:'999'
})
break;

case 'Intel Core i7-5960X 3.0 GHz (8 cores)':
return res.json({
score:'995'
})
break;

case 'AMD Ryzen Threadripper 1900X 3.8 GHz (8 cores)':
return res.json({
score:'990'
})
break;

case 'Intel Core i5-4690K 3.5 GHz (4 cores)':
return res.json({
score:'989'
})
break;

case 'Intel Core i5-5675C 3.1 GHz (4 cores)':
return res.json({
score:'988'
})
break;

case 'Intel Core i7-4770K 3.5 GHz (4 cores)':
return res.json({
score:'987'
})
break;

case 'Intel Core i7-7920HQ 3.1 GHz (4 cores)':
return res.json({
score:'987'
})
break;

case 'Intel Core i7-5930K 3.5 GHz (6 cores)':
return res.json({
score:'985'
})
break;

case 'Intel Core i7-6700 3.4 GHz (4 cores)':
return res.json({
score:'985'
})
break;

case 'Intel Core i7-5775R 3.3 GHz (4 cores)':
return res.json({
score:'984'
})
break;

case 'AMD Ryzen Threadripper 1920X 3.5 GHz (12 cores)':
return res.json({
score:'983'
})
break;

case 'AMD Ryzen 5 2600 3.4 GHz (6 cores)':
return res.json({
score:'979'
})
break;

case 'Intel Core i5-8257U 1.4 GHz (4 cores)':
return res.json({
score:'979'
})
break;

case 'Intel Xeon E3-1271 v3 3.6 GHz (4 cores)':
return res.json({
score:'977'
})
break;

case 'AMD Ryzen Threadripper 1950X 3.4 GHz (16 cores)':
return res.json({
score:'977'
})
break;

case 'Intel Core i3-8100B 3.6 GHz (4 cores)':
return res.json({
score:'976'
})
break;

case 'Intel Core i7-8705G 3.1 GHz (4 cores)':
return res.json({
score:'974'
})
break;

case 'Intel Core i5-4670K 3.4 GHz (4 cores)':
return res.json({
score:'973'
})
break;

case 'Intel Core i5-7500 3.4 GHz (4 cores)':
return res.json({
score:'973'
})
break;

case 'Intel Xeon Processor E5-1680 v3 3.2 GHz (8 cores)':
return res.json({
score:'973'
})
break;

case 'Intel Core i3-7100 3.9 GHz (2 cores)':
return res.json({
score:'971'
})
break;

case 'Intel Core i5-8259U 2.3 GHz (4 cores)':
return res.json({
score:'970'
})
break;

case 'Intel Core i5-8300H 2.3 GHz (4 cores)':
return res.json({
score:'969'
})
break;

case 'Intel Core i3-8100 3.6 GHz (4 cores)':
return res.json({
score:'967'
})
break;

case 'Intel Pentium G5600 3.9 GHz (2 cores)':
return res.json({
score:'967'
})
break;

case 'Intel Core i7-6950X 3.0 GHz (10 cores)':
return res.json({
score:'966'
})
break;

case 'Intel Core i7-4940MX 3.1 GHz (4 cores)':
return res.json({
score:'966'
})
break;

case 'Intel Core i5-6600 3.3 GHz (4 cores)':
return res.json({
score:'962'
})
break;

case 'Intel Xeon W-2133 3.6 GHz (6 cores)':
return res.json({
score:'962'
})
break;

case 'Intel Core i3-6300 3.8 GHz (2 cores)':
return res.json({
score:'957'
})
break;

case 'AMD Ryzen 5 1600X 3.6 GHz (6 cores)':
return res.json({
score:'953'
})
break;

case 'Intel Pentium Gold G5500 3.8 GHz (2 cores)':
return res.json({
score:'953'
})
break;

case 'Intel Xeon E5-1630 v4 3.7 GHz (4 cores)':
return res.json({
score:'952'
})
break;

case 'Intel Xeon E3-1245 v6 3.7 GHz (4 cores)':
return res.json({
score:'951'
})
break;

case 'Intel Xeon W-2123 3.6 GHz (4 cores)':
return res.json({
score:'951'
})
break;

case 'Intel Xeon E3-1505M v6 3.0 GHz (4 cores)':
return res.json({
score:'950'
})
break;

case 'Intel Core i7-4790 3.6 GHz (4 cores)':
return res.json({
score:'948'
})
break;

case 'AMD Ryzen 7 2700 3.2 GHz (8 cores)':
return res.json({
score:'944'
})
break;

case 'Intel Xeon E3-1545M v5 2.9 GHz (4 cores)':
return res.json({
score:'943'
})
break;

case 'Intel Xeon Gold 6134 3.2 GHz (8 cores)':
return res.json({
score:'943'
})
break;

case 'AMD Ryzen 5 3400G 3.7 GHz (4 cores)':
return res.json({
score:'942'
})
break;

case 'Intel Core i5-4690S 3.2 GHz (4 cores)':
return res.json({
score:'941'
})
break;

case 'Intel Core i7-8650U 1.9 GHz (4 cores)':
return res.json({
score:'940'
})
break;

case 'Intel Xeon E3-1245 v5 3.5 GHz (4 cores)':
return res.json({
score:'939'
})
break;

case 'AMD Ryzen 7 1800X 3.6 GHz (8 cores)':
return res.json({
score:'938'
})
break;

case 'Intel Xeon E5-1650 v4 3.6 GHz (6 cores)':
return res.json({
score:'938'
})
break;

case 'Intel Xeon E3-1270 v3 3.5 GHz (4 cores)':
return res.json({
score:'932'
})
break;

case 'Intel Xeon E3-1535M v5 2.9 GHz (4 cores)':
return res.json({
score:'931'
})
break;

case 'Intel Core i7-7820HQ 2.9 GHz (4 cores)':
return res.json({
score:'929'
})
break;

case 'Intel Xeon E3-1241 v3 3.5 GHz (4 cores)':
return res.json({
score:'928'
})
break;

case 'Intel Core i5-8500T 2.1 GHz (6 cores)':
return res.json({
score:'928'
})
break;

case 'Intel Core i7-5820K 3.3 GHz (6 cores)':
return res.json({
score:'926'
})
break;

case 'Intel Core i7-4790S 3.2 GHz (4 cores)':
return res.json({
score:'923'
})
break;

case 'Intel Xeon E5-1650 v3 3.5 GHz (6 cores)':
return res.json({
score:'923'
})
break;

case 'Intel Xeon E3-1225 v5 3.3 GHz (4 cores)':
return res.json({
score:'921'
})
break;

case 'Intel Core i5-6600T 2.7 GHz (4 cores)':
return res.json({
score:'920'
})
break;

case 'Intel Core i5-7260U 2.2 GHz (2 cores)':
return res.json({
score:'920'
})
break;

case 'Intel Pentium Gold G5400 3.7 GHz (2 cores)':
return res.json({
score:'919'
})
break;

case 'Intel Xeon E3-1230 v5 3.4 GHz (4 cores)':
return res.json({
score:'918'
})
break;

case 'Intel Core i7-6800K 3.4 GHz (6 cores)':
return res.json({
score:'917'
})
break;

case 'AMD Ryzen 5 1500X 3.5 GHz (4 cores)':
return res.json({
score:'916'
})
break;

case 'Intel Xeon E3-1246 v3 3.5 GHz (4 cores)':
return res.json({
score:'914'
})
break;

case 'Intel Core i7-7700T 2.9 GHz (4 cores)':
return res.json({
score:'913'
})
break;

case 'Intel Pentium G4620 3.7 GHz (2 cores)':
return res.json({
score:'913'
})
break;

case 'Intel Core i5-4690 3.5 GHz (4 cores)':
return res.json({
score:'912'
})
break;

case 'Intel Core i7-6700T 2.8 GHz (4 cores)':
return res.json({
score:'912'
})
break;

case 'Intel Xeon E5-1660 v3 3.0 GHz (8 cores)':
return res.json({
score:'911'
})
break;

case 'Intel Xeon E3-1275 v3 3.5 GHz (4 cores)':
return res.json({
score:'910'
})
break;

case 'Intel Xeon E5-2696 v4 2.2 GHz (22 cores)':
return res.json({
score:'909'
})
break;

case 'Intel Core i7-7560U 2.4 GHz (2 cores)':
return res.json({
score:'909'
})
break;

case 'Intel Core i7-4790T 2.7 GHz (4 cores)':
return res.json({
score:'908'
})
break;

case 'Intel Core i7-7660U 2.5 GHz (2 cores)':
return res.json({
score:'908'
})
break;

case 'Intel Xeon E3-1275L v3 2.7 GHz (4 cores)':
return res.json({
score:'908'
})
break;

case 'Intel Core i7-4960HQ 2.6 GHz (4 cores)':
return res.json({
score:'907'
})
break;

case 'Intel Core i7-4770 3.4 GHz (4 cores)':
return res.json({
score:'906'
})
break;

case 'Intel Core i5-7360U 2.3 GHz (2 cores)':
return res.json({
score:'905'
})
break;

case 'Intel Xeon E3-1226 v3 3.3 GHz (4 cores)':
return res.json({
score:'904'
})
break;

case 'AMD Ryzen 3 PRO 1300 3.5 GHz (4 cores)':
return res.json({
score:'904'
})
break;

case 'Intel Core i3-6100 3.7 GHz (2 cores)':
return res.json({
score:'903'
})
break;

case 'Intel Core i7-6920HQ 2.9 GHz (4 cores)':
return res.json({
score:'903'
})
break;

case 'Intel Core i7-4980HQ 2.8 GHz (4 cores)':
return res.json({
score:'902'
})
break;

case 'Intel Core i5-6500 3.2 GHz (4 cores)':
return res.json({
score:'900'
})
break;

case 'Intel Core i7-6820HK 2.7 GHz (4 cores)':
return res.json({
score:'900'
})
break;

case 'Intel Core i7-4771 3.5 GHz (4 cores)':
return res.json({
score:'899'
})
break;

case 'AMD Ryzen 5 1600 3.2 GHz (6 cores)':
return res.json({
score:'899'
})
break;

case 'Intel Xeon Gold 5122 3.6 GHz (4 cores)':
return res.json({
score:'898'
})
break;

case 'Intel Core i3-6098P 3.6 GHz (2 cores)':
return res.json({
score:'897'
})
break;

case 'AMD Ryzen 3 1300X 3.5 GHz (4 cores)':
return res.json({
score:'897'
})
break;

case 'AMD Ryzen 7 1700X 3.4 GHz (8 cores)':
return res.json({
score:''
})
break;

case 'Intel Core i3-8109U 3.0 GHz (2 cores)':
return res.json({
score:'895'
})
break;

case 'Intel Core i5-7400 3.0 GHz (4 cores)':
return res.json({
score:'890'
})
break;

case 'Intel Xeon E5-1660 v4 3.2 GHz (8 cores)':
return res.json({
score:'888'
})
break;

case 'Intel Core i5-4670S 3.1 GHz (4 cores)':
return res.json({
score:'888'
})
break;

case 'Intel Core i5-7440HQ 2.8 GHz (4 cores)':
return res.json({
score:'887'
})
break;

case 'Intel Xeon E3-1231 v3 3.4 GHz (4 cores)':
return res.json({
score:'887'
})
break;

case 'Intel Xeon E3-1245 v3 3.4 GHz (4 cores)':
return res.json({
score:'886'
})
break;

case 'Intel Pentium G4600 3.6 GHz (2 cores)':
return res.json({
score:'884'
})
break;

case 'Intel Core i7-6770HQ 2.6 GHz (4 cores)':
return res.json({
score:'882'
})
break;

case 'Intel Core i5-4670 3.4 GHz (4 cores)':
return res.json({
score:'881'
})
break;

case 'Intel Core i5-4590 3.3 GHz (4 cores)':
return res.json({
score:'880'
})
break;

case 'Intel Core i7-7700HQ 2.8 GHz (4 cores)':
return res.json({
score:'878'
})
break;

case 'Intel Core i3-4340 3.6 GHz (2 cores)':
return res.json({
score:'878'
})
break;

case 'Intel Core i5-2550K 3.4 GHz (4 cores)':
return res.json({
score:'874'
})
break;

case 'Intel Core i7-4770S 3.1 GHz (4 cores)':
return res.json({
score:'873'
})
break;

case 'Intel Core i7-3770K 3.5 GHz (4 cores)':
return res.json({
score:'872'
})
break;

case 'Intel Core i3-4370 3.8 GHz (2 cores)':
return res.json({
score:'871'
})
break;

case 'Intel Xeon E3-1290 v2 3.7 GHz (4 cores)':
return res.json({
score:'871'
})
break;

case 'Intel Core i5-8305G 2.8 GHz (4 cores)':
return res.json({
score:'871'
})
break;

case 'Intel Xeon E3-1230 v3 3.3 GHz (4 cores)':
return res.json({
score:'871'
})
break;

case 'Intel Xeon E5-1680 v2 3.0 GHz (8 cores)':
return res.json({
score:'869'
})
break;

case 'Intel Core i7-4770T 2.5 GHz (4 cores)':
return res.json({
score:'869'
})
break;

case 'Intel Core i7-4910MQ 2.9 GHz (4 cores)':
return res.json({
score:'867'
})
break;

case 'Intel Xeon E3-1280 V2 3.6 GHz (4 cores)':
return res.json({
score:'867'
})
break;

case 'Intel Xeon E3-1505M v5 2.8 GHz (4 cores)':
return res.json({
score:'866'
})
break;

case 'Intel Core i5-7267U 3.1 GHz (2 cores)':
return res.json({
score:'865'
})
break;

case 'Intel Xeon E5-1620 v4 3.5 GHz (4 cores)':
return res.json({
score:'865'
})
break;

case 'Intel Core i5-8400T 1.7 GHz (6 cores)':
return res.json({
score:'864'
})
break;

case 'Intel Core i7-2700K 3.5 GHz (4 cores)':
return res.json({
score:'863'
})
break;

case 'Intel Core i7-4870HQ 2.5 GHz (4 cores)':
return res.json({
score:'861'
})
break;

case 'Intel Core i5-4570 3.2 GHz (4 cores)':
return res.json({
score:'860'
})
break;

case 'Intel Xeon E3-1220 v6 3.0 GHz (4 cores)':
return res.json({
score:'859'
})
break;

case 'AMD Ryzen 5 2400G 3.6 GHz (4 cores)':
return res.json({
score:'859'
})
break;

case 'AMD Ryzen 7 1700 3.0 GHz (8 cores)':
return res.json({
score:'858'
})
break;

case 'Intel Pentium G4500 3.5 GHz (2 cores)':
return res.json({
score:'856'
})
break;

case 'AMD Ryzen 3 2200G 3.5 GHz (4 cores)':
return res.json({
score:'855'
})
break;

case 'Intel Xeon E3-1240 v3 3.4 GHz (4 cores)':
return res.json({
score:'855'
})
break;

case 'Intel Core i5-3570K 3.4 GHz (4 cores)':
return res.json({
score:'854'
})
break;

case 'Intel Core i5-4590S 3.0 GHz (4 cores)':
return res.json({
score:'852'
})
break;

case 'Intel Core i7-4960X 3.6 GHz (6 cores)':
return res.json({
score:'852'
})
break;

case 'Intel Core i7-4850HQ 2.3 GHz (4 cores)':
return res.json({
score:'851'
})
break;

case 'Intel Xeon E5-1630 v3 3.7 GHz (4 cores)':
return res.json({
score:'851'
})
break;

case 'Intel Core i7-4810MQ 2.8 GHz (4 cores)':
return res.json({
score:'850'
})
break;

case 'Intel Core i7-6567U 3.3 GHz (2 cores)':
return res.json({
score:'849'
})
break;

case 'Intel Pentium G4560 3.5 GHz (2 cores)':
return res.json({
score:'848'
})
break;

case 'Intel Core i5-6402P 2.8 GHz (4 cores)':
return res.json({
score:'847'
})
break;

case 'Intel Core i5-7500T 2.7 GHz (4 cores)':
return res.json({
score:'845'
})
break;

case 'Intel Core i7-6820HQ 2.7 GHz (4 cores)':
return res.json({
score:'844'
})
break;

case 'Intel Xeon E3-1220 v5 3.0 GHz (4 cores)':
return res.json({
score:'841'
})
break;

case 'Intel Core i3-7100T 3.4 GHz (2 cores)':
return res.json({
score:'841'
})
break;

case 'Intel Core i7-4800MQ 2.7 GHz (4 cores)':
return res.json({
score:'840'
})
break;

case 'Intel Core i5-4570S 2.9 GHz (4 cores)':
return res.json({
score:'839'
})
break;

case 'Intel Core i5-7300HQ 2.5 GHz (4 cores)':
return res.json({
score:'839'
})
break;

case 'Intel Xeon E5-2690 v3 2.6 GHz (12 cores)':
return res.json({
score:'837'
})
break;

case 'Intel Core i3-8100T 3.1 GHz (4 cores)':
return res.json({
score:'835'
})
break;

case 'Intel Core i4-4690T 2.5 GHz (4 cores)':
return res.json({
score:'835'
})
break;

case 'Intel Core i7-4900MQ 2.8 GHz (4 cores)':
return res.json({
score:'835'
})
break;

case 'Intel Core i3-4170 3.7 GHz (2 cores)':
return res.json({
score:'833'
})
break;

case 'Intel Core i7-5700HQ 2.7 GHz (4 cores)':
return res.json({
score:'833'
})
break;

case 'Intel Core i5-6400 2.7 GHz (4 cores)':
return res.json({
score:'833'
})
break;

case 'Intel Core i7-5557U 3.1 GHz (2 cores)':
return res.json({
score:'831'
})
break;

case 'Intel Xeon E5-1620 v3 3.5 GHz (4 cores)':
return res.json({
score:'826'
})
break;

case 'Intel Core i5-6440HQ 2.6 GHz (4 cores)':
return res.json({
score:'825'
})
break;

case 'Intel Core i7-4820K 3.7 GHz (4 cores)':
return res.json({
score:'825'
})
break;

case 'Intel Core i7-3960X 3.3 GHz (6 cores)':
return res.json({
score:'824'
})
break;

case 'Intel Xeon E3-1275 v2 3.5 GHz (4 cores)':
return res.json({
score:'822'
})
break;

case 'AMD Ryzen 7 3750H 2.3 GHz (4 cores)':
return res.json({
score:'822'
})
break;

case 'Intel Core i3-6100T 3.2 GHz (2 cores)':
return res.json({
score:'820'
})
break;

case 'Intel Xeon E5-2696 v3 2.3 GHz (18 cores)':
return res.json({
score:'818'
})
break;

case 'Intel Core i5-2500K 3.3 GHz (4 cores)':
return res.json({
score:'817'
})
break;

case 'Intel Core i7-4930K 3.4 GHz (6 cores)':
return res.json({
score:'813'
})
break;

case 'Intel Core i7-2600K 3.4 GHz (4 cores)':
return res.json({
score:'813'
})
break;

case 'AMD Ryzen 3 1200 3.1 GHz (4 cores)':
return res.json({
score:'811'
})
break;

case 'Intel Xeon E5-2697 v3 2.6 GHz (14 cores)':
return res.json({
score:'805'
})
break;

case 'Intel Core i3-4160 3.6 GHz (2 cores)':
return res.json({
score:'803'
})
break;

case 'Intel Core i5-4308U 2.8 GHz (2 cores)':
return res.json({
score:'803'
})
break;

case 'Intel Core i7-8550U 1.8 GHz (4 cores)':
return res.json({
score:'802'
})
break;

case 'Intel Core i7-3770 3.4 GHz (4 cores)':
return res.json({
score:'802'
})
break;

case 'Intel Core i3-4330 3.5 GHz (2 cores)':
return res.json({
score:'801'
})
break;

case 'Intel Core i7-6700HQ 2.6 GHz (4 cores)':
return res.json({
score:'801'
})
break;

case 'Intel Core i7-4600M 2.9 GHz (2 cores)':
return res.json({
score:'801'
})
break;

case 'Intel Core i5-4460 3.2 GHz (4 cores)':
return res.json({
score:'800'
})
break;

case 'Intel Xeon E5-1660 v2 3.7 GHz (6 cores)':
return res.json({
score:'800'
})
break;

case 'Intel Core i7-4578U 3.0 GHz (2 cores)':
return res.json({
score:'800'
})
break;

case 'Intel Core i3-8130U 2.2 GHz (2 cores)':
return res.json({
score:'796'
})
break;

case 'AMD Ryzen 7 3780U Microsoft Surface Edition 2.3 GHz (4 cores)':
return res.json({
score:'796'
})
break;

case 'Intel Core i7-3970X 3.5 GHz (6 cores)':
return res.json({
score:'796'
})
break;

case 'Intel Xeon E3-1245 V2 3.4 GHz (4 cores)':
return res.json({
score:'795'
})
break;

case 'AMD Ryzen 7 PRO 3700U 2.3 GHz (4 cores)':
return res.json({
score:'793'
})
break;

case 'Intel Xeon E5-2690 v4 2.6 GHz (14 cores)':
return res.json({
score:'793'
})
break;

case 'Intel Core i7-3770S 3.1 GHz (4 cores)':
return res.json({
score:'792'
})
break;

case 'Intel Core i7-5650U 2.2 GHz (2 cores)':
return res.json({
score:'791'
})
break;

case 'Intel Pentium G3258 3.2 GHz (2 cores)':
return res.json({
score:'791'
})
break;

case 'Intel Core i7-4720HQ 2.6 GHz (4 cores)':
return res.json({
score:'790'
})
break;

case 'AMD Ryzen 5 1400 3.2 GHz (4 cores)':
return res.json({
score:'789'
})
break;

case 'Intel Core i7-3840QM 2.8 GHz (4 cores)':
return res.json({
score:'788'
})
break;

case 'Intel Xeon E3-1270 V2 3.5 GHz (4 cores)':
return res.json({
score:'787'
})
break;

case 'Intel Core i7-6650U 2.2 GHz (2 cores)':
return res.json({
score:'787'
})
break;

case 'Intel Pentium G4400 3.3 GHz (2 cores)':
return res.json({
score:'787'
})
break;

case 'Intel Core i7-3930K 3.2 GHz (6 cores)':
return res.json({
score:'787'
})
break;

case 'Intel Core i7-4710MQ 2.5 GHz (4 cores)':
return res.json({
score:'786'
})
break;

case 'Intel Xeon E3-1225 v3 3.2 GHz (4 cores)':
return res.json({
score:'785'
})
break;

case 'Intel Core i5-3570 3.4 GHz (4 cores)':
return res.json({
score:'784'
})
break;

case 'Intel Core i5-3570S 3.1 GHz (4 cores)':
return res.json({
score:'782'
})
break;

case 'Intel Xeon E5-1660 3.3 GHz (6 cores)':
return res.json({
score:'781'
})
break;

case 'Intel Core i5-6500T 2.5 GHz (4 cores)':
return res.json({
score:'780'
})
break;

case 'Intel Core i5-4670T 2.3 GHz (4 cores)':
return res.json({
score:'780'
})
break;

case 'Intel Core i5-4440 3.1 GHz (4 cores)':
return res.json({
score:'779'
})
break;

case 'Intel Xeon E5-1650 v2 3.5 GHz (6 cores)':
return res.json({
score:'778'
})
break;

case 'AMD Ryzen 5 3550H 2.1 GHz (4 cores)':
return res.json({
score:'778'
})
break;

case 'Intel Core i3-4130 3.4 GHz (2 cores)':
return res.json({
score:'777'
})
break;

case 'Intel Core i7-4770HQ 2.2 GHz (4 cores)':
return res.json({
score:'774'
})
break;

case 'Intel Core i7-7500U 2.7 GHz (2 cores)':
return res.json({
score:'774'
})
break;

case 'Intel Core i5-6267U 2.9 GHz (2 cores)':
return res.json({
score:'774'
})
break;

case 'Intel Xeon E5-1620 v2 3.7 GHz (4 cores)':
return res.json({
score:'774'
})
break;

case 'Intel Core i5-7400T 2.4 GHz (4 cores)':
return res.json({
score:'773'
})
break;

case 'Intel Core i3-4150 3.5 GHz (2 cores)':
return res.json({
score:'773'
})
break;

case 'Intel Xeon E3-1220 v3 3.1 GHz (4 cores)':
return res.json({
score:'771'
})
break;

case 'Intel Core i5-4570T 2.9 GHz (2 cores)':
return res.json({
score:'771'
})
break;

case 'Intel Core i5-4430 3.0 GHz (4 cores)':
return res.json({
score:'770'
})
break;

case 'Intel Xeon E5-2640 v3 2.6 GHz (8 cores)':
return res.json({
score:'766'
})
break;

case 'Intel Core i5-8210Y 1.6 GHz (2 cores)':
return res.json({
score:'766'
})
break;

case 'Intel Core i7-3770T 2.5 GHz (4 cores)':
return res.json({
score:'766'
})
break;

case 'AMD EPYC 7702P 2.0 GHz (64 cores)':
return res.json({
score:'765'
})
break;

case 'Intel Xeon Silver 4112 2.6 GHz (4 cores)':
return res.json({
score:'765'
})
break;

case 'Intel Core i7-4785T 2.2 GHz (4 cores)':
return res.json({
score:'765'
})
break;

case 'Intel Core i7-4710HQ 2.5 GHz (4 cores)':
return res.json({
score:'764'
})
break;

case 'Intel Xeon E3-1230V2 3.3 GHz (4 cores)':
return res.json({
score:'763'
})
break;

case 'Intel Core i5-3550 3.3 GHz (4 cores)':
return res.json({
score:'762'
})
break;

case 'Intel Core i5-4570R 2.7 GHz (4 cores)':
return res.json({
score:'761'
})
break;

case 'Intel Core i7-3820 3.6 GHz (4 cores)':
return res.json({
score:'761'
})
break;

case 'Intel Xeon E5-2678 v3 2.5 GHz (12 cores)':
return res.json({
score:'760'
})
break;

case 'Intel Xeon E5-2667 v2 3.3 GHz (8 cores)':
return res.json({
score:'759'
})
break;

case 'Intel Core i5-7300U 2.6 GHz (2 cores)':
return res.json({
score:'756'
})
break;

case 'Intel Xeon E3-1240 v2 3.4 GHz (4 cores)':
return res.json({
score:'756'
})
break;

case 'Intel Xeon E5-2687W v2 3.4 GHz (8 cores)':
return res.json({
score:'755'
})
break;

case 'Intel Core i5-4460S 2.9 GHz (4 cores)':
return res.json({
score:'755'
})
break;

case 'Intel Core i5-4340M 2.9 GHz (2 cores)':
return res.json({
score:'755'
})
break;

case 'Intel Core i7-4700MQ 2.4 GHz (4 cores)':
return res.json({
score:'755'
})
break;

case 'Intel Xeon E5-2637 v2 3.5 GHz (4 cores)':
return res.json({
score:'753'
})
break;

case 'AMD Athlon 200GE 3.2 GHz (2 cores)':
return res.json({
score:'753'
})
break;

case 'Intel Core i5-6360U 2.0 GHz (2 cores)':
return res.json({
score:'753'
})
break;

case 'Intel Xeon E5-1607 v3 3.1 GHz (4 cores)':
return res.json({
score:'749'
})
break;

case 'Intel Core i7-4700HQ 2.4 GHz (4 cores)':
return res.json({
score:'745'
})
break;

case 'Intel Xeon E3-1225 V2 3.2 GHz (4 cores)':
return res.json({
score:'744'
})
break;

case 'Intel Core i5-6300HQ 2.3 GHz (4 cores)':
return res.json({
score:'744'
})
break;

case 'Intel Core i5-6500TE 2.3 GHz (4 cores)':
return res.json({
score:'743'
})
break;

case 'Intel Core i5-3475S 2.9 GHz (4 cores)':
return res.json({
score:'741'
})
break;

case 'Intel Core i5-3550S 3.0 GHz (4 cores)':
return res.json({
score:'740'
})
break;

case 'Intel Core i7-4610M 3.0 GHz (2 cores)':
return res.json({
score:'739'
})
break;

case 'Intel Core i5-3470 3.2 GHz (4 cores)':
return res.json({
score:'739'
})
break;

case 'Intel Core i7-4750HQ 2.0 GHz (4 cores)':
return res.json({
score:'738'
})
break;

case 'Intel Core i5-5287U 2.9 GHz (2 cores)':
return res.json({
score:'737'
})
break;

case 'Intel Core i5-4210H 2.9 GHz (2 cores)':
return res.json({
score:'737'
})
break;

case 'Intel Xeon E3-1270 3.4 GHz (4 cores)':
return res.json({
score:'736'
})
break;

case 'Intel Celeron G4900 3.1 GHz (2 cores)':
return res.json({
score:'735'
})
break;

case 'Intel Core i7-4712MQ 2.3 GHz (4 cores)':
return res.json({
score:'735'
})
break;

case 'AMD Ryzen 5 3500U 2.1 GHz (4 cores)':
return res.json({
score:'734'
})
break;

case 'AMD Ryzen 3 2300U 2.0 GHz (4 cores)':
return res.json({
score:'734'
})
break;

case 'AMD Ryzen 5 PRO 3500U 2.1 GHz (4 cores)':
return res.json({
score:'733'
})
break;

case 'Intel Core i7-3940XM 3.0 GHz (4 cores)':
return res.json({
score:'733'
})
break;

case 'Intel Core i5-8250U 1.6 GHz (4 cores)':
return res.json({
score:'732'
})
break;

case 'Intel Xeon E3-1280 3.5 GHz (4 cores)':
return res.json({
score:'732'
})
break;

case 'Intel Xeon E5-1620 3.6 GHz (4 cores)':
return res.json({
score:'731'
})
break;

case 'AMD Ryzen 7 3700U 2.3 GHz (4 cores)':
return res.json({
score:'731'
})
break;

case 'Intel Core i5-4200H 2.8 GHz (2 cores)':
return res.json({
score:'729'
})
break;

case 'Intel Core i7-2600 3.4 GHz (4 cores)':
return res.json({
score:'728'
})
break;

case 'Intel Core i7-3820QM 2.7 GHz (4 cores)':
return res.json({
score:'726'
})
break;

case 'Intel Core i5-4430S 2.7 GHz (4 cores)':
return res.json({
score:'726'
})
break;

case 'Intel Core i5-4288U 2.6 GHz (2 cores)':
return res.json({
score:'726'
})
break;

case 'AMD Ryzen 5 3580U Microsoft Surface Edition 2.1 GHz (4 cores)':
return res.json({
score:'725'
})
break;

case 'Intel Xeon E5-2690 v2 3.0 GHz (10 cores)':
return res.json({
score:'723'
})
break;

case 'Intel Core i3-4170T 3.2 GHz (2 cores)':
return res.json({
score:'721'
})
break;

case 'Intel Core i5-2500 3.3 GHz (4 cores)':
return res.json({
score:'721'
})
break;

case 'Intel Xeon E3-1245 3.3 GHz (4 cores)':
return res.json({
score:'720'
})
break;

case 'Intel Xeon E5-2637 v3 3.5 GHz (4 cores)':
return res.json({
score:'719'
})
break;

case 'Intel Xeon E5-1650 3.2 GHz (6 cores)':
return res.json({
score:'716'
})
break;

case 'Intel Xeon E3-1240 3.3 GHz (4 cores)':
return res.json({
score:'715'
})
break;

case 'Intel Core i5-5257U 2.7 GHz (2 cores)':
return res.json({
score:'714'
})
break;

case 'Intel Core i5-3470S 2.9 GHz (4 cores)':
return res.json({
score:'714'
})
break;

case 'Intel Core i5-3450 3.1 GHz (4 cores)':
return res.json({
score:'713'
})
break;

case 'Intel Core i5-4590T 2.0 GHz (4 cores)':
return res.json({
score:'712'
})
break;

case 'Intel Core i5-6400T 2.2 GHz (4 cores)':
return res.json({
score:'711'
})
break;

case 'Intel Core i5-4210M 2.6 GHz (2 cores)':
return res.json({
score:'710'
})
break;

case 'Intel Core i3-4160T 3.1 GHz (2 cores)':
return res.json({
score:'709'
})
break;

case 'Intel Core i7-6560U 2.2 GHz (2 cores)':
return res.json({
score:'709'
})
break;

case 'AMD EPYC 7351P 2.4 GHz (16 cores)':
return res.json({
score:'708'
})
break;

case 'Intel Xeon E5-2667 v3 3.2 GHz (8 cores)':
return res.json({
score:'708'
})
break;

case 'Intel Core i7-5600U 2.6 GHz (2 cores)':
return res.json({
score:'707'
})
break;

case 'Intel Core i5-4310M 2.7 GHz (2 cores)':
return res.json({
score:'706'
})
break;

case 'Intel Core i7-4712HQ 2.3 GHz (4 cores)':
return res.json({
score:'706'
})
break;

case 'Intel Pentium G3260 3.3 GHz (2 cores)':
return res.json({
score:'705'
})
break;

case 'Intel Xeon Silver 4108 1.8 GHz (8 cores)':
return res.json({
score:'704'
})
break;

case 'Intel Core i7-3720QM 2.6 GHz (4 cores)':
return res.json({
score:'704'
})
break;

case 'Intel Core i7-3740QM 2.7 GHz (4 cores)':
return res.json({
score:'703'
})
break;

case 'Intel Pentium G3440 3.3 GHz (2 cores)':
return res.json({
score:'703'
})
break;

case 'Intel Core i7-4702HQ 2.2 GHz (4 cores)':
return res.json({
score:'702'
})
break;

case 'AMD Ryzen 7 PRO 2700U 2.2 GHz (4 cores)':
return res.json({
score:'701'
})
break;

case 'Intel Xeon E5-2686 v4 2.3 GHz (8 cores)':
return res.json({
score:'701'
})
break;

case 'AMD EPYC 7401P 2.0 GHz (24 cores)':
return res.json({
score:'700'
})
break;

case 'Intel Xeon E5-2620 v3 2.4 GHz (6 cores)':
return res.json({
score:'699'
})
break;

case 'Intel Xeon E5-2683 v3 2.0 GHz (14 cores)':
return res.json({
score:'697'
})
break;

case 'Intel Xeon E5-2630 v3 2.4 GHz (8 cores)':
return res.json({
score:'696'
})
break;

case 'Intel Xeon Silver 4110 2.1 GHz (8 cores)':
return res.json({
score:'696'
})
break;

case 'Intel Pentium G3420 3.2 GHz (2 cores)':
return res.json({
score:'696'
})
break;

case 'Intel Xeon E5-2630 v4 2.2 GHz (10 cores)':
return res.json({
score:'695'
})
break;

case 'Intel Core i7-4860HQ 2.4 GHz (4 cores)':
return res.json({
score:'695'
})
break;

case 'AMD Ryzen 5 PRO 2500U 2.0 GHz (4 cores)':
return res.json({
score:'695'
})
break;

case 'Intel Core i5-4278U 2.6 GHz (2 cores)':
return res.json({
score:'695'
})
break;

case 'Intel Core i5-7200U 2.5 GHz (2 cores)':
return res.json({
score:'693'
})
break;

case 'Intel Xeon E5-2670 v3 2.3 GHz (12 cores)':
return res.json({
score:'693'
})
break;

case 'Intel Celeron G3930 2.9 GHz (2 cores)':
return res.json({
score:'693'
})
break;

case 'Intel Core i7-4702MQ 2.2 GHz (4 cores)':
return res.json({
score:'693'
})
break;

case 'Intel Core i5-6260U 1.8 GHz (2 cores)':
return res.json({
score:'692'
})
break;

case 'Intel Xeon Silver 4114 2.2 GHz (10 cores)':
return res.json({
score:'692'
})
break;

case 'Intel Pentium G4400T 2.9 GHz (2 cores)':
return res.json({
score:'689'
})
break;

case 'Intel Xeon E5-2687W 3.1 GHz (8 cores)':
return res.json({
score:'689'
})
break;

case 'Intel Xeon E5-2620 v4 2.1 GHz (8 cores)':
return res.json({
score:'688'
})
break;

case 'Intel Core i5-4300M 2.6 GHz (2 cores)':
return res.json({
score:'688'
})
break;

case 'Intel Core i5-5350U 1.8 GHz (2 cores)':
return res.json({
score:'686'
})
break;

case 'Intel Core i7-2920XM 2.5 GHz (4 cores)':
return res.json({
score:'686'
})
break;

case 'Intel Core i5-3450S 2.8 GHz (4 cores)':
return res.json({
score:'685'
})
break;

case 'Intel Core i7-7600U 2.8 GHz (2 cores)':
return res.json({
score:'685'
})
break;

case 'Intel Xeon E5-2640 v4 2.4 GHz (10 cores)':
return res.json({
score:'683'
})
break;

case 'Intel Core i7-2600S 2.8 GHz (4 cores)':
return res.json({
score:'683'
})
break;

case 'Intel Celeron G3900 2.8 GHz (2 cores)':
return res.json({
score:'681'
})
break;

case 'Intel Xeon E3-1230 3.2 GHz (4 cores)':
return res.json({
score:'681'
})
break;

case 'Intel Core i5-3570T 2.3 GHz (4 cores)':
return res.json({
score:'680'
})
break;

case 'Intel Core i5-3340S 2.8 GHz (4 cores)':
return res.json({
score:'679'
})
break;

case 'Intel Xeon E5-2680 v3 2.5 GHz (12 cores)':
return res.json({
score:'679'
})
break;

case 'Intel Core i5-3350P 3.1 GHz (4 cores)':
return res.json({
score:'677'
})
break;

case 'Intel Core i7-4600U 2.1 GHz (2 cores)':
return res.json({
score:'673'
})
break;

case 'Intel Xeon E5-2667 2.9 GHz (6 cores)':
return res.json({
score:'671'
})
break;

case 'Intel Xeon Silver 4116 2.1 GHz (12 cores)':
return res.json({
score:'671'
})
break;

case 'Intel Core i5-2500S 2.7 GHz (4 cores)':
return res.json({
score:'671'
})
break;

case 'Intel Xeon E5-2650 v3 2.3 GHz (10 cores)':
return res.json({
score:'670'
})
break;

case 'Intel Core i3-3250 3.5 GHz (2 cores)':
return res.json({
score:'670'
})
break;

case 'Intel Core i7-3615QM 2.3 GHz (4 cores)':
return res.json({
score:'669'
})
break;

case 'Intel Core i7-4765T 2.0 GHz (4 cores)':
return res.json({
score:'668'
})
break;

case 'AMD Ryzen 3 3200U 2.6 GHz (2 cores)':
return res.json({
score:'668'
})
break;

case 'Intel Core i5-2400 3.1 GHz (4 cores)':
return res.json({
score:'668'
})
break;

case 'Intel Core i5-3470T 2.9 GHz (2 cores)':
return res.json({
score:'666'
})
break;

case 'Intel Xeon W3690 3.5 GHz (6 cores)':
return res.json({
score:'666'
})
break;

case 'Intel Core i5-3330 3.0 GHz (4 cores)':
return res.json({
score:'664'
})
break;

case 'AMD Ryzen 5 2500U 2.0 GHz (4 cores)':
return res.json({
score:'664'
})
break;

case 'Intel Core i7-990X 3.5 GHz (6 cores)':
return res.json({
score:'664'
})
break;

case 'Intel Core i5-4200M 2.5 GHz (2 cores)':
return res.json({
score:'663'
})
break;

case 'Intel Core i7-3540M 3.0 GHz (2 cores)':
return res.json({
score:'663'
})
break;

case 'Intel Xeon E5-2690 2.9 GHz (8 cores)':
return res.json({
score:'662'
})
break;

case 'Intel Xeon E5-2680 v2 2.8 GHz (10 cores)':
return res.json({
score:'661'
})
break;

case 'Intel Xeon E3-1225 3.1 GHz (4 cores)':
return res.json({
score:'660'
})
break;

case 'Intel Core i7-3630QM 2.4 GHz (4 cores)':
return res.json({
score:'658'
})
break;

case 'Intel Xeon E3-1220 3.1 GHz (4 cores)':
return res.json({
score:'656'
})
break;

case 'Intel Xeon E5-2697 v2 2.7 GHz (12 cores)':
return res.json({
score:'655'
})
break;

case 'Intel Core i3-6100H 2.7 GHz (2 cores)':
return res.json({
score:'654'
})
break;

case 'AMD Ryzen 7 2700U 2.2 GHz (4 cores)':
return res.json({
score:'654'
})
break;

case 'Intel Core i7-2760QM 2.4 GHz (4 cores)':
return res.json({
score:'653'
})
break;

case 'Intel Core i7-3520M 2.9 GHz (2 cores)':
return res.json({
score:'652'
})
break;

case 'Intel Core i5-4258U 2.4 GHz (2 cores)':
return res.json({
score:'652'
})
break;

case 'Intel Pentium G3250 3.2 GHz (2 cores)':
return res.json({
score:'652'
})
break;

case 'Intel Core i3-4150T 3.0 GHz (2 cores)':
return res.json({
score:'652'
})
break;

case 'Intel Xeon W3680 3.3 GHz (6 cores)':
return res.json({
score:'651'
})
break;

case 'AMD Ryzen 3 2200U 2.5 GHz (2 cores)':
return res.json({
score:'650'
})
break;

case 'Intel Xeon E3-1220 v2 3.1 GHz (4 cores)':
return res.json({
score:'650'
})
break;

case 'Intel Core i7-3610QM 2.3 GHz (4 cores)':
return res.json({
score:'647'
})
break;

case 'Intel Xeon E5-2680 2.7 GHz (8 cores)':
return res.json({
score:'646'
})
break;

case 'Intel Core i5-3340 3.1 GHz (4 cores)':
return res.json({
score:'644'
})
break;

case 'Intel Core i7-5500U 2.4 GHz (2 cores)':
return res.json({
score:'644'
})
break;

case 'Intel Core i5-2320 3.0 GHz (4 cores)':
return res.json({
score:'644'
})
break;

case 'Intel Core i3-7130U 2.7 GHz (2 cores)':
return res.json({
score:'643'
})
break;

case 'AMD FX-9590 4.7 GHz (8 cores)':
return res.json({
score:'642'
})
break;

case 'Intel Xeon X5690 3.5 GHz (6 cores)':
return res.json({
score:'641'
})
break;

case 'Intel Core i5-5300U 2.3 GHz (2 cores)':
return res.json({
score:'640'
})
break;

case 'Intel Xeon X5677 3.5 GHz (4 cores)':
return res.json({
score:'640'
})
break;

case 'Intel Core i7-4510U 2.0 GHz (2 cores)':
return res.json({
score:'638'
})
break;

case 'Intel Core i5-3335S 2.7 GHz (4 cores)':
return res.json({
score:'638'
})
break;

case 'Intel Core i5-6300U 2.4 GHz (2 cores)':
return res.json({
score:'637'
})
break;

case 'Intel Core i3-3225 3.3 GHz (2 cores)':
return res.json({
score:'635'
})
break;

case 'Intel Pentium G2130 3.2 GHz (2 cores)':
return res.json({
score:'633'
})
break;

case 'Intel Xeon E5-1607 v2 3.0 GHz (4 cores)':
return res.json({
score:'633'
})
break;

case 'Intel Core i7-980X 3.3 GHz (6 cores)':
return res.json({
score:'633'
})
break;

case 'Intel Core i3-4130T 2.9 GHz (2 cores)':
return res.json({
score:'632'
})
break;

case 'Intel Core i7-2860QM 2.5 GHz (4 cores)':
return res.json({
score:'632'
})
break;

case 'Intel Core i7-3635QM 2.4 GHz (4 cores)':
return res.json({
score:'630'
})
break;

case 'Intel Xeon E5-2623 v4 2.6 GHz (4 cores)':
return res.json({
score:'630'
})
break;

case 'Intel Core i7-4650U 1.7 GHz (2 cores)':
return res.json({
score:'630'
})
break;

case 'Intel Xeon E3-1265L v2 2.5 GHz (4 cores)':
return res.json({
score:'625'
})
break;

case 'Intel Core i5-3330S 2.7 GHz (4 cores)':
return res.json({
score:'625'
})
break;

case 'Intel Pentium G3220 3.0 GHz (2 cores)':
return res.json({
score:'624'
})
break;

case 'Intel Pentium G3240 3.1 GHz (2 cores)':
return res.json({
score:'624'
})
break;

case 'Intel Xeon E5-2650 v2 2.6 GHz (8 cores)':
return res.json({
score:'624'
})
break;

case 'Intel Core i5-2310 2.9 GHz (4 cores)':
return res.json({
score:'622'
})
break;

case 'Intel Core i5-3340M 2.7 GHz (2 cores)':
return res.json({
score:'621'
})
break;

case 'Intel Core i5-3360M 2.8 GHz (2 cores)':
return res.json({
score:'620'
})
break;

case 'AMD FX-9370 4.4 GHz (8 cores)':
return res.json({
score:'619'
})
break;

case 'Intel Core i7-3632QM 2.2 GHz (4 cores)':
return res.json({
score:'618'
})
break;

case 'Intel Xeon X5680 3.3 GHz (6 cores)':
return res.json({
score:'616'
})
break;

case 'Intel Xeon E5-1607 3.0 GHz (4 cores)':
return res.json({
score:'615'
})
break;

case 'Intel Core i7-2820QM 2.3 GHz (4 cores)':
return res.json({
score:'614'
})
break;

case 'Intel Core i7-4500U 1.8 GHz (2 cores)':
return res.json({
score:'613'
})
break;

case 'Intel Core i5-3380M 2.9 GHz (2 cores)':
return res.json({
score:'613'
})
break;

case 'Intel Xeon E5-2643 3.3 GHz (4 cores)':
return res.json({
score:'613'
})
break;

case 'Intel Core i3-3220 3.3 GHz (2 cores)':
return res.json({
score:'613'
})
break;

case 'Intel Core i5-2400S 2.5 GHz (4 cores)':
return res.json({
score:'611'
})
break;

case 'Intel Xeon E5-2630 v2 2.6 GHz (6 cores)':
return res.json({
score:'610'
})
break;

case 'Intel Core i7-3612QM 2.1 GHz (4 cores)':
return res.json({
score:'608'
})
break;

case 'Intel Core i5-2300 2.8 GHz (4 cores)':
return res.json({
score:'606'
})
break;

case 'Intel Core i7-975 3.3 GHz (4 cores)':
return res.json({
score:'605'
})
break;

case 'Intel Celeron G1850 2.9 GHz (2 cores)':
return res.json({
score:'605'
})
break;

case 'Intel Core i5-4300U 1.9 GHz (2 cores)':
return res.json({
score:'605'
})
break;

case 'Intel Xeon X5675 3.1 GHz (6 cores)':
return res.json({
score:'603'
})
break;

case 'Intel Core i3-3240 3.4 GHz (2 cores)':
return res.json({
score:'599'
})
break;

case 'Intel Core i5-3320M 2.6 GHz (2 cores)':
return res.json({
score:'599'
})
break;

case 'Intel Xeon E5-2670 2.6 GHz (8 cores)':
return res.json({
score:'598'
})
break;

case 'Intel Core i3-2125 3.3 GHz (2 cores)':
return res.json({
score:'598'
})
break;

case 'Intel Pentium G2120 3.1 GHz (2 cores)':
return res.json({
score:'597'
})
break;

case 'Intel Core i5-5250U 1.6 GHz (2 cores)':
return res.json({
score:'596'
})
break;

case 'Intel Core i7-2640M 2.8 GHz (2 cores)':
return res.json({
score:'594'
})
break;

case 'Intel Core i7-970 3.2 GHz (6 cores)':
return res.json({
score:'593'
})
break;

case 'Intel Core i7-2620M 2.7 GHz (2 cores)':
return res.json({
score:'592'
})
break;

case 'Intel Core i5-2405S 2.5 GHz (4 cores)':
return res.json({
score:'590'
})
break;

case 'AMD FX-8370 4.0 GHz (8 cores)':
return res.json({
score:'588'
})
break;

case 'Intel Xeon 2.2 GHz (4 cores)':
return res.json({
score:'588'
})
break;

case 'Intel Core i7-3667U 2.0 GHz (2 cores)':
return res.json({
score:'587'
})
break;

case 'Intel Core i3-5157U 2.5 GHz (2 cores)':
return res.json({
score:'584'
})
break;

case 'Intel Core i3-2120 3.3 GHz (2 cores)':
return res.json({
score:'584'
})
break;

case 'Intel Celeron G1840 2.8 GHz (2 cores)':
return res.json({
score:'582'
})
break;

case 'Intel Core i3-7100U 2.4 GHz (2 cores)':
return res.json({
score:'582'
})
break;

case 'Intel Core i5-3230M 2.6 GHz (2 cores)':
return res.json({
score:'580'
})
break;

case 'Intel Core i5-4260U 1.4 GHz (2 cores)':
return res.json({
score:'579'
})
break;

case 'Intel Xeon E5-2660 v2 2.2 GHz (10 cores)':
return res.json({
score:'577'
})
break;

case 'Intel Core i5-5200U 2.2 GHz (2 cores)':
return res.json({
score:'577'
})
break;

case 'Intel Core i7-965 3.2 GHz (4 cores)':
return res.json({
score:'576'
})
break;

case 'Intel Core i7-960 3.2 GHz (4 cores)':
return res.json({
score:'575'
})
break;

case 'Intel Celeron G1820 2.7 GHz (2 cores)':
return res.json({
score:'573'
})
break;

case 'Intel Core i5-6200U 2.3 GHz (2 cores)':
return res.json({
score:'573'
})
break;

case 'Intel Core i7-875K 2.9 GHz (4 cores)':
return res.json({
score:'573'
})
break;

case 'AMD FX-4350 4.2 GHz (4 cores)':
return res.json({
score:'572'
})
break;

case 'AMD FX-8350 4.0 GHz (8 cores)':
return res.json({
score:'572'
})
break;

case 'Intel Core i5-4250U 1.3 GHz (2 cores)':
return res.json({
score:'571'
})
break;

case 'Intel Xeon E5-2665 2.4 GHz (8 cores)':
return res.json({
score:'571'
})
break;

case 'Intel Xeon E5-1603 2.8 GHz (4 cores)':
return res.json({
score:'569'
})
break;

case 'Intel Xeon E5-2695 v2 2.4 GHz (12 cores)':
return res.json({
score:'569'
})
break;

case 'Intel Core i7-4558U 2.8 GHz (2 cores)':
return res.json({
score:'567'
})
break;

case 'Intel Core i5-4310U 2.0 GHz (2 cores)':
return res.json({
score:'566'
})
break;

case 'Intel Core i3-6100U 2.3 GHz (2 cores)':
return res.json({
score:'566'
})
break;

case 'Intel Core i5-2540M 2.6 GHz (2 cores)':
return res.json({
score:'566'
})
break;

case 'Intel Core i5-4460T 1.9 GHz (4 cores)':
return res.json({
score:'565'
})
break;

case 'Intel Core i7-3687U 2.1 GHz (2 cores)':
return res.json({
score:'565'
})
break;

case 'Intel Core i7-2635QM 2.0 GHz (4 cores)':
return res.json({
score:'564'
})
break;

case 'Intel Core i3-2105 3.1 GHz (2 cores)':
return res.json({
score:'562'
})
break;

case 'Intel Xeon E5-2640 2.5 GHz (6 cores)':
return res.json({
score:'562'
})
break;

case 'Intel Xeon X5670 2.9 GHz (6 cores)':
return res.json({
score:'562'
})
break;

case 'AMD FX-4330 4.0 GHz (2 cores)':
return res.json({
score:'561'
})
break;

case 'Intel Xeon E5-2420 v2 2.2 GHz (6 cores)':
return res.json({
score:'561'
})
break;

case 'Intel Core i3-7020U 2.3 GHz (2 cores)':
return res.json({
score:'561'
})
break;

case 'Intel Core i5-3210M 2.5 GHz (2 cores)':
return res.json({
score:'561'
})
break;

case 'Intel Core i3-2130 3.4 GHz (2 cores)':
return res.json({
score:'558'
})
break;

case 'Intel Xeon X5570 2.9 GHz (4 cores)':
return res.json({
score:'558'
})
break;

case 'Intel Pentium G2030 3.0 GHz (2 cores)':
return res.json({
score:'554'
})
break;

case 'AMD Athlon X4 870K 3.9 GHz (2 cores)':
return res.json({
score:'553'
})
break;

case 'AMD A12-9800 3.8 GHz (4 cores)':
return res.json({
score:'552'
})
break;

case 'Intel Core i7-940XM 2.1 GHz (4 cores)':
return res.json({
score:'552'
})
break;

case 'AMD FX - 4320 4.0 GHz (2 cores)':
return res.json({
score:'550'
})
break;

case 'Intel Core i3-2100 3.1 GHz (2 cores)':
return res.json({
score:'550'
})
break;

case 'Intel Xeon W3670 3.2 GHz (6 cores)':
return res.json({
score:'549'
})
break;

case 'Intel Xeon E5-2660 2.2 GHz (8 cores)':
return res.json({
score:'549'
})
break;

case 'Intel Xeon W3550 3.1 GHz (4 cores)':
return res.json({
score:'547'
})
break;

case 'Intel Core i7-3537U 2.0 GHz (2 cores)':
return res.json({
score:'546'
})
break;

case 'Intel Core i5-4210U 1.7 GHz (2 cores)':
return res.json({
score:'546'
})
break;

case 'Intel Core i5-2520M 2.5 GHz (2 cores)':
return res.json({
score:'546'
})
break;

case 'Intel Core i7-870 2.9 GHz (4 cores)':
return res.json({
score:'545'
})
break;

case 'Intel Xeon W3565 3.2 GHz (4 cores)':
return res.json({
score:'545'
})
break;

case 'AMD A10-6800K 4.1 GHz (4 cores)':
return res.json({
score:'545'
})
break;

case 'Intel Core i3-3210 3.2 GHz (2 cores)':
return res.json({
score:'543'
})
break;

case 'Intel Xeon X5660 2.8 GHz (6 cores)':
return res.json({
score:'543'
})
break;

case 'AMD FX-6350 3.9 GHz (6 cores)':
return res.json({
score:'541'
})
break;

case 'Intel Core i7-950 3.1 GHz (4 cores)':
return res.json({
score:'540'
})
break;

case 'Intel Core i5-4200U 1.6 GHz (2 cores)':
return res.json({
score:'539'
})
break;

case 'AMD Athlon X4 880K 4.2 GHz (2 cores)':
return res.json({
score:'538'
})
break;

case 'Intel Core i7-2670QM 2.2 GHz (4 cores)':
return res.json({
score:'538'
})
break;

case 'AMD FX-4170 4.2 GHz (2 cores)':
return res.json({
score:'537'
})
break;

case 'Intel Core i3-3240T 2.9 GHz (2 cores)':
return res.json({
score:'537'
})
break;

case 'AMD Athlon X4 860K 3.7 GHz (4 cores)':
return res.json({
score:'537'
})
break;

case 'AMD A10-7870K 3.9 GHz (2 cores)':
return res.json({
score:'537'
})
break;

case 'Intel Core i5-670 3.5 GHz (2 cores)':
return res.json({
score:'537'
})
break;

case 'Intel Xeon W3540 2.9 GHz (4 cores)':
return res.json({
score:'535'
})
break;

case 'AMD A8-6600K 3.9 GHz (4 cores)':
return res.json({
score:'535'
})
break;

case 'Intel Core i5-660 3.3 GHz (2 cores)':
return res.json({
score:'535'
})
break;

case 'AMD FX-6200 3.8 GHz (3 cores)':
return res.json({
score:'533'
})
break;

case 'AMD A10-6700 3.7 GHz (4 cores)':
return res.json({
score:'531'
})
break;

case 'Intel Core i5-2450M 2.5 GHz (2 cores)':
return res.json({
score:'531'
})
break;

case 'Intel Pentium G2010 2.8 GHz (2 cores)':
return res.json({
score:'530'
})
break;

case 'Intel Pentium G870 3.1 GHz (2 cores)':
return res.json({
score:'530'
})
break;

case 'Intel Pentium 4415U 2.3 GHz (2 cores)':
return res.json({
score:'530'
})
break;

case 'Intel Core i5-2435M 2.4 GHz (2 cores)':
return res.json({
score:'530'
})
break;

case 'AMD FX-8320 3.5 GHz (8 cores)':
return res.json({
score:'529'
})
break;

case 'AMD FX-6300 3.5 GHz (6 cores)':
return res.json({
score:'529'
})
break;

case 'Intel Xeon E5-2630 2.3 GHz (6 cores)':
return res.json({
score:'529'
})
break;

case 'Intel Core i7-2637M 1.7 GHz (2 cores)':
return res.json({
score:'527'
})
break;

case 'AMD Athlon X4 845 3.5 GHz (2 cores)':
return res.json({
score:'526'
})
break;

case 'Intel Core i7-640M 2.8 GHz (2 cores)':
return res.json({
score:'526'
})
break;

case 'Intel Pentium G2020 2.9 GHz (2 cores)':
return res.json({
score:'523'
})
break;

case 'AMD FX-8150 3.6 GHz (8 cores)':
return res.json({
score:'522'
})
break;

case 'Intel Core i3-4000M 2.4 GHz (2 cores)':
return res.json({
score:'521'
})
break;

case 'Intel Core i5-760 2.8 GHz (4 cores)':
return res.json({
score:'521'
})
break;

case 'Intel Core i3-4100M 2.5 GHz (2 cores)':
return res.json({
score:'520'
})
break;

case 'Intel Core i5-650 3.2 GHz (2 cores)':
return res.json({
score:'520'
})
break;

case 'AMD FX-4300 3.8 GHz (4 cores)':
return res.json({
score:'519'
})
break;

case 'AMD FX-8300 3.3 GHz (8 cores)':
return res.json({
score:'519'
})
break;

case 'Intel Pentium G3220T 2.6 GHz (2 cores)':
return res.json({
score:'519'
})
break;

case 'Intel Core i7-2720QM 2.2 GHz (4 cores)':
return res.json({
score:'519'
})
break;

case 'Intel Core i7-2675QM 2.2 GHz (4 cores)':
return res.json({
score:'518'
})
break;

case 'AMD A10-5800K 3.8 GHz (2 cores)':
return res.json({
score:'518'
})
break;

case 'AMD A10-7850K 3.7 GHz (4 cores)':
return res.json({
score:'517'
})
break;

case 'Intel Pentium G850 2.9 GHz (2 cores)':
return res.json({
score:'517'
})
break;

case 'Intel Core i3-3220T 2.8 GHz (2 cores)':
return res.json({
score:'516'
})
break;

case 'Intel Core i7-2630QM 2.0 GHz (4 cores)':
return res.json({
score:'516'
})
break;

case 'Intel Xeon W3530 2.8 GHz (4 cores)':
return res.json({
score:'514'
})
break;

case 'Intel Pentium G860 3.0 GHz (2 cores)':
return res.json({
score:'514'
})
break;

case 'AMD Athlon X4 840 3.1 GHz (4 cores)':
return res.json({
score:'514'
})
break;

case 'Intel Celeron G1620 2.7 GHz (2 cores)':
return res.json({
score:'514'
})
break;

case 'AMD A10-8750 3.6 GHz (4 cores)':
return res.json({
score:'512'
})
break;

case 'AMD Athlon X4 950 3.5 GHz (4 cores)':
return res.json({
score:'512'
})
break;

case 'Intel Core i7-860 2.8 GHz (4 cores)':
return res.json({
score:'511'
})
break;

case 'Intel Core i5-2430M 2.4 GHz (2 cores)':
return res.json({
score:'510'
})
break;

case 'Intel Core i7-2960XM 2.7 GHz (4 cores)':
return res.json({
score:'509'
})
break;

case 'Intel Core i5-680 3.6 GHz (2 cores)':
return res.json({
score:'508'
})
break;

case 'Intel Xeon X5650 2.7 GHz (6 cores)':
return res.json({
score:'507'
})
break;

case 'Intel Core i7-940 2.9 GHz (4 cores)':
return res.json({
score:'507'
})
break;

case 'AMD A10-7860K 3.6 GHz (4 cores)':
return res.json({
score:'506'
})
break;

case 'Intel Core i7-3517U 1.9 GHz (2 cores)':
return res.json({
score:'506'
})
break;

case 'Intel Pentium G840 2.8 GHz (2 cores)':
return res.json({
score:'503'
})
break;

case 'Intel Core i5-750 2.7 GHz (4 cores)':
return res.json({
score:'502'
})
break;

case 'Intel Core i7-930 2.8 GHz (4 cores)':
return res.json({
score:'501'
})
break;

case 'AMD FX-6120 3.5 GHz (3 cores)':
return res.json({
score:'501'
})
break;

case 'AMD Phenom II X6 1100T Black Edition 3.7 GHz (6 cores)':
return res.json({
score:'500'
})
break;

case 'Intel Core M-5Y51 1.1 GHz (2 cores)':
return res.json({
score:'499'
})
break;

case 'Intel Celeron 3955U 2.0 GHz (2 cores)':
return res.json({
score:'498'
})
break;

case 'AMD FX-8320E 3.2 GHz (8 cores)':
return res.json({
score:'497'
})
break;

case 'Intel Xeon X3450 2.7 GHz (4 cores)':
return res.json({
score:'496'
})
break;

case 'AMD A8-5600K 3.6 GHz (4 cores)':
return res.json({
score:'495'
})
break;

case 'Intel Core i5-661 3.3 GHz (2 cores)':
return res.json({
score:'495'
})
break;

case 'Intel Xeon E5-2430 2.2 GHz (6 cores)':
return res.json({
score:'494'
})
break;

case 'AMD Athlon X4 750K 3.4 GHz (4 cores)':
return res.json({
score:'494'
})
break;

case 'Intel Core i3-6006U 2.0 GHz (2 cores)':
return res.json({
score:'493'
})
break;

case 'Intel Xeon E5-2630L v2 2.4 GHz (6 cores)':
return res.json({
score:'493'
})
break;

case 'AMD FX - 770K 3.5 GHz (2 cores)':
return res.json({
score:'492'
})
break;

case 'AMD A10 PRO-7800B 3.5 GHz (4 cores)':
return res.json({
score:'492'
})
break;

case 'Intel Celeron G1610 2.6 GHz (2 cores)':
return res.json({
score:'492'
})
break;

case 'Intel Core i3-5010U 2.1 GHz (2 cores)':
return res.json({
score:'491'
})
break;

case 'AMD A10-7800 3.5 GHz (4 cores)':
return res.json({
score:'490'
})
break;

case 'AMD A10-9700 3.5 GHz (4 cores)':
return res.json({
score:'490'
})
break;

case 'Intel Core i5-2410M 2.3 GHz (2 cores)':
return res.json({
score:'490'
})
break;

case 'Intel Pentium G640 2.8 GHz (2 cores)':
return res.json({
score:'489'
})
break;

case 'Intel Xeon L5640 2.3 GHz (6 cores)':
return res.json({
score:'489'
})
break;

case 'Intel Core i5-3337U 1.8 GHz (2 cores)':
return res.json({
score:'488'
})
break;

case 'Intel Xeon E5-2620 v2 2.1 GHz (6 cores)':
return res.json({
score:'488'
})
break;

case 'AMD A8-7600 3.1 GHz (4 cores)':
return res.json({
score:'487'
})
break;

case 'AMD A6-9500 3.5 GHz (2 cores)':
return res.json({
score:'487'
})
break;

case 'AMD PRO A10-9700E 3.0 GHz (4 cores)':
return res.json({
score:'487'
})
break;

case 'Intel Pentium G645 2.9 GHz (2 cores)':
return res.json({
score:'487'
})
break;

case 'Intel Pentium 4405U 2.1 GHz (2 cores)':
return res.json({
score:'486'
})
break;

case 'AMD Athlon X4 760K 3.8 GHz (4 cores)':
return res.json({
score:'486'
})
break;

case 'Intel Xeon E5640 2.7 GHz (4 cores)':
return res.json({
score:'485'
})
break;

case 'AMD A8-6500 3.5 GHz (4 cores)':
return res.json({
score:'483'
})
break;

case 'Intel Core M-5Y70 1.1 GHz (2 cores)':
return res.json({
score:'483'
})
break;

case 'AMD FX-8120 3.1 GHz (8 cores)':
return res.json({
score:'483'
})
break;

case 'Intel Xeon E5-2609 2.4 GHz (4 cores)':
return res.json({
score:'482'
})
break;

case 'Intel Core i3-5015U 2.1 GHz (2 cores)':
return res.json({
score:'482'
})
break;

case 'Intel Xeon W3520 2.7 GHz (4 cores)':
return res.json({
score:'482'
})
break;

case 'Intel Core i5-3437U 1.9 GHz (2 cores)':
return res.json({
score:'481'
})
break;

case 'Intel Core i3-550 3.2 GHz (2 cores)':
return res.json({
score:'481'
})
break;

case 'AMD A8-7650K 3.3 GHz (4 cores)':
return res.json({
score:'479'
})
break;

case 'AMD A8-9600 3.1 GHz (4 cores)':
return res.json({
score:'479'
})
break;

case 'Intel Xeon E5649 2.5 GHz (6 cores)':
return res.json({
score:'479'
})
break;

case 'Intel Core M-5Y10 800 MHz (2 cores)':
return res.json({
score:'476'
})
break;

case 'AMD Phenom II X4 975 Black Edition 3.6 GHz (4 cores)':
return res.json({
score:'476'
})
break;

case 'Intel Xeon X5550 2.7 GHz (4 cores)':
return res.json({
score:'475'
})
break;

case 'Intel Xeon E5-2420 1.9 GHz (6 cores)':
return res.json({
score:'475'
})
break;

case 'Intel Xeon X3460 2.8 GHz (4 cores)':
return res.json({
score:'475'
})
break;

case 'AMD FX-4100 3.6 GHz (4 cores)':
return res.json({
score:'473'
})
break;

case 'AMD FX-4130 3.8 GHz (4 cores)':
return res.json({
score:'472'
})
break;

case 'Intel Core i7-620M 2.7 GHz (2 cores)':
return res.json({
score:'472'
})
break;

case 'Intel Xeon E5-2603 v4 1.7 GHz (6 cores)':
return res.json({
score:'471'
})
break;

case 'AMD PRO A10-8750B 3.6 GHz (4 cores)':
return res.json({
score:'471'
})
break;

case 'Intel Core 2 Duo E8600 3.3 GHz (2 cores)':
return res.json({
score:'471'
})
break;

case 'AMD A10-5700 3.4 GHz (4 cores)':
return res.json({
score:'470'
})
break;

case 'Intel Core M-5Y10c 800 MHz (2 cores)':
return res.json({
score:'470'
})
break;

case 'Intel Core i7-920 2.7 GHz (4 cores)':
return res.json({
score:'470'
})
break;

case 'Intel Pentium G630 2.7 GHz (2 cores)':
return res.json({
score:'468'
})
break;

case 'Intel Core i7-2677M 1.8 GHz (2 cores)':
return res.json({
score:'467'
})
break;

case 'Intel Core i3-3120M 2.5 GHz (2 cores)':
return res.json({
score:'466'
})
break;

case 'AMD A8-5500 3.2 GHz (4 cores)':
return res.json({
score:'466'
})
break;

case 'AMD A6-6400K 3.9 GHz (2 cores)':
return res.json({
score:'465'
})
break;

case 'AMD PRO A12-8830B 2.5 GHz (4 cores)':
return res.json({
score:'465'
})
break;

case 'Intel Core i5-4202Y 1.6 GHz (2 cores)':
return res.json({
score:'465'
})
break;

case 'AMD FX-6100 3.3 GHz (6 cores)':
return res.json({
score:'464'
})
break;

case 'Intel Pentium G620 2.6 GHz (2 cores)':
return res.json({
score:'462'
})
break;

case 'Intel Xeon X3440 2.5 GHz (4 cores)':
return res.json({
score:'462'
})
break;

case 'AMD Phenom II X6 1090T Black Edition 3.2 GHz (6 cores)':
return res.json({
score:'462'
})
break;

case 'Intel Xeon E5-2650 2.0 GHz (8 cores)':
return res.json({
score:'461'
})
break;

case 'AMD Athlon X4 740 3.2 GHz (4 cores)':
return res.json({
score:'461'
})
break;

case 'Intel Core i3-540 3.1 GHz (2 cores)':
return res.json({
score:'461'
})
break;

case 'Intel Xeon X5482 3.2 GHz (4 cores)':
return res.json({
score:'460'
})
break;

case 'Intel Core i5-3427U 1.8 GHz (2 cores)':
return res.json({
score:'460'
})
break;

case 'AMD A8 PRO-7600B 3.1 GHz (4 cores)':
return res.json({
score:'460'
})
break;

case 'Intel Core 2 Duo T9900 3.1 GHz (2 cores)':
return res.json({
score:'460'
})
break;

case 'Intel Core 2 Extreme X9650 3.0 GHz (4 cores)':
return res.json({
score:'459'
})
break;

case 'Intel Core i5-3317U 1.7 GHz (2 cores)':
return res.json({
score:'459'
})
break;

case 'Intel Core i5-2415M 2.3 GHz (2 cores)':
return res.json({
score:'458'
})
break;

case 'AMD A8-6500B 3.5 GHz (4 cores)':
return res.json({
score:'457'
})
break;

case 'Intel Core i5-4300Y 1.6 GHz (2 cores)':
return res.json({
score:'457'
})
break;

case 'Intel Celeron G550 2.6 GHz (2 cores)':
return res.json({
score:'455'
})
break;

case 'Intel Core i3-5005U 2.0 GHz (2 cores)':
return res.json({
score:'454'
})
break;

case 'Intel Xeon E5645 2.4 GHz (6 cores)':
return res.json({
score:'454'
})
break;

case 'Intel Pentium Silver J5005 1.5 GHz (4 cores)':
return res.json({
score:'452'
})
break;

case 'AMD Phenom II X4 965 Black Edition 3.4 GHz (4 cores)':
return res.json({
score:'451'
})
break;

case 'Intel Core i5-560M 2.7 GHz (2 cores)':
return res.json({
score:'450'
})
break;

case 'Intel Xeon E5-2620 2.0 GHz (6 cores)':
return res.json({
score:'450'
})
break;

case 'AMD A4-6300 3.7 GHz (2 cores)':
return res.json({
score:'449'
})
break;

case 'AMD A4-5300 3.4 GHz (2 cores)':
return res.json({
score:'449'
})
break;

case 'Intel Core i3-3110M 2.4 GHz (2 cores)':
return res.json({
score:'447'
})
break;

case 'Intel Core i3-2120T 2.6 GHz (2 cores)':
return res.json({
score:'446'
})
break;

case 'Intel Core i3-5020U 2.2 GHz (2 cores)':
return res.json({
score:'445'
})
break;

case 'AMD A6-7400K 3.5 GHz (1 core)':
return res.json({
score:'444'
})
break;

case 'Intel Core i5-540M 2.5 GHz (2 cores)':
return res.json({
score:'443'
})
break;

case 'Intel Xeon X5460 3.2 GHz (4 cores)':
return res.json({
score:'441'
})
break;

case 'Intel Core 2 Duo E8500 3.2 GHz (2 cores)':
return res.json({
score:'441'
})
break;

case 'Intel Xeon E5450 3.0 GHz (4 cores)':
return res.json({
score:'440'
})
break;

case 'Intel Core 2 Quad Q9650 3.0 GHz (4 cores)':
return res.json({
score:'440'
})
break;

case 'Intel Core i3-530 2.9 GHz (2 cores)':
return res.json({
score:'439'
})
break;

case 'AMD Phenom II X4 970 Black Edition 3.5 GHz (4 cores)':
return res.json({
score:'438'
})
break;

case 'Intel Xeon X3430 2.4 GHz (4 cores)':
return res.json({
score:'437'
})
break;

case 'AMD A6-5400B 3.6 GHz (2 cores)':
return res.json({
score:'437'
})
break;

case 'AMD A8-5557M 2.1 GHz (4 cores)':
return res.json({
score:'437'
})
break;

case 'Intel Core i5-2557M 1.7 GHz (2 cores)':
return res.json({
score:'437'
})
break;

case 'Intel Celeron 3865U 1.8 GHz (2 cores)':
return res.json({
score:'436'
})
break;

case 'AMD PRO A8-9600B 2.4 GHz (4 cores)':
return res.json({
score:'436'
})
break;

case 'AMD R-Series RX-427BB 2.7 GHz (4 cores)':
return res.json({
score:'436'
})
break;

case 'AMD Phenom II X4 960T 3.0 GHz (4 cores)':
return res.json({
score:'436'
})
break;

case 'AMD A6-5400K 3.6 GHz (2 cores)':
return res.json({
score:'435'
})
break;

case 'Intel Pentium Silver N5000 1.1 GHz (4 cores)':
return res.json({
score:'434'
})
break;

case 'Intel Xeon E5620 2.4 GHz (4 cores)':
return res.json({
score:'434'
})
break;

case 'Intel Core i3-4030U 1.9 GHz (2 cores)':
return res.json({
score:'432'
})
break;

case 'AMD A4-7300 3.8 GHz (2 cores)':
return res.json({
score:'430'
})
break;

case 'AMD Phenom II X2 560 Black Edition 3.3 GHz (2 cores)':
return res.json({
score:'429'
})
break;

case 'Intel Core i7-920XM 2.0 GHz (4 cores)':
return res.json({
score:'428'
})
break;

case 'Intel Celeron G530 2.4 GHz (2 cores)':
return res.json({
score:'428'
})
break;

case 'Intel Core i5-580M 2.7 GHz (2 cores)':
return res.json({
score:'428'
})
break;

case 'AMD PRO A12-9800B 2.7 GHz (4 cores)':
return res.json({
score:'427'
})
break;

case 'Intel Pentium 2020M 2.4 GHz (2 cores)':
return res.json({
score:'427'
})
break;

case 'AMD FX-9830P 3.0 GHz (4 cores)':
return res.json({
score:'425'
})
break;

case 'Intel Core 2 Duo E8400 3.0 GHz (2 cores)':
return res.json({
score:'424'
})
break;

case 'AMD Phenom II X4 955 Black Edition 3.2 GHz (4 cores)':
return res.json({
score:'422'
})
break;

case 'Intel Xeon X5450 3.0 GHz (4 cores)':
return res.json({
score:'420'
})
break;

case 'Intel Xeon E5472 3.0 GHz (4 cores)':
return res.json({
score:'420'
})
break;

case 'Intel Pentium E6700 3.2 GHz (2 cores)':
return res.json({
score:'419'
})
break;

case 'Intel Pentium 3805U 1.9 GHz (2 cores)':
return res.json({
score:'416'
})
break;

case 'Intel Celeron J4105 1.5 GHz (4 cores)':
return res.json({
score:'413'
})
break;

case 'Intel Xeon E5-2603 v3 1.6 GHz (6 cores)':
return res.json({
score:'413'
})
break;

case 'Intel Core i7-840QM 1.9 GHz (4 cores)':
return res.json({
score:'413'
})
break;

case 'AMD Phenom II X2 550 Black Edition 3.1 GHz (2 cores)':
return res.json({
score:'412'
})
break;

case 'Intel Core 2 Duo E7600 3.1 GHz (2 cores)':
return res.json({
score:'411'
})
break;

case 'Intel Core i5-520M 2.4 GHz (2 cores)':
return res.json({
score:'411'
})
break;

case 'Intel Xeon E5440 2.8 GHz (4 cores)':
return res.json({
score:'410'
})
break;

case 'AMD A10-5750M 2.5 GHz (4 cores)':
return res.json({
score:'410'
})
break;

case 'Intel Core 2 Quad Q9550 2.8 GHz (4 cores)':
return res.json({
score:'410'
})
break;

case 'Intel Core i7-640LM 2.1 GHz (2 cores)':
return res.json({
score:'409'
})
break;

case 'Intel Xeon E5520 2.3 GHz (4 cores)':
return res.json({
score:'409'
})
break;

case 'AMD Athlon II X2 270 3.4 GHz (2 cores)':
return res.json({
score:'409'
})
break;

case 'AMD FX-8800P 2.1 GHz (4 cores)':
return res.json({
score:'409'
})
break;

case 'AMD A8-5500B 3.2 GHz (4 cores)':
return res.json({
score:'409'
})
break;

case 'AMD Phenom II X2 555 Black Edition 3.2 GHz (2 cores)':
return res.json({
score:'409'
})
break;

case 'Intel Core 2 Quad Q9450 2.7 GHz (4 cores)':
return res.json({
score:'407'
})
break;

case 'Intel Core i3-2370M 2.4 GHz (2 cores)':
return res.json({
score:'406'
})
break;

case 'AMD FX-4200 3.3 GHz (4 cores)':
return res.json({
score:'406'
})
break;

case 'Intel Core 2 Duo E6850 3.0 GHz (2 cores)':
return res.json({
score:'405'
})
break;

case 'AMD Phenom II X4 940 Black Edition 3.0 GHz (4 cores)':
return res.json({
score:'402'
})
break;

case 'AMD Phenom II X4 945 3.0 GHz (4 cores)':
return res.json({
score:'401'
})
break;

case 'AMD Athlon II X4 651 3.0 GHz (4 cores)':
return res.json({
score:'398'
})
break;

case 'AMD Phenom II X2 545 3.0 GHz (2 cores)':
return res.json({
score:'398'
})
break;

case 'Intel Core 2 Duo T9550 2.7 GHz (2 cores)':
return res.json({
score:'397'
})
break;

case 'Intel Core 2 Quad Q9500 2.8 GHz (4 cores)':
return res.json({
score:'397'
})
break;

case 'Intel Xeon E5462 2.8 GHz (4 cores)':
return res.json({
score:'397'
})
break;

case 'Intel Xeon E5430 2.7 GHz (4 cores)':
return res.json({
score:'397'
})
break;

case 'Intel Core i5-4210Y 1.5 GHz (2 cores)':
return res.json({
score:'397'
})
break;

case 'AMD PRO A8-8600B 1.6 GHz (4 cores)':
return res.json({
score:'397'
})
break;

case 'AMD A4-5300B 3.4 GHz (2 cores)':
return res.json({
score:'396'
})
break;

case 'AMD A6-5357M 2.9 GHz (2 cores)':
return res.json({
score:'396'
})
break;

case 'Intel Pentium 3825U 1.9 GHz (2 cores)':
return res.json({
score:'395'
})
break;

case 'Intel Celeron N4000 1.1 GHz (2 cores)':
return res.json({
score:'395'
})
break;

case 'AMD A10-9620P 2.5 GHz (4 cores)':
return res.json({
score:'395'
})
break;

case 'Intel Core i3-2350M 2.3 GHz (2 cores)':
return res.json({
score:'393'
})
break;

case 'Intel Core i5-460M 2.5 GHz (2 cores)':
return res.json({
score:'392'
})
break;

case 'Intel Core i7-820QM 1.7 GHz (4 cores)':
return res.json({
score:'391'
})
break;

case 'Intel Pentium E6600 3.1 GHz (2 cores)':
return res.json({
score:'391'
})
break;

case 'Intel Core 2 Duo E7500 2.9 GHz (2 cores)':
return res.json({
score:'391'
})
break;

case 'AMD A12-9720P 2.7 GHz (4 cores)':
return res.json({
score:'389'
})
break;

case 'AMD A4-4020 3.2 GHz (2 cores)':
return res.json({
score:'389'
})
break;

case 'Intel Core 2 Duo E8200 2.7 GHz (2 cores)':
return res.json({
score:'388'
})
break;

case 'AMD A10-8700P 1.8 GHz (4 cores)':
return res.json({
score:'387'
})
break;

case 'Intel Core i3-390M 2.7 GHz (2 cores)':
return res.json({
score:'387'
})
break;

case 'AMD Phenom II X4 840 3.2 GHz (4 cores)':
return res.json({
score:'386'
})
break;

case 'Intel Celeron N4100 1.1 GHz (4 cores)':
return res.json({
score:'385'
})
break;

case 'Intel Pentium E5800 3.2 GHz (2 cores)':
return res.json({
score:'384'
})
break;

case 'AMD Athlon II X3 460 3.4 GHz (3 cores)':
return res.json({
score:'383'
})
break;

case 'Intel Pentium B980 2.4 GHz (2 cores)':
return res.json({
score:'383'
})
break;

case 'Intel Core i3-2348M 2.3 GHz (2 cores)':
return res.json({
score:'382'
})
break;

case 'Intel Celeron 3855U 1.6 GHz (2 cores)':
return res.json({
score:'382'
})
break;

case 'Intel Core i5-480M 2.7 GHz (2 cores)':
return res.json({
score:'382'
})
break;

case 'AMD A8-5550M 2.1 GHz (4 cores)':
return res.json({
score:'381'
})
break;

case 'AMD FX-7600P 2.7 GHz (4 cores)':
return res.json({
score:'381'
})
break;

case 'AMD Phenom II X3 720 2.8 GHz (3 cores)':
return res.json({
score:'381'
})
break;

case 'Intel Core i3-4010U 1.7 GHz (2 cores)':
return res.json({
score:'379'
})
break;

case 'Intel Celeron 3215U 1.7 GHz (2 cores)':
return res.json({
score:'379'
})
break;

case 'Intel Core 2 Duo T9600 2.8 GHz (2 cores)':
return res.json({
score:'378'
})
break;

case 'AMD FX-9800P 2.7 GHz (4 cores)':
return res.json({
score:'377'
})
break;

case 'AMD Athlon II X4 645 3.1 GHz (4 cores)':
return res.json({
score:'377'
})
break;

case 'AMD A10-5757M 2.5 GHz (4 cores)':
return res.json({
score:'376'
})
break;

case 'Intel Core i3-4005U 1.7 GHz (2 cores)':
return res.json({
score:'376'
})
break;

case 'Intel Core i5-450M 2.4 GHz (2 cores)':
return res.json({
score:'376'
})
break;

case 'AMD Athlon II X3 435 2.9 GHz (3 cores)':
return res.json({
score:'375'
})
break;

case 'Intel Core i3-2328M 2.2 GHz (2 cores)':
return res.json({
score:'375'
})
break;

case 'Intel Celeron J4005 2.0 GHz (2 cores)':
return res.json({
score:'375'
})
break;

case 'Intel Xeon L5420 2.5 GHz (4 cores)':
return res.json({
score:'375'
})
break;

case 'Intel Celeron 3965Y 1.5 GHz (2 cores)':
return res.json({
score:'374'
})
break;

case 'Intel Core 2 Duo E7400 2.8 GHz (2 cores)':
return res.json({
score:'374'
})
break;

case 'Intel Core 2 Quad Q9400 2.7 GHz (4 cores)':
return res.json({
score:'373'
})
break;

case 'AMD A10-7400P 2.5 GHz (4 cores)':
return res.json({
score:'373'
})
break;

case 'Intel Xeon E5540 2.5 GHz (4 cores)':
return res.json({
score:'373'
})
break;

case 'AMD Phenom II X4 B95 3.0 GHz (4 cores)':
return res.json({
score:'373'
})
break;

case 'AMD Athlon II X2 260 3.2 GHz (2 cores)':
return res.json({
score:'372'
})
break;

case 'AMD Athlon II X3 445 3.1 GHz (3 cores)':
return res.json({
score:'371'
})
break;

case 'AMD Athlon II X3 455 3.3 GHz (3 cores)':
return res.json({
score:'371'
})
break;

case 'Intel Core 2 Duo P8800 2.7 GHz (2 cores)':
return res.json({
score:'371'
})
break;

case 'Intel Xeon X3360 2.8 GHz (4 cores)':
return res.json({
score:'371'
})
break;

case 'AMD Athlon II X4 641 2.8 GHz (4 cores)':
return res.json({
score:'370'
})
break;

case 'AMD Athlon II X3 440 3.0 GHz (3 cores)':
return res.json({
score:'370'
})
break;

case 'AMD A8-3870 3.0 GHz (4 cores)':
return res.json({
score:'369'
})
break;

case 'Intel Pentium B960 2.2 GHz (2 cores)':
return res.json({
score:'369'
})
break;

case 'Intel Pentium 4415Y 1.6 GHz (2 cores)':
return res.json({
score:'369'
})
break;

case 'AMD Athlon II X3 450 3.2 GHz (3 cores)':
return res.json({
score:'369'
})
break;

case 'Intel Core i3-2330M 2.2 GHz (2 cores)':
return res.json({
score:'368'
})
break;

case 'Intel Core 2 Duo E8300 2.8 GHz (2 cores)':
return res.json({
score:'368'
})
break;

case 'Intel Core 2 Duo P9400 2.4 GHz (2 cores)':
return res.json({
score:'367'
})
break;

case 'AMD Athlon II X4 635 2.9 GHz (4 cores)':
return res.json({
score:'367'
})
break;

case 'Intel Xeon E3110 3.0 GHz (2 cores)':
return res.json({
score:'365'
})
break;

case 'Intel Core 2 Quad Q8400 2.7 GHz (4 cores)':
return res.json({
score:'365'
})
break;

case 'Intel Core i3-2310M 2.1 GHz (2 cores)':
return res.json({
score:'364'
})
break;

case 'Intel Core i3-380M 2.5 GHz (2 cores)':
return res.json({
score:'364'
})
break;

case 'Intel Core i7-740QM 1.7 GHz (4 cores)':
return res.json({
score:'364'
})
break;

case 'AMD Phenom II X4 820 2.8 GHz (4 cores)':
return res.json({
score:'364'
})
break;

case 'Intel Pentium 3556U 1.7 GHz (2 cores)':
return res.json({
score:'363'
})
break;

case 'AMD Athlon II X2 B22 2.8 GHz (2 cores)':
return res.json({
score:'363'
})
break;

case 'Intel Pentium 4405Y 1.5 GHz (2 cores)':
return res.json({
score:'363'
})
break;

case 'Intel Pentium 4410Y 1.5 GHz (2 cores)':
return res.json({
score:'363'
})
break;

case 'Intel Core i5-2467M 1.6 GHz (2 cores)':
return res.json({
score:'362'
})
break;

case 'Intel Core 2 Duo T9300 2.5 GHz (2 cores)':
return res.json({
score:'361'
})
break;

case 'Intel Pentium E6300 2.8 GHz (2 cores)':
return res.json({
score:'359'
})
break;

case 'AMD A8-3850 2.9 GHz (4 cores)':
return res.json({
score:'359'
})
break;

case 'Intel Pentium B940 2.0 GHz (2 cores)':
return res.json({
score:'359'
})
break;

case 'AMD A10-9600P 2.4 GHz (4 cores)':
return res.json({
score:'359'
})
break;

case 'Intel Core 2 Duo P9700 2.8 GHz (2 cores)':
return res.json({
score:'359'
})
break;

case 'Intel Core 2 Duo E6750 2.7 GHz (2 cores)':
return res.json({
score:'358'
})
break;

case 'Intel Core 2 Quad Q6700 2.7 GHz (4 cores)':
return res.json({
score:'357'
})
break;

case 'AMD Athlon II X4 640 3.0 GHz (4 cores)':
return res.json({
score:'357'
})
break;

case 'AMD A6-3670 2.7 GHz (4 cores)':
return res.json({
score:'356'
})
break;

case 'Intel Celeron 1037U 1.8 GHz (2 cores)':
return res.json({
score:'356'
})
break;

case 'AMD Athlon II X2 245 2.9 GHz (2 cores)':
return res.json({
score:'356'
})
break;

case 'AMD Athlon II X2 250 3.0 GHz (2 cores)':
return res.json({
score:'355'
})
break;

case 'AMD Phenom II X3 710 2.6 GHz (3 cores)':
return res.json({
score:'354'
})
break;

case 'AMD Phenom II X4 810 2.6 GHz (4 cores)':
return res.json({
score:'354'
})
break;

case 'Intel Pentium E5500 2.8 GHz (2 cores)':
return res.json({
score:'354'
})
break;

case 'Intel Pentium E6500 2.9 GHz (2 cores)':
return res.json({
score:'354'
})
break;

case 'Intel Core i5-430M 2.3 GHz (2 cores)':
return res.json({
score:'354'
})
break;

case 'AMD A10-4600M 2.3 GHz (4 cores)':
return res.json({
score:'353'
})
break;

case 'Intel Pentium B970 2.3 GHz (2 cores)':
return res.json({
score:'353'
})
break;

case 'Intel Pentium 2117U 1.8 GHz (2 cores)':
return res.json({
score:'353'
})
break;

case 'Intel Core 2 Duo T9500 2.6 GHz (2 cores)':
return res.json({
score:'352'
})
break;

case 'Intel Pentium E5700 3.0 GHz (2 cores)':
return res.json({
score:'351'
})
break;

case 'Intel Core 2 Quad Q9300 2.5 GHz (4 cores)':
return res.json({
score:'351'
})
break;

case 'AMD Phenom II X4 925 2.8 GHz (4 cores)':
return res.json({
score:'350'
})
break;

case 'Intel Pentium B950 2.1 GHz (2 cores)':
return res.json({
score:'349'
})
break;

case 'Intel Core i3-370M 2.4 GHz (2 cores)':
return res.json({
score:'349'
})
break;

case 'Intel Core i7-720QM 1.6 GHz (4 cores)':
return res.json({
score:'348'
})
break;

case 'Intel Core i3-3227U 1.9 GHz (2 cores)':
return res.json({
score:'348'
})
break;

case 'AMD A4-3400 2.7 GHz (2 cores)':
return res.json({
score:'348'
})
break;

case 'AMD Athlon II X2 220 2.8 GHz (2 cores)':
return res.json({
score:'348'
})
break;

case 'Intel Celeron 1005M 1.9 GHz (2 cores)':
return res.json({
score:'347'
})
break;

case 'AMD Athlon II X2 B24 3.0 GHz (2 cores)':
return res.json({
score:'347'
})
break;

case 'Intel Core 2 Duo P8700 2.5 GHz (2 cores)':
return res.json({
score:'347'
})
break;

case 'AMD Athlon II X4 630 2.8 GHz (4 cores)':
return res.json({
score:'346'
})
break;

case 'Intel Core i3-4020Y 1.5 GHz (2 cores)':
return res.json({
score:'346'
})
break;

case 'AMD Athlon II X4 631 2.6 GHz (4 cores)':
return res.json({
score:'346'
})
break;

case 'AMD A4-4000 3.0 GHz (2 cores)':
return res.json({
score:'345'
})
break;

case 'AMD FX-7500 2.1 GHz (4 cores)':
return res.json({
score:'343'
})
break;

case 'AMD Athlon II X2 240 2.8 GHz (2 cores)':
return res.json({
score:'343'
})
break;

case 'AMD Athlon II X2 255 3.1 GHz (2 cores)':
return res.json({
score:'342'
})
break;

case 'AMD A4-3420 2.8 GHz (2 cores)':
return res.json({
score:'342'
})
break;

case 'Intel Xeon X3220 2.4 GHz (4 cores)':
return res.json({
score:'342'
})
break;

case 'Intel Core 2 Duo E7300 2.7 GHz (2 cores)':
return res.json({
score:'341'
})
break;

case 'Intel Core 2 Duo E7200 2.5 GHz (2 cores)':
return res.json({
score:'339'
})
break;

case 'Intel Core 2 Quad Q8300 2.5 GHz (4 cores)':
return res.json({
score:'338'
})
break;

case 'Intel Core i3-350M 2.3 GHz (2 cores)':
return res.json({
score:'336'
})
break;

case 'AMD A6-3650 2.6 GHz (4 cores)':
return res.json({
score:'334'
})
break;

case 'Intel Core 2 Quad Q6600 2.4 GHz (4 cores)':
return res.json({
score:'334'
})
break;

case 'AMD Athlon II X2 215 2.7 GHz (2 cores)':
return res.json({
score:'333'
})
break;

case 'Intel Core 2 Duo T9400 2.5 GHz (2 cores)':
return res.json({
score:'333'
})
break;

case 'Intel Core i3-3217U 1.8 GHz (2 cores)':
return res.json({
score:'331'
})
break;

case 'AMD Sempron 140 2.7 GHz (1 core)':
return res.json({
score:'331'
})
break;

case 'AMD PRO A10-8730B 2.4 GHz (4 cores)':
return res.json({
score:'329'
})
break;

case 'Intel Pentium E5400 2.7 GHz (2 cores)':
return res.json({
score:'328'
})
break;

case 'Intel Pentium J4205 1.5 GHz (4 cores)':
return res.json({
score:'326'
})
break;

case 'AMD A6-4400M 2.7 GHz (2 cores)':
return res.json({
score:'325'
})
break;

case 'Intel Celeron B830 1.8 GHz (2 cores)':
return res.json({
score:'322'
})
break;

case 'Intel Pentium N4200 1.1 GHz (4 cores)':
return res.json({
score:'322'
})
break;

case 'Intel Celeron 1000M 1.8 GHz (2 cores)':
return res.json({
score:'322'
})
break;

case 'AMD PRO A10-8700B 1.8 GHz (4 cores)':
return res.json({
score:'321'
})
break;

case 'AMD PRO A12-8800B 2.1 GHz (4 cores)':
return res.json({
score:'321'
})
break;

case 'Intel Core 2 Quad Q8200 2.3 GHz (4 cores)':
return res.json({
score:'321'
})
break;

case 'Intel Core 2 Duo T8300 2.4 GHz (2 cores)':
return res.json({
score:'320'
})
break;

case 'Intel Core 2 Extreme Q9300 2.5 GHz (4 cores)':
return res.json({
score:'319'
})
break;

case 'Intel Celeron 3205U 1.5 GHz (2 cores)':
return res.json({
score:'318'
})
break;

case 'AMD Phenom X4 9950 2.6 GHz (4 cores)':
return res.json({
score:'318'
})
break;

case 'AMD Sempron 145 2.8 GHz (1 core)':
return res.json({
score:'317'
})
break;

case 'AMD Phenom II X2 N620 2.8 GHz (2 cores)':
return res.json({
score:'316'
})
break;

case 'Intel Core i3-330M 2.1 GHz (2 cores)':
return res.json({
score:'315'
})
break;

case 'Intel Pentium P6200 2.1 GHz (2 cores)':
return res.json({
score:'315'
})
break;

case 'AMD A6-3620 2.2 GHz (4 cores)':
return res.json({
score:'315'
})
break;

case 'Intel Core 2 Duo E6600 2.4 GHz (2 cores)':
return res.json({
score:'315'
})
break;

case 'AMD A8-7100 1.8 GHz (4 cores)':
return res.json({
score:'313'
})
break;

case 'AMD Athlon II X4 620 2.6 GHz (4 cores)':
return res.json({
score:'313'
})
break;

case 'Intel Pentium E5300 2.6 GHz (2 cores)':
return res.json({
score:'312'
})
break;

case 'AMD A8-4500M 1.9 GHz (4 cores)':
return res.json({
score:'311'
})
break;

case 'AMD A4-4300M 2.5 GHz (2 cores)':
return res.json({
score:'311'
})
break;

case 'Intel Core 2 Duo T7500 2.2 GHz (2 cores)':
return res.json({
score:'311'
})
break;

case 'Intel Celeron 2955U 1.4 GHz (2 cores)':
return res.json({
score:'310'
})
break;

case 'Intel Core 2 Duo P8400 2.3 GHz (2 cores)':
return res.json({
score:'310'
})
break;

case 'AMD Turion II P540 2.4 GHz (2 cores)':
return res.json({
score:'309'
})
break;

case 'Intel Pentium 2127U 1.9 GHz (2 cores)':
return res.json({
score:'309'
})
break;

case 'AMD A10-7300 1.9 GHz (4 cores)':
return res.json({
score:'309'
})
break;

case 'Intel Celeron J3355 2.0 GHz (2 cores)':
return res.json({
score:'309'
})
break;

case 'Intel Core 2 Duo P8600 2.4 GHz (2 cores)':
return res.json({
score:'309'
})
break;

case 'Intel Pentium E2220 2.4 GHz (2 cores)':
return res.json({
score:'307'
})
break;

case 'Intel Pentium P6100 2.0 GHz (2 cores)':
return res.json({
score:'305'
})
break;

case 'AMD A6-3500 2.1 GHz (3 cores)':
return res.json({
score:'305'
})
break;

case 'AMD A10 PRO-7350B 2.1 GHz (4 cores)':
return res.json({
score:'305'
})
break;

case 'AMD Phenom X4 9850 2.5 GHz (4 cores)':
return res.json({
score:'305'
})
break;

case 'Intel Core 2 Duo E6550 2.3 GHz (2 cores)':
return res.json({
score:'304'
})
break;

case 'AMD A10-5745M 2.1 GHz (4 cores)':
return res.json({
score:'304'
})
break;

case 'Intel Pentium E5200 2.5 GHz (2 cores)':
return res.json({
score:'304'
})
break;

case 'Intel Xeon E5405 2.0 GHz (4 cores)':
return res.json({
score:'303'
})
break;

case 'Intel Core 2 Duo T8100 2.1 GHz (2 cores)':
return res.json({
score:'303'
})
break;

case 'AMD Athlon II X2 240e 2.8 GHz (2 cores)':
return res.json({
score:'302'
})
break;

case 'Intel Celeron B815 1.6 GHz (2 cores)':
return res.json({
score:'300'
})
break;

case 'Intel Core 2 Duo T7700 2.4 GHz (2 cores)':
return res.json({
score:'299'
})
break;

case 'Intel Celeron J3455 1.5 GHz (4 cores)':
return res.json({
score:'296'
})
break;

case 'AMD A6-4455M 2.1 GHz (2 cores)':
return res.json({
score:'296'
})
break;

case 'Intel Celeron 1017U 1.6 GHz (2 cores)':
return res.json({
score:'292'
})
break;

case 'Intel Celeron N3350 1.1 GHz (2 cores)':
return res.json({
score:'292'
})
break;

case 'AMD A8-3510MX 1.8 GHz (4 cores)':
return res.json({
score:'291'
})
break;

case 'AMD Phenom X4 9550 2.2 GHz (4 cores)':
return res.json({
score:'290'
})
break;

case 'Intel Celeron 1007U 1.5 GHz (2 cores)':
return res.json({
score:'289'
})
break;

case 'AMD Phenom X4 9650 2.3 GHz (4 cores)':
return res.json({
score:'289'
})
break;

case 'Intel Core 2 Duo P7450 2.1 GHz (2 cores)':
return res.json({
score:'287'
})
break;

case 'Intel Core 2 Duo E6700 2.7 GHz (2 cores)':
return res.json({
score:'287'
})
break;

case 'Intel Core 2 Duo E4600 2.4 GHz (2 cores)':
return res.json({
score:'286'
})
break;

case 'AMD A8-3520M 1.6 GHz (4 cores)':
return res.json({
score:'285'
})
break;

case 'Intel Pentium 997 1.6 GHz (2 cores)':
return res.json({
score:'285'
})
break;

case 'Intel Core 2 Duo T6670 2.2 GHz (2 cores)':
return res.json({
score:'285'
})
break;

case 'AMD A8 PRO-7150B 1.9 GHz (4 cores)':
return res.json({
score:'283'
})
break;

case 'Intel Celeron B820 1.7 GHz (2 cores)':
return res.json({
score:'283'
})
break;

case 'AMD Athlon 64 X2 6000+ 3.0 GHz (2 cores)':
return res.json({
score:'282'
})
break;

case 'Intel Celeron E3400 2.6 GHz (2 cores)':
return res.json({
score:'281'
})
break;

case 'Intel Pentium P6000 1.9 GHz (2 cores)':
return res.json({
score:'281'
})
break;

case 'Intel Celeron N3450 1.1 GHz (4 cores)':
return res.json({
score:'281'
})
break;

case 'AMD Athlon 64 X2 5600+ 2.8 GHz (2 cores)':
return res.json({
score:'280'
})
break;

case 'AMD A8-5545M 1.7 GHz (4 cores)':
return res.json({
score:'279'
})
break;

case 'Intel Core 2 Duo E4500 2.2 GHz (2 cores)':
return res.json({
score:'278'
})
break;

case 'AMD Phenom X4 9750 2.4 GHz (4 cores)':
return res.json({
score:'277'
})
break;

case 'AMD Athlon II X2 235e 2.7 GHz (2 cores)':
return res.json({
score:'276'
})
break;

case 'AMD A6-3410MX 1.6 GHz (4 cores)':
return res.json({
score:'274'
})
break;

case 'AMD A4-3310MX 2.1 GHz (2 cores)':
return res.json({
score:'274'
})
break;

case 'Intel Core i3-2375M 1.5 GHz (2 cores)':
return res.json({
score:'274'
})
break;

case 'AMD A4-3305M 1.9 GHz (2 cores)':
return res.json({
score:'274'
})
break;

case 'Intel Core 2 Duo P7550 2.3 GHz (2 cores)':
return res.json({
score:'273'
})
break;

case 'Intel Core 2 Duo T7300 2.0 GHz (2 cores)':
return res.json({
score:'272'
})
break;

case 'AMD Phenom II X3 N830 2.1 GHz (3 cores)':
return res.json({
score:'272'
})
break;

case 'Intel Core 2 Duo T6600 2.2 GHz (2 cores)':
return res.json({
score:'271'
})
break;

case 'Intel Pentium 987 1.5 GHz (2 cores)':
return res.json({
score:'271'
})
break;

case 'AMD A10-4655M 2.0 GHz (4 cores)':
return res.json({
score:'271'
})
break;

case 'AMD Phenom II X4 N970 2.2 GHz (4 cores)':
return res.json({
score:'268'
})
break;

case 'Intel Core i3-2377M 1.5 GHz (2 cores)':
return res.json({
score:'267'
})
break;

case 'Intel Core 2 Duo E6320 1.9 GHz (2 cores)':
return res.json({
score:'267'
})
break;

case 'Intel Core 2 Duo P7350 2.0 GHz (2 cores)':
return res.json({
score:'266'
})
break;

case 'Intel Core 2 Duo T7400 2.2 GHz (2 cores)':
return res.json({
score:'266'
})
break;

case 'Intel Pentium T4500 2.3 GHz (2 cores)':
return res.json({
score:'265'
})
break;

case 'Intel Core 2 Duo T7200 2.0 GHz (2 cores)':
return res.json({
score:'265'
})
break;

case 'Intel Pentium T4400 2.2 GHz (2 cores)':
return res.json({
score:'264'
})
break;

case 'Intel Celeron 877 1.4 GHz (2 cores)':
return res.json({
score:'264'
})
break;

case 'AMD Turion II Neo N54L 2.2 GHz (2 cores)':
return res.json({
score:'263'
})
break;

case 'Intel Core 2 Duo T6400 2.0 GHz (2 cores)':
return res.json({
score:'263'
})
break;

case 'AMD V140 2.3 GHz (1 core)':
return res.json({
score:'262'
})
break;

case 'AMD A8-7410 2.2 GHz (4 cores)':
return res.json({
score:'262'
})
break;

case 'Intel Pentium E2200 2.2 GHz (2 cores)':
return res.json({
score:'262'
})
break;

case 'Intel Celeron E1500 2.2 GHz (2 cores)':
return res.json({
score:'261'
})
break;

case 'Intel Core 2 Duo T6500 2.1 GHz (2 cores)':
return res.json({
score:'260'
})
break;

case 'Intel Celeron T3500 2.1 GHz (2 cores)':
return res.json({
score:'260'
})
break;

case 'AMD A6-3420M 1.5 GHz (4 cores)':
return res.json({
score:'259'
})
break;

case 'Intel Atom x7-E3950 1.6 GHz (4 cores)':
return res.json({
score:'259'
})
break;

case 'Intel Pentium T4200 2.0 GHz (2 cores)':
return res.json({
score:'258'
})
break;

case 'Intel Pentium T4300 2.1 GHz (2 cores)':
return res.json({
score:'257'
})
break;

case 'AMD A4-3300M 1.9 GHz (2 cores)':
return res.json({
score:'257'
})
break;

case 'Intel Pentium T3400 2.2 GHz (2 cores)':
return res.json({
score:'256'
})
break;

case 'Intel Celeron 900 2.2 GHz (1 core)':
return res.json({
score:'255'
})
break;

case 'AMD Turion II P520 2.3 GHz (2 cores)':
return res.json({
score:'254'
})
break;

case 'Intel Core i3-2367M 1.4 GHz (2 cores)':
return res.json({
score:'254'
})
break;

case 'AMD A8-6410 2.0 GHz (4 cores)':
return res.json({
score:'254'
})
break;

case 'AMD Phenom II X4 N930 2.0 GHz (4 cores)':
return res.json({
score:'254'
})
break;

case 'Intel Core i5-2537M 1.4 GHz (2 cores)':
return res.json({
score:'251'
})
break;

case 'AMD Athlon II P360 2.3 GHz (2 cores)':
return res.json({
score:'251'
})
break;

case 'Intel Core 2 Duo T6570 2.1 GHz (2 cores)':
return res.json({
score:'251'
})
break;

case 'Intel Core i3-2365M 1.4 GHz (2 cores)':
return res.json({
score:'250'
})
break;

case 'AMD A4-3330MX 2.2 GHz (2 cores)':
return res.json({
score:'250'
})
break;

case 'AMD A6-7310 2.0 GHz (4 cores)':
return res.json({
score:'250'
})
break;

case 'Intel Core 2 Duo E6300 1.9 GHz (2 cores)':
return res.json({
score:'250'
})
break;

case 'AMD A8-4555M 1.6 GHz (4 cores)':
return res.json({
score:'249'
})
break;

case 'AMD A4 Pro-3350B 2.0 GHz (4 cores)':
return res.json({
score:'248'
})
break;

case 'AMD Athlon 5350 2.0 GHz (4 cores)':
return res.json({
score:'248'
})
break;

case 'Intel Core 2 Duo L9400 1.9 GHz (2 cores)':
return res.json({
score:'247'
})
break;

case 'AMD Athlon II P320 2.1 GHz (2 cores)':
return res.json({
score:'246'
})
break;

case 'AMD Phenom X3 8450 2.1 GHz (3 cores)':
return res.json({
score:'246'
})
break;

case 'Intel Core 2 Duo T5550 1.8 GHz (2 cores)':
return res.json({
score:'245'
})
break;

case 'AMD Phenom II X2 N660 3.0 GHz (2 cores)':
return res.json({
score:'244'
})
break;

case 'Intel Celeron E3200 2.4 GHz (2 cores)':
return res.json({
score:'243'
})
break;

case 'Intel Core 2 Duo E4400 2.0 GHz (2 cores)':
return res.json({
score:'243'
})
break;

case 'Intel Celeron B800 1.5 GHz (2 cores)':
return res.json({
score:'242'
})
break;

case 'Intel Core 2 Duo T5850 2.2 GHz (2 cores)':
return res.json({
score:'242'
})
break;

case 'Intel Pentium E2180 2.0 GHz (2 cores)':
return res.json({
score:'241'
})
break;

case 'AMD A8-3500M 1.5 GHz (4 cores)':
return res.json({
score:'241'
})
break;

case 'AMD A6-6310 1.8 GHz (4 cores)':
return res.json({
score:'241'
})
break;

case 'AMD A4-7210 1.8 GHz (4 cores)':
return res.json({
score:'241'
})
break;

case 'Intel Pentium T3200 2.0 GHz (2 cores)':
return res.json({
score:'241'
})
break;

case 'Intel Core 2 Duo E4300 1.8 GHz (2 cores)':
return res.json({
score:'239'
})
break;

case 'Intel Core 2 Duo E6400 2.1 GHz (2 cores)':
return res.json({
score:'237'
})
break;

case 'Intel Core 2 Duo T5870 2.0 GHz (2 cores)':
return res.json({
score:'237'
})
break;

case 'Intel Core 2 Duo T5800 2.0 GHz (2 cores)':
return res.json({
score:'232'
})
break;

case 'AMD A6-3400M 1.4 GHz (4 cores)':
return res.json({
score:'230'
})
break;

case 'Intel Core 2 Duo T7100 1.8 GHz (2 cores)':
return res.json({
score:'229'
})
break;

case 'Intel Core 2 Duo T7250 2.0 GHz (2 cores)':
return res.json({
score:'227'
})
break;

case 'Intel Pentium D 945/950 3.4 GHz (2 cores)':
return res.json({
score:'226'
})
break;

case 'AMD Athlon 64 X2 5000+ 2.6 GHz (2 cores)':
return res.json({
score:'226'
})
break;

case 'Intel Pentium T2390 1.9 GHz (2 cores)':
return res.json({
score:'225'
})
break;

case 'AMD A6-5200 2.0 GHz (4 cores)':
return res.json({
score:'225'
})
break;

case 'Intel Pentium N3540 2.2 GHz (4 cores)':
return res.json({
score:'225'
})
break;

case 'AMD Phenom II X3 P820 1.8 GHz (3 cores)':
return res.json({
score:'225'
})
break;

case 'Intel Pentium J3710 1.6 GHz (4 cores)':
return res.json({
score:'224'
})
break;

case 'Intel Atom x7-Z8750 1.6 GHz (4 cores)':
return res.json({
score:'224'
})
break;

case 'AMD Athlon 64 X2 4200+ 2.2 GHz (2 cores)':
return res.json({
score:'223'
})
break;

case 'AMD Athlon II P340 2.2 GHz (2 cores)':
return res.json({
score:'220'
})
break;

case 'Intel Atom x7-Z8700 1.6 GHz (4 cores)':
return res.json({
score:'220'
})
break;

case 'Intel Pentium N3530 2.2 GHz (4 cores)':
return res.json({
score:'220'
})
break;

case 'AMD Athlon II X2 250u 1.6 GHz (2 cores)':
return res.json({
score:'219'
})
break;

case 'Intel Atom x5-Z8550 1.4 GHz (4 cores)':
return res.json({
score:'218'
})
break;

case 'Intel Pentium N3700 1.6 GHz (4 cores)':
return res.json({
score:'216'
})
break;

case 'Intel Atom Z3795 1.6 GHz (4 cores)':
return res.json({
score:'215'
})
break;

case 'AMD Athlon 64 X2 3800+ 2.0 GHz (2 cores)':
return res.json({
score:'214'
})
break;

case 'Intel Celeron N3160 1.6 GHz (4 cores)':
return res.json({
score:'212'
})
break;

case 'Intel Core 2 Duo T5750 2.0 GHz (2 cores)':
return res.json({
score:'212'
})
break;

case 'Intel Celeron J1900 2.0 GHz (4 cores)':
return res.json({
score:'210'
})
break;

case 'AMD GX-420CA 2.0 GHz (4 cores)':
return res.json({
score:'209'
})
break;

case 'Intel Core i3-380UM 1.3 GHz (2 cores)':
return res.json({
score:'206'
})
break;

case 'AMD E2-7110 1.8 GHz (4 cores)':
return res.json({
score:'205'
})
break;

case 'Intel Celeron J3160 1.6 GHz (4 cores)':
return res.json({
score:'205'
})
break;

case 'Intel Celeron N2840 2.2 GHz (2 cores)':
return res.json({
score:'204'
})
break;

case 'Intel Celeron J3060 1.6 GHz (2 cores)':
return res.json({
score:'204'
})
break;

case 'Intel Atom x5-Z8500 1.4 GHz (4 cores)':
return res.json({
score:'204'
})
break;

case 'AMD Turion 64 X2 TL-60 2.0 GHz (2 cores)':
return res.json({
score:'203'
})
break;

case 'AMD Phenom X4 9500 2.2 GHz (4 cores)':
return res.json({
score:'202'
})
break;

case 'Intel Celeron N2820 2.1 GHz (2 cores)':
return res.json({
score:'201'
})
break;

case 'Intel Celeron N2830 2.2 GHz (2 cores)':
return res.json({
score:'201'
})
break;

case 'AMD A4-6210 1.8 GHz (4 cores)':
return res.json({
score:'201'
})
break;

case 'Intel Core 2 Duo U9400 1.4 GHz (2 cores)':
return res.json({
score:'201'
})
break;

case 'Intel Pentium N3520 2.2 GHz (4 cores)':
return res.json({
score:'200'
})
break;

case 'AMD Athlon 64 X2 4000+ 2.1 GHz (2 cores)':
return res.json({
score:'200'
})
break;

case 'Intel Celeron N2940 1.8 GHz (4 cores)':
return res.json({
score:'199'
})
break;

case 'Intel Celeron 847 1.1 GHz (2 cores)':
return res.json({
score:'198'
})
break;

case 'Intel Pentium D 830/925/930 3.0 GHz (2 cores)':
return res.json({
score:'196'
})
break;

case 'Intel Celeron N2930 1.8 GHz (4 cores)':
return res.json({
score:'195'
})
break;

case 'Intel Celeron N3150 1.6 GHz (4 cores)':
return res.json({
score:'195'
})
break;

case 'Intel Pentium E2140 1.6 GHz (2 cores)':
return res.json({
score:'194'
})
break;

case 'Intel Pentium E2160 1.8 GHz (2 cores)':
return res.json({
score:'193'
})
break;

case 'AMD Turion II Neo N40L 1.5 GHz (2 cores)':
return res.json({
score:'193'
})
break;

case 'Intel Celeron N3050 1.6 GHz (2 cores)':
return res.json({
score:'190'
})
break;

case 'Intel Atom x5-E8000 1.0 GHz (4 cores)':
return res.json({
score:'183'
})
break;

case 'Intel Core 2 Duo SU7300 1.3 GHz (2 cores)':
return res.json({
score:'183'
})
break;

case 'Intel Pentium SU4100 1.3 GHz (2 cores)':
return res.json({
score:'182'
})
break;

case 'Intel Pentium D 820/915/920 2.8 GHz (2 cores)':
return res.json({
score:'182'
})
break;

case 'Intel Core i5-470UM 1.3 GHz (2 cores)':
return res.json({
score:'180'
})
break;

case 'AMD Athlon X2 QL-62 2.0 GHz (2 cores)':
return res.json({
score:'179'
})
break;

case 'Intel Pentium 4 531/630 3.0 GHz (1 core)':
return res.json({
score:'178'
})
break;

case 'AMD A4-5000 1.5 GHz (4 cores)':
return res.json({
score:'176'
})
break;

case 'Intel Celeron N2815 1.9 GHz (2 cores)':
return res.json({
score:'174'
})
break;

case 'AMD E2-6110 1.5 GHz (4 cores)':
return res.json({
score:'171'
})
break;

case 'AMD E1-7010 1.5 GHz (2 cores)':
return res.json({
score:'168'
})
break;

case 'Intel Atom x5-Z8350 1.4 GHz (4 cores)':
return res.json({
score:'167'
})
break;

case 'Intel Celeron SU2300 1.2 GHz (2 cores)':
return res.json({
score:'167'
})
break;

case 'Intel Pentium 4 540/541 3.2 GHz (1 core)':
return res.json({
score:'160'
})
break;

case 'AMD E1-2500 1.4 GHz (2 cores)':
return res.json({
score:'153'
})
break;

case 'Intel Atom x5-Z8300 1.4 GHz (4 cores)':
return res.json({
score:'153'
})
break;

case 'AMD E1-6015 1.4 GHz (2 cores)':
return res.json({
score:'152'
})
break;

case 'AMD Sempron 2650 1.4 GHz (2 cores)':
return res.json({
score:'151'
})
break;

case 'Intel Celeron N3000 1.0 GHz (2 cores)':
return res.json({
score:'144'
})
break;

case 'AMD E2-2000 1.8 GHz (2 cores)':
return res.json({
score:'144'
})
break;

case 'AMD E1-6010 1.4 GHz (2 cores)':
return res.json({
score:'142'
})
break;

case 'AMD E2-1800 1.7 GHz (2 cores)':
return res.json({
score:'141'
})
break;

case 'AMD E-350 1.6 GHz (2 cores)':
return res.json({
score:'140'
})
break;

case 'AMD E1-1200 1.4 GHz (2 cores)':
return res.json({
score:'135'
})
break;

case 'AMD E1-1500 1.5 GHz (2 cores)':
return res.json({
score:'123'
})
break;

case 'AMD E-450 1.6 GHz (2 cores)':
return res.json({
score:'123'
})
break;

case 'AMD C-60 1.0 GHz (2 cores)':
return res.json({
score:'122'
})
break;

case 'AMD E1-2100 1.0 GHz (2 cores)':
return res.json({
score:'112'
})
break;

case 'AMD E-300 1.3 GHz (2 cores)':
return res.json({
score:'108'
})
break;

case 'Intel Atom D525 1.8 GHz (2 cores)':
return res.json({
score:'105'
})
break;

case 'AMD C-50 1.0 GHz (2 cores)':
return res.json({
score:'90'
})
break;

case 'Intel Atom N570 1.7 GHz (2 cores)':
return res.json({
score:'90'
})
break;


    }
})

module.exports = router