﻿angular.module("platformWebApp")
//.config(
//  ['$stateProvider', function ($stateProvider) {
//      $stateProvider
//          .state('workspace.coreModulesettings', {
//              url: '/settings',
//              templateUrl: 'Modules/$(VirtoCommerce.Core)/Scripts/home.tpl.html',
//              controller: [
//                  '$scope', 'bladeNavigationService', function ($scope, bladeNavigationService) {
//                      var blade = {
//                          id: 'settings',
//                          title: 'Settings',
//                          //subtitle: 'Manage settings',
//                          controller: 'settingsListController',
//                          template: 'Scripts/app/settings//blades/settings-list.tpl.html',
//                          isClosingDisabled: true
//                      };
//                      bladeNavigationService.showBlade(blade);
//                  }
//              ]
//          });
//  }]
//)
.run(
  ['$rootScope', 'mainMenuService', 'widgetService', '$state', function ($rootScope, mainMenuService, widgetService, $state) {
      ////Register module in main menu
      //var menuItem = {
      //    path: 'browse/settings',
      //    icon: 'fa fa-wrench',
      //    title: 'Settings',
      //    priority: 190,
      //    action: function () { $state.go('workspace.coreModulesettings'); },
      //    permission: 'platform:setting:manage'
      //};
      //mainMenuService.addMenuItem(menuItem);

      //Register item prices widget
      widgetService.registerWidget({
          controller: 'settingsWidgetController',
          template: 'Scripts/app/settings/widgets/settingsWidget.tpl.html'
      }, 'moduleDetail');

  }])
;
