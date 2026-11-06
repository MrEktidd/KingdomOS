importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js");

const {registerRoute, setCatchHandler} = workbox.routing;
const {CacheFirst, NetworkFirst, StaleWhileRevalidate} = workbox.strategies;
const {CacheableResponsePlugin} = workbox.cacheableResponse;
const {ExpirationPlugin} = workbox.expiration;
const {PrecacheController, PrecacheRoute, cleanupOutdatedCaches} = workbox.precaching;

self.skipWaiting();
workbox.core.clientsClaim();

const DAY = 24 * 60 * 60; // in seconds
const precache = new PrecacheController();
precache.addToCacheList([{"url":"Advanced-options-CUTInXyC.js","revision":"3c8d467b"},{"url":"Assistant-j3pecW0_.js","revision":"f9dd2e27"},{"url":"Battle-Simulator-EvJFGvEI.js","revision":"7ded2987"},{"url":"Changelog-D7ERvHvh.js","revision":"c037391f"},{"url":"Coastline-Editor-Bm7KFlWw.js","revision":"974602d0"},{"url":"Culture-sets-BkWbFNHf.js","revision":"d28f02fc"},{"url":"Culture-types-DX_IO-Hj.js","revision":"30196de9"},{"url":"Data-import-Cgd_JOZG.js","revision":"ed8522de"},{"url":"Dependencies-CNvYzxcl.js","revision":"b42a8bc5"},{"url":"Dropbox-sdk.min-UGaBgXJl.js","revision":"662a9b2a"},{"url":"Emblems-DAd_L6DZ.js","revision":"712be4d9"},{"url":"GIS-data-export-Bm5b3jxy.js","revision":"4b804e48"},{"url":"Geographical-Features-Overview-B-dotX0_.js","revision":"c945d555"},{"url":"Goods-spread-functions--Kgi-eUT.js","revision":"6303297c"},{"url":"Heightmap-customization-Bwv0gqk7.js","revision":"ed7479f3"},{"url":"Heightmap-image-overlay-DrFCjdsw.js","revision":"7d01eb38"},{"url":"Heightmap-template-editor-Dy3ZRcdZ.js","revision":"1fd8642f"},{"url":"Home-CzTFJhK0.js","revision":"9ee54282"},{"url":"Hotkeys-FK852lXt.js","revision":"4d6defa4"},{"url":"Icons-BkM6eRZn.js","revision":"bf9cb478"},{"url":"Install-with-Nix-DyyKMmMl.js","revision":"2a9164a2"},{"url":"Journeys-CYRbQVdj.js","revision":"623b0f17"},{"url":"Knowledge Base-2iwhsWJC.js","revision":"bed5f955"},{"url":"Map-embellishments-Ds6n3Van.js","revision":"fa7c2f5e"},{"url":"Markers-BViFNwgf.js","revision":"5eaf4b66"},{"url":"Military-Forces-tf4bnRnO.js","revision":"5fafdade"},{"url":"Ollama-text-generation-DP-WeU7w.js","revision":"b66b6c62"},{"url":"Omnibar-xZanHWOb.js","revision":"66fbe327"},{"url":"Performance-settings-DguNxvMG.js","revision":"5190a498"},{"url":"Policy-DkWTYuVJ.js","revision":"d26d05fd"},{"url":"Q_A-mpTX1OBh.js","revision":"f4c34032"},{"url":"Quick-Start-Tutorial-BnrS-tB1.js","revision":"7374d858"},{"url":"Reporting-bugs-and-ideas-CJDEmQvV.js","revision":"205507ae"},{"url":"River-Editor-BvGwqtYw.js","revision":"c0fb01b3"},{"url":"Run-FMG-locally-DCjn9mNi.js","revision":"0677e9d0"},{"url":"Scale-and-distance-CMJ7Vnse.js","revision":"1d29d77a"},{"url":"URL-parameters-Bbj7Po6E.js","revision":"69bcd904"},{"url":"User-Interface-DgM9yhfZ.js","revision":"b04a07ab"},{"url":"Working-offline-BjcPaP9y.js","revision":"0f8eb060"},{"url":"Wrap-Tool-CvixOv1C.js","revision":"db37eaea"},{"url":"_Footer-CoCNk46l.js","revision":"6bcf9a6f"},{"url":"added-labels-BR1YnNI3.js","revision":"b7df4f82"},{"url":"af-D6tvz6tD.js","revision":"7b6c0340"},{"url":"ai-generator-BhyEpdGe.js","revision":"70ed99c8"},{"url":"annex-mode-CDu3PLhd.js","revision":"28f2c1f1"},{"url":"app-JxGef4iz.js","revision":"6d5ebaf2"},{"url":"app-offer-CaY_5Gvf.js","revision":"6aefc6b2"},{"url":"assistant-DiC8BRxM.js","revision":"94ebb914"},{"url":"auto-update-VD7myYgR.js","revision":"e1e6ca39"},{"url":"axis-ChvWZg1j.js","revision":"6100f9ad"},{"url":"battle-screen-DhDT7FvJ.js","revision":"86d680b0"},{"url":"be-BzzC1_uJ.js","revision":"aa5d982c"},{"url":"bg-Dnk8hJG3.js","revision":"6d2686a1"},{"url":"biomes-editor-pC0KuP3_.js","revision":"bbd19e1e"},{"url":"biomes-generator-B06XWWz9.js","revision":"e64cbcb1"},{"url":"bn-a6UE_Z1a.js","revision":"8f4627ff"},{"url":"brush-circle-S4Y8sQld.js","revision":"c4801fb6"},{"url":"brush-utils-B5xtY9tr.js","revision":"da893237"},{"url":"burg-creator-C5miH4Pq.js","revision":"aeb844b8"},{"url":"burg-editor-DHnbTvtc.js","revision":"95ab9217"},{"url":"burg-group-editor-fwOPGuvr.js","revision":"59da5175"},{"url":"burgs-overview-UhQNocvV.js","revision":"f4984802"},{"url":"canvas-B3cFGx2E.js","revision":"50465979"},{"url":"cell-info-CRhIq0Mm.js","revision":"b54ccdf8"},{"url":"charges-XaoNl-VI.js","revision":"70b970c3"},{"url":"charts-overview-BKILKJIv.js","revision":"181898b0"},{"url":"cloud-CQJobaSA.js","revision":"35f4158d"},{"url":"coastline-editor-DYl2q3WO.js","revision":"7d44f39b"},{"url":"color-picker-E_Ngl9bv.js","revision":"9abaf6bc"},{"url":"color-utils-CrmZ_4uY.js","revision":"7efc2593"},{"url":"compare-prices-BTpOQs8b.js","revision":"7040f7b9"},{"url":"configuration-BtAjepSE.js","revision":"c4896005"},{"url":"connection-n8dq6t8o.js","revision":"0b7097cc"},{"url":"constant-CUk6ox2a.js","revision":"1abf13b6"},{"url":"context-menu-DJRXg7_o.js","revision":"c1858ac6"},{"url":"controllers-J2Zz1cm6.js","revision":"8f8c18cb"},{"url":"controls-BYCiLimK.js","revision":"8a3620f7"},{"url":"cs-B4A1f5vl.js","revision":"986fe2c7"},{"url":"csv-CWKHeBVB.js","revision":"6c08eece"},{"url":"csv-upload-77UpwBLu.js","revision":"38458e9c"},{"url":"cultures-editor-C2Rjsm-9.js","revision":"49d2321e"},{"url":"da-NyacFFOS.js","revision":"9143800c"},{"url":"data-model-BU4ftqdG.js","revision":"4ab601e9"},{"url":"de-BWJu0T1D.js","revision":"021b18fb"},{"url":"dialog-3wqBPvBH.js","revision":"a9d13e2d"},{"url":"diplomacy-BZ3EGKc3.js","revision":"9b1a230e"},{"url":"diplomacy-editor-D67I6Cr9.js","revision":"f8d9464b"},{"url":"diplomacy-overview-DnqJz4km.js","revision":"f734211b"},{"url":"divisions-yddbEqou.js","revision":"c211cf51"},{"url":"drag-BpUrczx_.js","revision":"d12b8592"},{"url":"draw-heightmap-D9CW0Lcq.js","revision":"9bd4519d"},{"url":"dropbox.html","revision":"f77bfd7c"},{"url":"effects-DdALsG6g.js","revision":"9e5e5bf6"},{"url":"el-C6M1vApD.js","revision":"97e34de3"},{"url":"elevation-profile-CKWL-ciS.js","revision":"efa57fd0"},{"url":"emblem-image-8EfDmllj.js","revision":"81f5af26"},{"url":"emblems-editor-Bkqzq7d5.js","revision":"ebbdbed3"},{"url":"en-BpPoOois.js","revision":"b4b8f52e"},{"url":"environment-BDBII_BV.js","revision":"b689f5f0"},{"url":"es-Btz5nCXi.js","revision":"d91c1da8"},{"url":"export-BKCJyUFx.js","revision":"489abc72"},{"url":"export-json-B0038hpx.js","revision":"87c0a56b"},{"url":"features-overview-C3HAErj1.js","revision":"5ad5ffd8"},{"url":"file-name-CjjRnvM3.js","revision":"1dcd1d31"},{"url":"file-utils-ChGs_4wd.js","revision":"8101703a"},{"url":"fonts-KfhvM-14.js","revision":"94b58dbd"},{"url":"fr-SSD2TbHd.js","revision":"77f942c7"},{"url":"good-editor-6yv4k2i9.js","revision":"82d6701b"},{"url":"goods-distribution-editor-CPIxDSg2.js","revision":"c587ddb5"},{"url":"goods-editor-D9QQ8UAs.js","revision":"53c0d92c"},{"url":"graph-override-BRzpokVv.js","revision":"3898004e"},{"url":"grid-generator-BXEzTnYL.js","revision":"13a64379"},{"url":"hatches-Bvwg34bX.js","revision":"c1f773d3"},{"url":"heightmap-editor-s_P6aE6g.js","revision":"26cce1f4"},{"url":"heightmap-generator-zW_b5bT7.js","revision":"1ea3e5db"},{"url":"heightmap-selection-Lrtz6j-o.js","revision":"e0ab59a1"},{"url":"heightmaps/africa-centric.png","revision":"5983b84f"},{"url":"heightmaps/arabia.png","revision":"60e4b200"},{"url":"heightmaps/atlantics.png","revision":"297ee191"},{"url":"heightmaps/britain.png","revision":"184d3e92"},{"url":"heightmaps/caribbean.png","revision":"e3a7f190"},{"url":"heightmaps/east-asia.png","revision":"7a7cc7e1"},{"url":"heightmaps/eurasia.png","revision":"b39d203b"},{"url":"heightmaps/europe-accented.png","revision":"e83ef22a"},{"url":"heightmaps/europe-and-central-asia.png","revision":"a78319b6"},{"url":"heightmaps/europe-central.png","revision":"28f7f5f5"},{"url":"heightmaps/europe-north.png","revision":"5c75687a"},{"url":"heightmaps/europe.png","revision":"7f7debbe"},{"url":"heightmaps/greenland.png","revision":"403c79ec"},{"url":"heightmaps/hellenica.png","revision":"a26c47fe"},{"url":"heightmaps/iceland.png","revision":"9e6b3932"},{"url":"heightmaps/import-rules.txt","revision":"717d7d5b"},{"url":"heightmaps/indian-ocean.png","revision":"0fde55cb"},{"url":"heightmaps/mediterranean-sea.png","revision":"da56ae5f"},{"url":"heightmaps/middle-east.png","revision":"f7764042"},{"url":"heightmaps/north-america.png","revision":"a34787a2"},{"url":"heightmaps/us-centric.png","revision":"8f491da6"},{"url":"heightmaps/us-mainland.png","revision":"4d5b9521"},{"url":"heightmaps/world-from-pacific.png","revision":"64a9b798"},{"url":"heightmaps/world.png","revision":"71e82ef4"},{"url":"hi-Ci9XUuxp.js","revision":"e344b95d"},{"url":"hierarchy-tree-lo5u20jj.js","revision":"c41872e7"},{"url":"highlight-CsS0UzDS.js","revision":"b40e83fa"},{"url":"highlighting-DuGg2bSe.js","revision":"2c87f88e"},{"url":"hu-BH3zWIDV.js","revision":"32cd8f86"},{"url":"ice-editor-Dz_LF-rj.js","revision":"d2b20fe2"},{"url":"ice-generator-1F3neiLQ.js","revision":"c3a27c8f"},{"url":"icon-picker-CAJSsY5a.js","revision":"0c46e4b1"},{"url":"icons-archive-CEtN3O86.js","revision":"73979484"},{"url":"icons-burgs-ReBU_fvu.js","revision":"092a3ad5"},{"url":"icons-charges-agriculture-BkSBg_f6.js","revision":"19f0d99f"},{"url":"icons-charges-architecture-B6c1gnbZ.js","revision":"0777f472"},{"url":"icons-charges-arms-MHy39wx7.js","revision":"f08258d1"},{"url":"icons-charges-beastHeads-nljepei1.js","revision":"0ea79c2c"},{"url":"icons-charges-beasts-BJIBbmh6.js","revision":"dd66b3a1"},{"url":"icons-charges-birds-BR1O6XNf.js","revision":"2d1a4c38"},{"url":"icons-charges-bodyparts-Bek01AVe.js","revision":"904e8f73"},{"url":"icons-charges-bugs-wwzDs9Zt.js","revision":"10044536"},{"url":"icons-charges-conventional-B1h0IKUV.js","revision":"4f7f02bd"},{"url":"icons-charges-crosses-DvoLrs4k.js","revision":"74995521"},{"url":"icons-charges-fantastic-CPjyu_wB.js","revision":"977b3991"},{"url":"icons-charges-fishes-i_9RlJZd.js","revision":"93f208a7"},{"url":"icons-charges-miscellaneous-aiWaz9Fc.js","revision":"0f6c6f47"},{"url":"icons-charges-molluscs-C1P6pZ7O.js","revision":"eb03a9e9"},{"url":"icons-charges-ornaments-BIVHdTrq.js","revision":"a0b6e89f"},{"url":"icons-charges-people-CCNS8tEr.js","revision":"2a6917cf"},{"url":"icons-charges-plants-COpZoa6_.js","revision":"69a07de3"},{"url":"icons-charges-reptiles-BuoBB69G.js","revision":"dbb20fff"},{"url":"icons-charges-seafaring-BeYFjgok.js","revision":"ee8f3c0f"},{"url":"icons-charges-tools-D6ZR0Kb1.js","revision":"5e3b0920"},{"url":"icons-goods-BaT7RnvY.js","revision":"8859bbc5"},{"url":"icons-ports-C3vqFXcU.js","revision":"5e981a40"},{"url":"icons-relief-colored-Buf_LRYD.js","revision":"26502bc4"},{"url":"icons-relief-gray-DOBSOXRD.js","revision":"bb498b0d"},{"url":"icons-relief-illustrated-Cgy8warU.js","revision":"87f49af5"},{"url":"icons-relief-simple-Z6-zpwYe.js","revision":"fc9df39d"},{"url":"icons-relief-stickers-DJ9Ev8_D.js","revision":"97c104c2"},{"url":"id-BjjntIr_.js","revision":"891ed12a"},{"url":"images/Discord.png","revision":"c286fac8"},{"url":"images/Facebook.png","revision":"d8f6fd63"},{"url":"images/Pinterest.png","revision":"8180482a"},{"url":"images/Reddit.png","revision":"1d9fb4c9"},{"url":"images/Twitter.png","revision":"3d4be405"},{"url":"images/icons/favicon-16x16.png","revision":"ef1dc52c"},{"url":"images/icons/favicon-32x32.png","revision":"85b2ed24"},{"url":"images/icons/icon_x512.png","revision":"96db41ec"},{"url":"images/icons/maskable_icon_x128.png","revision":"43deca06"},{"url":"images/icons/maskable_icon_x192.png","revision":"8df7457d"},{"url":"images/icons/maskable_icon_x384.png","revision":"29269c99"},{"url":"images/icons/maskable_icon_x512.png","revision":"a4549048"},{"url":"images/kiwiroo.png","revision":"61f54115"},{"url":"images/markers/ship.svg","revision":"2ab0488f"},{"url":"images/markers/wagon.svg","revision":"b886e64e"},{"url":"images/pattern1.png","revision":"5bed361c"},{"url":"images/pattern2.png","revision":"f0940ccd"},{"url":"images/pattern3.png","revision":"e17a59c5"},{"url":"images/pattern4.png","revision":"4c29905f"},{"url":"images/pattern5.png","revision":"27767e4b"},{"url":"images/pattern6.png","revision":"54e9be30"},{"url":"images/preview.png","revision":"d30e01fe"},{"url":"images/style-presets/ancient.avif","revision":"1f8ce67c"},{"url":"images/style-presets/atlas.avif","revision":"8c4871c4"},{"url":"images/style-presets/cinderwood.avif","revision":"c24dd37c"},{"url":"images/style-presets/clean.avif","revision":"c4cccc45"},{"url":"images/style-presets/cyberpunk.avif","revision":"48b0c56e"},{"url":"images/style-presets/darkSeas.avif","revision":"44b7954c"},{"url":"images/style-presets/default.avif","revision":"347a7e43"},{"url":"images/style-presets/frostbite.avif","revision":"bbbbaeef"},{"url":"images/style-presets/gloom.avif","revision":"0ab45eb3"},{"url":"images/style-presets/ink.avif","revision":"b622b205"},{"url":"images/style-presets/light.avif","revision":"7196d45a"},{"url":"images/style-presets/monochrome.avif","revision":"39b3cdd1"},{"url":"images/style-presets/night.avif","revision":"8d13e517"},{"url":"images/style-presets/pale.avif","revision":"6827632a"},{"url":"images/style-presets/watercolor.avif","revision":"e0c90db2"},{"url":"images/textures/antique-big.jpg","revision":"e018ce4b"},{"url":"images/textures/antique-small.jpg","revision":"18ebde80"},{"url":"images/textures/folded-paper-big.jpg","revision":"eb156d1b"},{"url":"images/textures/folded-paper-small.jpg","revision":"d4588330"},{"url":"images/textures/gray-paper.jpg","revision":"79d3e355"},{"url":"images/textures/iran-small.jpg","revision":"7a2c9c37"},{"url":"images/textures/marble-big.jpg","revision":"264f0ff8"},{"url":"images/textures/marble-blue-big.jpg","revision":"85017608"},{"url":"images/textures/marble-blue-small.jpg","revision":"7aa3717b"},{"url":"images/textures/marble-small.jpg","revision":"062aabd9"},{"url":"images/textures/mars-big.jpg","revision":"e835a07b"},{"url":"images/textures/mars-small.jpg","revision":"6cefbda7"},{"url":"images/textures/mauritania-small.jpg","revision":"8886930b"},{"url":"images/textures/mercury-big.jpg","revision":"1603b5c7"},{"url":"images/textures/mercury-small.jpg","revision":"334fbff6"},{"url":"images/textures/ocean.jpg","revision":"4fc82bfc"},{"url":"images/textures/pergamena-small.jpg","revision":"eeb50ab4"},{"url":"images/textures/plaster.jpg","revision":"0094ce95"},{"url":"images/textures/soiled-paper-vertical.png","revision":"0b33f76d"},{"url":"images/textures/soiled-paper.jpg","revision":"af3e72ba"},{"url":"images/textures/spain-small.jpg","revision":"c7fdf23d"},{"url":"images/textures/timbercut-big.jpg","revision":"1f009d0e"},{"url":"images/textures/timbercut-small.jpg","revision":"93c12f56"},{"url":"images/tour-button-icon.png","revision":"093d2feb"},{"url":"images/waves.png","revision":"d6665b72"},{"url":"images/whitecaps.png","revision":"02c85e61"},{"url":"index-DOQT8b0l.js","revision":"0f1b9201"},{"url":"index-Elh14QzF.css","revision":"4b511cdc"},{"url":"index.html","revision":"9f4c62b4"},{"url":"it-BO57jJIj.js","revision":"535e3827"},{"url":"ja-BqMqXWtj.js","revision":"265b80d6"},{"url":"journey-editor-CQq8aMbl.js","revision":"f46702f5"},{"url":"journey-travel-yRvrlM18.js","revision":"e241f0de"},{"url":"journeys-generator-BJJnL4Q8.js","revision":"9f450723"},{"url":"journeys-overview-DIv-dVJ7.js","revision":"5ef9a8db"},{"url":"jszip.min-DHI56sS5.js","revision":"550a01ac"},{"url":"ko-DawOjQqM.js","revision":"39f240f0"},{"url":"label-arc-CnWmB7RW.js","revision":"ebd7062d"},{"url":"label-creator-B6U66Coy.js","revision":"9bbbda15"},{"url":"labels-editor-LqinPd5F.js","revision":"2f074f26"},{"url":"labels-group-editor-D1-zq_JC.js","revision":"3b075a57"},{"url":"labels-overview-CsRAk6DZ.js","revision":"a3dd60d0"},{"url":"lakes-editor-B-ESxK1d.js","revision":"b356df5d"},{"url":"layers-BuZ6CHWf.js","revision":"22440c5f"},{"url":"layers-order-C-MZiT8g.js","revision":"4d115b80"},{"url":"lifecycle-CyVjvZhv.js","revision":"1396446e"},{"url":"limitation-picker-DU2PSFYF.js","revision":"d941bb2d"},{"url":"line-weights-DMXPYRDE.js","revision":"3eb2ea6e"},{"url":"linear-DctFuBP5.js","revision":"6b8112c6"},{"url":"load-DHu-gmGv.js","revision":"c0f59259"},{"url":"lore-editor-BQEmgt3d.js","revision":"b28d2cbe"},{"url":"manifest.webmanifest","revision":"b989c1f5"},{"url":"map-brush-Cb3EpGQj.js","revision":"a670ce7f"},{"url":"map-history-Bmty1QtL.js","revision":"16fb93cf"},{"url":"map-placement-CJomdv9s.js","revision":"8897fed3"},{"url":"map-restoration-BjyqKsRC.js","revision":"ad7ea1d9"},{"url":"marker-creator-DZvTs0h0.js","revision":"0b2ef931"},{"url":"markers-editor-DwWYn65c.js","revision":"ea7a125b"},{"url":"markers-in-radius-CMFu1e-W.js","revision":"f636f1de"},{"url":"markers-overview-CMO-2JGT.js","revision":"9717a64b"},{"url":"markers-settings-Drqtkbb8.js","revision":"2f98a851"},{"url":"market-deals-overview-CTwkUE-8.js","revision":"45c15b93"},{"url":"market-overview-DQd1VcZ4.js","revision":"8a526855"},{"url":"markets-overview-DIo1DJMt.js","revision":"9b111d12"},{"url":"measurers-editor-nh9DWTeH.js","revision":"dde7601e"},{"url":"measurers-generator-DazKvylb.js","revision":"b5a6a570"},{"url":"military-overview-BuD65x68.js","revision":"4d1ad53e"},{"url":"min-CCch3uox.js","revision":"86bdc159"},{"url":"minimap-xmc24_sw.js","revision":"9072c1a4"},{"url":"namesbase-editor-B1Hr9KVb.js","revision":"3abc4720"},{"url":"nl-CpdQjaQn.js","revision":"ee51eacf"},{"url":"node-utils-B7j8BhBd.js","revision":"c2549bbe"},{"url":"notes-Dhwx-aOp.js","revision":"d19b8295"},{"url":"notes-editor-BEW1qiNn.js","revision":"76023e2a"},{"url":"notes-editor-DVB7LGv8.css","revision":"f77202e3"},{"url":"notices-DwMq1C_Q.js","revision":"9770fbf3"},{"url":"number-Da26Xeod.js","revision":"92812e9d"},{"url":"omnibar-DnDlGXD0.js","revision":"d7bef4e7"},{"url":"options-model-DdZ2yl81.js","revision":"31dcb605"},{"url":"ordinaries-DXI0TOB4.js","revision":"79525c24"},{"url":"pack-CyBKcrr4.js","revision":"f082fa13"},{"url":"pack-generator-D44ZN0et.js","revision":"0cbff898"},{"url":"packed-graph-DJUG9s0n.js","revision":"4c55dd88"},{"url":"paint-editor-trdQ5cC1.js","revision":"8e6f1342"},{"url":"pictures-t6TkHqvQ.js","revision":"5df8e37b"},{"url":"pl-BqYpBZMm.js","revision":"b794223f"},{"url":"platform-C2hXryFC.js","revision":"47409d3b"},{"url":"production-chains-cmpEvosP.js","revision":"bfe93cc3"},{"url":"production-generator-nLWGDzJc.js","revision":"4b84b10b"},{"url":"production-overview-CG-iINBS.js","revision":"f9c1a3ad"},{"url":"provinces-editor-BDkx5xvN.js","revision":"199e4c91"},{"url":"provinces-regeneration-B_DOUKFh.js","revision":"66dc864b"},{"url":"pt-BR-4d7IvRP5.js","revision":"dcfa6f0e"},{"url":"pt-CVYilBDH.js","revision":"6c48403c"},{"url":"regiment-editor-pnJNfwAP.js","revision":"b6aea1fe"},{"url":"regiments-overview-YBAmf0Bc.js","revision":"d18ca93e"},{"url":"registry-CwrTqJ86.js","revision":"f6d60ff3"},{"url":"relief-editor-CT-NUf2S.js","revision":"1f9cf896"},{"url":"relief-pool-editor-DT-STDrk.js","revision":"f05c38a9"},{"url":"relief-previews-Cd86l33q.js","revision":"1b2fdedd"},{"url":"relief-rules-editor-B7vWOXiH.js","revision":"c9f7036c"},{"url":"religions-editor-CRRJj4y3.js","revision":"409f6518"},{"url":"reveal-Dklyhulx.js","revision":"884ba4bc"},{"url":"river-auto-creator-D7ey-vrg.js","revision":"e38bad3d"},{"url":"river-creator-DpIqCORr.js","revision":"b58b3e37"},{"url":"river-editor-ev0R5wQd.js","revision":"10e5ee0e"},{"url":"rivers-overview-B8lnKCnG.js","revision":"78dc5610"},{"url":"ro-Buk4wTt9.js","revision":"b0d30e2b"},{"url":"rolldown-runtime-COiEfhsA.js","revision":"174e7e98"},{"url":"route-creator-DavDv7Z5.js","revision":"f5b6e9e4"},{"url":"route-editor-B1F4uiTM.js","revision":"96cf1645"},{"url":"route-groups-editor-CGFDLtR9.js","revision":"9b317787"},{"url":"routes-overview-DsJjX-QF.js","revision":"fc748f1d"},{"url":"ru-B4pbTBZi.js","revision":"45c47449"},{"url":"schema-form-DoDdupCY.js","revision":"3245603b"},{"url":"services-MarV-huY.js","revision":"6a559bc2"},{"url":"shields-QQIBRbRT.js","revision":"20fc9de2"},{"url":"sortable-list-CfNQwgmH.js","revision":"7dec1a22"},{"url":"sortable-list-z9wS_2BE.css","revision":"597f47cc"},{"url":"states-editor-5ZEi1QWZ.js","revision":"c39361fc"},{"url":"stratify-CGdiYggi.js","revision":"171bdc70"},{"url":"style-8hNP07lF.js","revision":"0fd91811"},{"url":"style-preset-BRwjPRkS.js","revision":"fad659b1"},{"url":"style-presets-B21h73tX.js","revision":"6e67d2ab"},{"url":"style-reference-BwLf5Wra.js","revision":"57d4fd1c"},{"url":"styles-CfVtsBMg.js","revision":"fb547de5"},{"url":"styles/ancient.json","revision":"39172320"},{"url":"styles/atlas.json","revision":"537658dd"},{"url":"styles/cinderwood.json","revision":"5696d6b2"},{"url":"styles/clean.json","revision":"3a9dd697"},{"url":"styles/cyberpunk.json","revision":"65ed46db"},{"url":"styles/darkSeas.json","revision":"5a197282"},{"url":"styles/frostbite.json","revision":"25be4c24"},{"url":"styles/gloom.json","revision":"67c767be"},{"url":"styles/ink.json","revision":"672dd06b"},{"url":"styles/light.json","revision":"07ec5b99"},{"url":"styles/monochrome.json","revision":"835cce51"},{"url":"styles/night.json","revision":"b80c3b0c"},{"url":"styles/pale.json","revision":"1e322783"},{"url":"styles/watercolor.json","revision":"ccb265bf"},{"url":"submap-tool-CW9hBEaB.js","revision":"77652302"},{"url":"sv-DW_6BeMd.js","revision":"4f06a1e5"},{"url":"table-BUfHx-52.js","revision":"ad800b49"},{"url":"temperature-generator-vpRWmGYR.js","revision":"f74dc6e6"},{"url":"temperature-graph-vmpIRr_Q.js","revision":"9df9636e"},{"url":"textures-BLQ-xSGL.js","revision":"fe021608"},{"url":"th-CSTQbTtZ.js","revision":"d664abc0"},{"url":"tinctures-CsgIeV6I.js","revision":"f7c1cb15"},{"url":"tooltips-Nm9ri5Ws.js","revision":"c33e9939"},{"url":"tr-7fOfJO6Y.js","revision":"e112bfac"},{"url":"trade-animation-editor-CjZuHv72.js","revision":"39165776"},{"url":"trade-details-Dh-tBSgN.js","revision":"d0e696b7"},{"url":"transform-tool-Bnnnu0Qk.js","revision":"f0c10c28"},{"url":"transport-editor-DW7q7Fpd.js","revision":"264734bb"},{"url":"ui-tour-CWXCubYt.css","revision":"ff1934a5"},{"url":"ui-tour-zdKUidgC.js","revision":"14747e8a"},{"url":"uk-D6dMOn1M.js","revision":"b2980e05"},{"url":"units-DeXXwmkZ.js","revision":"73959ac7"},{"url":"units-editor-Be5_IYqH.js","revision":"6db2195d"},{"url":"vi-ClLLqU2s.js","revision":"5ff3857e"},{"url":"view-3d-DaEsvOvs.js","revision":"78f024b0"},{"url":"view-3d-renderer-Dp4Zu6J7.js","revision":"3bb5bedd"},{"url":"world-BJKUJhUZ.js","revision":"b32ad754"},{"url":"world-configurator-j0ALTpmR.js","revision":"a4c394d4"},{"url":"wrap-tool-DFkOSJkB.js","revision":"295ba5ef"},{"url":"zh-TW-DksifhB6.js","revision":"005cdaf9"},{"url":"zh-r7nepuD_.js","revision":"8e3249e3"},{"url":"zones-editor-DgWxc8yh.js","revision":"bc0a392c"},{"url":"zoom-B3yUAAZp.js","revision":"e5d88323"}] || []);
const assets = new CacheFirst({
  cacheName: precache.strategy.cacheName,
  plugins: [...precache.strategy.plugins, new CacheableResponsePlugin({statuses: [200]})]
});
const runtimeAssets = new CacheFirst({
  cacheName: "fmg-assets",
  plugins: [...assets.plugins, new ExpirationPlugin({maxEntries: 100, maxAgeSeconds: 30 * DAY})]
});
const indexURL = new URL("index.html", self.location.href).href;
const offlineCacheName = `fmg-offline-${self.registration.scope}`;
let offlineDownload;

