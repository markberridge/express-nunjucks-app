const nunjucks = require('nunjucks');

module.exports = (app) => {

  const env = nunjucks.configure('server/views', {
    autoescape: true,
    cache: false,
    express: app
  });
  
  env.addGlobal('year', new Date().getFullYear());

  app.set('view engine', 'njk');

  return nunjucks;
}