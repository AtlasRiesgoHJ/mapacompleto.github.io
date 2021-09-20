var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'GoogleHybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SUSCEPTIBILIDADCementerios_3 = new ol.format.GeoJSON();
var features_SUSCEPTIBILIDADCementerios_3 = format_SUSCEPTIBILIDADCementerios_3.readFeatures(json_SUSCEPTIBILIDADCementerios_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUSCEPTIBILIDADCementerios_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUSCEPTIBILIDADCementerios_3.addFeatures(features_SUSCEPTIBILIDADCementerios_3);
var lyr_SUSCEPTIBILIDADCementerios_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUSCEPTIBILIDADCementerios_3, 
                style: style_SUSCEPTIBILIDADCementerios_3,
                interactive: false,
                title: '<img src="styles/legend/SUSCEPTIBILIDADCementerios_3.png" /> SUSCEPTIBILIDAD / Cementerios'
            });
var format_SUSCEPTIBILIDADEscuelas_4 = new ol.format.GeoJSON();
var features_SUSCEPTIBILIDADEscuelas_4 = format_SUSCEPTIBILIDADEscuelas_4.readFeatures(json_SUSCEPTIBILIDADEscuelas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUSCEPTIBILIDADEscuelas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUSCEPTIBILIDADEscuelas_4.addFeatures(features_SUSCEPTIBILIDADEscuelas_4);
var lyr_SUSCEPTIBILIDADEscuelas_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUSCEPTIBILIDADEscuelas_4, 
                style: style_SUSCEPTIBILIDADEscuelas_4,
                interactive: false,
                title: '<img src="styles/legend/SUSCEPTIBILIDADEscuelas_4.png" /> SUSCEPTIBILIDAD / Escuelas  '
            });
var format_SUSCEPTIBILIDADMercado_5 = new ol.format.GeoJSON();
var features_SUSCEPTIBILIDADMercado_5 = format_SUSCEPTIBILIDADMercado_5.readFeatures(json_SUSCEPTIBILIDADMercado_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUSCEPTIBILIDADMercado_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUSCEPTIBILIDADMercado_5.addFeatures(features_SUSCEPTIBILIDADMercado_5);
var lyr_SUSCEPTIBILIDADMercado_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUSCEPTIBILIDADMercado_5, 
                style: style_SUSCEPTIBILIDADMercado_5,
                interactive: false,
                title: '<img src="styles/legend/SUSCEPTIBILIDADMercado_5.png" /> SUSCEPTIBILIDAD / Mercado'
            });
var format_SUSCEPTIBILIDADParquesdeesparcimiento_6 = new ol.format.GeoJSON();
var features_SUSCEPTIBILIDADParquesdeesparcimiento_6 = format_SUSCEPTIBILIDADParquesdeesparcimiento_6.readFeatures(json_SUSCEPTIBILIDADParquesdeesparcimiento_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUSCEPTIBILIDADParquesdeesparcimiento_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUSCEPTIBILIDADParquesdeesparcimiento_6.addFeatures(features_SUSCEPTIBILIDADParquesdeesparcimiento_6);
var lyr_SUSCEPTIBILIDADParquesdeesparcimiento_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUSCEPTIBILIDADParquesdeesparcimiento_6, 
                style: style_SUSCEPTIBILIDADParquesdeesparcimiento_6,
                interactive: false,
                title: '<img src="styles/legend/SUSCEPTIBILIDADParquesdeesparcimiento_6.png" /> SUSCEPTIBILIDAD / Parques de esparcimiento'
            });
var format_SUSCEPTIBILIDADPlantadeaguasresiduales_7 = new ol.format.GeoJSON();
var features_SUSCEPTIBILIDADPlantadeaguasresiduales_7 = format_SUSCEPTIBILIDADPlantadeaguasresiduales_7.readFeatures(json_SUSCEPTIBILIDADPlantadeaguasresiduales_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUSCEPTIBILIDADPlantadeaguasresiduales_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUSCEPTIBILIDADPlantadeaguasresiduales_7.addFeatures(features_SUSCEPTIBILIDADPlantadeaguasresiduales_7);
var lyr_SUSCEPTIBILIDADPlantadeaguasresiduales_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUSCEPTIBILIDADPlantadeaguasresiduales_7, 
                style: style_SUSCEPTIBILIDADPlantadeaguasresiduales_7,
                interactive: false,
                title: '<img src="styles/legend/SUSCEPTIBILIDADPlantadeaguasresiduales_7.png" /> SUSCEPTIBILIDAD / Planta de aguas residuales'
            });
var format_HISTRICOS2021Controlabejas_8 = new ol.format.GeoJSON();
var features_HISTRICOS2021Controlabejas_8 = format_HISTRICOS2021Controlabejas_8.readFeatures(json_HISTRICOS2021Controlabejas_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2021Controlabejas_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2021Controlabejas_8.addFeatures(features_HISTRICOS2021Controlabejas_8);
var lyr_HISTRICOS2021Controlabejas_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2021Controlabejas_8, 
                style: style_HISTRICOS2021Controlabejas_8,
                interactive: false,
                title: '<img src="styles/legend/HISTRICOS2021Controlabejas_8.png" /> HISTÓRICOS 2021 / Control abejas '
            });
var format_HISTRICOS2021Controldefauna_9 = new ol.format.GeoJSON();
var features_HISTRICOS2021Controldefauna_9 = format_HISTRICOS2021Controldefauna_9.readFeatures(json_HISTRICOS2021Controldefauna_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2021Controldefauna_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2021Controldefauna_9.addFeatures(features_HISTRICOS2021Controldefauna_9);
var lyr_HISTRICOS2021Controldefauna_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2021Controldefauna_9, 
                style: style_HISTRICOS2021Controldefauna_9,
                interactive: false,
                title: '<img src="styles/legend/HISTRICOS2021Controldefauna_9.png" /> HISTÓRICOS 2021 / Control de fauna'
            });
var format_HISTRICOS2018Controlanimal_10 = new ol.format.GeoJSON();
var features_HISTRICOS2018Controlanimal_10 = format_HISTRICOS2018Controlanimal_10.readFeatures(json_HISTRICOS2018Controlanimal_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2018Controlanimal_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2018Controlanimal_10.addFeatures(features_HISTRICOS2018Controlanimal_10);
var lyr_HISTRICOS2018Controlanimal_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2018Controlanimal_10, 
                style: style_HISTRICOS2018Controlanimal_10,
                interactive: false,
                title: '<img src="styles/legend/HISTRICOS2018Controlanimal_10.png" /> HISTÓRICOS 2018 / Control animal '
            });
var format_HISTRICOS2018Controlavejas_11 = new ol.format.GeoJSON();
var features_HISTRICOS2018Controlavejas_11 = format_HISTRICOS2018Controlavejas_11.readFeatures(json_HISTRICOS2018Controlavejas_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2018Controlavejas_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2018Controlavejas_11.addFeatures(features_HISTRICOS2018Controlavejas_11);
var lyr_HISTRICOS2018Controlavejas_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2018Controlavejas_11, 
                style: style_HISTRICOS2018Controlavejas_11,
                interactive: false,
                title: '<img src="styles/legend/HISTRICOS2018Controlavejas_11.png" /> HISTÓRICOS 2018 / Control avejas'
            });
var format_HISTRICOS2018Rescateanimal_12 = new ol.format.GeoJSON();
var features_HISTRICOS2018Rescateanimal_12 = format_HISTRICOS2018Rescateanimal_12.readFeatures(json_HISTRICOS2018Rescateanimal_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2018Rescateanimal_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2018Rescateanimal_12.addFeatures(features_HISTRICOS2018Rescateanimal_12);
var lyr_HISTRICOS2018Rescateanimal_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2018Rescateanimal_12, 
                style: style_HISTRICOS2018Rescateanimal_12,
                interactive: false,
                title: '<img src="styles/legend/HISTRICOS2018Rescateanimal_12.png" /> HISTÓRICOS 2018 / Rescate animal '
            });
var format_HISTRICOS2018RescateyCapturadeanimaldomstico_13 = new ol.format.GeoJSON();
var features_HISTRICOS2018RescateyCapturadeanimaldomstico_13 = format_HISTRICOS2018RescateyCapturadeanimaldomstico_13.readFeatures(json_HISTRICOS2018RescateyCapturadeanimaldomstico_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2018RescateyCapturadeanimaldomstico_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2018RescateyCapturadeanimaldomstico_13.addFeatures(features_HISTRICOS2018RescateyCapturadeanimaldomstico_13);
var lyr_HISTRICOS2018RescateyCapturadeanimaldomstico_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2018RescateyCapturadeanimaldomstico_13, 
                style: style_HISTRICOS2018RescateyCapturadeanimaldomstico_13,
                interactive: false,
                title: '<img src="styles/legend/HISTRICOS2018RescateyCapturadeanimaldomstico_13.png" /> HISTÓRICOS 2018 / Rescate y Captura de animal doméstico'
            });
