(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$q', 'dataservice', 'logger','$filter'];
    /* @ngInject */
    function DashboardController($q, dataservice, logger,$filter) {
        var vm = this;
        vm.news = {
            title: 'Project Miles',
            description: 'Project Miles is a good place to learn and enjoy your work.'
        };
        vm.messageCount = 0;
        vm.people = [];
        vm.title = 'Dashboard';

        activate();

        function activate() {
            var promises = [getMessageCount(), getPeople(),timeCalc()];
            return $q.all(promises).then(function() {
                logger.info('Activated Dashboard View');
            });
        }

        function getMessageCount() {
            return dataservice.getMessageCount().then(function (data) {
                vm.messageCount = data;
                return vm.messageCount;
            });
        }

        function getPeople() {
            return dataservice.getPeople().then(function (data) {
                vm.people = data;
                return vm.people;
            });
        }

        function timeCalc(){
            return dataservice.getTasksList().then(function(data){
                vm.result = data;
                var onthisday = [];
                vm.justday = [];
                var onspend = [];
                vm.spend = [];
                for(var r=0;r<vm.result.length;r++){
                var d = vm.result[r].createdTime[0];
                var str = d.split(" ");
                str = str[0];
                var myDate = $filter('filter')(vm.result, { createdTime: str});
                var totalHrsToday = 0;
                for(var s=0;s<myDate.length;s++){
                    var sumArray = myDate[s].taskHrs;
                    var sum=0;
                    for(var m =0;m<sumArray.length;m++){
                        var sum = sum+parseInt(sumArray[m]);
                    }
                    totalHrsToday = totalHrsToday + sum ;
                }
                var dmy = str.split("/");
                for(var w=0;w<dmy.length;w++){
                if(dmy[w].length ==1){
                    dmy[w] = "0"+dmy[w];
                }
                }
                var temp;
                temp = dmy[0];
                dmy[0] = dmy[1];
                dmy[1] = temp;
                console.log(dmy);
                dmy = dmy.toString();
                dmy = dmy.replace(/,/g , "/");
                var date = new Date(dmy);
                
                onthisday.push(date.toDateString());
                
                onspend.push(totalHrsToday);
                }
                $.each(onthisday, function(i, el){
                    if($.inArray(el, vm.justday) === -1) vm.justday.push(el);
                });
                $.each(onspend, function(i, el){
                    if($.inArray(el, vm.spend) === -1) vm.spend.push(el);
                });
               
                vm.dashboard = [];
                for(var i=0;i<vm.justday.length;i++){
                   vm.dashboard.push({a:vm.justday[i],b:vm.spend[i]});//add object literal
                }
                
            });
        }
    }
})();
