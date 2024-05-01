/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

const express = require('express');
const path = require('path');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '/index.html'));
});

app.use(express.static(__dirname + '/html'));
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/images'));
app.use(express.static(__dirname + '/javascript'));

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);