registerRoute(
  ({request}) => request.mode === "navigate",
  new NetworkFirst({
    networkTimeoutSeconds: 15,
    cacheName: "fmg-html",
    plugins: [
      new CacheableResponsePlugin({statuses: [0, 200]}),
      {cachedResponseWillBeUsed: async ({cachedResponse}) => (await offlinePage()) || cachedResponse}
    ]
  })
);

cleanupOutdatedCaches();
const assetRoute = new PrecacheRoute(precache, {ignoreURLParametersMatching: [/.*/]});
registerRoute(assetRoute.match, async options => {
  const stamp = options.url.searchParams.get("v");
  if (/^[a-f0-9]{8}$/.test(stamp)) {
    // Keep content-hash stamps from stamp-assets.js tied to their original revision.
    const key = new URL(options.params.cacheKey);
    key.searchParams.set("__WB_REVISION__", stamp);
    options.params.cacheKey = key.href;
  }
  return (await caches.match(options.params.cacheKey, {cacheName: assets.cacheName})) || runtimeAssets.handle(options);
});

self.addEventListener("message", event => {
  if (event.data?.type !== "CACHE_OFFLINE") return;
  offlineDownload ||= cacheOffline(event).finally(() => { offlineDownload = undefined; });
  event.waitUntil(offlineDownload.then(
    () => event.ports[0]?.postMessage({type: "CACHE_OFFLINE", ok: true}),
    error => {
      console.warn("Offline caching failed: ", error);
      event.ports[0]?.postMessage({type: "CACHE_OFFLINE", ok: false});
    }
  ));
});

