
 // BUDGET CONTROLLER
var budgerController = (function(){
 
})();


 // UI CONTROLLER
var UIController = (function(){

})();

 //GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){
    var ctrlAddItem = function(){
          // 1. get the filed input data
        // 2. Add the item to the budget controller
        // 3. Add the item to the UI
        // 4. Calculate the budget
        // 5. Display the budget on the UI

        console.log('it works');
    }
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress',function(event){
        if (event.keyCode===13 || event.which===13){
            ctrlAddItem();
        }
    });

})(budgerController, UIController);