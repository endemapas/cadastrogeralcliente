ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([13.246455, -8.912374, 13.270816, -8.899832]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PostodeTransformao_1 = new ol.format.GeoJSON();
var features_PostodeTransformao_1 = format_PostodeTransformao_1.readFeatures(json_PostodeTransformao_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PostodeTransformao_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostodeTransformao_1.addFeatures(features_PostodeTransformao_1);
var lyr_PostodeTransformao_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostodeTransformao_1, 
                style: style_PostodeTransformao_1,
                popuplayertitle: 'Posto de Transformação',
                interactive: true,
                title: '<img src="styles/legend/PostodeTransformao_1.png" /> Posto de Transformação'
            });
var format_Armrio_2 = new ol.format.GeoJSON();
var features_Armrio_2 = format_Armrio_2.readFeatures(json_Armrio_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Armrio_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Armrio_2.addFeatures(features_Armrio_2);
var lyr_Armrio_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Armrio_2, 
                style: style_Armrio_2,
                popuplayertitle: 'Armário',
                interactive: true,
                title: '<img src="styles/legend/Armrio_2.png" /> Armário'
            });
var format_LinhaSIMIONEIII_3 = new ol.format.GeoJSON();
var features_LinhaSIMIONEIII_3 = format_LinhaSIMIONEIII_3.readFeatures(json_LinhaSIMIONEIII_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LinhaSIMIONEIII_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LinhaSIMIONEIII_3.addFeatures(features_LinhaSIMIONEIII_3);
var lyr_LinhaSIMIONEIII_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LinhaSIMIONEIII_3, 
                style: style_LinhaSIMIONEIII_3,
                popuplayertitle: 'Linha SIMIONE III',
                interactive: true,
    title: 'Linha SIMIONE III<br />\
    <img src="styles/legend/LinhaSIMIONEIII_3_0.png" /> A1_C1 <br />\
    <img src="styles/legend/LinhaSIMIONEIII_3_1.png" /> A1_C2 <br />\
    <img src="styles/legend/LinhaSIMIONEIII_3_2.png" /> A1_C3 <br />\
    <img src="styles/legend/LinhaSIMIONEIII_3_3.png" /> A1_C4 <br />\
    <img src="styles/legend/LinhaSIMIONEIII_3_4.png" /> A1_C5 <br />\
    <img src="styles/legend/LinhaSIMIONEIII_3_5.png" /> A1_C6 <br />\
    <img src="styles/legend/LinhaSIMIONEIII_3_6.png" /> <br />'
        });
var format_ApoiosPT_4 = new ol.format.GeoJSON();
var features_ApoiosPT_4 = format_ApoiosPT_4.readFeatures(json_ApoiosPT_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ApoiosPT_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ApoiosPT_4.addFeatures(features_ApoiosPT_4);
var lyr_ApoiosPT_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ApoiosPT_4, 
                style: style_ApoiosPT_4,
                popuplayertitle: 'Apoios PT',
                interactive: true,
    title: 'Apoios PT<br />\
    <img src="styles/legend/ApoiosPT_4_0.png" /> C1<br />\
    <img src="styles/legend/ApoiosPT_4_1.png" /> C2<br />\
    <img src="styles/legend/ApoiosPT_4_2.png" /> C3<br />\
    <img src="styles/legend/ApoiosPT_4_3.png" /> C4<br />\
    <img src="styles/legend/ApoiosPT_4_4.png" /> C5<br />\
    <img src="styles/legend/ApoiosPT_4_5.png" /> C6<br />\
    <img src="styles/legend/ApoiosPT_4_6.png" /> <br />'
        });
var format_BaixadasSIMIONEIII_5 = new ol.format.GeoJSON();
var features_BaixadasSIMIONEIII_5 = format_BaixadasSIMIONEIII_5.readFeatures(json_BaixadasSIMIONEIII_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaixadasSIMIONEIII_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaixadasSIMIONEIII_5.addFeatures(features_BaixadasSIMIONEIII_5);
var lyr_BaixadasSIMIONEIII_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaixadasSIMIONEIII_5, 
                style: style_BaixadasSIMIONEIII_5,
                popuplayertitle: 'Baixadas SIMIONE III',
                interactive: true,
                title: '<img src="styles/legend/BaixadasSIMIONEIII_5.png" /> Baixadas SIMIONE III'
            });
