/*****
XIT Consult
Version 0.1
Last revision: 2010.12.30
www.websitesgarage.com
Please leave this notice intact.
*****/
$('document').ready(function(){
	$('a:not([href^="mailto"]):not([target="_blank"]):not([rel^="lytebox"])').bind('click',function(e){
		$('#xit-content').fadeTo(2000,0.01);
	});
});
        
function blinkText() {
                if (!document.all) return;
                else {
                        for(i=0;i<document.all.tags('blink').length;i++)
                              {
                              s=document.all.tags('blink')[i];
                              s.style.visibility=(s.style.visibility=='visible') ?'hidden':'visible';
                      }
              }
      }

var NLwebstie_prime1 = 7;var NLwebstie_prime2 = 11;var NLwebstie_offset = 43;function _nlwebsite_decode(encoded) {	var out = "";	var str = encoded.split("%");	for(j=str.length-2;j>=0;j--){		_t = parseInt(parseInt(str[j]).toString(NLwebstie_prime2), NLwebstie_prime1);		out += String.fromCharCode(_t + NLwebstie_offset);	}	return out;}function nlwebsite_liam(bare) {	var end = "23%148%157%145%138%126%146%";	var link = bare + end;	return '<A HREF="' + _nlwebsite_decode(link) + '">' + _nlwebsite_decode(bare) + '</A>';}

