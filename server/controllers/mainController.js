/**
 * GET /
 * Homepage 
*/
exports.homepage = async (req, res) => {
  const locals = {
    title: "NoteWise",
    description: "Free NodeJS Notes App.",
    isSel: [1, 3, 3, 3],
  }
  res.render('index', {
    locals,
    layout: '../views/layouts/front-page'
  });
}


/**
 * GET /
 * About 
*/
exports.about = async (req, res) => {
  const locals = {
    title: "NoteWise - About",
    description: "Free NodeJS Notes App.",
    isSel: [3, 3, 3, 1],
  }
  res.render('about', locals);
}

exports.features = async (req, res) => {
  const locals = {
    title: "NoteWise - Features",
    description: "Free NodeJS Notes App.",
    isSel: [3, 1, 3, 3],
  }
  res.render('features', locals);
}