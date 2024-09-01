var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });
var lyr_NighttimeLights_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Nighttime Lights",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NighttimeLights_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13454500.000000, -693361.632458, 13872000.000000, -309120.945978]
                            })
                        });
var format_BatasAdministratif_2 = new ol.format.GeoJSON();
var features_BatasAdministratif_2 = format_BatasAdministratif_2.readFeatures(json_BatasAdministratif_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministratif_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministratif_2.addFeatures(features_BatasAdministratif_2);
var lyr_BatasAdministratif_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministratif_2, 
                style: style_BatasAdministratif_2,
                popuplayertitle: "Batas Administratif",
                interactive: true,
                title: '<img src="styles/legend/BatasAdministratif_2.png" /> Batas Administratif'
            });
var format_IndustriPengolahanPertambangan_3 = new ol.format.GeoJSON();
var features_IndustriPengolahanPertambangan_3 = format_IndustriPengolahanPertambangan_3.readFeatures(json_IndustriPengolahanPertambangan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndustriPengolahanPertambangan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndustriPengolahanPertambangan_3.addFeatures(features_IndustriPengolahanPertambangan_3);
var lyr_IndustriPengolahanPertambangan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IndustriPengolahanPertambangan_3, 
                style: style_IndustriPengolahanPertambangan_3,
                popuplayertitle: "Industri Pengolahan Pertambangan",
                interactive: true,
                title: '<img src="styles/legend/IndustriPengolahanPertambangan_3.png" /> Industri Pengolahan Pertambangan'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_NighttimeLights_1.setVisible(true);lyr_BatasAdministratif_2.setVisible(true);lyr_IndustriPengolahanPertambangan_3.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_NighttimeLights_1,lyr_BatasAdministratif_2,lyr_IndustriPengolahanPertambangan_3];
lyr_BatasAdministratif_2.set('fieldAliases', {'fid': 'fid', 'country_co': 'country_co', 'country': 'country', 'province_c': 'province_c', 'province': 'province', 'regency_co': 'regency_co', 'regency': 'regency', 'district_c': 'district_c', 'district': 'district', 'village_co': 'village_co', 'village': 'village', 'source': 'source', 'date': 'date', 'valid_on': 'valid_on', 'area': 'area', });
lyr_IndustriPengolahanPertambangan_3.set('fieldAliases', {'fid': 'fid', 'No': 'No', 'Nama': 'Nama', 'Lat': 'Lat', 'Long': 'Long', 'province_code': 'province_code', 'province': 'province', 'regency_code': 'regency_code', 'regency': 'regency', 'district_code': 'district_code', 'district': 'district', 'village_code': 'village_code', 'village': 'village', 'NTL Value': 'NTL Value', });
lyr_BatasAdministratif_2.set('fieldImages', {'fid': 'TextEdit', 'country_co': 'TextEdit', 'country': 'TextEdit', 'province_c': 'TextEdit', 'province': 'TextEdit', 'regency_co': 'TextEdit', 'regency': 'TextEdit', 'district_c': 'TextEdit', 'district': 'TextEdit', 'village_co': 'TextEdit', 'village': 'TextEdit', 'source': 'TextEdit', 'date': 'DateTime', 'valid_on': 'DateTime', 'area': 'TextEdit', });
lyr_IndustriPengolahanPertambangan_3.set('fieldImages', {'fid': 'TextEdit', 'No': 'Range', 'Nama': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'province_code': 'TextEdit', 'province': 'TextEdit', 'regency_code': 'TextEdit', 'regency': 'TextEdit', 'district_code': 'TextEdit', 'district': 'TextEdit', 'village_code': 'TextEdit', 'village': 'TextEdit', 'NTL Value': '', });
lyr_BatasAdministratif_2.set('fieldLabels', {'fid': 'inline label - visible with data', 'country_co': 'inline label - visible with data', 'country': 'inline label - visible with data', 'province_c': 'inline label - visible with data', 'province': 'inline label - visible with data', 'regency_co': 'inline label - visible with data', 'regency': 'inline label - visible with data', 'district_c': 'inline label - visible with data', 'district': 'inline label - visible with data', 'village_co': 'inline label - visible with data', 'village': 'inline label - visible with data', 'source': 'inline label - visible with data', 'date': 'inline label - visible with data', 'valid_on': 'inline label - visible with data', 'area': 'inline label - visible with data', });
lyr_IndustriPengolahanPertambangan_3.set('fieldLabels', {'fid': 'inline label - visible with data', 'No': 'inline label - visible with data', 'Nama': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Long': 'inline label - visible with data', 'province_code': 'inline label - visible with data', 'province': 'inline label - visible with data', 'regency_code': 'inline label - visible with data', 'regency': 'inline label - visible with data', 'district_code': 'inline label - visible with data', 'district': 'inline label - visible with data', 'village_code': 'inline label - visible with data', 'village': 'inline label - visible with data', 'NTL Value': 'inline label - visible with data', });
lyr_IndustriPengolahanPertambangan_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});