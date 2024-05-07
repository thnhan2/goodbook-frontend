function compareByCreatedAt(bookA, bookB) {
    const createdAtA = new Date(bookA.createdAt);
    const createdAtB = new Date(bookB.createdAt);

    if (createdAtA < createdAtB) {
        return 1;
    } else if (createdAtA > createdAtB) {
        return -1;
    } else {
        return 0;
    }
}

module.exports = compareByCreatedAt;
