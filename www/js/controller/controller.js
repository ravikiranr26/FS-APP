angular.module('starter.controllers', ['starter.services'])

.controller('SignInCtrl', function($scope, $state) {
    $scope.signIn = function(user) {
        console.log('Sign-In', user);
        $state.go('tab.dash');
    };
})

.controller('blogPostCtrl', function($scope, $state, $http,ServiceCategory) {
    ServiceCategory.getCategory().then(function(data) {
             $scope.categories = data;
            //  console.log($scope.subCategory);
    }); 
})

.controller('CategoryCtrl', function($scope, $state, $http, $ionicHistory, ServiceCategory) {
    ServiceCategory.getSubCategory('trendingCategory').then (function(data) {
             $scope.subCategory = data;
            //  console.log($scope.subCategory);
    }); 
        
    $scope.selectedTrend = function(category) {
        console.log('In selectedTrend', category);
        ServiceCategory.setUserSelectedSubCategory(category);
        $state.go('tab.dash-subCategoryDetails1');
    };

    $scope.myGoBack = function() {
        $ionicHistory.goBack();
    };
})

.controller('InnovateCategoryCtrl', function($scope, $state, $http, $ionicHistory, ServiceCategory) {
    ServiceCategory.getSubCategory('innovateCategory').then (function(data) {
             $scope.subCategory = data;
            //  console.log($scope.subCategory);
    }); 

    $scope.selectedTrend = function(category) {
        console.log('In selectedTrend', category);
        ServiceCategory.setUserSelectedCategory(category);
        $state.go('tab.dash-subCategoryDetails1');
    };

    $scope.myGoBack = function() {
        $ionicHistory.goBack();
    };
})

.controller('ExternalCategoryCtrl', function($scope, $state, $http, $ionicHistory, ServiceCategory) {
    ServiceCategory.getSubCategory('externalCategory').then (function(data) {
             $scope.subCategory = data;
            //  console.log($scope.subCategory);
    }); 

    $scope.selectedTrend = function(category) {
        console.log('In selectedTrend', category);
        ServiceCategory.setUserSelectedCategory(category);
        $state.go('tab.dash-subCategoryDetails2');
    };

    $scope.myGoBack = function() {
        $ionicHistory.goBack();
    };
})

.controller('GroupCategoryCtrl', function($scope, $state, $http, $ionicHistory, ServiceCategory) {
    ServiceCategory.getSubCategory('groupCategory').then (function(data) {
             $scope.subCategory = data;
            //  console.log($scope.subCategory);
    }); 

    $scope.selectedTrend = function(category) {
        console.log('In selectedTrend', category);
         ServiceCategory.setUserSelectedCategory(category);
        $state.go('tab.dash-subCategoryDetails2');
    };

    $scope.myGoBack = function() {
        $ionicHistory.goBack();
    };
})

.controller('CommunityCategoryCtrl', function($scope, $state, $http, $ionicHistory, ServiceCategory) {
    ServiceCategory.getSubCategory('communityCategory').then (function(data) {
             $scope.subCategory = data;
            //  console.log($scope.subCategory);
    }); 
    $scope.selectedTrend = function(category) {
        console.log('In selectedTrend', category);
        ServiceCategory.setUserSelectedCategory(category);
        $state.go('tab.dash-subCategoryDetails2');
    };

    $scope.myGoBack = function() {
        $ionicHistory.goBack();
    };
})

.controller('subCategoryDetails1Ctrl', function($scope, $state, $http, $ionicHistory,ServiceCategory) {
  //  console.log('In subCategoryDetails1Ctrl Ctrl');

    var selectedcategory = ServiceCategory.getUserSelectedCategory();
    console.log('In selectedTrend', selectedcategory);
    $scope.subCategory =  ServiceCategory.getSubCategoryDetails('trendingCategory',selectedcategory.id)
   /* ServiceCategory.getSubCategoryDetails('trendingCategory',selectedcategory.id).then(function (data) {
        $scope.subCategory = data; 
        console.log('In subCategoryDetails1Ctrl Ctrl', $scope.subCategory  ); 
    })*/
   
    // $http.get('json/trendingCategory.json').success(function(data) {
    //     console.log(data.trendingCategory);
    //     $scope.subCategory = data.trendingCategory[0];
    //     if (data.trendingCategory[0].label != undefined) {
    //         $scope.label = data.trendingCategory[0].label
    //     }
    // }).error(function(error) {
    //     console.log(error);
    // });
    
})

.controller('subCategoryDetails2Ctrl', function($scope, $state, $http, $ionicHistory) {
    

    $http.get('json/groupCategory.json').success(function(data) {
        console.log(data);
        $scope.subCategory = data.groupCategory[0];
    }).error(function(error) {
        console.log(error);
    });
    console.log('In subCategoryDetails2Ctrl Ctrl');

})

.controller('DashboardCtrl', function($scope, $http, $state, ServiceCategory,$q) {

    $scope.writeBlog = function(){
        $state.go('tab.writeBlog');
    }
    
    ServiceCategory.getCategory().then (function(data) {
             $scope.categories =data;
              console.log($scope.categories);
    }); 
           
    //   $scope.isGroupShown = function(group) {
    //   return $scope.shownGroup === group;
    // }

    // $scope.isSubGroupShown = function(item) {
    //   return $scope.shownChild === item;
    // }

    $scope.selectCategory = function(categories) {
        if (categories.name == "What is trending ?") {
            ServiceCategory.setUserSelectedCategory(categories);
            $state.go('tab.dash-subCategory');
        } else if (categories.name == "Innovate to Disrupt") {
            ServiceCategory.setUserSelectedCategory(categories);
            $state.go('tab.dash-subCategoryInnovate');
        } else if (categories.name == "Group Catalyst") {
            ServiceCategory.setUserSelectedCategory(categories);
            $state.go('tab.dash-subCategoryGroup');
        } else if (categories.name == "External Influences") {
            ServiceCategory.setUserSelectedCategory(categories);
            $state.go('tab.dash-subCategoryExternal');
        } else if (categories.name == "CTO Community") {
           ServiceCategory.setUserSelectedCategory(categories);
           $state.go('tab.dash-subCategoryCommunity');
        }
    };

})

.controller('LogoutCtrl', function($scope, $state, $location) {
    $scope.settings = {
        enableFriends: true
    };
    $scope.toggleChange = function() {
        if ($scope.settings.enableFriends == false) {
            $state.go('signin');
        } else
            $scope.settings.enableFriends = true;

    };

})

.controller('ProfileCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
})

.controller('NotificationsCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
});