var format_HISTRICOS2018RetirodeAbejas_14 = new ol.format.GeoJSON();
var features_HISTRICOS2018RetirodeAbejas_14 = format_HISTRICOS2018RetirodeAbejas_14.readFeatures(json_HISTRICOS2018RetirodeAbejas_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2018RetirodeAbejas_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2018RetirodeAbejas_14.addFeatures(features_HISTRICOS2018RetirodeAbejas_14);
var lyr_HISTRICOS2018RetirodeAbejas_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2018RetirodeAbejas_14, 
                style: style_HISTRICOS2018RetirodeAbejas_14,
                interactive: false,
                title: '<img src="styles/legend/HISTRICOS2018RetirodeAbejas_14.png" /> HISTÓRICOS 2018 / Retiro de Abejas'
            });
var format_ESCENARIOSRadiacintrmicafugadegasFlamaAzul_15 = new ol.format.GeoJSON();
var features_ESCENARIOSRadiacintrmicafugadegasFlamaAzul_15 = format_ESCENARIOSRadiacintrmicafugadegasFlamaAzul_15.readFeatures(json_ESCENARIOSRadiacintrmicafugadegasFlamaAzul_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESCENARIOSRadiacintrmicafugadegasFlamaAzul_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESCENARIOSRadiacintrmicafugadegasFlamaAzul_15.addFeatures(features_ESCENARIOSRadiacintrmicafugadegasFlamaAzul_15);
var lyr_ESCENARIOSRadiacintrmicafugadegasFlamaAzul_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ESCENARIOSRadiacintrmicafugadegasFlamaAzul_15, 
                style: style_ESCENARIOSRadiacintrmicafugadegasFlamaAzul_15,
                interactive: false,
                title: '<img src="styles/legend/ESCENARIOSRadiacintrmicafugadegasFlamaAzul_15.png" /> ESCENARIOS / Radiación térmica fuga de gas Flama Azul'
            });
var format_SUSCEPTIBILIDADPolvorines_16 = new ol.format.GeoJSON();
var features_SUSCEPTIBILIDADPolvorines_16 = format_SUSCEPTIBILIDADPolvorines_16.readFeatures(json_SUSCEPTIBILIDADPolvorines_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUSCEPTIBILIDADPolvorines_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUSCEPTIBILIDADPolvorines_16.addFeatures(features_SUSCEPTIBILIDADPolvorines_16);
var lyr_SUSCEPTIBILIDADPolvorines_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUSCEPTIBILIDADPolvorines_16, 
                style: style_SUSCEPTIBILIDADPolvorines_16,
                interactive: false,
                title: '<img src="styles/legend/SUSCEPTIBILIDADPolvorines_16.png" /> SUSCEPTIBILIDAD / Polvorines'
            });
var format_SUSCEPTIBILIDADRosticeras_17 = new ol.format.GeoJSON();
var features_SUSCEPTIBILIDADRosticeras_17 = format_SUSCEPTIBILIDADRosticeras_17.readFeatures(json_SUSCEPTIBILIDADRosticeras_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUSCEPTIBILIDADRosticeras_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUSCEPTIBILIDADRosticeras_17.addFeatures(features_SUSCEPTIBILIDADRosticeras_17);
var lyr_SUSCEPTIBILIDADRosticeras_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUSCEPTIBILIDADRosticeras_17, 
                style: style_SUSCEPTIBILIDADRosticeras_17,
                interactive: false,
                title: '<img src="styles/legend/SUSCEPTIBILIDADRosticeras_17.png" /> SUSCEPTIBILIDAD / Rosticerías  '
            });
var format_SUSCEPTIBILIDADTanquesdegasdemercados_18 = new ol.format.GeoJSON();
var features_SUSCEPTIBILIDADTanquesdegasdemercados_18 = format_SUSCEPTIBILIDADTanquesdegasdemercados_18.readFeatures(json_SUSCEPTIBILIDADTanquesdegasdemercados_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUSCEPTIBILIDADTanquesdegasdemercados_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUSCEPTIBILIDADTanquesdegasdemercados_18.addFeatures(features_SUSCEPTIBILIDADTanquesdegasdemercados_18);
var lyr_SUSCEPTIBILIDADTanquesdegasdemercados_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUSCEPTIBILIDADTanquesdegasdemercados_18, 
                style: style_SUSCEPTIBILIDADTanquesdegasdemercados_18,
                interactive: false,
                title: '<img src="styles/legend/SUSCEPTIBILIDADTanquesdegasdemercados_18.png" /> SUSCEPTIBILIDAD / Tanques de gas de mercados'
            });
var format_SUSCEPTIBILIDADTortilleras_19 = new ol.format.GeoJSON();
var features_SUSCEPTIBILIDADTortilleras_19 = format_SUSCEPTIBILIDADTortilleras_19.readFeatures(json_SUSCEPTIBILIDADTortilleras_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUSCEPTIBILIDADTortilleras_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUSCEPTIBILIDADTortilleras_19.addFeatures(features_SUSCEPTIBILIDADTortilleras_19);
var lyr_SUSCEPTIBILIDADTortilleras_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUSCEPTIBILIDADTortilleras_19, 
                style: style_SUSCEPTIBILIDADTortilleras_19,
                interactive: false,
                title: '<img src="styles/legend/SUSCEPTIBILIDADTortilleras_19.png" /> SUSCEPTIBILIDAD / Tortillerías '
            });
var format_HISTORICOS2021Incendiovehicular_20 = new ol.format.GeoJSON();
var features_HISTORICOS2021Incendiovehicular_20 = format_HISTORICOS2021Incendiovehicular_20.readFeatures(json_HISTORICOS2021Incendiovehicular_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTORICOS2021Incendiovehicular_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTORICOS2021Incendiovehicular_20.addFeatures(features_HISTORICOS2021Incendiovehicular_20);
var lyr_HISTORICOS2021Incendiovehicular_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTORICOS2021Incendiovehicular_20, 
                style: style_HISTORICOS2021Incendiovehicular_20,
                interactive: false,
                title: '<img src="styles/legend/HISTORICOS2021Incendiovehicular_20.png" /> HISTORICOS 2021 / Incendio vehicular '
            });
var format_HISTRICOS2021Eventoelctrico_21 = new ol.format.GeoJSON();
var features_HISTRICOS2021Eventoelctrico_21 = format_HISTRICOS2021Eventoelctrico_21.readFeatures(json_HISTRICOS2021Eventoelctrico_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2021Eventoelctrico_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2021Eventoelctrico_21.addFeatures(features_HISTRICOS2021Eventoelctrico_21);
var lyr_HISTRICOS2021Eventoelctrico_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2021Eventoelctrico_21, 
                style: style_HISTRICOS2021Eventoelctrico_21,
                interactive: false,
                title: '<img src="styles/legend/HISTRICOS2021Eventoelctrico_21.png" /> HISTÓRICOS 2021 / Evento eléctrico '
            });
var format_HISTRICOS2021Fugadegas_22 = new ol.format.GeoJSON();
var features_HISTRICOS2021Fugadegas_22 = format_HISTRICOS2021Fugadegas_22.readFeatures(json_HISTRICOS2021Fugadegas_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2021Fugadegas_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2021Fugadegas_22.addFeatures(features_HISTRICOS2021Fugadegas_22);
var lyr_HISTRICOS2021Fugadegas_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2021Fugadegas_22, 
                style: style_HISTRICOS2021Fugadegas_22,
                interactive: false,
                title: '<img src="styles/legend/HISTRICOS2021Fugadegas_22.png" /> HISTÓRICOS 2021 / Fuga de gas '
            });
var format_HISTRICOS2021Incendiocasahabitacin_23 = new ol.format.GeoJSON();
var features_HISTRICOS2021Incendiocasahabitacin_23 = format_HISTRICOS2021Incendiocasahabitacin_23.readFeatures(json_HISTRICOS2021Incendiocasahabitacin_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2021Incendiocasahabitacin_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2021Incendiocasahabitacin_23.addFeatures(features_HISTRICOS2021Incendiocasahabitacin_23);
var lyr_HISTRICOS2021Incendiocasahabitacin_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2021Incendiocasahabitacin_23, 
                style: style_HISTRICOS2021Incendiocasahabitacin_23,
                interactive: false,
                title: '<img src="styles/legend/HISTRICOS2021Incendiocasahabitacin_23.png" /> HISTÓRICOS 2021 / Incendio casa habitación '
            });
