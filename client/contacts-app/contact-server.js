contactsApp.getDataFromServer = (function () {

    function writeServer(contactsArray) {
        var newContact = contactsApp.contacts();
        contactsArray.push(newContact);
        localStorage.setItem(localStorageKey, JSON.stringify(contactsArray));

    }

    return {
        getContacts: function (callback) {
            $.ajax({
                url: 'http://localhost:51057/api/contact',
                type: 'Get',
                success: function (data) {
 /*                   for (var i = 0; i < data.length; i++) {
                       res.push(data[i]);
                    }*/
                    callback(data);
                }

            });

        },
        writeToServer: function () {
            writeServer();
        }


    }
})();