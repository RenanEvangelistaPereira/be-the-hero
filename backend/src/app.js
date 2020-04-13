const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const rotas = require('./routes');

const app = express();


// app.use(cors({
	// origin : 'http://meuapp.com';
// }));


// // var whitelist = ['http://177.200.40.161', 'http://xbase.com', 'http://localhost:3000', 'http://127.0.0.1:3000'];
  
// //   var corsOptions = { 
// // 	origin: function (origin, callback) {

// // 		if (process.env.NODE_ENV != 'production'){	
// // 		//console.log('NODE_ENV:' + process.env.NODE_ENV);
// // 		console.log('ORIGIN:' + origin);
// // 		//console.log('callback:' + callback);	
// // 	    }

// // 	  if (whitelist.indexOf(origin) !== -1 || 1 === 1  ) {
// // 		callback(null, true)
// // 	  } else {
		
		
// // 		//callback(new Error('Not allowed by CORS'))

// // 		const data = {
// // 			code: 55000, 
// // 			message: `Host ${origin} Não Autorizado!`,
// // 			detail: 'Para efetuar requisições nesta Api é necessário entrar em contato com o administrador. Contato: https://github.com/RenanEvangelistaPereira/be-the-hero'
// // 		 };

// // 		//var res = Response();
// // 		//res.status(400).json(data);

// // 		if (process.env.NODE_ENV != 'production'){
// // 			console.log(data);
// // 		}

// // 		callback( new Error(JSON.stringify(data)), false );
// // 	  }
// // 	},
// // 	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
// // 	credentials: true
// //   }

// // app.use(cors(corsOptions));

app.use(cors());


// app.use(cors({
// 	optionsSuccessStatus: 200,
// 	credentials: true
// }));


app.use(express.json());

// app.use(function(req, res, next) {
// 	//	res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
// 		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// 		next();
// 	  });
	
app.use(rotas);
//app.use(rotas, cors(corsOptions));
app.use(errors());

// This overrides the default error handler, and must be called _last_ on the app
app.use(function customErrorHandler(err, req, res, next) {

	let msg = {};
	try{
		msg = JSON.parse(err.message);
	}
	catch{
		msg.code = -1;
	}
  

	if (process.env.NODE_ENV != 'production'){
		console.log('***************************************');
		console.log(msg.code);
		console.log('***************************************');
	}
	

	if(msg.code == 55000) {
		res.status(401).json( { errorCode: msg.code , message: msg.message, detail: msg.detail } );
	}
	else{
		res.status(401).json( { errorCode: err.code , message: err.message, detail: err.status } );
	}

 });

module.exports = app;

