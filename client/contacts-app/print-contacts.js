contactsApp.printContacts = (function () {
    //var data = [];
    function getContactFromArray(data) {
        //var data = contactsApp.contactLocalStorage.getDataFromLocalStorage();
        //data = contactsApp.getDataFromServer.getContacts();
        //var data = contactsArray;

        var newRow = '';
        var nro = 0;
        for (var i = 0; i < data.length; i++) {
            newRow += "<tr id='" + nro + "'><td><input type='checkbox'>" + "</td>" +
                "<td>" + data[i].firstName + "</td>" +
                "<td>" + data[i].lastName + "</td>" +
                "<td>" + data[i].phone + "</td>" +
                "<td>" + "<a target='_blank' href='https://www.google.com/maps/place/" + data[i].address + "'>" + data[i].address + "</a>" + "</td></tr>";
            //"<td>" + "<a target='_blank' href='https://www.google.com/maps/place/" + data[i].address + "'>" + data[i].address + "</a>" + "</td></tr>";
            nro++;
        }
        var tableElement = document.getElementById('utable');
        tableElement.innerHTML = newRow;

    }

    return {
        printContactsFromArray: function (contactsArray) {
            getContactFromArray(contactsArray);
        }
    }
})();
