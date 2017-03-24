/**
 * Created by Administrator on 2016/9/17.
 */
var UserInfoModule=angular.module("UserInfoModule",[]);
UserInfoModule.controller('UserInfoCtrl',['$scope',function($scope){
    $scope.userInfo={
        email:"490916749@qq.com",
        passage:"12345678",
        autoLogin:true
    };
    $scope.getFormData=function(){
        console.log($scope.userInfo);
    };
    $scope.setFormData=function() {
        $scope.userInfo = {
            email: "13720347@qq.com",
            passage: "43276976",
            autoLogin: false
        };
    };
    $scope.resetFormData=function(){
        $scope.userInfo={
            email:"",
            passage:"",
            autoLogin:true
        };
    };
}]);