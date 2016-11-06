var searchIndex = [
    'Vltava',
    'Labe',
    'Morava',
    'Ohře',
    'Sázava',
    'Dyje',
    'Jihlava',
    'Svratka',
    'Jizera',
    'Lužnice',
    'Berounka',
    'Odra',
    'Otava',
    'Opava',
    'Radbuza',
    'Chrudimka',
    'Úhlava',
    'Mže',
    'Želivka',
    'Tichá Orlice',
    'Střela',
    'Ploučnice',
    'Moravice',
    'Oslava',
    'Úslava',
    'Svitava',
    'Divoká Orlice',
    'Blanice',
    'Malše',
    'Doubrava',
    'Rokytná',
    'Kyjovka',
    'Cidlina',
    'Bílina',
    'Jevišovka',
    'Loučná',
    'Metuje',
    'Úpa',
    'Olše',
    'Blanice',
    'Loděnice',
    'Teplá',
    'Bystřice',
    'Bobrůvka',
    'Výrovka',
    'Bečva',
    'Vsetínská Bečva',
    'Lomnice',
    'Litava',
    'Stropnice',
    'Dědina',
    'Trnava',
    'Bystřice',
    'Nežárka',
    'Želetavka',
    'Moravská Dyje',
    'Lužická Nisa',
    'Litavka',
    'Ostravice',
    'Teplá Vltava',
    'Moravská Sázava',
    'Skalice',
    'Klabava',
    'Blšanka',
    'Oskava',
    'Chomutovka',
    'Mrlina',
    'Romže',
    'Novohradka',
    'Třebůvka',
    'Smutná',
    'Smědá',
    'Kocába',
    'Liboc',
    'Volyňka',
    'Moštěnka',
    'Blata',
    'Třemošná',
    'Olšava',
    'Desná',
    'Trkmanka',
    'Dřevnice',
    'Mohelka',
    'Úhlavka',
    'Ostružná',
    'Třebovka',
    'Bělá',
    'Klejnárka',
    'Velička',
    'Merklínka',
    'Javorka',
    'Šlapanka',
    'Říčka',
    'Lučina',
    'Rožnovská Bečva',
    'Libochovka',
    'Kamenice',
    'Bobrava',
    'Vlkava',
    'Rokytka',
    'Haná',
    'Osoblaha',
    'Stěnava',
    'Orlice',
    'Šatava',
    'Flájský potok',
    'Spůlka'
];

var input = document.getElementById("searchBox"),
    ul = document.getElementById("searchResults"),
    inputTerms,
    termsArray,
    prefix,
    terms,
    results,
    sortedResults;

var search = function() {
    inputTerms = input.value.toLowerCase();
    results = [];
    termsArray = inputTerms.split(' ');
    prefix = termsArray.length === 1
        ? ''
        : termsArray.slice(0, -1).join(' ') + ' ';
    terms = termsArray[termsArray.length - 1].toLowerCase();

    for (var i = 0; i < searchIndex.length; i++) {
        var a = searchIndex[i].toLowerCase(),
            x = searchIndex[i],
            t = a.indexOf(terms);

        if (t > -1) {
            results.push(x);
        }
    }

    evaluateResults();
};

var evaluateResults = function() {
    if (results.length > 0 && inputTerms.length > 0 && terms.length !== 0) {
        sortedResults = results.sort(sortResults);
        appendResults();
    } else if (inputTerms.length > 0 && terms.length !== 0) {
        clearResults();

    } else if (inputTerms.length !== 0 && terms.length === 0) {
        return;
    } else {
        clearResults();
    }
};

var sortResults = function(a, b) {
    if (a.indexOf(terms) < b.indexOf(terms))
        return -1;
    if (a.indexOf(terms) > b.indexOf(terms))
        return 1;
    return 0;
}

var appendResults = function() {
    clearResults();

    for (var i = 0; i < sortedResults.length && i < 10; i++) {
        var li = document.createElement("li"),
            result = prefix + sortedResults[i];

        li.addEventListener("click", setSearchBoxValue);
        li.innerHTML = result;
        ul.appendChild(li);
    }

    if (ul.className !== "term-list") {
        ul.className = "term-list";
    }
};

var clearResults = function() {
    ul.className = "term-list hidden";
    ul.innerHTML = '';
};

var setSearchBoxValue = function() {
    document.getElementById("searchBox").value = this.innerHTML;
};

input.addEventListener("keyup", search, false);