var format_HISTRICOS2020Eventoelctrico_24 = new ol.format.GeoJSON();
var features_HISTRICOS2020Eventoelctrico_24 = format_HISTRICOS2020Eventoelctrico_24.readFeatures(json_HISTRICOS2020Eventoelctrico_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2020Eventoelctrico_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2020Eventoelctrico_24.addFeatures(features_HISTRICOS2020Eventoelctrico_24);
var lyr_HISTRICOS2020Eventoelctrico_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2020Eventoelctrico_24, 
                style: style_HISTRICOS2020Eventoelctrico_24,
                interactive: false,
                title: '<img src="styles/legend/HISTRICOS2020Eventoelctrico_24.png" /> HISTÓRICOS 2020 / Evento eléctrico'
            });
var format_HISTRICOS2020Fugadeamoniaco_25 = new ol.format.GeoJSON();
var features_HISTRICOS2020Fugadeamoniaco_25 = format_HISTRICOS2020Fugadeamoniaco_25.readFeatures(json_HISTRICOS2020Fugadeamoniaco_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2020Fugadeamoniaco_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2020Fugadeamoniaco_25.addFeatures(features_HISTRICOS2020Fugadeamoniaco_25);
var lyr_HISTRICOS2020Fugadeamoniaco_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2020Fugadeamoniaco_25, 
                style: style_HISTRICOS2020Fugadeamoniaco_25,
                interactive: false,
                title: '<img src="styles/legend/HISTRICOS2020Fugadeamoniaco_25.png" /> HISTÓRICOS 2020  / Fuga de amoniaco '
            });
var format_HISTRICOS2020Fugadegas_26 = new ol.format.GeoJSON();
var features_HISTRICOS2020Fugadegas_26 = format_HISTRICOS2020Fugadegas_26.readFeatures(json_HISTRICOS2020Fugadegas_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2020Fugadegas_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2020Fugadegas_26.addFeatures(features_HISTRICOS2020Fugadegas_26);
var lyr_HISTRICOS2020Fugadegas_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2020Fugadegas_26, 
                style: style_HISTRICOS2020Fugadegas_26,
                interactive: false,
                title: '<img src="styles/legend/HISTRICOS2020Fugadegas_26.png" /> HISTÓRICOS 2020  / Fuga de gas '
            });
var format_HISTRICOS2020Incendio_27 = new ol.format.GeoJSON();
var features_HISTRICOS2020Incendio_27 = format_HISTRICOS2020Incendio_27.readFeatures(json_HISTRICOS2020Incendio_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2020Incendio_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2020Incendio_27.addFeatures(features_HISTRICOS2020Incendio_27);
var lyr_HISTRICOS2020Incendio_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2020Incendio_27, 
                style: style_HISTRICOS2020Incendio_27,
                interactive: false,
                title: '<img src="styles/legend/HISTRICOS2020Incendio_27.png" /> HISTÓRICOS 2020  / Incendio '
            });
var format_HISTRICOS2020Incendioforestal_28 = new ol.format.GeoJSON();
var features_HISTRICOS2020Incendioforestal_28 = format_HISTRICOS2020Incendioforestal_28.readFeatures(json_HISTRICOS2020Incendioforestal_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2020Incendioforestal_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2020Incendioforestal_28.addFeatures(features_HISTRICOS2020Incendioforestal_28);
var lyr_HISTRICOS2020Incendioforestal_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2020Incendioforestal_28, 
                style: style_HISTRICOS2020Incendioforestal_28,
                interactive: false,
                title: '<img src="styles/legend/HISTRICOS2020Incendioforestal_28.png" /> HISTÓRICOS 2020  / Incendio forestal '
            });
var format_HISTRICOS2020Incendiopastizal_29 = new ol.format.GeoJSON();
var features_HISTRICOS2020Incendiopastizal_29 = format_HISTRICOS2020Incendiopastizal_29.readFeatures(json_HISTRICOS2020Incendiopastizal_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2020Incendiopastizal_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2020Incendiopastizal_29.addFeatures(features_HISTRICOS2020Incendiopastizal_29);
var lyr_HISTRICOS2020Incendiopastizal_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2020Incendiopastizal_29, 
                style: style_HISTRICOS2020Incendiopastizal_29,
                interactive: false,
                title: '<img src="styles/legend/HISTRICOS2020Incendiopastizal_29.png" /> HISTÓRICOS 2020  / Incendio pastizal '
            });
var format_HISTRICOS2020Incendios_30 = new ol.format.GeoJSON();
var features_HISTRICOS2020Incendios_30 = format_HISTRICOS2020Incendios_30.readFeatures(json_HISTRICOS2020Incendios_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2020Incendios_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2020Incendios_30.addFeatures(features_HISTRICOS2020Incendios_30);
var lyr_HISTRICOS2020Incendios_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2020Incendios_30, 
                style: style_HISTRICOS2020Incendios_30,
                interactive: false,
                title: '<img src="styles/legend/HISTRICOS2020Incendios_30.png" /> HISTÓRICOS 2020  / Incendios'
            });
var format_HISTRICOS2020Quemadebasura_31 = new ol.format.GeoJSON();
var features_HISTRICOS2020Quemadebasura_31 = format_HISTRICOS2020Quemadebasura_31.readFeatures(json_HISTRICOS2020Quemadebasura_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2020Quemadebasura_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2020Quemadebasura_31.addFeatures(features_HISTRICOS2020Quemadebasura_31);
var lyr_HISTRICOS2020Quemadebasura_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2020Quemadebasura_31, 
                style: style_HISTRICOS2020Quemadebasura_31,
                interactive: false,
                title: '<img src="styles/legend/HISTRICOS2020Quemadebasura_31.png" /> HISTÓRICOS 2020  / Quema de basura '
            });
var format_HISTRICOS2019Fugadegas2018_32 = new ol.format.GeoJSON();
var features_HISTRICOS2019Fugadegas2018_32 = format_HISTRICOS2019Fugadegas2018_32.readFeatures(json_HISTRICOS2019Fugadegas2018_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2019Fugadegas2018_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2019Fugadegas2018_32.addFeatures(features_HISTRICOS2019Fugadegas2018_32);
var lyr_HISTRICOS2019Fugadegas2018_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2019Fugadegas2018_32, 
                style: style_HISTRICOS2019Fugadegas2018_32,
                interactive: false,
                title: '<img src="styles/legend/HISTRICOS2019Fugadegas2018_32.png" /> HISTÓRICOS 2019  / Fuga de gas 2018 '
            });
var format_HISTRICOS2019Incendiocarrizal2019_33 = new ol.format.GeoJSON();
var features_HISTRICOS2019Incendiocarrizal2019_33 = format_HISTRICOS2019Incendiocarrizal2019_33.readFeatures(json_HISTRICOS2019Incendiocarrizal2019_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2019Incendiocarrizal2019_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2019Incendiocarrizal2019_33.addFeatures(features_HISTRICOS2019Incendiocarrizal2019_33);
var lyr_HISTRICOS2019Incendiocarrizal2019_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2019Incendiocarrizal2019_33, 
                style: style_HISTRICOS2019Incendiocarrizal2019_33,
                interactive: false,
                title: '<img src="styles/legend/HISTRICOS2019Incendiocarrizal2019_33.png" /> HISTÓRICOS 2019  / Incendio carrizal 2019 '
            });
var format_HISTRICOS2019IncendioCasaHabitacin2019_34 = new ol.format.GeoJSON();
var features_HISTRICOS2019IncendioCasaHabitacin2019_34 = format_HISTRICOS2019IncendioCasaHabitacin2019_34.readFeatures(json_HISTRICOS2019IncendioCasaHabitacin2019_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2019IncendioCasaHabitacin2019_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2019IncendioCasaHabitacin2019_34.addFeatures(features_HISTRICOS2019IncendioCasaHabitacin2019_34);
var lyr_HISTRICOS2019IncendioCasaHabitacin2019_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2019IncendioCasaHabitacin2019_34, 
                style: style_HISTRICOS2019IncendioCasaHabitacin2019_34,
                interactive: false,
                title: '<img src="styles/legend/HISTRICOS2019IncendioCasaHabitacin2019_34.png" /> HISTÓRICOS 2019  / Incendio Casa - Habitación 2019 '
            });
