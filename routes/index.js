exports.home = function(req, res) {
  res.render('home', {
    title: "Dexter Moran"});
};

exports.notFound = function(req, res){
  res.render('notFound', {
    title: "This is not the page you are looking for."
  })
};