var format_ClientsSIMIONEIII_6 = new ol.format.GeoJSON();
var features_ClientsSIMIONEIII_6 = format_ClientsSIMIONEIII_6.readFeatures(json_ClientsSIMIONEIII_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ClientsSIMIONEIII_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClientsSIMIONEIII_6.addFeatures(features_ClientsSIMIONEIII_6);
var lyr_ClientsSIMIONEIII_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClientsSIMIONEIII_6, 
                style: style_ClientsSIMIONEIII_6,
                popuplayertitle: 'Clients SIMIONE III',
                interactive: true,
                title: '<img src="styles/legend/ClientsSIMIONEIII_6.png" /> Clients SIMIONE III'
            });
var format_PTsLotes_7 = new ol.format.GeoJSON();
var features_PTsLotes_7 = format_PTsLotes_7.readFeatures(json_PTsLotes_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PTsLotes_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PTsLotes_7.addFeatures(features_PTsLotes_7);
var lyr_PTsLotes_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PTsLotes_7, 
                style: style_PTsLotes_7,
                popuplayertitle: 'PT´s Lotes',
                interactive: true,
                title: '<img src="styles/legend/PTsLotes_7.png" /> PT´s Lotes'
            });
var format_ArmriosGeral_8 = new ol.format.GeoJSON();
var features_ArmriosGeral_8 = format_ArmriosGeral_8.readFeatures(json_ArmriosGeral_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmriosGeral_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmriosGeral_8.addFeatures(features_ArmriosGeral_8);
var lyr_ArmriosGeral_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmriosGeral_8, 
                style: style_ArmriosGeral_8,
                popuplayertitle: 'Armários Geral',
                interactive: true,
                title: '<img src="styles/legend/ArmriosGeral_8.png" /> Armários Geral'
            });
var format_Apoios_9 = new ol.format.GeoJSON();
var features_Apoios_9 = format_Apoios_9.readFeatures(json_Apoios_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Apoios_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Apoios_9.addFeatures(features_Apoios_9);
var lyr_Apoios_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Apoios_9, 
                style: style_Apoios_9,
                popuplayertitle: 'Apoios',
                interactive: true,
                title: '<img src="styles/legend/Apoios_9.png" /> Apoios'
            });
var format_ClientesGeral_10 = new ol.format.GeoJSON();
var features_ClientesGeral_10 = format_ClientesGeral_10.readFeatures(json_ClientesGeral_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ClientesGeral_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClientesGeral_10.addFeatures(features_ClientesGeral_10);
var lyr_ClientesGeral_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClientesGeral_10, 
                style: style_ClientesGeral_10,
                popuplayertitle: 'Clientes Geral',
                interactive: true,
                title: '<img src="styles/legend/ClientesGeral_10.png" /> Clientes Geral'
            });
var format_BairrosLotes_11 = new ol.format.GeoJSON();
var features_BairrosLotes_11 = format_BairrosLotes_11.readFeatures(json_BairrosLotes_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BairrosLotes_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BairrosLotes_11.addFeatures(features_BairrosLotes_11);
var lyr_BairrosLotes_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BairrosLotes_11, 
                style: style_BairrosLotes_11,
                popuplayertitle: 'Bairros Lotes',
                interactive: false,
                title: '<img src="styles/legend/BairrosLotes_11.png" /> Bairros Lotes'
            });
var group_Geral = new ol.layer.Group({
                                layers: [lyr_PTsLotes_7,lyr_ArmriosGeral_8,lyr_Apoios_9,lyr_ClientesGeral_10,lyr_BairrosLotes_11,],
                                fold: "open",
                                title: 'Geral'});
var group_SimioneIII = new ol.layer.Group({
                                layers: [lyr_PostodeTransformao_1,lyr_Armrio_2,lyr_LinhaSIMIONEIII_3,lyr_ApoiosPT_4,lyr_BaixadasSIMIONEIII_5,lyr_ClientsSIMIONEIII_6,],
                                fold: "open",
                                title: 'Simione III'});
var group_MAPAS = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,],
                                fold: "open",
                                title: 'MAPAS'});

