contactsApp.getDataFromServer = (function () {

    function writeServer(newContact) {
        $.ajax({
            type: "POST",
            url: 'http://localhost:51057/api/contact',
            data: JSON.stringify(newContact),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function () {
                alert("Success");
            },
            error: function () {
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
        var id = selectedRow.dataset.key;
        var arrayIndex = id - 1;
        var obj;

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

        obj = JSON.stringify(contactsArray[arrayIndex]);

        $.ajax({
            url: 'http://localhost:51057/api/contact/' + id,
            type: 'PUT',
            data: obj,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: handleData
        });

        function handleData(obj) {
            alert(obj);
        }

    }

    return {
        getContacts: function (callback) {
            $.ajax({
                url: 'http://localhost:51057/api/contact',
                type: 'Get',
                success: function (data) {
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
        updateToServer: function () {
            updateContact();
        }

    }
})();