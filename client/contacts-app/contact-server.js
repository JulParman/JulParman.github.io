contactsApp.getDataFromServer = (function () {
    $.get("/api/contact", function (data) {
            $(".result").html(data);
            alert("Load was performed.");
        });
    return{
        loadServerData: function () {
            $.get();
        }
    }
    })();