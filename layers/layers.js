var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap · Humanitaire',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors</a> · <a href="https://www.openstreetmap.fr">OSM France · CC BY-SA</a>',
                maxZoom: 19,
                url: (['127.0.0.1','localhost'].includes(location.hostname) && location.port === '8765') ? '/osm/{z}/{x}/{y}.png?v=humanitaire-1' : 'https://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
            })
        });
var lyr_OSMLocal = new ol.layer.Image({zIndex:-20,source:new ol.source.ImageStatic({url:'images/osm-bassi-local.png',projection:'EPSG:3857',imageExtent:[-264166.36975356936,1477374.8826958872,-225030.6112715602,1516510.6411778964],attributions:'<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors</a> · Vue locale de Bassi'})});
lyr_OSMStandard_0.on('change:visible',function(){lyr_OSMLocal.setVisible(lyr_OSMStandard_0.getVisible());});
lyr_OSMStandard_0.on('change:opacity',function(){lyr_OSMLocal.setOpacity(lyr_OSMStandard_0.getOpacity());});
var format_BASSI_1 = new ol.format.GeoJSON();
var features_BASSI_1 = format_BASSI_1.readFeatures(json_BASSI_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BASSI_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BASSI_1.addFeatures(features_BASSI_1);
var lyr_BASSI_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BASSI_1, 
                style: style_BASSI_1,
                popuplayertitle: 'BASSI',
                interactive: true,
                title: '<img src="styles/legend/BASSI_1.png" /> BASSI'
            });
var format_Vgtation_2 = new ol.format.GeoJSON();
var features_Vgtation_2 = format_Vgtation_2.readFeatures(json_Vgtation_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vgtation_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vgtation_2.addFeatures(features_Vgtation_2);
var lyr_Vgtation_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vgtation_2, 
                style: style_Vgtation_2,
                popuplayertitle: 'Végétation',
                interactive: true,
    title: 'Végétation<br />\
    <img src="styles/legend/Vgtation_2_0.png" /> STEPPE<br />' });
var format_Culture_3 = new ol.format.GeoJSON();
var features_Culture_3 = format_Culture_3.readFeatures(json_Culture_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Culture_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Culture_3.addFeatures(features_Culture_3);
var lyr_Culture_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Culture_3, 
                style: style_Culture_3,
                popuplayertitle: 'Culture',
                interactive: true,
                title: '<img src="styles/legend/Culture_3.png" /> Culture'
            });
var format_Coursdeau_4 = new ol.format.GeoJSON();
var features_Coursdeau_4 = format_Coursdeau_4.readFeatures(json_Coursdeau_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Coursdeau_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coursdeau_4.addFeatures(features_Coursdeau_4);
var lyr_Coursdeau_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Coursdeau_4, 
                style: style_Coursdeau_4,
                popuplayertitle: 'Cours d\'eau',
                interactive: true,
                title: '<img src="styles/legend/Coursdeau_4.png" /> Cours d\'eau'
            });
var format_Piste_5 = new ol.format.GeoJSON();
var features_Piste_5 = format_Piste_5.readFeatures(json_Piste_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Piste_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Piste_5.addFeatures(features_Piste_5);
var lyr_Piste_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Piste_5, 
                style: style_Piste_5,
                popuplayertitle: 'Piste',
                interactive: true,
                title: '<img src="styles/legend/Piste_5.png" /> Piste'
            });
var format_Route_6 = new ol.format.GeoJSON();
var features_Route_6 = format_Route_6.readFeatures(json_Route_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route_6.addFeatures(features_Route_6);
var lyr_Route_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Route_6, 
                style: style_Route_6,
                popuplayertitle: 'Route',
                interactive: true,
                title: '<img src="styles/legend/Route_6.png" /> Route'
            });
var format_Village_7 = new ol.format.GeoJSON();
var features_Village_7 = format_Village_7.readFeatures(json_Village_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Village_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Village_7.addFeatures(features_Village_7);
cluster_Village_7 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Village_7
});
var lyr_Village_7 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Village_7, 
                style: style_Village_7,
                popuplayertitle: 'Village',
                interactive: true,
                title: '<img src="styles/legend/Village_7.png" /> Village'
            });

