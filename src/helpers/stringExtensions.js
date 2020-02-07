String.prototype.extension = function() {
    const strings = this.split(".");
    if (strings.length > 0) {
        return strings[strings.length - 1];
    }
    return strings[0];
}