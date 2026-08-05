// JavaScript Document

/*/
Isen Callaki


*/



function plsySelecVideo(videoID,lang){
	videoIDs = videoID.split("_",2);
	var movieShow;
	//alert(videoIDs[1])
	$('#trbl_video').hide();
	var sprchP = ""
	switch (lang){
		case "de":
			sprchP = "-deutsch-converted";
			break;
		case "es":
			sprchP = "-spanisch-converted";
			break;
		default:
			sprchP = "-englisch-converted";
			break;
	}
	//alert(videoID);
	videoLink = "https://www.blain.de/support/video/";
	switch(videoIDs [1]){
		case "1":
			movieShow = "EVH1A"+sprchP+".mp4";
			break;
		case "2":
			movieShow = "EVH1B"+sprchP+".mp4";
			break;
		case "3":
			movieShow = "EVH1C"+sprchP+".mp4";
			break;
		case "4":
			movieShow = "EVH1D"+sprchP+".mp4";
			break;
		case "5":
			movieShow = "EVH1E"+sprchP+".mp4";
			break;
		case "6":
			movieShow = "EVH1F"+sprchP+".mp4";
			break;
		case "7":
			movieShow = "EVH1G"+sprchP+".mp4";
			break;
		case "8":
			movieShow = "EVH1H"+sprchP+".mp4";
			break;
		case "9":
			movieShow = "EVH1I"+sprchP+".mp4";
			break;
		case "10":
			movieShow = "EVH1J"+sprchP+".mp4";
			break;
		case "11":
			movieShow = "EVH1K"+sprchP+".mp4";
			break;
		case "12":
			movieShow = "EVH1L"+sprchP+".mp4";
			break;
		case "13":
			movieShow = "EVH1M"+sprchP+".mp4";
			break;
		//-----------------------------
		case "14":
			movieShow = "EVH2A"+sprchP+".mp4";
			break;
		case "15":
			movieShow = "EVH2B"+sprchP+".mp4";
			break;
		case "16":
			movieShow = "EVH2C"+sprchP+".mp4";
			break;
		case "17":
			movieShow = "EVH2D"+sprchP+".mp4";
			break;
		case "18":
			movieShow = "EVH1K"+sprchP+".mp4";//gleich wie 11
			//movieShow = "EVH2E"+sprchP+".mp4";
			break;
		case "19":
			movieShow = "EVH1L"+sprchP+".mp4";// Gleich wie 12
			//movieShow = "EVH2F"+sprchP+".mp4";
			break;
		//-----------------------------
		case "20":
			movieShow = "EVH3A"+sprchP+".mp4";
			break;
		case "21":
			movieShow = "EVH3B"+sprchP+".mp4";
			break;
		case "22":
			movieShow = "EVH3C"+sprchP+".mp4";
			break;
		case "23":
			movieShow = "EVH3D"+sprchP+".mp4";
			break;
		case "24":
			movieShow = "EVH3E"+sprchP+".mp4";
			break;
		case "25":
			movieShow = "EVH3F"+sprchP+".mp4";
			break;
			//--------------------------------------
		case "26":
			movieShow = "EVH4A"+sprchP+".mp4";
			break;
		case "27":
			movieShow = "EVH4B"+sprchP+".mp4";
			break;
		case "28":
			movieShow = "EVH4C"+sprchP+".mp4";
			break;
			//--------------------------
		case "29":
			movieShow = "EVH5"+sprchP+".mp4";
			break;
			//----------------------------
		case "30":
			movieShow = "EVH6A"+sprchP+".mp4";
			break;
		case "31":
			movieShow = "EVH6B"+sprchP+".mp4";
			break;
		case "32":
			movieShow = "EVH6C"+sprchP+".mp4";
			break;
		case "33":
			movieShow = "EVH6D"+sprchP+".mp4";
			break;
			//--------------------------
		case "34":
			movieShow = "EVH7A"+sprchP+".mp4";
			break;
		case "35":
			movieShow = "EVH7B"+sprchP+".mp4";
			break;
			//--------------------------
		case "36":
			movieShow = "EVH8A"+sprchP+".mp4";
			break;
		case "37":
			movieShow = "EVH8B"+sprchP+".mp4";
			break;
		case "38":
			movieShow = "EVH8C"+sprchP+".mp4";
			break;
		//case "39": //02.2019
			//movieShow = "EVH8D"+sprchP+".mp4";
			//break;
			//--------------------- Down
		case "40":
			movieShow = "EVS1A"+sprchP+".mp4";
			break;
		case "41":
			movieShow = "EVS1B"+sprchP+".mp4";
			break;
		case "42":
			movieShow = "EVS1C"+sprchP+".mp4";
			break;
		case "43":
			movieShow = "EVS1D"+sprchP+".mp4";
			break;			
		case "44":
			movieShow = "EVS1E"+sprchP+".mp4";
			break;
			//----------------------
		case "45":
			movieShow = "EVS2A"+sprchP+".mp4";
			break;
		case "46":
			movieShow = "EVS2B"+sprchP+".mp4";
			break;		
		case "47":
			movieShow = "EVS2C"+sprchP+".mp4";
			break;
		case "48":
			movieShow = "EVS2D"+sprchP+".mp4";
			break;
		//---------------------------
		case "49":
			movieShow = "EVS3A"+sprchP+".mp4";
			break;
		case "50":
			movieShow = "EVS3B"+sprchP+".mp4";
			break;		
		case "51":
			movieShow = "EVS3C"+sprchP+".mp4";
			break;
		case "52":
			movieShow = "EVS3D"+sprchP+".mp4";
			break;
			//----------------------------
		case "53":
			movieShow = "EVS4A"+sprchP+".mp4";
			break;
		case "54":
			movieShow = "EVS4B"+sprchP+".mp4";
			break;
			//----------------------------
		case "55":
			movieShow = "EVS5A"+sprchP+".mp4";
			break;
		case "56":
			movieShow = "EVS5B"+sprchP+".mp4";
			break;
			//--------------------------------
		case "57":		
			movieShow = "EVS6A"+sprchP+".mp4";
			break;
		case "58":
			movieShow = "EVS6B"+sprchP+".mp4";
			break;
		case "59":
			movieShow = "EVS6C"+sprchP+".mp4";
			break;
			//----------------------------		
		case "60":
			movieShow = "EVS7A"+sprchP+".mp4";
			break;
		case "61":
			movieShow = "EVS7B"+sprchP+".mp4";	
			break;		
		case "62":
			movieShow = "EVS7C"+sprchP+".mp4";
			break;
		case "63":
			movieShow = "EVS7D"+sprchP+".mp4";
			break;
		case "64":
			movieShow = "EVS7E"+sprchP+".mp4";
			break;
		case "65":
			movieShow = "EVS7F"+sprchP+".mp4";
			break;
		case "66":
			movieShow = "EVS7G"+sprchP+".mp4";
			break;
		//--------------------------------
		case "67":
			movieShow = "EVS8A"+sprchP+".mp4";
			break;
		case "68":
			movieShow = "EVS8B"+sprchP+".mp4";	
			break;		
		case "69":
			movieShow = "EVS8C"+sprchP+".mp4";
			break;
		case "70":
			movieShow = "EVS8D"+sprchP+".mp4";
			break;
		case "71":
			movieShow = "EVS8E"+sprchP+".mp4";
			break;
		case "72":
			movieShow = "EVS8F"+sprchP+".mp4";
			break;
		case "73":
			movieShow = "EVS8G"+sprchP+".mp4";
			break;
		//--------------------------------
		default:
			movieShow = "";
			alert('No movie file for this issue')
			break;
		}
	//
	//alert(videoLink+movieShow);
	if(movieShow == ""){
		$('#trbl_video').hide();
		$('#trbl_video').html('');
		}else{
			videoUrlMp4 = videoLink+movieShow;
			//window.open(videoUrlMp4);
			//window.plugins.videoPlayer.play(videoUrlMp4)
			$('#trbl_video').show();
			$('#trbl_video').html("<video id=\"myplayer\" controls preload=\"none\" width=\"500\" height=\"400\"    poster=\"http://www.blain.de/png/blain-logo.png\" data-setup=\"{}\">    <source src=\""+videoLink+movieShow+"\" type='video/mp4' /> Ihr Browser unterstützt das Video Codec nicht.</video><div id=\"schliessVideo1\" class=\"schliessVideoClass\">Close</div>");
	        //$('#trbl_video').html("<iframe width=\"420\" height=\"315\" src=\"http://www.youtube.com/embed/lAWC9WXJqcs?rel=0\" frameborder=\"0\" allowfullscreen></iframe><div id=\"schliessVideo1\" class=\"schliessVideoClass\">X</div>");
		}
	
	
	
	$('#schliessVideo1').click(function(){
		//alert('clicked');
		//$('[id^="trouble_"]').attr('class','troubleClass');
	$('#trbl_video').html('');
	$('#trbl_video').hide();
	});
}

