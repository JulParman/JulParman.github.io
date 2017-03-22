contactsApp.printContacts = (function () {

    function getContactFromArray() {
        //var data = contactsApp.contactLocalStorage.getDataFromLocalStorage();
        var data = $.get("/api/contact", function (data) {
            $(".result").html(data);
            alert("Load was performed.");
        });
        var newRow = '';
        var nro = 0;
        for (var i = 0; i < data.length; i++) {
            newRow += "<tr id='" + nro + "'><td>" + data[i].firstName + "</td>" +
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
        getContacts: function () {
            getContactFromArray();
        }
    }
})();
