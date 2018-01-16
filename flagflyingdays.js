/*
** Liputuspäivät -skripti:
** Skripti tulostaa sivulle Suomalaiset viralliset liputuspäivät
** ja vakiintuneet liputuspäivät. HUOM! Näiden lisäksi
** Suomessa liputetaan vaalipäivinä ja tasavallan presidentin
** virkaanastumispäivänä. <-- Nämä päivät eivät ole mukana
** kriptissä. Päivät päättää Oikeusministeriö. KS:
** http://www.vaalit.fi/fi/index/ajankohtaista/vuosina2013-2030jarjestettavatvaalit.html
**
** Lisenssi: 
** Some rights reserved!
** Creative Commons CC BY-NC-SA
**
**
** variables now and paiva are global. They have been defined 
** @ skripts:
** - mika_viikonpaiva_kuukausi_paiva_vuosi.js
** - nimipaivat.js
** If you are not yousing tose script, you can define them here
** by removing the // comments below:
*/

	var now = new Date()
	var nyt = now
	var mothersDayDate = 0
	var fathersDayDate = 0
	var midSummerDayDate = 0
	var kiaDayDate = 0
	var lippu = '<img src="kuvat/suomen_lippu.png" width="18" height="13">' // You need to have this file!
function getMothersDayDate() { 
		var year = now.getFullYear();
		var date = new Date(year, 4, 7);
		date.setDate(7 + (7 - date.getDay()));
		//console.log("Äitienpäivä tänä vuonna on "+dayNames[date.getDay()]+" "+ monNames[date.getMonth()]+" "+date.getDate());
		mothersDayDate = date.getDate();
		getFathersDayDate()
}
function getFathersDayDate() {
		var year = now.getFullYear();
		var fdate = new Date(year, 10, 7);
		fdate.setDate(7 + (7 - fdate.getDay()));
		//console.log("Isänpäivä tänä vuonna on "+dayNames[fdate.getDay()]+" "+ monNames[fdate.getMonth()]+" "+fdate.getDate());
		fathersDayDate = fdate.getDate();
		getMidSummerDayDate()
}
function getMidSummerDayDate() {
		var year = now.getFullYear();
		var mdate = new Date(year, 5, 19);
		mdate.setDate(19 + (6 - mdate.getDay()));
		console.log("Juhannus tänä vuonna on "+dayNames[mdate.getDay()]+" "+ monNames[mdate.getMonth()]+" "+mdate.getDate());
		midSummerDayDate = mdate.getDate();
		getKiaDayDate()
}
function getKiaDayDate() {
		var year = now.getFullYear();
		var kdate = new Date(year, 4, 14);
		kdate.setDate(14 + (7 - kdate.getDay()));
		//console.log("Kaatuneiden muistopäivä tänä vuonna on "+dayNames[kdate.getDay()]+" "+ monNames[kdate.getMonth()]+" "+kdate.getDate());
		kiaDayDate = kdate.getDate();
		leapYear()
}

