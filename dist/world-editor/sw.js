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
precache.addToCacheList([{"url":"Advanced-options-CUTInXyC.js","revision":"3c8d467b"},{"url":"Assistant-j3pecW0_.js","revision":"f9dd2e27"},{"url":"Battle-Simulator-EvJFGvEI.js","revision":"7ded2987"},{"url":"Changelog-D7ERvHvh.js","revision":"c037391f"},{"url":"Coastline-Editor-Bm7KFlWw.js","revision":"974602d0"},{"url":"Culture-sets-BkWbFNHf.js","revision":"d28f02fc"},{"url":"Culture-types-DX_IO-Hj.js","revision":"30196de9"},{"url":"Data-import-Cgd_JOZG.js","revision":"ed8522de"},{"url":"Dependencies-CNvYzxcl.js","revision":"b42a8bc5"},{"url":"Dropbox-sdk.min-UGaBgXJl.js","revision":"662a9b2a"},{"url":"Emblems-DAd_L6DZ.js","revision":"712be4d9"},{"url":"GIS-data-export-Bm5b3jxy.js","revision":"4b804e48"},{"url":"Geographical-Features-Overview-B-dotX0_.js","revision":"c945d555"},{"url":"Goods-spread-functions--Kgi-eUT.js","revision":"6303297c"},{"url":"Heightmap-customization-Bwv0gqk7.js","revision":"ed7479f3"},{"url":"Heightmap-image-overlay-DrFCjdsw.js","revision":"7d01eb38"},{"url":"Heightmap-template-editor-Dy3ZRcdZ.js","revision":"1fd8642f"},{"url":"Home-CzTFJhK0.js","revision":"9ee54282"},{"url":"Hotkeys-FK852lXt.js","revision":"4d6defa4"},{"url":"Icons-BkM6eRZn.js","revision":"bf9cb478"},{"url":"Install-with-Nix-DyyKMmMl.js","revision":"2a9164a2"},{"url":"Journeys-CYRbQVdj.js","revision":"623b0f17"},{"url":"Knowledge Base-2iwhsWJC.js","revision":"bed5f955"},{"url":"Map-embellishments-Ds6n3Van.js","revision":"fa7c2f5e"},{"url":"Markers-BViFNwgf.js","revision":"5eaf4b66"},{"url":"Military-Forces-tf4bnRnO.js","revision":"5fafdade"},{"url":"Ollama-text-generation-DP-WeU7w.js","revision":"b66b6c62"},{"url":"Omnibar-xZanHWOb.js","revision":"66fbe327"},{"url":"Performance-settings-DguNxvMG.js","revision":"5190a498"},{"url":"Policy-DkWTYuVJ.js","revision":"d26d05fd"},{"url":"Q_A-mpTX1OBh.js","revision":"f4c34032"},{"url":"Quick-Start-Tutorial-BnrS-tB1.js","revision":"7374d858"},{"url":"Reporting-bugs-and-ideas-CJDEmQvV.js","revision":"205507ae"},{"url":"River-Editor-BvGwqtYw.js","revision":"c0fb01b3"},{"url":"Run-FMG-locally-DCjn9mNi.js","revision":"0677e9d0"},{"url":"Scale-and-distance-CMJ7Vnse.js","revision":"1d29d77a"},{"url":"URL-parameters-Bbj7Po6E.js","revision":"69bcd904"},{"url":"User-Interface-DgM9yhfZ.js","revision":"b04a07ab"},{"url":"Working-offline-BjcPaP9y.js","revision":"0f8eb060"},{"url":"Wrap-Tool-CvixOv1C.js","revision":"db37eaea"},{"url":"_Footer-CoCNk46l.js","revision":"6bcf9a6f"},{"url":"added-labels-DsJgS4kH.js","revision":"4d119184"},{"url":"af-D6tvz6tD.js","revision":"7b6c0340"},{"url":"ai-generator-DgxSOJ5w.js","revision":"02fe9f48"},{"url":"annex-mode-DJujyY1t.js","revision":"6e5823af"},{"url":"app-8AGFuk3c.js","revision":"21cfa92c"},{"url":"app-offer-Dk3TWxpH.js","revision":"e37573b3"},{"url":"assistant-VUcecLko.js","revision":"f44cf0e7"},{"url":"auto-update-DdRmxTF5.js","revision":"3c699217"},{"url":"axis-ChvWZg1j.js","revision":"6100f9ad"},{"url":"battle-screen-o3dV63s9.js","revision":"dd912426"},{"url":"be-BzzC1_uJ.js","revision":"aa5d982c"},{"url":"bg-Dnk8hJG3.js","revision":"6d2686a1"},{"url":"biomes-editor-jmkaJJAF.js","revision":"b101ca81"},{"url":"biomes-generator-BTv9AVJs.js","revision":"da2f660f"},{"url":"bn-a6UE_Z1a.js","revision":"8f4627ff"},{"url":"brush-circle-CpWq5WRz.js","revision":"081c2511"},{"url":"brush-utils-B5xtY9tr.js","revision":"da893237"},{"url":"burg-creator-CRXgSyqx.js","revision":"f9808423"},{"url":"burg-editor-Dt6sjZKR.js","revision":"6a3b85d3"},{"url":"burg-group-editor-CyT0AnRc.js","revision":"1a023d1e"},{"url":"burgs-overview-Bry6pJaj.js","revision":"5d2bd53c"},{"url":"canvas-CQTwu-ri.js","revision":"14ac4c20"},{"url":"cell-info-BYd_-A6I.js","revision":"bd5de243"},{"url":"charges-XaoNl-VI.js","revision":"70b970c3"},{"url":"charts-overview-BRb32cpP.js","revision":"6f828706"},{"url":"cloud-DtPY66gQ.js","revision":"657383b8"},{"url":"coastline-editor-COo1_k7z.js","revision":"ed98e0f1"},{"url":"color-picker-BT4pL4-s.js","revision":"7e298fc7"},{"url":"color-utils-MHXfGsIt.js","revision":"cba94d35"},{"url":"compare-prices-BXvlLEHr.js","revision":"5066eb47"},{"url":"configuration-BtAjepSE.js","revision":"c4896005"},{"url":"connection-B8H4GuVX.js","revision":"327d276f"},{"url":"constant-CUk6ox2a.js","revision":"1abf13b6"},{"url":"context-menu-BmT6zOmT.js","revision":"dc732681"},{"url":"controllers-COq_bdk_.js","revision":"2bbbbc7d"},{"url":"controls-BoAobDe5.js","revision":"2141c164"},{"url":"cs-B4A1f5vl.js","revision":"986fe2c7"},{"url":"csv-DubBayaC.js","revision":"e51c16e5"},{"url":"csv-upload-BWfsGp1g.js","revision":"0da2c87d"},{"url":"cultures-editor-DtNcgEeB.js","revision":"7e82cc53"},{"url":"da-NyacFFOS.js","revision":"9143800c"},{"url":"data-model-BU4ftqdG.js","revision":"4ab601e9"},{"url":"de-BWJu0T1D.js","revision":"021b18fb"},{"url":"dialog-BYT3Byo1.js","revision":"60fefaec"},{"url":"diplomacy-C66t8Yz1.js","revision":"dbe2a072"},{"url":"diplomacy-editor-BVmpBqAm.js","revision":"893bfa48"},{"url":"diplomacy-overview-DymJQBe5.js","revision":"cb2edf0a"},{"url":"divisions-yddbEqou.js","revision":"c211cf51"},{"url":"drag-DVHtGrYF.js","revision":"49d2740e"},{"url":"draw-heightmap-BRP03faT.js","revision":"dd81499f"},{"url":"dropbox.html","revision":"f77bfd7c"},{"url":"effects-D0-_2Hc8.js","revision":"eb37a698"},{"url":"el-C6M1vApD.js","revision":"97e34de3"},{"url":"elevation-profile-ooSUUVfa.js","revision":"f9a9e530"},{"url":"emblem-image-DtnfW6hj.js","revision":"81f7d768"},{"url":"emblems-editor-9VkOjtmL.js","revision":"264c1e2a"},{"url":"en-BpPoOois.js","revision":"b4b8f52e"},{"url":"environment-BDBII_BV.js","revision":"b689f5f0"},{"url":"es-Btz5nCXi.js","revision":"d91c1da8"},{"url":"export-D_zkezcP.js","revision":"75ddc851"},{"url":"export-json-CwXfiFPK.js","revision":"74350cd4"},{"url":"features-overview-CFnT_LVV.js","revision":"67a28b35"},{"url":"file-name-CjjRnvM3.js","revision":"1dcd1d31"},{"url":"file-utils-CmE_irX5.js","revision":"55628c40"},{"url":"fonts-B2BtGxIk.js","revision":"09765c78"},{"url":"fr-SSD2TbHd.js","revision":"77f942c7"},{"url":"good-editor-CY8AmKyc.js","revision":"54b3e652"},{"url":"goods-distribution-editor-Q-dNeSm-.js","revision":"0b01f632"},{"url":"goods-editor-DmdnXjnp.js","revision":"58e0e916"},{"url":"graph-override-D_Dq9qWt.js","revision":"1156584b"},{"url":"grid-generator-cm7RQFp0.js","revision":"34405e81"},{"url":"hatches-B1Pf_eLY.js","revision":"587db5d4"},{"url":"heightmap-editor-BU6KNdwD.js","revision":"ff7a3397"},{"url":"heightmap-generator-D5tbj616.js","revision":"f9ba4da6"},{"url":"heightmap-selection-BKCIuIwD.js","revision":"ada63200"},{"url":"heightmaps/africa-centric.png","revision":"5983b84f"},{"url":"heightmaps/arabia.png","revision":"60e4b200"},{"url":"heightmaps/atlantics.png","revision":"297ee191"},{"url":"heightmaps/britain.png","revision":"184d3e92"},{"url":"heightmaps/caribbean.png","revision":"e3a7f190"},{"url":"heightmaps/east-asia.png","revision":"7a7cc7e1"},{"url":"heightmaps/eurasia.png","revision":"b39d203b"},{"url":"heightmaps/europe-accented.png","revision":"e83ef22a"},{"url":"heightmaps/europe-and-central-asia.png","revision":"a78319b6"},{"url":"heightmaps/europe-central.png","revision":"28f7f5f5"},{"url":"heightmaps/europe-north.png","revision":"5c75687a"},{"url":"heightmaps/europe.png","revision":"7f7debbe"},{"url":"heightmaps/greenland.png","revision":"403c79ec"},{"url":"heightmaps/hellenica.png","revision":"a26c47fe"},{"url":"heightmaps/iceland.png","revision":"9e6b3932"},{"url":"heightmaps/import-rules.txt","revision":"717d7d5b"},{"url":"heightmaps/indian-ocean.png","revision":"0fde55cb"},{"url":"heightmaps/mediterranean-sea.png","revision":"da56ae5f"},{"url":"heightmaps/middle-east.png","revision":"f7764042"},{"url":"heightmaps/north-america.png","revision":"a34787a2"},{"url":"heightmaps/us-centric.png","revision":"8f491da6"},{"url":"heightmaps/us-mainland.png","revision":"4d5b9521"},{"url":"heightmaps/world-from-pacific.png","revision":"64a9b798"},{"url":"heightmaps/world.png","revision":"71e82ef4"},{"url":"hi-Ci9XUuxp.js","revision":"e344b95d"},{"url":"hierarchy-tree-DNCHzWUm.js","revision":"4408ebaf"},{"url":"highlight-D9-ri4j0.js","revision":"3977c6ba"},{"url":"highlighting-DhOzxliE.js","revision":"688232be"},{"url":"hu-BH3zWIDV.js","revision":"32cd8f86"},{"url":"ice-editor-Cum14mYi.js","revision":"0991d692"},{"url":"ice-generator-BELtZZ3D.js","revision":"fba64770"},{"url":"icon-picker-Bu4verI3.js","revision":"0e36849a"},{"url":"icons-archive-J1g5tN7u.js","revision":"7934292e"},{"url":"icons-burgs-ReBU_fvu.js","revision":"092a3ad5"},{"url":"icons-charges-agriculture-BkSBg_f6.js","revision":"19f0d99f"},{"url":"icons-charges-architecture-B6c1gnbZ.js","revision":"0777f472"},{"url":"icons-charges-arms-MHy39wx7.js","revision":"f08258d1"},{"url":"icons-charges-beastHeads-nljepei1.js","revision":"0ea79c2c"},{"url":"icons-charges-beasts-BJIBbmh6.js","revision":"dd66b3a1"},{"url":"icons-charges-birds-BR1O6XNf.js","revision":"2d1a4c38"},{"url":"icons-charges-bodyparts-Bek01AVe.js","revision":"904e8f73"},{"url":"icons-charges-bugs-wwzDs9Zt.js","revision":"10044536"},{"url":"icons-charges-conventional-B1h0IKUV.js","revision":"4f7f02bd"},{"url":"icons-charges-crosses-DvoLrs4k.js","revision":"74995521"},{"url":"icons-charges-fantastic-CPjyu_wB.js","revision":"977b3991"},{"url":"icons-charges-fishes-i_9RlJZd.js","revision":"93f208a7"},{"url":"icons-charges-miscellaneous-aiWaz9Fc.js","revision":"0f6c6f47"},{"url":"icons-charges-molluscs-C1P6pZ7O.js","revision":"eb03a9e9"},{"url":"icons-charges-ornaments-BIVHdTrq.js","revision":"a0b6e89f"},{"url":"icons-charges-people-CCNS8tEr.js","revision":"2a6917cf"},{"url":"icons-charges-plants-COpZoa6_.js","revision":"69a07de3"},{"url":"icons-charges-reptiles-BuoBB69G.js","revision":"dbb20fff"},{"url":"icons-charges-seafaring-BeYFjgok.js","revision":"ee8f3c0f"},{"url":"icons-charges-tools-D6ZR0Kb1.js","revision":"5e3b0920"},{"url":"icons-goods-BaT7RnvY.js","revision":"8859bbc5"},{"url":"icons-ports-C3vqFXcU.js","revision":"5e981a40"},{"url":"icons-relief-colored-Buf_LRYD.js","revision":"26502bc4"},{"url":"icons-relief-gray-DOBSOXRD.js","revision":"bb498b0d"},{"url":"icons-relief-illustrated-Cgy8warU.js","revision":"87f49af5"},{"url":"icons-relief-simple-Z6-zpwYe.js","revision":"fc9df39d"},{"url":"icons-relief-stickers-DJ9Ev8_D.js","revision":"97c104c2"},{"url":"id-BjjntIr_.js","revision":"891ed12a"},{"url":"images/Discord.png","revision":"c286fac8"},{"url":"images/Facebook.png","revision":"d8f6fd63"},{"url":"images/Pinterest.png","revision":"8180482a"},{"url":"images/Reddit.png","revision":"1d9fb4c9"},{"url":"images/Twitter.png","revision":"3d4be405"},{"url":"images/icons/favicon-16x16.png","revision":"ef1dc52c"},{"url":"images/icons/favicon-32x32.png","revision":"85b2ed24"},{"url":"images/icons/icon_x512.png","revision":"96db41ec"},{"url":"images/icons/maskable_icon_x128.png","revision":"43deca06"},{"url":"images/icons/maskable_icon_x192.png","revision":"8df7457d"},{"url":"images/icons/maskable_icon_x384.png","revision":"29269c99"},{"url":"images/icons/maskable_icon_x512.png","revision":"a4549048"},{"url":"images/kiwiroo.png","revision":"61f54115"},{"url":"images/markers/ship.svg","revision":"2ab0488f"},{"url":"images/markers/wagon.svg","revision":"b886e64e"},{"url":"images/pattern1.png","revision":"5bed361c"},{"url":"images/pattern2.png","revision":"f0940ccd"},{"url":"images/pattern3.png","revision":"e17a59c5"},{"url":"images/pattern4.png","revision":"4c29905f"},{"url":"images/pattern5.png","revision":"27767e4b"},{"url":"images/pattern6.png","revision":"54e9be30"},{"url":"images/preview.png","revision":"d30e01fe"},{"url":"images/style-presets/ancient.avif","revision":"1f8ce67c"},{"url":"images/style-presets/atlas.avif","revision":"8c4871c4"},{"url":"images/style-presets/cinderwood.avif","revision":"c24dd37c"},{"url":"images/style-presets/clean.avif","revision":"c4cccc45"},{"url":"images/style-presets/cyberpunk.avif","revision":"48b0c56e"},{"url":"images/style-presets/darkSeas.avif","revision":"44b7954c"},{"url":"images/style-presets/default.avif","revision":"347a7e43"},{"url":"images/style-presets/frostbite.avif","revision":"bbbbaeef"},{"url":"images/style-presets/gloom.avif","revision":"0ab45eb3"},{"url":"images/style-presets/ink.avif","revision":"b622b205"},{"url":"images/style-presets/light.avif","revision":"7196d45a"},{"url":"images/style-presets/monochrome.avif","revision":"39b3cdd1"},{"url":"images/style-presets/night.avif","revision":"8d13e517"},{"url":"images/style-presets/pale.avif","revision":"6827632a"},{"url":"images/style-presets/watercolor.avif","revision":"e0c90db2"},{"url":"images/textures/antique-big.jpg","revision":"e018ce4b"},{"url":"images/textures/antique-small.jpg","revision":"18ebde80"},{"url":"images/textures/folded-paper-big.jpg","revision":"eb156d1b"},{"url":"images/textures/folded-paper-small.jpg","revision":"d4588330"},{"url":"images/textures/gray-paper.jpg","revision":"79d3e355"},{"url":"images/textures/iran-small.jpg","revision":"7a2c9c37"},{"url":"images/textures/marble-big.jpg","revision":"264f0ff8"},{"url":"images/textures/marble-blue-big.jpg","revision":"85017608"},{"url":"images/textures/marble-blue-small.jpg","revision":"7aa3717b"},{"url":"images/textures/marble-small.jpg","revision":"062aabd9"},{"url":"images/textures/mars-big.jpg","revision":"e835a07b"},{"url":"images/textures/mars-small.jpg","revision":"6cefbda7"},{"url":"images/textures/mauritania-small.jpg","revision":"8886930b"},{"url":"images/textures/mercury-big.jpg","revision":"1603b5c7"},{"url":"images/textures/mercury-small.jpg","revision":"334fbff6"},{"url":"images/textures/ocean.jpg","revision":"4fc82bfc"},{"url":"images/textures/pergamena-small.jpg","revision":"eeb50ab4"},{"url":"images/textures/plaster.jpg","revision":"0094ce95"},{"url":"images/textures/soiled-paper-vertical.png","revision":"0b33f76d"},{"url":"images/textures/soiled-paper.jpg","revision":"af3e72ba"},{"url":"images/textures/spain-small.jpg","revision":"c7fdf23d"},{"url":"images/textures/timbercut-big.jpg","revision":"1f009d0e"},{"url":"images/textures/timbercut-small.jpg","revision":"93c12f56"},{"url":"images/tour-button-icon.png","revision":"093d2feb"},{"url":"images/waves.png","revision":"d6665b72"},{"url":"images/whitecaps.png","revision":"02c85e61"},{"url":"index-Elh14QzF.css","revision":"4b511cdc"},{"url":"index-J388_yXx.js","revision":"37fcf2bd"},{"url":"index.html","revision":"fb22fe2c"},{"url":"it-BO57jJIj.js","revision":"535e3827"},{"url":"ja-BqMqXWtj.js","revision":"265b80d6"},{"url":"journey-editor-yTEmwSov.js","revision":"0a3c389d"},{"url":"journey-travel-BJ34uypG.js","revision":"17b52955"},{"url":"journeys-generator-RukuIhy7.js","revision":"f85e8a8d"},{"url":"journeys-overview-Db2DK4sI.js","revision":"a5c32b98"},{"url":"jszip.min-DHI56sS5.js","revision":"550a01ac"},{"url":"ko-DawOjQqM.js","revision":"39f240f0"},{"url":"label-arc-BCMl6n3_.js","revision":"37fce125"},{"url":"label-creator-DZVG8oPf.js","revision":"f0232cad"},{"url":"labels-editor-DyOagw8V.js","revision":"e4b33dec"},{"url":"labels-group-editor-CeRoY15k.js","revision":"4f1bb9bc"},{"url":"labels-overview-BA7M463F.js","revision":"1c83e9df"},{"url":"lakes-editor-BrsfCM2g.js","revision":"efe9aa92"},{"url":"layers-D3_jdNGw.js","revision":"c4291309"},{"url":"layers-order-CVdsfPAg.js","revision":"0aea5274"},{"url":"lifecycle-or7UMjxR.js","revision":"7e735da6"},{"url":"limitation-picker-CsGJQjm-.js","revision":"55f56133"},{"url":"line-weights-DMXPYRDE.js","revision":"3eb2ea6e"},{"url":"linear-DMtbbU-e.js","revision":"81f3d79c"},{"url":"load-9cSRgel0.js","revision":"965bed23"},{"url":"lore-editor-DqbitpPa.js","revision":"71fc0e82"},{"url":"manifest.webmanifest","revision":"b989c1f5"},{"url":"map-brush-DAi2Fk-i.js","revision":"d3ed7ab3"},{"url":"map-history-BpA0BOGb.js","revision":"fcd7fd3e"},{"url":"map-placement-DdlXEmyy.js","revision":"709283aa"},{"url":"map-restoration-D-c-Glw8.js","revision":"a3df6f2c"},{"url":"marker-creator-D3w3rAax.js","revision":"4b77157a"},{"url":"markers-editor-BT6UFqwV.js","revision":"fc998b5e"},{"url":"markers-in-radius-BWYXDtg_.js","revision":"c72e2fb8"},{"url":"markers-overview-CsYK5TFE.js","revision":"399ce3c6"},{"url":"markers-settings-BKAmEUAg.js","revision":"d9bb72bb"},{"url":"market-deals-overview-BeygvJmW.js","revision":"34d05cdf"},{"url":"market-overview-B2mJX4JT.js","revision":"faaeb691"},{"url":"markets-overview-CzeSNs1u.js","revision":"ad33d9cc"},{"url":"measurers-editor-CoG2yksA.js","revision":"cee4977d"},{"url":"measurers-generator-DazKvylb.js","revision":"b5a6a570"},{"url":"military-overview-CdimMJTC.js","revision":"2f89b503"},{"url":"min-CCch3uox.js","revision":"86bdc159"},{"url":"minimap-BUDY9nW4.js","revision":"fd2989fb"},{"url":"namesbase-editor-D39YUJwR.js","revision":"907a901a"},{"url":"nl-CpdQjaQn.js","revision":"ee51eacf"},{"url":"node-utils-BA3zRxIe.js","revision":"7c62c188"},{"url":"notes-C3Frhn9X.js","revision":"a199d717"},{"url":"notes-editor-BRNhOYRN.js","revision":"1b56ac31"},{"url":"notes-editor-DVB7LGv8.css","revision":"f77202e3"},{"url":"notices-DWyx0Rz8.js","revision":"1d7c6f06"},{"url":"number-Da26Xeod.js","revision":"92812e9d"},{"url":"omnibar-CqWA13LG.js","revision":"f13c7110"},{"url":"options-model-Cj3O8K4p.js","revision":"125b4e95"},{"url":"ordinaries-DXI0TOB4.js","revision":"79525c24"},{"url":"pack-CyBKcrr4.js","revision":"f082fa13"},{"url":"pack-generator-BfWP9wix.js","revision":"f2d7b28f"},{"url":"packed-graph-DJUG9s0n.js","revision":"4c55dd88"},{"url":"paint-editor-BC2eN9Nv.js","revision":"87a30da4"},{"url":"pictures-RPQk_Hx4.js","revision":"786e0417"},{"url":"pl-BqYpBZMm.js","revision":"b794223f"},{"url":"platform-C7bJU9gX.js","revision":"bb1c3ab7"},{"url":"production-chains-Cu75yzT7.js","revision":"e17bb7e9"},{"url":"production-generator-BjobV-51.js","revision":"f219e34c"},{"url":"production-overview-CDcYDl2J.js","revision":"44dba599"},{"url":"provinces-editor-B8WitnZ4.js","revision":"6e23d114"},{"url":"provinces-regeneration-x9f0n9gU.js","revision":"c6ab3330"},{"url":"pt-BR-4d7IvRP5.js","revision":"dcfa6f0e"},{"url":"pt-CVYilBDH.js","revision":"6c48403c"},{"url":"regiment-editor-CaWwdQGJ.js","revision":"931a1e8f"},{"url":"regiments-overview-YXdWkcfe.js","revision":"460414a1"},{"url":"registry-CwrTqJ86.js","revision":"f6d60ff3"},{"url":"relief-editor-DZMZHk-D.js","revision":"b9109cd7"},{"url":"relief-pool-editor-7bsPPvEI.js","revision":"e8e8f2e3"},{"url":"relief-previews-Dd4bQjw-.js","revision":"136343aa"},{"url":"relief-rules-editor-DuZHc97k.js","revision":"6271d17a"},{"url":"religions-editor-C7FFNArC.js","revision":"fddbe5c2"},{"url":"reveal-CnY2vi6M.js","revision":"b7fbfe11"},{"url":"river-auto-creator-CPmEx2AT.js","revision":"a6ecd3c1"},{"url":"river-creator-Bik5ckD4.js","revision":"a78b9420"},{"url":"river-editor-DWQKSuut.js","revision":"f1b9b8f9"},{"url":"rivers-overview-DOsPPdvG.js","revision":"549647f2"},{"url":"ro-Buk4wTt9.js","revision":"b0d30e2b"},{"url":"rolldown-runtime-COiEfhsA.js","revision":"174e7e98"},{"url":"route-creator-DxRXB3US.js","revision":"2f67af2b"},{"url":"route-editor-DP8tOwt2.js","revision":"532f2d4a"},{"url":"route-groups-editor-BTLVWzgF.js","revision":"aeef9f55"},{"url":"routes-overview-BSimXWG7.js","revision":"4fa66abb"},{"url":"ru-B4pbTBZi.js","revision":"45c47449"},{"url":"schema-form-NL1qgeG4.js","revision":"d3d53dda"},{"url":"services-1VYD3jn8.js","revision":"2c8cda25"},{"url":"shields-QQIBRbRT.js","revision":"20fc9de2"},{"url":"sortable-list-CJ8vrZit.js","revision":"b04890ce"},{"url":"sortable-list-z9wS_2BE.css","revision":"597f47cc"},{"url":"states-editor-0yPmCDJo.js","revision":"063c7325"},{"url":"stratify-CGdiYggi.js","revision":"171bdc70"},{"url":"style-DvH9t9pI.js","revision":"1d26411a"},{"url":"style-preset-Ck-VKUW7.js","revision":"0d60b0b9"},{"url":"style-presets-C4kf5CRl.js","revision":"f153540f"},{"url":"style-reference-BE783r2P.js","revision":"91df804d"},{"url":"styles-BNkHuKkw.js","revision":"e6d48b79"},{"url":"styles/ancient.json","revision":"39172320"},{"url":"styles/atlas.json","revision":"537658dd"},{"url":"styles/cinderwood.json","revision":"5696d6b2"},{"url":"styles/clean.json","revision":"3a9dd697"},{"url":"styles/cyberpunk.json","revision":"65ed46db"},{"url":"styles/darkSeas.json","revision":"5a197282"},{"url":"styles/frostbite.json","revision":"25be4c24"},{"url":"styles/gloom.json","revision":"67c767be"},{"url":"styles/ink.json","revision":"672dd06b"},{"url":"styles/light.json","revision":"07ec5b99"},{"url":"styles/monochrome.json","revision":"835cce51"},{"url":"styles/night.json","revision":"b80c3b0c"},{"url":"styles/pale.json","revision":"1e322783"},{"url":"styles/watercolor.json","revision":"ccb265bf"},{"url":"submap-tool-PTU_mSEB.js","revision":"269a2322"},{"url":"sv-DW_6BeMd.js","revision":"4f06a1e5"},{"url":"table-DIPbIlqo.js","revision":"3a65807f"},{"url":"temperature-generator-Cji0DqcU.js","revision":"f4382d54"},{"url":"temperature-graph-D2mhAyyL.js","revision":"153ed016"},{"url":"textures-BU55gl5S.js","revision":"1f97db4e"},{"url":"th-CSTQbTtZ.js","revision":"d664abc0"},{"url":"tinctures-CsgIeV6I.js","revision":"f7c1cb15"},{"url":"tooltips-D4kIN3ad.js","revision":"5a277b98"},{"url":"tr-7fOfJO6Y.js","revision":"e112bfac"},{"url":"trade-animation-editor-R4KqikUL.js","revision":"e79bdfcf"},{"url":"trade-details-zOQQezxx.js","revision":"6c5760fc"},{"url":"transform-tool-BpjLXw3r.js","revision":"89fed440"},{"url":"transport-editor-B93FlZx_.js","revision":"34891184"},{"url":"ui-tour-BpF7VbPO.js","revision":"69b42784"},{"url":"ui-tour-CWXCubYt.css","revision":"ff1934a5"},{"url":"uk-D6dMOn1M.js","revision":"b2980e05"},{"url":"units-DInzt-GH.js","revision":"bc7815b7"},{"url":"units-editor-Ce75ZwBT.js","revision":"b1296739"},{"url":"vi-ClLLqU2s.js","revision":"5ff3857e"},{"url":"view-3d-B5bmq5gU.js","revision":"4acbc80a"},{"url":"view-3d-renderer-BBkSbbCM.js","revision":"70b82629"},{"url":"viewbox-events-CPj_OlBb.css","revision":"81ec422b"},{"url":"viewbox-events-Hxiu3rT6.js","revision":"cd27f87a"},{"url":"world-BdGTrlJx.js","revision":"2df9cb36"},{"url":"world-configurator-BGYIOM-t.js","revision":"ed8f0d4f"},{"url":"wrap-tool-DOFc-8E3.js","revision":"faa09bdb"},{"url":"zh-TW-DksifhB6.js","revision":"005cdaf9"},{"url":"zh-r7nepuD_.js","revision":"8e3249e3"},{"url":"zones-editor-CbiBb0dU.js","revision":"cf592033"},{"url":"zoom-xenRyT_z.js","revision":"f547e5e1"}] || []);
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
