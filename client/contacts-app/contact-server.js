contactsApp.getDataFromServer = (function () {

    function writeServer(newContact) {
        $.ajax({
            type: "POST",
            url: 'http://localhost:51057/api/contact',
            data: JSON.stringify(newContact),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (newContact) {
                alert("Success");
            },
            error: function (newContact) {
                alert("Error");
            }
        });

    }

    function deleteContact() {
        var selectedRow = document.querySelector(".is-checked").parentNode.parentNode;
        var data = selectedRow.dataset.key;

        $.ajax({
            type: "DELETE",
            url: 'http://localhost:51057/api/contact/' + data,
            contentType: "application/json; charset=utf-8",
            dataType: "text",
            success: function () {

            }
        });

    }

    function updateContact() {
        var selectedRow = document.querySelector(".is-checked").parentNode.parentNode;
        var data = selectedRow.dataset.key;
        var arrayIndex = data - 1;
        var obj = {};

        var firstName = document.getElementById('txtfname').value;
        var lastName = document.getElementById('txtlname').value;
        var phone = document.getElementById('txtphone').value;
        var address = document.getElementById('txtaddress').value;
        var city = document.getElementById('txtcity').value;

        if (selectedRow) {

            if (firstName) {
                contactsArray[arrayIndex].firstName = firstName;
            }
            if (lastName) {
                contactsArray[arrayIndex].lastName = lastName;
            }
            if (phone) {
                contactsArray[arrayIndex].phone = phone;
            }
            if (address) {
                contactsArray[arrayIndex].address = address;
            }
            if (city) {
                contactsArray[arrayIndex].city = city;
            }
        }
        obj = contactsArray[arrayIndex];

        $.ajax({
            type: "PUT",
            url: 'http://localhost:51057/api/contact/' + data,
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function () {
                
            }

        });

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
        writeToServer: function (newContact) {
            writeServer(newContact);
        },
        deleteToServer: function () {
            deleteContact();
        },
        updateToServer:function () {
            updateContact();
        }

    }
})();