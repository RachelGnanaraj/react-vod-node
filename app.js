const express = require('express');
const fs = require('fs');
const cors = require('cors')
const axios = require('axios')
const app = express();
const videoMapper = require('./src/videoMapper.js')

const ENDPOINT = 'https://demo2697834.mockable.io/movies'

const PORT = process.env.PORT || 3000

app.use(cors())

app.get('/api/videos', (req, res) => {
	axios({
		method:'get',
		url: ENDPOINT
	})
	.then(function(response) {
		const movies = videoMapper(response.data.entries)
		res.send({movies: movies})
	});
});

app.get('/', (req, res) => res.send('Connection Established!'))

app.listen(PORT, function () {
	console.log('Server listening on port 3000');
});
