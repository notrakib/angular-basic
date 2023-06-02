var demoapp = angular.module("demoapp", ["ngRoute"]);

      function SimpleController($scope, SimpleFactory) {
        $scope.names = SimpleFactory.getAlphabet();

        $scope.click = () => {
          SimpleFactory.postAlphabet($scope.new_alphabet);
        };
      }

      function SimpleRoute($routeProvider) {
        $routeProvider
          .when("/", {
            controller: "SimpleController",
            templateUrl: "view1.html",
          })
          .when("/next-view", {
            controller: "SimpleController",
            templateUrl: "view2.html",
          })
          .otherwise({
            redirectTo: "/",
          });
      }

      function SimpleFactory() {
        var alphabet = [
          { capital: "A", small: "a" },
          { capital: "B", small: "b" },
          { capital: "C", small: "c" },
          { capital: "D", small: "d" },
          { capital: "E", small: "e" },
          { capital: "F", small: "f" },
        ];

        var factory = [];
        factory.getAlphabet = function () {
          return alphabet;
        };

        factory.postAlphabet = function (new_alphabet) {
          alphabet.push({
            capital: new_alphabet.newCapital,
            small: new_alphabet.newSmall,
          });
        };

        return factory;
      }

      demoapp.controller("SimpleController", SimpleController);
      demoapp.config(SimpleRoute);
      demoapp.factory("SimpleFactory", SimpleFactory);