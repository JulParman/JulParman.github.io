contactsApp.getDataFromServer = (function () {

    return{
        getContacts: function () {
            return $.ajax({
                url: "http://localhost:51057/api/contact",
                type: 'GET',
                success: function(data) {
                     //JSON.stringify(data);
                }
            });
        }

    }
    })();