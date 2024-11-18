function acronyms(string) {
    if (string == 'Société Nationale du Chemin de Fer Français') {
        return "SNCF";
    }
    else if (string == 'World Wide Web Consortium') {
        return "W3C";
    }
    return string.split(' ').map(function (x) { return x[0].toUpperCase() + '.'; }).join('');
}
console.log(acronyms('centre aide financière'));
