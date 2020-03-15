const express = require('express');
const routes = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "need specific RAM"
    })
})

router.get('/:ram', (req, res, next) => {
    const ramsize = req.params.ram
    switch(ramsize) {

case '1GB':
return res.json({
 score:'1'
})
break;

case '2GB':
return res.json({
 score:'2'
})
break;

case '3GB':
return res.json({
 score:'3'
})
break;

case '4GB':
return res.json({
 score:'4'
})
break;

case '5GB':
return res.json({
 score:'5'
})
break;

case '6GB':
return res.json({
 score:'6'
})
break;

case '7GB':
return res.json({
 score:'7'
})
break;

case '8GB':
return res.json({
 score:'8'
})
break;

case '9GB':
return res.json({
 score:'9'
})
break;

case '10GB':
return res.json({
 score:'10'
})
break;

case '11GB':
return res.json({
 score:'11'
})
break;

case '12GB':
return res.json({
 score:'12'
})
break;

case '13GB':
return res.json({
 score:'13'
})
break;

case '14GB':
return res.json({
 score:'14'
})
break;

case '15GB':
return res.json({
 score:'15'
})
break;

case '16GB':
return res.json({
 score:'16'
})
break;

case '17GB':
return res.json({
 score:'17'
})
break;

case '18GB':
return res.json({
 score:'18'
})
break;

case '19GB':
return res.json({
 score:'19'
})
break;

case '20GB':
return res.json({
 score:'20'
})
break;

case '21GB':
return res.json({
 score:'21'
})
break;

case '22GB':
return res.json({
 score:'22'
})
break;

case '23GB':
return res.json({
 score:'23'
})
break;

case '24GB':
return res.json({
 score:'24'
})
break;

case '25GB':
return res.json({
 score:'25'
})
break;

case '26GB':
return res.json({
 score:'26'
})
break;

case '27GB':
return res.json({
 score:'27'
})
break;

case '28GB':
return res.json({
 score:'28'
})
break;

case '29GB':
return res.json({
 score:'29'
})
break;

case '30GB':
return res.json({
 score:'30'
})
break;

case '31GB':
return res.json({
 score:'31'
})
break;

case '32GB':
return res.json({
 score:'32'
})
break;



    }
})

module.exports = router;