async function cacheOffline(event) {
  const offlineCache = await caches.open(offlineCacheName);
  const previous = await offlinePage();
  if (previous) await offlineCache.put(indexURL, previous);

  // Commit the offline page and remove old assets only after the whole download succeeds.
  const urls = precache.getCachedURLs().filter(url => url !== indexURL);
  urls.push(indexURL);
  for (const url of urls) {
    const request = new Request(url, {cache: "reload", credentials: "same-origin"});
    const [response] = await Promise.all(assets.handleAll({event, request}));
    if (response.status !== 200) throw new Error(`Cannot cache ${url}: ${response.status}`);
  }
  await offlineCache.put(indexURL, await precache.matchPrecache(indexURL));
  await precache.activate(event);
}

async function offlinePage() {
  const offlineCache = await caches.open(offlineCacheName);
  const cache = await caches.open(assets.cacheName);
  return (await offlineCache.match(indexURL)) || cache.match(indexURL, {ignoreSearch: true});
}

setCatchHandler(async ({request}) => {
  if (request.mode === "navigate") return (await offlinePage()) || Response.error();
  const cache = await caches.open(assets.cacheName);
  return (await cache.match(request, {ignoreSearch: true})) || Response.error();
});

const retainedAssets = {
  cachedResponseWillBeUsed: async ({request, cachedResponse}) =>
    cachedResponse || caches.match(request, {cacheName: assets.cacheName, ignoreSearch: true})
};

