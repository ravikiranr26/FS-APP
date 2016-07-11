angular.module('starter.controllers', ['starter.services'])
    .controller('SignInCtrl', function($scope, $state) {
        $scope.signIn = function(user) {
            console.log('Sign-In', user);
            $state.go('tab.dash');
        };
    })

  .controller('blogPostCtrl', function($scope, $state) {
       console.log('blogPostCtrl');
        
        
    })


.controller('CategoryCtrl', function($scope, $state, $http, $ionicHistory, ServiceCategory) {
    $http.get('json/trendingCategory.json').success(function(data) {
        console.log(data.trendingCategory);
        $scope.subCategory = data;

    }).error(function(error) {
        console.log(error);
    });

    // subcategory = 'trendingCategory';
    // $scope.subCategory = ServiceCategory.getSubCategory('trendingCategory');

    $scope.selectedTrend = function(category) {
        console.log('In selectedTrend', category);
        $state.go('tab.dash-subCategoryDetails1');
    };

    $scope.myGoBack = function() {
        $ionicHistory.goBack();
    };
})

.controller('InnovateCategoryCtrl', function($scope, $state, $http, $ionicHistory, ServiceCategory) {
        $http.get('json/innovateCategory.json').success(function(data) {
            console.log(data.innovateCategory);
            $scope.subCategory = data;

        }).error(function(error) {
            console.log(error);
        });


        $scope.selectedTrend = function(category) {
            console.log('In selectedTrend', category);
            $state.go('tab.dash-subCategoryDetails1');
        };

        $scope.myGoBack = function() {
            $ionicHistory.goBack();
        };
    })
    .controller('ExternalCategoryCtrl', function($scope, $state, $http, $ionicHistory, ServiceCategory) {
        $http.get('json/externalCategory.json').success(function(data) {
            console.log(data.externalCategory);
            $scope.subCategory = data;

        }).error(function(error) {
            console.log(error);
        });

        // subcategory = 'trendingCategory';
        // $scope.subCategory = ServiceCategory.getSubCategory('trendingCategory');


        $scope.selectedTrend = function(category) {
            console.log('In selectedTrend', category);
            $state.go('tab.dash-subCategoryDetails2');
        };

        $scope.myGoBack = function() {
            $ionicHistory.goBack();
        };
    })
    .controller('GroupCategoryCtrl', function($scope, $state, $http, $ionicHistory, ServiceCategory) {
        $http.get('json/groupCategory.json').success(function(data) {
            console.log(data.groupCategory);
            $scope.subCategory = data;

        }).error(function(error) {
            console.log(error);
        });

        // subcategory = 'trendingCategory';
        // $scope.subCategory = ServiceCategory.getSubCategory('trendingCategory');


        $scope.selectedTrend = function(category) {
            console.log('In selectedTrend', category);
            $state.go('tab.dash-subCategoryDetails2');
        };

        $scope.myGoBack = function() {
            $ionicHistory.goBack();
        };
    })
    .controller('CommunityCategoryCtrl', function($scope, $state, $http, $ionicHistory, ServiceCategory) {
        $http.get('json/communityCategory.json').success(function(data) {
            console.log(data.communityCategory);
            $scope.subCategory = data;

        }).error(function(error) {
            console.log(error);
        });

        $scope.selectedTrend = function(category) {
            console.log('In selectedTrend', category);
            $state.go('tab.dash-subCategoryDetails2');
        };

        $scope.myGoBack = function() {
            $ionicHistory.goBack();
        };
    })
    .controller('subCategoryDetails1Ctrl', function($scope, $state, $http, $ionicHistory) {
        $http.get('json/trendingCategory.json').success(function(data) {
            console.log(data.trendingCategory);
            $scope.subCategory = data.trendingCategory[0];
        }).error(function(error) {
            console.log(error);
        });
        console.log('In subCategoryDetails1Ctrl Ctrl');
     
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

.controller('DashboardCtrl', function($scope, $http, $state, ServiceCategory) {
    $http.get('json/category.json').success(function(data) {
        $scope.categories = data;
        console.log($scope.categories);
    }).error(function(error) {
        console.log(error);
    });

    // $scope.categories = ServiceCategory.getCategory();
  //   $scope.isGroupShown = function(group) {
  //   return $scope.shownGroup === group;
  // }

  // $scope.isSubGroupShown = function(item) {
  //   return $scope.shownChild === item;
  // }
    $scope.selectCategory = function(categories) {
        if (categories.name == "What is trending ?") {
            // var subcategory = 'trendingCategory';
            // ServiceCategory.getSubCategory(subcategory);

             $state.go('tab.dash-subCategory');

        } else if (categories.name == "Innovate to Disrupt") {

            // var subcategory = 'innovateCategory';
            // ServiceCategory.getSubCategory(subcategory);

             $state.go('tab.dash-subCategoryInnovate');
            
        } else if (categories.name == "Group Catalyst") {

            // var subcategory = 'groupCategory';
            // ServiceCategory.getSubCategory(subcategory);

            $state.go('tab.dash-subCategoryGroup');

          } else if (categories.name == "External Influences") {

            // var subcategory = 'externalCategory';
            // ServiceCategory.getSubCategory(subcategory);

             $state.go('tab.dash-subCategoryExternal');
           
        } else if (categories.name == "CTO Community") {
            // var subcategory = 'communityCategory';
            // ServiceCategory.getSubCategory(subcategory);
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