function navLang(sprache){
	//alert(sprache);
	var videoIco =  '<img id="VideoSymbol" src="css/images/videoSymbol.png"/>';
	switch (sprache) {
		case "de":
     	 	$('#h_tshUpButt1').html('Keine Anfahrt (Aufzug bleibt in Etage stehen) '+ videoIco);
			$('#h_tshUpButt2').html('Anfahrt, aber keine Vollgeschwindigkeit '+ videoIco);
			$('#h_tshUpButt3').html('Anfahrt zu hart '+ videoIco);
			$('#h_tshUpButt4').html('Aufzug bremst nicht ab aus Vollgeschwindigkeit  '+ videoIco);
			$('#h_tshUpButt5').html('Schleichfahrt zu schnell '+ videoIco);
			$('#h_tshUpButt6').html('Aufzug bremst ab, fährt jedoch über die Haltestelle '+ videoIco);
			$('#h_tshUpButt7').html('Umlaufdruck nicht einstellbar '+ videoIco);
			$('#h_tshUpButt8').html('Aufzug bleibt vor der Haltstelle stehen (keine Schleichfahrt) '+ videoIco);
			//down
			$('#h_tshDownButt1').html('Keine Senkfahrt '+ videoIco);
			$('#h_tshDownButt2').html('Keine Vollgeschwindigkeit '+ videoIco);
			$('#h_tshDownButt3').html('Keine Schleichfahrt, Aufzug bleibt vor der Haltestelle stehen '+ videoIco);
			$('#h_tshDownButt4').html('Abbremsung in Schleichfahrt, Aufzug durchfährt die Haltestelle '+ videoIco);
			$('#h_tshDownButt5').html('Keine Abbremsung in Schleichfahrt, Aufzug durchfährt die Haltestelle '+ videoIco);
			$('#h_tshDownButt6').html('Aufzug sinkt sehr schnell '+ videoIco);
			$('#h_tshDownButt7').html('Aufzug sackt ab wegen innerer Undichtheit '+ videoIco);
			$('#h_tshDownButt8').html('Aufzug sackt wegen innerer Undichtheit der Zusatzkomponenten ab '+ videoIco);
			
			
			$('#printDiv').text('Drucken');	
			$('#TupProb').text('EV Störung Hubfahrt');
			$('#TdownProb').text('EV Störung Senkfahrt');	
			$('#upShow').text('Hubfahrt');
			$('#downShow').text('Senkfahrt');
			$('#helpUp').text('"Hubfahrt"  Störung Hubfahrt.');
			$('#helpDown').text('"Senkfahrt" Störung Senkfahrt.');
			$('#helpNavi').text('"☰" Navigation.');
			$('#helpMovie').text('Berühren Sie bitte text im feld "Mögliche Ursache" oder "Abhilfe" um das Video zu sehen.');	
			//$('#downExplain').html(posht_de);
			//$('#upExplain').html(lart_de);
			break;
		case "es":
     	 	$('#h_tshUpButt1').html('No inicia subida (el ascensor permanece en el piso) '+ videoIco);
			$('#h_tshUpButt2').html('Inicia subida, pero no a toda velocidad '+ videoIco);
			$('#h_tshUpButt3').html('Arranque duro de subida '+ videoIco);
			$('#h_tshUpButt4').html('No deceleración a la velocidad de nivelación '+ videoIco);
			$('#h_tshUpButt5').html('Nivelacion muy rapida '+ videoIco);
			$('#h_tshUpButt6').html('Deceleración a velocidad de nivelación, pero sobrecarrera del piso '+ videoIco);
			$('#h_tshUpButt7').html('No se puede ajustar la presión de derivacion '+ videoIco);
			$('#h_tshUpButt8').html('El ascensor para antes de llegar al piso (sin nivelacion) '+ videoIco);
			//down
			$('#h_tshDownButt1').html('No inicia bajada '+ videoIco);
			$('#h_tshDownButt2').html('Sin velocidad completa '+ videoIco);
			$('#h_tshDownButt3').html('Sin nivelación en bajada. El ascensor para antes del nivel del piso. '+ videoIco);
			$('#h_tshDownButt4').html('Deceleración a velocidad de nivelación y ascensor pasa el nivel del piso '+ videoIco);
			$('#h_tshDownButt5').html('No deceleración a velocidad de nivelación y ascensor pasa el nivel del piso '+ videoIco);
			$('#h_tshDownButt6').html('El ascensor baja rapidamente (solo velocidad completa) '+ videoIco);
			$('#h_tshDownButt7').html('El ascensor baja lentamente por fugas interiores (renivelación) '+ videoIco);
			$('#h_tshDownButt8').html('El ascensor baja a causa de fugas interiores de equipos auxiliares '+ videoIco);
			
			
			$('#printDiv').text('Drucken');	
			$('#TupProb').text('EV Subida');
			$('#TdownProb').text('EV Bajada');	
			$('#upShow').text('Subida');
			$('#downShow').text('Bajada');
			$('#helpUp').text('Subida');
			$('#helpDown').text('Bajada');
			$('#helpNavi').text('"☰" Navigation.');
			$('#helpMovie').text('Touch on "Possible cause" or "Recommended" text to see movie.');	
			//$('#downExplain').html(posht_de);
			//$('#upExplain').html(lart_de);
			break;
		default:
			$('#h_tshUpButt1').html('No Up-Start (Elevator remains at floor) '+ videoIco);
			$('#h_tshUpButt2').html('Up-Start, but no Full Speed  '+ videoIco);
			$('#h_tshUpButt3').html('Up-Start too hard '+ videoIco);
			$('#h_tshUpButt4').html('No deceleration into levelling speed '+ videoIco);
			$('#h_tshUpButt5').html('Levelling too fast '+ videoIco);
			$('#h_tshUpButt6').html('Deceleration into levelling speed but overtravel of floor level '+ videoIco);
			$('#h_tshUpButt7').html('Bypass-pressure not adjustable '+ videoIco);
			$('#h_tshUpButt8').html('Elevator stops before reaching the floor (no levelling) '+ videoIco);
			//down
			$('#h_tshDownButt1').html('No Down Start '+ videoIco);
			$('#h_tshDownButt2').html('No full speed '+ videoIco);
			$('#h_tshDownButt3').html('No down levelling. Elevator stops before floor level'+ videoIco);
			$('#h_tshDownButt4').html('No down levelling. Elevator travels though floor level'+ videoIco);
			$('#h_tshDownButt5').html('No deceleration into levelling speed. Elevator travels though floor level'+ videoIco);
			$('#h_tshDownButt6').html('Elevator sinks quickly '+ videoIco);
			$('#h_tshDownButt7').html('Elevator sinks slowly due to inner leakage (Relevelling)'+ videoIco);
			$('#h_tshDownButt8').html('Elevator sinks due to inner leakage of auxiliary equipment'+ videoIco);
			
			$('#printDiv').text('Print');
			$('#TupProb').text('Up Problems');
			$('#TdownProb').text('Down Problems');
			$('#upShow').text('Up ');
			$('#downShow').text('Down');
			$('#helpUp').text('"Up" Trouble shooting.');
			$('#helpDown').text('"Down" Trouble shootig.');
			$('#helpNavi').text('"☰" button for up or down navigation.');
			$('#helpMovie').text('Touch on "Possible cause" or "Recommended" text to see movie.');
			//$('#downExplain').html(posht_en);
			//$('#upExplain').html(lart_en);
			break;
		}

}
//-------------------------------------------------
function tregoDivs(start,ende,sprache){
	//alert("start-"+start+"  mbarim-"+ende);
	var m;
	m=0;
	for (m=0; m<74; m++){
				if((m>start)&&(m<=ende)){
					//alert(m);
					$('#trouble_'+m+"_"+sprache).show();
					}else{$('#trouble_'+m+"_"+sprache).hide();}
			}
}

