(function () {
    'use strict';

    angular
        .module('app.tasks')
        .controller('TaskController', TaskController);

    TaskController.$inject = ['logger','$state','dataservice','$filter','$rootScope','$q','session'];
    /* @ngInject */
    function TaskController(logger,$state,dataservice,$filter,$rootScope,$q,session) {
        var vm = this;
        vm.title = 'List Tasks';
        //vm.currentid = sharedproperties.getId();
        activate();
        
        function activate() {

          var promises = [callUpdate()];
            return $q.all(promises).then(function() {
                callUpdate();
                
                logger.info('Activated Tasks View');
            });
            
            
        }

        function callUpdate(){
          return dataservice.getTasksList().then(function(result) {  // this is only run after $http completes
               

               vm.listvalues = result;
               //vm.modify = "Edit";

               for(var i=0;i<vm.listvalues.length;i++){
               if(vm.listvalues[i].taskStatus=="Completed"){
                  vm.listvalues[i].show = "View";
               }
               else
                  vm.listvalues[i].show = "Edit"
                }
               
                return vm.listvalues;
               
               
            });
        }

        vm.next = function(){
            $state.go("newtask");
        }
        vm.edit = function(id,taskStatus){
                //$rootScope.taskid =id;
                session.set('selectedid',id);
                if(taskStatus=='Completed'){
                  $state.go("viewtask");
                }else
                $state.go("edittask");

                }
        vm.deleteTask = function(id){
                  var delTask = dataservice.deleteTask(id);
                  delTask.then(function(result) {  // this is only run after $http completes
                  logger.info("Deleted");  
                  callUpdate();
                  //$state.go("tasks");
                })
               
            };
        
       
    }
})();

//var myStatus = $filter('filter')(vm.listvalues, { taskStatus: "Completed"});
               // var changeStatus = [];
               // vm.updateModify=[];
               // for(var l=0;l<myStatus.length;l++){
               //    changeStatus.push(myStatus[l].id);
               // }
               
               // for(var j=0;j<changeStatus.length;j++){
               //  for(var i=0;i<vm.listvalues.length;i++){
               //    vm.modify = "Edit";
               //  if(vm.listvalues[i].id == changeStatus[j]){
               //      vm.modify = "Closed";

                    
               //  } 
               //      vm.updateModify[i] =vm.modify;
               //  }
                    
               // }

               // for(var j=0;j<vm.listvalues.length;j++){

               //  for(var i=0;i<changeStatus.length;i++){
               //  if( changeStatus[i] == vm.listvalues[j].id){
               //      vm.modify = "Closed";
                    
               //  }
               //  else
                   

               //      vm.updateModify.push(vm.modify);
               //  }
                    
               // }

               // for(var k=0;k<vm.listvalues.length;k++){
               //      vm.listvalues[k].show = vm.updateModify[k] ;
               // }
               //console.log(vm.listvalues);

               // for()
               // if(myStatus[0].taskStatus =="Completed"){
               //      vm.modify = "Closed";
               // }
               
                
               //console.log("data.name"+vm.listvalues); //vm.listvalues[0].taskTitle