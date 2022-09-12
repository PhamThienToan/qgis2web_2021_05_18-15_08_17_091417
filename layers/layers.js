var wms_layers = [];


        var lyr_GoogleTerrainHybrid_0 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_LuuvucsongchinhTraBong_so_WS84_1 = new ol.format.GeoJSON();
var features_LuuvucsongchinhTraBong_so_WS84_1 = format_LuuvucsongchinhTraBong_so_WS84_1.readFeatures(json_LuuvucsongchinhTraBong_so_WS84_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LuuvucsongchinhTraBong_so_WS84_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LuuvucsongchinhTraBong_so_WS84_1.addFeatures(features_LuuvucsongchinhTraBong_so_WS84_1);
var lyr_LuuvucsongchinhTraBong_so_WS84_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LuuvucsongchinhTraBong_so_WS84_1, 
                style: style_LuuvucsongchinhTraBong_so_WS84_1,
                interactive: true,
                title: '<img src="styles/legend/LuuvucsongchinhTraBong_so_WS84_1.png" /> Luu vuc song chinh Tra Bong_so_WS84'
            });
var format_Luuvucsongharoi_2 = new ol.format.GeoJSON();
var features_Luuvucsongharoi_2 = format_Luuvucsongharoi_2.readFeatures(json_Luuvucsongharoi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Luuvucsongharoi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Luuvucsongharoi_2.addFeatures(features_Luuvucsongharoi_2);
var lyr_Luuvucsongharoi_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Luuvucsongharoi_2, 
                style: style_Luuvucsongharoi_2,
                interactive: true,
                title: '<img src="styles/legend/Luuvucsongharoi_2.png" /> Luuvucsongharoi'
            });
var format_LuuvucsongSau_3 = new ol.format.GeoJSON();
var features_LuuvucsongSau_3 = format_LuuvucsongSau_3.readFeatures(json_LuuvucsongSau_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LuuvucsongSau_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LuuvucsongSau_3.addFeatures(features_LuuvucsongSau_3);
var lyr_LuuvucsongSau_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LuuvucsongSau_3, 
                style: style_LuuvucsongSau_3,
                interactive: true,
                title: '<img src="styles/legend/LuuvucsongSau_3.png" /> LuuvucsongSau'
            });
var format_Luuvucsongtraboi_4 = new ol.format.GeoJSON();
var features_Luuvucsongtraboi_4 = format_Luuvucsongtraboi_4.readFeatures(json_Luuvucsongtraboi_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Luuvucsongtraboi_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Luuvucsongtraboi_4.addFeatures(features_Luuvucsongtraboi_4);
var lyr_Luuvucsongtraboi_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Luuvucsongtraboi_4, 
                style: style_Luuvucsongtraboi_4,
                interactive: true,
                title: '<img src="styles/legend/Luuvucsongtraboi_4.png" /> Luuvucsongtraboi'
            });
var format_Luuvucsongosong1_5 = new ol.format.GeoJSON();
var features_Luuvucsongosong1_5 = format_Luuvucsongosong1_5.readFeatures(json_Luuvucsongosong1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Luuvucsongosong1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Luuvucsongosong1_5.addFeatures(features_Luuvucsongosong1_5);
var lyr_Luuvucsongosong1_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Luuvucsongosong1_5, 
                style: style_Luuvucsongosong1_5,
                interactive: true,
                title: '<img src="styles/legend/Luuvucsongosong1_5.png" /> Luuvucsongosong1'
            });
var format_Diemnhiemman_6 = new ol.format.GeoJSON();
var features_Diemnhiemman_6 = format_Diemnhiemman_6.readFeatures(json_Diemnhiemman_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Diemnhiemman_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Diemnhiemman_6.addFeatures(features_Diemnhiemman_6);
var lyr_Diemnhiemman_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Diemnhiemman_6, 
                style: style_Diemnhiemman_6,
                interactive: true,
                title: '<img src="styles/legend/Diemnhiemman_6.png" /> Diemnhiemman'
            });
var format_Songcap1_trabong_7 = new ol.format.GeoJSON();
var features_Songcap1_trabong_7 = format_Songcap1_trabong_7.readFeatures(json_Songcap1_trabong_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Songcap1_trabong_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Songcap1_trabong_7.addFeatures(features_Songcap1_trabong_7);
var lyr_Songcap1_trabong_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Songcap1_trabong_7, 
                style: style_Songcap1_trabong_7,
                interactive: true,
                title: '<img src="styles/legend/Songcap1_trabong_7.png" /> Songcap1_trabong'
            });
var format_Vn_huyen_QN_8 = new ol.format.GeoJSON();
var features_Vn_huyen_QN_8 = format_Vn_huyen_QN_8.readFeatures(json_Vn_huyen_QN_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vn_huyen_QN_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vn_huyen_QN_8.addFeatures(features_Vn_huyen_QN_8);
var lyr_Vn_huyen_QN_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vn_huyen_QN_8, 
                style: style_Vn_huyen_QN_8,
                interactive: true,
                title: '<img src="styles/legend/Vn_huyen_QN_8.png" /> Vn_huyen_QN'
            });
var format_Chialuuvuc_9 = new ol.format.GeoJSON();
var features_Chialuuvuc_9 = format_Chialuuvuc_9.readFeatures(json_Chialuuvuc_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Chialuuvuc_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chialuuvuc_9.addFeatures(features_Chialuuvuc_9);
var lyr_Chialuuvuc_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Chialuuvuc_9, 
                style: style_Chialuuvuc_9,
                interactive: true,
                title: '<img src="styles/legend/Chialuuvuc_9.png" /> Chialuuvuc'
            });
