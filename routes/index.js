
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

/*
 * GET other pages.
 */
 
 exports.flot = function(req, res){
   res.render('flot', { title: 'Flot' })
 };
 
 exports.flotr2 = function(req, res){
   res.render('flotr2', { title: 'Flotr2' })
 };
 
 exports.google = function(req, res){
   res.render('google', { title: 'Google Chart Tools' })
 };
 
 exports.dygraphs = function(req, res){
   res.render('dygraphs', { title: 'Dygraphs' })
 };