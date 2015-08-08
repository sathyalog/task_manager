(function () {
    'use strict';

    angular
        .module('app.viewtask')
        .controller('ViewTaskController', ViewTaskController);

    ViewTaskController.$inject = ['logger','dataservice','$rootScope','$state','session'];
    /* @ngInject */
    function ViewTaskController(logger,dataservice,$rootScope,$state,session) {
        var vm = this;
        vm.title = 'Edit Task';
        var taskid = session.get('selectedid');
       // session.set('selectedId',taskid);
        activate();
        //vm.currentTime = vm.getTime();
        function activate() {
            logger.info('Activated View Task');
            var taskid = session.get('selectedid');
            var taskvalues = dataservice.getTask(taskid);
            taskvalues.then(function(result) {  // this is only run after $http completes
               vm.taskvalues = result;
               console.log(vm.taskvalues);
               vm.taskTitle = vm.taskvalues.taskTitle;
                vm.projectName = vm.taskvalues.projectName;
                vm.taskDesc = vm.taskvalues.taskDesc;
                vm.taskHrs = vm.taskvalues.taskHrs;
                vm.taskStatus = vm.taskvalues.taskStatus;
                vm.totalHrs = 0;  // Variable to hold your total

                    for(var i = 0, len = vm.taskHrs.length; i < len; i++) {
                        vm.totalHrs = parseInt(vm.totalHrs)+parseInt(vm.taskHrs[i]);  // Iterate over your first array and then grab the second element add the values up
                    }
                vm.createdTime = vm.taskvalues.createdTime;

                 vm.viewTime = [];
                for(var f=0;f<vm.taskHrs.length;f++){
                   vm.viewTime.push({a:vm.taskHrs[f],b:vm.createdTime[f]});//add object literal
                }
               });
            
        }
       
        vm.back = function(){
            $state.go("tasks");
        }

       
        
    }
})();


////************* Unwanted code *******************//////
 // vm.updateTotalHrs = function(){
        //     vm.totalHrs = vm.totalHrs + parseInt(vm.updateTaskHrs);
        //     vm.taskHrs.push(vm.updateTaskHrs);
        //     console.log(vm.taskHrs);
        // }

        // vm.timeArray = function(){
        //     vm.createdTime.push(vm.currentTime);
        // }

        // vm.updateTime = function(){
        //     var today = new Date();
        //     var date = today.getDate() +"/"+parseInt(today.getMonth()+1)+"/"+today.getFullYear();
        //     var time = today.getHours() + ":"  
        //         + today.getMinutes() + ":" 
        //         + today.getSeconds();
        //     vm.currentTime = date+" "+time;
        //     vm.updateTotalHrs();
        //     vm.timeArray();
        // }

        // vm.submit = function(form){
        //     form.$submitted = true;
        //     if(form.$invalid){
        //         logger.error("Form is invalid. Please enter all required fields");
        //         return false;
        //     }
        //     var taskTitle = vm.taskTitle;
        //     var projectName = vm.projectName;
        //     var taskDesc = vm.taskDesc;
        //     var taskHrs = vm.taskHrs;
        //     if(!vm.taskStatus){
        //         var taskStatus = "Progress"
        //     }
        //     else
        //         var taskStatus = "Completed"
            
        //     var createdTime = vm.createdTime;
           
        //     var app = {"taskTitle":taskTitle,"projectName":projectName,"taskDesc":taskDesc,"taskHrs":taskHrs,"createdTime":createdTime,"taskStatus":taskStatus};
        //     //console.log(app);

        //     dataservice.updateEditSubmit(app,taskid);
        //     logger.info("Task updated successfully.");
        //     $state.go("tasks");
            
        // }