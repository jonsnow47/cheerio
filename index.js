const axios = require('axios')
const cheerio = require('cheerio')
const request = require('request')
// const { response } = require('express')
// const express = require('express')

request('https://www.theguardian.com/international', (error,
response,html) => {
    if (!error && response.statusCode == 200){
        const $ = cheerio.load(html); 
        const articles =[]
        const siteHeadings = $('#bannerandheader');
        
        // console.log(siteHeadings.html());
        // console.log(siteHeadings.text());
        const result = siteHeadings.find('h1').text();
        // articles.push({title,url})

        console.log(result);
        
    }
});