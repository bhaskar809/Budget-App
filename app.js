
 // BUDGET CONTROLLER
var budgerController = (function(){
 
})();


 // UI CONTROLLER
var UIController = (function(){
    var DOMstrings = {
        inputType: '.add__trype',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn'
    }
    return {
        getInput: function(){

            return{
            type: document.querySelector(DOMstrings.inputType).value,//either inc or exp
            description: document.querySelector(DOMstrings.inputDescription).value,
            value: document.querySelector(DOMstrings.inputValue).value
        };

    },
        getDOMstrings: function(){
            return DOMstrings;
        }
    };
})();

 //GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){

    var DOM = UICtrl.getDOMstrings;
    var ctrlAddItem = function(){
          // 1. get the filed input data
          var inputData = UICtrl.getInput();
          console.log(inputData);
        // 2. Add the item to the budget controller
        // 3. Add the item to the UI
        // 4. Calculate the budget
        // 5. Display the budget on the UI

        
    }
    document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress',function(event){
        if (event.keyCode===13 || event.which===13){
            ctrlAddItem();
        }
    });

})(budgerController, UIController);