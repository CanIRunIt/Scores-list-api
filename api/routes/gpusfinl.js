const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) => {
    res.status(200).json({
        message: "need specific gpu"
    })
})

router.get('/:gpuname', (req,res,next) => {
    const gpu = req.params.gpuname;

    var str = gpu.substring(0, 14);

    if(str == "Quadro GV100".substring(0, 14)){
        return res.json({
         score:'9555'
        })
        }
        
        if(str == "GeForce GTX 1080 Ti".substring(0, 14)){
        return res.json({
         score:'9324'
        })
        }
        
        if(str == "NVIDIA TITAN X".substring(0, 14)){
        return res.json({
         score:'9223'
        })
        }
        
        if(str == "NVIDIA TITAN Xp".substring(0, 14)){
        return res.json({
         score:'9067'
        })
        }
        
        if(str == "TITAN Xp COLLECTORS EDITION".substring(0, 14)){
        return res.json({
         score:'9054'
        })
        }
        
        if(str == "TITAN V".substring(0, 14)){
        return res.json({
         score:'8911'
        })
        }
        
        if(str == "GeForce RTX 2080 Ti".substring(0, 14)){
        return res.json({
         score:'8805'
        })
        }
        
        if(str == "Quadro RTX 6000".substring(0, 14)){
        return res.json({
         score:'8681'
        })
        }
        
        if(str == "TITAN RTX".substring(0, 14)){
        return res.json({
         score:'8579'
        })
        }
        
        if(str == "Quadro P6000".substring(0, 14)){
        return res.json({
         score:'8502'
        })
        }
        
        if(str == "Quadro RTX 8000".substring(0, 14)){
        return res.json({
         score:'8339'
        })
        }
        
        if(str == "Radeon RX 5700 XT".substring(0, 14)){
        return res.json({
         score:'8188'
        })
        }
        
        if(str == "Radeon RX 5700 XT 50th Anniversary".substring(0, 14)){
        return res.json({
         score:'7999'
        })
        }
        
        if(str == "GeForce GTX 1080".substring(0, 14)){
        return res.json({
         score:'7839'
        })
        }
        
        if(str == "GeForce RTX 2080 SUPER".substring(0, 14)){
        return res.json({
         score:'7681'
        })
        }
        
        if(str == "Radeon VII".substring(0, 14)){
        return res.json({
         score:'7654'
        })
        }
        
        if(str == "Radeon Pro Vega II".substring(0, 14)){
        return res.json({
         score:'7597'
        })
        }
        
        if(str == "GeForce RTX 2080".substring(0, 14)){
        return res.json({
         score:'7476'
        })
        }
        
        if(str == "Quadro GP100".substring(0, 14)){
        return res.json({
         score:'7403'
        })
        }
        
        if(str == "GeForce GTX 1070 Ti".substring(0, 14)){
        return res.json({
         score:'7337'
        })
        }
        
        if(str == "Radeon Pro W5700".substring(0, 14)){
        return res.json({
         score:'7263'
        })
        }
        
        if(str == "Quadro RTX 5000".substring(0, 14)){
        return res.json({
         score:'7096'
        })
        }
        
        if(str == "Radeon RX 5700".substring(0, 14)){
        return res.json({
         score:'7060'
        })
        }
        
        if(str == "GeForce RTX 2070 SUPER".substring(0, 14)){
        return res.json({
         score:'7041'
        })
        }
        
        if(str == "GeForce RTX 2080 (Mobile)".substring(0, 14)){
        return res.json({
         score:'7037'
        })
        }
        
        if(str == "Radeon RX Vega 64".substring(0, 14)){
        return res.json({
         score:'7008'
        })
        }
        
        if(str == "Radeon Pro Vega 64".substring(0, 14)){
        return res.json({
         score:'6975'
        })
        }
        
        if(str == "Tesla V100-SXM2-16GB".substring(0, 14)){
        return res.json({
         score:'6602'
        })
        }
        
        if(str == "GeForce RTX 2070".substring(0, 14)){
        return res.json({
         score:'6547'
        })
        }
        
        if(str == "GeForce GTX 1070".substring(0, 14)){
        return res.json({
         score:'6535'
        })
        }
        
        if(str == "Quadro P5000".substring(0, 14)){
        return res.json({
         score:'6508'
        })
        }
        
        if(str == "Radeon Vega Frontier Edition".substring(0, 14)){
        return res.json({
         score:'6488'
        })
        }
        
        if(str == "Radeon RX Vega 56".substring(0, 14)){
        return res.json({
         score:'6461'
        })
        }
        
        if(str == "GeForce RTX 2060 SUPER".substring(0, 14)){
        return res.json({
         score:'6446'
        })
        }
        
        if(str == "Radeon Pro WX 9100".substring(0, 14)){
        return res.json({
         score:'6433'
        })
        }
        
        if(str == "Radeon RX 5600 XT".substring(0, 14)){
        return res.json({
         score:'6355'
        })
        }
        
        if(str == "GeForce GTX 980 Ti".substring(0, 14)){
        return res.json({
         score:'6350'
        })
        }
        
        if(str == "Radeon PRO WX 8200".substring(0, 14)){
        return res.json({
         score:'6343'
        })
        }
        
        if(str == "Quadro P5200".substring(0, 14)){
        return res.json({
         score:'6331'
        })
        }
        
        if(str == "Radeon Pro Vega 56".substring(0, 14)){
        return res.json({
         score:'6186'
        })
        }
        
        if(str == "GeForce GTX TITAN X".substring(0, 14)){
        return res.json({
         score:'6164'
        })
        }
        
        if(str == "GeForce RTX 2080 with Max-Q Design".substring(0, 14)){
        return res.json({
         score:'6144'
        })
        }
        
        if(str == "Quadro RTX 5000 (Mobile)".substring(0, 14)){
        return res.json({
         score:'6067'
        })
        }
        
        if(str == "GeForce RTX 2060".substring(0, 14)){
        return res.json({
         score:'5986'
        })
        }
        
        if(str == "GeForce RTX 2070 (Mobile)".substring(0, 14)){
        return res.json({
         score:'5909'
        })
        }
        
        if(str == "GeForce GTX 1070 (Mobile)".substring(0, 14)){
        return res.json({
         score:'5894'
        })
        }
        
        if(str == "Quadro RTX 4000".substring(0, 14)){
        return res.json({
         score:'5864'
        })
        }
        
        if(str == "GeForce GTX 1080 with Max-Q Design".substring(0, 14)){
        return res.json({
         score:'5847'
        })
        }
        
        if(str == "Radeon Pro Vega 48".substring(0, 14)){
        return res.json({
         score:'5504'
        })
        }
        
        if(str == "Quadro M6000".substring(0, 14)){
        return res.json({
         score:'5386'
        })
        }
        
        if(str == "Quadro P4000".substring(0, 14)){
        return res.json({
         score:'5359'
        })
        }
        
        if(str == "Radeon RX 5500".substring(0, 14)){
        return res.json({
         score:'5346'
        })
        }
        
        if(str == "Quadro P4200".substring(0, 14)){
        return res.json({
         score:'5332'
        })
        }
        
        if(str == "GeForce RTX 2060 (Mobile)".substring(0, 14)){
        return res.json({
         score:'5310'
        })
        }
        
        if(str == "Quadro M6000 24GB".substring(0, 14)){
        return res.json({
         score:'5304'
        })
        }
        
        if(str == "GeForce GTX 1660 Ti".substring(0, 14)){
        return res.json({
         score:'5295'
        })
        }
        
        if(str == "Quadro P3200 with Max-Q Design".substring(0, 14)){
        return res.json({
         score:'5266'
        })
        }
        
        if(str == "GeForce RTX 2070 with Max-Q Design".substring(0, 14)){
        return res.json({
         score:'5237'
        })
        }
        
        if(str == "Radeon Pro Duo".substring(0, 14)){
        return res.json({
         score:'5221'
        })
        }
        
        if(str == "GeForce GTX 1660 Ti (Mobile)".substring(0, 14)){
        return res.json({
         score:'5195'
        })
        }
        
        if(str == "Tesla P100-PCIE-16GB".substring(0, 14)){
        return res.json({
         score:'5171'
        })
        }
        
        if(str == "Radeon Pro W5500".substring(0, 14)){
        return res.json({
         score:'5168'
        })
        }
        
        if(str == "GeForce GTX 980".substring(0, 14)){
        return res.json({
         score:'5158'
        })
        }
        
        if(str == "GeForce GTX 1660 SUPER".substring(0, 14)){
        return res.json({
         score:'5096'
        })
        }
        
        if(str == "Quadro P4200 with Max-Q Design".substring(0, 14)){
        return res.json({
         score:'5082'
        })
        }
        
        if(str == "Radeon RX 5500 XT".substring(0, 14)){
        return res.json({
         score:'5056'
        })
        }
        
        if(str == "Radeon R9 Fury".substring(0, 14)){
        return res.json({
         score:'5031'
        })
        }
        
        if(str == "GeForce GTX 1660".substring(0, 14)){
        return res.json({
         score:'5027'
        })
        }
        
        if(str == "GeForce GTX 1060".substring(0, 14)){
        return res.json({
         score:'4991'
        })
        }
        
        if(str == "Radeon R9 Fury + Fury X".substring(0, 14)){
        return res.json({
         score:'4977'
        })
        }
        
        if(str == "Radeon RX 590".substring(0, 14)){
        return res.json({
         score:'4853'
        })
        }
        
        if(str == "GeForce GTX 1070 with Max-Q Design".substring(0, 14)){
        return res.json({
         score:'4778'
        })
        }
        
        if(str == "GeForce GTX 1650 SUPER".substring(0, 14)){
        return res.json({
         score:'4711'
        })
        }
        
        if(str == "Quadro P5200 with Max-Q Design".substring(0, 14)){
        return res.json({
         score:'4709'
        })
        }
        
        if(str == "GeForce GTX 780 Ti".substring(0, 14)){
        return res.json({
         score:'4702'
        })
        }
        
        if(str == "Quadro RTX 3000".substring(0, 14)){
        return res.json({
         score:'4662'
        })
        }
        
        if(str == "GeForce GTX 1060 3GB".substring(0, 14)){
        return res.json({
         score:'4632'
        })
        }
        
        if(str == "Quadro P3200".substring(0, 14)){
        return res.json({
         score:'4614'
        })
        }
        
        if(str == "Quadro P2200".substring(0, 14)){
        return res.json({
         score:'4476'
        })
        }
        
        if(str == "GeForce GTX TITAN Black".substring(0, 14)){
        return res.json({
         score:'4458'
        })
        }
        
        if(str == "GeForce GTX 970".substring(0, 14)){
        return res.json({
         score:'4426'
        })
        }
        
        if(str == "Radeon Pro SSG".substring(0, 14)){
        return res.json({
         score:'4404'
        })
        }
        
        if(str == "Radeon RX 480".substring(0, 14)){
        return res.json({
         score:'4381'
        })
        }
        
        if(str == "GeForce GTX 1060 (Mobile)".substring(0, 14)){
        return res.json({
         score:'4369'
        })
        }
        
        if(str == "Radeon RX 580".substring(0, 14)){
        return res.json({
         score:'4339'
        })
        }
        
        if(str == "Radeon R9 390X".substring(0, 14)){
        return res.json({
         score:'4239'
        })
        }
        
        if(str == "Quadro M5000".substring(0, 14)){
        return res.json({
         score:'4167'
        })
        }
        
        if(str == "Radeon Pro 580".substring(0, 14)){
        return res.json({
         score:'4161'
        })
        }
        
        if(str == "GeForce GTX Titan".substring(0, 14)){
        return res.json({
         score:'4127'
        })
        }
        
        if(str == "GeForce GTX 1650 (Mobile)".substring(0, 14)){
        return res.json({
         score:'4114'
        })
        }
        
        if(str == "Intel Iris Plus 645".substring(0, 14)){
        return res.json({
         score:'4087'
        })
        }
        
        if(str == "Radeon Pro 5500M".substring(0, 14)){
        return res.json({
         score:'4066'
        })
        }
        
        if(str == "Radeon Pro WX 7100".substring(0, 14)){
        return res.json({
         score:'4062'
        })
        }
        
        if(str == "Radeon R9 390".substring(0, 14)){
        return res.json({
         score:'3985'
        })
        }
        
        if(str == "GeForce GTX 780".substring(0, 14)){
        return res.json({
         score:'3983'
        })
        }
        
        if(str == "Quadro K6000".substring(0, 14)){
        return res.json({
         score:'3921'
        })
        }
        
        if(str == "GeForce GTX 1060 with Max-Q Design".substring(0, 14)){
        return res.json({
         score:'3911'
        })
        }
        
        if(str == "Radeon RX 470".substring(0, 14)){
        return res.json({
         score:'3852'
        })
        }
        
        if(str == "Quadro M5500".substring(0, 14)){
        return res.json({
         score:'3847'
        })
        }
        
        if(str == "Radeon RX 580 2048SP".substring(0, 14)){
        return res.json({
         score:'3810'
        })
        }
        
        if(str == "Radeon Pro 580X".substring(0, 14)){
        return res.json({
         score:'3805'
        })
        }
        
        if(str == "GeForce GTX 1650".substring(0, 14)){
        return res.json({
         score:'3765'
        })
        }
        
        if(str == "Radeon RX 580X".substring(0, 14)){
        return res.json({
         score:'3759'
        })
        }
        
        if(str == "Quadro T2000".substring(0, 14)){
        return res.json({
         score:'3736'
        })
        }
        
        if(str == "Quadro P2000".substring(0, 14)){
        return res.json({
         score:'3672'
        })
        }
        
        if(str == "Radeon R9 280X".substring(0, 14)){
        return res.json({
         score:'3614'
        })
        }
        
        if(str == "Radeon R9 290X / 390X".substring(0, 14)){
        return res.json({
         score:'3604'
        })
        }
        
        if(str == "Radeon R9 295X2".substring(0, 14)){
        return res.json({
         score:'3579'
        })
        }
        
        if(str == "GeForce GTX 980M".substring(0, 14)){
        return res.json({
         score:'3484'
        })
        }
        
        if(str == "Radeon Pro 5300M".substring(0, 14)){
        return res.json({
         score:'3451'
        })
        }
        
        if(str == "Tesla M60".substring(0, 14)){
        return res.json({
         score:'3427'
        })
        }
        
        if(str == "GeForce GTX TITAN Z".substring(0, 14)){
        return res.json({
         score:'3418'
        })
        }
        
        if(str == "Quadro M5000M".substring(0, 14)){
        return res.json({
         score:'3397'
        })
        }
        
        if(str == "GeForce GTX 1050 Ti with Max-Q Design".substring(0, 14)){
        return res.json({
         score:'3374'
        })
        }
        
        if(str == "Radeon RX Vega M GH".substring(0, 14)){
        return res.json({
         score:'3356'
        })
        }
        
        if(str == "GeForce GTX 1050 Ti (Mobile)".substring(0, 14)){
        return res.json({
         score:'3342'
        })
        }
        
        if(str == "Radeon RX 570".substring(0, 14)){
        return res.json({
         score:'3341'
        })
        }
        
        if(str == "Radeon R9 290 / 390".substring(0, 14)){
        return res.json({
         score:'3333'
        })
        }
        
        if(str == "FirePro W9000".substring(0, 14)){
        return res.json({
         score:'3284'
        })
        }
        
        if(str == "Radeon Instinct MI25 MxGPU".substring(0, 14)){
        return res.json({
         score:'3281'
        })
        }
        
        if(str == "Q12U-1".substring(0, 14)){
        return res.json({
         score:'3274'
        })
        }
        
        if(str == "Quadro T1000".substring(0, 14)){
        return res.json({
         score:'3273'
        })
        }
        
        if(str == "Quadro P3000".substring(0, 14)){
        return res.json({
         score:'3267'
        })
        }
        
        if(str == "GeForce GTX 1050 Ti".substring(0, 14)){
        return res.json({
         score:'3239'
        })
        }
        
        if(str == "Radeon R9 280".substring(0, 14)){
        return res.json({
         score:'3177'
        })
        }
        
        if(str == "Radeon HD 7970 / R9 280X".substring(0, 14)){
        return res.json({
         score:'3167'
        })
        }
        
        if(str == "GeForce GTX 770".substring(0, 14)){
        return res.json({
         score:'3148'
        })
        }
        
        if(str == "GeForce GTX 1060 5GB".substring(0, 14)){
        return res.json({
         score:'3130'
        })
        }
        
        if(str == "Radeon R9 380X".substring(0, 14)){
        return res.json({
         score:'3128'
        })
        }
        
        if(str == "GeForce GTX 960".substring(0, 14)){
        return res.json({
         score:'3118'
        })
        }
        
        if(str == "FirePro W8100 Graphic Adapter".substring(0, 14)){
        return res.json({
         score:'3099'
        })
        }
        
        if(str == "GeForce GTX 1050 with Max-Q Design".substring(0, 14)){
        return res.json({
         score:'3097'
        })
        }
        
        if(str == "Radeon Pro WX4100".substring(0, 14)){
        return res.json({
         score:'3083'
        })
        }
        
        if(str == "Quadro P2000 with Max-Q Design".substring(0, 14)){
        return res.json({
         score:'3053'
        })
        }
        
        if(str == "FirePro W9100".substring(0, 14)){
        return res.json({
         score:'3050'
        })
        }
        
        if(str == "Radeon Pro Vega 20".substring(0, 14)){
        return res.json({
         score:'3034'
        })
        }
        
        if(str == "Radeon Pro 570".substring(0, 14)){
        return res.json({
         score:'3012'
        })
        }
        
        if(str == "Radeon R9 380".substring(0, 14)){
        return res.json({
         score:'3008'
        })
        }
        
        if(str == "GeForce GTX 680".substring(0, 14)){
        return res.json({
         score:'2974'
        })
        }
        
        if(str == "GeForce GTX 760 Ti OEM".substring(0, 14)){
        return res.json({
         score:'2943'
        })
        }
        
        if(str == "Radeon HD 7990".substring(0, 14)){
        return res.json({
         score:'2939'
        })
        }
        
        if(str == "Radeon Pro WX 5100".substring(0, 14)){
        return res.json({
         score:'2912'
        })
        }
        
        if(str == "GRID M60-2B".substring(0, 14)){
        return res.json({
         score:'2873'
        })
        }
        
        if(str == "Quadro K5200".substring(0, 14)){
        return res.json({
         score:'2870'
        })
        }
        
        if(str == "FirePro W8000".substring(0, 14)){
        return res.json({
         score:'2855'
        })
        }
        
        if(str == "GeForce GTX 1050".substring(0, 14)){
        return res.json({
         score:'2838'
        })
        }
        
        if(str == "Radeon HD 8990".substring(0, 14)){
        return res.json({
         score:'2836'
        })
        }
        
        if(str == "GeForce GTX 970M".substring(0, 14)){
        return res.json({
         score:'2826'
        })
        }
        
        if(str == "Radeon Sky 500".substring(0, 14)){
        return res.json({
         score:'2809'
        })
        }
        
        if(str == "GeForce GTX 1050 (Mobile)".substring(0, 14)){
        return res.json({
         score:'2800'
        })
        }
        
        if(str == "EIZO Quadro MED-XN51LP".substring(0, 14)){
        return res.json({
         score:'2799'
        })
        }
        
        if(str == "FirePro W7100 Adapter".substring(0, 14)){
        return res.json({
         score:'2787'
        })
        }
        
        if(str == "Quadro M4000".substring(0, 14)){
        return res.json({
         score:'2747'
        })
        }
        
        if(str == "Radeon HD 7950 / R9 280".substring(0, 14)){
        return res.json({
         score:'2725'
        })
        }
        
        if(str == "FirePro W8100".substring(0, 14)){
        return res.json({
         score:'2717'
        })
        }
        
        if(str == "Quadro M4000M".substring(0, 14)){
        return res.json({
         score:'2694'
        })
        }
        
        if(str == "GeForce GTX 760 Ti".substring(0, 14)){
        return res.json({
         score:'2693'
        })
        }
        
        if(str == "FirePro W8000 Adapter".substring(0, 14)){
        return res.json({
         score:'2686'
        })
        }
        
        if(str == "Barco MXRT 7600".substring(0, 14)){
        return res.json({
         score:'2672'
        })
        }
        
        if(str == "Radeon RX Vega M GL".substring(0, 14)){
        return res.json({
         score:'2665'
        })
        }
        
        if(str == "Radeon RX 560X".substring(0, 14)){
        return res.json({
         score:'2659'
        })
        }
        
        if(str == "Radeon R7 370".substring(0, 14)){
        return res.json({
         score:'2636'
        })
        }
        
        if(str == "GeForce GTX 670".substring(0, 14)){
        return res.json({
         score:'2624'
        })
        }
        
        if(str == "FirePro W7100".substring(0, 14)){
        return res.json({
         score:'2600'
        })
        }
        
        if(str == "Radeon R9 M395X".substring(0, 14)){
        return res.json({
         score:'2599'
        })
        }
        
        if(str == "Radeon Pro 570X".substring(0, 14)){
        return res.json({
         score:'2595'
        })
        }
        
        if(str == "Radeon R9 270X".substring(0, 14)){
        return res.json({
         score:'2592'
        })
        }
        
        if(str == "GeForce GTX 660 Ti".substring(0, 14)){
        return res.json({
         score:'2590'
        })
        }
        
        if(str == "Radeon Pro 465".substring(0, 14)){
        return res.json({
         score:'2567'
        })
        }
        
        if(str == "GeForce GTX 950".substring(0, 14)){
        return res.json({
         score:'2555'
        })
        }
        
        if(str == "Radeon Pro Vega 16".substring(0, 14)){
        return res.json({
         score:'2547'
        })
        }
        
        if(str == "GeForce GTX 690".substring(0, 14)){
        return res.json({
         score:'2523'
        })
        }
        
        if(str == "Radeon Pro WX 4100".substring(0, 14)){
        return res.json({
         score:'2519'
        })
        }
        
        if(str == "FirePro S9000".substring(0, 14)){
        return res.json({
         score:'2517'
        })
        }
        
        if(str == "GRID M60-8A".substring(0, 14)){
        return res.json({
         score:'2508'
        })
        }
        
        if(str == "Radeon HD 7870 XT".substring(0, 14)){
        return res.json({
         score:'2502'
        })
        }
        
        if(str == "Quadro P1000".substring(0, 14)){
        return res.json({
         score:'2490'
        })
        }
        
        if(str == "Radeon R9 M390X".substring(0, 14)){
        return res.json({
         score:'2483'
        })
        }
        
        if(str == "Radeon RX 460".substring(0, 14)){
        return res.json({
         score:'2472'
        })
        }
        
        if(str == "Barco MXRT 7500".substring(0, 14)){
        return res.json({
         score:'2450'
        })
        }
        
        if(str == "Radeon R9 285 / 380".substring(0, 14)){
        return res.json({
         score:'2446'
        })
        }
        
        if(str == "Quadro M3000M".substring(0, 14)){
        return res.json({
         score:'2445'
        })
        }
        
        if(str == "FirePro W7000".substring(0, 14)){
        return res.json({
         score:'2432'
        })
        }
        
        if(str == "GeForce GTX 760".substring(0, 14)){
        return res.json({
         score:'2431'
        })
        }
        
        if(str == "Radeon HD 7870".substring(0, 14)){
        return res.json({
         score:'2421'
        })
        }
        
        if(str == "Radeon RX 560".substring(0, 14)){
        return res.json({
         score:'2411'
        })
        }
        
        if(str == "GRID P6-4Q".substring(0, 14)){
        return res.json({
         score:'2408'
        })
        }
        
        if(str == "GeForce GTX 880M".substring(0, 14)){
        return res.json({
         score:'2405'
        })
        }
        
        if(str == "GRID K2".substring(0, 14)){
        return res.json({
         score:'2399'
        })
        }
        
        if(str == "FirePro W7170M".substring(0, 14)){
        return res.json({
         score:'2387'
        })
        }
        
        if(str == "GeForce GTX 680M KY_Bullet Edition".substring(0, 14)){
        return res.json({
         score:'2380'
        })
        }
        
        if(str == "Radeon Pro WX 4150".substring(0, 14)){
        return res.json({
         score:'2374'
        })
        }
        
        if(str == "FirePro M6100 FireGL V".substring(0, 14)){
        return res.json({
         score:'2354'
        })
        }
        
        if(str == "Radeon R9 M290X".substring(0, 14)){
        return res.json({
         score:'2327'
        })
        }
        
        if(str == "Radeon R9 M470X".substring(0, 14)){
        return res.json({
         score:'2314'
        })
        }
        
        if(str == "Quadro M2200".substring(0, 14)){
        return res.json({
         score:'2311'
        })
        }
        
        if(str == "Quadro M2000".substring(0, 14)){
        return res.json({
         score:'2305'
        })
        }
        
        if(str == "FirePro W7000 Adapter".substring(0, 14)){
        return res.json({
         score:'2296'
        })
        }
        
        if(str == "Radeon R9 M395".substring(0, 14)){
        return res.json({
         score:'2296'
        })
        }
        
        if(str == "GeForce GTX 780M".substring(0, 14)){
        return res.json({
         score:'2258'
        })
        }
        
        if(str == "Radeon R9 270 / R7 370".substring(0, 14)){
        return res.json({
         score:'2228'
        })
        }
        
        if(str == "FirePro S7000".substring(0, 14)){
        return res.json({
         score:'2223'
        })
        }
        
        if(str == "RadeonT R7 450".substring(0, 14)){
        return res.json({
         score:'2214'
        })
        }
        
        if(str == "Radeon R9 370".substring(0, 14)){
        return res.json({
         score:'2205'
        })
        }
        
        if(str == "GeForce GTX 965M".substring(0, 14)){
        return res.json({
         score:'2131'
        })
        }
        
        if(str == "GeForce GTX 870M".substring(0, 14)){
        return res.json({
         score:'2124'
        })
        }
        
        if(str == "NVS 315".substring(0, 14)){
        return res.json({
         score:'2116'
        })
        }
        
        if(str == "GeForce GTX 775M".substring(0, 14)){
        return res.json({
         score:'2089'
        })
        }
        
        if(str == "Quadro P620".substring(0, 14)){
        return res.json({
         score:'2087'
        })
        }
        
        if(str == "Quadro K4200".substring(0, 14)){
        return res.json({
         score:'2082'
        })
        }
        
        if(str == "Quadro K5100M".substring(0, 14)){
        return res.json({
         score:'2072'
        })
        }
        
        if(str == "Radeon R9 M295X".substring(0, 14)){
        return res.json({
         score:'2057'
        })
        }
        
        if(str == "Radeon RX Vega 11".substring(0, 14)){
        return res.json({
         score:'2033'
        })
        }
        
        if(str == "Radeon HD8970M".substring(0, 14)){
        return res.json({
         score:'2031'
        })
        }
        
        if(str == "GeForce GTX 660".substring(0, 14)){
        return res.json({
         score:'2014'
        })
        }
        
        if(str == "GeForce GTX 960A".substring(0, 14)){
        return res.json({
         score:'2014'
        })
        }
        
        if(str == "Radeon RX Vega 11 PRD".substring(0, 14)){
        return res.json({
         score:'2012'
        })
        }
        
        if(str == "Radeon HD 7970M".substring(0, 14)){
        return res.json({
         score:'1994'
        })
        }
        
        if(str == "Radeon Pro WX 3100".substring(0, 14)){
        return res.json({
         score:'1977'
        })
        }
        
        if(str == "GeForce GTX 680MX".substring(0, 14)){
        return res.json({
         score:'1969'
        })
        }
        
        if(str == "GRID K520".substring(0, 14)){
        return res.json({
         score:'1939'
        })
        }
        
        if(str == "Quadro K5000".substring(0, 14)){
        return res.json({
         score:'1934'
        })
        }
        
        if(str == "Quadro K2200M".substring(0, 14)){
        return res.json({
         score:'1934'
        })
        }
        
        if(str == "GeForce GTX 750 Ti".substring(0, 14)){
        return res.json({
         score:'1920'
        })
        }
        
        if(str == "Radeon HD 7850".substring(0, 14)){
        return res.json({
         score:'1916'
        })
        }
        
        if(str == "GeForce GTX 580".substring(0, 14)){
        return res.json({
         score:'1896'
        })
        }
        
        if(str == "Radeon HD 8970M".substring(0, 14)){
        return res.json({
         score:'1891'
        })
        }
        
        if(str == "FirePro V7000 Adapter".substring(0, 14)){
        return res.json({
         score:'1888'
        })
        }
        
        if(str == "GeForce GTX 675MX".substring(0, 14)){
        return res.json({
         score:'1876'
        })
        }
        
        if(str == "Quadro P600".substring(0, 14)){
        return res.json({
         score:'1856'
        })
        }
        
        if(str == "Radeon Pro 560X".substring(0, 14)){
        return res.json({
         score:'1851'
        })
        }
        
        if(str == "Radeon R7 360".substring(0, 14)){
        return res.json({
         score:'1849'
        })
        }
        
        if(str == "Quadro M2000M".substring(0, 14)){
        return res.json({
         score:'1840'
        })
        }
        
        if(str == "Radeon Pro WX 4130".substring(0, 14)){
        return res.json({
         score:'1825'
        })
        }
        
        if(str == "Radeon Pro 460".substring(0, 14)){
        return res.json({
         score:'1816'
        })
        }
        
        if(str == "Radeon HD 8950".substring(0, 14)){
        return res.json({
         score:'1809'
        })
        }
        
        if(str == "Radeon HD 7800-serie".substring(0, 14)){
        return res.json({
         score:'1795'
        })
        }
        
        if(str == "Quadro K2200".substring(0, 14)){
        return res.json({
         score:'1786'
        })
        }
        
        if(str == "GeForce GTX 680M".substring(0, 14)){
        return res.json({
         score:'1782'
        })
        }
        
        if(str == "FirePro W4300".substring(0, 14)){
        return res.json({
         score:'1780'
        })
        }
        
        if(str == "Radeon R7 260X".substring(0, 14)){
        return res.json({
         score:'1780'
        })
        }
        
        if(str == "Radeon Pro 560".substring(0, 14)){
        return res.json({
         score:'1776'
        })
        }
        
        if(str == "Radeon R9 M380".substring(0, 14)){
        return res.json({
         score:'1767'
        })
        }
        
        if(str == "FirePro W5100".substring(0, 14)){
        return res.json({
         score:'1756'
        })
        }
        
        if(str == "Radeon R9 260".substring(0, 14)){
        return res.json({
         score:'1726'
        })
        }
        
        if(str == "Radeon RX 550".substring(0, 14)){
        return res.json({
         score:'1718'
        })
        }
        
        if(str == "Radeon E8870PCIe".substring(0, 14)){
        return res.json({
         score:'1707'
        })
        }
        
        if(str == "GeForce GT 1030".substring(0, 14)){
        return res.json({
         score:'1706'
        })
        }
        
        if(str == "Quadro M1200".substring(0, 14)){
        return res.json({
         score:'1703'
        })
        }
        
        if(str == "GeForce GTX 570".substring(0, 14)){
        return res.json({
         score:'1693'
        })
        }
        
        if(str == "Matrox C680 PCIe x16".substring(0, 14)){
        return res.json({
         score:'1693'
        })
        }
        
        if(str == "GeForce GTX 650 Ti BOOST".substring(0, 14)){
        return res.json({
         score:'1691'
        })
        }
        
        if(str == "Radeon HD 7790".substring(0, 14)){
        return res.json({
         score:'1681'
        })
        }
        
        if(str == "GRID K220Q".substring(0, 14)){
        return res.json({
         score:'1677'
        })
        }
        
        if(str == "FirePro M6100".substring(0, 14)){
        return res.json({
         score:'1649'
        })
        }
        
        if(str == "FirePro M5100".substring(0, 14)){
        return res.json({
         score:'1643'
        })
        }
        
        if(str == "GRID P4-2Q".substring(0, 14)){
        return res.json({
         score:'1618'
        })
        }
        
        if(str == "FirePro V9800 Adapter".substring(0, 14)){
        return res.json({
         score:'1617'
        })
        }
        
        if(str == "Quadro M620".substring(0, 14)){
        return res.json({
         score:'1598'
        })
        }
        
        if(str == "GeForce GTX 480".substring(0, 14)){
        return res.json({
         score:'1590'
        })
        }
        
        if(str == "GeForce GTX 750".substring(0, 14)){
        return res.json({
         score:'1575'
        })
        }
        
        if(str == "Radeon R9 M375X".substring(0, 14)){
        return res.json({
         score:'1574'
        })
        }
        
        if(str == "Quadro K4100M".substring(0, 14)){
        return res.json({
         score:'1574'
        })
        }
        
        if(str == "Radeon Pro WX 2100".substring(0, 14)){
        return res.json({
         score:'1553'
        })
        }
        
        if(str == "Radeon R7 450".substring(0, 14)){
        return res.json({
         score:'1546'
        })
        }
        
        if(str == "Quadro M1000M".substring(0, 14)){
        return res.json({
         score:'1543'
        })
        }
        
        if(str == "Radeon Vega 11".substring(0, 14)){
        return res.json({
         score:'1541'
        })
        }
        
        if(str == "GeForce GTX 770M".substring(0, 14)){
        return res.json({
         score:'1541'
        })
        }
        
        if(str == "MxGPU".substring(0, 14)){
        return res.json({
         score:'1541'
        })
        }
        
        if(str == "Quadro K1200".substring(0, 14)){
        return res.json({
         score:'1538'
        })
        }
        
        if(str == "Quadro 7000".substring(0, 14)){
        return res.json({
         score:'1537'
        })
        }
        
        if(str == "GeForce GTX 860M".substring(0, 14)){
        return res.json({
         score:'1519'
        })
        }
        
        if(str == "FirePro W5000".substring(0, 14)){
        return res.json({
         score:'1502'
        })
        }
        
        if(str == "Firepro W5170M".substring(0, 14)){
        return res.json({
         score:'1494'
        })
        }
        
        if(str == "GeForce GTX 560 Ti".substring(0, 14)){
        return res.json({
         score:'1478'
        })
        }
        
        if(str == "Intel Iris Pro P580".substring(0, 14)){
        return res.json({
         score:'1475'
        })
        }
        
        if(str == "B8DKMDAP".substring(0, 14)){
        return res.json({
         score:'1471'
        })
        }
        
        if(str == "GeForce 8800 GTX".substring(0, 14)){
        return res.json({
         score:'1470'
        })
        }
        
        if(str == "GeForce GTX 650 Ti".substring(0, 14)){
        return res.json({
         score:'1464'
        })
        }
        
        if(str == "Radeon HD 7770".substring(0, 14)){
        return res.json({
         score:'1463'
        })
        }
        
        if(str == "Radeon RX 540".substring(0, 14)){
        return res.json({
         score:'1439'
        })
        }
        
        if(str == "Radeon HD 5870".substring(0, 14)){
        return res.json({
         score:'1438'
        })
        }
        
        if(str == "Tesla C2070".substring(0, 14)){
        return res.json({
         score:'1436'
        })
        }
        
        if(str == "GeForce GTX 960M".substring(0, 14)){
        return res.json({
         score:'1435'
        })
        }
        
        if(str == "Radeon R9 M370X".substring(0, 14)){
        return res.json({
         score:'1434'
        })
        }
        
        if(str == "Radeon R9 M360".substring(0, 14)){
        return res.json({
         score:'1429'
        })
        }
        
        if(str == "FirePro 3D V8800".substring(0, 14)){
        return res.json({
         score:'1427'
        })
        }
        
        if(str == "Radeon HD 6970".substring(0, 14)){
        return res.json({
         score:'1423'
        })
        }
        
        if(str == "Radeon Pro 455".substring(0, 14)){
        return res.json({
         score:'1417'
        })
        }
        
        if(str == "Quadro K5000M".substring(0, 14)){
        return res.json({
         score:'1403'
        })
        }
        
        if(str == "GeForce 8800 GTS 512".substring(0, 14)){
        return res.json({
         score:'1398'
        })
        }
        
        if(str == "Intel Iris Plus 655".substring(0, 14)){
        return res.json({
         score:'1389'
        })
        }
        
        if(str == "GeForce GTX 590".substring(0, 14)){
        return res.json({
         score:'1384'
        })
        }
        
        if(str == "Radeon Pro 555".substring(0, 14)){
        return res.json({
         score:'1382'
        })
        }
        
        if(str == "FirePro 3D V9800".substring(0, 14)){
        return res.json({
         score:'1375'
        })
        }
        
        if(str == "Radeon R9 350".substring(0, 14)){
        return res.json({
         score:'1372'
        })
        }
        
        if(str == "Tesla C2050".substring(0, 14)){
        return res.json({
         score:'1372'
        })
        }
        
        if(str == "Radeon R9 M275X / M375".substring(0, 14)){
        return res.json({
         score:'1369'
        })
        }
        
        if(str == "Radeon R7 260".substring(0, 14)){
        return res.json({
         score:'1361'
        })
        }
        
        if(str == "GeForce GTX 470".substring(0, 14)){
        return res.json({
         score:'1359'
        })
        }
        
        if(str == "GRID P40-24Q".substring(0, 14)){
        return res.json({
         score:'1353'
        })
        }
        
        if(str == "Tesla C2050 / C2070".substring(0, 14)){
        return res.json({
         score:'1351'
        })
        }
        
        if(str == "Radeon R7 PRO A12-9800".substring(0, 14)){
        return res.json({
         score:'1329'
        })
        }
        
        if(str == "Radeon Vega 8".substring(0, 14)){
        return res.json({
         score:'1329'
        })
        }
        
        if(str == "Radeon R9 360".substring(0, 14)){
        return res.json({
         score:'1329'
        })
        }
        
        if(str == "Tesla C2075".substring(0, 14)){
        return res.json({
         score:'1326'
        })
        }
        
        if(str == "Quadro K4000".substring(0, 14)){
        return res.json({
         score:'1316'
        })
        }
        
        if(str == "Intel Iris Pro 580".substring(0, 14)){
        return res.json({
         score:'1311'
        })
        }
        
        if(str == "GeForce GTX 765M".substring(0, 14)){
        return res.json({
         score:'1307'
        })
        }
        
        if(str == "Intel Iris Plus".substring(0, 14)){
        return res.json({
         score:'1305'
        })
        }
        
        if(str == "NVS 810".substring(0, 14)){
        return res.json({
         score:'1303'
        })
        }
        
        if(str == "Matrox C900 PCIe x16".substring(0, 14)){
        return res.json({
         score:'1301'
        })
        }
        
        if(str == "GeForce GTX 850M".substring(0, 14)){
        return res.json({
         score:'1301'
        })
        }
        
        if(str == "FirePro W4100 Adapter".substring(0, 14)){
        return res.json({
         score:'1296'
        })
        }
        
        if(str == "Radeon HD 7700-serie".substring(0, 14)){
        return res.json({
         score:'1295'
        })
        }
        
        if(str == "Radeon R7 PRO A12-8870".substring(0, 14)){
        return res.json({
         score:'1293'
        })
        }
        
        if(str == "GeForce GTX 950M".substring(0, 14)){
        return res.json({
         score:'1287'
        })
        }
        
        if(str == "Radeon HD 6950".substring(0, 14)){
        return res.json({
         score:'1284'
        })
        }
        
        if(str == "GeForce GT 645".substring(0, 14)){
        return res.json({
         score:'1273'
        })
        }
        
        if(str == "GeForce GTX 560".substring(0, 14)){
        return res.json({
         score:'1271'
        })
        }
        
        if(str == "Intel Iris Plus 650".substring(0, 14)){
        return res.json({
         score:'1266'
        })
        }
        
        if(str == "RadeonT R5 430".substring(0, 14)){
        return res.json({
         score:'1258'
        })
        }
        
        if(str == "Quadro 6000".substring(0, 14)){
        return res.json({
         score:'1256'
        })
        }
        
        if(str == "Radeon HD 6990".substring(0, 14)){
        return res.json({
         score:'1255'
        })
        }
        
        if(str == "Radeon R9 255".substring(0, 14)){
        return res.json({
         score:'1254'
        })
        }
        
        if(str == "Intel Coffee Lake UHD".substring(0, 14)){
        return res.json({
         score:'1246'
        })
        }
        
        if(str == "GeForce MX150".substring(0, 14)){
        return res.json({
         score:'1246'
        })
        }
        
        if(str == "Radeon RX Vega11".substring(0, 14)){
        return res.json({
         score:'1245'
        })
        }
        
        if(str == "Radeon Vega 9".substring(0, 14)){
        return res.json({
         score:'1243'
        })
        }
        
        if(str == "GeForce GTX 460 v2".substring(0, 14)){
        return res.json({
         score:'1242'
        })
        }
        
        if(str == "Radeon HD 5970".substring(0, 14)){
        return res.json({
         score:'1231'
        })
        }
        
        if(str == "FirePro M4000 Mobility Pro".substring(0, 14)){
        return res.json({
         score:'1229'
        })
        }
        
        if(str == "Radeon RX Vega 10".substring(0, 14)){
        return res.json({
         score:'1224'
        })
        }
        
        if(str == "Radeon Pro 450".substring(0, 14)){
        return res.json({
         score:'1212'
        })
        }
        
        if(str == "Quadro K3100M".substring(0, 14)){
        return res.json({
         score:'1204'
        })
        }
        
        if(str == "Radeon TM R9 A360".substring(0, 14)){
        return res.json({
         score:'1202'
        })
        }
        
        if(str == "Quadro K620".substring(0, 14)){
        return res.json({
         score:'1197'
        })
        }
        
        if(str == "FirePro W600".substring(0, 14)){
        return res.json({
         score:'1195'
        })
        }
        
        if(str == "Radeon RX Vega 8".substring(0, 14)){
        return res.json({
         score:'1193'
        })
        }
        
        if(str == "Radeon R7 FX-9830P RADEON".substring(0, 14)){
        return res.json({
         score:'1187'
        })
        }
        
        if(str == "FirePro W4100".substring(0, 14)){
        return res.json({
         score:'1187'
        })
        }
        
        if(str == "Radeon R7 A12-9800 RADEON".substring(0, 14)){
        return res.json({
         score:'1187'
        })
        }
        
        if(str == "Radeon HD 5850".substring(0, 14)){
        return res.json({
         score:'1183'
        })
        }
        
        if(str == "FirePro M6000 Mobility Pro".substring(0, 14)){
        return res.json({
         score:'1183'
        })
        }
        
        if(str == "Radeon HD 6870".substring(0, 14)){
        return res.json({
         score:'1180'
        })
        }
        
        if(str == "Quadro P400".substring(0, 14)){
        return res.json({
         score:'1172'
        })
        }
        
        if(str == "Quadro K4000M".substring(0, 14)){
        return res.json({
         score:'1170'
        })
        }
        
        if(str == "Quadro M600M".substring(0, 14)){
        return res.json({
         score:'1170'
        })
        }
        
        if(str == "Radeon Vega 10".substring(0, 14)){
        return res.json({
         score:'1158'
        })
        }
        
        if(str == "Intel Iris Pro Graphics 6200".substring(0, 14)){
        return res.json({
         score:'1154'
        })
        }
        
        if(str == "GeForce GTX 745".substring(0, 14)){
        return res.json({
         score:'1153'
        })
        }
        
        if(str == "GRID P40-2Q".substring(0, 14)){
        return res.json({
         score:'1147'
        })
        }
        
        if(str == "Intel HD P630".substring(0, 14)){
        return res.json({
         score:'1134'
        })
        }
        
        if(str == "GeForce GTX 670MX".substring(0, 14)){
        return res.json({
         score:'1134'
        })
        }
        
        if(str == "Radeon Vega 10 Mobile".substring(0, 14)){
        return res.json({
         score:'1131'
        })
        }
        
        if(str == "GeForce GTX 465".substring(0, 14)){
        return res.json({
         score:'1124'
        })
        }
        
        if(str == "Radeon R7 PRO A10-8770".substring(0, 14)){
        return res.json({
         score:'1123'
        })
        }
        
        if(str == "GeForce GTX 460".substring(0, 14)){
        return res.json({
         score:'1119'
        })
        }
        
        if(str == "Radeon E8860".substring(0, 14)){
        return res.json({
         score:'1115'
        })
        }
        
        if(str == "GRID P40-3Q".substring(0, 14)){
        return res.json({
         score:'1111'
        })
        }
        
        if(str == "GeForce GTX 555".substring(0, 14)){
        return res.json({
         score:'1110'
        })
        }
        
        if(str == "Intel Iris Plus 640".substring(0, 14)){
        return res.json({
         score:'1108'
        })
        }
        
        if(str == "Intel UHD P630".substring(0, 14)){
        return res.json({
         score:'1108'
        })
        }
        
        if(str == "Radeon HD 8870M / R9 M270X / M370X".substring(0, 14)){
        return res.json({
         score:'1108'
        })
        }
        
        if(str == "FirePro M6000".substring(0, 14)){
        return res.json({
         score:'1097'
        })
        }
        
        if(str == "GRID P40-4Q".substring(0, 14)){
        return res.json({
         score:'1096'
        })
        }
        
        if(str == "FirePro 3D V7800".substring(0, 14)){
        return res.json({
         score:'1091'
        })
        }
        
        if(str == "GRID P100-8Q".substring(0, 14)){
        return res.json({
         score:'1089'
        })
        }
        
        if(str == "Radeon R7 A10-7890K".substring(0, 14)){
        return res.json({
         score:'1083'
        })
        }
        
        if(str == "FirePro M4000".substring(0, 14)){
        return res.json({
         score:'1081'
        })
        }
        
        if(str == "Radeon HD 7750".substring(0, 14)){
        return res.json({
         score:'1080'
        })
        }
        
        if(str == "GRID P100-16Q".substring(0, 14)){
        return res.json({
         score:'1075'
        })
        }
        
        if(str == "FirePro M5100 FireGL V".substring(0, 14)){
        return res.json({
         score:'1071'
        })
        }
        
        if(str == "MONSTER GeForce GTX 675M".substring(0, 14)){
        return res.json({
         score:'1067'
        })
        }
        
        if(str == "Radeon R7 A8-7500".substring(0, 14)){
        return res.json({
         score:'1059'
        })
        }
        
        if(str == "Radeon HD 8870M".substring(0, 14)){
        return res.json({
         score:'1059'
        })
        }
        
        if(str == "Intel UHD 630".substring(0, 14)){
        return res.json({
         score:'1057'
        })
        }
        
        if(str == "Radeon HD 5830".substring(0, 14)){
        return res.json({
         score:'1056'
        })
        }
        
        if(str == "Seria Radeon HD 7700".substring(0, 14)){
        return res.json({
         score:'1053'
        })
        }
        
        if(str == "Radeon R7 PRO A8-9600".substring(0, 14)){
        return res.json({
         score:'1045'
        })
        }
        
        if(str == "GeForce GTX 675M".substring(0, 14)){
        return res.json({
         score:'1040'
        })
        }
        
        if(str == "Intel Iris 550".substring(0, 14)){
        return res.json({
         score:'1037'
        })
        }
        
        if(str == "TENSOR 1.0 Driver Intel HD 630".substring(0, 14)){
        return res.json({
         score:'1032'
        })
        }
        
        if(str == "Radeon Vega 8 Mobile".substring(0, 14)){
        return res.json({
         score:'1030'
        })
        }
        
        if(str == "GeForce GTX 560 SE".substring(0, 14)){
        return res.json({
         score:'1029'
        })
        }
        
        if(str == "Radeon R7 A10-9700 RADEON".substring(0, 14)){
        return res.json({
         score:'1026'
        })
        }
        
        if(str == "Quadro 5000".substring(0, 14)){
        return res.json({
         score:'1021'
        })
        }
        
        if(str == "GeForce GTX 580M".substring(0, 14)){
        return res.json({
         score:'1021'
        })
        }
        
        if(str == "GeForce GTX 760M".substring(0, 14)){
        return res.json({
         score:'1020'
        })
        }
        
        if(str == "GeForce GTX 645".substring(0, 14)){
        return res.json({
         score:'1007'
        })
        }
        
        if(str == "Intel Iris Pro P6300".substring(0, 14)){
        return res.json({
         score:'1007'
        })
        }
        
        if(str == "GeForce GTX 670M".substring(0, 14)){
        return res.json({
         score:'1007'
        })
        }
        
        if(str == "Quadro M520".substring(0, 14)){
        return res.json({
         score:'1007'
        })
        }
        
        if(str == "GeForce GTX 485M".substring(0, 14)){
        return res.json({
         score:'1006'
        })
        }
        
        if(str == "Radeon R5 A10-9630P 4C+6G".substring(0, 14)){
        return res.json({
         score:'1005'
        })
        }
        
        if(str == "Radeon R5 PRO A6-8570 2C+6G".substring(0, 14)){
        return res.json({
         score:'1003'
        })
        }
        
        if(str == "Radeon HD HD7850M".substring(0, 14)){
        return res.json({
         score:'1000'
        })
        }
        
        if(str == "Radeon R7 PRO A10-9700".substring(0, 14)){
        return res.json({
         score:'989'
        })
        }
        
        if(str == "Radeon HD 7730".substring(0, 14)){
        return res.json({
         score:'985'
        })
        }
        
        if(str == "Radeon R7 A10-7870K".substring(0, 14)){
        return res.json({
         score:'973'
        })
        }
        
        if(str == "Radeon R7 250".substring(0, 14)){
        return res.json({
         score:'972'
        })
        }
        
        if(str == "GRID P100-1B".substring(0, 14)){
        return res.json({
         score:'971'
        })
        }
        
        if(str == "GeForce GT 735M".substring(0, 14)){
        return res.json({
         score:'971'
        })
        }
        
        if(str == "Intel HD 630".substring(0, 14)){
        return res.json({
         score:'969'
        })
        }
        
        if(str == "Radeon R7 PRO A8-8670E".substring(0, 14)){
        return res.json({
         score:'967'
        })
        }
        
        if(str == "GeForce MX130".substring(0, 14)){
        return res.json({
         score:'964'
        })
        }
        
        if(str == "Radeon R5 340".substring(0, 14)){
        return res.json({
         score:'963'
        })
        }
        
        if(str == "Radeon R5 A6-9500 2C+6G".substring(0, 14)){
        return res.json({
         score:'958'
        })
        }
        
        if(str == "Radeon R7 A12-9800E RADEON".substring(0, 14)){
        return res.json({
         score:'956'
        })
        }
        
        if(str == "Radeon HD 7560D + 7700 Dual".substring(0, 14)){
        return res.json({
         score:'955'
        })
        }
        
        if(str == "Radeon R7 PRO A12-8870E".substring(0, 14)){
        return res.json({
         score:'954'
        })
        }
        
        if(str == "Radeon R9 M270X".substring(0, 14)){
        return res.json({
         score:'951'
        })
        }
        
        if(str == "Radeon R7 + R5 435 Dual A10-9700 RADEON".substring(0, 14)){
        return res.json({
         score:'949'
        })
        }
        
        if(str == "Radeon HD 8670D + 7700 Dual".substring(0, 14)){
        return res.json({
         score:'949'
        })
        }
        
        if(str == "Intel UHD 620".substring(0, 14)){
        return res.json({
         score:'948'
        })
        }
        
        if(str == "Radeon HD 7870M".substring(0, 14)){
        return res.json({
         score:'946'
        })
        }
        
        if(str == "Intel UHD".substring(0, 14)){
        return res.json({
         score:'943'
        })
        }
        
        if(str == "GeForce GTX 460 SE".substring(0, 14)){
        return res.json({
         score:'942'
        })
        }
        
        if(str == "Radeon HD 6850".substring(0, 14)){
        return res.json({
         score:'940'
        })
        }
        
        if(str == "Radeon R7 PRO A10-8770E".substring(0, 14)){
        return res.json({
         score:'940'
        })
        }
        
        if(str == "Embedded Radeon E9173".substring(0, 14)){
        return res.json({
         score:'939'
        })
        }
        
        if(str == "FirePro V7900".substring(0, 14)){
        return res.json({
         score:'936'
        })
        }
        
        if(str == "GeForce 930MX".substring(0, 14)){
        return res.json({
         score:'936'
        })
        }
        
        if(str == "GRID M60-1Q".substring(0, 14)){
        return res.json({
         score:'929'
        })
        }
        
        if(str == "Radeon R7 PRO A10-9700E".substring(0, 14)){
        return res.json({
         score:'929'
        })
        }
        
        if(str == "GRID P40-2B".substring(0, 14)){
        return res.json({
         score:'929'
        })
        }
        
        if(str == "Radeon R7 A8-9600 RADEON".substring(0, 14)){
        return res.json({
         score:'920'
        })
        }
        
        if(str == "Radeon R7 A10-7860K".substring(0, 14)){
        return res.json({
         score:'911'
        })
        }
        
        if(str == "Radeon R5 430".substring(0, 14)){
        return res.json({
         score:'910'
        })
        }
        
        if(str == "Barco MXRT 5500".substring(0, 14)){
        return res.json({
         score:'910'
        })
        }
        
        if(str == "Radeon R7 A10-9700E RADEON".substring(0, 14)){
        return res.json({
         score:'909'
        })
        }
        
        if(str == "Radeon R7 PRO A12-9800E".substring(0, 14)){
        return res.json({
         score:'909'
        })
        }
        
        if(str == "Radeon R7 Opteron X3421".substring(0, 14)){
        return res.json({
         score:'898'
        })
        }
        
        if(str == "GeForce GT 745M".substring(0, 14)){
        return res.json({
         score:'895'
        })
        }
        
        if(str == "Radeon R5 PRO A6-9500 2C+6G".substring(0, 14)){
        return res.json({
         score:'890'
        })
        }
        
        if(str == "Radeon R7 430".substring(0, 14)){
        return res.json({
         score:'879'
        })
        }
        
        if(str == "Quadro K3000M".substring(0, 14)){
        return res.json({
         score:'877'
        })
        }
        
        if(str == "Radeon R7 A8-7680".substring(0, 14)){
        return res.json({
         score:'877'
        })
        }
        
        if(str == "Quadro 5010M".substring(0, 14)){
        return res.json({
         score:'877'
        })
        }
        
        if(str == "GeForce 940MX".substring(0, 14)){
        return res.json({
         score:'876'
        })
        }
        
        if(str == "Radeon Vega 6".substring(0, 14)){
        return res.json({
         score:'876'
        })
        }
        
        if(str == "Quadro K2100M".substring(0, 14)){
        return res.json({
         score:'874'
        })
        }
        
        if(str == "Intel UHD Graphics 620".substring(0, 14)){
        return res.json({
         score:'871'
        })
        }
        
        if(str == "Radeon R7 PRO A6-9500 2C+6G".substring(0, 14)){
        return res.json({
         score:'870'
        })
        }
        
        if(str == "GeForce GTX 480M".substring(0, 14)){
        return res.json({
         score:'867'
        })
        }
        
        if(str == "Radeon HD 6790".substring(0, 14)){
        return res.json({
         score:'864'
        })
        }
        
        if(str == "GeForce GTX 550 Ti".substring(0, 14)){
        return res.json({
         score:'863'
        })
        }
        
        if(str == "Radeon R5 A6-9500E 2C+4G".substring(0, 14)){
        return res.json({
         score:'861'
        })
        }
        
        if(str == "Quadro K2000".substring(0, 14)){
        return res.json({
         score:'858'
        })
        }
        
        if(str == "Radeon R7 A8-7670K".substring(0, 14)){
        return res.json({
         score:'857'
        })
        }
        
        if(str == "Radeon R7 FX-8800P".substring(0, 14)){
        return res.json({
         score:'854'
        })
        }
        
        if(str == "GeForce GTX 570M".substring(0, 14)){
        return res.json({
         score:'853'
        })
        }
        
        if(str == "Radeon R7 A10-8750".substring(0, 14)){
        return res.json({
         score:'852'
        })
        }
        
        if(str == "Radeon HD 8570".substring(0, 14)){
        return res.json({
         score:'852'
        })
        }
        
        if(str == "Radeon R7 A10-7850K".substring(0, 14)){
        return res.json({
         score:'849'
        })
        }
        
        if(str == "Radeon HD 6900M".substring(0, 14)){
        return res.json({
         score:'846'
        })
        }
        
        if(str == "GeForce GT 740".substring(0, 14)){
        return res.json({
         score:'845'
        })
        }
        
        if(str == "GeForce GTX 650".substring(0, 14)){
        return res.json({
         score:'843'
        })
        }
        
        if(str == "Radeon R7 PRO A10-9700B".substring(0, 14)){
        return res.json({
         score:'840'
        })
        }
        
        if(str == "Intel Iris 540".substring(0, 14)){
        return res.json({
         score:'838'
        })
        }
        
        if(str == "Radeon R7 7850A10-7850K".substring(0, 14)){
        return res.json({
         score:'836'
        })
        }
        
        if(str == "Radeon HD 5770".substring(0, 14)){
        return res.json({
         score:'836'
        })
        }
        
        if(str == "Radeon HD 6770".substring(0, 14)){
        return res.json({
         score:'828'
        })
        }
        
        if(str == "Radeon R7 PRO A10-8850B".substring(0, 14)){
        return res.json({
         score:'826'
        })
        }
        
        if(str == "Radeon R7 A10 PRO-7850B".substring(0, 14)){
        return res.json({
         score:'823'
        })
        }
        
        if(str == "Matrox C420 LP PCIe x16".substring(0, 14)){
        return res.json({
         score:'821'
        })
        }
        
        if(str == "Radeon R7 340".substring(0, 14)){
        return res.json({
         score:'821'
        })
        }
        
        if(str == "Intel Iris 650".substring(0, 14)){
        return res.json({
         score:'817'
        })
        }
        
        if(str == "Quadro K2000D".substring(0, 14)){
        return res.json({
         score:'814'
        })
        }
        
        if(str == "GRID V100D-8Q".substring(0, 14)){
        return res.json({
         score:'813'
        })
        }
        
        if(str == "GeForce GT 635".substring(0, 14)){
        return res.json({
         score:'810'
        })
        }
        
        if(str == "Radeon Vega 3".substring(0, 14)){
        return res.json({
         score:'804'
        })
        }
        
        if(str == "Quadro K620M".substring(0, 14)){
        return res.json({
         score:'803'
        })
        }
        
        if(str == "Radeon HD 7850M".substring(0, 14)){
        return res.json({
         score:'801'
        })
        }
        
        if(str == "FirePro 3D V5800".substring(0, 14)){
        return res.json({
         score:'801'
        })
        }
        
        if(str == "Radeon R5 A6-7480".substring(0, 14)){
        return res.json({
         score:'801'
        })
        }
        
        if(str == "Radeon R6 Opteron X3418".substring(0, 14)){
        return res.json({
         score:'800'
        })
        }
        
        if(str == "Intel Iris Pro 5200".substring(0, 14)){
        return res.json({
         score:'787'
        })
        }
        
        if(str == "GeForce 825M".substring(0, 14)){
        return res.json({
         score:'782'
        })
        }
        
        if(str == "GeForce GTX 470M".substring(0, 14)){
        return res.json({
         score:'782'
        })
        }
        
        if(str == "GeForce GT 755M".substring(0, 14)){
        return res.json({
         score:'779'
        })
        }
        
        if(str == "Intel HD P530".substring(0, 14)){
        return res.json({
         score:'776'
        })
        }
        
        if(str == "GeForce GTX 660M".substring(0, 14)){
        return res.json({
         score:'776'
        })
        }
        
        if(str == "Radeon R7 A12-9730P RADEON".substring(0, 14)){
        return res.json({
         score:'775'
        })
        }
        
        if(str == "Radeon R7 + R7 200 Dual".substring(0, 14)){
        return res.json({
         score:'770'
        })
        }
        
        if(str == "Radeon R7 PRO A10-8750B".substring(0, 14)){
        return res.json({
         score:'766'
        })
        }
        
        if(str == "Intel HD Graphics 620".substring(0, 14)){
        return res.json({
         score:'765'
        })
        }
        
        if(str == "GeForce GT 750M".substring(0, 14)){
        return res.json({
         score:'762'
        })
        }
        
        if(str == "Barco MXRT 5450".substring(0, 14)){
        return res.json({
         score:'760'
        })
        }
        
        if(str == "Radeon R7 A12-9720P RADEON".substring(0, 14)){
        return res.json({
         score:'758'
        })
        }
        
        if(str == "Radeon R7 +8G".substring(0, 14)){
        return res.json({
         score:'749'
        })
        }
        
        if(str == "Radeon R7 A8-7650K".substring(0, 14)){
        return res.json({
         score:'748'
        })
        }
        
        if(str == "GeForce GT 640".substring(0, 14)){
        return res.json({
         score:'747'
        })
        }
        
        if(str == "FirePro W2100".substring(0, 14)){
        return res.json({
         score:'746'
        })
        }
        
        if(str == "Radeon R7 A10-7800".substring(0, 14)){
        return res.json({
         score:'744'
        })
        }
        
        if(str == "Quadro 5000M".substring(0, 14)){
        return res.json({
         score:'744'
        })
        }
        
        if(str == "GeForce 840M".substring(0, 14)){
        return res.json({
         score:'744'
        })
        }
        
        if(str == "GeForce GTS 450".substring(0, 14)){
        return res.json({
         score:'743'
        })
        }
        
        if(str == "GeForce 930A".substring(0, 14)){
        return res.json({
         score:'742'
        })
        }
        
        if(str == "FirePro M40003".substring(0, 14)){
        return res.json({
         score:'740'
        })
        }
        
        if(str == "NVS 310".substring(0, 14)){
        return res.json({
         score:'738'
        })
        }
        
        if(str == "Radeon HD 7660D + R7 240 Dual".substring(0, 14)){
        return res.json({
         score:'737'
        })
        }
        
        if(str == "GeForce 945M".substring(0, 14)){
        return res.json({
         score:'736'
        })
        }
        
        if(str == "Radeon Vega 3 Mobile".substring(0, 14)){
        return res.json({
         score:'735'
        })
        }
        
        if(str == "GRID P6-2Q".substring(0, 14)){
        return res.json({
         score:'735'
        })
        }
        
        if(str == "Quadro 4000".substring(0, 14)){
        return res.json({
         score:'733'
        })
        }
        
        if(str == "Quadro 4000M".substring(0, 14)){
        return res.json({
         score:'726'
        })
        }
        
        if(str == "Radeon R7 PRO A12-9800B".substring(0, 14)){
        return res.json({
         score:'725'
        })
        }
        
        if(str == "Radeon HD 7750M".substring(0, 14)){
        return res.json({
         score:'725'
        })
        }
        
        if(str == "Radeon R7 FX-9800P RADEON".substring(0, 14)){
        return res.json({
         score:'720'
        })
        }
        
        if(str == "Radeon R5 PRO A8-9600B 4C+6G".substring(0, 14)){
        return res.json({
         score:'718'
        })
        }
        
        if(str == "Radeon R7 A10-7700K".substring(0, 14)){
        return res.json({
         score:'717'
        })
        }
        
        if(str == "GeForce 940M".substring(0, 14)){
        return res.json({
         score:'716'
        })
        }
        
        if(str == "Radeon R7 PRO A12-8830B".substring(0, 14)){
        return res.json({
         score:'712'
        })
        }
        
        if(str == "GeForce GT 730".substring(0, 14)){
        return res.json({
         score:'712'
        })
        }
        
        if(str == "Radeon R5 240".substring(0, 14)){
        return res.json({
         score:'712'
        })
        }
        
        if(str == "GeForce GT 740M".substring(0, 14)){
        return res.json({
         score:'711'
        })
        }
        
        if(str == "GRID M60-8Q".substring(0, 14)){
        return res.json({
         score:'709'
        })
        }
        
        if(str == "GeForce 930M".substring(0, 14)){
        return res.json({
         score:'707'
        })
        }
        
        if(str == "Radeon R7 A10 PRO-7800B".substring(0, 14)){
        return res.json({
         score:'706'
        })
        }
        
        if(str == "GeForce GTX 560M".substring(0, 14)){
        return res.json({
         score:'706'
        })
        }
        
        if(str == "FirePro M4150".substring(0, 14)){
        return res.json({
         score:'705'
        })
        }
        
        if(str == "Radeon R5 PRO A6-9500E 2C+4G".substring(0, 14)){
        return res.json({
         score:'704'
        })
        }
        
        if(str == "Intel Iris 6100".substring(0, 14)){
        return res.json({
         score:'704'
        })
        }
        
        if(str == "GeForce MX110".substring(0, 14)){
        return res.json({
         score:'703'
        })
        }
        
        if(str == "Radeon R7 A8-7600".substring(0, 14)){
        return res.json({
         score:'702'
        })
        }
        
        if(str == "Radeon HD 5750".substring(0, 14)){
        return res.json({
         score:'697'
        })
        }
        
        if(str == "Radeon R7 240".substring(0, 14)){
        return res.json({
         score:'692'
        })
        }
        
        if(str == "Radeon HD 7730M".substring(0, 14)){
        return res.json({
         score:'692'
        })
        }
        
        if(str == "Radeon R5 PRO A6-8570E 2C+4G".substring(0, 14)){
        return res.json({
         score:'690'
        })
        }
        
        if(str == "GeForce 830M".substring(0, 14)){
        return res.json({
         score:'689'
        })
        }
        
        if(str == "GRID M6-8Q".substring(0, 14)){
        return res.json({
         score:'686'
        })
        }
        
        if(str == "Quadro K2000M".substring(0, 14)){
        return res.json({
         score:'686'
        })
        }
        
        if(str == "Quadro K1100M".substring(0, 14)){
        return res.json({
         score:'682'
        })
        }
        
        if(str == "Professional HD Driver".substring(0, 14)){
        return res.json({
         score:'676'
        })
        }
        
        if(str == "GeForce 920MX".substring(0, 14)){
        return res.json({
         score:'674'
        })
        }
        
        if(str == "Radeon HD 6750".substring(0, 14)){
        return res.json({
         score:'674'
        })
        }
        
        if(str == "GeForce GT 730M".substring(0, 14)){
        return res.json({
         score:'672'
        })
        }
        
        if(str == "Radeon HD 8470D + HD 7500 Dual".substring(0, 14)){
        return res.json({
         score:'670'
        })
        }
        
        if(str == "Quadro 2000D".substring(0, 14)){
        return res.json({
         score:'668'
        })
        }
        
        if(str == "Quadro 2000".substring(0, 14)){
        return res.json({
         score:'666'
        })
        }
        
        if(str == "FirePro V5800".substring(0, 14)){
        return res.json({
         score:'662'
        })
        }
        
        if(str == "Radeon HD 8570D + HD 8570 Dual".substring(0, 14)){
        return res.json({
         score:'662'
        })
        }
        
        if(str == "Radeon R7 PRO A12-8800B".substring(0, 14)){
        return res.json({
         score:'661'
        })
        }
        
        if(str == "Radeon R5 A10-9620P 4C+6G".substring(0, 14)){
        return res.json({
         score:'660'
        })
        }
        
        if(str == "GeForce 920M".substring(0, 14)){
        return res.json({
         score:'659'
        })
        }
        
        if(str == "Radeon R9 M265X".substring(0, 14)){
        return res.json({
         score:'656'
        })
        }
        
        if(str == "Intel HD 530".substring(0, 14)){
        return res.json({
         score:'654'
        })
        }
        
        if(str == "Mobility Radeon HD 5870".substring(0, 14)){
        return res.json({
         score:'653'
        })
        }
        
        if(str == "Barco MXRT 7400".substring(0, 14)){
        return res.json({
         score:'651'
        })
        }
        
        if(str == "GeForce GT 650M".substring(0, 14)){
        return res.json({
         score:'651'
        })
        }
        
        if(str == "Barco MXRT 5400".substring(0, 14)){
        return res.json({
         score:'650'
        })
        }
        
        if(str == "Radeon HD 8650G + 7700M Dual".substring(0, 14)){
        return res.json({
         score:'646'
        })
        }
        
        if(str == "Intel UHD 617".substring(0, 14)){
        return res.json({
         score:'644'
        })
        }
        
        if(str == "Radeon R5 A10-9600P 4C+6G".substring(0, 14)){
        return res.json({
         score:'644'
        })
        }
        
        if(str == "Radeon R7 A12-9700P RADEON".substring(0, 14)){
        return res.json({
         score:'642'
        })
        }
        
        if(str == "Radeon R7 A8-8650".substring(0, 14)){
        return res.json({
         score:'641'
        })
        }
        
        if(str == "GeForce GT 240".substring(0, 14)){
        return res.json({
         score:'638'
        })
        }
        
        if(str == "Radeon HD 6800M".substring(0, 14)){
        return res.json({
         score:'637'
        })
        }
        
        if(str == "Radeon HD 8670D + R7 200 Dual".substring(0, 14)){
        return res.json({
         score:'635'
        })
        }
        
        if(str == "Radeon HD 8750M".substring(0, 14)){
        return res.json({
         score:'635'
        })
        }
        
        if(str == "Radeon R5 A6-9400 RADEON R5, 6 COMPUTE CORES 2C+4G".substring(0, 14)){
        return res.json({
         score:'632'
        })
        }
        
        if(str == "Radeon R7 G".substring(0, 14)){
        return res.json({
         score:'630'
        })
        }
        
        if(str == "Radeon R7 + R7 240 Dual".substring(0, 14)){
        return res.json({
         score:'629'
        })
        }
        
        if(str == "Radeon R7 PRO A8-8650B".substring(0, 14)){
        return res.json({
         score:'625'
        })
        }
        
        if(str == "Radeon 540".substring(0, 14)){
        return res.json({
         score:'623'
        })
        }
        
        if(str == "GRID M10-8Q".substring(0, 14)){
        return res.json({
         score:'616'
        })
        }
        
        if(str == "Radeon R5 PRO A10-8730B 4C+6G".substring(0, 14)){
        return res.json({
         score:'615'
        })
        }
        
        if(str == "GRID K280Q".substring(0, 14)){
        return res.json({
         score:'612'
        })
        }
        
        if(str == "Radeon HD 6650M".substring(0, 14)){
        return res.json({
         score:'608'
        })
        }
        
        if(str == "GeForce GT 820M".substring(0, 14)){
        return res.json({
         score:'607'
        })
        }
        
        if(str == "Ryzen 7 2700U with Radeon Vega".substring(0, 14)){
        return res.json({
         score:'607'
        })
        }
        
        if(str == "Radeon HD 4650".substring(0, 14)){
        return res.json({
         score:'607'
        })
        }
        
        if(str == "Radeon HD 7640G + R5 M200 Dual".substring(0, 14)){
        return res.json({
         score:'606'
        })
        }
        
        if(str == "Intel HD 6000".substring(0, 14)){
        return res.json({
         score:'605'
        })
        }
        
        if(str == "Radeon HD 5600/5700".substring(0, 14)){
        return res.json({
         score:'605'
        })
        }
        
        if(str == "Radeon R5 PRO A6-8500B 2C+4G".substring(0, 14)){
        return res.json({
         score:'603'
        })
        }
        
        if(str == "Radeon HD 8570D + R7 240 Dual".substring(0, 14)){
        return res.json({
         score:'601'
        })
        }
        
        if(str == "Radeon HD 7520G + 7700M Dual".substring(0, 14)){
        return res.json({
         score:'600'
        })
        }
        
        if(str == "Radeon R5 A6-8500P".substring(0, 14)){
        return res.json({
         score:'600'
        })
        }
        
        if(str == "GRID M60-4Q".substring(0, 14)){
        return res.json({
         score:'599'
        })
        }
        
        if(str == "Quadro 3000M".substring(0, 14)){
        return res.json({
         score:'599'
        })
        }
        
        if(str == "GeForce GT 640M".substring(0, 14)){
        return res.json({
         score:'596'
        })
        }
        
        if(str == "GeForce GT 710".substring(0, 14)){
        return res.json({
         score:'594'
        })
        }
        
        if(str == "GeForce GTX 460M".substring(0, 14)){
        return res.json({
         score:'593'
        })
        }
        
        if(str == "Radeon R6 A10-8700P".substring(0, 14)){
        return res.json({
         score:'592'
        })
        }
        
        if(str == "Radeon HD 8670D + R7 240 Dual".substring(0, 14)){
        return res.json({
         score:'589'
        })
        }
        
        if(str == "Radeon R7 A8 PRO-7600B".substring(0, 14)){
        return res.json({
         score:'586'
        })
        }
        
        if(str == "Radeon R5 PRO A6-8530B 2C+4G".substring(0, 14)){
        return res.json({
         score:'584'
        })
        }
        
        if(str == "Radeon HD 8570 + HD 7660D Dual".substring(0, 14)){
        return res.json({
         score:'583'
        })
        }
        
        if(str == "Intel UHD 610".substring(0, 14)){
        return res.json({
         score:'583'
        })
        }
        
        if(str == "Radeon HD 8570D + R7 200 Dual".substring(0, 14)){
        return res.json({
         score:'580'
        })
        }
        
        if(str == "Intel HD 520".substring(0, 14)){
        return res.json({
         score:'579'
        })
        }
        
        if(str == "Radeon HD 8670D + 8570 Dual".substring(0, 14)){
        return res.json({
         score:'579'
        })
        }
        
        if(str == "FirePro W4170M".substring(0, 14)){
        return res.json({
         score:'578'
        })
        }
        
        if(str == "GRID V100-8Q".substring(0, 14)){
        return res.json({
         score:'578'
        })
        }
        
        if(str == "Radeon HD 7560D + HD 8570 Dual".substring(0, 14)){
        return res.json({
         score:'577'
        })
        }
        
        if(str == "Radeon HD 8570 + 8670D Dual".substring(0, 14)){
        return res.json({
         score:'576'
        })
        }
        
        if(str == "GeForce GT 545".substring(0, 14)){
        return res.json({
         score:'576'
        })
        }
        
        if(str == "Radeon R7 A8-7500 4C+6G".substring(0, 14)){
        return res.json({
         score:'571'
        })
        }
        
        if(str == "Radeon HD 8670D + 7000 Dual".substring(0, 14)){
        return res.json({
         score:'570'
        })
        }
        
        if(str == "Quadro K610M".substring(0, 14)){
        return res.json({
         score:'569'
        })
        }
        
        if(str == "GRID M60-0B".substring(0, 14)){
        return res.json({
         score:'569'
        })
        }
        
        if(str == "Radeon R7 240 + HD 8570D Dual".substring(0, 14)){
        return res.json({
         score:'568'
        })
        }
        
        if(str == "Radeon HD 8450G + 8600/8700M Dual".substring(0, 14)){
        return res.json({
         score:'564'
        })
        }
        
        if(str == "Radeon R7 240 + HD 8670D Dual".substring(0, 14)){
        return res.json({
         score:'559'
        })
        }
        
        if(str == "Radeon HD 7670".substring(0, 14)){
        return res.json({
         score:'559'
        })
        }
        
        if(str == "FirePro V4900".substring(0, 14)){
        return res.json({
         score:'555'
        })
        }
        
        if(str == "Quadro 2000M".substring(0, 14)){
        return res.json({
         score:'553'
        })
        }
        
        if(str == "Intel Iris Pro 6100".substring(0, 14)){
        return res.json({
         score:'552'
        })
        }
        
        if(str == "Quadro 2000 D".substring(0, 14)){
        return res.json({
         score:'547'
        })
        }
        
        if(str == "Radeon HD 7560D + HD 6670 Dual".substring(0, 14)){
        return res.json({
         score:'547'
        })
        }
        
        if(str == "GeForce GT 640M LE".substring(0, 14)){
        return res.json({
         score:'545'
        })
        }
        
        if(str == "Intel HD 610".substring(0, 14)){
        return res.json({
         score:'545'
        })
        }
        
        if(str == "Intel UHD 615".substring(0, 14)){
        return res.json({
         score:'544'
        })
        }
        
        if(str == "GeForce GT 720".substring(0, 14)){
        return res.json({
         score:'543'
        })
        }
        
        if(str == "GeForce 710M".substring(0, 14)){
        return res.json({
         score:'542'
        })
        }
        
        if(str == "GeForce GT 710M".substring(0, 14)){
        return res.json({
         score:'541'
        })
        }
        
        if(str == "Intel HD 5200".substring(0, 14)){
        return res.json({
         score:'537'
        })
        }
        
        if(str == "Radeon R6 PRO A10-8700B 4C+6G".substring(0, 14)){
        return res.json({
         score:'536'
        })
        }
        
        if(str == "Radeon HD 6670".substring(0, 14)){
        return res.json({
         score:'536'
        })
        }
        
        if(str == "GeForce 820M".substring(0, 14)){
        return res.json({
         score:'535'
        })
        }
        
        if(str == "Intel Iris 5100".substring(0, 14)){
        return res.json({
         score:'533'
        })
        }
        
        if(str == "Intel HD P4600/P4700".substring(0, 14)){
        return res.json({
         score:'533'
        })
        }
        
        if(str == "Radeon R7 M465".substring(0, 14)){
        return res.json({
         score:'531'
        })
        }
        
        if(str == "Intel HD 4600".substring(0, 14)){
        return res.json({
         score:'526'
        })
        }
        
        if(str == "Radeon HD 7560D + 7670 Dual".substring(0, 14)){
        return res.json({
         score:'525'
        })
        }
        
        if(str == "Radeon HD 7560D + 6670 Dual".substring(0, 14)){
        return res.json({
         score:'518'
        })
        }
        
        if(str == "Radeon HD 8550G + HD 8750M Dual".substring(0, 14)){
        return res.json({
         score:'518'
        })
        }
        
        if(str == "GeForce 210".substring(0, 14)){
        return res.json({
         score:'516'
        })
        }
        
        if(str == "FirePro W5130M".substring(0, 14)){
        return res.json({
         score:'516'
        })
        }
        
        if(str == "Radeon R5 PRO A6-9500B 2C+4G".substring(0, 14)){
        return res.json({
         score:'515'
        })
        }
        
        if(str == "Radeon HD 7660D + 6670 Dual".substring(0, 14)){
        return res.json({
         score:'513'
        })
        }
        
        if(str == "Radeon HD 8670D + HD 7000 Dual".substring(0, 14)){
        return res.json({
         score:'512'
        })
        }
        
        if(str == "Radeon HD 8670D + HD 6670 Dual".substring(0, 14)){
        return res.json({
         score:'512'
        })
        }
        
        if(str == "Radeon HD 8670D + 6670 Dual".substring(0, 14)){
        return res.json({
         score:'511'
        })
        }
        
        if(str == "Radeon R6 A8-8600P".substring(0, 14)){
        return res.json({
         score:'510'
        })
        }
        
        if(str == "A10-8700P".substring(0, 14)){
        return res.json({
         score:'509'
        })
        }
        
        if(str == "Radeon HD 8730M".substring(0, 14)){
        return res.json({
         score:'509'
        })
        }
        
        if(str == "Intel HD 615".substring(0, 14)){
        return res.json({
         score:'509'
        })
        }
        
        if(str == "Radeon HD 7560D + HD 7670 Dual".substring(0, 14)){
        return res.json({
         score:'504'
        })
        }
        
        if(str == "GRID M60-2Q".substring(0, 14)){
        return res.json({
         score:'503'
        })
        }
        
        if(str == "Radeon R5 M240".substring(0, 14)){
        return res.json({
         score:'502'
        })
        }
        
        if(str == "FirePro V3900".substring(0, 14)){
        return res.json({
         score:'502'
        })
        }
        
        if(str == "Mobility Radeon HD 5850".substring(0, 14)){
        return res.json({
         score:'502'
        })
        }
        
        if(str == "GRID K240Q".substring(0, 14)){
        return res.json({
         score:'502'
        })
        }
        
        if(str == "Radeon HD 8570D + 6670 Dual".substring(0, 14)){
        return res.json({
         score:'501'
        })
        }
        
        if(str == "Radeon HD 8650G + HD 8750M Dual".substring(0, 14)){
        return res.json({
         score:'501'
        })
        }
        
        if(str == "GRID M10-0Q".substring(0, 14)){
        return res.json({
         score:'501'
        })
        }
        
        if(str == "GRID M10-4Q".substring(0, 14)){
        return res.json({
         score:'501'
        })
        }
        
        if(str == "Radeon R6 PRO A8-8600B 4C+6G".substring(0, 14)){
        return res.json({
         score:'501'
        })
        }
        
        if(str == "GeForce GT 635M".substring(0, 14)){
        return res.json({
         score:'500'
        })
        }
        
        if(str == "GRID M10-1Q".substring(0, 14)){
        return res.json({
         score:'496'
        })
        }
        
        if(str == "FirePro 3D V4800".substring(0, 14)){
        return res.json({
         score:'495'
        })
        }
        
        if(str == "Radeon HD 6700M".substring(0, 14)){
        return res.json({
         score:'491'
        })
        }
        
        if(str == "GeForce GT 720M".substring(0, 14)){
        return res.json({
         score:'491'
        })
        }
        
        if(str == "Radeon R7E".substring(0, 14)){
        return res.json({
         score:'490'
        })
        }
        
        if(str == "Radeon HD 7670A".substring(0, 14)){
        return res.json({
         score:'489'
        })
        }
        
        if(str == "GeForce GT 645M".substring(0, 14)){
        return res.json({
         score:'487'
        })
        }
        
        if(str == "Radeon HD 8570D + HD 6670 Dual".substring(0, 14)){
        return res.json({
         score:'485'
        })
        }
        
        if(str == "Radeon HD 7660G N HD 7660G + HD 7700M N HD 7700M D".substring(0, 14)){
        return res.json({
         score:'485'
        })
        }
        
        if(str == "Radeon HD 7660G + 7730M Dual".substring(0, 14)){
        return res.json({
         score:'484'
        })
        }
        
        if(str == "Radeon HD 8670D".substring(0, 14)){
        return res.json({
         score:'476'
        })
        }
        
        if(str == "Quadro K420".substring(0, 14)){
        return res.json({
         score:'476'
        })
        }
        
        if(str == "GeForce 710A".substring(0, 14)){
        return res.json({
         score:'473'
        })
        }
        
        if(str == "Radeon HD 7660D + 7670 Dual".substring(0, 14)){
        return res.json({
         score:'472'
        })
        }
        
        if(str == "Radeon HD 8670D + R5 235 Dual".substring(0, 14)){
        return res.json({
         score:'471'
        })
        }
        
        if(str == "Radeon HD 7690M".substring(0, 14)){
        return res.json({
         score:'471'
        })
        }
        
        if(str == "NVS 5400M".substring(0, 14)){
        return res.json({
         score:'469'
        })
        }
        
        if(str == "Radeon R5 Opteron X3216".substring(0, 14)){
        return res.json({
         score:'467'
        })
        }
        
        if(str == "Radeon HD 5670".substring(0, 14)){
        return res.json({
         score:'464'
        })
        }
        
        if(str == "Radeon HD 6670 + 6670 Dual".substring(0, 14)){
        return res.json({
         score:'463'
        })
        }
        
        if(str == "GeForce GT 555M".substring(0, 14)){
        return res.json({
         score:'462'
        })
        }
        
        if(str == "Radeon HD 7650A".substring(0, 14)){
        return res.json({
         score:'458'
        })
        }
        
        if(str == "Radeon HD 7570".substring(0, 14)){
        return res.json({
         score:'458'
        })
        }
        
        if(str == "Ryzen 5 2500U with Radeon Vega".substring(0, 14)){
        return res.json({
         score:'455'
        })
        }
        
        if(str == "Radeon HD 7660D".substring(0, 14)){
        return res.json({
         score:'454'
        })
        }
        
        if(str == "Quadro K1000M".substring(0, 14)){
        return res.json({
         score:'453'
        })
        }
        
        if(str == "Radeon E6760".substring(0, 14)){
        return res.json({
         score:'452'
        })
        }
        
        if(str == "Intel HD 5500".substring(0, 14)){
        return res.json({
         score:'452'
        })
        }
        
        if(str == "Radeon R5 330".substring(0, 14)){
        return res.json({
         score:'452'
        })
        }
        
        if(str == "Radeon HD 8610G + HD 8500M Dual".substring(0, 14)){
        return res.json({
         score:'451'
        })
        }
        
        if(str == "Radeon HD 8650G N HD 8650G + HD 8600M N HD 8600M D".substring(0, 14)){
        return res.json({
         score:'450'
        })
        }
        
        if(str == "Radeon R4E".substring(0, 14)){
        return res.json({
         score:'449'
        })
        }
        
        if(str == "Radeon HD 8550G + R5 M200 Dual".substring(0, 14)){
        return res.json({
         score:'449'
        })
        }
        
        if(str == "Radeon R6".substring(0, 14)){
        return res.json({
         score:'449'
        })
        }
        
        if(str == "GeForce GT 550M".substring(0, 14)){
        return res.json({
         score:'446'
        })
        }
        
        if(str == "GeForce GT 630".substring(0, 14)){
        return res.json({
         score:'445'
        })
        }
        
        if(str == "Radeon HD 6570".substring(0, 14)){
        return res.json({
         score:'444'
        })
        }
        
        if(str == "Radeon HD 8670D N HD 8670D + HD 8670D Dual".substring(0, 14)){
        return res.json({
         score:'443'
        })
        }
        
        if(str == "Radeon HD 8650G + 8600/8700M Dual".substring(0, 14)){
        return res.json({
         score:'443'
        })
        }
        
        if(str == "Radeon 530".substring(0, 14)){
        return res.json({
         score:'441'
        })
        }
        
        if(str == "Radeon HD 7560D + 7560D Dual".substring(0, 14)){
        return res.json({
         score:'440'
        })
        }
        
        if(str == "Radeon HD 7560D + HD 6570 Dual".substring(0, 14)){
        return res.json({
         score:'439'
        })
        }
        
        if(str == "GeForce GT 445M".substring(0, 14)){
        return res.json({
         score:'436'
        })
        }
        
        if(str == "Quadro K600".substring(0, 14)){
        return res.json({
         score:'434'
        })
        }
        
        if(str == "GeForce GT 440".substring(0, 14)){
        return res.json({
         score:'433'
        })
        }
        
        if(str == "NVS 5200M".substring(0, 14)){
        return res.json({
         score:'431'
        })
        }
        
        if(str == "FirePro V5900".substring(0, 14)){
        return res.json({
         score:'431'
        })
        }
        
        if(str == "Radeon HD 8570D + 6570 Dual".substring(0, 14)){
        return res.json({
         score:'430'
        })
        }
        
        if(str == "Radeon HD7570".substring(0, 14)){
        return res.json({
         score:'430'
        })
        }
        
        if(str == "Radeon HD 7660D + 7500 Dual".substring(0, 14)){
        return res.json({
         score:'428'
        })
        }
        
        if(str == "Radeon HD 7640G + HD 8600/8700M Dual".substring(0, 14)){
        return res.json({
         score:'428'
        })
        }
        
        if(str == "Radeon HD 7660D + 7540D Dual".substring(0, 14)){
        return res.json({
         score:'426'
        })
        }
        
        if(str == "Radeon HD 8610G + R5 M200 Dual".substring(0, 14)){
        return res.json({
         score:'424'
        })
        }
        
        if(str == "Radeon HD 7660D + 6570 Dual".substring(0, 14)){
        return res.json({
         score:'423'
        })
        }
        
        if(str == "GeForce GT 630M".substring(0, 14)){
        return res.json({
         score:'421'
        })
        }
        
        if(str == "GRID K1".substring(0, 14)){
        return res.json({
         score:'419'
        })
        }
        
        if(str == "Intel 6th Gen Skylake HD 530".substring(0, 14)){
        return res.json({
         score:'417'
        })
        }
        
        if(str == "Radeon HD 8650G".substring(0, 14)){
        return res.json({
         score:'417'
        })
        }
        
        if(str == "Radeon HD 8570D + HD 6570 Dual".substring(0, 14)){
        return res.json({
         score:'416'
        })
        }
        
        if(str == "Radeon HD 8470D + 6570 Dual".substring(0, 14)){
        return res.json({
         score:'414'
        })
        }
        
        if(str == "GRID M10-2B".substring(0, 14)){
        return res.json({
         score:'414'
        })
        }
        
        if(str == "Radeon HD 7660G + 7700M Dual".substring(0, 14)){
        return res.json({
         score:'412'
        })
        }
        
        if(str == "Radeon HD 7540D + 7500 Dual".substring(0, 14)){
        return res.json({
         score:'411'
        })
        }
        
        if(str == "NVS 510".substring(0, 14)){
        return res.json({
         score:'408'
        })
        }
        
        if(str == "Radeon HD 8650G + 8750M Dual".substring(0, 14)){
        return res.json({
         score:'407'
        })
        }
        
        if(str == "7900 MOD - Radeon HD 6550D".substring(0, 14)){
        return res.json({
         score:'404'
        })
        }
        
        if(str == "GeForce GT 530".substring(0, 14)){
        return res.json({
         score:'403'
        })
        }
        
        if(str == "Intel HD 5000".substring(0, 14)){
        return res.json({
         score:'403'
        })
        }
        
        if(str == "GeForce GT 620M".substring(0, 14)){
        return res.json({
         score:'401'
        })
        }
        
        if(str == "Radeon HD 7660D + HD 7000 Dual".substring(0, 14)){
        return res.json({
         score:'401'
        })
        }
        
        if(str == "Radeon HD 7660G + HD 7670M Dual".substring(0, 14)){
        return res.json({
         score:'399'
        })
        }
        
        if(str == "Intel Poison Ivy".substring(0, 14)){
        return res.json({
         score:'397'
        })
        }
        
        if(str == "Intel HD 5600".substring(0, 14)){
        return res.json({
         score:'396'
        })
        }
        
        if(str == "Radeon R7 M440".substring(0, 14)){
        return res.json({
         score:'395'
        })
        }
        
        if(str == "Quadro 600".substring(0, 14)){
        return res.json({
         score:'394'
        })
        }
        
        if(str == "Radeon HD 7560D + 7570 Dual".substring(0, 14)){
        return res.json({
         score:'394'
        })
        }
        
        if(str == "Radeon HD 8650G + HD 8600/8700M Dual".substring(0, 14)){
        return res.json({
         score:'394'
        })
        }
        
        if(str == "Radeon HD 7520G + HD 7600M Dual".substring(0, 14)){
        return res.json({
         score:'393'
        })
        }
        
        if(str == "Intel HD 515".substring(0, 14)){
        return res.json({
         score:'392'
        })
        }
        
        if(str == "Radeon HD 7640G + 8600/8700M Dual".substring(0, 14)){
        return res.json({
         score:'391'
        })
        }
        
        if(str == "Quadro 1000M".substring(0, 14)){
        return res.json({
         score:'391'
        })
        }
        
        if(str == "Radeon HD 8550G + 8750M Dual".substring(0, 14)){
        return res.json({
         score:'390'
        })
        }
        
        if(str == "Radeon 6600M".substring(0, 14)){
        return res.json({
         score:'390'
        })
        }
        
        if(str == "Intel HD 510".substring(0, 14)){
        return res.json({
         score:'389'
        })
        }
        
        if(str == "Radeon HD 7570M".substring(0, 14)){
        return res.json({
         score:'388'
        })
        }
        
        if(str == "Intel UHD 605".substring(0, 14)){
        return res.json({
         score:'387'
        })
        }
        
        if(str == "FirePro M2000".substring(0, 14)){
        return res.json({
         score:'385'
        })
        }
        
        if(str == "Radeon HD 7620G + 8670M Dual".substring(0, 14)){
        return res.json({
         score:'385'
        })
        }
        
        if(str == "Radeon HD 8670D + HD 7600 Dual".substring(0, 14)){
        return res.json({
         score:'384'
        })
        }
        
        if(str == "Radeon HD 7540D + 6570 Dual".substring(0, 14)){
        return res.json({
         score:'381'
        })
        }
        
        if(str == "Radeon HD 7660G + HD 7700M Dual".substring(0, 14)){
        return res.json({
         score:'381'
        })
        }
        
        if(str == "Radeon HD 7660G".substring(0, 14)){
        return res.json({
         score:'380'
        })
        }
        
        if(str == "Radeon HD 6650A".substring(0, 14)){
        return res.json({
         score:'378'
        })
        }
        
        if(str == "Matrox G200e WDDM 2.0".substring(0, 14)){
        return res.json({
         score:'378'
        })
        }
        
        if(str == "Mobility Radeon HD 5570".substring(0, 14)){
        return res.json({
         score:'375'
        })
        }
        
        if(str == "GeForce GT 430".substring(0, 14)){
        return res.json({
         score:'375'
        })
        }
        
        if(str == "Radeon HD 7660G + 8670M Dual".substring(0, 14)){
        return res.json({
         score:'373'
        })
        }
        
        if(str == "Intel HD 4400".substring(0, 14)){
        return res.json({
         score:'372'
        })
        }
        
        if(str == "Barco MXRT 2600".substring(0, 14)){
        return res.json({
         score:'370'
        })
        }
        
        if(str == "Radeon HD 8650G + HD 8600M N HD 8600M Dual".substring(0, 14)){
        return res.json({
         score:'370'
        })
        }
        
        if(str == "Radeon HD 8650G + R5 M230 Dual".substring(0, 14)){
        return res.json({
         score:'369'
        })
        }
        
        if(str == "Radeon HD 8650G N HD 8650G + HD 8600/8700M Dual".substring(0, 14)){
        return res.json({
         score:'369'
        })
        }
        
        if(str == "Radeon HD 8650G + HD 8670M Dual".substring(0, 14)){
        return res.json({
         score:'369'
        })
        }
        
        if(str == "Radeon HD 8550G + 8600/8700M Dual".substring(0, 14)){
        return res.json({
         score:'366'
        })
        }
        
        if(str == "Radeon HD 7670M".substring(0, 14)){
        return res.json({
         score:'366'
        })
        }
        
        if(str == "Radeon HD 6550D".substring(0, 14)){
        return res.json({
         score:'366'
        })
        }
        
        if(str == "Radeon HD 5570".substring(0, 14)){
        return res.json({
         score:'366'
        })
        }
        
        if(str == "Radeon R5 420".substring(0, 14)){
        return res.json({
         score:'366'
        })
        }
        
        if(str == "Quadro 410".substring(0, 14)){
        return res.json({
         score:'364'
        })
        }
        
        if(str == "Intel HD P4600".substring(0, 14)){
        return res.json({
         score:'363'
        })
        }
        
        if(str == "Radeon R7 M365X".substring(0, 14)){
        return res.json({
         score:'363'
        })
        }
        
        if(str == "Radeon HD 8650D".substring(0, 14)){
        return res.json({
         score:'361'
        })
        }
        
        if(str == "Radeon HD 8650G + 7670M Dual".substring(0, 14)){
        return res.json({
         score:'360'
        })
        }
        
        if(str == "FirePro V3800".substring(0, 14)){
        return res.json({
         score:'360'
        })
        }
        
        if(str == "GeForce GT 540M".substring(0, 14)){
        return res.json({
         score:'357'
        })
        }
        
        if(str == "Radeon HD 7560D + 6570 Dual".substring(0, 14)){
        return res.json({
         score:'357'
        })
        }
        
        if(str == "Radeon HD 8650G + 7600M Dual".substring(0, 14)){
        return res.json({
         score:'355'
        })
        }
        
        if(str == "Radeon HD 7520G + HD 8750M Dual".substring(0, 14)){
        return res.json({
         score:'353'
        })
        }
        
        if(str == "Intel HD Family".substring(0, 14)){
        return res.json({
         score:'352'
        })
        }
        
        if(str == "Radeon HD 8650G + 8500M Dual".substring(0, 14)){
        return res.json({
         score:'349'
        })
        }
        
        if(str == "Radeon HD 7660G + 7600M Dual".substring(0, 14)){
        return res.json({
         score:'346'
        })
        }
        
        if(str == "NVS 4200M".substring(0, 14)){
        return res.json({
         score:'344'
        })
        }
        
        if(str == "Radeon HD 8570D".substring(0, 14)){
        return res.json({
         score:'344'
        })
        }
        
        if(str == "Radeon HD 8550G + 8690M Dual".substring(0, 14)){
        return res.json({
         score:'341'
        })
        }
        
        if(str == "GeForce GT 520MX".substring(0, 14)){
        return res.json({
         score:'341'
        })
        }
        
        if(str == "Mobility Radeon HD 5730".substring(0, 14)){
        return res.json({
         score:'341'
        })
        }
        
        if(str == "Radeon RX 550X".substring(0, 14)){
        return res.json({
         score:'341'
        })
        }
        
        if(str == "Radeon HD 8650G + 8670M Dual".substring(0, 14)){
        return res.json({
         score:'335'
        })
        }
        
        if(str == "Intel HD 3000".substring(0, 14)){
        return res.json({
         score:'334'
        })
        }
        
        if(str == "Radeon HD 7660G N HD 7660G + HD 7670M Dual".substring(0, 14)){
        return res.json({
         score:'333'
        })
        }
        
        if(str == "Radeon HD 7660G N HD 7660G + HD 7600M N HD 7600M D".substring(0, 14)){
        return res.json({
         score:'332'
        })
        }
        
        if(str == "Radeon HD 8470D + HD 6450 Dual".substring(0, 14)){
        return res.json({
         score:'330'
        })
        }
        
        if(str == "Radeon HD 8650G N HD 8650G + HD 8570M Dual".substring(0, 14)){
        return res.json({
         score:'329'
        })
        }
        
        if(str == "Radeon HD 8610G".substring(0, 14)){
        return res.json({
         score:'327'
        })
        }
        
        if(str == "FirePro 3D V3800".substring(0, 14)){
        return res.json({
         score:'327'
        })
        }
        
        if(str == "Radeon HD 7560D".substring(0, 14)){
        return res.json({
         score:'327'
        })
        }
        
        if(str == "Radeon HD 7600M + 7600M Dual".substring(0, 14)){
        return res.json({
         score:'327'
        })
        }
        
        if(str == "Radeon HD 8650G + 8570M Dual".substring(0, 14)){
        return res.json({
         score:'326'
        })
        }
        
        if(str == "Radeon HD 7640G N HD 7640G + HD 7600M N HD 7600M D".substring(0, 14)){
        return res.json({
         score:'326'
        })
        }
        
        if(str == "Radeon HD 7640G + HD 7670M Dual".substring(0, 14)){
        return res.json({
         score:'326'
        })
        }
        
        if(str == "Radeon HD 7560D + 6450 Dual".substring(0, 14)){
        return res.json({
         score:'326'
        })
        }
        
        if(str == "Intel HD P4000".substring(0, 14)){
        return res.json({
         score:'323'
        })
        }
        
        if(str == "Radeon HD 7550M/7650M".substring(0, 14)){
        return res.json({
         score:'323'
        })
        }
        
        if(str == "GRID M10-1B".substring(0, 14)){
        return res.json({
         score:'323'
        })
        }
        
        if(str == "GeForce GT 435M".substring(0, 14)){
        return res.json({
         score:'323'
        })
        }
        
        if(str == "Radeon HD 7660G + 7670M Dual".substring(0, 14)){
        return res.json({
         score:'322'
        })
        }
        
        if(str == "Radeon HD 7660G + 7400M Dual".substring(0, 14)){
        return res.json({
         score:'322'
        })
        }
        
        if(str == "Radeon HD 8610G + HD 8670M Dual".substring(0, 14)){
        return res.json({
         score:'321'
        })
        }
        
        if(str == "Radeon HD 7660G + 7610M Dual".substring(0, 14)){
        return res.json({
         score:'321'
        })
        }
        
        if(str == "Intel UHD 600".substring(0, 14)){
        return res.json({
         score:'321'
        })
        }
        
        if(str == "Radeon HD 8550G + HD 8600M Dual".substring(0, 14)){
        return res.json({
         score:'320'
        })
        }
        
        if(str == "Radeon HD 7620G + 8600M Dual".substring(0, 14)){
        return res.json({
         score:'320'
        })
        }
        
        if(str == "Radeon HD 8610G + 8670M Dual".substring(0, 14)){
        return res.json({
         score:'319'
        })
        }
        
        if(str == "GeForce GT 425M".substring(0, 14)){
        return res.json({
         score:'319'
        })
        }
        
        if(str == "Radeon HD 7640G + HD 8500M Dual".substring(0, 14)){
        return res.json({
         score:'318'
        })
        }
        
        if(str == "Radeon HD 7620G + HD 8670M Dual".substring(0, 14)){
        return res.json({
         score:'318'
        })
        }
        
        if(str == "Radeon HD 8550D".substring(0, 14)){
        return res.json({
         score:'317'
        })
        }
        
        if(str == "SUMO 9640".substring(0, 14)){
        return res.json({
         score:'317'
        })
        }
        
        if(str == "Radeon HD 7660G + HD 7500/7600 7500/7600 Dual".substring(0, 14)){
        return res.json({
         score:'317'
        })
        }
        
        if(str == "Radeon HD 8650G + 8600M Dual".substring(0, 14)){
        return res.json({
         score:'316'
        })
        }
        
        if(str == "Radeon R1E".substring(0, 14)){
        return res.json({
         score:'315'
        })
        }
        
        if(str == "Radeon HD 8610G + 8600M Dual".substring(0, 14)){
        return res.json({
         score:'313'
        })
        }
        
        if(str == "Mobility Radeon HD 5000".substring(0, 14)){
        return res.json({
         score:'313'
        })
        }
        
        if(str == "Radeon HD 8650G + HD 8570M Dual".substring(0, 14)){
        return res.json({
         score:'312'
        })
        }
        
        if(str == "Radeon HD 7550M".substring(0, 14)){
        return res.json({
         score:'312'
        })
        }
        
        if(str == "Radeon HD 8610G + 8500M Dual".substring(0, 14)){
        return res.json({
         score:'311'
        })
        }
        
        if(str == "Radeon HD 8570D + HD 7000 Dual".substring(0, 14)){
        return res.json({
         score:'307'
        })
        }
        
        if(str == "Radeon HD 7650M".substring(0, 14)){
        return res.json({
         score:'306'
        })
        }
        
        if(str == "Intel HD 4000".substring(0, 14)){
        return res.json({
         score:'306'
        })
        }
        
        if(str == "Radeon HD 8510G".substring(0, 14)){
        return res.json({
         score:'304'
        })
        }
        
        if(str == "Radeon HD 8570D + R5 235 Dual".substring(0, 14)){
        return res.json({
         score:'301'
        })
        }
        
        if(str == "Radeon R7 M350".substring(0, 14)){
        return res.json({
         score:'301'
        })
        }
        
        if(str == "Radeon R4".substring(0, 14)){
        return res.json({
         score:'301'
        })
        }
        
        if(str == "Radeon HD 7660G + 8600M Dual".substring(0, 14)){
        return res.json({
         score:'300'
        })
        }
        
        if(str == "Radeon HD 7660G + 7470M Dual".substring(0, 14)){
        return res.json({
         score:'300'
        })
        }
        
        if(str == "Radeon HD 7660D + R5 235 Dual".substring(0, 14)){
        return res.json({
         score:'299'
        })
        }
        
        if(str == "Radeon HD 7660G + HD 8500M Dual".substring(0, 14)){
        return res.json({
         score:'299'
        })
        }
        
        if(str == "Radeon HD 8550G".substring(0, 14)){
        return res.json({
         score:'298'
        })
        }
        
        if(str == "Radeon HD 7640G + 7600M Dual".substring(0, 14)){
        return res.json({
         score:'296'
        })
        }
        
        if(str == "Radeon R5 235 + HD 7560D Dual".substring(0, 14)){
        return res.json({
         score:'295'
        })
        }
        
        if(str == "Radeon HD 7660D + 7470 Dual".substring(0, 14)){
        return res.json({
         score:'295'
        })
        }
        
        if(str == "Qualcomm Adreno 630 GPU".substring(0, 14)){
        return res.json({
         score:'294'
        })
        }
        
        if(str == "GeForce GT 525M".substring(0, 14)){
        return res.json({
         score:'294'
        })
        }
        
        if(str == "Radeon HD 6550A".substring(0, 14)){
        return res.json({
         score:'293'
        })
        }
        
        if(str == "GeForce GT 420M".substring(0, 14)){
        return res.json({
         score:'291'
        })
        }
        
        if(str == "Radeon HD 8550G + 8500M Dual".substring(0, 14)){
        return res.json({
         score:'291'
        })
        }
        
        if(str == "Mobility Radeon HD 5650".substring(0, 14)){
        return res.json({
         score:'291'
        })
        }
        
        if(str == "GeForce GT 620".substring(0, 14)){
        return res.json({
         score:'290'
        })
        }
        
        if(str == "Radeon HD 5550".substring(0, 14)){
        return res.json({
         score:'290'
        })
        }
        
        if(str == "Radeon HD 8470D + 6450 Dual".substring(0, 14)){
        return res.json({
         score:'289'
        })
        }
        
        if(str == "GeForce GT 710B".substring(0, 14)){
        return res.json({
         score:'286'
        })
        }
        
        if(str == "Radeon HD 8470D".substring(0, 14)){
        return res.json({
         score:'286'
        })
        }
        
        if(str == "Radeon HD 8510G + 8500M Dual".substring(0, 14)){
        return res.json({
         score:'285'
        })
        }
        
        if(str == "Radeon HD 7620G".substring(0, 14)){
        return res.json({
         score:'284'
        })
        }
        
        if(str == "Matrox G200eW3 WDDM 2.0".substring(0, 14)){
        return res.json({
         score:'284'
        })
        }
        
        if(str == "Radeon HD 7660G + HD 7600M Dual".substring(0, 14)){
        return res.json({
         score:'283'
        })
        }
        
        if(str == "Radeon HD 8650G + HD 8600M Dual".substring(0, 14)){
        return res.json({
         score:'283'
        })
        }
        
        if(str == "Radeon HD 8550G + 8570M Dual".substring(0, 14)){
        return res.json({
         score:'282'
        })
        }
        
        if(str == "Intel HD 5300".substring(0, 14)){
        return res.json({
         score:'279'
        })
        }
        
        if(str == "Radeon HD 7640G + HD 7600M Dual".substring(0, 14)){
        return res.json({
         score:'279'
        })
        }
        
        if(str == "Intel HD 505".substring(0, 14)){
        return res.json({
         score:'278'
        })
        }
        
        if(str == "GeForce GT 705".substring(0, 14)){
        return res.json({
         score:'277'
        })
        }
        
        if(str == "GRID K140Q".substring(0, 14)){
        return res.json({
         score:'277'
        })
        }
        
        if(str == "Radeon HD 7540D".substring(0, 14)){
        return res.json({
         score:'277'
        })
        }
        
        if(str == "Radeon HD 7560D + R5 235 Dual".substring(0, 14)){
        return res.json({
         score:'275'
        })
        }
        
        if(str == "Radeon HD8490".substring(0, 14)){
        return res.json({
         score:'272'
        })
        }
        
        if(str == "Radeon HD 7640G + 7670M Dual".substring(0, 14)){
        return res.json({
         score:'266'
        })
        }
        
        if(str == "Radeon HD 7640G".substring(0, 14)){
        return res.json({
         score:'265'
        })
        }
        
        if(str == "Radeon HD 7610M".substring(0, 14)){
        return res.json({
         score:'263'
        })
        }
        
        if(str == "Radeon HD 7500G + 7550M Dual".substring(0, 14)){
        return res.json({
         score:'263'
        })
        }
        
        if(str == "Radeon HD 6620G".substring(0, 14)){
        return res.json({
         score:'263'
        })
        }
        
        if(str == "GeForce 615".substring(0, 14)){
        return res.json({
         score:'263'
        })
        }
        
        if(str == "Quadro 500M".substring(0, 14)){
        return res.json({
         score:'262'
        })
        }
        
        if(str == "Radeon HD 7600G".substring(0, 14)){
        return res.json({
         score:'261'
        })
        }
        
        if(str == "Radeon HD 8490".substring(0, 14)){
        return res.json({
         score:'261'
        })
        }
        
        if(str == "Radeon HD 7640G + 7650M Dual".substring(0, 14)){
        return res.json({
         score:'259'
        })
        }
        
        if(str == "Radeon HD 7640G + 8670M Dual".substring(0, 14)){
        return res.json({
         score:'258'
        })
        }
        
        if(str == "Radeon HD 8550G + 8670M Dual".substring(0, 14)){
        return res.json({
         score:'258'
        })
        }
        
        if(str == "SUMO 964A".substring(0, 14)){
        return res.json({
         score:'257'
        })
        }
        
        if(str == "Radeon R5 235X".substring(0, 14)){
        return res.json({
         score:'256'
        })
        }
        
        if(str == "Radeon HD 7640G + 7500M/7600M Dual".substring(0, 14)){
        return res.json({
         score:'256'
        })
        }
        
        if(str == "Radeon HD 7640G + 8500M Dual".substring(0, 14)){
        return res.json({
         score:'255'
        })
        }
        
        if(str == "Radeon HD 7640G N HD 7640G + HD 7670M Dual".substring(0, 14)){
        return res.json({
         score:'254'
        })
        }
        
        if(str == "GeForce GT 625".substring(0, 14)){
        return res.json({
         score:'254'
        })
        }
        
        if(str == "Radeon HD 7670M + 7670M Dual".substring(0, 14)){
        return res.json({
         score:'253'
        })
        }
        
        if(str == "Radeon HD 8570D + HD 8470 Dual".substring(0, 14)){
        return res.json({
         score:'253'
        })
        }
        
        if(str == "Radeon HD 7640G + 7690M Dual".substring(0, 14)){
        return res.json({
         score:'253'
        })
        }
        
        if(str == "Mobile Intel HD".substring(0, 14)){
        return res.json({
         score:'253'
        })
        }
        
        if(str == "Radeon HD 7640G + 7450M Dual".substring(0, 14)){
        return res.json({
         score:'252'
        })
        }
        
        if(str == "Radeon HD 7640G + 7700M Dual".substring(0, 14)){
        return res.json({
         score:'250'
        })
        }
        
        if(str == "Radeon HD 7600G + HD Dual".substring(0, 14)){
        return res.json({
         score:'250'
        })
        }
        
        if(str == "Radeon R3".substring(0, 14)){
        return res.json({
         score:'249'
        })
        }
        
        if(str == "Radeon HD 7640G + 8750M Dual".substring(0, 14)){
        return res.json({
         score:'249'
        })
        }
        
        if(str == "GeForce 610M".substring(0, 14)){
        return res.json({
         score:'249'
        })
        }
        
        if(str == "Radeon HD 7560D + HD 7000 Dual".substring(0, 14)){
        return res.json({
         score:'249'
        })
        }
        
        if(str == "IncrediblE HD 4600".substring(0, 14)){
        return res.json({
         score:'248'
        })
        }
        
        if(str == "GeForce GT 420".substring(0, 14)){
        return res.json({
         score:'247'
        })
        }
        
        if(str == "Radeon HD 7500G + 7500M/7600M Dual".substring(0, 14)){
        return res.json({
         score:'246'
        })
        }
        
        if(str == "Radeon HD 6530D".substring(0, 14)){
        return res.json({
         score:'245'
        })
        }
        
        if(str == "7900 MOD - Radeon HD 6520G".substring(0, 14)){
        return res.json({
         score:'245'
        })
        }
        
        if(str == "Radeon HD 7640G + 8570M Dual".substring(0, 14)){
        return res.json({
         score:'245'
        })
        }
        
        if(str == "Radeon HD 7470".substring(0, 14)){
        return res.json({
         score:'244'
        })
        }
        
        if(str == "Intel Skylake HD DT GT2".substring(0, 14)){
        return res.json({
         score:'244'
        })
        }
        
        if(str == "Radeon HD 7640G + 7500/7600 Dual".substring(0, 14)){
        return res.json({
         score:'243'
        })
        }
        
        if(str == "Intel HD 500".substring(0, 14)){
        return res.json({
         score:'243'
        })
        }
        
        if(str == "Radeon HD 8470".substring(0, 14)){
        return res.json({
         score:'243'
        })
        }
        
        if(str == "Radeon R5E".substring(0, 14)){
        return res.json({
         score:'243'
        })
        }
        
        if(str == "Radeon HD 7540D + HD 6450 Dual".substring(0, 14)){
        return res.json({
         score:'241'
        })
        }
        
        if(str == "Radeon HD 8400".substring(0, 14)){
        return res.json({
         score:'241'
        })
        }
        
        if(str == "Radeon HD 8550G + 8600M Dual".substring(0, 14)){
        return res.json({
         score:'241'
        })
        }
        
        if(str == "GeForce GT 610".substring(0, 14)){
        return res.json({
         score:'237'
        })
        }
        
        if(str == "Radeon R5 310".substring(0, 14)){
        return res.json({
         score:'237'
        })
        }
        
        if(str == "Radeon HD 8450G".substring(0, 14)){
        return res.json({
         score:'236'
        })
        }
        
        if(str == "Radeon R5 235".substring(0, 14)){
        return res.json({
         score:'234'
        })
        }
        
        if(str == "Radeon HD 7600G + 7450M Dual".substring(0, 14)){
        return res.json({
         score:'234'
        })
        }
        
        if(str == "Radeon HD 7520G + 7600M Dual".substring(0, 14)){
        return res.json({
         score:'234'
        })
        }
        
        if(str == "GeForce GT 520M".substring(0, 14)){
        return res.json({
         score:'233'
        })
        }
        
        if(str == "Radeon HD 8450G + 8670M Dual".substring(0, 14)){
        return res.json({
         score:'232'
        })
        }
        
        if(str == "Radeon HD 7640G + HD 7400M Dual".substring(0, 14)){
        return res.json({
         score:'231'
        })
        }
        
        if(str == "Radeon HD 7640G + 7610M Dual".substring(0, 14)){
        return res.json({
         score:'231'
        })
        }
        
        if(str == "Radeon HD 7640G + HD 8500M N HD 8500M Dual".substring(0, 14)){
        return res.json({
         score:'231'
        })
        }
        
        if(str == "GeForce GT 520".substring(0, 14)){
        return res.json({
         score:'230'
        })
        }
        
        if(str == "Radeon HD 7640G + HD 8570M Dual".substring(0, 14)){
        return res.json({
         score:'229'
        })
        }
        
        if(str == "Mobility Radeon HD 4250".substring(0, 14)){
        return res.json({
         score:'229'
        })
        }
        
        if(str == "Radeon HD 7600G + 6400M Dual".substring(0, 14)){
        return res.json({
         score:'228'
        })
        }
        
        if(str == "Radeon HD 8450G + 8750M Dual".substring(0, 14)){
        return res.json({
         score:'228'
        })
        }
        
        if(str == "Radeon HD 8450G + 8600M Dual".substring(0, 14)){
        return res.json({
         score:'226'
        })
        }
        
        if(str == "Radeon HD 8570D + HD8490 Dual".substring(0, 14)){
        return res.json({
         score:'226'
        })
        }
        
        if(str == "Radeon HD 7520G + 7670M Dual".substring(0, 14)){
        return res.json({
         score:'224'
        })
        }
        
        if(str == "PHDGD Ivy 5".substring(0, 14)){
        return res.json({
         score:'223'
        })
        }
        
        if(str == "Radeon HD 7520G".substring(0, 14)){
        return res.json({
         score:'222'
        })
        }
        
        if(str == "Radeon HD 7520G + HD 7400M Dual".substring(0, 14)){
        return res.json({
         score:'222'
        })
        }
        
        if(str == "Radeon HD 7640G N HD 7640G + HD 8570M Dual".substring(0, 14)){
        return res.json({
         score:'221'
        })
        }
        
        if(str == "Radeon HD 7640G + 6400M Dual".substring(0, 14)){
        return res.json({
         score:'221'
        })
        }
        
        if(str == "RADEON HD6530D".substring(0, 14)){
        return res.json({
         score:'221'
        })
        }
        
        if(str == "Radeon HD 7640G + 7470M Dual".substring(0, 14)){
        return res.json({
         score:'220'
        })
        }
        
        if(str == "Radeon R5 230".substring(0, 14)){
        return res.json({
         score:'219'
        })
        }
        
        if(str == "Radeon HD 7640G + 7400M Dual".substring(0, 14)){
        return res.json({
         score:'219'
        })
        }
        
        if(str == "Radeon HD 8330E".substring(0, 14)){
        return res.json({
         score:'219'
        })
        }
        
        if(str == "Radeon HD 8400E".substring(0, 14)){
        return res.json({
         score:'215'
        })
        }
        
        if(str == "Radeon HD 7520G N HD 7520G + HD 7500/7600 7500/760".substring(0, 14)){
        return res.json({
         score:'214'
        })
        }
        
        if(str == "GeForce 800A".substring(0, 14)){
        return res.json({
         score:'214'
        })
        }
        
        if(str == "Radeon HD 8350G".substring(0, 14)){
        return res.json({
         score:'213'
        })
        }
        
        if(str == "GeForce 810M".substring(0, 14)){
        return res.json({
         score:'212'
        })
        }
        
        if(str == "Radeon HD 7520G + 7470M Dual".substring(0, 14)){
        return res.json({
         score:'211'
        })
        }
        
        if(str == "Radeon HD 7520G + 8750M Dual".substring(0, 14)){
        return res.json({
         score:'211'
        })
        }
        
        if(str == "Radeon HD 7520G + HD 8600/8700M Dual".substring(0, 14)){
        return res.json({
         score:'211'
        })
        }
        
        if(str == "Radeon HD 8690A".substring(0, 14)){
        return res.json({
         score:'210'
        })
        }
        
        if(str == "Radeon HD 6470M".substring(0, 14)){
        return res.json({
         score:'208'
        })
        }
        
        if(str == "Radeon HD 8370D".substring(0, 14)){
        return res.json({
         score:'208'
        })
        }
        
        if(str == "Radeon HD 6520G".substring(0, 14)){
        return res.json({
         score:'208'
        })
        }
        
        if(str == "IncrediblE HD 4000".substring(0, 14)){
        return res.json({
         score:'207'
        })
        }
        
        if(str == "Radeon R2".substring(0, 14)){
        return res.json({
         score:'207'
        })
        }
        
        if(str == "Radeon HD 7520G + 7610M Dual".substring(0, 14)){
        return res.json({
         score:'206'
        })
        }
        
        if(str == "Radeon HD 8330".substring(0, 14)){
        return res.json({
         score:'205'
        })
        }
        
        if(str == "Radeon HD 7450".substring(0, 14)){
        return res.json({
         score:'204'
        })
        }
        
        if(str == "Intel Media Accelerator HD".substring(0, 14)){
        return res.json({
         score:'203'
        })
        }
        
        if(str == "Radeon HD 7620G N HD 7620G + HD 8600M N HD 8600M D".substring(0, 14)){
        return res.json({
         score:'201'
        })
        }
        
        if(str == "Radeon HD 7480D".substring(0, 14)){
        return res.json({
         score:'200'
        })
        }
        
        if(str == "Radeon HD 7520G N HD 7520G + HD 7600M N HD 7600M D".substring(0, 14)){
        return res.json({
         score:'200'
        })
        }
        
        if(str == "Radeon HD 7520G + 7500/7600 Dual".substring(0, 14)){
        return res.json({
         score:'200'
        })
        }
        
        if(str == "Radeon HD 7660G + HD 7600M N HD 7600M Dual".substring(0, 14)){
        return res.json({
         score:'198'
        })
        }
        
        if(str == "GRID K180Q".substring(0, 14)){
        return res.json({
         score:'195'
        })
        }
        
        if(str == "GRID K160Q".substring(0, 14)){
        return res.json({
         score:'195'
        })
        }
        
        if(str == "Radeon HD 6450".substring(0, 14)){
        return res.json({
         score:'193'
        })
        }
        
        if(str == "Radeon HD 8280E".substring(0, 14)){
        return res.json({
         score:'193'
        })
        }
        
        if(str == "Radeon HD 8410G".substring(0, 14)){
        return res.json({
         score:'191'
        })
        }
        
        if(str == "Radeon HD 7600G + 7550M Dual".substring(0, 14)){
        return res.json({
         score:'190'
        })
        }
        
        if(str == "M880G with Mobility Radeon HD 4250".substring(0, 14)){
        return res.json({
         score:'187'
        })
        }
        
        if(str == "Radeon HD 7500G".substring(0, 14)){
        return res.json({
         score:'186'
        })
        }
        
        if(str == "Mobility Radeon HD 5000 Serisi".substring(0, 14)){
        return res.json({
         score:'183'
        })
        }
        
        if(str == "Radeon HD 7420G".substring(0, 14)){
        return res.json({
         score:'181'
        })
        }
        
        if(str == "GeForce GTS 250".substring(0, 14)){
        return res.json({
         score:'180'
        })
        }
        
        if(str == "GeForce 605".substring(0, 14)){
        return res.json({
         score:'177'
        })
        }
        
        if(str == "Radeon HD 7600G + 7500M/7600M Dual".substring(0, 14)){
        return res.json({
         score:'177'
        })
        }
        
        if(str == "Radeon HD 6480G".substring(0, 14)){
        return res.json({
         score:'176'
        })
        }
        
        if(str == "IncrediblE HD".substring(0, 14)){
        return res.json({
         score:'176'
        })
        }
        
        if(str == "Radeon HD 7520G + 7650M Dual".substring(0, 14)){
        return res.json({
         score:'175'
        })
        }
        
        if(str == "GRID K120Q".substring(0, 14)){
        return res.json({
         score:'174'
        })
        }
        
        if(str == "Radeon HD 7600G + 8500M/8700M Dual".substring(0, 14)){
        return res.json({
         score:'172'
        })
        }
        
        if(str == "HD6450".substring(0, 14)){
        return res.json({
         score:'172'
        })
        }
        
        if(str == "Radeon HD 6410D".substring(0, 14)){
        return res.json({
         score:'170'
        })
        }
        
        if(str == "GeForce 410M".substring(0, 14)){
        return res.json({
         score:'169'
        })
        }
        
        if(str == "SUMO 9644".substring(0, 14)){
        return res.json({
         score:'168'
        })
        }
        
        if(str == "RADEON HD6410D".substring(0, 14)){
        return res.json({
         score:'166'
        })
        }
        
        if(str == "Radeon HD 7580D".substring(0, 14)){
        return res.json({
         score:'166'
        })
        }
        
        if(str == "Radeon HD 7450A".substring(0, 14)){
        return res.json({
         score:'165'
        })
        }
        
        if(str == "Radeon E6460".substring(0, 14)){
        return res.json({
         score:'164'
        })
        }
        
        if(str == "Radeon HD 8280".substring(0, 14)){
        return res.json({
         score:'164'
        })
        }
        
        if(str == "Radeon HD 6450A".substring(0, 14)){
        return res.json({
         score:'163'
        })
        }
        
        if(str == "Radeon HD 8310E".substring(0, 14)){
        return res.json({
         score:'162'
        })
        }
        
        if(str == "GeForce 510".substring(0, 14)){
        return res.json({
         score:'160'
        })
        }
        
        if(str == "Matrox G200eR WDDM 2.0".substring(0, 14)){
        return res.json({
         score:'158'
        })
        }
        
        if(str == "Radeon HD 7400G".substring(0, 14)){
        return res.json({
         score:'150'
        })
        }
        
        if(str == "Radeon HD 8250".substring(0, 14)){
        return res.json({
         score:'149'
        })
        }
        
        if(str == "Radeon HD 7640G + HD 7600M N HD 7600M Dual".substring(0, 14)){
        return res.json({
         score:'146'
        })
        }
        
        if(str == "Radeon R2E".substring(0, 14)){
        return res.json({
         score:'145'
        })
        }
        
        if(str == "Radeon HD 8280G".substring(0, 14)){
        return res.json({
         score:'142'
        })
        }
        
        if(str == "Radeon HD 6370D".substring(0, 14)){
        return res.json({
         score:'141'
        })
        }
        
        if(str == "Radeon HD 8240".substring(0, 14)){
        return res.json({
         score:'139'
        })
        }
        
        if(str == "Radeon HD 6430M".substring(0, 14)){
        return res.json({
         score:'138'
        })
        }
        
        if(str == "Radeon HD 7660D + HD 7400 Dual".substring(0, 14)){
        return res.json({
         score:'138'
        })
        }
        
        if(str == "GeForce 800M".substring(0, 14)){
        return res.json({
         score:'136'
        })
        }
        
        if(str == "Intel 4th Generation Haswell HD".substring(0, 14)){
        return res.json({
         score:'133'
        })
        }
        
        if(str == "Matrox G200eh WDDM 2.0".substring(0, 14)){
        return res.json({
         score:'131'
        })
        }
        
        if(str == "PHDGD Ivy 4".substring(0, 14)){
        return res.json({
         score:'129'
        })
        }
        
        if(str == "Radeon R5 M435".substring(0, 14)){
        return res.json({
         score:'127'
        })
        }
        
        if(str == "RADEON HD6370D".substring(0, 14)){
        return res.json({
         score:'126'
        })
        }
        
        if(str == "Intel HD manual-gen9_2015-133271".substring(0, 14)){
        return res.json({
         score:'124'
        })
        }
        
        if(str == "Radeon 520".substring(0, 14)){
        return res.json({
         score:'124'
        })
        }
        
        if(str == "Radeon RX 640".substring(0, 14)){
        return res.json({
         score:'119'
        })
        }
        
        if(str == "Matrox G200eR WDDM 1.2".substring(0, 14)){
        return res.json({
         score:'119'
        })
        }
        
        if(str == "A6 Micro-6500T Quad-Core APU with RadeonR4".substring(0, 14)){
        return res.json({
         score:'117'
        })
        }
        
        if(str == "GeForce GT 415M".substring(0, 14)){
        return res.json({
         score:'111'
        })
        }
        
        if(str == "/ Mobility/Radeon HD 5000/5400/5450/R5 220".substring(0, 14)){
        return res.json({
         score:'104'
        })
        }
        
        if(str == "Mobility Radeon HD 5470".substring(0, 14)){
        return res.json({
         score:'95'
        })
        }
        
        if(str == "Radeon HD 7340".substring(0, 14)){
        return res.json({
         score:'93'
        })
        }
        
        if(str == "Radeon R5 M320".substring(0, 14)){
        return res.json({
         score:'91'
        })
        }
        
        if(str == "Radeon HD 7340M".substring(0, 14)){
        return res.json({
         score:'90'
        })
        }
        
        if(str == "Matrox G200eW WDDM 1.2".substring(0, 14)){
        return res.json({
         score:'84'
        })
        }
        
        if(str == "Radeon HD 8350".substring(0, 14)){
        return res.json({
         score:'83'
        })
        }
        
        if(str == "Radeon HD 7350".substring(0, 14)){
        return res.json({
         score:'80'
        })
        }
        
        if(str == "RADEON HD 6350".substring(0, 14)){
        return res.json({
         score:'78'
        })
        }
        
        if(str == "Radeon HD 7340G".substring(0, 14)){
        return res.json({
         score:'75'
        })
        }
        
        if(str == "FirePro 2270".substring(0, 14)){
        return res.json({
         score:'73'
        })
        }
        
        if(str == "Matrox G200eR".substring(0, 14)){
        return res.json({
         score:'69'
        })
        }
        
        if(str == "Radeon HD 6320 Graphic".substring(0, 14)){
        return res.json({
         score:'67'
        })
        }
        
        if(str == "Radeon E6465".substring(0, 14)){
        return res.json({
         score:'67'
        })
        }
        
        if(str == "Quadro FX 580".substring(0, 14)){
        return res.json({
         score:'60'
        })
        }
        
        if(str == "Matrox G200eh".substring(0, 14)){
        return res.json({
         score:'60'
        })
        }
        
        if(str == "Radeon HD 6250".substring(0, 14)){
        return res.json({
         score:'59'
        })
        }
        
        if(str == "GeForce 8400 GS".substring(0, 14)){
        return res.json({
         score:'57'
        })
        }
        
        if(str == "Radeon HD 7310M".substring(0, 14)){
        return res.json({
         score:'53'
        })
        }
        
        if(str == "GeForce 9500 GT".substring(0, 14)){
        return res.json({
         score:'50'
        })
        }
        
        if(str == "Radeon HD 6290".substring(0, 14)){
        return res.json({
         score:'48'
        })
        }
        
        if(str == "Quadro FX 880M".substring(0, 14)){
        return res.json({
         score:'41'
        })
        }
        
        if(str == "Red Hat QXL controller".substring(0, 14)){
        return res.json({
         score:'34'
        })
        }
        
        if(str == "GeForce 8600 GT".substring(0, 14)){
        return res.json({
         score:'30'
        })
        }
        
        if(str == "OpenXT Display Driver".substring(0, 14)){
        return res.json({
         score:'21'
        })
        }
        
        if(str == "VIA/S3G C-645/640 GPU".substring(0, 14)){
        return res.json({
         score:'21'
        })
        }
        
        if(str == "QXL KMDOD".substring(0, 14)){
        return res.json({
         score:'10'
        })
        }
        
        if(str == "ION".substring(0, 14)){
        return res.json({
         score:'9'
        })
        }
        
        
})



module.exports = router;