ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3067").setExtent([-306121.473212, 6568429.596926, 1212793.273039, 7804728.506011]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Proportionofpopulationover65_1 = new ol.format.GeoJSON();
var features_Proportionofpopulationover65_1 = format_Proportionofpopulationover65_1.readFeatures(json_Proportionofpopulationover65_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_Proportionofpopulationover65_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Proportionofpopulationover65_1.addFeatures(features_Proportionofpopulationover65_1);
var lyr_Proportionofpopulationover65_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Proportionofpopulationover65_1, 
                style: style_Proportionofpopulationover65_1,
                popuplayertitle: "Proportion of population over 65",
                interactive: true,
    title: 'Proportion of population over 65<br />\
    <img src="styles/legend/Proportionofpopulationover65_1_0.png" /> 18.3 - 21.2<br />\
    <img src="styles/legend/Proportionofpopulationover65_1_1.png" /> 21.2 - 24.7<br />\
    <img src="styles/legend/Proportionofpopulationover65_1_2.png" /> 24.7 - 27.3<br />\
    <img src="styles/legend/Proportionofpopulationover65_1_3.png" /> 27.3 - 30.7<br />\
    <img src="styles/legend/Proportionofpopulationover65_1_4.png" /> 30.7 - 33.4<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_Proportionofpopulationover65_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Proportionofpopulationover65_1];
lyr_Proportionofpopulationover65_1.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'maakunta': 'maakunta', 'vuosi': 'vuosi', 'nimi': 'nimi', 'namn': 'namn', 'til_vuosi': 'til_vuosi', 'vaesto': 'vaesto', 'vaesto_p': 'vaesto_p', 'miehet': 'miehet', 'miehet_p': 'miehet_p', 'naiset': 'naiset', 'naiset_p': 'naiset_p', 'ika_0_14': 'ika_0_14', 'ika_0_14p': 'ika_0_14p', 'ika_15_64': 'ika_15_64', 'ika_15_64p': 'ika_15_64p', 'ika_65_': 'ika_65_', 'ika_65_p': 'ika_65_p', });
lyr_Proportionofpopulationover65_1.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'maakunta': 'TextEdit', 'vuosi': 'Range', 'nimi': 'TextEdit', 'namn': 'TextEdit', 'til_vuosi': 'Range', 'vaesto': 'TextEdit', 'vaesto_p': 'TextEdit', 'miehet': 'TextEdit', 'miehet_p': 'TextEdit', 'naiset': 'TextEdit', 'naiset_p': 'TextEdit', 'ika_0_14': 'TextEdit', 'ika_0_14p': 'TextEdit', 'ika_15_64': 'TextEdit', 'ika_15_64p': 'TextEdit', 'ika_65_': 'TextEdit', 'ika_65_p': 'TextEdit', });
lyr_Proportionofpopulationover65_1.set('fieldLabels', {'fid': 'hidden field', 'name': 'inline label - always visible', 'maakunta': 'hidden field', 'vuosi': 'hidden field', 'nimi': 'hidden field', 'namn': 'hidden field', 'til_vuosi': 'hidden field', 'vaesto': 'inline label - always visible', 'vaesto_p': 'inline label - always visible', 'miehet': 'hidden field', 'miehet_p': 'hidden field', 'naiset': 'hidden field', 'naiset_p': 'hidden field', 'ika_0_14': 'hidden field', 'ika_0_14p': 'hidden field', 'ika_15_64': 'hidden field', 'ika_15_64p': 'hidden field', 'ika_65_': 'inline label - always visible', 'ika_65_p': 'inline label - always visible', });
lyr_Proportionofpopulationover65_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});