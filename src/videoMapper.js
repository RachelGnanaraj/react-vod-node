module.exports = function(entries) {
    return entries.map((e, index) => {
        return ({
            id: index,
            title: e.title,
            description: e.description,
            url: e.contents[0].url
        })
    })
}