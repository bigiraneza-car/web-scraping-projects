const fs = require('fs');
const {JSDOM} = require('jsdom');
const jQueryFactory = require('jquery/factory');
const $ = required('jQueryFactory')(new JSDOM("").window);

const dom = fs.readFileSync('dom.html', 'utf-8');
const titles = $(dom).find('.ig-title');