var leapYearBoolean = false
function leapYear() {
		var year = now.getFullYear();
		var vastaus = "on karkauspäivä"
		if (((year % 4 == 0) && (year % 100 !=0)) || (year % 400 == 0)) {
			leapYearBoolean = true;
			vastaus =" on karkausvuosi"}
		else {
			leapYearBoolean = false;
			vastaus = " ei ole karkausvuosi"
			};
		//console.log(year+vastaus)	
		flagFlyingDays()		
}	
var eil = "<a href=\"http://www.webcal.fi/fi-FI/liputuspaivat.php\" class=\"info\" target=\"_blank\">Tänään ei ole liputuspäivä<span class=\"infot\" style=\"position: absolute; top: 25px; left:25px; z-index: 15; width: 320px; height: 185px;\">Muistathan, että virallisten ja vakiintuneiden liputuspäivien lisäksi liputetaan vaalipäivinä, jolloin toimitetaan:<br> - kuntavaalit<br> - eduskuntavaalit<br> - presidentinvaali<br> - Euroopan parlamenttivaalit<br> - tai kansanäänestys<br><br>Vaalipäivien lisäksi liputetaan päivänä, jolloin tasavallan presidentti astuu toimeen.</span></a>";
function flagFlyingDays() {
	//console.log("Function flagFlyingDays firing up!");
		
	tammikuu = new Array(31);
	
	for (i=0; i<31; i++) {
		tammikuu[i]=eil;
	}

	maaliskuu = new Array(31);
	maaliskuu[0]=eil;
	maaliskuu[1]=eil;
	maaliskuu[2]=eil;
	maaliskuu[3]=eil;
	maaliskuu[4]=eil;
	maaliskuu[5]=eil;
	maaliskuu[6]=eil;
	maaliskuu[7]=eil;
	maaliskuu[8]=eil;
	maaliskuu[9]=eil;
	maaliskuu[10]=eil;
	maaliskuu[11]=eil;
	maaliskuu[12]=eil;
	maaliskuu[13]=eil;
	maaliskuu[14]=eil;
	maaliskuu[15]=eil;
	maaliskuu[16]=eil;
	maaliskuu[17]=lippu+" Minna Canthin päivä, tasa-arvon päivä";
	maaliskuu[18]=eil;
	maaliskuu[19]=eil;
	maaliskuu[20]=eil;
	maaliskuu[21]=eil;
	maaliskuu[22]=eil;
	maaliskuu[23]=eil;
	maaliskuu[24]=eil;
	maaliskuu[25]=eil;
	maaliskuu[26]=eil;
	maaliskuu[27]=eil;
	maaliskuu[28]=eil;
	maaliskuu[29]=eil;
	maaliskuu[30]=eil;

	huhtikuu = new Array(30);
	huhtikuu[0]=eil;
	huhtikuu[1]=eil;
	huhtikuu[2]=eil;
	huhtikuu[3]=eil;
	huhtikuu[4]=eil;
	huhtikuu[5]=eil;
	huhtikuu[6]=eil;
	huhtikuu[7]=eil;
	huhtikuu[8]=lippu+" Mikael Agricolan päivä, suomen kielen päivä";
	huhtikuu[9]=eil;
	huhtikuu[10]=eil;
	huhtikuu[11]=eil;
	huhtikuu[12]=eil;
	huhtikuu[13]=eil;
	huhtikuu[14]=eil;
	huhtikuu[15]=eil;
	huhtikuu[16]=eil;
	huhtikuu[17]=eil;
	huhtikuu[18]=eil;
	huhtikuu[19]=eil;
	huhtikuu[20]=eil;
	huhtikuu[21]=eil;
	huhtikuu[22]=eil;
	huhtikuu[23]=eil;
	huhtikuu[24]=eil;
	huhtikuu[25]=eil;
	huhtikuu[26]=lippu+" Kansallinen veteraanipäivä";
	huhtikuu[27]=eil;
	huhtikuu[28]=eil;
	huhtikuu[29]=eil;

	toukokuu = new Array(31);
	toukokuu[0]=lippu+" Vappu, suomalaisen työn päivä";
	toukokuu[1]=eil;
	toukokuu[2]=eil;
	toukokuu[3]=eil;
	toukokuu[4]=eil;
	toukokuu[5]=eil;
	toukokuu[6]=eil;
	toukokuu[7]=eil;
	toukokuu[8]=lippu+" Eurooppa-päivä";
	toukokuu[9]=eil;
	toukokuu[10]=eil;
	toukokuu[11]=lippu+" J. V. Snellmannin päivä, suomalaisuuden päivä";
	toukokuu[12]=eil;
	toukokuu[13]=eil;
	toukokuu[14]=eil;
	toukokuu[15]=eil;
	toukokuu[16]=eil;
	toukokuu[17]=eil;
	toukokuu[18]=eil;
	toukokuu[19]=eil;
	toukokuu[20]=eil;
	toukokuu[21]=eil;
	toukokuu[22]=eil;
	toukokuu[23]=eil;
	toukokuu[24]=eil;
	toukokuu[25]=eil;
	toukokuu[26]=eil;
	toukokuu[27]=eil;
	toukokuu[28]=eil;
	toukokuu[29]=eil;
	toukokuu[30]=eil;

	kesakuu = new Array(30);
	kesakuu[0]=eil;
	kesakuu[1]=eil;
	kesakuu[2]=eil;
	kesakuu[3]=lippu+" Puolustusvoimain lippujuhlan päivä";
	kesakuu[4]=eil;
	kesakuu[5]=eil;
	kesakuu[6]=eil;
	kesakuu[7]=eil;
	kesakuu[8]=eil;
	kesakuu[9]=eil;
	kesakuu[10]=eil;
	kesakuu[11]=eil;
	kesakuu[12]=eil;
	kesakuu[13]=eil;
	kesakuu[14]=eil;
	kesakuu[15]=eil;
	kesakuu[16]=eil;
	kesakuu[17]=eil;
	kesakuu[18]=eil;
	kesakuu[19]=eil;
	kesakuu[20]=eil;
	kesakuu[21]=eil;
	kesakuu[22]=eil;
	kesakuu[23]=eil;
	kesakuu[24]=eil;
	kesakuu[25]=eil;
	kesakuu[26]=eil;
	kesakuu[27]=eil;
	kesakuu[28]=eil;
	kesakuu[29]=eil;

	heinakuu = new Array(31);
	heinakuu[0]=eil;
	heinakuu[1]=eil;
	heinakuu[2]=eil;
	heinakuu[3]=eil;
	heinakuu[4]=eil;
	heinakuu[5]=lippu+" Eino Leinon päivä, runon ja suven päivä";
	heinakuu[6]=eil;
	heinakuu[7]=eil;
	heinakuu[8]=eil;
	heinakuu[9]=eil;
	heinakuu[10]=eil;
	heinakuu[11]=eil;
	heinakuu[12]=eil;
	heinakuu[13]=eil;
	heinakuu[14]=eil;
	heinakuu[15]=eil;
	heinakuu[16]=eil;
	heinakuu[17]=eil;
	heinakuu[18]=eil;
	heinakuu[19]=eil;
	heinakuu[20]=eil;
	heinakuu[21]=eil;
	heinakuu[22]=eil;
	heinakuu[23]=eil;
	heinakuu[24]=eil;
	heinakuu[25]=eil;
	heinakuu[26]=eil;
	heinakuu[27]=eil;
	heinakuu[28]=eil;
	heinakuu[29]=eil;
	heinakuu[30]=eil;

	elokuu = new Array(31);
	elokuu[0]=eil;
	elokuu[1]=eil;
	elokuu[2]=eil;
	elokuu[3]=eil;
	elokuu[4]=eil;
	elokuu[5]=eil;
	elokuu[6]=eil;
	elokuu[7]=eil;
	elokuu[8]=eil;
	elokuu[9]=eil;
	elokuu[10]=eil;
	elokuu[11]=eil;
	elokuu[12]=eil;
	elokuu[13]=eil;
	elokuu[14]=eil;
	elokuu[15]=eil;
	elokuu[16]=eil;
	elokuu[17]=eil;
	elokuu[18]=eil;
	elokuu[19]=eil;
	elokuu[20]=eil;
	elokuu[21]=eil;
	elokuu[22]=eil;
	elokuu[23]=eil;
	elokuu[24]=eil;
	elokuu[25]=eil;
	elokuu[26]=eil;
	elokuu[27]=eil;
	elokuu[28]=eil;
	elokuu[29]=eil;
	elokuu[30]=eil;

	syyskuu = new Array(30);
	syyskuu[0]=eil;
	syyskuu[1]=eil;
	syyskuu[2]=eil;
	syyskuu[3]=eil;
	syyskuu[4]=eil;
	syyskuu[5]=eil;
	syyskuu[6]=eil;
	syyskuu[7]=eil;
	syyskuu[8]=eil;
	syyskuu[9]=eil;
	syyskuu[10]=eil;
	syyskuu[11]=eil;
	syyskuu[12]=eil;
	syyskuu[13]=eil;
	syyskuu[14]=eil;
	syyskuu[15]=eil;
	syyskuu[16]=eil;
	syyskuu[17]=eil;
	syyskuu[18]=eil;
	syyskuu[19]=eil;
	syyskuu[20]=eil;
	syyskuu[21]=eil;
	syyskuu[22]=eil;
	syyskuu[23]=eil;
	syyskuu[24]=eil;
	syyskuu[25]=eil;
	syyskuu[26]=eil;
	syyskuu[27]=eil;
	syyskuu[28]=eil;
	syyskuu[29]=eil;

	lokakuu = new Array(31);
	lokakuu[0]=eil;
	lokakuu[1]=eil;
	lokakuu[2]=eil;
	lokakuu[3]=eil;
	lokakuu[4]=eil;
	lokakuu[5]=eil;
	lokakuu[6]=eil;
	lokakuu[7]=eil;
	lokakuu[8]=eil;
	lokakuu[9]=lippu+" Aleksis Kiven päivä, suomalaisen kirjallisuuden päivä"
	lokakuu[10]=eil;
	lokakuu[11]=eil;
	lokakuu[12]=eil;
	lokakuu[13]=eil;
	lokakuu[14]=eil;
	lokakuu[15]=eil;
	lokakuu[16]=eil;
	lokakuu[17]=eil;
	lokakuu[18]=eil;
	lokakuu[19]=eil;
	lokakuu[20]=eil;
	lokakuu[21]=eil;
	lokakuu[22]=eil;
	lokakuu[23]=lippu+" Yhdistyneiden Kansakuntien (YK:n) päivä"
	lokakuu[24]=eil;
	lokakuu[25]=eil;
	lokakuu[26]=eil;
	lokakuu[27]=eil;
	lokakuu[28]=eil;
	lokakuu[29]=eil;
	lokakuu[30]=eil;

	marraskuu = new Array(30);
	marraskuu[0]=eil;
	marraskuu[1]=eil;
	marraskuu[2]=eil;
	marraskuu[3]=eil;
	marraskuu[4]=eil;
	marraskuu[5]=lippu+" Ruotsalaisuuden päivä";
	marraskuu[6]=eil;
	marraskuu[7]=eil; 
	marraskuu[8]=eil;
	marraskuu[9]=eil;
	marraskuu[10]=eil;
	marraskuu[11]=eil;
	marraskuu[12]=eil;
	marraskuu[13]=eil;
	marraskuu[14]=eil;
	marraskuu[15]=eil;
	marraskuu[16]=eil;
	marraskuu[17]=eil;
	marraskuu[18]=eil;
	marraskuu[19]=lippu+" Tänään on ei-vakiintunut-liputuspäivä: Kansainvälinen lasten päivä";
	marraskuu[20]=eil;
	marraskuu[21]=eil;
	marraskuu[22]=eil;
	marraskuu[23]=eil;
	marraskuu[24]=eil;
	marraskuu[25]=eil;
	marraskuu[26]=eil;
	marraskuu[27]=eil;
	marraskuu[28]=eil;
	marraskuu[29]=eil;

	joulukuu = new Array(31);
	joulukuu[0]=eil;
	joulukuu[1]=eil;
	joulukuu[2]=eil;
	joulukuu[3]=eil;
	joulukuu[4]=eil;
	joulukuu[5]=lippu+" Suomen itsenäisyyspäivä"
	joulukuu[6]=eil;
	joulukuu[7]=lippu+" Jean Sibeliuksen päivä, suomalaisen musiikin päivä";
	joulukuu[8]=eil;
	joulukuu[9]=eil;
	joulukuu[10]=eil;
	joulukuu[11]=eil;
	joulukuu[12]=eil;
	joulukuu[13]=eil;
	joulukuu[14]=eil;
	joulukuu[15]=eil;
	joulukuu[16]=eil;
	joulukuu[17]=eil;
	joulukuu[18]=eil;
	joulukuu[19]=eil;
	joulukuu[20]=eil;
	joulukuu[21]=eil;
	joulukuu[22]=eil;
	joulukuu[23]=eil;
	joulukuu[24]=eil;
	joulukuu[25]=eil;
	joulukuu[26]=eil;
	joulukuu[27]=eil;
	joulukuu[28]=eil;
	joulukuu[29]=eil;
	joulukuu[30]=eil;
	
constructProperFebruary();
insertFloatingDays();
writeFlagFlyingDays();
}
function constructProperFebruary() {
	//console.log("Function constructProperFebruary firing up!")		
if (leapYearBoolean == true) {
	helmikuu = new Array(29);
	helmikuu[0]=eil;
	helmikuu[1]=eil;
	helmikuu[2]=eil;
	helmikuu[3]=eil;
	helmikuu[4]=lippu+" J. L. Runebergin päivä";
	helmikuu[5]=eil;
	helmikuu[6]=eil;
	helmikuu[7]=eil;
	helmikuu[8]=eil;
	helmikuu[9]=eil;
	helmikuu[10]=eil;
	helmikuu[11]=eil;
	helmikuu[12]=eil;
	helmikuu[13]=eil;
	helmikuu[14]=eil;
	helmikuu[15]=eil;
	helmikuu[16]=eil;
	helmikuu[17]=eil
	helmikuu[18]=eil;
	helmikuu[19]=eil;
	helmikuu[20]=eil;
	helmikuu[21]=eil;
	helmikuu[22]=eil;
	helmikuu[23]=eil;
	helmikuu[24]=eil;
	helmikuu[25]=eil;
	helmikuu[26]=eil;
	helmikuu[27]=lippu+" Kalevalan päivä, suomalaisen kulttuurin päivä";
	helmikuu[28]=eil;
	}
	else {
	helmikuu = new Array(28);
	helmikuu[0]=eil;
	helmikuu[1]=eil;
	helmikuu[2]=eil;
	helmikuu[3]=eil;
	helmikuu[4]=lippu+" J. L. Runebergin päivä";
	helmikuu[5]=eil;
	helmikuu[6]=eil;
	helmikuu[7]=eil;
	helmikuu[8]=eil;
	helmikuu[9]=eil;
	helmikuu[10]=eil;
	helmikuu[11]=eil;
	helmikuu[12]=eil;
	helmikuu[13]=eil;
	helmikuu[14]=eil;
	helmikuu[15]=eil;
	helmikuu[16]=eil;
	helmikuu[17]=eil;
	helmikuu[18]=eil;
	helmikuu[19]=eil;
	helmikuu[20]=eil;
	helmikuu[21]=eil;
	helmikuu[22]=eil;
	helmikuu[23]=eil;
	helmikuu[24]=eil;
	helmikuu[25]=eil;
	helmikuu[26]=eil;
	helmikuu[27]=lippu+" Kalevalan päivä, suomalaisen kulttuurin päivä";	
	}
}
function insertMothersDay() {
	//console.log("Function insertMothersDay firing up!");
	x = mothersDayDate-1
	toukokuu[x]=lippu+" Äitienpäivä";
}
function insertFathersDay() {
	//console.log("Function insertFathersDay firing up!");
	x = fathersDayDate-1
	marraskuu[x]=lippu+" Isänpäivä";
}
function insertMidSummerDay() {
	//console.log("Function insertMidSummerDay firing up!");
	y = midSummerDayDate-2;
	x = midSummerDayDate-1;
	
	kesakuu[y]=lippu+" Juhannusaatto (liputus alkaa klo 18:00)"
	kesakuu[x]=lippu+" Juhannus (liputus päättyy klo 21:00)";
}
function insertKiaDay() {
	//console.log("Function insertKiaDay firing up!");
	x = kiaDayDate-1
	toukokuu[x]=lippu+" Kaatuneiden muistopäivä";
}
function insertFloatingDays() {
	//console.log("Function insertFloatingDays firing up!");
insertMothersDay();
insertFathersDay();
insertMidSummerDay();
insertKiaDay();
}
function writeFlagFlyingDays() {
	//console.log("Function writeFlagFlyingDays firing up!");
// Tarkistetaan kuukausi ja päivä, sijoitetaan päivä nimipv -muuttujaan
if(kuukausi == 0)nimipv=tammikuu[paiva-1];
if(kuukausi == 1)nimipv=helmikuu[paiva-1];
if(kuukausi == 2)nimipv=maaliskuu[paiva-1];
if(kuukausi == 3)nimipv=huhtikuu[paiva-1];
if(kuukausi == 4)nimipv=toukokuu[paiva-1];
if(kuukausi == 5)nimipv=kesakuu[paiva-1];
if(kuukausi == 6)nimipv=heinakuu[paiva-1];
if(kuukausi == 7)nimipv=elokuu[paiva-1];
if(kuukausi == 8)nimipv=syyskuu[paiva-1];
if(kuukausi == 9)nimipv=lokakuu[paiva-1];
if(kuukausi == 10)nimipv=marraskuu[paiva-1];
if(kuukausi == 11)nimipv=joulukuu[paiva-1];
//console.log("Liputuspäivä: "+nimipv+".");
document.getElementById('liputuspaiva').innerHTML=("<p>" + nimipv +"</p>");
}