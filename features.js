var colors = [
    [255,255,255],
    [245,212,133],
    [234,209,220],
    [245,214,186],
    [255,192,127],
    [255,180,157],
    [234,197,218],
    [255,180,157],
    [238,181,204],
    [245,212,133],
    [234,197,218],
    [245,212,133],
    [140,255,149],
    [57,57,104]
   
    
    
   ];

var height = $('body').height() - window.innerHeight;

$(document).scroll(function() {
 var steps = Math.floor(height / colors.length);
 var position = $(this).scrollTop();
 var currentStep = Math.floor(position / steps);
 if ( currentStep === colors.length ) currentStep = colors.length - 1;
 var rgb = $("body").css('background-color').replace('rgb(','').replace(')','').replace(/\s/g, '').split(',');     
 var previousColor = colors[currentStep] || colors[0];
 var nextColor = colors[currentStep+1] || colors[colors.length-1];
 var percentFromThisStep = ( position - ( currentStep * steps ) ) / steps;
 if ( percentFromThisStep > 1 ) percentFromThisStep = 1;

 var newRgb = [
    Math.floor(previousColor[0] + ( ( nextColor[0] - previousColor[0] ) * percentFromThisStep )),
    Math.floor(previousColor[1] + ( ( nextColor[1] - previousColor[1] ) * percentFromThisStep )),
    Math.floor(previousColor[2] + ( ( nextColor[2] - previousColor[2] ) * percentFromThisStep ))
 ];

 $("body").css('background-color', 'rgb('+ newRgb.join(',') +')');
});