var format_HISTRICOS2018Fugadegas2018_35 = new ol.format.GeoJSON();
var features_HISTRICOS2018Fugadegas2018_35 = format_HISTRICOS2018Fugadegas2018_35.readFeatures(json_HISTRICOS2018Fugadegas2018_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2018Fugadegas2018_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2018Fugadegas2018_35.addFeatures(features_HISTRICOS2018Fugadegas2018_35);
var lyr_HISTRICOS2018Fugadegas2018_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2018Fugadegas2018_35, 
                style: style_HISTRICOS2018Fugadegas2018_35,
                interactive: false,
                title: '<img src="styles/legend/HISTRICOS2018Fugadegas2018_35.png" /> HISTÓRICOS 2018  / Fuga de gas 2018 '
            });
var format_HISTRICOS2018Incenciopastizal2018_36 = new ol.format.GeoJSON();
var features_HISTRICOS2018Incenciopastizal2018_36 = format_HISTRICOS2018Incenciopastizal2018_36.readFeatures(json_HISTRICOS2018Incenciopastizal2018_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2018Incenciopastizal2018_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2018Incenciopastizal2018_36.addFeatures(features_HISTRICOS2018Incenciopastizal2018_36);
var lyr_HISTRICOS2018Incenciopastizal2018_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2018Incenciopastizal2018_36, 
                style: style_HISTRICOS2018Incenciopastizal2018_36,
                interactive: false,
                title: '<img src="styles/legend/HISTRICOS2018Incenciopastizal2018_36.png" /> HISTÓRICOS 2018  / Incencio pastizal 2018 '
            });
var format_HISTRICOS2017Explosiones2017_37 = new ol.format.GeoJSON();
var features_HISTRICOS2017Explosiones2017_37 = format_HISTRICOS2017Explosiones2017_37.readFeatures(json_HISTRICOS2017Explosiones2017_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2017Explosiones2017_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2017Explosiones2017_37.addFeatures(features_HISTRICOS2017Explosiones2017_37);
var lyr_HISTRICOS2017Explosiones2017_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2017Explosiones2017_37, 
                style: style_HISTRICOS2017Explosiones2017_37,
                interactive: false,
                title: '<img src="styles/legend/HISTRICOS2017Explosiones2017_37.png" /> HISTÓRICOS 2017 / Explosiones 2017 '
            });
var format_ESCENARIOSROSALADOEstimacindedesbordamiento_38 = new ol.format.GeoJSON();
var features_ESCENARIOSROSALADOEstimacindedesbordamiento_38 = format_ESCENARIOSROSALADOEstimacindedesbordamiento_38.readFeatures(json_ESCENARIOSROSALADOEstimacindedesbordamiento_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESCENARIOSROSALADOEstimacindedesbordamiento_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESCENARIOSROSALADOEstimacindedesbordamiento_38.addFeatures(features_ESCENARIOSROSALADOEstimacindedesbordamiento_38);
var lyr_ESCENARIOSROSALADOEstimacindedesbordamiento_38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ESCENARIOSROSALADOEstimacindedesbordamiento_38, 
                style: style_ESCENARIOSROSALADOEstimacindedesbordamiento_38,
                interactive: false,
                title: '<img src="styles/legend/ESCENARIOSROSALADOEstimacindedesbordamiento_38.png" /> ESCENARIOS RÍO SALADO  / Estimación de desbordamiento'
            });
var format_MAPASDERIESGOSEspaciocuencasriesgobajo_39 = new ol.format.GeoJSON();
var features_MAPASDERIESGOSEspaciocuencasriesgobajo_39 = format_MAPASDERIESGOSEspaciocuencasriesgobajo_39.readFeatures(json_MAPASDERIESGOSEspaciocuencasriesgobajo_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MAPASDERIESGOSEspaciocuencasriesgobajo_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAPASDERIESGOSEspaciocuencasriesgobajo_39.addFeatures(features_MAPASDERIESGOSEspaciocuencasriesgobajo_39);
var lyr_MAPASDERIESGOSEspaciocuencasriesgobajo_39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MAPASDERIESGOSEspaciocuencasriesgobajo_39, 
                style: style_MAPASDERIESGOSEspaciocuencasriesgobajo_39,
                interactive: false,
                title: '<img src="styles/legend/MAPASDERIESGOSEspaciocuencasriesgobajo_39.png" /> MAPAS DE RIESGOS  / Espacio cuencas riesgo bajo'
            });
var format_MAPASDERIESGOSEspaciocuencasriesgomedio_40 = new ol.format.GeoJSON();
var features_MAPASDERIESGOSEspaciocuencasriesgomedio_40 = format_MAPASDERIESGOSEspaciocuencasriesgomedio_40.readFeatures(json_MAPASDERIESGOSEspaciocuencasriesgomedio_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MAPASDERIESGOSEspaciocuencasriesgomedio_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAPASDERIESGOSEspaciocuencasriesgomedio_40.addFeatures(features_MAPASDERIESGOSEspaciocuencasriesgomedio_40);
var lyr_MAPASDERIESGOSEspaciocuencasriesgomedio_40 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MAPASDERIESGOSEspaciocuencasriesgomedio_40, 
                style: style_MAPASDERIESGOSEspaciocuencasriesgomedio_40,
                interactive: false,
                title: '<img src="styles/legend/MAPASDERIESGOSEspaciocuencasriesgomedio_40.png" /> MAPAS DE RIESGOS  / Espacio cuencas riesgo medio '
            });
var format_MAPASDERIESGOSEspaciocuencasriesgoalto_41 = new ol.format.GeoJSON();
var features_MAPASDERIESGOSEspaciocuencasriesgoalto_41 = format_MAPASDERIESGOSEspaciocuencasriesgoalto_41.readFeatures(json_MAPASDERIESGOSEspaciocuencasriesgoalto_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MAPASDERIESGOSEspaciocuencasriesgoalto_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAPASDERIESGOSEspaciocuencasriesgoalto_41.addFeatures(features_MAPASDERIESGOSEspaciocuencasriesgoalto_41);
var lyr_MAPASDERIESGOSEspaciocuencasriesgoalto_41 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MAPASDERIESGOSEspaciocuencasriesgoalto_41, 
                style: style_MAPASDERIESGOSEspaciocuencasriesgoalto_41,
                interactive: false,
                title: '<img src="styles/legend/MAPASDERIESGOSEspaciocuencasriesgoalto_41.png" /> MAPAS DE RIESGOS  / Espacio cuencas riesgo alto '
            });
var format_HISTRICOS2021Afectacionesporlluvia2021_42 = new ol.format.GeoJSON();
var features_HISTRICOS2021Afectacionesporlluvia2021_42 = format_HISTRICOS2021Afectacionesporlluvia2021_42.readFeatures(json_HISTRICOS2021Afectacionesporlluvia2021_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2021Afectacionesporlluvia2021_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2021Afectacionesporlluvia2021_42.addFeatures(features_HISTRICOS2021Afectacionesporlluvia2021_42);
var lyr_HISTRICOS2021Afectacionesporlluvia2021_42 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2021Afectacionesporlluvia2021_42, 
                style: style_HISTRICOS2021Afectacionesporlluvia2021_42,
                interactive: false,
                title: '<img src="styles/legend/HISTRICOS2021Afectacionesporlluvia2021_42.png" /> HISTÓRICOS 2021  / Afectaciones por lluvia 2021 '
            });
var format_HISTRICOS2020Granizo2020_43 = new ol.format.GeoJSON();
var features_HISTRICOS2020Granizo2020_43 = format_HISTRICOS2020Granizo2020_43.readFeatures(json_HISTRICOS2020Granizo2020_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2020Granizo2020_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2020Granizo2020_43.addFeatures(features_HISTRICOS2020Granizo2020_43);
var lyr_HISTRICOS2020Granizo2020_43 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2020Granizo2020_43, 
                style: style_HISTRICOS2020Granizo2020_43,
                interactive: false,
                title: '<img src="styles/legend/HISTRICOS2020Granizo2020_43.png" /> HISTÓRICOS 2020  / Granizo 2020 '
            });
var format_HISTRICOS2018Afectacionesportormenta2018_44 = new ol.format.GeoJSON();
var features_HISTRICOS2018Afectacionesportormenta2018_44 = format_HISTRICOS2018Afectacionesportormenta2018_44.readFeatures(json_HISTRICOS2018Afectacionesportormenta2018_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2018Afectacionesportormenta2018_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2018Afectacionesportormenta2018_44.addFeatures(features_HISTRICOS2018Afectacionesportormenta2018_44);
var lyr_HISTRICOS2018Afectacionesportormenta2018_44 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2018Afectacionesportormenta2018_44, 
                style: style_HISTRICOS2018Afectacionesportormenta2018_44,
                interactive: false,
                title: '<img src="styles/legend/HISTRICOS2018Afectacionesportormenta2018_44.png" /> HISTÓRICOS 2018  / Afectaciones por tormenta 2018 '
            });
