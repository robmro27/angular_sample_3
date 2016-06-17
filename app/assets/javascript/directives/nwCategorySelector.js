angular.module("NoteWrangler")
    .directive("nwCategorySelector", function(Category) {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'assets/templates/directives/nwCategorySelector.html',
            require: "?ngModel",
            link: function ( scope, element, attrs, ngModelCtrl ) {
                
                var activeCategory = {};
                
                scope.categories = Category.query();
                
                scope.isActive = function (category) {
                    return activeCategory && activeCategory.id === category.id;
                }
                
                scope.toogleCategory = function( category ) {
                    if (category == activeCategory) {
                        activeCategory = {};
                    } else {
                        activeCategory = category;
                    }
                    ngModelCtrl.$setViewValue(activeCategory);
                }
                
                ngModelCtrl.$render = function() {
                    activeCategory = ngModelCtrl.$viewValue;
                }
                
            }
        };
});