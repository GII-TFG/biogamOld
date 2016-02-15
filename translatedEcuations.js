//Translation of ecuations:

//HTML - esta es la parte de código que tiene que ir en html.
<div ng-app = "calcularApp" ng-controller = "calculadorAppCtrl as vm">
<input type = "text" ng-model = "vm.AaValue" />
<input type = "text" ng-model = "vm.aaValue" />

<input type = "button" value = "Calculate" ng-click = "vm.calculateAaXaa()"/>

//ANGULAR CODE

/*En principio lo he hecho en un controlador y no en una factoría porq no son datos que 
vayamos a necesitar en más puntos de la aplicacion, simplemente es un cálculo que se muestra
en la vista
*/
angular
	.module('calcularApp', [])
	.controller("calculadorAppCtrl", mainController);

	function mainController(){
		var scope = this;
		scope.chiA = 0;
		scope.total = 0;

		//scope.AaValue = 0;
		//scope.aaValue = 0;

		/* Aa x aa */
		scope.calculateTestCross = function(){
			scope.value_A = parseInt(scope.value_A);
			scope.value_a = parseInt(scope.value_a);

			if(scope.value_A > 5000 || scope.value_a > 5000){
				//mensaje de error, el valor tiene que ser menor de 5000
			}else{
				scope.total = scope.value_A + scope.value_a;
				scope.exp_A = scope.total / 2;
				scope.exp_a = scope.total / 2;
				if(scope.exp_A > 10 || scope.exp_a > 10){
					scope.opExpA = pow((scope.value_A - scope.exp_A), 2) / scope.exp_A;
					scope.opExpa = pow((scope.value_a - scope.exp_a), 2) / scope.exp_a;
					scope.chiA = scope.opExpA + scope.opExpa;
				}else if(scope.exp_A < 5 || scope.exp_a < 5){
					// Hay que mostrar mensaje de que: an expected value is less than 5
				}else if((scope.exp_A >= 5 && scope.exp_A <= 10) 
							|| (scope.exp_a >= 5 && scope.exp_a <= 10)){
					scope.operation_A = (scope.value_A - scope.exp_A) - 0.5;
					scope.operation_a = (scope.value_a - scope.exp_a) - 0.5;
					scope.opExpA = pow((scope.operation_A), 2) / scope.exp_A;
					scope.opExpa = pow((scope.operation_a), 2) / scope.exp_a;
					scope.chiA = scope.opExpA + scope.opExpa;
				}
				if(scope.chiA >= 3.841){
					scope.agree = "NO";
					scope.result = "This locus is not segregating correctly";					
				}else{
					scope.agree = "YES";
					scope.result = "This locus is segregating correctly";
				}
			}
		}

		/* Aa x Aa */
		scope.calculateF2Dominance = function(){
			scope.value_A = parseInt(scope.value_A);
			scope.value_a = parseInt(scope.value_a);

			if(scope.value_A > 5000 || scope.value_a > 5000){
				//mensaje de error, el valor tiene que ser menor de 5000
			}else{
				scope.total = scope.value_A + scope.value_a;
				scope.exp_A = (scope.total * 3) / 4;
				scope.exp_a = scope.total / 4;
				if(scope.exp_A > 10 || scope.exp_a > 10){
					scope.opExpA = pow((scope.value_A - scope.exp_A), 2) / scope.exp_A;
					scope.opExpa = pow((scope.value_a - scope.exp_a), 2) / scope.exp_a;
					scope.chiA = scope.opExpA + scope.opExpa;
				}else if(scope.exp_A < 5 || scope.exp_a < 5){
					// Hay que mostrar mensaje de que: an expected value is less than 5
				}else if((scope.exp_A >= 5 && scope.exp_A <= 10) 
							|| (scope.exp_a >= 5 && scope.exp_a <= 10)){
					scope.operation_A = (scope.value_A - scope.exp_A) - 0.5;
					scope.operation_a = (scope.value_a - scope.exp_a) - 0.5;
					scope.opExpA = pow((scope.operation_A), 2) / scope.exp_A;
					scope.opExpa = pow((scope.operation_a), 2) / scope.exp_a;
					scope.chiA = scope.opExpA + scope.opExpa;
				}
				if(scope.chiA >= 3.841){
					scope.agree = "NO";
					scope.result = "This locus is not segregating correctly";					
				}else{
					scope.agree = "YES";
					scope.result = "This locus is segregating correctly";
				}
			}
		} 

		/* A1A2 x A1A2 */
		scope.calculateF2Codominance = function(){
			scope.value_AA = parseInt(scope.value_AA);
			scope.value_Aa = parseInt(scope.value_Aa);
			scope.value_aa = parseInt(scope.value_aa);

			if(scope.value_AA > 5000 || scope.value_Aa > 5000 || scope.value_aa){
					//mensaje de error, el valor tiene que ser menor de 5000
			}else{
				scope.total = scope.value_AA + scope.value_Aa + scope.value_aa;
				scope.exp_AA = scope.total / 4;
				scope.exp_Aa = scope.total / 2;
				scope.exp_aa = scope.total / 4;
				if(scope.exp_AA > 10 || scope.exp_Aa > 10 || scope.exp_aa > 10){
					scope.opExpAA = pow((scope.value_AA - scope.exp_A), 2) / scope.exp_AA;
					scope.opExpAa = pow((scope.value_Aa - scope.exp_Aa), 2) / scope.exp_Aa;
					scope.opExpaa = pow((scope.value_aa - scope.exp_aa), 2) / scope.exp_aa;
					scope.chiA = scope.opExpA + scope.opExpa;
				}else if(scope.exp_A < 5 || scope.exp_a < 5){
					// Hay que mostrar mensaje de que: an expected value is less than 5
				}else if((scope.exp_AA >= 5 && scope.exp_AA <= 10) 
							|| (scope.exp_Aa >= 5 && scope.exp_Aa <= 10)
							|| (scope.exp_aa >= 5 && scope.exp_aa <= 10)){
					scope.operation_AA = (scope.value_AA - scope.exp_AA) - 0.5;
					scope.operation_Aa = (scope.value_Aa - scope.exp_Aa) - 0.5;
					scope.operation_aa = (scope.value_aa - scope.exp_aa) - 0.5;

					scope.opExpAA = pow((scope.operation_AA), 2) / scope.exp_AA;
					scope.opExpAa = pow((scope.operation_Aa), 2) / scope.exp_Aa;
					scope.opExpaa = pow((scope.operation_aa), 2) / scope.exp_aa;

					scope.chiA = scope.opExpAA + scope.opExpAa + scope.opExpaa;
				}
				if(scope.chiA >= 5.991){
					scope.agree = "NO";
					scope.result = "This locus is not segregating correctly";					
				}else{
					scope.agree = "YES";
					scope.result = "This locus is segregating correctly";
				}
			}
		}

		/* A1A2 x A1A3 */
		scope.calculateCodominance3Alleles = function(){
			scope.value_A1A1 = parseInt(scope.value_A1A1);
			scope.value_A1A3 = parseInt(scope.value_A1A3);
			scope.value_A1A2 = parseInt(scope.value_A1A2);
			scope.value_A2A3 = parseInt(scope.value_A2A3);

			if(scope.value_A1A1 > 5000 || scope.value_A1A3 > 5000 || scope.value_A1A2 > 5000 || scope.value_A2A3 > 5000){
				//mensaje de error, el valor tiene que ser menor de 5000
			}else{
				scope.total = scope.value_A1A1 + scope.value_A1A3 + scope.value_A1A2 + scope.value_A2A3;
				scope.exp_A1A1 = scope.total / 4;
				scope.exp_A1A3 = scope.total / 4;
				scope.exp_A1A2 = scope.total / 4;
				scope.exp_A2A3 = scope.total / 4;
				if(scope.exp_A1A1 > 10 || scope.exp_A1A3 > 10 || scope.exp_A1A2 > 10 || scope.exp_A2A3 > 10){
					scope.opExpA1A1 = pow((scope.value_A1A1 - scope.exp_A1A1), 2) / scope.exp_A1A1;
					scope.opExpA1A3 = pow((scope.value_A1A3 - scope.exp_A1A3), 2) / scope.exp_A1A3;
					scope.opExpA1A2 = pow((scope.value_A1A2 - scope.exp_A1A2), 2) / scope.exp_A1A2;	
					scope.opExpA2A3 = pow((scope.value_A2A3 - scope.exp_A2A3), 2) / scope.exp_A2A3;	
					scope.chiA = scope.opExpA1A1 + scope.opExpA1A3 + scope.opExpA1A2 + scope.opExpA2A3;
				}else if(scope.exp_A1A1 < 5 || scope.exp_A1A3 < 5 || scope.exp_A1A2 < 5 || scope.exp_A2A3 < 5){
					// Hay que mostrar mensaje de que: an expected value is less than 5
				}else if((scope.exp_A1A1 >= 5 && scope.exp_A1A1 <= 10) 
							|| (scope.exp_A1A3 >= 5 && scope.exp_A1A3 <= 10)
							|| (scope.exp_A1A2 >= 5 && scope.exp_A1A2 <= 10)
							|| (scope.exp_A2A3 >= 5 && scope.exp_A2A3 <= 10)){

					scope.operation_A1A1 = (scope.value_A1A1 - scope.exp_A1A1) - 0.5;
					scope.operation_A1A3 = (scope.value_A1A3 - scope.exp_A1A3) - 0.5;
					scope.operation_A1A2 = (scope.value_A1A2 - scope.exp_A1A2) - 0.5;
					scope.opertaion_A2A3 = (scope.value_A2A3 - scope.exp_A2A3) - 0.5;
					
					scope.opExpA1A1 = pow((scope.operation_A1A1), 2) / scope.exp_A1A1;
					scope.opExpA1A3 = pow((scope.operation_A1A3), 2) / scope.exp_A1A3;
					scope.opExpA1A2 = pow((scope.operation_A1A2), 2) / scope.exp_A1A2;
					scope.opExpA2A3 = pow((scope.operation_A2A3), 2) / scope.exp_A2A3;
					
					scope.chiA = scope.opExpA1A1 + scope.opExpA1A3 + scope.opExpA1A2 + scope.opExpA2A3;
				}
				if(scope.chiA >= 7.815){
					scope.agree = "NO";
					scope.result = "This locus is not segregating correctly";					
				}else{
					scope.agree = "YES";
					scope.result = "This locus is segregating correctly";
				}
			}
		}

		/* A1A2 x A3A4 */
		scope.calculateCodominance4Alleles = function(){
			scope.value_A1A3 = parseInt(scope.value_A1A3);
			scope.value_A1A4 = parseInt(scope.value_A1A4);
			scope.value_A2A3 = parseInt(scope.value_A2A3);
			scope.value_A2A4 = parseInt(scope.value_A2A4);

			if(scope.value_A1A3 > 5000 || scope.value_A1A4 > 5000 || scope.value_A2A3 > 5000 || scope.value_A2A4 > 5000){
				//mensaje de error, el valor tiene que ser menor de 5000
			}else{
				scope.total = scope.value_A1A3 + scope.value_A1A4 + scope.value_A2A3 + scope.value_A2A4;
				scope.exp_A1A3 = scope.total / 4;
				scope.exp_A1A4 = scope.total / 4;
				scope.exp_A2A3 = scope.total / 4;
				scope.exp_A2A4 = scope.total / 4;
				if(scope.exp_A1A3 > 10 || scope.exp_A1A4 > 10 || scope.exp_A2A3 > 10 || scope.exp_A2A4 > 10){

				}else if(scope.exp_A1A3 < 5 || scope.exp_A1A4 < 5 || scope.exp_A2A3 < 5|| scope.exp_A2A4 < 5){

				}else if((scope.exp_A1A3 >= 5 && scope.exp_A1A3 <= 10) 
							|| (scope.exp_A1A4 >= 5 && scope.exp_A1A4 <= 10)
							|| (scope.exp_A2A3 >= 5 && scope.exp_A2A3 <= 10)
							|| (scope.exp_A2A4 >= 5 && scope.exp_A2A4 <= 10)){

					scope.operation_A1A3 = (scope.value_A1A3 - scope.exp_A1A3) - 0.5;
					scope.operation_A1A4 = (scope.value_A1A4 - scope.exp_A1A4) - 0.5;
					scope.operation_A2A3 = (scope.value_A2A3 - scope.exp_A2A3) - 0.5;
					scope.opertaion_A2A4 = (scope.value_A2A4 - scope.exp_A2A4) - 0.5;
					
					scope.opExpA1A3 = pow((scope.operation_A1A3), 2) / scope.exp_A1A3;
					scope.opExpA1A4 = pow((scope.operation_A1A4), 2) / scope.exp_A1A4;
					scope.opExpA2A3 = pow((scope.operation_A2A3), 2) / scope.exp_A2A3;
					scope.opExpA2A4 = pow((scope.operation_A2A4), 2) / scope.exp_A2A4;

					scope.chiA = scope.opExpA1A3 + scope.opExpA1A4 + scope.opExpA2A3 + scope.opExpA2A4;

				}
				if(scope.chiA >= 7.815){
					scope.agree = "NO";
					scope.result = "This locus is not segregating correctly";					
				}else{
					scope.agree = "YES";
					scope.result = "This locus is segregating correctly";
				}
			}

			}

		}

		/* Lethal Genes */
		scope.calculateLethalGenes = function(){
			scope.value_AA = parseInt(scope.value_AA);
			scope.value_Aa = parseInt(scope.value_Aa);

			if(scope.value_AA > 5000 || scope.value_Aa > 5000){
				//mensaje de error, el valor tiene que ser menor de 5000
			}else{
				scope.total = scope.value_AA + scope.value_Aa;
				scope.exp_AA = scope.total / 3;
				scope.exp_Aa = (2 * scope.total) / 3;

				if(scope.exp_AA > 10 || scope.exp_Aa > 10){
					scope.opExpAA = pow((scope.value_AA - scope.exp_AA), 2) / scope.exp_AA;
					scope.opExpAa = pow((scope.value_Aa - scope.exp_Aa), 2) / scope.exp_Aa;
					scope.chiA = scope.opExpAA + scope.opExpAa;
				}else if(scope.exp_AA < 5 || scope.exp_Aa < 5){
					// Hay que mostrar mensaje de que: an expected value is less than 5
				}else if((scope.exp_AA >= 5 && scope.exp_AA <= 10) 
							|| (scope.exp_Aa >= 5 && scope.exp_Aa <= 10)){
					scope.operation_AA = (scope.value_AA - scope.exp_AA) - 0.5;
					scope.operation_Aa = (scope.value_Aa - scope.exp_Aa) - 0.5;
					scope.opExpAA = pow((scope.operation_AA), 2) / scope.exp_AA;
					scope.opExpAa = pow((scope.operation_Aa), 2) / scope.exp_Aa;
					scope.chiA = scope.opExpAA + scope.opExpAa;
				}
				if(scope.chiA >= 3.841){
					scope.agree = "NO";
					scope.result = "This locus is not segregating correctly";					
				}else{
					scope.agree = "YES";
					scope.result = "This locus is segregating correctly";
				}
			}

		}

		/*Hay que pensar si vamos a inicializar todas las variables que se usan en los métodos */
		scope.clean = function(){

		}
	}