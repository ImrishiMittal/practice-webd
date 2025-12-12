exports.pageNotFound = (req, res) => {
    res.status(404).render("Error", {
        pageTitle: "404 - Page Not Found"
    });
}