var format_VN_XA_10 = new ol.format.GeoJSON();
var features_VN_XA_10 = format_VN_XA_10.readFeatures(json_VN_XA_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VN_XA_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VN_XA_10.addFeatures(features_VN_XA_10);
var lyr_VN_XA_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VN_XA_10, 
                style: style_VN_XA_10,
                interactive: true,
                title: '<img src="styles/legend/VN_XA_10.png" /> VN_XA'
            });
var format_Luuvucsongbindan_11 = new ol.format.GeoJSON();
var features_Luuvucsongbindan_11 = format_Luuvucsongbindan_11.readFeatures(json_Luuvucsongbindan_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Luuvucsongbindan_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Luuvucsongbindan_11.addFeatures(features_Luuvucsongbindan_11);
var lyr_Luuvucsongbindan_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Luuvucsongbindan_11, 
                style: style_Luuvucsongbindan_11,
                interactive: true,
                title: '<img src="styles/legend/Luuvucsongbindan_11.png" /> Luuvucsongbindan'
            });
var format_Diemkhaithachoaphat_12 = new ol.format.GeoJSON();
var features_Diemkhaithachoaphat_12 = format_Diemkhaithachoaphat_12.readFeatures(json_Diemkhaithachoaphat_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Diemkhaithachoaphat_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Diemkhaithachoaphat_12.addFeatures(features_Diemkhaithachoaphat_12);
var lyr_Diemkhaithachoaphat_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Diemkhaithachoaphat_12, 
                style: style_Diemkhaithachoaphat_12,
                interactive: true,
                title: '<img src="styles/legend/Diemkhaithachoaphat_12.png" /> Diemkhaithachoaphat'
            });