lyr_GoogleSatellite_0.setVisible(true);lyr_PostodeTransformao_1.setVisible(false);lyr_Armrio_2.setVisible(false);lyr_LinhaSIMIONEIII_3.setVisible(false);lyr_ApoiosPT_4.setVisible(false);lyr_BaixadasSIMIONEIII_5.setVisible(false);lyr_ClientsSIMIONEIII_6.setVisible(false);lyr_PTsLotes_7.setVisible(true);lyr_ArmriosGeral_8.setVisible(true);lyr_Apoios_9.setVisible(false);lyr_ClientesGeral_10.setVisible(false);lyr_BairrosLotes_11.setVisible(true);
var layersList = [group_MAPAS,group_SimioneIII,group_Geral];
lyr_PostodeTransformao_1.set('fieldAliases', {'Name': 'Name', 'Divisão': 'Divisão', 'PT': 'PT', 'Serviço': 'Serviço', 'KVA': 'KVA', 'Tipo': 'Tipo', 'Município': 'Município', 'Bairro': 'Bairro', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Armarios': 'Armarios', 'Injectores': 'Injectores', 'Apoios': 'Apoios', 'Ligações': 'Ligações', });
lyr_Armrio_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'D__vis__o': 'D__vis__o', 'Chave_Cada': 'Chave_Cada', 'PT': 'PT', 'Tipo': 'Tipo', 'Arm__rio': 'Arm__rio', 'Sa__das': 'Sa__das', 'Marca': 'Marca', 'IMG_Interi': 'IMG_Interi', 'IMG_Exteri': 'IMG_Exteri', 'Link_Image': 'Link_Image', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Data_Cadas': 'Data_Cadas', 'T__cnico': 'T__cnico', });
lyr_LinhaSIMIONEIII_3.set('fieldAliases', {'ID': 'ID', 'Chave': 'Chave', 'Estado_Apoio': 'Estado_Apoio', });
lyr_ApoiosPT_4.set('fieldAliases', {'Divisao': 'Divisao', 'Chave Cada': 'Chave Cada', 'PT': 'PT', 'Dependenci': 'Dependenci', 'Armario': 'Armario', 'Injector': 'Injector', 'Derivacao': 'Derivacao', 'Travessa': 'Travessa', 'N� Ordem': 'N� Ordem', 'Circuitos': 'Circuitos', 'Chave Apoi': 'Chave Apoi', 'Liga��': 'Liga��', 'Tipo': 'Tipo', 'Caracteris': 'Caracteris', 'Estado Apo': 'Estado Apo', 'Resistenci': 'Resistenci', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Data Cadas': 'Data Cadas', 'Tecnico': 'Tecnico', });
lyr_BaixadasSIMIONEIII_5.set('fieldAliases', {'CLIENTE': 'CLIENTE', 'LIGACAO': 'LIGACAO', 'CONDICAO': 'CONDICAO', });
lyr_ClientsSIMIONEIII_6.set('fieldAliases', {'Chave Cada': 'Chave Cada', 'PT': 'PT', 'Dependênc': 'Dependênc', 'Chave Apoi': 'Chave Apoi', 'Nº Porta': 'Nº Porta', 'Ligação': 'Ligação', 'Condição': 'Condição', 'Valida��': 'Valida��', 'Metros Bai': 'Metros Bai', 'Data Cadas': 'Data Cadas', 'Técnico d': 'Técnico d', 'Estado Rec': 'Estado Rec', });
lyr_PTsLotes_7.set('fieldAliases', {'Name': 'Name', 'Divisão': 'Divisão', 'PT': 'PT', 'Serviço': 'Serviço', 'KVA': 'KVA', 'Tipo': 'Tipo', 'Município': 'Município', 'Bairro': 'Bairro', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Armarios': 'Armarios', 'Injectores': 'Injectores', 'Apoios': 'Apoios', 'Ligações': 'Ligações', });
lyr_ArmriosGeral_8.set('fieldAliases', {'Name': 'Name', 'Divisão': 'Divisão', 'Chave_Cada': 'Chave_Cada', 'PT': 'PT', 'Tipo': 'Tipo', 'Armário': 'Armário', 'Saídas': 'Saídas', 'Marca': 'Marca', 'IMG_Interi': 'IMG_Interi', 'IMG_Exteri': 'IMG_Exteri', 'Link_Image': 'Link_Image', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Data_Cadas': 'Data_Cadas', 'Técnicos': 'Técnicos', });
lyr_Apoios_9.set('fieldAliases', {'Divisao': 'Divisao', 'Chave Cada': 'Chave Cada', 'PT': 'PT', 'Dependenci': 'Dependenci', 'Armario': 'Armario', 'Injector': 'Injector', 'Derivacao': 'Derivacao', 'Travessa': 'Travessa', 'N� Ordem': 'N� Ordem', 'Circuitos': 'Circuitos', 'Chave Apoi': 'Chave Apoi', 'Liga��': 'Liga��', 'Tipo': 'Tipo', 'Caracteris': 'Caracteris', 'Estado Apo': 'Estado Apo', 'Resistenci': 'Resistenci', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Data Cadas': 'Data Cadas', 'Tecnico': 'Tecnico', });
lyr_ClientesGeral_10.set('fieldAliases', {'Chave Cada': 'Chave Cada', 'PT': 'PT', 'Dependênc': 'Dependênc', 'Chave Apoi': 'Chave Apoi', 'Nº Porta': 'Nº Porta', 'Ligação': 'Ligação', 'Condição': 'Condição', 'Valida��': 'Valida��', 'Metros Bai': 'Metros Bai', 'Data Cadas': 'Data Cadas', 'Técnico d': 'Técnico d', 'Estado Rec': 'Estado Rec', });
lyr_BairrosLotes_11.set('fieldAliases', {'fid': 'fid', 'Nome_Prov�': 'Nome_Prov�', 'Nome_Munic': 'Nome_Munic', 'Nome_Comun': 'Nome_Comun', 'Nome_Bairr': 'Nome_Bairr', });
lyr_PostodeTransformao_1.set('fieldImages', {'Name': 'TextEdit', 'Divisão': '', 'PT': 'TextEdit', 'Serviço': '', 'KVA': '', 'Tipo': 'TextEdit', 'Município': '', 'Bairro': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Armarios': '', 'Injectores': 'TextEdit', 'Apoios': 'TextEdit', 'Ligações': '', });
lyr_Armrio_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'D__vis__o': 'TextEdit', 'Chave_Cada': 'TextEdit', 'PT': 'TextEdit', 'Tipo': 'TextEdit', 'Arm__rio': 'TextEdit', 'Sa__das': 'TextEdit', 'Marca': 'TextEdit', 'IMG_Interi': 'TextEdit', 'IMG_Exteri': 'TextEdit', 'Link_Image': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Data_Cadas': 'TextEdit', 'T__cnico': 'TextEdit', });
lyr_LinhaSIMIONEIII_3.set('fieldImages', {'ID': 'TextEdit', 'Chave': 'TextEdit', 'Estado_Apoio': 'TextEdit', });
lyr_ApoiosPT_4.set('fieldImages', {'Divisao': 'TextEdit', 'Chave Cada': 'TextEdit', 'PT': 'TextEdit', 'Dependenci': 'TextEdit', 'Armario': 'TextEdit', 'Injector': 'TextEdit', 'Derivacao': 'TextEdit', 'Travessa': 'TextEdit', 'N� Ordem': 'TextEdit', 'Circuitos': 'TextEdit', 'Chave Apoi': 'TextEdit', 'Liga��': 'TextEdit', 'Tipo': 'TextEdit', 'Caracteris': 'TextEdit', 'Estado Apo': 'TextEdit', 'Resistenci': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Data Cadas': 'TextEdit', 'Tecnico': 'TextEdit', });
lyr_BaixadasSIMIONEIII_5.set('fieldImages', {'CLIENTE': '', 'LIGACAO': '', 'CONDICAO': '', });
lyr_ClientsSIMIONEIII_6.set('fieldImages', {'Chave Cada': 'TextEdit', 'PT': 'TextEdit', 'Dependênc': '', 'Chave Apoi': 'TextEdit', 'Nº Porta': 'TextEdit', 'Ligação': 'TextEdit', 'Condição': '', 'Valida��': 'TextEdit', 'Metros Bai': 'TextEdit', 'Data Cadas': 'TextEdit', 'Técnico d': '', 'Estado Rec': 'TextEdit', });
lyr_PTsLotes_7.set('fieldImages', {'Name': 'TextEdit', 'Divisão': '', 'PT': 'TextEdit', 'Serviço': '', 'KVA': '', 'Tipo': 'TextEdit', 'Município': '', 'Bairro': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Armarios': '', 'Injectores': 'TextEdit', 'Apoios': 'TextEdit', 'Ligações': '', });
lyr_ArmriosGeral_8.set('fieldImages', {'Name': 'TextEdit', 'Divisão': '', 'Chave_Cada': 'TextEdit', 'PT': 'TextEdit', 'Tipo': 'TextEdit', 'Armário': '', 'Saídas': '', 'Marca': 'TextEdit', 'IMG_Interi': 'TextEdit', 'IMG_Exteri': 'TextEdit', 'Link_Image': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Data_Cadas': 'TextEdit', 'Técnicos': '', });
lyr_Apoios_9.set('fieldImages', {'Divisao': 'TextEdit', 'Chave Cada': 'TextEdit', 'PT': 'TextEdit', 'Dependenci': 'TextEdit', 'Armario': 'TextEdit', 'Injector': 'TextEdit', 'Derivacao': 'TextEdit', 'Travessa': 'TextEdit', 'N� Ordem': 'TextEdit', 'Circuitos': 'TextEdit', 'Chave Apoi': 'TextEdit', 'Liga��': 'TextEdit', 'Tipo': 'TextEdit', 'Caracteris': 'TextEdit', 'Estado Apo': 'TextEdit', 'Resistenci': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Data Cadas': 'TextEdit', 'Tecnico': 'TextEdit', });
lyr_ClientesGeral_10.set('fieldImages', {'Chave Cada': 'TextEdit', 'PT': 'TextEdit', 'Dependênc': '', 'Chave Apoi': 'TextEdit', 'Nº Porta': 'TextEdit', 'Ligação': 'TextEdit', 'Condição': '', 'Valida��': 'TextEdit', 'Metros Bai': 'TextEdit', 'Data Cadas': 'TextEdit', 'Técnico d': '', 'Estado Rec': 'TextEdit', });
lyr_BairrosLotes_11.set('fieldImages', {'fid': 'TextEdit', 'Nome_Prov�': 'TextEdit', 'Nome_Munic': 'TextEdit', 'Nome_Comun': 'TextEdit', 'Nome_Bairr': 'TextEdit', });
lyr_PostodeTransformao_1.set('fieldLabels', {'Name': 'inline label - visible with data', 'Divisão': 'inline label - visible with data', 'PT': 'inline label - visible with data', 'Serviço': 'inline label - visible with data', 'KVA': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Município': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Armarios': 'inline label - visible with data', 'Injectores': 'inline label - visible with data', 'Apoios': 'inline label - visible with data', 'Ligações': 'inline label - visible with data', });
lyr_Armrio_2.set('fieldLabels', {'Name': 'inline label - visible with data', 'descriptio': 'inline label - visible with data', 'timestamp': 'inline label - visible with data', 'begin': 'inline label - visible with data', 'end': 'inline label - visible with data', 'altitudeMo': 'inline label - visible with data', 'tessellate': 'inline label - visible with data', 'extrude': 'inline label - visible with data', 'visibility': 'inline label - visible with data', 'drawOrder': 'inline label - visible with data', 'icon': 'inline label - visible with data', 'D__vis__o': 'inline label - visible with data', 'Chave_Cada': 'inline label - visible with data', 'PT': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Arm__rio': 'inline label - visible with data', 'Sa__das': 'inline label - visible with data', 'Marca': 'inline label - visible with data', 'IMG_Interi': 'inline label - visible with data', 'IMG_Exteri': 'inline label - visible with data', 'Link_Image': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Data_Cadas': 'inline label - visible with data', 'T__cnico': 'inline label - visible with data', });
lyr_LinhaSIMIONEIII_3.set('fieldLabels', {'ID': 'inline label - visible with data', 'Chave': 'inline label - visible with data', 'Estado_Apoio': 'inline label - visible with data', });
lyr_ApoiosPT_4.set('fieldLabels', {'Divisao': 'inline label - visible with data', 'Chave Cada': 'inline label - visible with data', 'PT': 'inline label - visible with data', 'Dependenci': 'inline label - visible with data', 'Armario': 'inline label - visible with data', 'Injector': 'inline label - visible with data', 'Derivacao': 'inline label - visible with data', 'Travessa': 'inline label - visible with data', 'N� Ordem': 'inline label - visible with data', 'Circuitos': 'inline label - visible with data', 'Chave Apoi': 'inline label - visible with data', 'Liga��': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Caracteris': 'inline label - visible with data', 'Estado Apo': 'inline label - visible with data', 'Resistenci': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Data Cadas': 'inline label - visible with data', 'Tecnico': 'inline label - visible with data', });
lyr_BaixadasSIMIONEIII_5.set('fieldLabels', {'CLIENTE': 'inline label - visible with data', 'LIGACAO': 'inline label - visible with data', 'CONDICAO': 'inline label - visible with data', });
lyr_ClientsSIMIONEIII_6.set('fieldLabels', {'Chave Cada': 'inline label - visible with data', 'PT': 'inline label - visible with data', 'Dependênc': 'inline label - visible with data', 'Chave Apoi': 'inline label - visible with data', 'Nº Porta': 'inline label - visible with data', 'Ligação': 'inline label - visible with data', 'Condição': 'inline label - visible with data', 'Valida��': 'inline label - visible with data', 'Metros Bai': 'inline label - visible with data', 'Data Cadas': 'inline label - visible with data', 'Técnico d': 'inline label - visible with data', 'Estado Rec': 'inline label - visible with data', });
lyr_PTsLotes_7.set('fieldLabels', {'Name': 'inline label - visible with data', 'Divisão': 'inline label - visible with data', 'PT': 'inline label - visible with data', 'Serviço': 'inline label - visible with data', 'KVA': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Município': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Armarios': 'inline label - visible with data', 'Injectores': 'inline label - visible with data', 'Apoios': 'inline label - visible with data', 'Ligações': 'inline label - visible with data', });
lyr_ArmriosGeral_8.set('fieldLabels', {'Name': 'inline label - visible with data', 'Divisão': 'inline label - visible with data', 'Chave_Cada': 'inline label - visible with data', 'PT': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Armário': 'inline label - visible with data', 'Saídas': 'inline label - visible with data', 'Marca': 'inline label - visible with data', 'IMG_Interi': 'inline label - visible with data', 'IMG_Exteri': 'inline label - visible with data', 'Link_Image': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Data_Cadas': 'inline label - visible with data', 'Técnicos': 'inline label - visible with data', });
lyr_Apoios_9.set('fieldLabels', {'Divisao': 'inline label - visible with data', 'Chave Cada': 'inline label - visible with data', 'PT': 'inline label - visible with data', 'Dependenci': 'inline label - visible with data', 'Armario': 'inline label - visible with data', 'Injector': 'inline label - visible with data', 'Derivacao': 'inline label - visible with data', 'Travessa': 'inline label - visible with data', 'N� Ordem': 'inline label - visible with data', 'Circuitos': 'inline label - visible with data', 'Chave Apoi': 'inline label - visible with data', 'Liga��': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Caracteris': 'inline label - visible with data', 'Estado Apo': 'inline label - visible with data', 'Resistenci': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Data Cadas': 'inline label - visible with data', 'Tecnico': 'inline label - visible with data', });
lyr_ClientesGeral_10.set('fieldLabels', {'Chave Cada': 'inline label - visible with data', 'PT': 'inline label - visible with data', 'Dependênc': 'inline label - visible with data', 'Chave Apoi': 'inline label - visible with data', 'Nº Porta': 'inline label - visible with data', 'Ligação': 'inline label - visible with data', 'Condição': 'inline label - visible with data', 'Valida��': 'inline label - visible with data', 'Metros Bai': 'inline label - visible with data', 'Data Cadas': 'inline label - visible with data', 'Técnico d': 'inline label - visible with data', 'Estado Rec': 'inline label - visible with data', });
lyr_BairrosLotes_11.set('fieldLabels', {'fid': 'inline label - visible with data', 'Nome_Prov�': 'inline label - visible with data', 'Nome_Munic': 'inline label - visible with data', 'Nome_Comun': 'inline label - visible with data', 'Nome_Bairr': 'inline label - visible with data', });
lyr_BairrosLotes_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});