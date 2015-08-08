(function () {
    'use strict';

    angular
        .module('app.newtask')
        .controller('NewTaskController', NewTaskController);

    NewTaskController.$inject = ['logger','dataservice','$state'];
    /* @ngInject */
    function NewTaskController(logger,dataservice,$state) {
        var vm = this;
        vm.title = 'Add New Task';

        activate();
        //vm.currentTime = vm.getTime();
        function activate() {
            logger.info('Activated New Task View');
        }

        vm.updateTime = function(){
            var today = new Date();
            var date = today.getDate() +"/"+parseInt(today.getMonth()+1)+"/"+today.getFullYear();
            var time = today.getHours() + ":"  
                + today.getMinutes() + ":" 
                + today.getSeconds();
            vm.currentTime = date+" "+time;
        }

        vm.submit = function(form){
            form.$submitted = true;
            if(form.$invalid){
                logger.error("Form is invalid. Please enter all required fields");
                return false;
            }

            var taskTitle = vm.taskTitle;
            var projectName = vm.projectName;
            var taskDesc = vm.taskDesc;
            var taskHrs = vm.taskHrs;
            if(!vm.taskStatus){
                var taskStatus = "Progress"
            }
            else
                var taskStatus = "Completed"
            
            var createdTime = vm.currentTime;

            var app = {"taskTitle":taskTitle,"projectName":projectName,"taskDesc":taskDesc,"taskHrs":[taskHrs],"createdTime":[createdTime],"taskStatus":taskStatus};
            //console.log(app);

            dataservice.updateAfterSubmit(app);
            logger.info("New Task Added.");
            $state.go("tasks");
            
        }
        
    }
})();