lyr_GoogleTerrainHybrid_0.setVisible(true);lyr_LuuvucsongchinhTraBong_so_WS84_1.setVisible(true);lyr_Luuvucsongharoi_2.setVisible(true);lyr_LuuvucsongSau_3.setVisible(true);lyr_Luuvucsongtraboi_4.setVisible(true);lyr_Luuvucsongosong1_5.setVisible(true);lyr_Diemnhiemman_6.setVisible(true);lyr_Songcap1_trabong_7.setVisible(true);lyr_Vn_huyen_QN_8.setVisible(true);lyr_Chialuuvuc_9.setVisible(true);lyr_VN_XA_10.setVisible(true);lyr_Luuvucsongbindan_11.setVisible(true);lyr_Diemkhaithachoaphat_12.setVisible(true);
var layersList = [lyr_GoogleTerrainHybrid_0,lyr_LuuvucsongchinhTraBong_so_WS84_1,lyr_Luuvucsongharoi_2,lyr_LuuvucsongSau_3,lyr_Luuvucsongtraboi_4,lyr_Luuvucsongosong1_5,lyr_Diemnhiemman_6,lyr_Songcap1_trabong_7,lyr_Vn_huyen_QN_8,lyr_Chialuuvuc_9,lyr_VN_XA_10,lyr_Luuvucsongbindan_11,lyr_Diemkhaithachoaphat_12];
lyr_LuuvucsongchinhTraBong_so_WS84_1.set('fieldAliases', {'ID': 'ID', });
lyr_Luuvucsongharoi_2.set('fieldAliases', {'LAYER': 'LAYER', 'ELEVATION': 'ELEVATION', 'TRACE_FLOW': 'TRACE_FLOW', 'STT': 'STT', 'Tensong': 'Tensong', 'Tensongkha': 'Tensongkha', 'Chieudai': 'Chieudai', 'Xa': 'Xa', 'Huyen': 'Huyen', 'Tinh': 'Tinh', 'Vung_Dia_L': 'Vung_Dia_L', 'GhiChu': 'GhiChu', 'MIN_ELEV_M': 'MIN_ELEV_M', 'MAX_ELEV_M': 'MAX_ELEV_M', 'MAX_ELEV_X': 'MAX_ELEV_X', 'MAX_ELEV_Y': 'MAX_ELEV_Y', 'AVG_ELEV_M': 'AVG_ELEV_M', 'MODE_ELE_M': 'MODE_ELE_M', 'STD_DEV__M': 'STD_DEV__M', 'MAX_SLOPE_': 'MAX_SLOPE_', 'MAX_SLOPE1': 'MAX_SLOPE1', 'AVG_SLOPE_': 'AVG_SLOPE_', 'AVG_SLOPE1': 'AVG_SLOPE1', 'SURFACE_AR': 'SURFACE_AR', 'STD_DEV_SL': 'STD_DEV_SL', 'STD_DEV_S1': 'STD_DEV_S1', 'SLOPE_1QUA': 'SLOPE_1QUA', 'SLOPE_1QU1': 'SLOPE_1QU1', 'SLOPE_MEDI': 'SLOPE_MEDI', 'SLOPE_MED1': 'SLOPE_MED1', 'SLOPE_3QUA': 'SLOPE_3QUA', 'SLOPE_3QU1': 'SLOPE_3QU1', 'AVG_ASPECT': 'AVG_ASPECT', });
lyr_LuuvucsongSau_3.set('fieldAliases', {'LAYER': 'LAYER', 'ELEVATION': 'ELEVATION', 'TRACE_FLOW': 'TRACE_FLOW', 'STT': 'STT', 'Tensong': 'Tensong', 'Tensongkha': 'Tensongkha', 'Chieudai': 'Chieudai', 'Xa': 'Xa', 'Huyen': 'Huyen', 'Tinh': 'Tinh', 'Vung_Dia_L': 'Vung_Dia_L', 'GhiChu': 'GhiChu', 'MIN_ELEV_M': 'MIN_ELEV_M', 'MAX_ELEV_M': 'MAX_ELEV_M', 'MAX_ELEV_X': 'MAX_ELEV_X', 'MAX_ELEV_Y': 'MAX_ELEV_Y', 'AVG_ELEV_M': 'AVG_ELEV_M', 'MODE_ELE_M': 'MODE_ELE_M', 'STD_DEV__M': 'STD_DEV__M', 'MAX_SLOPE_': 'MAX_SLOPE_', 'MAX_SLOPE1': 'MAX_SLOPE1', 'AVG_SLOPE_': 'AVG_SLOPE_', 'AVG_SLOPE1': 'AVG_SLOPE1', 'SURFACE_AR': 'SURFACE_AR', 'STD_DEV_SL': 'STD_DEV_SL', 'STD_DEV_S1': 'STD_DEV_S1', 'SLOPE_1QUA': 'SLOPE_1QUA', 'SLOPE_1QU1': 'SLOPE_1QU1', 'SLOPE_MEDI': 'SLOPE_MEDI', 'SLOPE_MED1': 'SLOPE_MED1', 'SLOPE_3QUA': 'SLOPE_3QUA', 'SLOPE_3QU1': 'SLOPE_3QU1', 'AVG_ASPECT': 'AVG_ASPECT', });
lyr_Luuvucsongtraboi_4.set('fieldAliases', {'LAYER': 'LAYER', 'ELEVATION': 'ELEVATION', 'TRACE_FLOW': 'TRACE_FLOW', 'STT': 'STT', 'Tensong': 'Tensong', 'Tensongkha': 'Tensongkha', 'Chieudai': 'Chieudai', 'Xa': 'Xa', 'Huyen': 'Huyen', 'Tinh': 'Tinh', 'Vung_Dia_L': 'Vung_Dia_L', 'GhiChu': 'GhiChu', 'MIN_ELEV_M': 'MIN_ELEV_M', 'MAX_ELEV_M': 'MAX_ELEV_M', 'MAX_ELEV_X': 'MAX_ELEV_X', 'MAX_ELEV_Y': 'MAX_ELEV_Y', 'AVG_ELEV_M': 'AVG_ELEV_M', 'MODE_ELE_M': 'MODE_ELE_M', 'STD_DEV__M': 'STD_DEV__M', 'MAX_SLOPE_': 'MAX_SLOPE_', 'MAX_SLOPE1': 'MAX_SLOPE1', 'AVG_SLOPE_': 'AVG_SLOPE_', 'AVG_SLOPE1': 'AVG_SLOPE1', 'SURFACE_AR': 'SURFACE_AR', 'STD_DEV_SL': 'STD_DEV_SL', 'STD_DEV_S1': 'STD_DEV_S1', 'SLOPE_1QUA': 'SLOPE_1QUA', 'SLOPE_1QU1': 'SLOPE_1QU1', 'SLOPE_MEDI': 'SLOPE_MEDI', 'SLOPE_MED1': 'SLOPE_MED1', 'SLOPE_3QUA': 'SLOPE_3QUA', 'SLOPE_3QU1': 'SLOPE_3QU1', 'AVG_ASPECT': 'AVG_ASPECT', });
lyr_Luuvucsongosong1_5.set('fieldAliases', {'LAYER': 'LAYER', 'ELEVATION': 'ELEVATION', 'TRACE_FLOW': 'TRACE_FLOW', 'STT': 'STT', 'Tensong': 'Tensong', 'Tensongkha': 'Tensongkha', 'Chieudai': 'Chieudai', 'Xa': 'Xa', 'Huyen': 'Huyen', 'Tinh': 'Tinh', 'Vung_Dia_L': 'Vung_Dia_L', 'GhiChu': 'GhiChu', 'MIN_ELEV_M': 'MIN_ELEV_M', 'MAX_ELEV_M': 'MAX_ELEV_M', 'MAX_ELEV_X': 'MAX_ELEV_X', 'MAX_ELEV_Y': 'MAX_ELEV_Y', 'AVG_ELEV_M': 'AVG_ELEV_M', 'MODE_ELE_M': 'MODE_ELE_M', 'STD_DEV__M': 'STD_DEV__M', 'MAX_SLOPE_': 'MAX_SLOPE_', 'MAX_SLOPE1': 'MAX_SLOPE1', 'AVG_SLOPE_': 'AVG_SLOPE_', 'AVG_SLOPE1': 'AVG_SLOPE1', 'SURFACE_AR': 'SURFACE_AR', 'STD_DEV_SL': 'STD_DEV_SL', 'STD_DEV_S1': 'STD_DEV_S1', 'SLOPE_1QUA': 'SLOPE_1QUA', 'SLOPE_1QU1': 'SLOPE_1QU1', 'SLOPE_MEDI': 'SLOPE_MEDI', 'SLOPE_MED1': 'SLOPE_MED1', 'SLOPE_3QUA': 'SLOPE_3QUA', 'SLOPE_3QU1': 'SLOPE_3QU1', 'AVG_ASPECT': 'AVG_ASPECT', });
lyr_Diemnhiemman_6.set('fieldAliases', {'id': 'id', 'Độ mặ': 'Độ mặ', });
lyr_Songcap1_trabong_7.set('fieldAliases', {'STT': 'STT', 'Tensong': 'Tensong', 'Tensongkhac': 'Tensongkhac', 'Chieudai': 'Chieudai', 'Xa': 'Xa', 'Huyen': 'Huyen', 'Tinh': 'Tinh', 'Vung_Dia_Ly': 'Vung_Dia_Ly', 'GhiChu': 'GhiChu', });
lyr_Vn_huyen_QN_8.set('fieldAliases', {'Huyen': 'Huyen', 'Ma_Huyen': 'Ma_Huyen', 'Tinh': 'Tinh', 'Dientich': 'Dientich', 'Danso': 'Danso', 'Ho_NN': 'Ho_NN', 'Ho_LN': 'Ho_LN', 'Ho_TS': 'Ho_TS', 'HoCN_TCN': 'HoCN_TCN', 'Ho_XD': 'Ho_XD', 'Ho_TgN': 'Ho_TgN', 'Ho_DV': 'Ho_DV', 'Ho_Khac': 'Ho_Khac', 'Cokhanang_LD': 'Cokhanang_LD', 'KCokhanang_LD': 'KCokhanang_LD', 'Soxa': 'Soxa', 'Soxa_codien': 'Soxa_codien', 'soxaco_TTthanh': 'soxaco_TTthanh', 'soxaco_TBThe': 'soxaco_TBThe', 'Soxaco_Tbom': 'Soxaco_Tbom', 'soxaco_TCI': 'soxaco_TCI', 'soxaco_TCII': 'soxaco_TCII', 'soxaco_MauGiao': 'soxaco_MauGiao', 'soxaco_Nhatre': 'soxaco_Nhatre', 'SHo_dungdien': 'SHo_dungdien', 'SHo_dungnuoc': 'SHo_dungnuoc', 'SHo_dungnuocgieng': 'SHo_dungnuocgieng', 'Dat_thocu': 'Dat_thocu', 'Dat_Nongnghiep': 'Dat_Nongnghiep', 'Dat_Lamnghiep': 'Dat_Lamnghiep', 'DT_MNnu_itrongTSan': 'DT_MNnu_itrongTSan', 'Dat_NLNdagiaochuasudung': 'Dat_NLNdagiaochuasudung', 'DT_Kinh': 'DT_Kinh', 'DT_Hoa': 'DT_Hoa', 'DT_Dao': 'DT_Dao', 'DT_Mong': 'DT_Mong', 'DT_Tay': 'DT_Tay', 'DT_Nung': 'DT_Nung', 'DT_Thai': 'DT_Thai', 'DT_HaNhi': 'DT_HaNhi', 'DT_SanChay': 'DT_SanChay', 'DT_Muong': 'DT_Muong', 'DT_SanDiu': 'DT_SanDiu', 'DT_Khac': 'DT_Khac', 'DT_LaHu': 'DT_LaHu', 'DT_Giay': 'DT_Giay', 'DT_Hmong': 'DT_Hmong', 'DT_Tho': 'DT_Tho', 'DT_KhoMu': 'DT_KhoMu', 'DT_Bru': 'DT_Bru', 'DT_Chut': 'DT_Chut', 'DT_TaOi': 'DT_TaOi', 'DT_CaTu': 'DT_CaTu', 'DT_GieTrieng': 'DT_GieTrieng', 'DT_Mnong': 'DT_Mnong', 'DT_XeDang': 'DT_XeDang', 'DT_Hre': 'DT_Hre', 'DT_Co': 'DT_Co', 'DT_BaNa': 'DT_BaNa', 'DT_GiaRai': 'DT_GiaRai', 'DT_Cham': 'DT_Cham', 'DT_EDe': 'DT_EDe', 'DT_RaGlai': 'DT_RaGlai', 'DT_CoHo': 'DT_CoHo', 'DT_ChuRu': 'DT_ChuRu', 'DT_Ma': 'DT_Ma', 'DT_khoMe': 'DT_khoMe', 'DT_Xtieng': 'DT_Xtieng', 'DT_ItNguoi': 'DT_ItNguoi', 'TS_DToc': 'TS_DToc', });
lyr_Chialuuvuc_9.set('fieldAliases', {'id': 'id', });
lyr_VN_XA_10.set('fieldAliases', {'Xa': 'Xa', 'Code_communes': 'Code_communes', 'Huyen': 'Huyen', 'Tinh': 'Tinh', 'CapHC': 'CapHC', 'Danso': 'Danso', 'Dientich': 'Dientich', 'Code_pro_citi': 'Code_pro_citi', 'Code_urban': 'Code_urban', });
lyr_Luuvucsongbindan_11.set('fieldAliases', {'LAYER': 'LAYER', 'ELEVATION': 'ELEVATION', 'TRACE_FLOW': 'TRACE_FLOW', 'STT': 'STT', 'Tensong': 'Tensong', 'Tensongkha': 'Tensongkha', 'Chieudai': 'Chieudai', 'Xa': 'Xa', 'Huyen': 'Huyen', 'Tinh': 'Tinh', 'Vung_Dia_L': 'Vung_Dia_L', 'GhiChu': 'GhiChu', 'MIN_ELEV_M': 'MIN_ELEV_M', 'MAX_ELEV_M': 'MAX_ELEV_M', 'MAX_ELEV_X': 'MAX_ELEV_X', 'MAX_ELEV_Y': 'MAX_ELEV_Y', 'AVG_ELEV_M': 'AVG_ELEV_M', 'MODE_ELE_M': 'MODE_ELE_M', 'STD_DEV__M': 'STD_DEV__M', 'MAX_SLOPE_': 'MAX_SLOPE_', 'MAX_SLOPE1': 'MAX_SLOPE1', 'AVG_SLOPE_': 'AVG_SLOPE_', 'AVG_SLOPE1': 'AVG_SLOPE1', 'SURFACE_AR': 'SURFACE_AR', 'STD_DEV_SL': 'STD_DEV_SL', 'STD_DEV_S1': 'STD_DEV_S1', 'SLOPE_1QUA': 'SLOPE_1QUA', 'SLOPE_1QU1': 'SLOPE_1QU1', 'SLOPE_MEDI': 'SLOPE_MEDI', 'SLOPE_MED1': 'SLOPE_MED1', 'SLOPE_3QUA': 'SLOPE_3QUA', 'SLOPE_3QU1': 'SLOPE_3QU1', 'AVG_ASPECT': 'AVG_ASPECT', });
lyr_Diemkhaithachoaphat_12.set('fieldAliases', {'ID': 'ID', 'Ten': 'Ten', 'X': 'X', 'Y': 'Y', 'Ghicuu': 'Ghicuu', });
lyr_LuuvucsongchinhTraBong_so_WS84_1.set('fieldImages', {'ID': 'Range', });
lyr_Luuvucsongharoi_2.set('fieldImages', {'LAYER': 'TextEdit', 'ELEVATION': 'Range', 'TRACE_FLOW': 'TextEdit', 'STT': 'Range', 'Tensong': 'TextEdit', 'Tensongkha': 'TextEdit', 'Chieudai': 'TextEdit', 'Xa': 'TextEdit', 'Huyen': 'TextEdit', 'Tinh': 'TextEdit', 'Vung_Dia_L': 'TextEdit', 'GhiChu': 'Range', 'MIN_ELEV_M': 'Range', 'MAX_ELEV_M': 'Range', 'MAX_ELEV_X': 'TextEdit', 'MAX_ELEV_Y': 'TextEdit', 'AVG_ELEV_M': 'TextEdit', 'MODE_ELE_M': 'TextEdit', 'STD_DEV__M': 'TextEdit', 'MAX_SLOPE_': 'TextEdit', 'MAX_SLOPE1': 'TextEdit', 'AVG_SLOPE_': 'TextEdit', 'AVG_SLOPE1': 'TextEdit', 'SURFACE_AR': 'TextEdit', 'STD_DEV_SL': 'TextEdit', 'STD_DEV_S1': 'TextEdit', 'SLOPE_1QUA': 'TextEdit', 'SLOPE_1QU1': 'TextEdit', 'SLOPE_MEDI': 'TextEdit', 'SLOPE_MED1': 'TextEdit', 'SLOPE_3QUA': 'TextEdit', 'SLOPE_3QU1': 'TextEdit', 'AVG_ASPECT': 'TextEdit', });
lyr_LuuvucsongSau_3.set('fieldImages', {'LAYER': 'TextEdit', 'ELEVATION': 'Range', 'TRACE_FLOW': 'TextEdit', 'STT': 'Range', 'Tensong': 'TextEdit', 'Tensongkha': 'TextEdit', 'Chieudai': 'TextEdit', 'Xa': 'TextEdit', 'Huyen': 'TextEdit', 'Tinh': 'TextEdit', 'Vung_Dia_L': 'TextEdit', 'GhiChu': 'Range', 'MIN_ELEV_M': 'Range', 'MAX_ELEV_M': 'Range', 'MAX_ELEV_X': 'TextEdit', 'MAX_ELEV_Y': 'TextEdit', 'AVG_ELEV_M': 'TextEdit', 'MODE_ELE_M': 'Range', 'STD_DEV__M': 'TextEdit', 'MAX_SLOPE_': 'TextEdit', 'MAX_SLOPE1': 'TextEdit', 'AVG_SLOPE_': 'TextEdit', 'AVG_SLOPE1': 'TextEdit', 'SURFACE_AR': 'TextEdit', 'STD_DEV_SL': 'TextEdit', 'STD_DEV_S1': 'TextEdit', 'SLOPE_1QUA': 'TextEdit', 'SLOPE_1QU1': 'TextEdit', 'SLOPE_MEDI': 'TextEdit', 'SLOPE_MED1': 'TextEdit', 'SLOPE_3QUA': 'TextEdit', 'SLOPE_3QU1': 'TextEdit', 'AVG_ASPECT': 'TextEdit', });
lyr_Luuvucsongtraboi_4.set('fieldImages', {'LAYER': 'TextEdit', 'ELEVATION': 'Range', 'TRACE_FLOW': 'TextEdit', 'STT': 'Range', 'Tensong': 'TextEdit', 'Tensongkha': 'TextEdit', 'Chieudai': 'TextEdit', 'Xa': 'TextEdit', 'Huyen': 'TextEdit', 'Tinh': 'TextEdit', 'Vung_Dia_L': 'TextEdit', 'GhiChu': 'Range', 'MIN_ELEV_M': 'Range', 'MAX_ELEV_M': 'Range', 'MAX_ELEV_X': 'TextEdit', 'MAX_ELEV_Y': 'TextEdit', 'AVG_ELEV_M': 'TextEdit', 'MODE_ELE_M': 'TextEdit', 'STD_DEV__M': 'TextEdit', 'MAX_SLOPE_': 'TextEdit', 'MAX_SLOPE1': 'TextEdit', 'AVG_SLOPE_': 'TextEdit', 'AVG_SLOPE1': 'TextEdit', 'SURFACE_AR': 'TextEdit', 'STD_DEV_SL': 'TextEdit', 'STD_DEV_S1': 'TextEdit', 'SLOPE_1QUA': 'TextEdit', 'SLOPE_1QU1': 'TextEdit', 'SLOPE_MEDI': 'TextEdit', 'SLOPE_MED1': 'TextEdit', 'SLOPE_3QUA': 'TextEdit', 'SLOPE_3QU1': 'TextEdit', 'AVG_ASPECT': 'TextEdit', });
lyr_Luuvucsongosong1_5.set('fieldImages', {'LAYER': 'TextEdit', 'ELEVATION': 'Range', 'TRACE_FLOW': 'TextEdit', 'STT': 'Range', 'Tensong': 'TextEdit', 'Tensongkha': 'TextEdit', 'Chieudai': 'TextEdit', 'Xa': 'TextEdit', 'Huyen': 'TextEdit', 'Tinh': 'TextEdit', 'Vung_Dia_L': 'TextEdit', 'GhiChu': 'Range', 'MIN_ELEV_M': 'Range', 'MAX_ELEV_M': 'Range', 'MAX_ELEV_X': 'TextEdit', 'MAX_ELEV_Y': 'TextEdit', 'AVG_ELEV_M': 'TextEdit', 'MODE_ELE_M': 'Range', 'STD_DEV__M': 'TextEdit', 'MAX_SLOPE_': 'TextEdit', 'MAX_SLOPE1': 'TextEdit', 'AVG_SLOPE_': 'TextEdit', 'AVG_SLOPE1': 'TextEdit', 'SURFACE_AR': 'TextEdit', 'STD_DEV_SL': 'TextEdit', 'STD_DEV_S1': 'TextEdit', 'SLOPE_1QUA': 'TextEdit', 'SLOPE_1QU1': 'TextEdit', 'SLOPE_MEDI': 'TextEdit', 'SLOPE_MED1': 'TextEdit', 'SLOPE_3QUA': 'TextEdit', 'SLOPE_3QU1': 'TextEdit', 'AVG_ASPECT': 'TextEdit', });
lyr_Diemnhiemman_6.set('fieldImages', {'id': 'TextEdit', 'Độ mặ': 'TextEdit', });
lyr_Songcap1_trabong_7.set('fieldImages', {'STT': 'Range', 'Tensong': 'TextEdit', 'Tensongkhac': 'TextEdit', 'Chieudai': 'TextEdit', 'Xa': 'TextEdit', 'Huyen': 'TextEdit', 'Tinh': 'TextEdit', 'Vung_Dia_Ly': 'TextEdit', 'GhiChu': 'TextEdit', });
lyr_Vn_huyen_QN_8.set('fieldImages', {'Huyen': 'TextEdit', 'Ma_Huyen': 'Range', 'Tinh': 'TextEdit', 'Dientich': 'TextEdit', 'Danso': 'Range', 'Ho_NN': 'Range', 'Ho_LN': 'Range', 'Ho_TS': 'Range', 'HoCN_TCN': 'Range', 'Ho_XD': 'Range', 'Ho_TgN': 'Range', 'Ho_DV': 'Range', 'Ho_Khac': 'Range', 'Cokhanang_LD': 'Range', 'KCokhanang_LD': 'Range', 'Soxa': 'Range', 'Soxa_codien': 'Range', 'soxaco_TTthanh': 'Range', 'soxaco_TBThe': 'Range', 'Soxaco_Tbom': 'Range', 'soxaco_TCI': 'Range', 'soxaco_TCII': 'Range', 'soxaco_MauGiao': 'Range', 'soxaco_Nhatre': 'Range', 'SHo_dungdien': 'Range', 'SHo_dungnuoc': 'Range', 'SHo_dungnuocgieng': 'Range', 'Dat_thocu': 'Range', 'Dat_Nongnghiep': 'Range', 'Dat_Lamnghiep': 'Range', 'DT_MNnu_itrongTSan': 'Range', 'Dat_NLNdagiaochuasudung': 'Range', 'DT_Kinh': 'Range', 'DT_Hoa': 'Range', 'DT_Dao': 'Range', 'DT_Mong': 'Range', 'DT_Tay': 'Range', 'DT_Nung': 'Range', 'DT_Thai': 'Range', 'DT_HaNhi': 'Range', 'DT_SanChay': 'Range', 'DT_Muong': 'Range', 'DT_SanDiu': 'Range', 'DT_Khac': 'Range', 'DT_LaHu': 'Range', 'DT_Giay': 'Range', 'DT_Hmong': 'Range', 'DT_Tho': 'Range', 'DT_KhoMu': 'Range', 'DT_Bru': 'Range', 'DT_Chut': 'Range', 'DT_TaOi': 'Range', 'DT_CaTu': 'Range', 'DT_GieTrieng': 'Range', 'DT_Mnong': 'Range', 'DT_XeDang': 'Range', 'DT_Hre': 'Range', 'DT_Co': 'Range', 'DT_BaNa': 'Range', 'DT_GiaRai': 'Range', 'DT_Cham': 'Range', 'DT_EDe': 'Range', 'DT_RaGlai': 'Range', 'DT_CoHo': 'Range', 'DT_ChuRu': 'Range', 'DT_Ma': 'Range', 'DT_khoMe': 'Range', 'DT_Xtieng': 'Range', 'DT_ItNguoi': 'Range', 'TS_DToc': 'Range', });
lyr_Chialuuvuc_9.set('fieldImages', {'id': 'TextEdit', });
lyr_VN_XA_10.set('fieldImages', {'Xa': 'TextEdit', 'Code_communes': 'Range', 'Huyen': 'TextEdit', 'Tinh': 'TextEdit', 'CapHC': 'TextEdit', 'Danso': 'Range', 'Dientich': 'TextEdit', 'Code_pro_citi': 'Range', 'Code_urban': 'Range', });
lyr_Luuvucsongbindan_11.set('fieldImages', {'LAYER': 'TextEdit', 'ELEVATION': 'Range', 'TRACE_FLOW': 'TextEdit', 'STT': 'Range', 'Tensong': 'TextEdit', 'Tensongkha': 'TextEdit', 'Chieudai': 'TextEdit', 'Xa': 'TextEdit', 'Huyen': 'TextEdit', 'Tinh': 'TextEdit', 'Vung_Dia_L': 'TextEdit', 'GhiChu': 'Range', 'MIN_ELEV_M': 'Range', 'MAX_ELEV_M': 'Range', 'MAX_ELEV_X': 'TextEdit', 'MAX_ELEV_Y': 'TextEdit', 'AVG_ELEV_M': 'TextEdit', 'MODE_ELE_M': 'Range', 'STD_DEV__M': 'TextEdit', 'MAX_SLOPE_': 'TextEdit', 'MAX_SLOPE1': 'TextEdit', 'AVG_SLOPE_': 'TextEdit', 'AVG_SLOPE1': 'TextEdit', 'SURFACE_AR': 'TextEdit', 'STD_DEV_SL': 'TextEdit', 'STD_DEV_S1': 'TextEdit', 'SLOPE_1QUA': 'TextEdit', 'SLOPE_1QU1': 'TextEdit', 'SLOPE_MEDI': 'TextEdit', 'SLOPE_MED1': 'TextEdit', 'SLOPE_3QUA': 'TextEdit', 'SLOPE_3QU1': 'TextEdit', 'AVG_ASPECT': 'TextEdit', });
lyr_Diemkhaithachoaphat_12.set('fieldImages', {'ID': 'Range', 'Ten': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Ghicuu': 'TextEdit', });
lyr_LuuvucsongchinhTraBong_so_WS84_1.set('fieldLabels', {'ID': 'no label', });
lyr_Luuvucsongharoi_2.set('fieldLabels', {'LAYER': 'no label', 'ELEVATION': 'no label', 'TRACE_FLOW': 'no label', 'STT': 'no label', 'Tensong': 'no label', 'Tensongkha': 'no label', 'Chieudai': 'no label', 'Xa': 'no label', 'Huyen': 'no label', 'Tinh': 'no label', 'Vung_Dia_L': 'no label', 'GhiChu': 'no label', 'MIN_ELEV_M': 'no label', 'MAX_ELEV_M': 'no label', 'MAX_ELEV_X': 'no label', 'MAX_ELEV_Y': 'no label', 'AVG_ELEV_M': 'no label', 'MODE_ELE_M': 'no label', 'STD_DEV__M': 'no label', 'MAX_SLOPE_': 'no label', 'MAX_SLOPE1': 'no label', 'AVG_SLOPE_': 'no label', 'AVG_SLOPE1': 'no label', 'SURFACE_AR': 'no label', 'STD_DEV_SL': 'no label', 'STD_DEV_S1': 'no label', 'SLOPE_1QUA': 'no label', 'SLOPE_1QU1': 'no label', 'SLOPE_MEDI': 'no label', 'SLOPE_MED1': 'no label', 'SLOPE_3QUA': 'no label', 'SLOPE_3QU1': 'no label', 'AVG_ASPECT': 'no label', });
lyr_LuuvucsongSau_3.set('fieldLabels', {'LAYER': 'no label', 'ELEVATION': 'no label', 'TRACE_FLOW': 'no label', 'STT': 'no label', 'Tensong': 'no label', 'Tensongkha': 'no label', 'Chieudai': 'no label', 'Xa': 'no label', 'Huyen': 'no label', 'Tinh': 'no label', 'Vung_Dia_L': 'no label', 'GhiChu': 'no label', 'MIN_ELEV_M': 'no label', 'MAX_ELEV_M': 'no label', 'MAX_ELEV_X': 'no label', 'MAX_ELEV_Y': 'no label', 'AVG_ELEV_M': 'no label', 'MODE_ELE_M': 'no label', 'STD_DEV__M': 'no label', 'MAX_SLOPE_': 'no label', 'MAX_SLOPE1': 'no label', 'AVG_SLOPE_': 'no label', 'AVG_SLOPE1': 'no label', 'SURFACE_AR': 'no label', 'STD_DEV_SL': 'no label', 'STD_DEV_S1': 'no label', 'SLOPE_1QUA': 'no label', 'SLOPE_1QU1': 'no label', 'SLOPE_MEDI': 'no label', 'SLOPE_MED1': 'no label', 'SLOPE_3QUA': 'no label', 'SLOPE_3QU1': 'no label', 'AVG_ASPECT': 'no label', });
lyr_Luuvucsongtraboi_4.set('fieldLabels', {'LAYER': 'no label', 'ELEVATION': 'no label', 'TRACE_FLOW': 'no label', 'STT': 'no label', 'Tensong': 'no label', 'Tensongkha': 'no label', 'Chieudai': 'no label', 'Xa': 'no label', 'Huyen': 'no label', 'Tinh': 'no label', 'Vung_Dia_L': 'no label', 'GhiChu': 'no label', 'MIN_ELEV_M': 'no label', 'MAX_ELEV_M': 'no label', 'MAX_ELEV_X': 'no label', 'MAX_ELEV_Y': 'no label', 'AVG_ELEV_M': 'no label', 'MODE_ELE_M': 'no label', 'STD_DEV__M': 'no label', 'MAX_SLOPE_': 'no label', 'MAX_SLOPE1': 'no label', 'AVG_SLOPE_': 'no label', 'AVG_SLOPE1': 'no label', 'SURFACE_AR': 'no label', 'STD_DEV_SL': 'no label', 'STD_DEV_S1': 'no label', 'SLOPE_1QUA': 'no label', 'SLOPE_1QU1': 'no label', 'SLOPE_MEDI': 'no label', 'SLOPE_MED1': 'no label', 'SLOPE_3QUA': 'no label', 'SLOPE_3QU1': 'no label', 'AVG_ASPECT': 'no label', });
lyr_Luuvucsongosong1_5.set('fieldLabels', {'LAYER': 'no label', 'ELEVATION': 'no label', 'TRACE_FLOW': 'no label', 'STT': 'no label', 'Tensong': 'no label', 'Tensongkha': 'no label', 'Chieudai': 'no label', 'Xa': 'no label', 'Huyen': 'no label', 'Tinh': 'no label', 'Vung_Dia_L': 'no label', 'GhiChu': 'no label', 'MIN_ELEV_M': 'no label', 'MAX_ELEV_M': 'no label', 'MAX_ELEV_X': 'no label', 'MAX_ELEV_Y': 'no label', 'AVG_ELEV_M': 'no label', 'MODE_ELE_M': 'no label', 'STD_DEV__M': 'no label', 'MAX_SLOPE_': 'no label', 'MAX_SLOPE1': 'no label', 'AVG_SLOPE_': 'no label', 'AVG_SLOPE1': 'no label', 'SURFACE_AR': 'no label', 'STD_DEV_SL': 'no label', 'STD_DEV_S1': 'no label', 'SLOPE_1QUA': 'no label', 'SLOPE_1QU1': 'no label', 'SLOPE_MEDI': 'no label', 'SLOPE_MED1': 'no label', 'SLOPE_3QUA': 'no label', 'SLOPE_3QU1': 'no label', 'AVG_ASPECT': 'no label', });
lyr_Diemnhiemman_6.set('fieldLabels', {'id': 'no label', 'Độ mặ': 'no label', });
lyr_Songcap1_trabong_7.set('fieldLabels', {'STT': 'no label', 'Tensong': 'no label', 'Tensongkhac': 'no label', 'Chieudai': 'no label', 'Xa': 'no label', 'Huyen': 'no label', 'Tinh': 'no label', 'Vung_Dia_Ly': 'no label', 'GhiChu': 'no label', });
lyr_Vn_huyen_QN_8.set('fieldLabels', {'Huyen': 'no label', 'Ma_Huyen': 'no label', 'Tinh': 'no label', 'Dientich': 'no label', 'Danso': 'no label', 'Ho_NN': 'no label', 'Ho_LN': 'no label', 'Ho_TS': 'no label', 'HoCN_TCN': 'no label', 'Ho_XD': 'no label', 'Ho_TgN': 'no label', 'Ho_DV': 'no label', 'Ho_Khac': 'no label', 'Cokhanang_LD': 'no label', 'KCokhanang_LD': 'no label', 'Soxa': 'no label', 'Soxa_codien': 'no label', 'soxaco_TTthanh': 'no label', 'soxaco_TBThe': 'no label', 'Soxaco_Tbom': 'no label', 'soxaco_TCI': 'no label', 'soxaco_TCII': 'no label', 'soxaco_MauGiao': 'no label', 'soxaco_Nhatre': 'no label', 'SHo_dungdien': 'no label', 'SHo_dungnuoc': 'no label', 'SHo_dungnuocgieng': 'no label', 'Dat_thocu': 'no label', 'Dat_Nongnghiep': 'no label', 'Dat_Lamnghiep': 'no label', 'DT_MNnu_itrongTSan': 'no label', 'Dat_NLNdagiaochuasudung': 'no label', 'DT_Kinh': 'no label', 'DT_Hoa': 'no label', 'DT_Dao': 'no label', 'DT_Mong': 'no label', 'DT_Tay': 'no label', 'DT_Nung': 'no label', 'DT_Thai': 'no label', 'DT_HaNhi': 'no label', 'DT_SanChay': 'no label', 'DT_Muong': 'no label', 'DT_SanDiu': 'no label', 'DT_Khac': 'no label', 'DT_LaHu': 'no label', 'DT_Giay': 'no label', 'DT_Hmong': 'no label', 'DT_Tho': 'no label', 'DT_KhoMu': 'no label', 'DT_Bru': 'no label', 'DT_Chut': 'no label', 'DT_TaOi': 'no label', 'DT_CaTu': 'no label', 'DT_GieTrieng': 'no label', 'DT_Mnong': 'no label', 'DT_XeDang': 'no label', 'DT_Hre': 'no label', 'DT_Co': 'no label', 'DT_BaNa': 'no label', 'DT_GiaRai': 'no label', 'DT_Cham': 'no label', 'DT_EDe': 'no label', 'DT_RaGlai': 'no label', 'DT_CoHo': 'no label', 'DT_ChuRu': 'no label', 'DT_Ma': 'no label', 'DT_khoMe': 'no label', 'DT_Xtieng': 'no label', 'DT_ItNguoi': 'no label', 'TS_DToc': 'no label', });
lyr_Chialuuvuc_9.set('fieldLabels', {'id': 'no label', });
lyr_VN_XA_10.set('fieldLabels', {'Xa': 'no label', 'Code_communes': 'no label', 'Huyen': 'no label', 'Tinh': 'no label', 'CapHC': 'no label', 'Danso': 'no label', 'Dientich': 'no label', 'Code_pro_citi': 'no label', 'Code_urban': 'no label', });
lyr_Luuvucsongbindan_11.set('fieldLabels', {'LAYER': 'no label', 'ELEVATION': 'no label', 'TRACE_FLOW': 'no label', 'STT': 'no label', 'Tensong': 'no label', 'Tensongkha': 'no label', 'Chieudai': 'no label', 'Xa': 'no label', 'Huyen': 'no label', 'Tinh': 'no label', 'Vung_Dia_L': 'no label', 'GhiChu': 'no label', 'MIN_ELEV_M': 'no label', 'MAX_ELEV_M': 'no label', 'MAX_ELEV_X': 'no label', 'MAX_ELEV_Y': 'no label', 'AVG_ELEV_M': 'no label', 'MODE_ELE_M': 'no label', 'STD_DEV__M': 'no label', 'MAX_SLOPE_': 'no label', 'MAX_SLOPE1': 'no label', 'AVG_SLOPE_': 'no label', 'AVG_SLOPE1': 'no label', 'SURFACE_AR': 'no label', 'STD_DEV_SL': 'no label', 'STD_DEV_S1': 'no label', 'SLOPE_1QUA': 'no label', 'SLOPE_1QU1': 'no label', 'SLOPE_MEDI': 'no label', 'SLOPE_MED1': 'no label', 'SLOPE_3QUA': 'no label', 'SLOPE_3QU1': 'no label', 'AVG_ASPECT': 'no label', });
lyr_Diemkhaithachoaphat_12.set('fieldLabels', {'ID': 'no label', 'Ten': 'no label', 'X': 'no label', 'Y': 'no label', 'Ghicuu': 'no label', });
lyr_Diemkhaithachoaphat_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});