// the active page will display in bold taxt.
app.get('/listings', (req, res) => {
    res.render('listings/index', { activePage: 'home' });
  });
  
  app.get('/listings/new', (req, res) => {
    res.render('listings/new', { activePage: 'newListing' });
});
  