var format_HISTRICOElhistrico_45 = new ol.format.GeoJSON();
var features_HISTRICOElhistrico_45 = format_HISTRICOElhistrico_45.readFeatures(json_HISTRICOElhistrico_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOElhistrico_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOElhistrico_45.addFeatures(features_HISTRICOElhistrico_45);
var lyr_HISTRICOElhistrico_45 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOElhistrico_45, 
                style: style_HISTRICOElhistrico_45,
                interactive: false,
                title: '<img src="styles/legend/HISTRICOElhistrico_45.png" /> HISTÓRICO  / El histórico '
            });
var format_PELIGROSDeslizamientoladerasCONABIO_46 = new ol.format.GeoJSON();
var features_PELIGROSDeslizamientoladerasCONABIO_46 = format_PELIGROSDeslizamientoladerasCONABIO_46.readFeatures(json_PELIGROSDeslizamientoladerasCONABIO_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PELIGROSDeslizamientoladerasCONABIO_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PELIGROSDeslizamientoladerasCONABIO_46.addFeatures(features_PELIGROSDeslizamientoladerasCONABIO_46);
var lyr_PELIGROSDeslizamientoladerasCONABIO_46 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PELIGROSDeslizamientoladerasCONABIO_46, 
                style: style_PELIGROSDeslizamientoladerasCONABIO_46,
                interactive: false,
                title: '<img src="styles/legend/PELIGROSDeslizamientoladerasCONABIO_46.png" /> PELIGROS  / Deslizamiento laderas CONABIO '
            });
var format_SUSCEPTIBILIDADErosinzonahjo_47 = new ol.format.GeoJSON();
var features_SUSCEPTIBILIDADErosinzonahjo_47 = format_SUSCEPTIBILIDADErosinzonahjo_47.readFeatures(json_SUSCEPTIBILIDADErosinzonahjo_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUSCEPTIBILIDADErosinzonahjo_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUSCEPTIBILIDADErosinzonahjo_47.addFeatures(features_SUSCEPTIBILIDADErosinzonahjo_47);
var lyr_SUSCEPTIBILIDADErosinzonahjo_47 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUSCEPTIBILIDADErosinzonahjo_47, 
                style: style_SUSCEPTIBILIDADErosinzonahjo_47,
                interactive: false,
                title: '<img src="styles/legend/SUSCEPTIBILIDADErosinzonahjo_47.png" /> SUSCEPTIBILIDAD  / Erosión zona hjo '
            });
var format_MAPASDERIESGOZonanoaptaparahabitar_48 = new ol.format.GeoJSON();
var features_MAPASDERIESGOZonanoaptaparahabitar_48 = format_MAPASDERIESGOZonanoaptaparahabitar_48.readFeatures(json_MAPASDERIESGOZonanoaptaparahabitar_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MAPASDERIESGOZonanoaptaparahabitar_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAPASDERIESGOZonanoaptaparahabitar_48.addFeatures(features_MAPASDERIESGOZonanoaptaparahabitar_48);
var lyr_MAPASDERIESGOZonanoaptaparahabitar_48 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MAPASDERIESGOZonanoaptaparahabitar_48, 
                style: style_MAPASDERIESGOZonanoaptaparahabitar_48,
                interactive: false,
                title: '<img src="styles/legend/MAPASDERIESGOZonanoaptaparahabitar_48.png" /> MAPAS DE RIESGO  / Zona no apta para habitar'
            });
var format_HISTRICOSHundimientos_49 = new ol.format.GeoJSON();
var features_HISTRICOSHundimientos_49 = format_HISTRICOSHundimientos_49.readFeatures(json_HISTRICOSHundimientos_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOSHundimientos_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOSHundimientos_49.addFeatures(features_HISTRICOSHundimientos_49);
var lyr_HISTRICOSHundimientos_49 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOSHundimientos_49, 
                style: style_HISTRICOSHundimientos_49,
                interactive: false,
                title: '<img src="styles/legend/HISTRICOSHundimientos_49.png" /> HISTÓRICOS  / Hundimientos '
            });
var format_HISTRICOSHuajuapansismo20172019_50 = new ol.format.GeoJSON();
var features_HISTRICOSHuajuapansismo20172019_50 = format_HISTRICOSHuajuapansismo20172019_50.readFeatures(json_HISTRICOSHuajuapansismo20172019_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOSHuajuapansismo20172019_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOSHuajuapansismo20172019_50.addFeatures(features_HISTRICOSHuajuapansismo20172019_50);
var lyr_HISTRICOSHuajuapansismo20172019_50 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOSHuajuapansismo20172019_50, 
                style: style_HISTRICOSHuajuapansismo20172019_50,
                interactive: false,
                title: '<img src="styles/legend/HISTRICOSHuajuapansismo20172019_50.png" /> HISTÓRICOS  / Huajuapan sismo 2017 - 2019'
            });
var format_HDRICAHidrolneas_51 = new ol.format.GeoJSON();
var features_HDRICAHidrolneas_51 = format_HDRICAHidrolneas_51.readFeatures(json_HDRICAHidrolneas_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HDRICAHidrolneas_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HDRICAHidrolneas_51.addFeatures(features_HDRICAHidrolneas_51);
var lyr_HDRICAHidrolneas_51 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HDRICAHidrolneas_51, 
                style: style_HDRICAHidrolneas_51,
                interactive: false,
                title: '<img src="styles/legend/HDRICAHidrolneas_51.png" /> HÍDRICA  / Hidrolíneas'
            });
var format_INFORMACINCOMPLEMENTARIACalles_52 = new ol.format.GeoJSON();
var features_INFORMACINCOMPLEMENTARIACalles_52 = format_INFORMACINCOMPLEMENTARIACalles_52.readFeatures(json_INFORMACINCOMPLEMENTARIACalles_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INFORMACINCOMPLEMENTARIACalles_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INFORMACINCOMPLEMENTARIACalles_52.addFeatures(features_INFORMACINCOMPLEMENTARIACalles_52);
var lyr_INFORMACINCOMPLEMENTARIACalles_52 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INFORMACINCOMPLEMENTARIACalles_52, 
                style: style_INFORMACINCOMPLEMENTARIACalles_52,
                interactive: false,
                title: '<img src="styles/legend/INFORMACINCOMPLEMENTARIACalles_52.png" /> INFORMACIÓN COMPLEMENTARIA  / Calles'
            });
var format_INFORMACINCOMPLEMENTARIAFrentedemanzana_53 = new ol.format.GeoJSON();
var features_INFORMACINCOMPLEMENTARIAFrentedemanzana_53 = format_INFORMACINCOMPLEMENTARIAFrentedemanzana_53.readFeatures(json_INFORMACINCOMPLEMENTARIAFrentedemanzana_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INFORMACINCOMPLEMENTARIAFrentedemanzana_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INFORMACINCOMPLEMENTARIAFrentedemanzana_53.addFeatures(features_INFORMACINCOMPLEMENTARIAFrentedemanzana_53);
var lyr_INFORMACINCOMPLEMENTARIAFrentedemanzana_53 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INFORMACINCOMPLEMENTARIAFrentedemanzana_53, 
                style: style_INFORMACINCOMPLEMENTARIAFrentedemanzana_53,
                interactive: false,
                title: '<img src="styles/legend/INFORMACINCOMPLEMENTARIAFrentedemanzana_53.png" /> INFORMACIÓN COMPLEMENTARIA  / Frente de manzana'
            });
var format_INFORMACINCOMPLEMENTARIADivisinterritorial2020_54 = new ol.format.GeoJSON();
var features_INFORMACINCOMPLEMENTARIADivisinterritorial2020_54 = format_INFORMACINCOMPLEMENTARIADivisinterritorial2020_54.readFeatures(json_INFORMACINCOMPLEMENTARIADivisinterritorial2020_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INFORMACINCOMPLEMENTARIADivisinterritorial2020_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INFORMACINCOMPLEMENTARIADivisinterritorial2020_54.addFeatures(features_INFORMACINCOMPLEMENTARIADivisinterritorial2020_54);
var lyr_INFORMACINCOMPLEMENTARIADivisinterritorial2020_54 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INFORMACINCOMPLEMENTARIADivisinterritorial2020_54, 
                style: style_INFORMACINCOMPLEMENTARIADivisinterritorial2020_54,
                interactive: false,
                title: '<img src="styles/legend/INFORMACINCOMPLEMENTARIADivisinterritorial2020_54.png" /> INFORMACIÓN COMPLEMENTARIA  / División territorial 2020'
            });
