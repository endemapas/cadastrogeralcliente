var size = 0;
var placement = 'point';
function categories_LinhaSIMIONEIII_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'A1_C1 ':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(218,88,76,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 7.827999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'A1_C2 ':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(77,143,213,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 7.827999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'A1_C3 ':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(206,72,177,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 7.827999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'A1_C4 ':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(112,45,229,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 7.827999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'A1_C5 ':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(91,206,60,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 7.827999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'A1_C6 ':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(60,230,168,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 7.827999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(206,196,56,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 7.827999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_LinhaSIMIONEIII_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("Chave");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_LinhaSIMIONEIII_3(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
