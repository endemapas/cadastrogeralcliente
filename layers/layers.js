ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([13.179646, -8.951933, 13.314611, -8.884451]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PTsLotes_1 = new ol.format.GeoJSON();
var features_PTsLotes_1 = format_PTsLotes_1.readFeatures(json_PTsLotes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PTsLotes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PTsLotes_1.addFeatures(features_PTsLotes_1);
var lyr_PTsLotes_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PTsLotes_1, 
                style: style_PTsLotes_1,
                popuplayertitle: 'PT´s Lotes',
                interactive: true,
                title: '<img src="styles/legend/PTsLotes_1.png" /> PT´s Lotes'
            });
var format_ArmriosGeral_2 = new ol.format.GeoJSON();
var features_ArmriosGeral_2 = format_ArmriosGeral_2.readFeatures(json_ArmriosGeral_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmriosGeral_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmriosGeral_2.addFeatures(features_ArmriosGeral_2);
var lyr_ArmriosGeral_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmriosGeral_2, 
                style: style_ArmriosGeral_2,
                popuplayertitle: 'Armários Geral',
                interactive: true,
                title: '<img src="styles/legend/ArmriosGeral_2.png" /> Armários Geral'
            });
var format_Apoios_3 = new ol.format.GeoJSON();
var features_Apoios_3 = format_Apoios_3.readFeatures(json_Apoios_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Apoios_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Apoios_3.addFeatures(features_Apoios_3);
var lyr_Apoios_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Apoios_3, 
                style: style_Apoios_3,
                popuplayertitle: 'Apoios',
                interactive: true,
                title: '<img src="styles/legend/Apoios_3.png" /> Apoios'
            });
var format_ClientesGeral_4 = new ol.format.GeoJSON();
var features_ClientesGeral_4 = format_ClientesGeral_4.readFeatures(json_ClientesGeral_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ClientesGeral_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClientesGeral_4.addFeatures(features_ClientesGeral_4);
var lyr_ClientesGeral_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClientesGeral_4, 
                style: style_ClientesGeral_4,
                popuplayertitle: 'Clientes Geral',
                interactive: true,
                title: '<img src="styles/legend/ClientesGeral_4.png" /> Clientes Geral'
            });
var format_BairrosLotes_5 = new ol.format.GeoJSON();
var features_BairrosLotes_5 = format_BairrosLotes_5.readFeatures(json_BairrosLotes_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BairrosLotes_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BairrosLotes_5.addFeatures(features_BairrosLotes_5);
var lyr_BairrosLotes_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BairrosLotes_5, 
                style: style_BairrosLotes_5,
                popuplayertitle: 'Bairros Lotes',
                interactive: false,
                title: '<img src="styles/legend/BairrosLotes_5.png" /> Bairros Lotes'
            });
var group_Geral = new ol.layer.Group({
                                layers: [lyr_PTsLotes_1,lyr_ArmriosGeral_2,lyr_Apoios_3,lyr_ClientesGeral_4,lyr_BairrosLotes_5,],
                                fold: "open",
                                title: 'Geral'});
var group_SimioneIII = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Simione III'});
var group_MAPAS = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,],
                                fold: "open",
                                title: 'MAPAS'});

