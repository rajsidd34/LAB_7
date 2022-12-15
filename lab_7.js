angular.module("Mypat",[])
.filter("myfilter",function()
{
    return function(input,option)
    {
        if(isNaN(option)||(option==""))
        {
            return input;
        }
        else {
        return input.substring(0,option).toUpperCase();
    }}
})


.controller("empCtrl",function($scope)
{
    var patient=[
        {name:'Siddharth',dob:new Date("July 24,1999"),gender:"Male",disease:"Corona",doctor:"MR. A Rao"},
        {name:'Sarthak',dob:new Date("June 04,1999"),gender:"Male",disease:"Mental disorder",doctor:"MR. A K"},
        {name:'Arindam',dob:new Date("march 24,1989"),gender:"Male",disease:"Corona",doctor:"MR. A Rao"},
        {name:'Vaishnvi',dob:new Date("January 24,1900"),gender:"Female",disease:"Dental",doctor:"MR. A Rao"},
        {name:'Browni',dob:new Date("July 14,2000"),gender:"Female",disease:"Headache",doctor:"MR. K L Rewa"},
        {name:'Parth',dob:new Date("July 24,1999"),gender:"Male",disease:"Corona",doctor:"MRS.Avantika"},
        {name:'Shriti',dob:new Date("Feb  24,1999"),gender:"Female",disease:"Viral",doctor:"MR. B S Dev"},
        {name:'Radhika',dob:new Date("Nov 24,1999"),gender:"Female",disease:"Dehydration",doctor:"MR. Radha"},
        {name:'Deepak',dob:new Date("June 20,2001"),gender:"Male",disease:"Stomach Pain",doctor:"MRS.K Aparna"},
        {name:'Swapnil',dob:new Date("July 28,2000"),gender:"Female",disease:"Viral",doctor:"MR. A Rao"},
    ];
    $scope.patient=patient;
    $scope.rowlimit=10;

});