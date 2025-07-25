const layerPanelConfig = [
    {
        name: "基础底图",
        children: [
            {
                url: 'https://[subdomain].tianditu.gov.cn/img_w/wmts',
                name: "TIANDITU",
                thumbnail: './images/baseMap/tianditu.png',
                type: 'TIANDITU',
                chooseType: false,
            },
            {
                url: './images/baseMap/baseImage.jpg', // 影像服务链接
                name: "LocalImage", // vue-i18n中国际化的名称
                thumbnail: './images/baseMap/locate.png', // 缩略图相对地址
                type: 'LocalImage', // 影像图层类型
                chooseType: false, // 面板中图片是否选中（默认false即可）
            },
            {
                name: "GRIDIMAGERY",
                thumbnail: './images/baseMap/grad.png',
                type: 'GRIDIMAGERY',
                chooseType: false,
            },
        ]
    },
    {
        name: '三维模型',
        children: [
            {
                type: "REALSPACE",
                thumbnail: "./images/addData/BIM.jpg",
                proxiedUrl: "https://www.supermapol.com/realspace/services/3D-BIMbuilding-2/rest/realspace",
                name: "BIMBuilding",
                chooseType: false
            },
            {
                /** 配置场景类型的示例 */
                type: "REALSPACE", // 场景类型
                thumbnail: "./images/addData/CBD.jpg", // 缩略图相对地址
                proxiedUrl: 'https://www.supermapol.com/realspace/services/3D-0523/rest/realspace', // 场景服务链接
                name: "BeijingCBD", // vue-i18n中国际化的名称,设置后可跟随浏览器语言环境1变化而变化：./locale/zh.js-BeijingCBD
                chooseType: false // 面板中图片是否选中（默认false即可）
            },
        ]
    },
    {
        name: '公共服务',
        children: [
            {
                type: "REALSPACE",
                thumbnail: "./images/addData/ZfTerranAndImagery.jpg",
                proxiedUrl: "https://www.supermapol.com/realspace/services/3D-ZF_normal/rest/realspace",
                name: "MountEverest",
                chooseType: false
            },
            {
                proxiedUrl: 'https://maptiles.supermapol.com/iserver/services/3D-local3DCache-GlobalTIN30M/rest/realspace/datas/Global_TIN_30M', // 地形服务链接
                thumbnail: './images/terrainLayers/SuperMapOnline.png', // 缩略图相对地址
                name: "SuperMapOnlineTerrain", // vue-i18n中国际化的名称
                type: 'supermapOnlineTerrain', // 地形服务类型
                chooseType: false, // 面板中图片是否选中（默认false即可）
            },
            {
                proxiedUrl: "https://www.supermapol.com/realspace/services/3D-stk_terrain/rest/realspace/datas/info/data/path",
                thumbnail: './images/terrainLayers/STK_terrain.png',
                name: "stkTerrain",
                type: 'STKTerrain',
                chooseType: false
            },
            {
                type: "MVT",
                thumbnail: "./images/addData/MVT.jpg",
                proxiedUrl: "https://www.supermapol.com/realspace/services/map-mvt-JingJinDiQuDiTu/restjsr/v1/vectortile/maps/%E4%BA%AC%E6%B4%A5%E5%9C%B0%E5%8C%BA%E5%9C%B0%E5%9B%BE",
                name: "JingJinMVT",
                vectorTilesMapName: 'JingJinMVT',
                chooseType: false
            },
        ]
    },
    {
        name: '工程建设项目',
        children: [
            {
                type: "REALSPACE",
                thumbnail: "./images/addData/Petroleum.jpg",
                proxiedUrl: "https://www.supermapol.com/realspace/services/3D-PowerPlant-2/rest/realspace",
                name: "transformerStation",
                chooseType: false
            },
        ]
    },
    {
        name: '公共管理',
        children: [
            {
                type: "ThematicMap",
                thumbnail: "./images/addData/cqbm.jpg",
                proxiedUrl: "https://www.supermapol.com/realspace/services/3D-CQmodel_wireframe_2000-2/rest/realspace/datas/wireFrame/config",
                name: "ChongqingBaimo",
                S3MLayer: true,
                chooseType: false
            },
        ]
    },
    { name: '公共安全' },
    { name: '规划管控数据' },
    { name: '资源调查' },
    { name: '专题数据' },
    { name: '物联感知' },
    { name: '轨道交通专题' },
    { name: '其他目录' },
]

window.layerPanelConfig = layerPanelConfig