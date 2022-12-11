let http = require('http'),
	path = require('path'),
	express = require('express'),
	Access = require('./model/Access'),
	Consult = require('./model/Consult'),
	session = require('express-session'),
	app = express();

const PORT = process.env.PORT || 5000

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'view'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));
app.use(session({
	secret: 'super secret session key',
	resave: false,
	saveUninitialized: true,
	cookie: {secure: false}
}));
app.engine('html', require('ejs').renderFile);

app.get('/home', (req, res) => {
	res.render('index');
});

app.post('/home', async (req, res) => {
	const email = req.body.email,
		password = req.body.senha,
		botao_login = req.body.botao_login,
		botao_cadastrar = req.body.botao_cadastrar;
	
	let check_email = await Access.checkData(email);
	let check_password = await Access.checkData(password);

	if (!check_email) {
		res.render('index_erro_campo_login');
	} else if (!check_password) {
		res.render('index_erro_campo_login');
	} else if (botao_login) {
		login_result = await Access.Login(email, password);
		if (login_result) {
			const post_text = req.query.post_text;
			posts = await Consult.Search(post_text);
			res.render('index_logado', {posts: posts});
		}
		else
			res.render('index_erro_usuario_not_found');
	} else if (botao_cadastrar) {
		login_result = await Access.Register(email, password);
		if (login_result)
			res.render('index_logado');
		else
			res.render('index_erro_usuario_ja_cadastrado');
	}
});

app.get('/search', async (req, res) => {
	const search_text = req.query.search_text;
	posts = await Consult.Search(search_text);
	console.log(posts)
	res.render('index_logado', {posts: posts});
});

app.post('/post', async (req, res) => {
	const text = req.body.post_text,
		image = req.body.post_image,
		video = req.body.post_video;

	console.log(text, image, video)

	if ((!text)&&(!image)&&(!video)) {
		res.render('index_erro_campo_login');
	} else {
		posts = await Consult.Post(text, image, video);
		console.log(posts)
		res.render('index_logado', {posts: posts});
	}
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