lyr_OSMStandard_0.setVisible(true);lyr_BASSI_1.setVisible(true);lyr_Vgtation_2.setVisible(true);lyr_Culture_3.setVisible(true);lyr_Coursdeau_4.setVisible(true);lyr_Piste_5.setVisible(true);lyr_Route_6.setVisible(true);lyr_Village_7.setVisible(true);
var layersList = [lyr_OSMLocal,lyr_OSMStandard_0,lyr_BASSI_1,lyr_Vgtation_2,lyr_Culture_3,lyr_Coursdeau_4,lyr_Piste_5,lyr_Route_6,lyr_Village_7];
lyr_BASSI_1.set('fieldAliases', {'Nom': 'Nom', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Vgtation_2.set('fieldAliases', {'Nature': 'Nature', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Culture_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nature': 'Nature', 'Precision': 'Precision', 'Arbre': 'Arbre', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Coursdeau_4.set('fieldAliases', {'Regime': 'Regime', 'Type': 'Type', 'Nom': 'Nom', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Piste_5.set('fieldAliases', {'Type': 'Type', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Route_6.set('fieldAliases', {'Nom': 'Nom', 'Cl_admin': 'Cl_admin', 'Revetement': 'Revetement', 'Niveau': 'Niveau', 'Praticab': 'Praticab', 'Nb_chausse': 'Nb_chausse', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Village_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nom': 'Nom', 'Statut': 'Statut', 'CLcommune': 'CLcommune', 'CLprovince': 'CLprovince', 'CLregion': 'CLregion', 'EQposte': 'EQposte', 'EQecole': 'EQecole', 'EQgendarme': 'EQgendarme', 'EQpolice': 'EQpolice', 'EQdouane': 'EQdouane', 'EQcontrole': 'EQcontrole', 'EQhopital': 'EQhopital', 'EQsanitair': 'EQsanitair', 'EQAnimiste': 'EQAnimiste', 'EQChretien': 'EQChretien', 'EQMusulman': 'EQMusulman', 'EQLCAn': 'EQLCAn', 'EQLCCh': 'EQLCCh', 'EQLCMu': 'EQLCMu', 'Marche': 'Marche', 'Code_ADM': 'Code_ADM', 'Code_GEO': 'Code_GEO', 'Nom_admin': 'Nom_admin', });
lyr_BASSI_1.set('fieldImages', {'Nom': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Vgtation_2.set('fieldImages', {'Nature': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Culture_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Nature': 'TextEdit', 'Precision': 'TextEdit', 'Arbre': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Coursdeau_4.set('fieldImages', {'Regime': 'TextEdit', 'Type': 'TextEdit', 'Nom': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Piste_5.set('fieldImages', {'Type': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Route_6.set('fieldImages', {'Nom': 'TextEdit', 'Cl_admin': 'TextEdit', 'Revetement': 'Range', 'Niveau': 'Range', 'Praticab': 'TextEdit', 'Nb_chausse': 'Range', 'SHAPE_Leng': 'TextEdit', });
lyr_Village_7.set('fieldImages', {'OBJECTID': 'Range', 'Nom': 'TextEdit', 'Statut': 'TextEdit', 'CLcommune': 'Range', 'CLprovince': 'Range', 'CLregion': 'Range', 'EQposte': 'Range', 'EQecole': 'Range', 'EQgendarme': 'Range', 'EQpolice': 'Range', 'EQdouane': 'Range', 'EQcontrole': 'Range', 'EQhopital': 'Range', 'EQsanitair': 'Range', 'EQAnimiste': 'Range', 'EQChretien': 'Range', 'EQMusulman': 'Range', 'EQLCAn': 'Range', 'EQLCCh': 'Range', 'EQLCMu': 'Range', 'Marche': 'Range', 'Code_ADM': 'TextEdit', 'Code_GEO': 'TextEdit', 'Nom_admin': 'TextEdit', });
lyr_BASSI_1.set('fieldLabels', {'Nom': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Vgtation_2.set('fieldLabels', {'Nature': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Culture_3.set('fieldLabels', {'OBJECTID': 'no label', 'Nature': 'no label', 'Precision': 'no label', 'Arbre': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_Coursdeau_4.set('fieldLabels', {'Regime': 'no label', 'Type': 'no label', 'Nom': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Piste_5.set('fieldLabels', {'Type': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Route_6.set('fieldLabels', {'Nom': 'no label', 'Cl_admin': 'no label', 'Revetement': 'no label', 'Niveau': 'no label', 'Praticab': 'no label', 'Nb_chausse': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Village_7.set('fieldLabels', {'OBJECTID': 'no label', 'Nom': 'no label', 'Statut': 'no label', 'CLcommune': 'no label', 'CLprovince': 'no label', 'CLregion': 'no label', 'EQposte': 'no label', 'EQecole': 'no label', 'EQgendarme': 'no label', 'EQpolice': 'no label', 'EQdouane': 'no label', 'EQcontrole': 'no label', 'EQhopital': 'no label', 'EQsanitair': 'no label', 'EQAnimiste': 'no label', 'EQChretien': 'no label', 'EQMusulman': 'no label', 'EQLCAn': 'no label', 'EQLCCh': 'no label', 'EQLCMu': 'no label', 'Marche': 'no label', 'Code_ADM': 'no label', 'Code_GEO': 'no label', 'Nom_admin': 'no label', });
lyr_Village_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});