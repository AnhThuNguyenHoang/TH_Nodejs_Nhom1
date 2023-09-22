const AboutController = (req, res) => {
    return res.render("home", {
        data: {
            title: "XinChao",
            content: "Anh Thư - 2000343",
            page: "about"
        }
    })
}
export default AboutController