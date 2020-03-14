const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "need specific gpu"
    })
})

router.get('/:gpuname', (req, res, next) => {

    const gpu = req.params.gpuname

switch(gpu) {

case 'Quadro GV100':
return res.json({
 score:'9555'
})
break;

case 'GeForce GTX 1080 Ti':
return res.json({
 score:'9324'
})
break;

case 'NVIDIA TITAN X':
return res.json({
 score:'9223'
})
break;

case 'NVIDIA TITAN Xp':
return res.json({
 score:'9067'
})
break;

case 'TITAN Xp COLLECTORS EDITION':
return res.json({
 score:'9054'
})
break;

case 'TITAN V':
return res.json({
 score:'8911'
})
break;

case 'GeForce RTX 2080 Ti':
return res.json({
 score:'8805'
})
break;

case 'Quadro RTX 6000':
return res.json({
 score:'8681'
})
break;

case 'TITAN RTX':
return res.json({
 score:'8579'
})
break;

case 'Quadro P6000':
return res.json({
 score:'8502'
})
break;

case 'Quadro RTX 8000':
return res.json({
 score:'8339'
})
break;

case 'Radeon RX 5700 XT':
return res.json({
 score:'8188'
})
break;

case 'Radeon RX 5700 XT 50th Anniversary':
return res.json({
 score:'7999'
})
break;

case 'GeForce GTX 1080':
return res.json({
 score:'7839'
})
break;

case 'GeForce RTX 2080 SUPER':
return res.json({
 score:'7681'
})
break;

case 'Radeon VII':
return res.json({
 score:'7654'
})
break;

case 'Radeon Pro Vega II':
return res.json({
 score:'7597'
})
break;

case 'GeForce RTX 2080':
return res.json({
 score:'7476'
})
break;

case 'Quadro GP100':
return res.json({
 score:'7403'
})
break;

case 'GeForce GTX 1070 Ti':
return res.json({
 score:'7337'
})
break;

case 'Radeon Pro W5700':
return res.json({
 score:'7263'
})
break;

case 'Quadro RTX 5000':
return res.json({
 score:'7096'
})
break;

case 'Radeon RX 5700':
return res.json({
 score:'7060'
})
break;

case 'GeForce RTX 2070 SUPER':
return res.json({
 score:'7041'
})
break;

case 'GeForce RTX 2080 (Mobile)':
return res.json({
 score:'7037'
})
break;

case 'Radeon RX Vega 64':
return res.json({
 score:'7008'
})
break;

case 'Radeon Pro Vega 64':
return res.json({
 score:'6975'
})
break;

case 'Tesla V100-SXM2-16GB':
return res.json({
 score:'6602'
})
break;

case 'GeForce RTX 2070':
return res.json({
 score:'6547'
})
break;

case 'GeForce GTX 1070':
return res.json({
 score:'6535'
})
break;

case 'Quadro P5000':
return res.json({
 score:'6508'
})
break;

case 'Radeon Vega Frontier Edition':
return res.json({
 score:'6488'
})
break;

case 'Radeon RX Vega 56':
return res.json({
 score:'6461'
})
break;

case 'GeForce RTX 2060 SUPER':
return res.json({
 score:'6446'
})
break;

case 'Radeon Pro WX 9100':
return res.json({
 score:'6433'
})
break;

case 'Radeon RX 5600 XT':
return res.json({
 score:'6355'
})
break;

case 'GeForce GTX 980 Ti':
return res.json({
 score:'6350'
})
break;

case 'Radeon PRO WX 8200':
return res.json({
 score:'6343'
})
break;

case 'Quadro P5200':
return res.json({
 score:'6331'
})
break;

case 'Radeon Pro Vega 56':
return res.json({
 score:'6186'
})
break;

case 'GeForce GTX TITAN X':
return res.json({
 score:'6164'
})
break;

case 'GeForce RTX 2080 with Max-Q Design':
return res.json({
 score:'6144'
})
break;

case 'Quadro RTX 5000 (Mobile)':
return res.json({
 score:'6067'
})
break;

case 'GeForce RTX 2060':
return res.json({
 score:'5986'
})
break;

case 'GeForce RTX 2070 (Mobile)':
return res.json({
 score:'5909'
})
break;

case 'GeForce GTX 1070 (Mobile)':
return res.json({
 score:'5894'
})
break;

case 'Quadro RTX 4000':
return res.json({
 score:'5864'
})
break;

case 'GeForce GTX 1080 with Max-Q Design':
return res.json({
 score:'5847'
})
break;

case 'Radeon Pro Vega 48':
return res.json({
 score:'5504'
})
break;

case 'Quadro M6000':
return res.json({
 score:'5386'
})
break;

case 'Quadro P4000':
return res.json({
 score:'5359'
})
break;

case 'Radeon RX 5500':
return res.json({
 score:'5346'
})
break;

case 'Quadro P4200':
return res.json({
 score:'5332'
})
break;

case 'GeForce RTX 2060 (Mobile)':
return res.json({
 score:'5310'
})
break;

case 'Quadro M6000 24GB':
return res.json({
 score:'5304'
})
break;

case 'GeForce GTX 1660 Ti':
return res.json({
 score:'5295'
})
break;

case 'Quadro P3200 with Max-Q Design':
return res.json({
 score:'5266'
})
break;

case 'GeForce RTX 2070 with Max-Q Design':
return res.json({
 score:'5237'
})
break;

case 'Radeon Pro Duo':
return res.json({
 score:'5221'
})
break;

case 'GeForce GTX 1660 Ti (Mobile)':
return res.json({
 score:'5195'
})
break;

case 'Tesla P100-PCIE-16GB':
return res.json({
 score:'5171'
})
break;

case 'Radeon Pro W5500':
return res.json({
 score:'5168'
})
break;

case 'GeForce GTX 980':
return res.json({
 score:'5158'
})
break;

case 'GeForce GTX 1660 SUPER':
return res.json({
 score:'5096'
})
break;

case 'Quadro P4200 with Max-Q Design':
return res.json({
 score:'5082'
})
break;

case 'Radeon RX 5500 XT':
return res.json({
 score:'5056'
})
break;

case 'Radeon R9 Fury':
return res.json({
 score:'5031'
})
break;

case 'GeForce GTX 1660':
return res.json({
 score:'5027'
})
break;

case 'GeForce GTX 1060':
return res.json({
 score:'4991'
})
break;

case 'Radeon R9 Fury + Fury X':
return res.json({
 score:'4977'
})
break;

case 'Radeon RX 590':
return res.json({
 score:'4853'
})
break;

case 'GeForce GTX 1070 with Max-Q Design':
return res.json({
 score:'4778'
})
break;

case 'GeForce GTX 1650 SUPER':
return res.json({
 score:'4711'
})
break;

case 'Quadro P5200 with Max-Q Design':
return res.json({
 score:'4709'
})
break;

case 'GeForce GTX 780 Ti':
return res.json({
 score:'4702'
})
break;

case 'Quadro RTX 3000':
return res.json({
 score:'4662'
})
break;

case 'GeForce GTX 1060 3GB':
return res.json({
 score:'4632'
})
break;

case 'Quadro P3200':
return res.json({
 score:'4614'
})
break;

case 'Quadro P2200':
return res.json({
 score:'4476'
})
break;

case 'GeForce GTX TITAN Black':
return res.json({
 score:'4458'
})
break;

case 'GeForce GTX 970':
return res.json({
 score:'4426'
})
break;

case 'Radeon Pro SSG':
return res.json({
 score:'4404'
})
break;

case 'Radeon RX 480':
return res.json({
 score:'4381'
})
break;

case 'GeForce GTX 1060 (Mobile)':
return res.json({
 score:'4369'
})
break;

case 'Radeon RX 580':
return res.json({
 score:'4339'
})
break;

case 'Radeon R9 390X':
return res.json({
 score:'4239'
})
break;

case 'Quadro M5000':
return res.json({
 score:'4167'
})
break;

case 'Radeon Pro 580':
return res.json({
 score:'4161'
})
break;

case 'GeForce GTX Titan':
return res.json({
 score:'4127'
})
break;

case 'GeForce GTX 1650 (Mobile)':
return res.json({
 score:'4114'
})
break;

case 'Intel Iris Plus 645':
return res.json({
 score:'4087'
})
break;

case 'Radeon Pro 5500M':
return res.json({
 score:'4066'
})
break;

case 'Radeon Pro WX 7100':
return res.json({
 score:'4062'
})
break;

case 'Radeon R9 390':
return res.json({
 score:'3985'
})
break;

case 'GeForce GTX 780':
return res.json({
 score:'3983'
})
break;

case 'Quadro K6000':
return res.json({
 score:'3921'
})
break;

case 'GeForce GTX 1060 with Max-Q Design':
return res.json({
 score:'3911'
})
break;

case 'Radeon RX 470':
return res.json({
 score:'3852'
})
break;

case 'Quadro M5500':
return res.json({
 score:'3847'
})
break;

case 'Radeon RX 580 2048SP':
return res.json({
 score:'3810'
})
break;

case 'Radeon Pro 580X':
return res.json({
 score:'3805'
})
break;

case 'GeForce GTX 1650':
return res.json({
 score:'3765'
})
break;

case 'Radeon RX 580X':
return res.json({
 score:'3759'
})
break;

case 'Quadro T2000':
return res.json({
 score:'3736'
})
break;

case 'Quadro P2000':
return res.json({
 score:'3672'
})
break;

case 'Radeon R9 280X':
return res.json({
 score:'3614'
})
break;

case 'Radeon R9 290X / 390X':
return res.json({
 score:'3604'
})
break;

case 'Radeon R9 295X2':
return res.json({
 score:'3579'
})
break;

case 'GeForce GTX 980M':
return res.json({
 score:'3484'
})
break;

case 'Radeon Pro 5300M':
return res.json({
 score:'3451'
})
break;

case 'Tesla M60':
return res.json({
 score:'3427'
})
break;

case 'GeForce GTX TITAN Z':
return res.json({
 score:'3418'
})
break;

case 'Quadro M5000M':
return res.json({
 score:'3397'
})
break;

case 'GeForce GTX 1050 Ti with Max-Q Design':
return res.json({
 score:'3374'
})
break;

case 'Radeon RX Vega M GH':
return res.json({
 score:'3356'
})
break;

case 'GeForce GTX 1050 Ti (Mobile)':
return res.json({
 score:'3342'
})
break;

case 'Radeon RX 570':
return res.json({
 score:'3341'
})
break;

case 'Radeon R9 290 / 390':
return res.json({
 score:'3333'
})
break;

case 'FirePro W9000':
return res.json({
 score:'3284'
})
break;

case 'Radeon Instinct MI25 MxGPU':
return res.json({
 score:'3281'
})
break;

case 'Q12U-1':
return res.json({
 score:'3274'
})
break;

case 'Quadro T1000':
return res.json({
 score:'3273'
})
break;

case 'Quadro P3000':
return res.json({
 score:'3267'
})
break;

case 'GeForce GTX 1050 Ti':
return res.json({
 score:'3239'
})
break;

case 'Radeon R9 280':
return res.json({
 score:'3177'
})
break;

case 'Radeon HD 7970 / R9 280X':
return res.json({
 score:'3167'
})
break;

case 'GeForce GTX 770':
return res.json({
 score:'3148'
})
break;

case 'GeForce GTX 1060 5GB':
return res.json({
 score:'3130'
})
break;

case 'Radeon R9 380X':
return res.json({
 score:'3128'
})
break;

case 'GeForce GTX 960':
return res.json({
 score:'3118'
})
break;

case 'FirePro W8100 Graphic Adapter':
return res.json({
 score:'3099'
})
break;

case 'GeForce GTX 1050 with Max-Q Design':
return res.json({
 score:'3097'
})
break;

case 'Radeon Pro WX4100':
return res.json({
 score:'3083'
})
break;

case 'Quadro P2000 with Max-Q Design':
return res.json({
 score:'3053'
})
break;

case 'FirePro W9100':
return res.json({
 score:'3050'
})
break;

case 'Radeon Pro Vega 20':
return res.json({
 score:'3034'
})
break;

case 'Radeon Pro 570':
return res.json({
 score:'3012'
})
break;

case 'Radeon R9 380':
return res.json({
 score:'3008'
})
break;

case 'GeForce GTX 680':
return res.json({
 score:'2974'
})
break;

case 'GeForce GTX 760 Ti OEM':
return res.json({
 score:'2943'
})
break;

case 'Radeon HD 7990':
return res.json({
 score:'2939'
})
break;

case 'Radeon Pro WX 5100':
return res.json({
 score:'2912'
})
break;

case 'GRID M60-2B':
return res.json({
 score:'2873'
})
break;

case 'Quadro K5200':
return res.json({
 score:'2870'
})
break;

case 'FirePro W8000':
return res.json({
 score:'2855'
})
break;

case 'GeForce GTX 1050':
return res.json({
 score:'2838'
})
break;

case 'Radeon HD 8990':
return res.json({
 score:'2836'
})
break;

case 'GeForce GTX 970M':
return res.json({
 score:'2826'
})
break;

case 'Radeon Sky 500':
return res.json({
 score:'2809'
})
break;

case 'GeForce GTX 1050 (Mobile)':
return res.json({
 score:'2800'
})
break;

case 'EIZO Quadro MED-XN51LP':
return res.json({
 score:'2799'
})
break;

case 'FirePro W7100 Adapter':
return res.json({
 score:'2787'
})
break;

case 'Quadro M4000':
return res.json({
 score:'2747'
})
break;

case 'Radeon HD 7950 / R9 280':
return res.json({
 score:'2725'
})
break;

case 'FirePro W8100':
return res.json({
 score:'2717'
})
break;

case 'Quadro M4000M':
return res.json({
 score:'2694'
})
break;

case 'GeForce GTX 760 Ti':
return res.json({
 score:'2693'
})
break;

case 'FirePro W8000 Adapter':
return res.json({
 score:'2686'
})
break;

case 'Barco MXRT 7600':
return res.json({
 score:'2672'
})
break;

case 'Radeon RX Vega M GL':
return res.json({
 score:'2665'
})
break;

case 'Radeon RX 560X':
return res.json({
 score:'2659'
})
break;

case 'Radeon R7 370':
return res.json({
 score:'2636'
})
break;

case 'GeForce GTX 670':
return res.json({
 score:'2624'
})
break;

case 'FirePro W7100':
return res.json({
 score:'2600'
})
break;

case 'Radeon R9 M395X':
return res.json({
 score:'2599'
})
break;

case 'Radeon Pro 570X':
return res.json({
 score:'2595'
})
break;

case 'Radeon R9 270X':
return res.json({
 score:'2592'
})
break;

case 'GeForce GTX 660 Ti':
return res.json({
 score:'2590'
})
break;

case 'Radeon Pro 465':
return res.json({
 score:'2567'
})
break;

case 'GeForce GTX 950':
return res.json({
 score:'2555'
})
break;

case 'Radeon Pro Vega 16':
return res.json({
 score:'2547'
})
break;

case 'GeForce GTX 690':
return res.json({
 score:'2523'
})
break;

case 'Radeon Pro WX 4100':
return res.json({
 score:'2519'
})
break;

case 'FirePro S9000':
return res.json({
 score:'2517'
})
break;

case 'GRID M60-8A':
return res.json({
 score:'2508'
})
break;

case 'Radeon HD 7870 XT':
return res.json({
 score:'2502'
})
break;

case 'Quadro P1000':
return res.json({
 score:'2490'
})
break;

case 'Radeon R9 M390X':
return res.json({
 score:'2483'
})
break;

case 'Radeon RX 460':
return res.json({
 score:'2472'
})
break;

case 'Barco MXRT 7500':
return res.json({
 score:'2450'
})
break;

case 'Radeon R9 285 / 380':
return res.json({
 score:'2446'
})
break;

case 'Quadro M3000M':
return res.json({
 score:'2445'
})
break;

case 'FirePro W7000':
return res.json({
 score:'2432'
})
break;

case 'GeForce GTX 760':
return res.json({
 score:'2431'
})
break;

case 'Radeon HD 7870':
return res.json({
 score:'2421'
})
break;

case 'Radeon RX 560':
return res.json({
 score:'2411'
})
break;

case 'GRID P6-4Q':
return res.json({
 score:'2408'
})
break;

case 'GeForce GTX 880M':
return res.json({
 score:'2405'
})
break;

case 'GRID K2':
return res.json({
 score:'2399'
})
break;

case 'FirePro W7170M':
return res.json({
 score:'2387'
})
break;

case 'GeForce GTX 680M KY_Bullet Edition':
return res.json({
 score:'2380'
})
break;

case 'Radeon Pro WX 4150':
return res.json({
 score:'2374'
})
break;

case 'FirePro M6100 FireGL V':
return res.json({
 score:'2354'
})
break;

case 'Radeon R9 M290X':
return res.json({
 score:'2327'
})
break;

case 'Radeon R9 M470X':
return res.json({
 score:'2314'
})
break;

case 'Quadro M2200':
return res.json({
 score:'2311'
})
break;

case 'Quadro M2000':
return res.json({
 score:'2305'
})
break;

case 'FirePro W7000 Adapter':
return res.json({
 score:'2296'
})
break;

case 'Radeon R9 M395':
return res.json({
 score:'2296'
})
break;

case 'GeForce GTX 780M':
return res.json({
 score:'2258'
})
break;

case 'Radeon R9 270 / R7 370':
return res.json({
 score:'2228'
})
break;

case 'FirePro S7000':
return res.json({
 score:'2223'
})
break;

case 'RadeonT R7 450':
return res.json({
 score:'2214'
})
break;

case 'Radeon R9 370':
return res.json({
 score:'2205'
})
break;

case 'GeForce GTX 965M':
return res.json({
 score:'2131'
})
break;

case 'GeForce GTX 870M':
return res.json({
 score:'2124'
})
break;

case 'NVS 315':
return res.json({
 score:'2116'
})
break;

case 'GeForce GTX 775M':
return res.json({
 score:'2089'
})
break;

case 'Quadro P620':
return res.json({
 score:'2087'
})
break;

case 'Quadro K4200':
return res.json({
 score:'2082'
})
break;

case 'Quadro K5100M':
return res.json({
 score:'2072'
})
break;

case 'Radeon R9 M295X':
return res.json({
 score:'2057'
})
break;

case 'Radeon RX Vega 11':
return res.json({
 score:'2033'
})
break;

case 'Radeon HD8970M':
return res.json({
 score:'2031'
})
break;

case 'GeForce GTX 660':
return res.json({
 score:'2014'
})
break;

case 'GeForce GTX 960A':
return res.json({
 score:'2014'
})
break;

case 'Radeon RX Vega 11 PRD':
return res.json({
 score:'2012'
})
break;

case 'Radeon HD 7970M':
return res.json({
 score:'1994'
})
break;

case 'Radeon Pro WX 3100':
return res.json({
 score:'1977'
})
break;

case 'GeForce GTX 680MX':
return res.json({
 score:'1969'
})
break;

case 'GRID K520':
return res.json({
 score:'1939'
})
break;

case 'Quadro K5000':
return res.json({
 score:'1934'
})
break;

case 'Quadro K2200M':
return res.json({
 score:'1934'
})
break;

case 'GeForce GTX 750 Ti':
return res.json({
 score:'1920'
})
break;

case 'Radeon HD 7850':
return res.json({
 score:'1916'
})
break;

case 'GeForce GTX 580':
return res.json({
 score:'1896'
})
break;

case 'Radeon HD 8970M':
return res.json({
 score:'1891'
})
break;

case 'FirePro V7000 Adapter':
return res.json({
 score:'1888'
})
break;

case 'GeForce GTX 675MX':
return res.json({
 score:'1876'
})
break;

case 'Quadro P600':
return res.json({
 score:'1856'
})
break;

case 'Radeon Pro 560X':
return res.json({
 score:'1851'
})
break;

case 'Radeon R7 360':
return res.json({
 score:'1849'
})
break;

case 'Quadro M2000M':
return res.json({
 score:'1840'
})
break;

case 'Radeon Pro WX 4130':
return res.json({
 score:'1825'
})
break;

case 'Radeon Pro 460':
return res.json({
 score:'1816'
})
break;

case 'Radeon HD 8950':
return res.json({
 score:'1809'
})
break;

case 'Radeon HD 7800-serie':
return res.json({
 score:'1795'
})
break;

case 'Quadro K2200':
return res.json({
 score:'1786'
})
break;

case 'GeForce GTX 680M':
return res.json({
 score:'1782'
})
break;

case 'FirePro W4300':
return res.json({
 score:'1780'
})
break;

case 'Radeon R7 260X':
return res.json({
 score:'1780'
})
break;

case 'Radeon Pro 560':
return res.json({
 score:'1776'
})
break;

case 'Radeon R9 M380':
return res.json({
 score:'1767'
})
break;

case 'FirePro W5100':
return res.json({
 score:'1756'
})
break;

case 'Radeon R9 260':
return res.json({
 score:'1726'
})
break;

case 'Radeon RX 550':
return res.json({
 score:'1718'
})
break;

case 'Radeon E8870PCIe':
return res.json({
 score:'1707'
})
break;

case 'GeForce GT 1030':
return res.json({
 score:'1706'
})
break;

case 'Quadro M1200':
return res.json({
 score:'1703'
})
break;

case 'GeForce GTX 570':
return res.json({
 score:'1693'
})
break;

case 'Matrox C680 PCIe x16':
return res.json({
 score:'1693'
})
break;

case 'GeForce GTX 650 Ti BOOST':
return res.json({
 score:'1691'
})
break;

case 'Radeon HD 7790':
return res.json({
 score:'1681'
})
break;

case 'GRID K220Q':
return res.json({
 score:'1677'
})
break;

case 'FirePro M6100':
return res.json({
 score:'1649'
})
break;

case 'FirePro M5100':
return res.json({
 score:'1643'
})
break;

case 'GRID P4-2Q':
return res.json({
 score:'1618'
})
break;

case 'FirePro V9800 Adapter':
return res.json({
 score:'1617'
})
break;

case 'Quadro M620':
return res.json({
 score:'1598'
})
break;

case 'GeForce GTX 480':
return res.json({
 score:'1590'
})
break;

case 'GeForce GTX 750':
return res.json({
 score:'1575'
})
break;

case 'Radeon R9 M375X':
return res.json({
 score:'1574'
})
break;

case 'Quadro K4100M':
return res.json({
 score:'1574'
})
break;

case 'Radeon Pro WX 2100':
return res.json({
 score:'1553'
})
break;

case 'Radeon R7 450':
return res.json({
 score:'1546'
})
break;

case 'Quadro M1000M':
return res.json({
 score:'1543'
})
break;

case 'Radeon Vega 11':
return res.json({
 score:'1541'
})
break;

case 'GeForce GTX 770M':
return res.json({
 score:'1541'
})
break;

case 'MxGPU':
return res.json({
 score:'1541'
})
break;

case 'Quadro K1200':
return res.json({
 score:'1538'
})
break;

case 'Quadro 7000':
return res.json({
 score:'1537'
})
break;

case 'GeForce GTX 860M':
return res.json({
 score:'1519'
})
break;

case 'FirePro W5000':
return res.json({
 score:'1502'
})
break;

case 'Firepro W5170M':
return res.json({
 score:'1494'
})
break;

case 'GeForce GTX 560 Ti':
return res.json({
 score:'1478'
})
break;

case 'Intel Iris Pro P580':
return res.json({
 score:'1475'
})
break;

case 'B8DKMDAP':
return res.json({
 score:'1471'
})
break;

case 'GeForce 8800 GTX':
return res.json({
 score:'1470'
})
break;

case 'GeForce GTX 650 Ti':
return res.json({
 score:'1464'
})
break;

case 'Radeon HD 7770':
return res.json({
 score:'1463'
})
break;

case 'Radeon RX 540':
return res.json({
 score:'1439'
})
break;

case 'Radeon HD 5870':
return res.json({
 score:'1438'
})
break;

case 'Tesla C2070':
return res.json({
 score:'1436'
})
break;

case 'GeForce GTX 960M':
return res.json({
 score:'1435'
})
break;

case 'Radeon R9 M370X':
return res.json({
 score:'1434'
})
break;

case 'Radeon R9 M360':
return res.json({
 score:'1429'
})
break;

case 'FirePro 3D V8800':
return res.json({
 score:'1427'
})
break;

case 'Radeon HD 6970':
return res.json({
 score:'1423'
})
break;

case 'Radeon Pro 455':
return res.json({
 score:'1417'
})
break;

case 'Quadro K5000M':
return res.json({
 score:'1403'
})
break;

case 'GeForce 8800 GTS 512':
return res.json({
 score:'1398'
})
break;

case 'Intel Iris Plus 655':
return res.json({
 score:'1389'
})
break;

case 'GeForce GTX 590':
return res.json({
 score:'1384'
})
break;

case 'Radeon Pro 555':
return res.json({
 score:'1382'
})
break;

case 'FirePro 3D V9800':
return res.json({
 score:'1375'
})
break;

case 'Radeon R9 350':
return res.json({
 score:'1372'
})
break;

case 'Tesla C2050':
return res.json({
 score:'1372'
})
break;

case 'Radeon R9 M275X / M375':
return res.json({
 score:'1369'
})
break;

case 'Radeon R7 260':
return res.json({
 score:'1361'
})
break;

case 'GeForce GTX 470':
return res.json({
 score:'1359'
})
break;

case 'GRID P40-24Q':
return res.json({
 score:'1353'
})
break;

case 'Tesla C2050 / C2070':
return res.json({
 score:'1351'
})
break;

case 'Radeon R7 PRO A12-9800':
return res.json({
 score:'1329'
})
break;

case 'Radeon Vega 8':
return res.json({
 score:'1329'
})
break;

case 'Radeon R9 360':
return res.json({
 score:'1329'
})
break;

case 'Tesla C2075':
return res.json({
 score:'1326'
})
break;

case 'Quadro K4000':
return res.json({
 score:'1316'
})
break;

case 'Intel Iris Pro 580':
return res.json({
 score:'1311'
})
break;

case 'GeForce GTX 765M':
return res.json({
 score:'1307'
})
break;

case 'Intel Iris Plus':
return res.json({
 score:'1305'
})
break;

case 'NVS 810':
return res.json({
 score:'1303'
})
break;

case 'Matrox C900 PCIe x16':
return res.json({
 score:'1301'
})
break;

case 'GeForce GTX 850M':
return res.json({
 score:'1301'
})
break;

case 'FirePro W4100 Adapter':
return res.json({
 score:'1296'
})
break;

case 'Radeon HD 7700-serie':
return res.json({
 score:'1295'
})
break;

case 'Radeon R7 PRO A12-8870':
return res.json({
 score:'1293'
})
break;

case 'GeForce GTX 950M':
return res.json({
 score:'1287'
})
break;

case 'Radeon HD 6950':
return res.json({
 score:'1284'
})
break;

case 'GeForce GT 645':
return res.json({
 score:'1273'
})
break;

case 'GeForce GTX 560':
return res.json({
 score:'1271'
})
break;

case 'Intel Iris Plus 650':
return res.json({
 score:'1266'
})
break;

case 'RadeonT R5 430':
return res.json({
 score:'1258'
})
break;

case 'Quadro 6000':
return res.json({
 score:'1256'
})
break;

case 'Radeon HD 6990':
return res.json({
 score:'1255'
})
break;

case 'Radeon R9 255':
return res.json({
 score:'1254'
})
break;

case 'Intel Coffee Lake UHD':
return res.json({
 score:'1246'
})
break;

case 'GeForce MX150':
return res.json({
 score:'1246'
})
break;

case 'Radeon RX Vega11':
return res.json({
 score:'1245'
})
break;

case 'Radeon Vega 9':
return res.json({
 score:'1243'
})
break;

case 'GeForce GTX 460 v2':
return res.json({
 score:'1242'
})
break;

case 'Radeon HD 5970':
return res.json({
 score:'1231'
})
break;

case 'FirePro M4000 Mobility Pro':
return res.json({
 score:'1229'
})
break;

case 'Radeon RX Vega 10':
return res.json({
 score:'1224'
})
break;

case 'Radeon Pro 450':
return res.json({
 score:'1212'
})
break;

case 'Quadro K3100M':
return res.json({
 score:'1204'
})
break;

case 'Radeon TM R9 A360':
return res.json({
 score:'1202'
})
break;

case 'Quadro K620':
return res.json({
 score:'1197'
})
break;

case 'FirePro W600':
return res.json({
 score:'1195'
})
break;

case 'Radeon RX Vega 8':
return res.json({
 score:'1193'
})
break;

case 'Radeon R7 FX-9830P RADEON':
return res.json({
 score:'1187'
})
break;

case 'FirePro W4100':
return res.json({
 score:'1187'
})
break;

case 'Radeon R7 A12-9800 RADEON':
return res.json({
 score:'1187'
})
break;

case 'Radeon HD 5850':
return res.json({
 score:'1183'
})
break;

case 'FirePro M6000 Mobility Pro':
return res.json({
 score:'1183'
})
break;

case 'Radeon HD 6870':
return res.json({
 score:'1180'
})
break;

case 'Quadro P400':
return res.json({
 score:'1172'
})
break;

case 'Quadro K4000M':
return res.json({
 score:'1170'
})
break;

case 'Quadro M600M':
return res.json({
 score:'1170'
})
break;

case 'Radeon Vega 10':
return res.json({
 score:'1158'
})
break;

case 'Intel Iris Pro Graphics 6200':
return res.json({
 score:'1154'
})
break;

case 'GeForce GTX 745':
return res.json({
 score:'1153'
})
break;

case 'GRID P40-2Q':
return res.json({
 score:'1147'
})
break;

case 'Intel HD P630':
return res.json({
 score:'1134'
})
break;

case 'GeForce GTX 670MX':
return res.json({
 score:'1134'
})
break;

case 'Radeon Vega 10 Mobile':
return res.json({
 score:'1131'
})
break;

case 'GeForce GTX 465':
return res.json({
 score:'1124'
})
break;

case 'Radeon R7 PRO A10-8770':
return res.json({
 score:'1123'
})
break;

case 'GeForce GTX 460':
return res.json({
 score:'1119'
})
break;

case 'Radeon E8860':
return res.json({
 score:'1115'
})
break;

case 'GRID P40-3Q':
return res.json({
 score:'1111'
})
break;

case 'GeForce GTX 555':
return res.json({
 score:'1110'
})
break;

case 'Intel Iris Plus 640':
return res.json({
 score:'1108'
})
break;

case 'Intel UHD P630':
return res.json({
 score:'1108'
})
break;

case 'Radeon HD 8870M / R9 M270X / M370X':
return res.json({
 score:'1108'
})
break;

case 'FirePro M6000':
return res.json({
 score:'1097'
})
break;

case 'GRID P40-4Q':
return res.json({
 score:'1096'
})
break;

case 'FirePro 3D V7800':
return res.json({
 score:'1091'
})
break;

case 'GRID P100-8Q':
return res.json({
 score:'1089'
})
break;

case 'Radeon R7 A10-7890K':
return res.json({
 score:'1083'
})
break;

case 'FirePro M4000':
return res.json({
 score:'1081'
})
break;

case 'Radeon HD 7750':
return res.json({
 score:'1080'
})
break;

case 'GRID P100-16Q':
return res.json({
 score:'1075'
})
break;

case 'FirePro M5100 FireGL V':
return res.json({
 score:'1071'
})
break;

case 'MONSTER GeForce GTX 675M':
return res.json({
 score:'1067'
})
break;

case 'Radeon R7 A8-7500':
return res.json({
 score:'1059'
})
break;

case 'Radeon HD 8870M':
return res.json({
 score:'1059'
})
break;

case 'Intel UHD 630':
return res.json({
 score:'1057'
})
break;

case 'Radeon HD 5830':
return res.json({
 score:'1056'
})
break;

case 'Seria Radeon HD 7700':
return res.json({
 score:'1053'
})
break;

case 'Radeon R7 PRO A8-9600':
return res.json({
 score:'1045'
})
break;

case 'GeForce GTX 675M':
return res.json({
 score:'1040'
})
break;

case 'Intel Iris 550':
return res.json({
 score:'1037'
})
break;

case 'TENSOR 1.0 Driver Intel HD 630':
return res.json({
 score:'1032'
})
break;

case 'Radeon Vega 8 Mobile':
return res.json({
 score:'1030'
})
break;

case 'GeForce GTX 560 SE':
return res.json({
 score:'1029'
})
break;

case 'Radeon R7 A10-9700 RADEON':
return res.json({
 score:'1026'
})
break;

case 'Quadro 5000':
return res.json({
 score:'1021'
})
break;

case 'GeForce GTX 580M':
return res.json({
 score:'1021'
})
break;

case 'GeForce GTX 760M':
return res.json({
 score:'1020'
})
break;

case 'GeForce GTX 645':
return res.json({
 score:'1007'
})
break;

case 'Intel Iris Pro P6300':
return res.json({
 score:'1007'
})
break;

case 'GeForce GTX 670M':
return res.json({
 score:'1007'
})
break;

case 'Quadro M520':
return res.json({
 score:'1007'
})
break;

case 'GeForce GTX 485M':
return res.json({
 score:'1006'
})
break;

case 'Radeon R5 A10-9630P 4C+6G':
return res.json({
 score:'1005'
})
break;

case 'Radeon R5 PRO A6-8570 2C+6G':
return res.json({
 score:'1003'
})
break;

case 'Radeon HD HD7850M':
return res.json({
 score:'1000'
})
break;

case 'Radeon R7 PRO A10-9700':
return res.json({
 score:'989'
})
break;

case 'Radeon HD 7730':
return res.json({
 score:'985'
})
break;

case 'Radeon R7 A10-7870K':
return res.json({
 score:'973'
})
break;

case 'Radeon R7 250':
return res.json({
 score:'972'
})
break;

case 'GRID P100-1B':
return res.json({
 score:'971'
})
break;

case 'GeForce GT 735M':
return res.json({
 score:'971'
})
break;

case 'Intel HD 630':
return res.json({
 score:'969'
})
break;

case 'Radeon R7 PRO A8-8670E':
return res.json({
 score:'967'
})
break;

case 'GeForce MX130':
return res.json({
 score:'964'
})
break;

case 'Radeon R5 340':
return res.json({
 score:'963'
})
break;

case 'Radeon R5 A6-9500 2C+6G':
return res.json({
 score:'958'
})
break;

case 'Radeon R7 A12-9800E RADEON':
return res.json({
 score:'956'
})
break;

case 'Radeon HD 7560D + 7700 Dual':
return res.json({
 score:'955'
})
break;

case 'Radeon R7 PRO A12-8870E':
return res.json({
 score:'954'
})
break;

case 'Radeon R9 M270X':
return res.json({
 score:'951'
})
break;

case 'Radeon R7 + R5 435 Dual A10-9700 RADEON':
return res.json({
 score:'949'
})
break;

case 'Radeon HD 8670D + 7700 Dual':
return res.json({
 score:'949'
})
break;

case 'Intel UHD 620':
return res.json({
 score:'948'
})
break;

case 'Radeon HD 7870M':
return res.json({
 score:'946'
})
break;

case 'Intel UHD':
return res.json({
 score:'943'
})
break;

case 'GeForce GTX 460 SE':
return res.json({
 score:'942'
})
break;

case 'Radeon HD 6850':
return res.json({
 score:'940'
})
break;

case 'Radeon R7 PRO A10-8770E':
return res.json({
 score:'940'
})
break;

case 'Embedded Radeon E9173':
return res.json({
 score:'939'
})
break;

case 'FirePro V7900':
return res.json({
 score:'936'
})
break;

case 'GeForce 930MX':
return res.json({
 score:'936'
})
break;

case 'GRID M60-1Q':
return res.json({
 score:'929'
})
break;

case 'Radeon R7 PRO A10-9700E':
return res.json({
 score:'929'
})
break;

case 'GRID P40-2B':
return res.json({
 score:'929'
})
break;

case 'Radeon R7 A8-9600 RADEON':
return res.json({
 score:'920'
})
break;

case 'Radeon R7 A10-7860K':
return res.json({
 score:'911'
})
break;

case 'Radeon R5 430':
return res.json({
 score:'910'
})
break;

case 'Barco MXRT 5500':
return res.json({
 score:'910'
})
break;

case 'Radeon R7 A10-9700E RADEON':
return res.json({
 score:'909'
})
break;

case 'Radeon R7 PRO A12-9800E':
return res.json({
 score:'909'
})
break;

case 'Radeon R7 Opteron X3421':
return res.json({
 score:'898'
})
break;

case 'GeForce GT 745M':
return res.json({
 score:'895'
})
break;

case 'Radeon R5 PRO A6-9500 2C+6G':
return res.json({
 score:'890'
})
break;

case 'Radeon R7 430':
return res.json({
 score:'879'
})
break;

case 'Quadro K3000M':
return res.json({
 score:'877'
})
break;

case 'Radeon R7 A8-7680':
return res.json({
 score:'877'
})
break;

case 'Quadro 5010M':
return res.json({
 score:'877'
})
break;

case 'GeForce 940MX':
return res.json({
 score:'876'
})
break;

case 'Radeon Vega 6':
return res.json({
 score:'876'
})
break;

case 'Quadro K2100M':
return res.json({
 score:'874'
})
break;

case 'Intel UHD Graphics 620':
return res.json({
 score:'871'
})
break;

case 'Radeon R7 PRO A6-9500 2C+6G':
return res.json({
 score:'870'
})
break;

case 'GeForce GTX 480M':
return res.json({
 score:'867'
})
break;

case 'Radeon HD 6790':
return res.json({
 score:'864'
})
break;

case 'GeForce GTX 550 Ti':
return res.json({
 score:'863'
})
break;

case 'Radeon R5 A6-9500E 2C+4G':
return res.json({
 score:'861'
})
break;

case 'Quadro K2000':
return res.json({
 score:'858'
})
break;

case 'Radeon R7 A8-7670K':
return res.json({
 score:'857'
})
break;

case 'Radeon R7 FX-8800P':
return res.json({
 score:'854'
})
break;

case 'GeForce GTX 570M':
return res.json({
 score:'853'
})
break;

case 'Radeon R7 A10-8750':
return res.json({
 score:'852'
})
break;

case 'Radeon HD 8570':
return res.json({
 score:'852'
})
break;

case 'Radeon R7 A10-7850K':
return res.json({
 score:'849'
})
break;

case 'Radeon HD 6900M':
return res.json({
 score:'846'
})
break;

case 'GeForce GT 740':
return res.json({
 score:'845'
})
break;

case 'GeForce GTX 650':
return res.json({
 score:'843'
})
break;

case 'Radeon R7 PRO A10-9700B':
return res.json({
 score:'840'
})
break;

case 'Intel Iris 540':
return res.json({
 score:'838'
})
break;

case 'Radeon R7 7850A10-7850K':
return res.json({
 score:'836'
})
break;

case 'Radeon HD 5770':
return res.json({
 score:'836'
})
break;

case 'Radeon HD 6770':
return res.json({
 score:'828'
})
break;

case 'Radeon R7 PRO A10-8850B':
return res.json({
 score:'826'
})
break;

case 'Radeon R7 A10 PRO-7850B':
return res.json({
 score:'823'
})
break;

case 'Matrox C420 LP PCIe x16':
return res.json({
 score:'821'
})
break;

case 'Radeon R7 340':
return res.json({
 score:'821'
})
break;

case 'Intel Iris 650':
return res.json({
 score:'817'
})
break;

case 'Quadro K2000D':
return res.json({
 score:'814'
})
break;

case 'GRID V100D-8Q':
return res.json({
 score:'813'
})
break;

case 'GeForce GT 635':
return res.json({
 score:'810'
})
break;

case 'Radeon Vega 3':
return res.json({
 score:'804'
})
break;

case 'Quadro K620M':
return res.json({
 score:'803'
})
break;

case 'Radeon HD 7850M':
return res.json({
 score:'801'
})
break;

case 'FirePro 3D V5800':
return res.json({
 score:'801'
})
break;

case 'Radeon R5 A6-7480':
return res.json({
 score:'801'
})
break;

case 'Radeon R6 Opteron X3418':
return res.json({
 score:'800'
})
break;

case 'Intel Iris Pro 5200':
return res.json({
 score:'787'
})
break;

case 'GeForce 825M':
return res.json({
 score:'782'
})
break;

case 'GeForce GTX 470M':
return res.json({
 score:'782'
})
break;

case 'GeForce GT 755M':
return res.json({
 score:'779'
})
break;

case 'Intel HD P530':
return res.json({
 score:'776'
})
break;

case 'GeForce GTX 660M':
return res.json({
 score:'776'
})
break;

case 'Radeon R7 A12-9730P RADEON':
return res.json({
 score:'775'
})
break;

case 'Radeon R7 + R7 200 Dual':
return res.json({
 score:'770'
})
break;

case 'Radeon R7 PRO A10-8750B':
return res.json({
 score:'766'
})
break;

case 'Intel HD Graphics 620':
return res.json({
 score:'765'
})
break;

case 'GeForce GT 750M':
return res.json({
 score:'762'
})
break;

case 'Barco MXRT 5450':
return res.json({
 score:'760'
})
break;

case 'Radeon R7 A12-9720P RADEON':
return res.json({
 score:'758'
})
break;

case 'Radeon R7 +8G':
return res.json({
 score:'749'
})
break;

case 'Radeon R7 A8-7650K':
return res.json({
 score:'748'
})
break;

case 'GeForce GT 640':
return res.json({
 score:'747'
})
break;

case 'FirePro W2100':
return res.json({
 score:'746'
})
break;

case 'Radeon R7 A10-7800':
return res.json({
 score:'744'
})
break;

case 'Quadro 5000M':
return res.json({
 score:'744'
})
break;

case 'GeForce 840M':
return res.json({
 score:'744'
})
break;

case 'GeForce GTS 450':
return res.json({
 score:'743'
})
break;

case 'GeForce 930A':
return res.json({
 score:'742'
})
break;

case 'FirePro M40003':
return res.json({
 score:'740'
})
break;

case 'NVS 310':
return res.json({
 score:'738'
})
break;

case 'Radeon HD 7660D + R7 240 Dual':
return res.json({
 score:'737'
})
break;

case 'GeForce 945M':
return res.json({
 score:'736'
})
break;

case 'Radeon Vega 3 Mobile':
return res.json({
 score:'735'
})
break;

case 'GRID P6-2Q':
return res.json({
 score:'735'
})
break;

case 'Quadro 4000':
return res.json({
 score:'733'
})
break;

case 'Quadro 4000M':
return res.json({
 score:'726'
})
break;

case 'Radeon R7 PRO A12-9800B':
return res.json({
 score:'725'
})
break;

case 'Radeon HD 7750M':
return res.json({
 score:'725'
})
break;

case 'Radeon R7 FX-9800P RADEON':
return res.json({
 score:'720'
})
break;

case 'Radeon R5 PRO A8-9600B 4C+6G':
return res.json({
 score:'718'
})
break;

case 'Radeon R7 A10-7700K':
return res.json({
 score:'717'
})
break;

case 'GeForce 940M':
return res.json({
 score:'716'
})
break;

case 'Radeon R7 PRO A12-8830B':
return res.json({
 score:'712'
})
break;

case 'GeForce GT 730':
return res.json({
 score:'712'
})
break;

case 'Radeon R5 240':
return res.json({
 score:'712'
})
break;

case 'GeForce GT 740M':
return res.json({
 score:'711'
})
break;

case 'GRID M60-8Q':
return res.json({
 score:'709'
})
break;

case 'GeForce 930M':
return res.json({
 score:'707'
})
break;

case 'Radeon R7 A10 PRO-7800B':
return res.json({
 score:'706'
})
break;

case 'GeForce GTX 560M':
return res.json({
 score:'706'
})
break;

case 'FirePro M4150':
return res.json({
 score:'705'
})
break;

case 'Radeon R5 PRO A6-9500E 2C+4G':
return res.json({
 score:'704'
})
break;

case 'Intel Iris 6100':
return res.json({
 score:'704'
})
break;

case 'GeForce MX110':
return res.json({
 score:'703'
})
break;

case 'Radeon R7 A8-7600':
return res.json({
 score:'702'
})
break;

case 'Radeon HD 5750':
return res.json({
 score:'697'
})
break;

case 'Radeon R7 240':
return res.json({
 score:'692'
})
break;

case 'Radeon HD 7730M':
return res.json({
 score:'692'
})
break;

case 'Radeon R5 PRO A6-8570E 2C+4G':
return res.json({
 score:'690'
})
break;

case 'GeForce 830M':
return res.json({
 score:'689'
})
break;

case 'GRID M6-8Q':
return res.json({
 score:'686'
})
break;

case 'Quadro K2000M':
return res.json({
 score:'686'
})
break;

case 'Quadro K1100M':
return res.json({
 score:'682'
})
break;

case 'Professional HD Driver':
return res.json({
 score:'676'
})
break;

case 'GeForce 920MX':
return res.json({
 score:'674'
})
break;

case 'Radeon HD 6750':
return res.json({
 score:'674'
})
break;

case 'GeForce GT 730M':
return res.json({
 score:'672'
})
break;

case 'Radeon HD 8470D + HD 7500 Dual':
return res.json({
 score:'670'
})
break;

case 'Quadro 2000D':
return res.json({
 score:'668'
})
break;

case 'Quadro 2000':
return res.json({
 score:'666'
})
break;

case 'FirePro V5800':
return res.json({
 score:'662'
})
break;

case 'Radeon HD 8570D + HD 8570 Dual':
return res.json({
 score:'662'
})
break;

case 'Radeon R7 PRO A12-8800B':
return res.json({
 score:'661'
})
break;

case 'Radeon R5 A10-9620P 4C+6G':
return res.json({
 score:'660'
})
break;

case 'GeForce 920M':
return res.json({
 score:'659'
})
break;

case 'Radeon R9 M265X':
return res.json({
 score:'656'
})
break;

case 'Intel HD 530':
return res.json({
 score:'654'
})
break;

case 'Mobility Radeon HD 5870':
return res.json({
 score:'653'
})
break;

case 'Barco MXRT 7400':
return res.json({
 score:'651'
})
break;

case 'GeForce GT 650M':
return res.json({
 score:'651'
})
break;

case 'Barco MXRT 5400':
return res.json({
 score:'650'
})
break;

case 'Radeon HD 8650G + 7700M Dual':
return res.json({
 score:'646'
})
break;

case 'Intel UHD 617':
return res.json({
 score:'644'
})
break;

case 'Radeon R5 A10-9600P 4C+6G':
return res.json({
 score:'644'
})
break;

case 'Radeon R7 A12-9700P RADEON':
return res.json({
 score:'642'
})
break;

case 'Radeon R7 A8-8650':
return res.json({
 score:'641'
})
break;

case 'GeForce GT 240':
return res.json({
 score:'638'
})
break;

case 'Radeon HD 6800M':
return res.json({
 score:'637'
})
break;

case 'Radeon HD 8670D + R7 200 Dual':
return res.json({
 score:'635'
})
break;

case 'Radeon HD 8750M':
return res.json({
 score:'635'
})
break;

case 'Radeon R5 A6-9400 RADEON R5, 6 COMPUTE CORES 2C+4G':
return res.json({
 score:'632'
})
break;

case 'Radeon R7 G':
return res.json({
 score:'630'
})
break;

case 'Radeon R7 + R7 240 Dual':
return res.json({
 score:'629'
})
break;

case 'Radeon R7 PRO A8-8650B':
return res.json({
 score:'625'
})
break;

case 'Radeon 540':
return res.json({
 score:'623'
})
break;

case 'GRID M10-8Q':
return res.json({
 score:'616'
})
break;

case 'Radeon R5 PRO A10-8730B 4C+6G':
return res.json({
 score:'615'
})
break;

case 'GRID K280Q':
return res.json({
 score:'612'
})
break;

case 'Radeon HD 6650M':
return res.json({
 score:'608'
})
break;

case 'GeForce GT 820M':
return res.json({
 score:'607'
})
break;

case 'Ryzen 7 2700U with Radeon Vega':
return res.json({
 score:'607'
})
break;

case 'Radeon HD 4650':
return res.json({
 score:'607'
})
break;

case 'Radeon HD 7640G + R5 M200 Dual':
return res.json({
 score:'606'
})
break;

case 'Intel HD 6000':
return res.json({
 score:'605'
})
break;

case 'Radeon HD 5600/5700':
return res.json({
 score:'605'
})
break;

case 'Radeon R5 PRO A6-8500B 2C+4G':
return res.json({
 score:'603'
})
break;

case 'Radeon HD 8570D + R7 240 Dual':
return res.json({
 score:'601'
})
break;

case 'Radeon HD 7520G + 7700M Dual':
return res.json({
 score:'600'
})
break;

case 'Radeon R5 A6-8500P':
return res.json({
 score:'600'
})
break;

case 'GRID M60-4Q':
return res.json({
 score:'599'
})
break;

case 'Quadro 3000M':
return res.json({
 score:'599'
})
break;

case 'GeForce GT 640M':
return res.json({
 score:'596'
})
break;

case 'GeForce GT 710':
return res.json({
 score:'594'
})
break;

case 'GeForce GTX 460M':
return res.json({
 score:'593'
})
break;

case 'Radeon R6 A10-8700P':
return res.json({
 score:'592'
})
break;

case 'Radeon HD 8670D + R7 240 Dual':
return res.json({
 score:'589'
})
break;

case 'Radeon R7 A8 PRO-7600B':
return res.json({
 score:'586'
})
break;

case 'Radeon R5 PRO A6-8530B 2C+4G':
return res.json({
 score:'584'
})
break;

case 'Radeon HD 8570 + HD 7660D Dual':
return res.json({
 score:'583'
})
break;

case 'Intel UHD 610':
return res.json({
 score:'583'
})
break;

case 'Radeon HD 8570D + R7 200 Dual':
return res.json({
 score:'580'
})
break;

case 'Intel HD 520':
return res.json({
 score:'579'
})
break;

case 'Radeon HD 8670D + 8570 Dual':
return res.json({
 score:'579'
})
break;

case 'FirePro W4170M':
return res.json({
 score:'578'
})
break;

case 'GRID V100-8Q':
return res.json({
 score:'578'
})
break;

case 'Radeon HD 7560D + HD 8570 Dual':
return res.json({
 score:'577'
})
break;

case 'Radeon HD 8570 + 8670D Dual':
return res.json({
 score:'576'
})
break;

case 'GeForce GT 545':
return res.json({
 score:'576'
})
break;

case 'Radeon R7 A8-7500 4C+6G':
return res.json({
 score:'571'
})
break;

case 'Radeon HD 8670D + 7000 Dual':
return res.json({
 score:'570'
})
break;

case 'Quadro K610M':
return res.json({
 score:'569'
})
break;

case 'GRID M60-0B':
return res.json({
 score:'569'
})
break;

case 'Radeon R7 240 + HD 8570D Dual':
return res.json({
 score:'568'
})
break;

case 'Radeon HD 8450G + 8600/8700M Dual':
return res.json({
 score:'564'
})
break;

case 'Radeon R7 240 + HD 8670D Dual':
return res.json({
 score:'559'
})
break;

case 'Radeon HD 7670':
return res.json({
 score:'559'
})
break;

case 'FirePro V4900':
return res.json({
 score:'555'
})
break;

case 'Quadro 2000M':
return res.json({
 score:'553'
})
break;

case 'Intel Iris Pro 6100':
return res.json({
 score:'552'
})
break;

case 'Quadro 2000 D':
return res.json({
 score:'547'
})
break;

case 'Radeon HD 7560D + HD 6670 Dual':
return res.json({
 score:'547'
})
break;

case 'GeForce GT 640M LE':
return res.json({
 score:'545'
})
break;

case 'Intel HD 610':
return res.json({
 score:'545'
})
break;

case 'Intel UHD 615':
return res.json({
 score:'544'
})
break;

case 'GeForce GT 720':
return res.json({
 score:'543'
})
break;

case 'GeForce 710M':
return res.json({
 score:'542'
})
break;

case 'GeForce GT 710M':
return res.json({
 score:'541'
})
break;

case 'Intel HD 5200':
return res.json({
 score:'537'
})
break;

case 'Radeon R6 PRO A10-8700B 4C+6G':
return res.json({
 score:'536'
})
break;

case 'Radeon HD 6670':
return res.json({
 score:'536'
})
break;

case 'GeForce 820M':
return res.json({
 score:'535'
})
break;

case 'Intel Iris 5100':
return res.json({
 score:'533'
})
break;

case 'Intel HD P4600/P4700':
return res.json({
 score:'533'
})
break;

case 'Radeon R7 M465':
return res.json({
 score:'531'
})
break;

case 'Intel HD 4600':
return res.json({
 score:'526'
})
break;

case 'Radeon HD 7560D + 7670 Dual':
return res.json({
 score:'525'
})
break;

case 'Radeon HD 7560D + 6670 Dual':
return res.json({
 score:'518'
})
break;

case 'Radeon HD 8550G + HD 8750M Dual':
return res.json({
 score:'518'
})
break;

case 'GeForce 210':
return res.json({
 score:'516'
})
break;

case 'FirePro W5130M':
return res.json({
 score:'516'
})
break;

case 'Radeon R5 PRO A6-9500B 2C+4G':
return res.json({
 score:'515'
})
break;

case 'Radeon HD 7660D + 6670 Dual':
return res.json({
 score:'513'
})
break;

case 'Radeon HD 8670D + HD 7000 Dual':
return res.json({
 score:'512'
})
break;

case 'Radeon HD 8670D + HD 6670 Dual':
return res.json({
 score:'512'
})
break;

case 'Radeon HD 8670D + 6670 Dual':
return res.json({
 score:'511'
})
break;

case 'Radeon R6 A8-8600P':
return res.json({
 score:'510'
})
break;

case 'A10-8700P':
return res.json({
 score:'509'
})
break;

case 'Radeon HD 8730M':
return res.json({
 score:'509'
})
break;

case 'Intel HD 615':
return res.json({
 score:'509'
})
break;

case 'Radeon HD 7560D + HD 7670 Dual':
return res.json({
 score:'504'
})
break;

case 'GRID M60-2Q':
return res.json({
 score:'503'
})
break;

case 'Radeon R5 M240':
return res.json({
 score:'502'
})
break;

case 'FirePro V3900':
return res.json({
 score:'502'
})
break;

case 'Mobility Radeon HD 5850':
return res.json({
 score:'502'
})
break;

case 'GRID K240Q':
return res.json({
 score:'502'
})
break;

case 'Radeon HD 8570D + 6670 Dual':
return res.json({
 score:'501'
})
break;

case 'Radeon HD 8650G + HD 8750M Dual':
return res.json({
 score:'501'
})
break;

case 'GRID M10-0Q':
return res.json({
 score:'501'
})
break;

case 'GRID M10-4Q':
return res.json({
 score:'501'
})
break;

case 'Radeon R6 PRO A8-8600B 4C+6G':
return res.json({
 score:'501'
})
break;

case 'GeForce GT 635M':
return res.json({
 score:'500'
})
break;

case 'GRID M10-1Q':
return res.json({
 score:'496'
})
break;

case 'FirePro 3D V4800':
return res.json({
 score:'495'
})
break;

case 'Radeon HD 6700M':
return res.json({
 score:'491'
})
break;

case 'GeForce GT 720M':
return res.json({
 score:'491'
})
break;

case 'Radeon R7E':
return res.json({
 score:'490'
})
break;

case 'Radeon HD 7670A':
return res.json({
 score:'489'
})
break;

case 'GeForce GT 645M':
return res.json({
 score:'487'
})
break;

case 'Radeon HD 8570D + HD 6670 Dual':
return res.json({
 score:'485'
})
break;

case 'Radeon HD 7660G N HD 7660G + HD 7700M N HD 7700M D':
return res.json({
 score:'485'
})
break;

case 'Radeon HD 7660G + 7730M Dual':
return res.json({
 score:'484'
})
break;

case 'Radeon HD 8670D':
return res.json({
 score:'476'
})
break;

case 'Quadro K420':
return res.json({
 score:'476'
})
break;

case 'GeForce 710A':
return res.json({
 score:'473'
})
break;

case 'Radeon HD 7660D + 7670 Dual':
return res.json({
 score:'472'
})
break;

case 'Radeon HD 8670D + R5 235 Dual':
return res.json({
 score:'471'
})
break;

case 'Radeon HD 7690M':
return res.json({
 score:'471'
})
break;

case 'NVS 5400M':
return res.json({
 score:'469'
})
break;

case 'Radeon R5 Opteron X3216':
return res.json({
 score:'467'
})
break;

case 'Radeon HD 5670':
return res.json({
 score:'464'
})
break;

case 'Radeon HD 6670 + 6670 Dual':
return res.json({
 score:'463'
})
break;

case 'GeForce GT 555M':
return res.json({
 score:'462'
})
break;

case 'Radeon HD 7650A':
return res.json({
 score:'458'
})
break;

case 'Radeon HD 7570':
return res.json({
 score:'458'
})
break;

case 'Ryzen 5 2500U with Radeon Vega':
return res.json({
 score:'455'
})
break;

case 'Radeon HD 7660D':
return res.json({
 score:'454'
})
break;

case 'Quadro K1000M':
return res.json({
 score:'453'
})
break;

case 'Radeon E6760':
return res.json({
 score:'452'
})
break;

case 'Intel HD 5500':
return res.json({
 score:'452'
})
break;

case 'Radeon R5 330':
return res.json({
 score:'452'
})
break;

case 'Radeon HD 8610G + HD 8500M Dual':
return res.json({
 score:'451'
})
break;

case 'Radeon HD 8650G N HD 8650G + HD 8600M N HD 8600M D':
return res.json({
 score:'450'
})
break;

case 'Radeon R4E':
return res.json({
 score:'449'
})
break;

case 'Radeon HD 8550G + R5 M200 Dual':
return res.json({
 score:'449'
})
break;

case 'Radeon R6':
return res.json({
 score:'449'
})
break;

case 'GeForce GT 550M':
return res.json({
 score:'446'
})
break;

case 'GeForce GT 630':
return res.json({
 score:'445'
})
break;

case 'Radeon HD 6570':
return res.json({
 score:'444'
})
break;

case 'Radeon HD 8670D N HD 8670D + HD 8670D Dual':
return res.json({
 score:'443'
})
break;

case 'Radeon HD 8650G + 8600/8700M Dual':
return res.json({
 score:'443'
})
break;

case 'Radeon 530':
return res.json({
 score:'441'
})
break;

case 'Radeon HD 7560D + 7560D Dual':
return res.json({
 score:'440'
})
break;

case 'Radeon HD 7560D + HD 6570 Dual':
return res.json({
 score:'439'
})
break;

case 'GeForce GT 445M':
return res.json({
 score:'436'
})
break;

case 'Quadro K600':
return res.json({
 score:'434'
})
break;

case 'GeForce GT 440':
return res.json({
 score:'433'
})
break;

case 'NVS 5200M':
return res.json({
 score:'431'
})
break;

case 'FirePro V5900':
return res.json({
 score:'431'
})
break;

case 'Radeon HD 8570D + 6570 Dual':
return res.json({
 score:'430'
})
break;

case 'Radeon HD7570':
return res.json({
 score:'430'
})
break;

case 'Radeon HD 7660D + 7500 Dual':
return res.json({
 score:'428'
})
break;

case 'Radeon HD 7640G + HD 8600/8700M Dual':
return res.json({
 score:'428'
})
break;

case 'Radeon HD 7660D + 7540D Dual':
return res.json({
 score:'426'
})
break;

case 'Radeon HD 8610G + R5 M200 Dual':
return res.json({
 score:'424'
})
break;

case 'Radeon HD 7660D + 6570 Dual':
return res.json({
 score:'423'
})
break;

case 'GeForce GT 630M':
return res.json({
 score:'421'
})
break;

case 'GRID K1':
return res.json({
 score:'419'
})
break;

case 'Intel 6th Gen Skylake HD 530':
return res.json({
 score:'417'
})
break;

case 'Radeon HD 8650G':
return res.json({
 score:'417'
})
break;

case 'Radeon HD 8570D + HD 6570 Dual':
return res.json({
 score:'416'
})
break;

case 'Radeon HD 8470D + 6570 Dual':
return res.json({
 score:'414'
})
break;

case 'GRID M10-2B':
return res.json({
 score:'414'
})
break;

case 'Radeon HD 7660G + 7700M Dual':
return res.json({
 score:'412'
})
break;

case 'Radeon HD 7540D + 7500 Dual':
return res.json({
 score:'411'
})
break;

case 'NVS 510':
return res.json({
 score:'408'
})
break;

case 'Radeon HD 8650G + 8750M Dual':
return res.json({
 score:'407'
})
break;

case '7900 MOD - Radeon HD 6550D':
return res.json({
 score:'404'
})
break;

case 'GeForce GT 530':
return res.json({
 score:'403'
})
break;

case 'Intel HD 5000':
return res.json({
 score:'403'
})
break;

case 'GeForce GT 620M':
return res.json({
 score:'401'
})
break;

case 'Radeon HD 7660D + HD 7000 Dual':
return res.json({
 score:'401'
})
break;

case 'Radeon HD 7660G + HD 7670M Dual':
return res.json({
 score:'399'
})
break;

case 'Intel Poison Ivy':
return res.json({
 score:'397'
})
break;

case 'Intel HD 5600':
return res.json({
 score:'396'
})
break;

case 'Radeon R7 M440':
return res.json({
 score:'395'
})
break;

case 'Quadro 600':
return res.json({
 score:'394'
})
break;

case 'Radeon HD 7560D + 7570 Dual':
return res.json({
 score:'394'
})
break;

case 'Radeon HD 8650G + HD 8600/8700M Dual':
return res.json({
 score:'394'
})
break;

case 'Radeon HD 7520G + HD 7600M Dual':
return res.json({
 score:'393'
})
break;

case 'Intel HD 515':
return res.json({
 score:'392'
})
break;

case 'Radeon HD 7640G + 8600/8700M Dual':
return res.json({
 score:'391'
})
break;

case 'Quadro 1000M':
return res.json({
 score:'391'
})
break;

case 'Radeon HD 8550G + 8750M Dual':
return res.json({
 score:'390'
})
break;

case 'Radeon 6600M':
return res.json({
 score:'390'
})
break;

case 'Intel HD 510':
return res.json({
 score:'389'
})
break;

case 'Radeon HD 7570M':
return res.json({
 score:'388'
})
break;

case 'Intel UHD 605':
return res.json({
 score:'387'
})
break;

case 'FirePro M2000':
return res.json({
 score:'385'
})
break;

case 'Radeon HD 7620G + 8670M Dual':
return res.json({
 score:'385'
})
break;

case 'Radeon HD 8670D + HD 7600 Dual':
return res.json({
 score:'384'
})
break;

case 'Radeon HD 7540D + 6570 Dual':
return res.json({
 score:'381'
})
break;

case 'Radeon HD 7660G + HD 7700M Dual':
return res.json({
 score:'381'
})
break;

case 'Radeon HD 7660G':
return res.json({
 score:'380'
})
break;

case 'Radeon HD 6650A':
return res.json({
 score:'378'
})
break;

case 'Matrox G200e WDDM 2.0':
return res.json({
 score:'378'
})
break;

case 'Mobility Radeon HD 5570':
return res.json({
 score:'375'
})
break;

case 'GeForce GT 430':
return res.json({
 score:'375'
})
break;

case 'Radeon HD 7660G + 8670M Dual':
return res.json({
 score:'373'
})
break;

case 'Intel HD 4400':
return res.json({
 score:'372'
})
break;

case 'Barco MXRT 2600':
return res.json({
 score:'370'
})
break;

case 'Radeon HD 8650G + HD 8600M N HD 8600M Dual':
return res.json({
 score:'370'
})
break;

case 'Radeon HD 8650G + R5 M230 Dual':
return res.json({
 score:'369'
})
break;

case 'Radeon HD 8650G N HD 8650G + HD 8600/8700M Dual':
return res.json({
 score:'369'
})
break;

case 'Radeon HD 8650G + HD 8670M Dual':
return res.json({
 score:'369'
})
break;

case 'Radeon HD 8550G + 8600/8700M Dual':
return res.json({
 score:'366'
})
break;

case 'Radeon HD 7670M':
return res.json({
 score:'366'
})
break;

case 'Radeon HD 6550D':
return res.json({
 score:'366'
})
break;

case 'Radeon HD 5570':
return res.json({
 score:'366'
})
break;

case 'Radeon R5 420':
return res.json({
 score:'366'
})
break;

case 'Quadro 410':
return res.json({
 score:'364'
})
break;

case 'Intel HD P4600':
return res.json({
 score:'363'
})
break;

case 'Radeon R7 M365X':
return res.json({
 score:'363'
})
break;

case 'Radeon HD 8650D':
return res.json({
 score:'361'
})
break;

case 'Radeon HD 8650G + 7670M Dual':
return res.json({
 score:'360'
})
break;

case 'FirePro V3800':
return res.json({
 score:'360'
})
break;

case 'GeForce GT 540M':
return res.json({
 score:'357'
})
break;

case 'Radeon HD 7560D + 6570 Dual':
return res.json({
 score:'357'
})
break;

case 'Radeon HD 8650G + 7600M Dual':
return res.json({
 score:'355'
})
break;

case 'Radeon HD 7520G + HD 8750M Dual':
return res.json({
 score:'353'
})
break;

case 'Intel HD Family':
return res.json({
 score:'352'
})
break;

case 'Radeon HD 8650G + 8500M Dual':
return res.json({
 score:'349'
})
break;

case 'Radeon HD 7660G + 7600M Dual':
return res.json({
 score:'346'
})
break;

case 'NVS 4200M':
return res.json({
 score:'344'
})
break;

case 'Radeon HD 8570D':
return res.json({
 score:'344'
})
break;

case 'Radeon HD 8550G + 8690M Dual':
return res.json({
 score:'341'
})
break;

case 'GeForce GT 520MX':
return res.json({
 score:'341'
})
break;

case 'Mobility Radeon HD 5730':
return res.json({
 score:'341'
})
break;

case 'Radeon RX 550X':
return res.json({
 score:'341'
})
break;

case 'Radeon HD 8650G + 8670M Dual':
return res.json({
 score:'335'
})
break;

case 'Intel HD 3000':
return res.json({
 score:'334'
})
break;

case 'Radeon HD 7660G N HD 7660G + HD 7670M Dual':
return res.json({
 score:'333'
})
break;

case 'Radeon HD 7660G N HD 7660G + HD 7600M N HD 7600M D':
return res.json({
 score:'332'
})
break;

case 'Radeon HD 8470D + HD 6450 Dual':
return res.json({
 score:'330'
})
break;

case 'Radeon HD 8650G N HD 8650G + HD 8570M Dual':
return res.json({
 score:'329'
})
break;

case 'Radeon HD 8610G':
return res.json({
 score:'327'
})
break;

case 'FirePro 3D V3800':
return res.json({
 score:'327'
})
break;

case 'Radeon HD 7560D':
return res.json({
 score:'327'
})
break;

case 'Radeon HD 7600M + 7600M Dual':
return res.json({
 score:'327'
})
break;

case 'Radeon HD 8650G + 8570M Dual':
return res.json({
 score:'326'
})
break;

case 'Radeon HD 7640G N HD 7640G + HD 7600M N HD 7600M D':
return res.json({
 score:'326'
})
break;

case 'Radeon HD 7640G + HD 7670M Dual':
return res.json({
 score:'326'
})
break;

case 'Radeon HD 7560D + 6450 Dual':
return res.json({
 score:'326'
})
break;

case 'Intel HD P4000':
return res.json({
 score:'323'
})
break;

case 'Radeon HD 7550M/7650M':
return res.json({
 score:'323'
})
break;

case 'GRID M10-1B':
return res.json({
 score:'323'
})
break;

case 'GeForce GT 435M':
return res.json({
 score:'323'
})
break;

case 'Radeon HD 7660G + 7670M Dual':
return res.json({
 score:'322'
})
break;

case 'Radeon HD 7660G + 7400M Dual':
return res.json({
 score:'322'
})
break;

case 'Radeon HD 8610G + HD 8670M Dual':
return res.json({
 score:'321'
})
break;

case 'Radeon HD 7660G + 7610M Dual':
return res.json({
 score:'321'
})
break;

case 'Intel UHD 600':
return res.json({
 score:'321'
})
break;

case 'Radeon HD 8550G + HD 8600M Dual':
return res.json({
 score:'320'
})
break;

case 'Radeon HD 7620G + 8600M Dual':
return res.json({
 score:'320'
})
break;

case 'Radeon HD 8610G + 8670M Dual':
return res.json({
 score:'319'
})
break;

case 'GeForce GT 425M':
return res.json({
 score:'319'
})
break;

case 'Radeon HD 7640G + HD 8500M Dual':
return res.json({
 score:'318'
})
break;

case 'Radeon HD 7620G + HD 8670M Dual':
return res.json({
 score:'318'
})
break;

case 'Radeon HD 8550D':
return res.json({
 score:'317'
})
break;

case 'SUMO 9640':
return res.json({
 score:'317'
})
break;

case 'Radeon HD 7660G + HD 7500/7600 7500/7600 Dual':
return res.json({
 score:'317'
})
break;

case 'Radeon HD 8650G + 8600M Dual':
return res.json({
 score:'316'
})
break;

case 'Radeon R1E':
return res.json({
 score:'315'
})
break;

case 'Radeon HD 8610G + 8600M Dual':
return res.json({
 score:'313'
})
break;

case 'Mobility Radeon HD 5000':
return res.json({
 score:'313'
})
break;

case 'Radeon HD 8650G + HD 8570M Dual':
return res.json({
 score:'312'
})
break;

case 'Radeon HD 7550M':
return res.json({
 score:'312'
})
break;

case 'Radeon HD 8610G + 8500M Dual':
return res.json({
 score:'311'
})
break;

case 'Radeon HD 8570D + HD 7000 Dual':
return res.json({
 score:'307'
})
break;

case 'Radeon HD 7650M':
return res.json({
 score:'306'
})
break;

case 'Intel HD 4000':
return res.json({
 score:'306'
})
break;

case 'Radeon HD 8510G':
return res.json({
 score:'304'
})
break;

case 'Radeon HD 8570D + R5 235 Dual':
return res.json({
 score:'301'
})
break;

case 'Radeon R7 M350':
return res.json({
 score:'301'
})
break;

case 'Radeon R4':
return res.json({
 score:'301'
})
break;

case 'Radeon HD 7660G + 8600M Dual':
return res.json({
 score:'300'
})
break;

case 'Radeon HD 7660G + 7470M Dual':
return res.json({
 score:'300'
})
break;

case 'Radeon HD 7660D + R5 235 Dual':
return res.json({
 score:'299'
})
break;

case 'Radeon HD 7660G + HD 8500M Dual':
return res.json({
 score:'299'
})
break;

case 'Radeon HD 8550G':
return res.json({
 score:'298'
})
break;

case 'Radeon HD 7640G + 7600M Dual':
return res.json({
 score:'296'
})
break;

case 'Radeon R5 235 + HD 7560D Dual':
return res.json({
 score:'295'
})
break;

case 'Radeon HD 7660D + 7470 Dual':
return res.json({
 score:'295'
})
break;

case 'Qualcomm Adreno 630 GPU':
return res.json({
 score:'294'
})
break;

case 'GeForce GT 525M':
return res.json({
 score:'294'
})
break;

case 'Radeon HD 6550A':
return res.json({
 score:'293'
})
break;

case 'GeForce GT 420M':
return res.json({
 score:'291'
})
break;

case 'Radeon HD 8550G + 8500M Dual':
return res.json({
 score:'291'
})
break;

case 'Mobility Radeon HD 5650':
return res.json({
 score:'291'
})
break;

case 'GeForce GT 620':
return res.json({
 score:'290'
})
break;

case 'Radeon HD 5550':
return res.json({
 score:'290'
})
break;

case 'Radeon HD 8470D + 6450 Dual':
return res.json({
 score:'289'
})
break;

case 'GeForce GT 710B':
return res.json({
 score:'286'
})
break;

case 'Radeon HD 8470D':
return res.json({
 score:'286'
})
break;

case 'Radeon HD 8510G + 8500M Dual':
return res.json({
 score:'285'
})
break;

case 'Radeon HD 7620G':
return res.json({
 score:'284'
})
break;

case 'Matrox G200eW3 WDDM 2.0':
return res.json({
 score:'284'
})
break;

case 'Radeon HD 7660G + HD 7600M Dual':
return res.json({
 score:'283'
})
break;

case 'Radeon HD 8650G + HD 8600M Dual':
return res.json({
 score:'283'
})
break;

case 'Radeon HD 8550G + 8570M Dual':
return res.json({
 score:'282'
})
break;

case 'Intel HD 5300':
return res.json({
 score:'279'
})
break;

case 'Radeon HD 7640G + HD 7600M Dual':
return res.json({
 score:'279'
})
break;

case 'Intel HD 505':
return res.json({
 score:'278'
})
break;

case 'GeForce GT 705':
return res.json({
 score:'277'
})
break;

case 'GRID K140Q':
return res.json({
 score:'277'
})
break;

case 'Radeon HD 7540D':
return res.json({
 score:'277'
})
break;

case 'Radeon HD 7560D + R5 235 Dual':
return res.json({
 score:'275'
})
break;

case 'Radeon HD8490':
return res.json({
 score:'272'
})
break;

case 'Radeon HD 7640G + 7670M Dual':
return res.json({
 score:'266'
})
break;

case 'Radeon HD 7640G':
return res.json({
 score:'265'
})
break;

case 'Radeon HD 7610M':
return res.json({
 score:'263'
})
break;

case 'Radeon HD 7500G + 7550M Dual':
return res.json({
 score:'263'
})
break;

case 'Radeon HD 6620G':
return res.json({
 score:'263'
})
break;

case 'GeForce 615':
return res.json({
 score:'263'
})
break;

case 'Quadro 500M':
return res.json({
 score:'262'
})
break;

case 'Radeon HD 7600G':
return res.json({
 score:'261'
})
break;

case 'Radeon HD 8490':
return res.json({
 score:'261'
})
break;

case 'Radeon HD 7640G + 7650M Dual':
return res.json({
 score:'259'
})
break;

case 'Radeon HD 7640G + 8670M Dual':
return res.json({
 score:'258'
})
break;

case 'Radeon HD 8550G + 8670M Dual':
return res.json({
 score:'258'
})
break;

case 'SUMO 964A':
return res.json({
 score:'257'
})
break;

case 'Radeon R5 235X':
return res.json({
 score:'256'
})
break;

case 'Radeon HD 7640G + 7500M/7600M Dual':
return res.json({
 score:'256'
})
break;

case 'Radeon HD 7640G + 8500M Dual':
return res.json({
 score:'255'
})
break;

case 'Radeon HD 7640G N HD 7640G + HD 7670M Dual':
return res.json({
 score:'254'
})
break;

case 'GeForce GT 625':
return res.json({
 score:'254'
})
break;

case 'Radeon HD 7670M + 7670M Dual':
return res.json({
 score:'253'
})
break;

case 'Radeon HD 8570D + HD 8470 Dual':
return res.json({
 score:'253'
})
break;

case 'Radeon HD 7640G + 7690M Dual':
return res.json({
 score:'253'
})
break;

case 'Mobile Intel HD':
return res.json({
 score:'253'
})
break;

case 'Radeon HD 7640G + 7450M Dual':
return res.json({
 score:'252'
})
break;

case 'Radeon HD 7640G + 7700M Dual':
return res.json({
 score:'250'
})
break;

case 'Radeon HD 7600G + HD Dual':
return res.json({
 score:'250'
})
break;

case 'Radeon R3':
return res.json({
 score:'249'
})
break;

case 'Radeon HD 7640G + 8750M Dual':
return res.json({
 score:'249'
})
break;

case 'GeForce 610M':
return res.json({
 score:'249'
})
break;

case 'Radeon HD 7560D + HD 7000 Dual':
return res.json({
 score:'249'
})
break;

case 'IncrediblE HD 4600':
return res.json({
 score:'248'
})
break;

case 'GeForce GT 420':
return res.json({
 score:'247'
})
break;

case 'Radeon HD 7500G + 7500M/7600M Dual':
return res.json({
 score:'246'
})
break;

case 'Radeon HD 6530D':
return res.json({
 score:'245'
})
break;

case '7900 MOD - Radeon HD 6520G':
return res.json({
 score:'245'
})
break;

case 'Radeon HD 7640G + 8570M Dual':
return res.json({
 score:'245'
})
break;

case 'Radeon HD 7470':
return res.json({
 score:'244'
})
break;

case 'Intel Skylake HD DT GT2':
return res.json({
 score:'244'
})
break;

case 'Radeon HD 7640G + 7500/7600 Dual':
return res.json({
 score:'243'
})
break;

case 'Intel HD 500':
return res.json({
 score:'243'
})
break;

case 'Radeon HD 8470':
return res.json({
 score:'243'
})
break;

case 'Radeon R5E':
return res.json({
 score:'243'
})
break;

case 'Radeon HD 7540D + HD 6450 Dual':
return res.json({
 score:'241'
})
break;

case 'Radeon HD 8400':
return res.json({
 score:'241'
})
break;

case 'Radeon HD 8550G + 8600M Dual':
return res.json({
 score:'241'
})
break;

case 'GeForce GT 610':
return res.json({
 score:'237'
})
break;

case 'Radeon R5 310':
return res.json({
 score:'237'
})
break;

case 'Radeon HD 8450G':
return res.json({
 score:'236'
})
break;

case 'Radeon R5 235':
return res.json({
 score:'234'
})
break;

case 'Radeon HD 7600G + 7450M Dual':
return res.json({
 score:'234'
})
break;

case 'Radeon HD 7520G + 7600M Dual':
return res.json({
 score:'234'
})
break;

case 'GeForce GT 520M':
return res.json({
 score:'233'
})
break;

case 'Radeon HD 8450G + 8670M Dual':
return res.json({
 score:'232'
})
break;

case 'Radeon HD 7640G + HD 7400M Dual':
return res.json({
 score:'231'
})
break;

case 'Radeon HD 7640G + 7610M Dual':
return res.json({
 score:'231'
})
break;

case 'Radeon HD 7640G + HD 8500M N HD 8500M Dual':
return res.json({
 score:'231'
})
break;

case 'GeForce GT 520':
return res.json({
 score:'230'
})
break;

case 'Radeon HD 7640G + HD 8570M Dual':
return res.json({
 score:'229'
})
break;

case 'Mobility Radeon HD 4250':
return res.json({
 score:'229'
})
break;

case 'Radeon HD 7600G + 6400M Dual':
return res.json({
 score:'228'
})
break;

case 'Radeon HD 8450G + 8750M Dual':
return res.json({
 score:'228'
})
break;

case 'Radeon HD 8450G + 8600M Dual':
return res.json({
 score:'226'
})
break;

case 'Radeon HD 8570D + HD8490 Dual':
return res.json({
 score:'226'
})
break;

case 'Radeon HD 7520G + 7670M Dual':
return res.json({
 score:'224'
})
break;

case 'PHDGD Ivy 5':
return res.json({
 score:'223'
})
break;

case 'Radeon HD 7520G':
return res.json({
 score:'222'
})
break;

case 'Radeon HD 7520G + HD 7400M Dual':
return res.json({
 score:'222'
})
break;

case 'Radeon HD 7640G N HD 7640G + HD 8570M Dual':
return res.json({
 score:'221'
})
break;

case 'Radeon HD 7640G + 6400M Dual':
return res.json({
 score:'221'
})
break;

case 'RADEON HD6530D':
return res.json({
 score:'221'
})
break;

case 'Radeon HD 7640G + 7470M Dual':
return res.json({
 score:'220'
})
break;

case 'Radeon R5 230':
return res.json({
 score:'219'
})
break;

case 'Radeon HD 7640G + 7400M Dual':
return res.json({
 score:'219'
})
break;

case 'Radeon HD 8330E':
return res.json({
 score:'219'
})
break;

case 'Radeon HD 8400E':
return res.json({
 score:'215'
})
break;

case 'Radeon HD 7520G N HD 7520G + HD 7500/7600 7500/760':
return res.json({
 score:'214'
})
break;

case 'GeForce 800A':
return res.json({
 score:'214'
})
break;

case 'Radeon HD 8350G':
return res.json({
 score:'213'
})
break;

case 'GeForce 810M':
return res.json({
 score:'212'
})
break;

case 'Radeon HD 7520G + 7470M Dual':
return res.json({
 score:'211'
})
break;

case 'Radeon HD 7520G + 8750M Dual':
return res.json({
 score:'211'
})
break;

case 'Radeon HD 7520G + HD 8600/8700M Dual':
return res.json({
 score:'211'
})
break;

case 'Radeon HD 8690A':
return res.json({
 score:'210'
})
break;

case 'Radeon HD 6470M':
return res.json({
 score:'208'
})
break;

case 'Radeon HD 8370D':
return res.json({
 score:'208'
})
break;

case 'Radeon HD 6520G':
return res.json({
 score:'208'
})
break;

case 'IncrediblE HD 4000':
return res.json({
 score:'207'
})
break;

case 'Radeon R2':
return res.json({
 score:'207'
})
break;

case 'Radeon HD 7520G + 7610M Dual':
return res.json({
 score:'206'
})
break;

case 'Radeon HD 8330':
return res.json({
 score:'205'
})
break;

case 'Radeon HD 7450':
return res.json({
 score:'204'
})
break;

case 'Intel Media Accelerator HD':
return res.json({
 score:'203'
})
break;

case 'Radeon HD 7620G N HD 7620G + HD 8600M N HD 8600M D':
return res.json({
 score:'201'
})
break;

case 'Radeon HD 7480D':
return res.json({
 score:'200'
})
break;

case 'Radeon HD 7520G N HD 7520G + HD 7600M N HD 7600M D':
return res.json({
 score:'200'
})
break;

case 'Radeon HD 7520G + 7500/7600 Dual':
return res.json({
 score:'200'
})
break;

case 'Radeon HD 7660G + HD 7600M N HD 7600M Dual':
return res.json({
 score:'198'
})
break;

case 'GRID K180Q':
return res.json({
 score:'195'
})
break;

case 'GRID K160Q':
return res.json({
 score:'195'
})
break;

case 'Radeon HD 6450':
return res.json({
 score:'193'
})
break;

case 'Radeon HD 8280E':
return res.json({
 score:'193'
})
break;

case 'Radeon HD 8410G':
return res.json({
 score:'191'
})
break;

case 'Radeon HD 7600G + 7550M Dual':
return res.json({
 score:'190'
})
break;

case 'M880G with Mobility Radeon HD 4250':
return res.json({
 score:'187'
})
break;

case 'Radeon HD 7500G':
return res.json({
 score:'186'
})
break;

case 'Mobility Radeon HD 5000 Serisi':
return res.json({
 score:'183'
})
break;

case 'Radeon HD 7420G':
return res.json({
 score:'181'
})
break;

case 'GeForce GTS 250':
return res.json({
 score:'180'
})
break;

case 'GeForce 605':
return res.json({
 score:'177'
})
break;

case 'Radeon HD 7600G + 7500M/7600M Dual':
return res.json({
 score:'177'
})
break;

case 'Radeon HD 6480G':
return res.json({
 score:'176'
})
break;

case 'IncrediblE HD':
return res.json({
 score:'176'
})
break;

case 'Radeon HD 7520G + 7650M Dual':
return res.json({
 score:'175'
})
break;

case 'GRID K120Q':
return res.json({
 score:'174'
})
break;

case 'Radeon HD 7600G + 8500M/8700M Dual':
return res.json({
 score:'172'
})
break;

case 'HD6450':
return res.json({
 score:'172'
})
break;

case 'Radeon HD 6410D':
return res.json({
 score:'170'
})
break;

case 'GeForce 410M':
return res.json({
 score:'169'
})
break;

case 'SUMO 9644':
return res.json({
 score:'168'
})
break;

case 'RADEON HD6410D':
return res.json({
 score:'166'
})
break;

case 'Radeon HD 7580D':
return res.json({
 score:'166'
})
break;

case 'Radeon HD 7450A':
return res.json({
 score:'165'
})
break;

case 'Radeon E6460':
return res.json({
 score:'164'
})
break;

case 'Radeon HD 8280':
return res.json({
 score:'164'
})
break;

case 'Radeon HD 6450A':
return res.json({
 score:'163'
})
break;

case 'Radeon HD 8310E':
return res.json({
 score:'162'
})
break;

case 'GeForce 510':
return res.json({
 score:'160'
})
break;

case 'Matrox G200eR WDDM 2.0':
return res.json({
 score:'158'
})
break;

case 'Radeon HD 7400G':
return res.json({
 score:'150'
})
break;

case 'Radeon HD 8250':
return res.json({
 score:'149'
})
break;

case 'Radeon HD 7640G + HD 7600M N HD 7600M Dual':
return res.json({
 score:'146'
})
break;

case 'Radeon R2E':
return res.json({
 score:'145'
})
break;

case 'Radeon HD 8280G':
return res.json({
 score:'142'
})
break;

case 'Radeon HD 6370D':
return res.json({
 score:'141'
})
break;

case 'Radeon HD 8240':
return res.json({
 score:'139'
})
break;

case 'Radeon HD 6430M':
return res.json({
 score:'138'
})
break;

case 'Radeon HD 7660D + HD 7400 Dual':
return res.json({
 score:'138'
})
break;

case 'GeForce 800M':
return res.json({
 score:'136'
})
break;

case 'Intel 4th Generation Haswell HD':
return res.json({
 score:'133'
})
break;

case 'Matrox G200eh WDDM 2.0':
return res.json({
 score:'131'
})
break;

case 'PHDGD Ivy 4':
return res.json({
 score:'129'
})
break;

case 'Radeon R5 M435':
return res.json({
 score:'127'
})
break;

case 'RADEON HD6370D':
return res.json({
 score:'126'
})
break;

case 'Intel HD manual-gen9_2015-133271':
return res.json({
 score:'124'
})
break;

case 'Radeon 520':
return res.json({
 score:'124'
})
break;

case 'Radeon RX 640':
return res.json({
 score:'119'
})
break;

case 'Matrox G200eR WDDM 1.2':
return res.json({
 score:'119'
})
break;

case 'A6 Micro-6500T Quad-Core APU with RadeonR4':
return res.json({
 score:'117'
})
break;

case 'GeForce GT 415M':
return res.json({
 score:'111'
})
break;

case '/ Mobility/Radeon HD 5000/5400/5450/R5 220':
return res.json({
 score:'104'
})
break;

case 'Mobility Radeon HD 5470':
return res.json({
 score:'95'
})
break;

case 'Radeon HD 7340':
return res.json({
 score:'93'
})
break;

case 'Radeon R5 M320':
return res.json({
 score:'91'
})
break;

case 'Radeon HD 7340M':
return res.json({
 score:'90'
})
break;

case 'Matrox G200eW WDDM 1.2':
return res.json({
 score:'84'
})
break;

case 'Radeon HD 8350':
return res.json({
 score:'83'
})
break;

case 'Radeon HD 7350':
return res.json({
 score:'80'
})
break;

case 'RADEON HD 6350':
return res.json({
 score:'78'
})
break;

case 'Radeon HD 7340G':
return res.json({
 score:'75'
})
break;

case 'FirePro 2270':
return res.json({
 score:'73'
})
break;

case 'Matrox G200eR':
return res.json({
 score:'69'
})
break;

case 'Radeon HD 6320 Graphic':
return res.json({
 score:'67'
})
break;

case 'Radeon E6465':
return res.json({
 score:'67'
})
break;

case 'Quadro FX 580':
return res.json({
 score:'60'
})
break;

case 'Matrox G200eh':
return res.json({
 score:'60'
})
break;

case 'Radeon HD 6250':
return res.json({
 score:'59'
})
break;

case 'GeForce 8400 GS':
return res.json({
 score:'57'
})
break;

case 'Radeon HD 7310M':
return res.json({
 score:'53'
})
break;

case 'GeForce 9500 GT':
return res.json({
 score:'50'
})
break;

case 'Radeon HD 6290':
return res.json({
 score:'48'
})
break;

case 'Quadro FX 880M':
return res.json({
 score:'41'
})
break;

case 'Red Hat QXL controller':
return res.json({
 score:'34'
})
break;

case 'GeForce 8600 GT':
return res.json({
 score:'30'
})
break;

case 'OpenXT Display Driver':
return res.json({
 score:'21'
})
break;

case 'VIA/S3G C-645/640 GPU':
return res.json({
 score:'21'
})
break;

case 'QXL KMDOD':
return res.json({
 score:'10'
})
break;

case 'ION':
return res.json({
 score:'9'
})
break;




        }
    
})

module.exports = router