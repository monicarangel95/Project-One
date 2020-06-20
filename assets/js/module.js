var disclaimerModalController = (function() {
    
    return {
        addModalEventListeners: function() {

            var DOM = UIController.getDOMStrings();

            $(DOM.infoBtn).on("click", function() {
                UIController.showModal(DOM.disclaimer);
            });
    
            $(DOM.closeDisclaimer).on("click", function() {
                UIController.hideModal(DOM.disclaimer);
            });
        }
    }
})();