function fshehDivs(start,ende,sprache){
	//alert(m);
	m=0;
	for (m=0; m<76; m++){
			$('#trouble_'+m+"_"+sprache).hide();
			}
		
}

function hideShowDiv(fehlerID,sprache){
	//alert(fehlerID+":"+sprache);
	/*if(sprache == "de"){
		$('#textTroubleDeutsch').show();
		$('#textTroubleEnglish').hide();
		}else{
			$('#textTroubleDeutsch').hide();
			$('#textTroubleEnglish').show();
			}   */
 /*     n=1;
  switch(sprache){
		case "de": 
			for (n=1; n<72; n++){ 				
					$('#trouble_'+m+"_gb").hide();
					
			}   				
			break;
    case "gb": 
			for (n=1; n<72; n++){ 				
					$('#trouble_'+m+"_de").hide();
					
			}   				
			break;    */
	m=1;
	switch(fehlerID){
		case "tshUpButt1": 
			tregoDivs(0,13,sprache);
			/*
			for (m=1; m<74; m++){
				if(m>13){
					$('#trouble_'+m+"_"+sprache).hide();
					}else{
						$('#trouble_'+m+"_"+sprache).show();
					}
			}
				*/
			break;
		case "tshUpButt2":
			tregoDivs(13,19,sprache);
			break;
		case "tshUpButt3":
			tregoDivs(19,25,sprache);
			break;
		case "tshUpButt4":
			tregoDivs(25,28,sprache);
			break;
		case "tshUpButt5":
			tregoDivs(28,29,sprache);
			break;
		case "tshUpButt6":
			tregoDivs(29,33,sprache);
			break;
		case "tshUpButt7":
			tregoDivs(33,35,sprache);
			break;
		case "tshUpButt8":
			tregoDivs(35,39,sprache);
			break;
		//down
		case "tshDownButt1":
			tregoDivs(39,44,sprache);
			break;
		case "tshDownButt2":
			tregoDivs(44,48,sprache);
			break;
		case "tshDownButt3":
			tregoDivs(48,52,sprache);
			break;
		case "tshDownButt4":
			tregoDivs(52,54,sprache);
			break;
		case "tshDownButt5":
			tregoDivs(54,56,sprache);
			break;
		case "tshDownButt6":
			tregoDivs(56,59,sprache);
			break;
		case "tshDownButt7":
			tregoDivs(59,66,sprache);
			break;
		case "tshDownButt8":
			tregoDivs(66,73,sprache);
			break;
	default:
		//alert('default');
		//	fshehDivs(1,73,sprache);    //kjo ishte deri13.04.16
      tregoDivs(0,76,sprache);
			break;
		
		}
	
}