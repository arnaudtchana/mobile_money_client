/**
 * Created by user on 15/02/2018.
 */
app
.controller('AccueilCtrl', function($scope,$state,Restangular) {

  /*on fait la requete restangular qui permet de recurer la liste des services en base de donnees
  * pour que lutilisateur choisisse le service qui l'interesse*/
  $scope.services = {};
 var Services = Restangular.all('service');

  Services.getList().then(function (data) {
    $scope.services = data;
    console.log($scope.services[0]);
  })

  $scope.rechercher_service = function (index) {
    //alert(index)
    /*ici on fait la requete pour recuperer la liste des kioques les plus proches offrant le service en question*/
    $state.go('localisation',{service_id:index});

  }
  });