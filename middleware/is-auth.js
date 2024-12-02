module.exports = (req, res, next) => {
    // console.log(req);
    if (!req.session.isLoggedIn) {
        console.log('Not Authenticated');
        return res.redirect('/login');
    }
    console.log('Authenticated');
    next();
}