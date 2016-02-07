var app = angular.module('myapp',['ionic']);
app.controller('MyCtrl', function ($scope) {
    $scope.itemUnit = [
      {
          id: "1",
          title: "Pure line."
      },
      {
          id: "2",
          title: "Variability."
      },
      {
          id: "3",
          title: "Locus/Loci."
      },
      {
          id: "4",
          title: "Phenotype."
      },
      {
          id: "5",
          title: "Gene"
      },
      {
          id: "6",
          title: "Allele"
      },
      {
          id: "7",
          title: "Genotype"
      },
      {
          id: "8",
          title: "Mendels first law"
      },
      {
          id: "9",
          title: "Interaction between alleles of the same locus"
      }
    ];
});