var projectJson = require('../projects.json')

exports.home = function(req, res) {
  res.render('home', {
    title: "Dexter Moran"});
};

exports.about = function(req, res) {
  res.render('about', {
    title: "About"
  });
}

exports.contact = function(req, res) {
  res.render('contact', {
    title: "Contact"
  });
}

exports.projects = function(req, res) {
  var projects = projectJson.projects
  res.render('projects', {
    title: "Projects",
    projects: projects
  });
}

exports.projectSingle = function(req, res) {
  var projectId = req.params.id
  var project = projectJson.projects[projectId - 1]

  if(projectId >= 1 && projectId <= 2){
    res.render('projectSingle', {
      title: project.title
    });
  } else {
    res.render('notFound', {
      title: "not found"
    })
  }
}

exports.notFound = function(req, res){
  res.render('notFound', {
    title: "This is not the page you are looking for."
  })
};
