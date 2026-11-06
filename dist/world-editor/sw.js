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
precache.addToCacheList([{"url":"Advanced-options-CUTInXyC.js","revision":"3c8d467b"},{"url":"Assistant-j3pecW0_.js","revision":"f9dd2e27"},{"url":"Battle-Simulator-EvJFGvEI.js","revision":"7ded2987"},{"url":"Changelog-D7ERvHvh.js","revision":"c037391f"},{"url":"Coastline-Editor-Bm7KFlWw.js","revision":"974602d0"},{"url":"Culture-sets-BkWbFNHf.js","revision":"d28f02fc"},{"url":"Culture-types-DX_IO-Hj.js","revision":"30196de9"},{"url":"Data-import-Cgd_JOZG.js","revision":"ed8522de"},{"url":"Dependencies-CNvYzxcl.js","revision":"b42a8bc5"},{"url":"Dropbox-sdk.min-UGaBgXJl.js","revision":"662a9b2a"},{"url":"Emblems-DAd_L6DZ.js","revision":"712be4d9"},{"url":"GIS-data-export-Bm5b3jxy.js","revision":"4b804e48"},{"url":"Geographical-Features-Overview-B-dotX0_.js","revision":"c945d555"},{"url":"Goods-spread-functions--Kgi-eUT.js","revision":"6303297c"},{"url":"Heightmap-customization-Bwv0gqk7.js","revision":"ed7479f3"},{"url":"Heightmap-image-overlay-DrFCjdsw.js","revision":"7d01eb38"},{"url":"Heightmap-template-editor-Dy3ZRcdZ.js","revision":"1fd8642f"},{"url":"Home-CzTFJhK0.js","revision":"9ee54282"},{"url":"Hotkeys-FK852lXt.js","revision":"4d6defa4"},{"url":"Icons-BkM6eRZn.js","revision":"bf9cb478"},{"url":"Install-with-Nix-DyyKMmMl.js","revision":"2a9164a2"},{"url":"Journeys-CYRbQVdj.js","revision":"623b0f17"},{"url":"Knowledge Base-2iwhsWJC.js","revision":"bed5f955"},{"url":"Map-embellishments-Ds6n3Van.js","revision":"fa7c2f5e"},{"url":"Markers-BViFNwgf.js","revision":"5eaf4b66"},{"url":"Military-Forces-tf4bnRnO.js","revision":"5fafdade"},{"url":"Ollama-text-generation-DP-WeU7w.js","revision":"b66b6c62"},{"url":"Omnibar-xZanHWOb.js","revision":"66fbe327"},{"url":"Performance-settings-DguNxvMG.js","revision":"5190a498"},{"url":"Policy-DkWTYuVJ.js","revision":"d26d05fd"},{"url":"Q_A-mpTX1OBh.js","revision":"f4c34032"},{"url":"Quick-Start-Tutorial-BnrS-tB1.js","revision":"7374d858"},{"url":"Reporting-bugs-and-ideas-CJDEmQvV.js","revision":"205507ae"},{"url":"River-Editor-BvGwqtYw.js","revision":"c0fb01b3"},{"url":"Run-FMG-locally-DCjn9mNi.js","revision":"0677e9d0"},{"url":"Scale-and-distance-CMJ7Vnse.js","revision":"1d29d77a"},{"url":"URL-parameters-Bbj7Po6E.js","revision":"69bcd904"},{"url":"User-Interface-DgM9yhfZ.js","revision":"b04a07ab"},{"url":"Working-offline-BjcPaP9y.js","revision":"0f8eb060"},{"url":"Wrap-Tool-CvixOv1C.js","revision":"db37eaea"},{"url":"_Footer-CoCNk46l.js","revision":"6bcf9a6f"},{"url":"added-labels-C7OWu1aA.js","revision":"dd516240"},{"url":"af-D6tvz6tD.js","revision":"7b6c0340"},{"url":"ai-generator-fM4Exrkj.js","revision":"f9902d89"},{"url":"annex-mode-DfnB_QXz.js","revision":"12d7bcaf"},{"url":"app-DaOF0_oJ.js","revision":"d8459425"},{"url":"app-offer-CUhCaHAc.js","revision":"9846f8c6"},{"url":"assistant-BT1jhwll.js","revision":"29e73436"},{"url":"auto-update-BDufeu3W.js","revision":"af10322f"},{"url":"axis-ChvWZg1j.js","revision":"6100f9ad"},{"url":"battle-screen-5bBvoS8_.js","revision":"3eb69c13"},{"url":"be-BzzC1_uJ.js","revision":"aa5d982c"},{"url":"bg-Dnk8hJG3.js","revision":"6d2686a1"},{"url":"biomes-editor-B8IWfjbB.js","revision":"d6b3bef1"},{"url":"biomes-generator-yijs_VMj.js","revision":"e7037a89"},{"url":"bn-a6UE_Z1a.js","revision":"8f4627ff"},{"url":"brush-circle-CtgYOR0J.js","revision":"ea009836"},{"url":"brush-utils-B5xtY9tr.js","revision":"da893237"},{"url":"burg-creator-CZqOFWhI.js","revision":"6a2419ad"},{"url":"burg-editor-CjWo0rOM.js","revision":"810ac9b1"},{"url":"burg-group-editor-U1YLcMUB.js","revision":"e1c2d9e0"},{"url":"burgs-overview-BKpXvHb5.js","revision":"ca9fd849"},{"url":"canvas-BdqyLS7H.js","revision":"79b92225"},{"url":"cell-info-CYTKjecO.js","revision":"0e052308"},{"url":"charges-XaoNl-VI.js","revision":"70b970c3"},{"url":"charts-overview-VITGqNoE.js","revision":"91ab0780"},{"url":"cloud-D0rHyQXG.js","revision":"276bd1a5"},{"url":"coastline-editor-zS0UBNwY.js","revision":"09b4a027"},{"url":"color-picker-mRwU_2Zu.js","revision":"3f4c61e0"},{"url":"color-utils-7EG96Nsk.js","revision":"bcd19370"},{"url":"compare-prices-C8T_VWOX.js","revision":"76243ac2"},{"url":"configuration-BtAjepSE.js","revision":"c4896005"},{"url":"connection-DvuPAGzl.js","revision":"b337bd8e"},{"url":"constant-CUk6ox2a.js","revision":"1abf13b6"},{"url":"context-menu-BYbs9m6k.js","revision":"67dfec4f"},{"url":"controllers-DmSw-ZkU.js","revision":"0219c439"},{"url":"controls-wWg_aZH2.js","revision":"212d25df"},{"url":"cs-B4A1f5vl.js","revision":"986fe2c7"},{"url":"csv-CfLd6KH6.js","revision":"f5421ed5"},{"url":"csv-upload-4XKrpd6o.js","revision":"07a9a561"},{"url":"cultures-editor-nuFtSfZp.js","revision":"283afc53"},{"url":"da-NyacFFOS.js","revision":"9143800c"},{"url":"data-model-BU4ftqdG.js","revision":"4ab601e9"},{"url":"de-BWJu0T1D.js","revision":"021b18fb"},{"url":"dialog-BW-Ar0Nf.js","revision":"c28e0b7d"},{"url":"diplomacy-editor-CPW8bAAU.js","revision":"9377b10c"},{"url":"diplomacy-n8nS7njt.js","revision":"4d5064e4"},{"url":"diplomacy-overview-Ho9bj5Nv.js","revision":"d0294114"},{"url":"divisions-yddbEqou.js","revision":"c211cf51"},{"url":"drag-BCEUs7e2.js","revision":"876f0230"},{"url":"draw-heightmap-Dbhc88iA.js","revision":"1a4a3116"},{"url":"dropbox.html","revision":"f77bfd7c"},{"url":"effects-DeghHLGB.js","revision":"0b1d3e67"},{"url":"el-C6M1vApD.js","revision":"97e34de3"},{"url":"elevation-profile-B7C2z7m2.js","revision":"2d8d871a"},{"url":"emblem-image-BlNMu7dp.js","revision":"892116a3"},{"url":"emblems-editor-BxWXmlnM.js","revision":"198e82ea"},{"url":"en-BpPoOois.js","revision":"b4b8f52e"},{"url":"environment-BDBII_BV.js","revision":"b689f5f0"},{"url":"es-Btz5nCXi.js","revision":"d91c1da8"},{"url":"export-D_E9toDt.js","revision":"41b45f23"},{"url":"export-json-DVDe3Cfx.js","revision":"b0840cff"},{"url":"features-overview-d5MRrDaG.js","revision":"bfe7a624"},{"url":"file-name-CjjRnvM3.js","revision":"1dcd1d31"},{"url":"file-utils-gMYr_JNq.js","revision":"76a62971"},{"url":"fonts-LgPRtIBX.js","revision":"dc54a5c1"},{"url":"fr-SSD2TbHd.js","revision":"77f942c7"},{"url":"good-editor-BvzrfYFA.js","revision":"e6e2b9c5"},{"url":"goods-distribution-editor-C7Cx53w5.js","revision":"d7c2359a"},{"url":"goods-editor-B1i6ZdHz.js","revision":"21c925e1"},{"url":"graph-override-Duzk4-iC.js","revision":"a1b3da7e"},{"url":"grid-generator-Bw7amUrQ.js","revision":"84bdf88a"},{"url":"hatches-DPVQw6sc.js","revision":"108d24fd"},{"url":"heightmap-editor-zeh_TAWe.js","revision":"5d0d7d66"},{"url":"heightmap-generator-CoN5wc8x.js","revision":"07d37ba2"},{"url":"heightmap-selection-sKzFzPRw.js","revision":"5c7692ce"},{"url":"heightmaps/africa-centric.png","revision":"5983b84f"},{"url":"heightmaps/arabia.png","revision":"60e4b200"},{"url":"heightmaps/atlantics.png","revision":"297ee191"},{"url":"heightmaps/britain.png","revision":"184d3e92"},{"url":"heightmaps/caribbean.png","revision":"e3a7f190"},{"url":"heightmaps/east-asia.png","revision":"7a7cc7e1"},{"url":"heightmaps/eurasia.png","revision":"b39d203b"},{"url":"heightmaps/europe-accented.png","revision":"e83ef22a"},{"url":"heightmaps/europe-and-central-asia.png","revision":"a78319b6"},{"url":"heightmaps/europe-central.png","revision":"28f7f5f5"},{"url":"heightmaps/europe-north.png","revision":"5c75687a"},{"url":"heightmaps/europe.png","revision":"7f7debbe"},{"url":"heightmaps/greenland.png","revision":"403c79ec"},{"url":"heightmaps/hellenica.png","revision":"a26c47fe"},{"url":"heightmaps/iceland.png","revision":"9e6b3932"},{"url":"heightmaps/import-rules.txt","revision":"717d7d5b"},{"url":"heightmaps/indian-ocean.png","revision":"0fde55cb"},{"url":"heightmaps/mediterranean-sea.png","revision":"da56ae5f"},{"url":"heightmaps/middle-east.png","revision":"f7764042"},{"url":"heightmaps/north-america.png","revision":"a34787a2"},{"url":"heightmaps/us-centric.png","revision":"8f491da6"},{"url":"heightmaps/us-mainland.png","revision":"4d5b9521"},{"url":"heightmaps/world-from-pacific.png","revision":"64a9b798"},{"url":"heightmaps/world.png","revision":"71e82ef4"},{"url":"hi-Ci9XUuxp.js","revision":"e344b95d"},{"url":"hierarchy-tree-Cq9alwCw.js","revision":"b9f89eaf"},{"url":"highlight-CdQ_wUL5.js","revision":"aae3aa17"},{"url":"highlighting-mu1AuRTD.js","revision":"8d7003b0"},{"url":"hu-BH3zWIDV.js","revision":"32cd8f86"},{"url":"ice-editor-C_1zgeId.js","revision":"b2a02e29"},{"url":"ice-generator-C-QO6g37.js","revision":"ab454cdd"},{"url":"icon-picker-Ej2xuVg_.js","revision":"ec976988"},{"url":"icons-archive-B3iUM2nm.js","revision":"a63abb70"},{"url":"icons-burgs-ReBU_fvu.js","revision":"092a3ad5"},{"url":"icons-charges-agriculture-BkSBg_f6.js","revision":"19f0d99f"},{"url":"icons-charges-architecture-B6c1gnbZ.js","revision":"0777f472"},{"url":"icons-charges-arms-MHy39wx7.js","revision":"f08258d1"},{"url":"icons-charges-beastHeads-nljepei1.js","revision":"0ea79c2c"},{"url":"icons-charges-beasts-BJIBbmh6.js","revision":"dd66b3a1"},{"url":"icons-charges-birds-BR1O6XNf.js","revision":"2d1a4c38"},{"url":"icons-charges-bodyparts-Bek01AVe.js","revision":"904e8f73"},{"url":"icons-charges-bugs-wwzDs9Zt.js","revision":"10044536"},{"url":"icons-charges-conventional-B1h0IKUV.js","revision":"4f7f02bd"},{"url":"icons-charges-crosses-DvoLrs4k.js","revision":"74995521"},{"url":"icons-charges-fantastic-CPjyu_wB.js","revision":"977b3991"},{"url":"icons-charges-fishes-i_9RlJZd.js","revision":"93f208a7"},{"url":"icons-charges-miscellaneous-aiWaz9Fc.js","revision":"0f6c6f47"},{"url":"icons-charges-molluscs-C1P6pZ7O.js","revision":"eb03a9e9"},{"url":"icons-charges-ornaments-BIVHdTrq.js","revision":"a0b6e89f"},{"url":"icons-charges-people-CCNS8tEr.js","revision":"2a6917cf"},{"url":"icons-charges-plants-COpZoa6_.js","revision":"69a07de3"},{"url":"icons-charges-reptiles-BuoBB69G.js","revision":"dbb20fff"},{"url":"icons-charges-seafaring-BeYFjgok.js","revision":"ee8f3c0f"},{"url":"icons-charges-tools-D6ZR0Kb1.js","revision":"5e3b0920"},{"url":"icons-goods-BaT7RnvY.js","revision":"8859bbc5"},{"url":"icons-ports-C3vqFXcU.js","revision":"5e981a40"},{"url":"icons-relief-colored-Buf_LRYD.js","revision":"26502bc4"},{"url":"icons-relief-gray-DOBSOXRD.js","revision":"bb498b0d"},{"url":"icons-relief-illustrated-Cgy8warU.js","revision":"87f49af5"},{"url":"icons-relief-simple-Z6-zpwYe.js","revision":"fc9df39d"},{"url":"icons-relief-stickers-DJ9Ev8_D.js","revision":"97c104c2"},{"url":"id-BjjntIr_.js","revision":"891ed12a"},{"url":"images/Discord.png","revision":"c286fac8"},{"url":"images/Facebook.png","revision":"d8f6fd63"},{"url":"images/Pinterest.png","revision":"8180482a"},{"url":"images/Reddit.png","revision":"1d9fb4c9"},{"url":"images/Twitter.png","revision":"3d4be405"},{"url":"images/icons/favicon-16x16.png","revision":"ef1dc52c"},{"url":"images/icons/favicon-32x32.png","revision":"85b2ed24"},{"url":"images/icons/icon_x512.png","revision":"96db41ec"},{"url":"images/icons/maskable_icon_x128.png","revision":"43deca06"},{"url":"images/icons/maskable_icon_x192.png","revision":"8df7457d"},{"url":"images/icons/maskable_icon_x384.png","revision":"29269c99"},{"url":"images/icons/maskable_icon_x512.png","revision":"a4549048"},{"url":"images/kiwiroo.png","revision":"61f54115"},{"url":"images/markers/ship.svg","revision":"2ab0488f"},{"url":"images/markers/wagon.svg","revision":"b886e64e"},{"url":"images/pattern1.png","revision":"5bed361c"},{"url":"images/pattern2.png","revision":"f0940ccd"},{"url":"images/pattern3.png","revision":"e17a59c5"},{"url":"images/pattern4.png","revision":"4c29905f"},{"url":"images/pattern5.png","revision":"27767e4b"},{"url":"images/pattern6.png","revision":"54e9be30"},{"url":"images/preview.png","revision":"d30e01fe"},{"url":"images/style-presets/ancient.avif","revision":"1f8ce67c"},{"url":"images/style-presets/atlas.avif","revision":"8c4871c4"},{"url":"images/style-presets/cinderwood.avif","revision":"c24dd37c"},{"url":"images/style-presets/clean.avif","revision":"c4cccc45"},{"url":"images/style-presets/cyberpunk.avif","revision":"48b0c56e"},{"url":"images/style-presets/darkSeas.avif","revision":"44b7954c"},{"url":"images/style-presets/default.avif","revision":"347a7e43"},{"url":"images/style-presets/frostbite.avif","revision":"bbbbaeef"},{"url":"images/style-presets/gloom.avif","revision":"0ab45eb3"},{"url":"images/style-presets/ink.avif","revision":"b622b205"},{"url":"images/style-presets/light.avif","revision":"7196d45a"},{"url":"images/style-presets/monochrome.avif","revision":"39b3cdd1"},{"url":"images/style-presets/night.avif","revision":"8d13e517"},{"url":"images/style-presets/pale.avif","revision":"6827632a"},{"url":"images/style-presets/watercolor.avif","revision":"e0c90db2"},{"url":"images/textures/antique-big.jpg","revision":"e018ce4b"},{"url":"images/textures/antique-small.jpg","revision":"18ebde80"},{"url":"images/textures/folded-paper-big.jpg","revision":"eb156d1b"},{"url":"images/textures/folded-paper-small.jpg","revision":"d4588330"},{"url":"images/textures/gray-paper.jpg","revision":"79d3e355"},{"url":"images/textures/iran-small.jpg","revision":"7a2c9c37"},{"url":"images/textures/marble-big.jpg","revision":"264f0ff8"},{"url":"images/textures/marble-blue-big.jpg","revision":"85017608"},{"url":"images/textures/marble-blue-small.jpg","revision":"7aa3717b"},{"url":"images/textures/marble-small.jpg","revision":"062aabd9"},{"url":"images/textures/mars-big.jpg","revision":"e835a07b"},{"url":"images/textures/mars-small.jpg","revision":"6cefbda7"},{"url":"images/textures/mauritania-small.jpg","revision":"8886930b"},{"url":"images/textures/mercury-big.jpg","revision":"1603b5c7"},{"url":"images/textures/mercury-small.jpg","revision":"334fbff6"},{"url":"images/textures/ocean.jpg","revision":"4fc82bfc"},{"url":"images/textures/pergamena-small.jpg","revision":"eeb50ab4"},{"url":"images/textures/plaster.jpg","revision":"0094ce95"},{"url":"images/textures/soiled-paper-vertical.png","revision":"0b33f76d"},{"url":"images/textures/soiled-paper.jpg","revision":"af3e72ba"},{"url":"images/textures/spain-small.jpg","revision":"c7fdf23d"},{"url":"images/textures/timbercut-big.jpg","revision":"1f009d0e"},{"url":"images/textures/timbercut-small.jpg","revision":"93c12f56"},{"url":"images/tour-button-icon.png","revision":"093d2feb"},{"url":"images/waves.png","revision":"d6665b72"},{"url":"images/whitecaps.png","revision":"02c85e61"},{"url":"index-DfkEhdNk.js","revision":"24400822"},{"url":"index-Elh14QzF.css","revision":"4b511cdc"},{"url":"index.html","revision":"db5eee10"},{"url":"it-BO57jJIj.js","revision":"535e3827"},{"url":"ja-BqMqXWtj.js","revision":"265b80d6"},{"url":"journey-editor-BOF83iiA.js","revision":"3d721a46"},{"url":"journey-travel-cUjBiRxf.js","revision":"51374946"},{"url":"journeys-generator-DQORvHKL.js","revision":"9889c526"},{"url":"journeys-overview-enI_pOtF.js","revision":"fdbf6b07"},{"url":"jszip.min-DHI56sS5.js","revision":"550a01ac"},{"url":"ko-DawOjQqM.js","revision":"39f240f0"},{"url":"label-arc-CCda9ics.js","revision":"e59a3474"},{"url":"label-creator-uRw7hBoC.js","revision":"d12385c0"},{"url":"labels-editor-DWrTJRsj.js","revision":"f1074882"},{"url":"labels-group-editor-Bdw3P7pu.js","revision":"a89a9a21"},{"url":"labels-overview-BnN3jwzv.js","revision":"578db37c"},{"url":"lakes-editor-COm2ndhX.js","revision":"bfa6a5a0"},{"url":"layers-DJ8BJ3Zy.js","revision":"0953df8b"},{"url":"layers-order-B_79sAcP.js","revision":"80ffdf45"},{"url":"lifecycle-BNUl_Qkt.js","revision":"1f22970f"},{"url":"limitation-picker-DtlyCsCU.js","revision":"5d2cb8f7"},{"url":"line-weights-DMXPYRDE.js","revision":"3eb2ea6e"},{"url":"linear-C9i-EIkT.js","revision":"7277156d"},{"url":"load-DSTifti3.js","revision":"223d17c3"},{"url":"lore-editor-Dt1RhYWI.js","revision":"d6610b2e"},{"url":"manifest.webmanifest","revision":"b989c1f5"},{"url":"map-brush-5e91PIU-.js","revision":"5ce200e2"},{"url":"map-history-B_U7uEk3.js","revision":"51f34b1c"},{"url":"map-placement-Blm_xyct.js","revision":"d3fe3979"},{"url":"map-restoration-CSpjVqDZ.js","revision":"b190f393"},{"url":"marker-creator-BwrlzZmj.js","revision":"9557baa5"},{"url":"markers-editor-BaJXSwWs.js","revision":"bb79836c"},{"url":"markers-in-radius-Bn7SgWT5.js","revision":"4fbfdb1b"},{"url":"markers-overview-BR2o1yQg.js","revision":"ff72c8ed"},{"url":"markers-settings-CWnzQ76M.js","revision":"bb7f4a56"},{"url":"market-deals-overview--hVzAbl-.js","revision":"bf5ac012"},{"url":"market-overview-B4P0oxlG.js","revision":"f25e05fe"},{"url":"markets-overview-D-f26m56.js","revision":"1eff3e95"},{"url":"measurers-editor-D9HQ27h6.js","revision":"71c0f3c3"},{"url":"measurers-generator-DazKvylb.js","revision":"b5a6a570"},{"url":"military-overview-DyBeh-qI.js","revision":"1a4a4e8d"},{"url":"min-CCch3uox.js","revision":"86bdc159"},{"url":"minimap-DDI_p27H.js","revision":"589843e2"},{"url":"namesbase-editor-DPXpSkdr.js","revision":"40da62a3"},{"url":"nl-CpdQjaQn.js","revision":"ee51eacf"},{"url":"node-utils-BD0SusgU.js","revision":"227dcf37"},{"url":"notes-DH8U4MQ0.js","revision":"87d14384"},{"url":"notes-editor-DVB7LGv8.css","revision":"f77202e3"},{"url":"notes-editor-wNR7m1dr.js","revision":"961c9a8d"},{"url":"notices-CsL9NM9q.js","revision":"e225aff8"},{"url":"number-Da26Xeod.js","revision":"92812e9d"},{"url":"omnibar-B5XuX-sx.js","revision":"485cd590"},{"url":"options-model-baH24lwc.js","revision":"f7f4b2bc"},{"url":"ordinaries-DXI0TOB4.js","revision":"79525c24"},{"url":"pack-CyBKcrr4.js","revision":"f082fa13"},{"url":"pack-generator-itXjN9Pv.js","revision":"a156b4a9"},{"url":"packed-graph-DJUG9s0n.js","revision":"4c55dd88"},{"url":"paint-editor-OLP4FOew.js","revision":"d9d72568"},{"url":"pictures-CxiSo2E6.js","revision":"d09f4725"},{"url":"pl-BqYpBZMm.js","revision":"b794223f"},{"url":"platform-BaiDCNRc.js","revision":"c89c1d8d"},{"url":"production-chains-Bj8YvUQd.js","revision":"90ad10b3"},{"url":"production-generator-6t0nz-yt.js","revision":"13165d4e"},{"url":"production-overview-BM7pn7ou.js","revision":"57129c5a"},{"url":"provinces-editor-szK0AWIa.js","revision":"e8fc5954"},{"url":"provinces-regeneration-DFXAb50o.js","revision":"ceef1e98"},{"url":"pt-BR-4d7IvRP5.js","revision":"dcfa6f0e"},{"url":"pt-CVYilBDH.js","revision":"6c48403c"},{"url":"regiment-editor-Dhj22b8H.js","revision":"5111d632"},{"url":"regiments-overview-D6U46P_N.js","revision":"09e7baee"},{"url":"registry-CwrTqJ86.js","revision":"f6d60ff3"},{"url":"relief-editor-VBPvW_d0.js","revision":"5f513c4d"},{"url":"relief-pool-editor-DSySEEJb.js","revision":"8a506f34"},{"url":"relief-previews-JyNAQX5R.js","revision":"b2193f48"},{"url":"relief-rules-editor-mfTsra3t.js","revision":"2d74c2c9"},{"url":"religions-editor-BoNj6j8J.js","revision":"509fe07a"},{"url":"reveal-CFICSYEx.js","revision":"15210bb6"},{"url":"river-auto-creator-BNzrpVIw.js","revision":"147c21ae"},{"url":"river-creator-BrMVbWtZ.js","revision":"5c3c77a4"},{"url":"river-editor-DgFY-Vel.js","revision":"825d8323"},{"url":"rivers-overview-BhcRUoDa.js","revision":"36cacd51"},{"url":"ro-Buk4wTt9.js","revision":"b0d30e2b"},{"url":"rolldown-runtime-COiEfhsA.js","revision":"174e7e98"},{"url":"route-creator-C4ThKkDx.js","revision":"ad497f29"},{"url":"route-editor-CGfXjzmY.js","revision":"b153e51e"},{"url":"route-groups-editor-CWMmj7dM.js","revision":"3bcccb79"},{"url":"routes-overview-CN8VFC3f.js","revision":"d16a8152"},{"url":"ru-B4pbTBZi.js","revision":"45c47449"},{"url":"schema-form-ChaXyWY9.js","revision":"13d0a569"},{"url":"services-DSJYmPRP.js","revision":"dcad8a47"},{"url":"shields-QQIBRbRT.js","revision":"20fc9de2"},{"url":"sortable-list-Brr5kHW5.js","revision":"df04d0c9"},{"url":"sortable-list-z9wS_2BE.css","revision":"597f47cc"},{"url":"states-editor-CmNYzp1V.js","revision":"e6b0eca0"},{"url":"stratify-CGdiYggi.js","revision":"171bdc70"},{"url":"style-D9zbtViI.js","revision":"5268f3ed"},{"url":"style-preset-JMqVLt_v.js","revision":"d6c5b2fa"},{"url":"style-presets-BDZALvMj.js","revision":"57ba3ba7"},{"url":"style-reference-C0FxfdFZ.js","revision":"ebdb65ee"},{"url":"styles-CL16qCtx.js","revision":"5c3b0d97"},{"url":"styles/ancient.json","revision":"39172320"},{"url":"styles/atlas.json","revision":"537658dd"},{"url":"styles/cinderwood.json","revision":"5696d6b2"},{"url":"styles/clean.json","revision":"3a9dd697"},{"url":"styles/cyberpunk.json","revision":"65ed46db"},{"url":"styles/darkSeas.json","revision":"5a197282"},{"url":"styles/frostbite.json","revision":"25be4c24"},{"url":"styles/gloom.json","revision":"67c767be"},{"url":"styles/ink.json","revision":"672dd06b"},{"url":"styles/light.json","revision":"07ec5b99"},{"url":"styles/monochrome.json","revision":"835cce51"},{"url":"styles/night.json","revision":"b80c3b0c"},{"url":"styles/pale.json","revision":"1e322783"},{"url":"styles/watercolor.json","revision":"ccb265bf"},{"url":"submap-tool-GbHZhNvb.js","revision":"b18abacf"},{"url":"sv-DW_6BeMd.js","revision":"4f06a1e5"},{"url":"table-DSOgM2sf.js","revision":"dfb00ee1"},{"url":"temperature-generator-BqS5MeQ2.js","revision":"c68fbcc2"},{"url":"temperature-graph-DCJi4gnn.js","revision":"4dbc6bea"},{"url":"textures-ghb1UR1E.js","revision":"74162846"},{"url":"th-CSTQbTtZ.js","revision":"d664abc0"},{"url":"tinctures-CsgIeV6I.js","revision":"f7c1cb15"},{"url":"tooltips-BSJdaB-v.js","revision":"bbf6c9d0"},{"url":"tr-7fOfJO6Y.js","revision":"e112bfac"},{"url":"trade-animation-editor-mqdQXOE7.js","revision":"cd74ca48"},{"url":"trade-details-D5Fe-kYT.js","revision":"ea307851"},{"url":"transform-tool-NP_5CB8I.js","revision":"c3f4e54d"},{"url":"transport-editor-0aZAi_BP.js","revision":"e9d638ba"},{"url":"ui-tour-CWXCubYt.css","revision":"ff1934a5"},{"url":"ui-tour-DzRLuhfo.js","revision":"45f31f0e"},{"url":"uk-D6dMOn1M.js","revision":"b2980e05"},{"url":"units-S5RZj9IM.js","revision":"21a79628"},{"url":"units-editor-iAhzF8-c.js","revision":"71ea7fba"},{"url":"vi-ClLLqU2s.js","revision":"5ff3857e"},{"url":"view-3d-C3RzLQzv.js","revision":"d7253f77"},{"url":"view-3d-renderer-Dqmln1HC.js","revision":"32174394"},{"url":"world-CwMjaq9n.js","revision":"eb6175a4"},{"url":"world-configurator-C3xb1ySN.js","revision":"878d4d15"},{"url":"wrap-tool-Dd-SvQiz.js","revision":"9221343c"},{"url":"zh-TW-DksifhB6.js","revision":"005cdaf9"},{"url":"zh-r7nepuD_.js","revision":"8e3249e3"},{"url":"zones-editor-XnIrtQft.js","revision":"0ed9fab1"},{"url":"zoom-U9bkgxPn.js","revision":"76fb0dba"}] || []);
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