lyr_GoogleSatellite_0.setVisible(true);lyr_PTsLotes_1.setVisible(true);lyr_ArmriosGeral_2.setVisible(true);lyr_Apoios_3.setVisible(false);lyr_ClientesGeral_4.setVisible(false);lyr_BairrosLotes_5.setVisible(true);
var layersList = [group_MAPAS,group_Geral];
lyr_PTsLotes_1.set('fieldAliases', {'Name': 'Name', 'Divisão': 'Divisão', 'PT': 'PT', 'Serviço': 'Serviço', 'KVA': 'KVA', 'Tipo': 'Tipo', 'Município': 'Município', 'Bairro': 'Bairro', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Armarios': 'Armarios', 'Injectores': 'Injectores', 'Apoios': 'Apoios', 'Ligações': 'Ligações', });
lyr_ArmriosGeral_2.set('fieldAliases', {'Name': 'Name', 'Divisão': 'Divisão', 'Chave_Cada': 'Chave_Cada', 'PT': 'PT', 'Tipo': 'Tipo', 'Armário': 'Armário', 'Saídas': 'Saídas', 'Marca': 'Marca', 'IMG_Interi': 'IMG_Interi', 'IMG_Exteri': 'IMG_Exteri', 'Link_Image': 'Link_Image', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Data_Cadas': 'Data_Cadas', 'Técnicos': 'Técnicos', });
lyr_Apoios_3.set('fieldAliases', {'Divisao': 'Divisao', 'Chave Cada': 'Chave Cada', 'PT': 'PT', 'Dependenci': 'Dependenci', 'Armario': 'Armario', 'Injector': 'Injector', 'Derivacao': 'Derivacao', 'Travessa': 'Travessa', 'N� Ordem': 'N� Ordem', 'Circuitos': 'Circuitos', 'Chave Apoi': 'Chave Apoi', 'Liga��': 'Liga��', 'Tipo': 'Tipo', 'Caracteris': 'Caracteris', 'Estado Apo': 'Estado Apo', 'Resistenci': 'Resistenci', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Data Cadas': 'Data Cadas', 'Tecnico': 'Tecnico', });
lyr_ClientesGeral_4.set('fieldAliases', {'Chave Cada': 'Chave Cada', 'PT': 'PT', 'Dependênc': 'Dependênc', 'Chave Apoi': 'Chave Apoi', 'Nº Porta': 'Nº Porta', 'Ligação': 'Ligação', 'Condição': 'Condição', 'Valida��': 'Valida��', 'Metros Bai': 'Metros Bai', 'Data Cadas': 'Data Cadas', 'Técnico d': 'Técnico d', 'Estado Rec': 'Estado Rec', });
lyr_BairrosLotes_5.set('fieldAliases', {'fid': 'fid', 'Nome_Prov�': 'Nome_Prov�', 'Nome_Munic': 'Nome_Munic', 'Nome_Comun': 'Nome_Comun', 'Nome_Bairr': 'Nome_Bairr', });
lyr_PTsLotes_1.set('fieldImages', {'Name': 'TextEdit', 'Divisão': '', 'PT': 'TextEdit', 'Serviço': '', 'KVA': '', 'Tipo': 'TextEdit', 'Município': '', 'Bairro': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Armarios': '', 'Injectores': 'TextEdit', 'Apoios': 'TextEdit', 'Ligações': '', });
lyr_ArmriosGeral_2.set('fieldImages', {'Name': 'TextEdit', 'Divisão': '', 'Chave_Cada': 'TextEdit', 'PT': 'TextEdit', 'Tipo': 'TextEdit', 'Armário': '', 'Saídas': '', 'Marca': 'TextEdit', 'IMG_Interi': 'TextEdit', 'IMG_Exteri': 'TextEdit', 'Link_Image': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Data_Cadas': 'TextEdit', 'Técnicos': '', });
lyr_Apoios_3.set('fieldImages', {'Divisao': 'TextEdit', 'Chave Cada': 'TextEdit', 'PT': 'TextEdit', 'Dependenci': 'TextEdit', 'Armario': 'TextEdit', 'Injector': 'TextEdit', 'Derivacao': 'TextEdit', 'Travessa': 'TextEdit', 'N� Ordem': 'TextEdit', 'Circuitos': 'TextEdit', 'Chave Apoi': 'TextEdit', 'Liga��': 'TextEdit', 'Tipo': 'TextEdit', 'Caracteris': 'TextEdit', 'Estado Apo': 'TextEdit', 'Resistenci': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Data Cadas': 'TextEdit', 'Tecnico': 'TextEdit', });
lyr_ClientesGeral_4.set('fieldImages', {'Chave Cada': 'TextEdit', 'PT': 'TextEdit', 'Dependênc': '', 'Chave Apoi': 'TextEdit', 'Nº Porta': 'TextEdit', 'Ligação': 'TextEdit', 'Condição': '', 'Valida��': 'TextEdit', 'Metros Bai': 'TextEdit', 'Data Cadas': 'TextEdit', 'Técnico d': '', 'Estado Rec': 'TextEdit', });
lyr_BairrosLotes_5.set('fieldImages', {'fid': 'TextEdit', 'Nome_Prov�': 'TextEdit', 'Nome_Munic': 'TextEdit', 'Nome_Comun': 'TextEdit', 'Nome_Bairr': 'TextEdit', });
lyr_PTsLotes_1.set('fieldLabels', {'Name': 'inline label - visible with data', 'Divisão': 'inline label - visible with data', 'PT': 'inline label - visible with data', 'Serviço': 'inline label - visible with data', 'KVA': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Município': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Armarios': 'inline label - visible with data', 'Injectores': 'inline label - visible with data', 'Apoios': 'inline label - visible with data', 'Ligações': 'inline label - visible with data', });
lyr_ArmriosGeral_2.set('fieldLabels', {'Name': 'inline label - visible with data', 'Divisão': 'inline label - visible with data', 'Chave_Cada': 'inline label - visible with data', 'PT': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Armário': 'inline label - visible with data', 'Saídas': 'inline label - visible with data', 'Marca': 'inline label - visible with data', 'IMG_Interi': 'inline label - visible with data', 'IMG_Exteri': 'inline label - visible with data', 'Link_Image': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Data_Cadas': 'inline label - visible with data', 'Técnicos': 'inline label - visible with data', });
lyr_Apoios_3.set('fieldLabels', {'Divisao': 'inline label - visible with data', 'Chave Cada': 'inline label - visible with data', 'PT': 'inline label - visible with data', 'Dependenci': 'inline label - visible with data', 'Armario': 'inline label - visible with data', 'Injector': 'inline label - visible with data', 'Derivacao': 'inline label - visible with data', 'Travessa': 'inline label - visible with data', 'N� Ordem': 'inline label - visible with data', 'Circuitos': 'inline label - visible with data', 'Chave Apoi': 'inline label - visible with data', 'Liga��': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Caracteris': 'inline label - visible with data', 'Estado Apo': 'inline label - visible with data', 'Resistenci': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Data Cadas': 'inline label - visible with data', 'Tecnico': 'inline label - visible with data', });
lyr_ClientesGeral_4.set('fieldLabels', {'Chave Cada': 'inline label - visible with data', 'PT': 'inline label - visible with data', 'Dependênc': 'inline label - visible with data', 'Chave Apoi': 'inline label - visible with data', 'Nº Porta': 'inline label - visible with data', 'Ligação': 'inline label - visible with data', 'Condição': 'inline label - visible with data', 'Valida��': 'inline label - visible with data', 'Metros Bai': 'inline label - visible with data', 'Data Cadas': 'inline label - visible with data', 'Técnico d': 'inline label - visible with data', 'Estado Rec': 'inline label - visible with data', });
lyr_BairrosLotes_5.set('fieldLabels', {'fid': 'inline label - visible with data', 'Nome_Prov�': 'inline label - visible with data', 'Nome_Munic': 'inline label - visible with data', 'Nome_Comun': 'inline label - visible with data', 'Nome_Bairr': 'inline label - visible with data', });
lyr_BairrosLotes_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});