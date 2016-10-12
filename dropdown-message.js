var DropdownMessage = {
    session: 'dropdownMessageShown',
    init: function() {
        this.checkSession();
    },
    el: document.querySelector('[data-hook="dropdown-message"]'),
    show: function() {
        $(this.el).prependTo('body').hide().slideDown(function() {
            DropdownMessage.handleClose();
        });
    },
    checkSession: function() {
        if (sessionStorage.getItem(this.session) === null) this.show();
    },
    handleClose: function() {
        var x = document.querySelector('[data-hook="dropdown-message__close"]');
        x.addEventListener('click', function() {
            DropdownMessage.createSession(this.session, 'true');
            var el = DropdownMessage.el;
            $(el).slideUp();
        });
    },
    createSession: function(key, value) {
        sessionStorage.setItem(key, value);
    }
}
DropdownMessage.init();