// Google-hosted scripts (analytics) are left to the browser: with a blocker installed the
// request never gets a response, and a worker strategy would surface that as an uncaught error
registerRoute(
  ({request, url}) =>
    request.destination === "script" &&
    !url.pathname.endsWith("min.js") &&
    !url.hostname.includes("google"),
  new StaleWhileRevalidate({
    cacheName: "fmg-scripts",
    plugins: [
      new CacheableResponsePlugin({statuses: [0, 200]}),
      new ExpirationPlugin({maxEntries: 100, maxAgeSeconds: 30 * DAY}),
      retainedAssets
    ]
  })
);

registerRoute(
  ({request}) => request.destination === "style",
  new CacheFirst({
    cacheName: "fmg-stylesheets",
    plugins: [
      new CacheableResponsePlugin({statuses: [0, 200]}),
      new ExpirationPlugin({maxEntries: 100, maxAgeSeconds: 30 * DAY}),
      retainedAssets
    ]
  })
);

registerRoute(
  ({request, url}) => request.destination === "script" && url.pathname.endsWith("min.js"),
  new CacheFirst({
    cacheName: "fmg-libs",
    plugins: [
      new CacheableResponsePlugin({statuses: [0, 200]}),
      new ExpirationPlugin({maxEntries: 100, maxAgeSeconds: 30 * DAY}),
      retainedAssets
    ]
  })
);

registerRoute(
  new RegExp(".json$"),
  new CacheFirst({
    cacheName: "fmg-json",
    plugins: [
      new CacheableResponsePlugin({statuses: [0, 200]}),
      new ExpirationPlugin({maxEntries: 100, maxAgeSeconds: 30 * DAY}),
      retainedAssets
    ]
  })
);

registerRoute(
  ({request}) => request.destination === "image",
  new CacheFirst({
    cacheName: "fmg-images",
    plugins: [
      new CacheableResponsePlugin({statuses: [0, 200]}),
      new ExpirationPlugin({maxEntries: 100, maxAgeSeconds: 60 * DAY}),
      retainedAssets
    ]
  })
);

registerRoute(
  ({request}) => request.destination === "font",
  new CacheFirst({
    cacheName: "fmg-fonts",
    plugins: [
      new CacheableResponsePlugin({statuses: [0, 200]}),
      new ExpirationPlugin({maxEntries: 100, maxAgeSeconds: 60 * DAY}),
      retainedAssets
    ]
  })
);
