/** Global Variables */
var activity = 0,
	modo = '';
	
$(window).on("load", function () {
	/** Events onload, zoomFields etc.. */
});

/** DOM Ready */
$(document).on("ready", function () {
	activity = getAtividade();
	mode = getFormMode();
	console.log("Activity: ", activity);
	console.log("Modo: ", modo);

	
	/**
	 * Expand textarea
	 */
	$('.expand').on('click ', function (event) {
		event.preventDefault();
		var type = $(this).prop('tagName');
		var classe = ($(this).attr('class')).indexOf('expand');
		$(this).css('resize', 'none');
		if (classe > -1) {
			$(this).show('slow', function () {
				$(this).css({
					'display': 'block',
					'overflow-y': 'hidden'
				});
				expandTextarea(this.id);
			});
		}
	});



	/** Início - Life Cycle */
	if ( activity == 0 || activity == 4 ) {
		
	}
	
	/** Modo VIEW  */

	if ( modo == "VIEW" ) {

	}	


	/** Fim - Life Cycle */
});





/**
 *  @description Funções utilizadas durante o ciclo de vida do form.
 */

function expandTextarea(id) {
	var element = document.getElementById(id);
	if (element.scrollHeight != null) {
		var altura = element.scrollHeight + 'px';
		$(element).animate({
			overflow: 'hidden',
			height: 0,
			height: altura
		});
	}
}

function loadCalendar(obj, data) {
	var pkDate = false,
		pkTime = false,
		pkMinutes = false;

	if (data == 'date') {
		pkDate = true;

		FLUIGC.calendar('#' + obj.id, {
			pickDate: pkDate,
			pickTime: pkTime,
			useMinutes: pkMinutes,
			useSeconds: false,
			useCurrent: true,
			minuteStepping: 1,
			minDate: '1/1/2010',
			maxDate: '1/1/2215',
			showToday: true,
			language: 'pt-br',
			defaultDate: "",
			disabledDates: arrayDates(),
			useStrict: false,
			sideBySide: false,
			daysOfWeekDisabled: [0]
		});
	} else if (data == 'hour') {
		pkTime = true;
		pkMinutes = true;
		FLUIGC.calendar('#' + obj.id, {
			pickDate: pkDate,
			pickTime: pkTime,
		});
	}
}

function arrayDates() {
	var date = new Date();
	var day = date.getDate() - 1;
	var month = date.getMonth() + 1;
	var ano = date.getFullYear();
	var arrayDate = [];

	for (var i = ano; i > 2009; i--) {
		var months = (i > ano - 1) ? month : 12;
		for (var j = months; j > 0; j--) {
			var days = (i > ano - 1) && month == j ? day : 31;
			for (var k = days; k > 0; k--) {
				var dayFinish = k < 10 ? '0' + k : k;
				var monthFinish = j < 10 ? '0' + j : j;
				arrayDate.push(dayFinish + '/' + monthFinish + '/' + i);
			}
		}
	}
	return arrayDate;
}

function converteParaFloat(variavel) {
	if (variavel == "") {
		return parseFloat(0);
	}
	if (variavel.indexOf("R$") > -1) {
		variavel = variavel.replace("R$ ", "");
	}
	while (variavel.indexOf(".") != -1) {
		variavel = variavel.replace(".", "");
	}

	return parseFloat(variavel.replace(",", "."));
}

/**
 * @description Detalhe dos parametros
 * @param n  número a converter
 * @param c  numero de casas decimais
 * @param d  separador decimal
 * @param t  separador milhar
 */
function numeroParaMoeda(n, c, d, t) {
	//no final de cada linha é virgula mesmo, pois todas as variaveis sao do mesmo tipo
	c = isNaN(c = Math.abs(c)) ? 2 : c, d = d == undefined ? "," : d, t = t == undefined ? "." : t, s = n < 0 ? "-" : "", i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", j = (j = i.length) > 3 ? j % 3 : 0;
	return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
}

// Retorna a data do dia 
function getToday() {
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth() + 1; //January is 0!
	var yyyy = today.getFullYear();
	if (dd < 10) {
		dd = '0' + dd
	}
	if (mm < 10) {
		mm = '0' + mm
	}
	return {
		"date": dd + '/' + mm + '/' + yyyy,
		"day": dd,
		"month": mm,
		"year": yyyy
	};
}

//Histórico

function expandTextarea(id) {
	var objTextArea = document.getElementById(id);
	if (objTextArea.scrollHeight > objTextArea.offsetHeight) {
		objTextArea.rows += 1;
	}
}

function mostraHistorico() {
	var historico = 'historico';
	document.getElementById(historico).style.display = 'inline';
	expandTextarea(historico);
}

//Fim do histórico




/** SERVICES */


