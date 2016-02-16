var LocalStorage = function() {

    this.getUsers = function () {
        $.ajax({
            type: "GET",
            dataType: 'json',
            url: 'http://bujitsudo.neos/authentication/api/v1/json-ld/users',
            success: function(data) {
                window.localStorage.setItem('users', data.users);
            },
            error: function() {
                console.error('Error occured');
            }
        });
    };

    this.initialize = function() {
        this.getUsers();
    };

    this.initialize();

};