var group_DATOSBSICOS = new ol.layer.Group({
                                layers: [lyr_HDRICAHidrolneas_51,lyr_INFORMACINCOMPLEMENTARIACalles_52,lyr_INFORMACINCOMPLEMENTARIAFrentedemanzana_53,lyr_INFORMACINCOMPLEMENTARIADivisinterritorial2020_54,],
                                title: "DATOS BÁSICOS"});
var group_GEOLGICOS = new ol.layer.Group({
                                layers: [lyr_PELIGROSDeslizamientoladerasCONABIO_46,lyr_SUSCEPTIBILIDADErosinzonahjo_47,lyr_MAPASDERIESGOZonanoaptaparahabitar_48,lyr_HISTRICOSHundimientos_49,lyr_HISTRICOSHuajuapansismo20172019_50,],
                                title: "GEOLÓGICOS"});
var group_HIDROMETEOROLGICOS = new ol.layer.Group({
                                layers: [lyr_ESCENARIOSROSALADOEstimacindedesbordamiento_38,lyr_MAPASDERIESGOSEspaciocuencasriesgobajo_39,lyr_MAPASDERIESGOSEspaciocuencasriesgomedio_40,lyr_MAPASDERIESGOSEspaciocuencasriesgoalto_41,lyr_HISTRICOS2021Afectacionesporlluvia2021_42,lyr_HISTRICOS2020Granizo2020_43,lyr_HISTRICOS2018Afectacionesportormenta2018_44,lyr_HISTRICOElhistrico_45,],
                                title: "HIDROMETEOROLÓGICOS"});
var group_QUMICOTECNOLGICOS = new ol.layer.Group({
                                layers: [lyr_ESCENARIOSRadiacintrmicafugadegasFlamaAzul_15,lyr_SUSCEPTIBILIDADPolvorines_16,lyr_SUSCEPTIBILIDADRosticeras_17,lyr_SUSCEPTIBILIDADTanquesdegasdemercados_18,lyr_SUSCEPTIBILIDADTortilleras_19,lyr_HISTORICOS2021Incendiovehicular_20,lyr_HISTRICOS2021Eventoelctrico_21,lyr_HISTRICOS2021Fugadegas_22,lyr_HISTRICOS2021Incendiocasahabitacin_23,lyr_HISTRICOS2020Eventoelctrico_24,lyr_HISTRICOS2020Fugadeamoniaco_25,lyr_HISTRICOS2020Fugadegas_26,lyr_HISTRICOS2020Incendio_27,lyr_HISTRICOS2020Incendioforestal_28,lyr_HISTRICOS2020Incendiopastizal_29,lyr_HISTRICOS2020Incendios_30,lyr_HISTRICOS2020Quemadebasura_31,lyr_HISTRICOS2019Fugadegas2018_32,lyr_HISTRICOS2019Incendiocarrizal2019_33,lyr_HISTRICOS2019IncendioCasaHabitacin2019_34,lyr_HISTRICOS2018Fugadegas2018_35,lyr_HISTRICOS2018Incenciopastizal2018_36,lyr_HISTRICOS2017Explosiones2017_37,],
                                title: "QUÍMICO-TECNOLÓGICOS"});
var group_SANITARIOECOLGICOS = new ol.layer.Group({
                                layers: [lyr_SUSCEPTIBILIDADPlantadeaguasresiduales_7,lyr_HISTRICOS2021Controlabejas_8,lyr_HISTRICOS2021Controldefauna_9,lyr_HISTRICOS2018Controlanimal_10,lyr_HISTRICOS2018Controlavejas_11,lyr_HISTRICOS2018Rescateanimal_12,lyr_HISTRICOS2018RescateyCapturadeanimaldomstico_13,lyr_HISTRICOS2018RetirodeAbejas_14,],
                                title: "SANITARIO-ECOLÓGICOS"});
var group_SOCIOORGANIZATIVO = new ol.layer.Group({
                                layers: [lyr_SUSCEPTIBILIDADCementerios_3,lyr_SUSCEPTIBILIDADEscuelas_4,lyr_SUSCEPTIBILIDADMercado_5,lyr_SUSCEPTIBILIDADParquesdeesparcimiento_6,],
                                title: "SOCIO-ORGANIZATIVO"});
