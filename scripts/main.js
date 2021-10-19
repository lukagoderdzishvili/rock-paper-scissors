var myApp = angular.module('myApp',[]);

myApp.controller('myController', ['$scope', function($scope) {
  $scope.gameIsStarted = false;
  $scope.playerWin = false;
  $scope.myScore = 0;

  $scope.rulesModal = false;
  
  $scope.gameItems = [
    {
        name: 'paper',
        photo: 'icon-paper.svg',
        level: [-1, false, true],
        index: 0
    },
    {
        name: 'scissors',
        photo: 'icon-scissors.svg',
        level: [true, -1, false],
        index: 1
    },
    {
        name: 'rock',
        photo: 'icon-rock.svg',
        level: [false, true, -1],
        index: 2
    }
  ];

  $scope.choosedItem = (playerChoosedItem) => {
    $scope.playerChoosedItem = $scope.gameItems[playerChoosedItem];
    $scope.houseChoosedItem = $scope.gameItems[Math.floor(Math.random() * 3)];
    $scope.checkItems($scope.playerChoosedItem, $scope.houseChoosedItem); 

    $scope.gameIsStarted = true; 
  };

  $scope.checkItems = (playerItemID, houseItemID) => {
    $scope.playerWin = $scope.gameItems[playerItemID.index].level[houseItemID.index];

    if($scope.playerWin === -1){
        return
    }else {
      $scope.playerWin === true ? $scope.myScore++ : ($scope.myScore > 0) ? $scope.myScore-- : $scope.myScore;
    }
  }

  $scope.playAgain = () =>  $scope.gameIsStarted = false;

}]);