var group_MAPAS = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_GoogleHybrid_1,lyr_OpenStreetMap_2,],
                                title: "MAPAS"});

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_SUSCEPTIBILIDADCementerios_3.setVisible(true);lyr_SUSCEPTIBILIDADEscuelas_4.setVisible(true);lyr_SUSCEPTIBILIDADMercado_5.setVisible(true);lyr_SUSCEPTIBILIDADParquesdeesparcimiento_6.setVisible(true);lyr_SUSCEPTIBILIDADPlantadeaguasresiduales_7.setVisible(true);lyr_HISTRICOS2021Controlabejas_8.setVisible(true);lyr_HISTRICOS2021Controldefauna_9.setVisible(true);lyr_HISTRICOS2018Controlanimal_10.setVisible(true);lyr_HISTRICOS2018Controlavejas_11.setVisible(true);lyr_HISTRICOS2018Rescateanimal_12.setVisible(true);lyr_HISTRICOS2018RescateyCapturadeanimaldomstico_13.setVisible(true);lyr_HISTRICOS2018RetirodeAbejas_14.setVisible(true);lyr_ESCENARIOSRadiacintrmicafugadegasFlamaAzul_15.setVisible(true);lyr_SUSCEPTIBILIDADPolvorines_16.setVisible(true);lyr_SUSCEPTIBILIDADRosticeras_17.setVisible(true);lyr_SUSCEPTIBILIDADTanquesdegasdemercados_18.setVisible(true);lyr_SUSCEPTIBILIDADTortilleras_19.setVisible(true);lyr_HISTORICOS2021Incendiovehicular_20.setVisible(true);lyr_HISTRICOS2021Eventoelctrico_21.setVisible(true);lyr_HISTRICOS2021Fugadegas_22.setVisible(true);lyr_HISTRICOS2021Incendiocasahabitacin_23.setVisible(true);lyr_HISTRICOS2020Eventoelctrico_24.setVisible(true);lyr_HISTRICOS2020Fugadeamoniaco_25.setVisible(true);lyr_HISTRICOS2020Fugadegas_26.setVisible(true);lyr_HISTRICOS2020Incendio_27.setVisible(true);lyr_HISTRICOS2020Incendioforestal_28.setVisible(true);lyr_HISTRICOS2020Incendiopastizal_29.setVisible(true);lyr_HISTRICOS2020Incendios_30.setVisible(true);lyr_HISTRICOS2020Quemadebasura_31.setVisible(true);lyr_HISTRICOS2019Fugadegas2018_32.setVisible(true);lyr_HISTRICOS2019Incendiocarrizal2019_33.setVisible(true);lyr_HISTRICOS2019IncendioCasaHabitacin2019_34.setVisible(true);lyr_HISTRICOS2018Fugadegas2018_35.setVisible(true);lyr_HISTRICOS2018Incenciopastizal2018_36.setVisible(true);lyr_HISTRICOS2017Explosiones2017_37.setVisible(true);lyr_ESCENARIOSROSALADOEstimacindedesbordamiento_38.setVisible(true);lyr_MAPASDERIESGOSEspaciocuencasriesgobajo_39.setVisible(true);lyr_MAPASDERIESGOSEspaciocuencasriesgomedio_40.setVisible(true);lyr_MAPASDERIESGOSEspaciocuencasriesgoalto_41.setVisible(true);lyr_HISTRICOS2021Afectacionesporlluvia2021_42.setVisible(true);lyr_HISTRICOS2020Granizo2020_43.setVisible(true);lyr_HISTRICOS2018Afectacionesportormenta2018_44.setVisible(true);lyr_HISTRICOElhistrico_45.setVisible(true);lyr_PELIGROSDeslizamientoladerasCONABIO_46.setVisible(true);lyr_SUSCEPTIBILIDADErosinzonahjo_47.setVisible(true);lyr_MAPASDERIESGOZonanoaptaparahabitar_48.setVisible(true);lyr_HISTRICOSHundimientos_49.setVisible(true);lyr_HISTRICOSHuajuapansismo20172019_50.setVisible(true);lyr_HDRICAHidrolneas_51.setVisible(true);lyr_INFORMACINCOMPLEMENTARIACalles_52.setVisible(true);lyr_INFORMACINCOMPLEMENTARIAFrentedemanzana_53.setVisible(true);lyr_INFORMACINCOMPLEMENTARIADivisinterritorial2020_54.setVisible(true);
var layersList = [group_MAPAS,group_SOCIOORGANIZATIVO,group_SANITARIOECOLGICOS,group_QUMICOTECNOLGICOS,group_HIDROMETEOROLGICOS,group_GEOLGICOS,group_DATOSBSICOS];
lyr_SUSCEPTIBILIDADCementerios_3.set('fieldAliases', {'fid': 'fid', });
lyr_SUSCEPTIBILIDADEscuelas_4.set('fieldAliases', {'fid': 'fid', });
lyr_SUSCEPTIBILIDADMercado_5.set('fieldAliases', {'fid': 'fid', });
lyr_SUSCEPTIBILIDADParquesdeesparcimiento_6.set('fieldAliases', {'fid': 'fid', });
lyr_SUSCEPTIBILIDADPlantadeaguasresiduales_7.set('fieldAliases', {'fid': 'fid', });
lyr_HISTRICOS2021Controlabejas_8.set('fieldAliases', {'fid': 'fid', });
lyr_HISTRICOS2021Controldefauna_9.set('fieldAliases', {'fid': 'fid', });
lyr_HISTRICOS2018Controlanimal_10.set('fieldAliases', {'fid': 'fid', });
lyr_HISTRICOS2018Controlavejas_11.set('fieldAliases', {'fid': 'fid', });
lyr_HISTRICOS2018Rescateanimal_12.set('fieldAliases', {'fid': 'fid', });
lyr_HISTRICOS2018RescateyCapturadeanimaldomstico_13.set('fieldAliases', {'fid': 'fid', });
lyr_HISTRICOS2018RetirodeAbejas_14.set('fieldAliases', {'fid': 'fid', });
lyr_ESCENARIOSRadiacintrmicafugadegasFlamaAzul_15.set('fieldAliases', {'fid': 'fid', });
lyr_SUSCEPTIBILIDADPolvorines_16.set('fieldAliases', {'fid': 'fid', });
lyr_SUSCEPTIBILIDADRosticeras_17.set('fieldAliases', {'fid': 'fid', });
lyr_SUSCEPTIBILIDADTanquesdegasdemercados_18.set('fieldAliases', {'fid': 'fid', });
lyr_SUSCEPTIBILIDADTortilleras_19.set('fieldAliases', {'fid': 'fid', });
lyr_HISTORICOS2021Incendiovehicular_20.set('fieldAliases', {'fid': 'fid', });
lyr_HISTRICOS2021Eventoelctrico_21.set('fieldAliases', {'fid': 'fid', });
lyr_HISTRICOS2021Fugadegas_22.set('fieldAliases', {'fid': 'fid', });
lyr_HISTRICOS2021Incendiocasahabitacin_23.set('fieldAliases', {'fid': 'fid', });
lyr_HISTRICOS2020Eventoelctrico_24.set('fieldAliases', {'fid': 'fid', });
lyr_HISTRICOS2020Fugadeamoniaco_25.set('fieldAliases', {'fid': 'fid', });
lyr_HISTRICOS2020Fugadegas_26.set('fieldAliases', {'fid': 'fid', });
lyr_HISTRICOS2020Incendio_27.set('fieldAliases', {'fid': 'fid', });
lyr_HISTRICOS2020Incendioforestal_28.set('fieldAliases', {'fid': 'fid', });
lyr_HISTRICOS2020Incendiopastizal_29.set('fieldAliases', {'fid': 'fid', });
lyr_HISTRICOS2020Incendios_30.set('fieldAliases', {'fid': 'fid', });
lyr_HISTRICOS2020Quemadebasura_31.set('fieldAliases', {'fid': 'fid', });
lyr_HISTRICOS2019Fugadegas2018_32.set('fieldAliases', {'fid': 'fid', });
lyr_HISTRICOS2019Incendiocarrizal2019_33.set('fieldAliases', {'fid': 'fid', });
lyr_HISTRICOS2019IncendioCasaHabitacin2019_34.set('fieldAliases', {'fid': 'fid', });
lyr_HISTRICOS2018Fugadegas2018_35.set('fieldAliases', {'fid': 'fid', });
lyr_HISTRICOS2018Incenciopastizal2018_36.set('fieldAliases', {'fid': 'fid', });
lyr_HISTRICOS2017Explosiones2017_37.set('fieldAliases', {'fid': 'fid', });
lyr_ESCENARIOSROSALADOEstimacindedesbordamiento_38.set('fieldAliases', {'fid': 'fid', });
lyr_MAPASDERIESGOSEspaciocuencasriesgobajo_39.set('fieldAliases', {'fid': 'fid', });
lyr_MAPASDERIESGOSEspaciocuencasriesgomedio_40.set('fieldAliases', {'fid': 'fid', });
lyr_MAPASDERIESGOSEspaciocuencasriesgoalto_41.set('fieldAliases', {'fid': 'fid', });
lyr_HISTRICOS2021Afectacionesporlluvia2021_42.set('fieldAliases', {'fid': 'fid', });
lyr_HISTRICOS2020Granizo2020_43.set('fieldAliases', {'fid': 'fid', });
lyr_HISTRICOS2018Afectacionesportormenta2018_44.set('fieldAliases', {'fid': 'fid', });
lyr_HISTRICOElhistrico_45.set('fieldAliases', {'fid': 'fid', });
lyr_PELIGROSDeslizamientoladerasCONABIO_46.set('fieldAliases', {'fid': 'fid', });
lyr_SUSCEPTIBILIDADErosinzonahjo_47.set('fieldAliases', {'fid': 'fid', });
lyr_MAPASDERIESGOZonanoaptaparahabitar_48.set('fieldAliases', {'fid': 'fid', });
lyr_HISTRICOSHundimientos_49.set('fieldAliases', {'fid': 'fid', });
lyr_HISTRICOSHuajuapansismo20172019_50.set('fieldAliases', {'fid': 'fid', });
lyr_HDRICAHidrolneas_51.set('fieldAliases', {'fid': 'fid', });
lyr_INFORMACINCOMPLEMENTARIACalles_52.set('fieldAliases', {'fid': 'fid', });
lyr_INFORMACINCOMPLEMENTARIAFrentedemanzana_53.set('fieldAliases', {'fid': 'fid', });
lyr_INFORMACINCOMPLEMENTARIADivisinterritorial2020_54.set('fieldAliases', {'fid': 'fid', });
lyr_SUSCEPTIBILIDADCementerios_3.set('fieldImages', {'fid': 'TextEdit', });
lyr_SUSCEPTIBILIDADEscuelas_4.set('fieldImages', {'fid': 'TextEdit', });
lyr_SUSCEPTIBILIDADMercado_5.set('fieldImages', {'fid': 'TextEdit', });
lyr_SUSCEPTIBILIDADParquesdeesparcimiento_6.set('fieldImages', {'fid': 'TextEdit', });
lyr_SUSCEPTIBILIDADPlantadeaguasresiduales_7.set('fieldImages', {'fid': '', });
lyr_HISTRICOS2021Controlabejas_8.set('fieldImages', {'fid': '', });
lyr_HISTRICOS2021Controldefauna_9.set('fieldImages', {'fid': '', });
lyr_HISTRICOS2018Controlanimal_10.set('fieldImages', {'fid': '', });
lyr_HISTRICOS2018Controlavejas_11.set('fieldImages', {'fid': '', });
lyr_HISTRICOS2018Rescateanimal_12.set('fieldImages', {'fid': '', });
lyr_HISTRICOS2018RescateyCapturadeanimaldomstico_13.set('fieldImages', {'fid': '', });
lyr_HISTRICOS2018RetirodeAbejas_14.set('fieldImages', {'fid': '', });
lyr_ESCENARIOSRadiacintrmicafugadegasFlamaAzul_15.set('fieldImages', {'fid': 'TextEdit', });
lyr_SUSCEPTIBILIDADPolvorines_16.set('fieldImages', {'fid': 'TextEdit', });
lyr_SUSCEPTIBILIDADRosticeras_17.set('fieldImages', {'fid': 'TextEdit', });
lyr_SUSCEPTIBILIDADTanquesdegasdemercados_18.set('fieldImages', {'fid': 'TextEdit', });
lyr_SUSCEPTIBILIDADTortilleras_19.set('fieldImages', {'fid': 'TextEdit', });
lyr_HISTORICOS2021Incendiovehicular_20.set('fieldImages', {'fid': 'TextEdit', });
lyr_HISTRICOS2021Eventoelctrico_21.set('fieldImages', {'fid': 'TextEdit', });
lyr_HISTRICOS2021Fugadegas_22.set('fieldImages', {'fid': 'TextEdit', });
lyr_HISTRICOS2021Incendiocasahabitacin_23.set('fieldImages', {'fid': 'TextEdit', });
lyr_HISTRICOS2020Eventoelctrico_24.set('fieldImages', {'fid': 'TextEdit', });
lyr_HISTRICOS2020Fugadeamoniaco_25.set('fieldImages', {'fid': 'TextEdit', });
lyr_HISTRICOS2020Fugadegas_26.set('fieldImages', {'fid': 'TextEdit', });
lyr_HISTRICOS2020Incendio_27.set('fieldImages', {'fid': 'TextEdit', });
lyr_HISTRICOS2020Incendioforestal_28.set('fieldImages', {'fid': '', });
lyr_HISTRICOS2020Incendiopastizal_29.set('fieldImages', {'fid': 'TextEdit', });
lyr_HISTRICOS2020Incendios_30.set('fieldImages', {'fid': 'TextEdit', });
lyr_HISTRICOS2020Quemadebasura_31.set('fieldImages', {'fid': 'TextEdit', });
lyr_HISTRICOS2019Fugadegas2018_32.set('fieldImages', {'fid': 'TextEdit', });
lyr_HISTRICOS2019Incendiocarrizal2019_33.set('fieldImages', {'fid': 'TextEdit', });
lyr_HISTRICOS2019IncendioCasaHabitacin2019_34.set('fieldImages', {'fid': 'TextEdit', });
lyr_HISTRICOS2018Fugadegas2018_35.set('fieldImages', {'fid': 'TextEdit', });
lyr_HISTRICOS2018Incenciopastizal2018_36.set('fieldImages', {'fid': 'TextEdit', });
lyr_HISTRICOS2017Explosiones2017_37.set('fieldImages', {'fid': 'TextEdit', });
lyr_ESCENARIOSROSALADOEstimacindedesbordamiento_38.set('fieldImages', {'fid': 'TextEdit', });
lyr_MAPASDERIESGOSEspaciocuencasriesgobajo_39.set('fieldImages', {'fid': 'TextEdit', });
lyr_MAPASDERIESGOSEspaciocuencasriesgomedio_40.set('fieldImages', {'fid': 'TextEdit', });
lyr_MAPASDERIESGOSEspaciocuencasriesgoalto_41.set('fieldImages', {'fid': 'TextEdit', });
lyr_HISTRICOS2021Afectacionesporlluvia2021_42.set('fieldImages', {'fid': 'TextEdit', });
lyr_HISTRICOS2020Granizo2020_43.set('fieldImages', {'fid': 'TextEdit', });
lyr_HISTRICOS2018Afectacionesportormenta2018_44.set('fieldImages', {'fid': 'TextEdit', });
lyr_HISTRICOElhistrico_45.set('fieldImages', {'fid': 'TextEdit', });
lyr_PELIGROSDeslizamientoladerasCONABIO_46.set('fieldImages', {'fid': 'TextEdit', });
lyr_SUSCEPTIBILIDADErosinzonahjo_47.set('fieldImages', {'fid': 'TextEdit', });
lyr_MAPASDERIESGOZonanoaptaparahabitar_48.set('fieldImages', {'fid': 'TextEdit', });
lyr_HISTRICOSHundimientos_49.set('fieldImages', {'fid': 'TextEdit', });
lyr_HISTRICOSHuajuapansismo20172019_50.set('fieldImages', {'fid': 'TextEdit', });
lyr_HDRICAHidrolneas_51.set('fieldImages', {'fid': 'TextEdit', });
lyr_INFORMACINCOMPLEMENTARIACalles_52.set('fieldImages', {'fid': 'TextEdit', });
lyr_INFORMACINCOMPLEMENTARIAFrentedemanzana_53.set('fieldImages', {'fid': 'TextEdit', });
lyr_INFORMACINCOMPLEMENTARIADivisinterritorial2020_54.set('fieldImages', {'fid': 'TextEdit', });
lyr_SUSCEPTIBILIDADCementerios_3.set('fieldLabels', {});
lyr_SUSCEPTIBILIDADEscuelas_4.set('fieldLabels', {});
lyr_SUSCEPTIBILIDADMercado_5.set('fieldLabels', {});
lyr_SUSCEPTIBILIDADParquesdeesparcimiento_6.set('fieldLabels', {});
lyr_SUSCEPTIBILIDADPlantadeaguasresiduales_7.set('fieldLabels', {});
lyr_HISTRICOS2021Controlabejas_8.set('fieldLabels', {});
lyr_HISTRICOS2021Controldefauna_9.set('fieldLabels', {});
lyr_HISTRICOS2018Controlanimal_10.set('fieldLabels', {});
lyr_HISTRICOS2018Controlavejas_11.set('fieldLabels', {});
lyr_HISTRICOS2018Rescateanimal_12.set('fieldLabels', {});
lyr_HISTRICOS2018RescateyCapturadeanimaldomstico_13.set('fieldLabels', {});
lyr_HISTRICOS2018RetirodeAbejas_14.set('fieldLabels', {});
lyr_ESCENARIOSRadiacintrmicafugadegasFlamaAzul_15.set('fieldLabels', {});
lyr_SUSCEPTIBILIDADPolvorines_16.set('fieldLabels', {});
lyr_SUSCEPTIBILIDADRosticeras_17.set('fieldLabels', {});
lyr_SUSCEPTIBILIDADTanquesdegasdemercados_18.set('fieldLabels', {});
lyr_SUSCEPTIBILIDADTortilleras_19.set('fieldLabels', {});
lyr_HISTORICOS2021Incendiovehicular_20.set('fieldLabels', {});
lyr_HISTRICOS2021Eventoelctrico_21.set('fieldLabels', {});
lyr_HISTRICOS2021Fugadegas_22.set('fieldLabels', {});
lyr_HISTRICOS2021Incendiocasahabitacin_23.set('fieldLabels', {});
lyr_HISTRICOS2020Eventoelctrico_24.set('fieldLabels', {});
lyr_HISTRICOS2020Fugadeamoniaco_25.set('fieldLabels', {});
lyr_HISTRICOS2020Fugadegas_26.set('fieldLabels', {});
lyr_HISTRICOS2020Incendio_27.set('fieldLabels', {});
lyr_HISTRICOS2020Incendioforestal_28.set('fieldLabels', {});
lyr_HISTRICOS2020Incendiopastizal_29.set('fieldLabels', {});
lyr_HISTRICOS2020Incendios_30.set('fieldLabels', {});
lyr_HISTRICOS2020Quemadebasura_31.set('fieldLabels', {});
lyr_HISTRICOS2019Fugadegas2018_32.set('fieldLabels', {});
lyr_HISTRICOS2019Incendiocarrizal2019_33.set('fieldLabels', {});
lyr_HISTRICOS2019IncendioCasaHabitacin2019_34.set('fieldLabels', {});
lyr_HISTRICOS2018Fugadegas2018_35.set('fieldLabels', {});
lyr_HISTRICOS2018Incenciopastizal2018_36.set('fieldLabels', {});
lyr_HISTRICOS2017Explosiones2017_37.set('fieldLabels', {});
lyr_ESCENARIOSROSALADOEstimacindedesbordamiento_38.set('fieldLabels', {});
lyr_MAPASDERIESGOSEspaciocuencasriesgobajo_39.set('fieldLabels', {});
lyr_MAPASDERIESGOSEspaciocuencasriesgomedio_40.set('fieldLabels', {});
lyr_MAPASDERIESGOSEspaciocuencasriesgoalto_41.set('fieldLabels', {});
lyr_HISTRICOS2021Afectacionesporlluvia2021_42.set('fieldLabels', {});
lyr_HISTRICOS2020Granizo2020_43.set('fieldLabels', {});
lyr_HISTRICOS2018Afectacionesportormenta2018_44.set('fieldLabels', {});
lyr_HISTRICOElhistrico_45.set('fieldLabels', {});
lyr_PELIGROSDeslizamientoladerasCONABIO_46.set('fieldLabels', {});
lyr_SUSCEPTIBILIDADErosinzonahjo_47.set('fieldLabels', {});
lyr_MAPASDERIESGOZonanoaptaparahabitar_48.set('fieldLabels', {});
lyr_HISTRICOSHundimientos_49.set('fieldLabels', {});
lyr_HISTRICOSHuajuapansismo20172019_50.set('fieldLabels', {});
lyr_HDRICAHidrolneas_51.set('fieldLabels', {});
lyr_INFORMACINCOMPLEMENTARIACalles_52.set('fieldLabels', {});
lyr_INFORMACINCOMPLEMENTARIAFrentedemanzana_53.set('fieldLabels', {});
lyr_INFORMACINCOMPLEMENTARIADivisinterritorial2020_54.set('fieldLabels', {});
lyr_INFORMACINCOMPLEMENTARIADivisinterritorial2020_54.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});