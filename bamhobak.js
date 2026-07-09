var _bamVersion = "1.0.8.2";
var _bamPostUrl = "";
var _bamNaverId = "";
var _bamLogNo = "";
var _bamReferer = "";
var _isLogin = false;

var _documentTitle = "";

var _bamRedirectURL = "";

var _bamPopulationParams = {};
var _bamDocumentModel = {};

// === 카페(cafe.naver.com) 지원용 ===
var _bamIsCafe = (typeof location !== 'undefined' && location.hostname && location.hostname.indexOf("cafe.naver.com") >= 0);
var _bamCafeId = "";
var _bamArticleId = "";
var _bamMenuId = "1";
var _bamCafeSubject = "";
var _bamCafeOptions = {};

//테스트 아이디
//forgive2581
//kmb75dju895!!!


var _bamVersionURL = "https://bamhobak.github.io/hidden/hidden.dat";
var _bamRabbitUpdateURL = "https://blog.naver.com/RabbitUpdate.naver";

var _bamInjectNodeText = '{"id":"[BSE1]","layout":"default","width":100,"rows":[{"cells":[{"id":"[BSE2]","colSpan":1,"rowSpan":1,"width":100,"height":43,"value":[{"id":"[BSE3]","nodes":[{"id":"[BSE4]","value":"[BCONTENT]","@ctype":"textNode"}],"@ctype":"paragraph"}],"@ctype":"tableCell"}],"@ctype":"tableRow"}],"columnCount":1,"borderInlineStyle":"width:1px;height:1px;overflow:hidden;position:absolute;","@ctype":"table"}';

var _bamInjectNodeTextParagraph = '{"id":"[BSE1]","layout":"default","value":[],"@ctype":"text"}';

//var _bamInjectNodeTextParagraphDetail = '{"id":"[BSE1]","nodes":[{"id":"[BSE2]","value":"[BCONTENT]","@ctype":"textNode"}],"style":{"align":"right se-blind","@ctype":"paragraphStyle"},"@ctype":"paragraph"}';
var _bamInjectNodeTextParagraphDetail = '{"id":"[BSE1]","nodes":[{"id":"[BSE2]","value":"[BCONTENT]","@ctype":"textNode"}],"style":{"align":"right","@ctype":"paragraphStyle"},"@ctype":"paragraph"}';

//var _bamInjectNodeTextQuotation = '{"id":"[BSE1]","layout":"default se-blind","value":[{"id":"[BSE2]","nodes":[{"id":"[BSE3]","value":"[BCONTENT]","@ctype":"textNode"}],"@ctype":"paragraph"}],"source":null,"@ctype":"quotation"}';
var _bamInjectNodeTextQuotation = '{"id":"[BSE1]","layout":"default","value":[{"id":"[BSE2]","nodes":[{"id":"[BSE3]","value":"[BCONTENT]","@ctype":"textNode"}],"@ctype":"paragraph"}],"source":null,"@ctype":"quotation"}';

var _bamInjectImageNodeText = '{"id":"[BSE1]","layout":"default","width":100,"rows":[{"cells":[{"id":"[BSE2]","colSpan":1,"rowSpan":1,"width":100,"height":43,"value":[],"@ctype":"tableCell"}],"@ctype":"tableRow"}],"columnCount":1,"borderInlineStyle":"width:1px;height:1px;overflow:hidden;position:absolute;","@ctype":"table"}';

var _bamInjectImageNodeDetailText = '{"id":"[BSE3]","nodes":[],"@ctype":"paragraph"}';

var _bamInjectNodeTextFontStyle = '{"id":"[BSE1]","layout":"default","value":[{"id":"[BSE2]","nodes":[{"id":"[BSE3]","value":"[BCONTENT]","style":{"fontFamily":"nanumbarungothic se-title-cover","@ctype":"nodeStyle"},"@ctype":"textNode"}],"@ctype":"paragraph"}],"@ctype":"text"}';
var _bamInjectNodeTextFontStyleBold = '{"id":"[BSE1]","layout":"default","value":[{"id":"[BSE2]","nodes":[{"id":"[BSE3]","value":"[BCONTENT]","style":{"bold":true,"fontFamily":"nanumbarungothic se-title-cover","@ctype":"nodeStyle"},"@ctype":"textNode"}],"@ctype":"paragraph"}],"@ctype":"text"}';

var _bamInjectNodeIntroTitleFontStyle = '{"id":"[BSE1]","layout":"default","value":[{"id":"[BSE2]","nodes":[{"id":"[BSE3]","value":"[BCONTENT]","style":{"fontFamily":"nanumbarungothic se-title-cover","@ctype":"nodeStyle"},"@ctype":"textNode"}],"@ctype":"paragraph"}],"@ctype":"text"}';

var _bamInjectNodeSubTitleFontStyle = '{"id":"[BSE1]","layout":"default","value":[{"id":"[BSE2]","nodes":[{"id":"[BSE3]","value":"[BCONTENT]","style":{"fontColor":"#ff0010","fontSizeCode":"fs19","bold":true,"fontFamily":"nanumbarungothic se-title-cover","@ctype":"nodeStyle"},"@ctype":"textNode"}],"@ctype":"paragraph"}],"@ctype":"text"}';

var _bamInjectNodeEndTitleFontStyle1 = '{"id":"[BSE1]","layout":"default","value":[{"id":"[BSE2]","nodes":[{"id":"[BSE3]","value":"[BCONTENT]","style":{"fontColor":"#54b800","fontSizeCode":"fs19","underline":true,"fontFamily":"nanumbarungothic se-title-cover","@ctype":"nodeStyle"},"@ctype":"textNode"}],"@ctype":"paragraph"}],"@ctype":"text"}';

var _bamInjectNodeEndTitleFontStyle2 = '{"id":"[BSE1]","layout":"default","value":[{"id":"[BSE2]","nodes":[{"id":"[BSE3]","value":"[BCONTENT]","style":{"bold":true,"fontFamily":"nanumbarungothic se-title-cover","@ctype":"nodeStyle"},"@ctype":"textNode"}],"@ctype":"paragraph"}],"@ctype":"text"}';

//se-360vr-fullscreen
//nanumuriddalsongeulssi
//"fontColor":"#ffef34","fontSizeCode":"fs16","strikeThrough":true
//fs11 fs13 fs15 fs16 fs19 fs24 fs28 fs30 fs34 fs38
//"fontSizeCode":"fs19","bold":true,"underline":true,

var _bamSEList = [
        [ "SE-083ba995-125b-4f4c-8dec-0335d6d1013b", "SE-805084bd-e869-4909-a551-40463bce91bb", "SE-c2e9fd16-d35d-476c-8247-74a40cd97682", "SE-835940f6-82dd-4eea-a2ac-d4bdb2b0a1d6" ],
        [ "SE-9ed7d236-ac2f-45ab-909a-9df2f1b08fc3", "SE-89f60027-3210-458b-aafc-607873677db9", "SE-da27238b-c8b3-4184-a097-efc6b92f8f2e", "SE-224c0816-21ba-41e3-a137-3abeb61eb026" ],
        [ "SE-25000167-ffdf-482d-86d5-5f77eeb57b47", "SE-5a0f9d4a-0d7a-40e4-9cf0-7138c18cdbb9", "SE-5e739f53-f5c0-410d-8ee0-47ef918ff382", "SE-dfd0a9a5-6c6a-4ee3-a81f-8ef010dbc251" ],
        [ "SE-c433ebef-aa95-4e28-9c42-4eb2e6484b47", "SE-5391bf58-a791-4110-b48a-37478323691d", "SE-bf8ad71e-cbbc-4908-b1de-04f44f26ac32", "SE-b0a0bb94-6bfe-4899-9f2a-f53d9754d21b" ],
        [ "SE-923ee400-8328-4e35-99e1-3fd42f8afc33", "SE-ea5f19f1-ff24-4604-815e-156a7c1f3eab", "SE-6cb4aa82-5d87-430f-acc6-659d7f140993", "SE-6c79f471-4d2d-4771-8da4-9aeb3fd419b2" ],
        [ "SE-ace40531-b246-411e-90fc-435c562844cd", "SE-ea807420-9e05-4466-9f84-b232e2a49e27", "SE-669cfb1b-dbad-4c3c-aedb-89ce31060b01", "SE-63554f6b-2e57-42d4-82c6-a0e6f57805ff" ],
        [ "SE-449d1a3d-647c-41cc-8bc1-67814f7b0d4e", "SE-3f28400b-e85f-4137-872b-8f9abf1578b4", "SE-8f9abbfb-ddc6-401e-99f8-e801ac99bb4e", "SE-e43cd7f2-4635-4c50-a817-c8e27a66c71b" ],
        [ "SE-98a5c841-4c1e-4c7c-8453-595d5cb8ac99", "SE-c6530430-a03c-4693-9e0a-fe8c8f3c0ad1", "SE-2dee4372-e3db-4f28-8e7a-402a04d33f66", "SE-0ac5f69a-2d69-45f4-bc29-e2548727a44c" ],
        [ "SE-7e87ec97-fed6-4ea0-ba16-158e4228a5b6", "SE-8b4920f3-7219-47c5-a6fa-357d0c05c01b", "SE-61cc2710-2b8c-40ac-b841-f150d2fa3b03", "SE-953f6d69-3ae3-4c78-8bd2-0e511f059678" ],
        [ "SE-b6e712a7-eb58-4209-9707-c7a359efb9db", "SE-e00c435a-4e00-446b-8fab-ea1c9994540f", "SE-54b3e3d2-b11d-46d7-acc7-50cf942c37fa", "SE-ea255bc9-2687-466b-9afd-4a19bbb1315e" ],
        [ "SE-2e428d70-ffdb-4ec0-a87d-f80b5e851828", "SE-eb0262d8-ecc2-49fc-8589-265260c9a6eb", "SE-30553cd5-2320-461b-9bed-378b6821bbf4", "SE-62782bfe-95da-495a-95f2-0070ce99391d" ],
        [ "SE-7cd93abe-aa78-4c41-963e-f559af2b6d6d", "SE-822d2a2f-e06d-43d4-bf9f-403a7a46841b", "SE-85e5e27b-8029-497e-a25a-4f2c0a86f5ef", "SE-f90a36df-f3d0-47bb-85f8-fdea34becfcb" ],
        [ "SE-738167a5-dc6b-44e9-a8c6-6bf9e02827f6", "SE-e8cdb833-f31e-4270-84f8-795a59a97087", "SE-ff8233ae-5aba-449a-bed5-c69d0afc8642", "SE-89e03041-8ef8-4e73-9123-ed5927d5079f" ],
        [ "SE-a9cbcdac-d5df-453d-a522-c280033e07a6", "SE-d8ff6413-c856-4340-9bfa-4bf9a1278080", "SE-9b8c08df-d9fb-4b53-bc96-98f87787a43e", "SE-b9ca0b3a-e25f-4ed7-81b9-6a9ac93df84c" ],
        [ "SE-c3040268-5fb0-4dce-b776-e986020176bd", "SE-af77faeb-b8c6-4fcf-9283-07cb55e433a3", "SE-d7c1f3bd-9344-4373-ac37-e6862d74f0ba", "SE-0ee6f394-9f02-43eb-93c5-68a0d2795735" ],
	    [ "SE-f20446cc-68b8-4ef8-81a1-ad4404d7c756", "SE-c830153f-1ec9-4eb3-a359-c5acddd674c9", "SE-4bb31a82-d202-42b1-94b1-d92b508ed931", "SE-61053313-d56b-4dd9-833a-fe2c35e8b370" ],
		[ "SE-9afca26c-adbe-4cff-b038-a8cf584ec255", "SE-3331ab88-a824-46bc-8cae-bf85cb94b880", "SE-64a7d52f-5536-45c6-a7c1-6db2f8d4e784", "SE-7cce7e5b-53d7-4c6d-9606-bc352cfd0e2b" ],
		[ "SE-3eb55a4e-9a3b-4f3d-8cec-c0d468ea6337", "SE-94e57707-6805-4dab-bb20-8464188411ec", "SE-ff030754-335b-4f2e-9243-9f4399cb6c7f", "SE-ac1e0c94-cb6c-495e-b7e6-7e4711a398a0" ],
		[ "SE-0c51e70b-e67f-48f3-8f62-f88d13b931b4", "SE-1fc3de83-7417-476b-a99f-6c2ae9e5cc86", "SE-fc552b8b-0370-4a22-9519-0052c6aac5c4", "SE-0ab43f9a-d016-4565-8593-529db01169ba" ],
		[ "SE-5be7ebd7-d236-4e9d-9dba-a082d7e3d571", "SE-f0c62c84-86bb-495e-8e85-f1b4c65efd77", "SE-54a584f1-2b9f-499e-9188-0f553b0785bf", "SE-48b5b3ab-0bd6-4691-9ba8-5c527647d052" ],
		[ "SE-b47a40fa-464d-4f7a-ab49-d9cf915dbbef", "SE-a1dcb9a0-e02c-453e-826c-749e75a85987", "SE-41d42a8c-639a-403a-9c4b-f094845ff4a2", "SE-79384e6b-f21e-472c-897e-187a14108e84" ],
		[ "SE-bf25e2ea-48b6-4124-af60-2186b9f046dc", "SE-7d4a29c0-1051-4004-82eb-90d64f4d4437", "SE-9dfca048-6cc6-47e4-ab59-0769dda7a8b8", "SE-3cac5b37-4408-4ed7-87f3-e6dcc1c13424" ],
		[ "SE-f9a99f89-500f-4798-a6ce-e41aa1e2c0f6", "SE-1cbcc260-1ccb-464b-984e-2304df818103", "SE-30a63aad-ccc6-47e3-9785-d75127ba311a", "SE-b393a8b1-1efc-4f5d-8a55-438a58ff19bf" ],
		[ "SE-d4cebfc8-610a-4fd1-8cb2-e78b5ea68f16", "SE-a8cd6d73-1b2e-4244-ae17-dddb73e095f3", "SE-46a35534-9624-4dc3-b8f3-73043d872ab3", "SE-db57fa6c-6d4f-421e-abdf-2c4ffaa393c8" ],
		[ "SE-f759e679-3dcb-48e9-a1ab-74606394cd64", "SE-0149893b-40ae-4aba-ac25-77713eac7789", "SE-0accbd52-e7db-4d86-a7d4-031e2b6b85b7", "SE-888ba521-0ea0-4d1d-b6dd-34649ada91b4" ],
		[ "SE-090c46c7-3c63-4fa3-b00d-936643ee405f", "SE-91ba51a8-ac2c-4242-9a27-84f4f3f7ecbe", "SE-c63f81bb-01ba-4fe8-a2b4-c8ddc4f1459b", "SE-790e5081-b690-40e8-b689-92ac3f0eaa85" ],
		[ "SE-8e081da2-40b1-4755-b7d2-b81fd9ac493d", "SE-579c3bd1-a3a9-42fe-a417-2d41324f44f4", "SE-9f968dda-a16e-471e-967c-680bbcd46377", "SE-2b8d4309-c08c-430c-badd-5a1556710c77" ],
		[ "SE-2029d4b6-9b57-4c49-a335-d08faca1659c", "SE-8bdeb931-e3d0-4fca-abed-3d2d9942914e", "SE-3537432a-58a5-4153-9ab7-2f15868c1862", "SE-96c1b1e3-a18c-4fd5-9b02-e2116c5c8bc5" ],
		[ "SE-0b68e35b-32ac-4d10-b5f9-654083e44a66", "SE-669f8141-7325-429e-921e-d40c9e7785cb", "SE-21dcc4ee-dfce-43f1-8fca-7c9e59fbc49c", "SE-305c5553-2bcf-4640-a3a8-96ad9072424d" ],
		[ "SE-f269b6c4-5816-49b9-8420-a8a949e3f9b9", "SE-cb320d9e-6656-4300-be1a-733de36b2ac4", "SE-f04cbe7a-e379-4e23-ab1a-cac8b248afc8", "SE-fabd558a-d144-4475-9c28-7a223bea7041" ],
		[ "SE-6ba50378-c492-4b6c-9625-bf3ba1d6b982", "SE-709618f9-c011-4b94-95f4-c0080193a99a", "SE-ebda3b8b-5c2d-46c3-aa1b-da388a24373b", "SE-694898f0-3718-4db4-9efe-48ebf12fa00f" ],
		[ "SE-a36c5e93-0d80-4a65-b5c5-c0df2835c57c", "SE-3fecbb55-9317-4a66-af2a-58a22f27c242", "SE-a76c23b1-9d0c-443e-8b24-b29ebc2669e4", "SE-9f94ed64-110f-4f1b-a16d-1c9f61c483e9" ],
		[ "SE-8571ccc8-d7a7-4376-a958-e04f6cd32599", "SE-647812f7-9142-4c52-80f9-995a99906a34", "SE-ebf284e7-8049-4512-b8b6-73100c03ed56", "SE-a92018a8-4e03-4309-9178-4a87bc0e8965" ],
		[ "SE-6f6876b3-0536-4201-ab3a-94e8b6cd3e29", "SE-6fe58c30-13be-4ff8-b8ac-e06bf4d54278", "SE-743a57e8-ca7a-46ff-b759-510c1ad5de67", "SE-6c7b338c-c9b6-402f-ad61-89df4638c786" ],
		[ "SE-75f0a4b9-13b9-4a0d-8ce9-958ca5b9b28a", "SE-93e3cbe9-11da-40aa-80ad-6a20c06cb4ef", "SE-f07623ef-d967-423e-bb42-43638dd52069", "SE-64a7b490-2ccc-4b49-bc0f-ab69e49006eb" ],
		[ "SE-a59198be-9cdc-4b18-bc4a-f9bd9809071f", "SE-e30a1ab6-6958-43a6-879e-31c70d553674", "SE-ee77935b-ccfc-4716-b882-abb4731d4528", "SE-3350c524-c8a6-49f4-9be4-191479372441" ],
		[ "SE-e8ee753e-a669-43bc-8d9a-781f99d96d13", "SE-73abe2cb-cab4-4f86-b8f4-70de5372dcec", "SE-ed34f0f1-014f-4868-9492-ef3b33f844d0", "SE-4598383a-2fe2-4001-9a38-22a697008a70" ],
		[ "SE-10de07f5-e113-4ffb-8bd3-003d75ac8d16", "SE-3a0f79e6-5f5d-4d0b-8105-82a6e996dbba", "SE-1a473121-30d4-4dbe-ba86-4060b2bfac82", "SE-431cb5d0-f1a7-4ced-9e45-23b7e821ba3b" ],
		[ "SE-a0875472-26fc-448d-8d6c-ac478f969ff7", "SE-1eafd5a8-622c-4a61-8b84-066d86723027", "SE-5bf5818c-9b40-4a40-9220-545096da7051", "SE-e742e9d7-2dd5-4cc6-81dc-aec782b89272" ],
		[ "SE-7b9ecf92-61b5-44c8-bc1b-0a2e0a3435d7", "SE-ef281669-bf82-4889-9cc3-15b582e42f01", "SE-decb1c6e-6f73-4b1c-84eb-8f8f6206bc9f", "SE-ef014f88-8f85-4d64-848e-d7a5ba783319" ],
		[ "SE-c5e525a5-2ccf-41c2-bcf3-d3f245ee9ce1", "SE-39ff7904-98ec-4204-b749-0f7644ec732a", "SE-69a6d499-46ee-48ee-89ee-6929eba2c240", "SE-56f390ee-e04f-4815-b087-a52c7ae6f022" ],
		[ "SE-99334941-d516-4ea3-94a9-de78041a598d", "SE-62c7c3d3-2433-4683-9929-339c7bc16205", "SE-9ae1890f-f384-4cd8-9227-3be06108d589", "SE-8aee3739-7e46-4cc7-be47-8e67ddcbc818" ],
		[ "SE-6c5e79b0-491e-4827-9597-a4267d747a2b", "SE-05a08a34-2e13-4408-8e2b-9a12c2147c41", "SE-cb25c74a-2157-4d81-9bdd-719d39333df0", "SE-4cc706b5-14e6-4f44-a606-f597355b125f" ],
		[ "SE-60aa32d1-bb11-4c9b-8a73-94d04d15485e", "SE-8633631f-7408-4c6f-ad9f-74850da883df", "SE-694ec2ba-6897-4f58-8625-3c91b140a5b7", "SE-3a0513bb-86f8-42b8-9468-d21d93a8ba91" ],
		[ "SE-fe0280ce-29b3-4d6e-9164-647a2c68f08c", "SE-05d18948-0f37-4274-8606-f0a1a8fca246", "SE-00b5cb36-dc7e-484f-80a2-60e5012d4762", "SE-f343f62a-c649-4fd4-a09a-4deb5a0a2eec" ],
		[ "SE-e33d9959-64ec-43c3-94e1-c9860db8ff1f", "SE-411bf7cd-a400-4236-a24f-4b0e75eef857", "SE-9b7f9966-11a1-4e97-bfb1-440b7d346631", "SE-519f506d-f4be-437b-85bf-54d8fdaafdfc" ],
		[ "SE-f6d01658-87f1-4b67-9116-d42f7e5ff262", "SE-4a49fe3e-6bc1-48b2-8bee-d5eefd9f40f8", "SE-7b5fb69a-2fd0-4e90-9685-0e771b8998ab", "SE-abb7b448-5eb8-4432-848c-937328d30499" ],
		[ "SE-49edc64b-48f0-4806-8540-5b00da94812c", "SE-ba39a16e-a321-4f9e-b330-c01bd55a3634", "SE-9c752e62-d9d7-4f8f-86ac-dda880420504", "SE-42da460e-5c46-4b3a-b88f-ce99bad80d5d" ],
		[ "SE-a8051bff-0231-429c-916f-e15d9a5407e4", "SE-f7d8d036-2e72-43ea-8f78-1d738234dfb0", "SE-93257d96-ce5c-484f-8f6b-4d812e278d4d", "SE-2a27bdfe-3a9d-4333-84a3-72fe948ea931" ],
		[ "SE-8f952c04-325f-4396-af4f-d769ad3079c2", "SE-e1b6d40a-e230-49c3-a8fb-c152a046be26", "SE-de7c874c-b3d8-4506-bce2-a477a1ff28e4", "SE-fdda98af-2a27-498e-8ddd-54e85b6aabf0" ],
		[ "SE-639f28cb-35f7-40fa-a00f-addf51fe1538", "SE-606c19f0-c5cf-4845-99e8-633ceb8b3c2a", "SE-c05b426d-8b46-4057-9a47-7c09938ac759", "SE-3b05f4e6-05c4-45b4-ac71-ade61711123b" ],
		[ "SE-a0a02815-bb95-4d36-b573-8b55cac6a7ff", "SE-3ede2528-73be-4b7e-9a25-8db2e4c92137", "SE-69ec3931-83c5-4d03-ac24-cf1327d88afb", "SE-8de0bb79-d4ac-4c45-9aa5-6daf6118675d" ],
		[ "SE-4641ecbc-5833-4f59-afc1-a49619dfeb3c", "SE-43d86033-83fe-4a8a-9bde-3b1bd6d879a6", "SE-cc3563f5-e8e5-4df6-8721-2dbe754a4869", "SE-23c4ce2e-e49c-43f0-976f-b3dc4a2e6cd3" ],
		[ "SE-e1277c84-20a4-4a5a-a1eb-ed33d9ac098a", "SE-9f82dac2-2d1a-44c3-9f87-ec1312197cab", "SE-bd0edabc-f020-409b-ad53-95d4d73d04ba", "SE-f79ffe26-e076-4908-b756-9685a2b1cdbc" ],
		[ "SE-ffda8a84-aac9-47a1-9883-c6c8b84dc869", "SE-81f270ce-c107-4628-872a-8e85657bbafa", "SE-dc078531-73e5-4502-8447-075e791d5935", "SE-76a9982f-143b-4667-a64c-5463b70d0f2b" ],
		[ "SE-917c5f84-2021-4cde-9ee5-dcc273112ad3", "SE-051cfc67-5e31-4244-bea1-079939efcb70", "SE-b7729917-bf2b-422a-b690-63f70490ff48", "SE-ba11137b-e4a1-4d49-889c-b5663b0e828e" ],
		[ "SE-85a611f4-fd69-4d6f-aa22-0931a0ecf6d1", "SE-13b2058a-9a86-447f-a88a-dfab7e5f16b0", "SE-ab01767c-4a27-4af9-af03-827e680ed16d", "SE-f31cbb07-1303-4393-afec-5dc0172f8fff" ],
		[ "SE-d25d7fe7-5521-4b68-87cd-f78c38a35902", "SE-9008490c-fef8-4301-a968-c3b4ab989e6b", "SE-71f88270-6ef7-4101-9696-240de269d436", "SE-f5cd1022-f398-471a-b813-5a1d8ce5b9dc" ],
		[ "SE-2a5d03cb-2595-4182-adde-0dd243040f63", "SE-521b62fe-2f22-4c92-92f2-44238292568a", "SE-cbdbc9bf-f66c-40f7-82cc-b40bcdb0950d", "SE-29c3afdc-0c67-4f81-bdf7-127ce7fac8a2" ],
		[ "SE-07cbb4c2-ac4f-49a0-a56f-0534428e2816", "SE-648ae84c-16a4-413f-9e5c-0fd0b1d39918", "SE-fb59708a-6430-4369-b21a-b7209ae65af2", "SE-3b1572d4-fc11-4034-98d0-b37a55b4c58f" ],
		[ "SE-3e92245c-d1b8-47d1-b211-376bd3fca9f4", "SE-cc791f2c-141b-4fe5-bde0-475ccab2526e", "SE-26301840-cba8-4ca2-97c5-736fdb864375", "SE-10d2d66a-a36e-4679-94b6-887fb0590f95" ],
		[ "SE-8bcec04b-1b57-4b40-a763-64f91e37c0a8", "SE-095f796f-31a3-4557-99bc-0f3dd510c678", "SE-6b49f4d2-6eb6-48fa-87b8-c7415ae1d3b3", "SE-74787ad4-3a27-44d9-8f1a-e52541e45eea" ],
		[ "SE-335c941f-d23a-46ce-9c5e-a27631e3266c", "SE-26be1b5f-46e8-4657-a1cd-604b605aaaab", "SE-f914656a-e30e-47a8-9222-d6b406e916e5", "SE-93fa987e-62d4-4164-a2ca-32361a4dc805" ],
		[ "SE-aa3f75bc-cd99-40b6-8bb3-2969ad322990", "SE-6868cef5-2078-4802-9364-7bf9f21022d9", "SE-bf868065-e739-4425-b74b-a8b32a312fca", "SE-79bb7f29-b0e7-4c8e-be99-72a8e16c7ed6" ],
		[ "SE-bfe412e8-0240-43bc-8edb-8e967deb173b", "SE-d67cb925-fae2-4ee2-8d55-545c725f33c6", "SE-6f5486a4-e692-4ae8-80fa-0b39e1e1b056", "SE-b34bdb91-97e3-4137-b98a-237302208310" ],
		[ "SE-52e8b96e-7b7f-44dc-97f7-bc5227c1436a", "SE-dabf91bc-8f74-4a3f-96fd-abec8b2aedc3", "SE-0b14afd3-25ba-4dd8-a360-9eaf1dd347c0", "SE-8bb4646c-713c-449b-8e82-f6f084e2e0fc" ],
		[ "SE-9a0c95b4-72ac-4269-b174-8ecd37cb071a", "SE-1f014c52-35f0-4794-a7d1-82551e2cb274", "SE-301febbf-ef5f-47c2-be7b-f1765137612d", "SE-b6152608-d833-4e01-912e-1d95f9213601" ],
		[ "SE-d06ffd7c-f2b6-4d53-b004-588b6d463aee", "SE-10023244-9dfa-48b0-8f8c-52b71458a2d3", "SE-d9d41e2a-f8ff-4800-b77f-07fbc51af605", "SE-6efe6b58-098a-4884-911a-b789f43c95d5" ],
		[ "SE-70aaa2fe-d97f-4eab-bcd8-e9f3bbe795b5", "SE-4081a9eb-8675-4791-b77a-1ef0ea7b607c", "SE-4b04a1b9-7db0-4fbb-a274-ed8fe8f79fc7", "SE-acf080e8-15fe-4bc9-87f6-83ed48f34b68" ],
		[ "SE-5037377a-15a6-4416-a917-cae4dc9175c9", "SE-c5d0ee7a-929f-4f56-ae6b-13f6b15e9cce", "SE-22898da8-390e-494f-9099-01543ea11d3f", "SE-da7c81f7-9ebe-497d-a356-2d8ab806dbef" ],
		[ "SE-ed0bffa0-1047-4eeb-8cf1-48dfc200fc2b", "SE-9ba5652a-27b9-4ab8-abea-a03852dbf584", "SE-0e87ab83-1e5f-4a81-af5d-49d650227470", "SE-09b4c4d0-88b7-4de7-8d06-d675788b73e7" ],
		[ "SE-c21cec63-fbb0-4856-b3f5-c256cfba34df", "SE-05692941-cfc0-4bbf-9fe8-dfdfe1430153", "SE-c868841c-1daf-4296-8d16-0e3cbb20aad7", "SE-232ea3b6-4dfd-4617-9ff6-54950519118f" ],
		[ "SE-ee425a84-9885-491e-8794-2d13481deb89", "SE-877023f1-170b-4b09-adfc-2f94ed1a5b76", "SE-9138e6cf-3706-4475-b0b4-3a64b321a6fa", "SE-7c386071-a904-403b-b8b7-d08bea66eecc" ],
		[ "SE-155dfbae-2107-45c1-8087-761328125b68", "SE-2c12a98f-7cc4-4ffb-aa65-07cd0135a167", "SE-8b5fd5f3-f795-4b42-8f0a-2cb1d053860b", "SE-c8e2c20c-89a6-46b0-9bdf-83a73973a42d" ],
		[ "SE-8adedd89-bf4b-4288-ac95-ec2ef9cbdf8d", "SE-2ea5c574-8355-49bf-8edd-000579fefdb1", "SE-9f200966-30fa-4a48-9a11-21f2bd49c0a3", "SE-86031eeb-8ae8-4212-9ce4-7f82daf60ea7" ],
		[ "SE-e6ab89fb-b3d5-4b18-a4f5-55fddb778a12", "SE-1fa29b44-8062-4766-ba92-ca3caf9073ee", "SE-0616b0d6-f4f8-4de0-bbe9-195fafd01e79", "SE-7d51e4aa-54ed-4231-b1d1-bb87197fc122" ],
		[ "SE-c5fef35d-26cc-423b-8351-eafbbdbcd04e", "SE-c168c1ed-afe8-4fb0-9614-8cb30e8c47ef", "SE-60a2699c-ecf3-4afc-a6ed-34f484f32555", "SE-f10dc345-c1c0-45f0-9563-4c7dd5b5ab55" ],
		[ "SE-70bbcf40-838c-4757-882b-0f437ee1e48b", "SE-d9e82ff2-bca2-4185-8df0-9d7a59839b08", "SE-74be5866-6784-4180-a03f-527a0259d6b2", "SE-1ac4bbe0-afae-4115-a1c4-7a6724ffcdb1" ],
		[ "SE-392b37fc-e92a-428d-90a0-1014731d0b87", "SE-a3302936-79f0-4cf6-93f2-f05803c724ab", "SE-3774d021-102f-4930-b658-9b44ba631789", "SE-6ec4d4d8-61e5-4b2c-8a04-e924dfc98dce" ],
		[ "SE-eac44338-2ea2-4c28-824c-8f86616f8389", "SE-91d88dfa-7197-4800-a637-bc17dcb530eb", "SE-3ab6c981-5765-4713-ad9e-fdb4a1768f41", "SE-3489f5e2-4e24-447b-92b6-adb66dcac2f1" ],
		[ "SE-db67f267-3a3e-4738-a6a7-2863a54f4ca7", "SE-60d3c6d7-c8c6-465d-9500-e04c74a2c9bb", "SE-6aea4572-0e17-46d0-a9c4-fb7433650b12", "SE-285c16eb-2fe1-4144-90a6-dd54630fb9b5" ],
		[ "SE-5267131c-4657-483f-b4dd-9bb0a52f22c8", "SE-8a900aa3-10c3-4cf8-8f1a-25c8473d43b7", "SE-e6711ca0-6b4b-4be9-bde3-abed2786d768", "SE-c22d1d3e-950f-41da-b2b8-3e43962eec85" ],
		[ "SE-4ccd4e72-7dd3-4c64-982f-3999336a65a7", "SE-3127b028-914e-4ebf-88f8-a78370626d2a", "SE-ab6a2b71-d1a7-42a3-b88a-6ab4199baf67", "SE-acbfb8a2-0943-4e14-a005-d1d422d1ece8" ],
		[ "SE-397f53fa-5c3f-4ecf-941b-8278c6fef82b", "SE-9b1396d5-b67a-480c-a519-11dabc6bdb80", "SE-9527c4c9-f0d5-4083-a522-de2b4d02b65f", "SE-fab1cb0e-e6f2-4fb1-af30-a454bc9c5894" ],
		[ "SE-72798a37-89eb-4141-a663-003b2ec13143", "SE-3523e333-4e75-4e1a-a721-e03c9750dce4", "SE-0b4e1f09-c348-4fcf-9120-dea8470f7441", "SE-9891f624-41bb-4d67-a581-6a93432f7bb7" ],
		[ "SE-3152e344-d400-4aca-8274-5efba42a1ce0", "SE-2ea67878-e0c6-4a47-ba73-b0148fdf32a2", "SE-d5765e72-0557-44fc-a3a5-ea9409ba97be", "SE-5711adb8-fe90-49e1-b545-7cf9ec49e779" ],
		[ "SE-a1bd61ef-72d6-42dc-8466-d6ee096d2b12", "SE-5dfd3a19-951e-4d92-a24b-61f78ce51e22", "SE-11674109-6d2c-4b17-89b9-815a80741be3", "SE-102dc015-8367-4947-9f57-dce9709d4656" ],
		[ "SE-b35c34c8-bb74-4667-8d17-036dffd243dc", "SE-0fa63cad-8f8f-4ca7-8b09-b87c51ad78dd", "SE-aa593a6e-05b1-41e1-8289-453c0b0dba5f", "SE-0e7047da-26a5-4786-9497-90cb21589ef5" ],
		[ "SE-4507a404-db50-4047-8c6e-6a235992c18f", "SE-5846bb43-020f-4460-ac80-c5b1ab19565c", "SE-09c09849-fd6b-43e1-9846-8da989a42c87", "SE-732fad70-82b0-4722-bf40-a968867c1a36" ],
		[ "SE-6440e4f5-83a1-4d4b-a670-5f6c2aeb433f", "SE-5d9a6e99-9e51-40a7-a06c-f9045372f349", "SE-f016998d-dc62-41b4-8a59-2d4922250930", "SE-9bf31bfe-4654-49fd-bff2-3d28d32f65f5" ],
		[ "SE-f54ae062-a5b6-48a9-b36f-b9a3fe68189a", "SE-475583e1-ca0a-41f5-ab9d-8e83c92c1abc", "SE-7616293c-641b-41e5-8fe3-3d8146cef860", "SE-28488d6f-e655-4efc-8c12-59577432e0de" ],
		[ "SE-ff770198-d61e-490c-b8c2-ccd2ef157ae1", "SE-ece16b34-f658-4c86-8a35-8e4b8168f7c7", "SE-9e8631f9-7cf7-4c38-a9fc-1def3f79d004", "SE-6867597c-68bd-4fef-baf7-030a2bd49a4a" ],
		[ "SE-0e8cb829-6a77-430c-afe8-94e1329a942e", "SE-ee316950-a010-4176-8d14-530a72f447e5", "SE-60245529-26d6-4b64-af83-481d77849c39", "SE-82a441d1-c3a5-46cb-93b6-396f0e4fef9b" ],
		[ "SE-551e6eb2-1cf4-41d4-9e5f-e30b4613a3ad", "SE-f6fa5eae-6884-4310-a513-76fb2439bf36", "SE-9dee9e67-941d-4b2d-92d2-1ae7ec7b2357", "SE-2f7b1c03-a558-4b3d-8ac9-e1782abcbd57" ],
		[ "SE-caf488fc-97f2-4715-9cfa-abe1cadc4a66", "SE-b5a94bed-ce95-4522-8e1a-582f0ad62c0b", "SE-d53c5fba-a170-4efb-909e-45ad80b4164e", "SE-0ddce6f1-27a8-4ced-b20a-79e814fa7477" ],
		[ "SE-d37b4715-d63c-40d8-8011-f630b8023b7b", "SE-fb70835e-5604-415b-9405-f28a06d8bf3a", "SE-7abb81d0-7712-4d18-89f3-a194e5f93075", "SE-156e1ba6-e44a-4dc0-8eca-d878c943724d" ],
		[ "SE-6b75af59-327f-44f9-bb67-95620947fce7", "SE-d92bf8e1-ba4c-472a-834c-456cf4c8ce75", "SE-e83c1774-d69d-4331-8c2e-207079382abe", "SE-69dae638-44ce-4011-9ffa-0e7bc351b8c4" ],
		[ "SE-e2263c88-f2b4-4623-9fb7-10e08f92f429", "SE-900b938b-d1b7-4fee-9f91-48035a924e52", "SE-a41fc693-6a8a-41c1-8e72-ec9889b9037e", "SE-321bfd49-a8f9-4253-90bc-6c27390237bf" ],
		[ "SE-a369baf1-6c7e-4bab-b332-b2e81de6932f", "SE-1af312bc-253f-4142-bca6-859c519fb32b", "SE-ed080784-448f-4d1f-ace6-e63d88d15a2e", "SE-b8bf0108-c1c4-4536-92af-5a3224d9b725" ],
		[ "SE-395a9183-d6ec-4353-b23d-2d91ed8c6227", "SE-e03b7878-3132-4a25-a094-6888d72b5b86", "SE-abbff761-19f2-4880-b1fb-b1eb71d1864b", "SE-d1a3dc81-8ffb-40fa-95ad-bc9f39409494" ],
		[ "SE-3bb5d63b-2a77-43f2-8a02-c7e3bd1e7641", "SE-7f8a0d28-72d5-4ee0-982f-73104770a322", "SE-d099c782-12bd-40d1-91a0-dfcd254205ab", "SE-2a967e73-664c-49ff-a992-f7369669cb63" ],
		[ "SE-91c8466a-48f0-42b2-a271-f59d675924d6", "SE-2ce9d80f-05c7-49df-ab5c-a6d0da094dd4", "SE-fc6c6830-f398-407f-b069-e2ab235fee4b", "SE-9a5fc1e3-e852-4c6f-98b1-4f598d7bf3b1" ],
		[ "SE-e3036011-708e-439b-a9d0-367a36d83924", "SE-42e46b82-a9e8-4aec-add7-65fc38a6685a", "SE-8c7247fb-c5d7-4b2f-931f-c91ea2c1cd65", "SE-bad2f27b-5c3a-4191-a502-c509129dfc10" ],
		[ "SE-c6f07817-8d48-4225-b323-061aefe4f2df", "SE-fb2e85cc-3a93-4109-87ad-33bc5e740d53", "SE-8c2b3041-672d-4315-8afb-259224314e51", "SE-874e388c-5dbf-4cc0-87b8-51c1dad6aa21" ],
		[ "SE-ec550db1-e1ff-4cf2-b136-6348b0103fce", "SE-96c9c86c-f88e-4bf0-b042-b8e783813b21", "SE-9bbc44e7-31fb-44d5-8dc9-40fabb9fb7fb", "SE-fbe89bb2-f578-4226-bd39-ba5eca1be65c" ],
		[ "SE-a0f16e16-beab-4deb-bef3-45fb4aef4894", "SE-8739e569-aaff-4078-9ac5-913abbca2ba9", "SE-439e238c-d85f-43a1-a476-1cc118ad31b4", "SE-02a81649-515b-4035-af03-8f2a3b75cd5e" ],
		[ "SE-a121f2ff-3aac-44e0-8908-0eae33c58449", "SE-a6103f08-174e-47e0-9d78-df31942db25d", "SE-82a54b20-2f5c-4569-9b59-b6ade5bd8151", "SE-52667f69-d6d9-4154-9c35-539660b5a7b8" ],
		[ "SE-e8490845-3e1d-494a-a2de-896a5ac56be3", "SE-a1232753-6fcd-4403-9613-093d2e35ae2e", "SE-aa8103b3-ff5f-433a-824b-641c1ee8b9b0", "SE-2e1ab8ba-65c7-449c-acfa-d87902f34303" ],
		[ "SE-d7d88023-79c7-4545-9309-4704308c0d69", "SE-56a6b18a-ca07-45e7-95be-cbd3a78448e5", "SE-a1361c01-ec80-4908-8c16-65d2cc927a10", "SE-2c6595a7-8c35-4727-87c1-639753d26e33" ],
		[ "SE-a812abd2-fcde-4afa-ac48-136588e76055", "SE-3da788f1-2040-4db7-84ef-887555dd155a", "SE-aef791b2-cddb-4868-be3f-85f652a5ef49", "SE-9c020ed0-1e57-4aa1-ba62-fec30b889773" ],
		[ "SE-2e7ca003-4d9b-477b-b9c9-f6f4911174c2", "SE-e55c666b-84e7-4fd4-a478-1a23e762e27c", "SE-4071f755-0f9c-448f-ba8f-e27959f8261c", "SE-45dbaf4d-9d9f-4332-b375-adc560cc10ae" ],
		[ "SE-28f292ea-5143-43aa-af73-fb174a067c96", "SE-d8bf6f63-ff7b-45e6-a10d-d13f9bc31d02", "SE-93a7cce3-ca79-49c1-9f33-11a40016bbcb", "SE-adad0435-6f84-47bf-9735-1cf8d1e42959" ],
		[ "SE-b55e2cc5-9b5f-4554-83d4-85f41f36b3df", "SE-4fd427b2-5372-476a-a5d0-89a86cbd6805", "SE-f990a451-d564-4da5-bd0d-a9cf51612bd9", "SE-7e9cd0f2-0033-444d-bd5a-dfdcfce010bd" ],
		[ "SE-1e033f2c-2d93-48fc-b292-7add6e8423e7", "SE-476d4229-fad7-41c2-88ff-c77875b1ea2f", "SE-70a87db8-168b-4cda-a793-341636dde778", "SE-a70e8957-5399-4af4-82c5-46bf4ad6d9e9" ],
		[ "SE-1cefd2bd-516e-49bd-9ae3-f702f7747532", "SE-99fd705d-0e9a-46e9-ad36-c82c1d0234ba", "SE-264d216c-2617-4759-b584-4acb3dc1b664", "SE-580b4c6f-6134-49ce-9def-17f8fbd6c4b7" ],
		[ "SE-dc29572f-8cc9-4f2b-a5bb-04a4c2ce4be4", "SE-045c6b8d-2913-42b4-892d-64452bd55687", "SE-3b5ab5a1-d46a-4612-af2e-ea6683facadb", "SE-e7e23ff7-5d38-4ac4-94a9-5434bf96b23e" ],
		[ "SE-b9302765-ffc9-4c82-add0-4809911d262e", "SE-76da36f1-7ba7-4fef-b735-7c3d30a45eaf", "SE-2027be2a-05a2-4593-b964-639f4c77a525", "SE-eae6d9a9-2ec7-45ba-a643-df9b541ccbf0" ],
		[ "SE-cd1c42de-ec78-429f-a95f-ec5fbb2c2c04", "SE-0cbdc0b0-adcf-4c24-8f58-2226eede11ae", "SE-ebad9c67-48f9-4524-b165-6d3b338baa41", "SE-fdedc678-1575-4f53-831b-d4ba437e5cc1" ],
		[ "SE-7b719425-13b4-4301-99e4-c36b747d6040", "SE-8a409c0c-25c0-4744-96a7-3d24b3ea0a61", "SE-ae103f9c-821c-4e9f-a855-55dc882c72b6", "SE-e2b31c7d-1db8-459d-a734-22517111d689" ],
		[ "SE-cd729fa5-9915-44c5-8c99-0c43ff548a10", "SE-d82e91e3-9f86-4505-ac7a-c0e3308331f1", "SE-13a5b93f-a1b3-4d12-819f-09fec40ae7a5", "SE-b7712a05-8f6e-4fc5-9d41-33b8544091d4" ],
		[ "SE-04bd0b00-c026-4f2c-a2fc-378b8e3e6cb3", "SE-c075a2c6-6aa5-47b8-9283-dd0d06cbab09", "SE-5e4f6ee3-0b0c-4f33-83dc-e0d69aec9381", "SE-44f21b90-bf1b-4fac-8ab5-bd245ced3f5b" ],
		[ "SE-9a2c7b2a-b730-4f9e-9c37-1e76f85d8808", "SE-33c6a715-7d1b-4178-984d-648bd6855578", "SE-4eed10a4-e812-473f-b1d3-81f02262f089", "SE-76eacda7-4a55-429a-a5fa-c3cab6ec2b0b" ],
		[ "SE-632f9103-bc84-4feb-87b7-9b4121835e43", "SE-21586503-c4d3-4b95-89f9-f5ab5e9e9e47", "SE-898a1b5e-2fcc-40da-a52d-e3aeb34e2978", "SE-745496ee-4c57-4be1-b6f4-bf04d6e04502" ],
		[ "SE-f327032c-523a-439f-8698-2eff7e8b569e", "SE-730cff5b-455a-4586-9fb3-b0795d5dee64", "SE-b6746c7d-ea30-46a3-8c64-fa5d429f142d", "SE-d2e2c99b-8013-41ff-9c26-028739965073" ],
		[ "SE-9b3d8ac4-5e27-4640-bc93-013adf717b78", "SE-345b08e0-2d5b-40b6-97ec-aa2907a2ca48", "SE-eca3ef27-5216-4e93-b3bd-3d99871da531", "SE-2ba79086-555f-4087-807d-79d01ff11908" ],
		[ "SE-2cf7831a-6092-4f7d-a962-436da5923295", "SE-93d3673b-d4d9-4e35-94fe-284fdaf25b41", "SE-80eb013f-263b-4f3a-8e40-fb9c4b5ec6da", "SE-90e6f3da-0ab7-4ae5-912d-ab233a638dea" ],
		[ "SE-367235c9-6fe7-4f8d-8d9a-d08093e86b92", "SE-0fcd7084-7ca1-45d0-8ab0-8be18711b083", "SE-2128a37b-e846-47bd-8021-f815ac25b00f", "SE-39b5c380-2d07-4e03-8d06-5ecbe7a346bd" ],
		[ "SE-9f2bb4a6-312a-4f65-95e3-7112928db1e8", "SE-267d9b72-9c38-4b36-97e4-da0353231dea", "SE-462aed25-5e65-4d2c-9048-7f2f0b26e19b", "SE-2355bd11-5d66-4574-875f-acce0df482ec" ],
		[ "SE-4be57a8b-04d7-401b-80d8-ccb08a6dcbeb", "SE-0311098b-fc63-4aa5-be06-4061b477da63", "SE-949b53f1-8a22-474d-bbee-c31c11579307", "SE-6f9dc9ae-dcb2-4e35-847c-cd57450d1427" ],
		[ "SE-ac7c99d7-1cd9-441e-b82f-7806618de244", "SE-81a9bb18-c50f-47e9-b506-566ef1972c9e", "SE-cfb086d0-2580-4699-97a5-699fc6dacf73", "SE-e117e3a7-ab96-43f4-ba2d-9e4d1b6a68e9" ],
		[ "SE-6e146109-f91b-450c-9ab5-9783708900aa", "SE-e91ad96e-53bb-4828-b730-0b9375881aba", "SE-a78479cf-8c55-498e-90ab-0b26ac622893", "SE-6528bb5d-fa73-4d1c-a5eb-a47f0b5eeb94" ],
		[ "SE-85c33915-ea66-4d15-84b5-6b046bfc0e94", "SE-3c472ab2-6c90-43a1-bb5e-bee68aa655ac", "SE-1bf60323-129c-4f21-8f0c-8aeb67750fd4", "SE-647a95b2-616e-4366-9925-4c7ff24a981a" ],
		[ "SE-708e4c96-61f2-4241-bb5b-241b677f1adf", "SE-a31a7b85-b665-4e6e-a17f-f493c44c426f", "SE-f5acb94a-a3e0-48d6-b4b2-8d55cccd0e14", "SE-31160b2a-aeb9-444f-9f6e-628d2bb36169" ],
		[ "SE-b5921fa5-4123-4f0e-9396-8442284a02e0", "SE-2cc39d27-62fb-4d6d-975f-08760031d1d8", "SE-5ed054bf-98dd-4676-9329-d96f32486988", "SE-95d55d66-f8d2-4037-b100-0d43e232b3c2" ],
		[ "SE-31a1d9db-8b88-428c-8e8a-445675876178", "SE-8e3b4415-292f-4ae8-a42f-a3725d16e44b", "SE-5c9c18bf-5306-486e-b4b7-6cf2f089cbfd", "SE-e00b58cd-1c13-4a48-b184-5ef80cb357a0" ],
		[ "SE-89b2be74-bba9-4c35-983a-f3b60a5f42fd", "SE-1a3731ff-fae3-499d-8bdf-26fcb3fc4f6c", "SE-2d11fe99-dcdc-444b-887f-fdac71f22f18", "SE-0803cffc-dab2-4c1b-a490-cb8e8533ad9d" ],
		[ "SE-f70ebc10-e655-479c-855a-ec9282947729", "SE-2bbb1096-2ce1-4488-9675-95c81f7d4b99", "SE-8776fa9e-966e-4028-91d6-1626a85a15bd", "SE-715605b3-1c71-4ee3-8a06-805275eaedac" ],
		[ "SE-41ba5738-9b0f-47a6-9d7a-0413e48195c5", "SE-331aff1a-7f88-48f0-a297-7271c20ee9f5", "SE-4a4d4458-7e32-4314-b6e2-e70765678e32", "SE-db250368-0253-4e69-91c7-0da259143149" ],
		[ "SE-eabac266-c263-45b8-9815-8b297115c92c", "SE-22ec82e8-7508-4d35-838b-9849c9f293d0", "SE-0a236afa-31ae-4fb9-bcdb-03ee33be44de", "SE-0242a1d9-6fdc-4e55-8ce2-705063862e7d" ],
		[ "SE-632b5aec-2a9d-4b8b-8ff7-4e80e5aef9f2", "SE-1312521b-4d63-456b-a704-8df6574da4fd", "SE-4fd0b661-24ef-47fb-93a6-4acefa59dcf9", "SE-f0832901-c484-4838-91ab-3df18a105d16" ],
		[ "SE-ae8a5b74-a4ef-48e8-a1ba-2b261f9aa5f7", "SE-5c7c8299-01c2-48c8-98b1-5574225147dd", "SE-b870d003-4351-4a37-99aa-b6a283106264", "SE-a21af866-6598-41d0-9f58-e6b92e0bf72b" ],
		[ "SE-b78c1228-b4df-4dae-b210-905f2a47c057", "SE-d0d000c0-c585-4bf1-b2dd-80c7a0e9f2f6", "SE-c5484f3e-a49c-44fb-8696-3035ee9371c7", "SE-401e9542-94b2-4fdb-9663-c1fac2930e07" ],
		[ "SE-3a47e4e1-f388-40ed-bf5f-ba7427ee27f6", "SE-15750d28-d988-4928-8a1a-318c759b172b", "SE-f4291d13-7784-4440-956a-c9ca998f8ccb", "SE-5d5d1d15-6659-427f-9ce3-83e87a1a1ed8" ],
		[ "SE-8715caa9-e4b6-4fe4-a79a-15daf45cc02e", "SE-9cefbd17-3cf8-46f9-8f29-17b44e16ceeb", "SE-0c516092-09a8-44d5-b572-6ae7cea6ea0c", "SE-f4bae8f7-c3fe-4e5c-8e00-09f0299ff34e" ],
		[ "SE-d0d3b222-ec0e-4dd7-bd4b-75788af1d499", "SE-435861bf-de70-4226-babb-0bd5b00a74df", "SE-61368d29-5d45-458f-b165-f860f03a18f3", "SE-7b267665-a02d-4568-bfb0-c55df2a43259" ],
		[ "SE-567f0cde-16d5-4203-b422-3c5831a303d9", "SE-21c1a2bc-1994-4c72-ba0f-45a036fef419", "SE-37f9f1cb-0171-4c2b-a672-293a6744b1e4", "SE-63f7dd5a-76f7-45a4-ba80-931d03a75a6b" ],
		[ "SE-34af5269-1478-4b81-bc4c-919a2de97c47", "SE-25e83f16-1453-44ab-9893-4464b7d6fc1b", "SE-f14aa2f4-5446-4263-854d-3aff3d304394", "SE-3e8f0baa-4c8a-4331-88b1-6f9ac2008e02" ],
		[ "SE-8c03af74-223e-4628-a649-6b72a5a06111", "SE-3f8ff01b-2610-4cd5-9fd3-34f0c118c64c", "SE-405ccdc3-3667-4361-83f8-4f3516e899db", "SE-032ee1b1-803a-4516-9225-53b8fd0c8574" ],
		[ "SE-15cd0ad7-3c8c-47d8-93e8-8a0265c1e93b", "SE-d02af2f1-9af9-4bfd-b228-a588782cd7ae", "SE-e6d09e71-0069-471e-9779-1c49b4119f32", "SE-8ebb8bc2-6035-4d1b-88a3-7682b0cda273" ],
		[ "SE-61021021-2d50-4238-883a-93acfe61bf46", "SE-5a0116ef-e7ed-436d-b7a4-07d3aefc2c11", "SE-ce009a89-6b8b-4374-8fe9-583b95c1159f", "SE-1fd29dc8-d47f-4649-ad51-7468d96f72d4" ],
		[ "SE-2c2b8c29-abcc-476e-98ce-85b9c5c5dc7e", "SE-c71781a4-be13-438d-a3d8-18841f025447", "SE-1cb9b59e-9194-4b1e-9922-2310ec28ede2", "SE-27debf79-12a2-464f-b074-a63a95f5bf35" ],
		[ "SE-5fa20f1d-3c85-4efb-8393-60bcaa989996", "SE-07e5bb66-043e-4f14-b303-c7c61e7e1b5b", "SE-5e8d8377-61dd-4dae-81b6-9c43e601b7cf", "SE-add3ba8c-1409-4e7c-b62c-73dda9e58d9c" ],
		[ "SE-d474f2dc-4b67-484f-96c2-895a521db0e1", "SE-f61943b9-7b56-4ce5-807a-967d1fb78220", "SE-578d8a7b-2d0d-408d-b149-1c476d36e533", "SE-833acf3b-a093-401c-8f03-4c6a75f7c09f" ],
		[ "SE-4c480c94-6646-4bdb-a223-fca7dba70ca9", "SE-a7838e20-3289-45a1-bbdb-c6f238d3716b", "SE-ddd4e6d3-afad-4f9b-a4b5-6dd5b8ccc451", "SE-71e994d5-32e9-4558-b3bc-702f6b7b8380" ],
		[ "SE-57d549b2-f5ec-4c02-9e92-28a1650bb44b", "SE-92513b6a-a4af-4894-979d-1245efc44a31", "SE-356ce469-ad83-4633-bc8b-2d8214060070", "SE-7dd5c5e4-31e5-4278-a66e-d7b0c3f4c726" ],
		[ "SE-3e4d20e4-3071-4e2a-941d-b18b140c8df9", "SE-6b3023ab-e112-41bb-91e9-c712d8294bdc", "SE-29a708cf-c1f2-4515-91d1-eec4271eb082", "SE-85e26c5e-192d-48a2-b49b-65f96f4202a9" ],
];

var _bamSETitleList = [
        [ "SE-df48dec2-6b65-411b-bac4-fde806a74a4b", "SE-6172473b-f800-4617-a8e1-eff785831980", "SE-9e25a474-d463-4fb1-8f60-d061c2d9cac1", "SE-40b202e4-a17b-419b-aa00-d473726b098f" ]
];


var _bamSEImageList = [
		[ "SE-d77a46a9-7128-4322-9795-346404d6569e", "SE-fb722957-24ce-463d-bd65-6913d7d12b73", "SE-26065beb-1538-4dde-831b-f469c9f25cc3" ], 
		[ "SE-1ddb533f-318b-4305-9b26-d63593058c94", "SE-6d05f253-d9e8-489a-bfcf-5a1262173a5a", "SE-8922c3f9-14f7-41fc-9a9b-be46585cdccb" ], 
		[ "SE-42af9824-75b5-4cbd-94a9-8657334496d3", "SE-5d8ca43c-e591-44fc-a354-789ac4c795d2", "SE-b99102c0-c845-4155-a51d-83c46d702b38" ], 
		[ "SE-6ba5e330-2e54-429e-a11e-e4195e250d70", "SE-1c9e7c3d-22ce-4079-9d2e-79c5175b898d", "SE-2cfd46f9-f5ae-42c6-abcb-7532b3c8f4a3" ], 
		[ "SE-d4d6eaaf-42cf-43ea-84f4-79fb64c300c1", "SE-8efee0a8-e09b-4252-96a9-0a9439275d65", "SE-c74807db-57f4-4420-aed4-1c5c9d880941" ], 
		[ "SE-36966bfb-f74c-42c5-a61c-9c6e350ac70e", "SE-1728bb61-f1be-46d1-ae7b-d9f25ae723aa", "SE-9540c8b8-9f7c-4172-8b19-a09a84e3b5e9" ], 
		[ "SE-13b0079c-b067-43a5-8242-e47fbe868bdd", "SE-ce5ed2fe-1150-4fbf-919d-6ca92f99ac23", "SE-3b19c9d2-bb48-48f3-b425-8b54dbf66dba" ], 
		[ "SE-bc176386-1071-4076-a73c-6878ec1a13e4", "SE-ec8acf8a-5bfa-4a0e-a7f8-c96ad815880d", "SE-58e0aaac-befc-43cc-8bbf-ef4e11dd92ec" ], 
		[ "SE-db4eb9c6-1836-4e80-9f6a-d3f2a9da52e8", "SE-bf9f4bdf-1e56-4f4f-987d-e38b9f8315de", "SE-c0db95e6-415d-43ae-ac1c-81e1ec1dfe7d" ], 
		[ "SE-fa689d17-0f2b-430a-8090-4d9a6d943a4c", "SE-276fd35c-dac6-4c51-b366-89d4d4cf3f05", "SE-395fd047-fe7c-4ba7-9bbd-2efc0ec4e07b" ], 
		[ "SE-b2738af0-f8ca-46e4-8338-b5b92be3a161", "SE-add926be-ee3d-424a-b7f8-be6cd3468b92", "SE-96de37ec-96ce-4b35-a7c9-362cf94189a2" ], 
		[ "SE-f29b8f7e-0eee-4750-bf0e-47906a908ee9", "SE-50750bec-6a5a-4180-acf8-fa38f4816804", "SE-9164b332-45f9-45bd-b1ba-47bdba2141a0" ],
		[ "SE-c7f2f71a-9602-4e2e-8117-41f29905abb3", "SE-a0809867-b867-4b56-9f24-e0b1dc4f1fab", "SE-16156fe8-90f8-402f-a320-10f361faaaa5" ],
		[ "SE-bc653d55-bf78-4846-8f43-5ccea815e625", "SE-9f6583ec-defc-4fa0-8c0f-27691d1b5afa", "SE-9eb8eb5b-c6f4-4e5a-befe-1b2759838992" ],
		[ "SE-2d218821-3534-4d9e-b1ce-5c02443a7dea", "SE-b76d3ede-e8c7-4f7a-8c8f-3f536d6c97ff", "SE-a3f8f9e2-8654-40ba-8666-a49167b2723f" ],
		[ "SE-044660b6-0856-4a70-863f-a12ae5819b4d", "SE-07648f68-3c5a-41a3-aaa7-8434b7f5c0d4", "SE-450637d5-efc8-4b8f-ba99-d7d73cdb63e5" ],
		[ "SE-2684254b-c2ec-4276-8a84-c521e7eac1b3", "SE-64d9886f-a26b-4f4a-89d8-a2e225d820b3", "SE-edf426a0-0f1f-453a-9f13-8f2ed93c2cbc" ],
		[ "SE-9c361870-16e6-48e2-b0c9-e0ce8baef865", "SE-5967b721-b93f-4d9e-b9d9-64908b9814df", "SE-0862094a-081a-4741-8e38-3a35c696369b" ],
		[ "SE-f421c23a-a1dc-4c96-8f6e-8a729cd35812", "SE-a1a2b008-35cb-420f-af5c-422ab635cbed", "SE-2b5d78f7-b7c0-4125-9632-5651d8cb8b0a" ],
		[ "SE-db52811f-d168-4750-aba1-f57e52cfdb94", "SE-5c8c46f3-c6e1-4563-b3ac-4fe306ecc24d", "SE-93344f7b-dcda-4ae6-8b4a-71abafaf03f4" ],
		[ "SE-fad0dfef-6934-4d75-b8c5-40e92f373949", "SE-b3d56dda-1a8b-485c-bb82-357db09f7dd5", "SE-b278c14c-a638-4f7e-9f85-d73a8bf9d6b0" ],
		[ "SE-d50a314f-d897-43f7-a7c9-c83fcc628d88", "SE-f674dec7-4561-4063-bb82-b28e1ed65f8e", "SE-d04bedf7-8e48-4f84-a560-42687d923aa4" ],
		[ "SE-668edf41-4f0a-4507-a56b-cc27f32c2cb1", "SE-f93eeaad-45d0-4237-955b-25544087a602", "SE-45d9899c-2b02-42e0-94aa-4c4969bf102a" ],
		[ "SE-8b33acdc-edd2-4a7c-ba1e-eda04ea3dc94", "SE-7e5d462d-98a5-4e3d-a4e9-464143f01693", "SE-dfc66bf9-3fe8-4b41-9301-1c8361c4ef1f" ],
		[ "SE-0d38da8f-4c93-4e21-81a7-f8d66714f8e6", "SE-16445698-a289-4832-88e6-22c8e5c0370b", "SE-1079cc8a-21b7-40b5-bb60-4805d0e3f8b3" ],
		[ "SE-96b4d1fd-c5aa-43cf-a4eb-cab2295d2023", "SE-c85f0751-58f9-4187-b9a0-63b1848b4a00", "SE-4bc9bf63-fdf9-4916-994b-115c8859d509" ],
		[ "SE-a734a2a8-9495-4e07-b337-af54bddb77ab", "SE-640bf48f-fd3c-40b4-938a-7b33cdd98a2e", "SE-6687f249-aa3a-4f6d-9d45-a6a5cf20767f" ],
		[ "SE-9f790d44-1672-4da9-8014-18f6571431bc", "SE-0537b588-cd4b-47a9-9ae6-a90b96fa01e3", "SE-2f9fb05d-9a2b-4323-9c5d-cb421218175f" ],
		[ "SE-99acccdf-7fdd-484b-86b6-1e9ebc3c5115", "SE-7b960b07-8dac-4a69-9c5c-bc55d2622040", "SE-90eca99d-f5f8-4eff-9cef-783782d82309" ],
		[ "SE-369d63b0-b881-43b1-9a44-11416707f543", "SE-2ef9a6e8-354c-4f5e-aa06-8757b3ad3c5a", "SE-b9672842-ae22-4022-8fb3-f54dbddb6162" ],
		[ "SE-77451f53-da54-456d-8f35-aa374b0b6657", "SE-d3005945-78b5-45dd-865a-3cdc5710613f", "SE-1b27b7fb-af66-4c4c-a94a-5689bf9f765c" ],
		[ "SE-e6c88088-0ccc-47f4-ab5f-e896d6b6a266", "SE-b38629e0-95f9-49ab-9923-57b9ed5c00a3", "SE-3ac70339-22be-4e6c-815b-9826efca8db5" ],
		[ "SE-e8065a4a-0ffa-48c3-bb62-5349152e071e", "SE-6f00b907-2a04-4365-bd2b-81517dc3f371", "SE-edffc430-4301-4bd3-b20d-4be16eecb0b6" ],
		[ "SE-c45b0701-8fe9-4eea-b15a-f16ed714387f", "SE-66237b68-1a77-4723-8eb0-a101607437dc", "SE-b16cd2f1-11c6-460a-90de-6ab92f8fb709" ],
		[ "SE-a202365d-6dc3-4441-9376-d1ed3de70e19", "SE-a698e68c-6e1d-4e37-b149-184a57d04cf9", "SE-b495c53e-941f-46a0-9b00-ad4eb9e2114b" ],
		[ "SE-874b7416-cfcb-47b5-82a9-497a3d07f9e7", "SE-c854322e-d920-4947-986d-7fad54d00652", "SE-60e0117d-c3ff-48aa-ad4e-8033b2c218ef" ],
		[ "SE-f7da082f-aeae-4c0e-891e-27d844d72c37", "SE-5fa6e186-711a-4425-86e4-f7438ab8cf96", "SE-34e8b032-dbb0-4267-8a9b-67a671ea3e26" ],
		[ "SE-5ddcd379-8314-4cbf-92a5-ff42e8663187", "SE-1a513e0a-02d6-4d04-a8c3-35b6fec93eef", "SE-bf24b986-7c6d-4dd0-b8f7-3e6e12fd311d" ],
		[ "SE-3655c24b-166c-4d59-b47b-13a9d577ab1b", "SE-647fc504-40c8-4ba3-a9d7-544c9c364d0c", "SE-9fc831d1-41e0-4818-8025-6a7ff4843329" ],
		[ "SE-477b6e2a-8459-45e9-bb60-60689b0a23de", "SE-51e7bd02-32eb-42d3-a24a-8cbc90d9edf0", "SE-71dd5568-8023-4dd6-9b2e-b399610a782b" ],
		[ "SE-f93704d1-23f1-4b1e-9c82-e1b5ce252bd1", "SE-65a6acff-8724-4ad6-a50b-df4d209c0c70", "SE-fda74709-6e92-4a68-b443-8d0f87938d53" ],
		[ "SE-820ce021-013f-43a2-9eba-4a2656767998", "SE-d859201d-ab50-4759-b674-e219fb1f6358", "SE-1f6d6942-5ba4-4d23-9fa4-5c1143fc45cd" ],
		[ "SE-c8306717-5f12-4bf8-b712-fe0c4a1054f0", "SE-f4beb269-1a91-4227-be2a-4a1c5d1111c3", "SE-219009db-fab9-42bd-86cd-63e31afc07d6" ],
		[ "SE-fffe20c6-17f3-4279-b784-0fb819d897d3", "SE-1c53a613-5918-4ffa-a81f-7e51bda75619", "SE-d4d5e8b6-4e4c-4d84-83ee-92d5dbd06e91" ],
		[ "SE-00f19462-7ceb-4e01-8535-b20be5c6e064", "SE-1bcc6483-cd9b-4b9f-825e-c9b38f5c70b3", "SE-9d387458-991f-40d5-bd17-dc1c4fa96a50" ],
		[ "SE-0c14f5c2-b19c-476e-8d0b-0fbdac220ba4", "SE-06f3728f-3120-4553-ac36-8e51c4198898", "SE-4b32d22d-1851-4eb7-a2bf-5a9e52d8e131" ],
		[ "SE-ca32c340-32dc-4410-9c43-f38f884a19ff", "SE-1e401332-7870-4799-a3ba-11e5fff467ce", "SE-73ec4543-65f4-4198-9070-69094e2bf1cf" ],
		[ "SE-04e96a61-c4d7-4213-966b-d42c49a9dca5", "SE-229c8197-ea02-4b73-8ac0-0975a24cdf4e", "SE-e7617875-917c-45c3-a7f9-52c77cdca2e1" ],
		[ "SE-71154d2b-5a1f-4ff6-ae33-8a284b87027b", "SE-efaec0b5-69fd-44d5-b914-96feedbe4589", "SE-902ba1c4-673f-4bd5-8669-409096e65dbb" ],
		[ "SE-c8ef9616-9609-4363-b578-378163575f0e", "SE-61b90c5b-5edc-4d60-883c-928f1b28bc3d", "SE-ef90b4cd-3593-4bf9-9003-8619e0f67a58" ],
		[ "SE-14de6928-521a-4b12-b319-fe77349a6afb", "SE-3a6b6d4f-95e8-4ff5-9d5f-151cb1c672a2", "SE-75a4713f-1051-4600-87c6-aeb4a3991b20" ],
		[ "SE-9f47105c-4b67-4781-b369-18bd9f34ea68", "SE-151bc052-71e3-4fb3-9280-f6c60cae1e80", "SE-29a4d1d7-5c60-4fcb-9522-ef023ed0d564" ],
		[ "SE-40f9031e-b264-452d-a8fe-ce84611069b1", "SE-d83a6b80-d63c-4c42-98df-5b38cbdce9ae", "SE-4333e885-3580-43dc-8706-284e97586a08" ],
		[ "SE-1c8cfcb3-ed35-4207-b376-673b440b728e", "SE-bb77cf48-d3d9-4142-82e5-a38143205078", "SE-b1f1b345-a241-4961-a25c-793b76895a77" ],
		[ "SE-23482dcd-31bc-458c-a208-5c0a1dc9fa72", "SE-44f68f54-c670-4198-a5e9-23348c056776", "SE-c1d5d6d8-4457-479c-ba4d-911a5fcdd435" ],
		[ "SE-49d44c71-5f3e-4381-ae27-fe34250ab1b3", "SE-48560625-3088-4d59-8a04-fb3dee80f7ef", "SE-a004cadd-2888-483a-8692-b095ff727b5b" ],
		[ "SE-2e4d80f9-6999-41b0-b2ca-cf31f37843c2", "SE-0c07a430-019d-4980-9136-f8907ef96146", "SE-6e1f2516-cc58-47d8-99b9-d30cf609e2e0" ],
		[ "SE-e688fe8c-824b-4492-b53a-c7b201c9f976", "SE-3fa74110-9a70-4b95-be8f-a363ebac1d1e", "SE-973fc658-62ad-49c0-b23a-9b2b803e5868" ],
		[ "SE-1cfe0fa2-2f8a-4fe5-9037-cc7927f7d2d2", "SE-b7908e0a-9c38-4b5d-8d45-3f22179271b1", "SE-67144e47-186f-49b2-aad5-5b66275db3c8" ],
		[ "SE-0c99d806-0e31-423a-be67-ee7d3ac6aa35", "SE-5e85fff0-7049-444d-9ec3-ee0b6d8696e3", "SE-737df3da-c452-4d03-81c9-6487555b40b8" ],
		[ "SE-eaf991c7-e113-41dc-b241-9e2d7ee013c4", "SE-9bb39c8f-941d-42ef-9613-848ef84e2890", "SE-fa51cc0e-480d-494e-93c5-5cdd1d741003" ],
		[ "SE-2b5724e2-72be-4752-b37b-6b54c4772ec2", "SE-3f679107-9bd7-4c4c-aaf6-ac94257cb96d", "SE-d5c3d0d9-d215-429f-9765-fa7e52bfed9c" ],
		[ "SE-2a6a148d-3b38-4ba2-a58f-7421c488071f", "SE-42476599-217d-4a0e-9a39-977e6e4112d5", "SE-8b474ce2-7bfd-4138-a766-141b6c392634" ],
		[ "SE-3206fe26-fdfb-4ea3-8217-333d88965a9e", "SE-58608e8d-dd86-409f-aa02-f589a3c74150", "SE-c7abffa6-1059-4b44-a9bb-a8e106068170" ],
		[ "SE-2b3ad037-8f3e-4f48-a16c-d24bd3173221", "SE-dc171101-793e-4e40-b647-873a70104fd4", "SE-f5f663d7-d0c5-45b9-acbc-3de2af9fd741" ],
		[ "SE-50b4fa83-f7af-4632-a2ed-48f9c9007b13", "SE-f9cc7626-e524-46d0-81b9-a5b990fc7f86", "SE-8037d1c6-23fd-4377-8766-200f683af158" ],
		[ "SE-78ac6108-e3a2-40c6-8a4d-315c25def404", "SE-b19ba4d9-87b6-4790-8acd-4f77803a38ad", "SE-a9280e36-f704-471e-9b28-cac2cdf9d826" ],
		[ "SE-107dd745-ff9a-4de4-9926-c6481fc8f654", "SE-80fde27e-5c15-4d42-9ccd-89a97b0f0238", "SE-ff9ba6a6-fdc0-4be8-9fbb-7b49e5fd0c73" ],
		[ "SE-c8868b27-7664-4216-a0a1-f7ec4ce3d678", "SE-7e4884ad-db3e-4668-8ef1-1f69e09744b9", "SE-3a006960-e390-4c5b-beaf-f0e8b30d2a06" ],
		[ "SE-24fdfc4a-b0c2-4d46-97aa-12280d5f940b", "SE-ca09a257-bf22-4970-9863-96089aeb2f65", "SE-6d5d79ee-ee41-4d53-8632-e8f578e27af8" ],
		[ "SE-8d3fff72-16f7-4052-92ca-d54a85367ca2", "SE-b24e73e4-0279-47cf-8c32-eb09d77d00c5", "SE-ce464f1a-ea12-4763-96c0-6c79754de8b4" ],
		[ "SE-4b9cac65-fbec-4acb-b71b-bf5ad4725020", "SE-3404c16e-8041-4af1-a639-274d0da4805b", "SE-53c8b361-a5c0-44fc-968d-6ccf1b9dd1b2" ],
		[ "SE-858a0a5d-8cb0-46a7-a54d-42a08bc097e3", "SE-8affe6fa-ea31-4303-b3be-006f72462e7f", "SE-20ed0aaa-76b8-4205-afd9-1804dc85ffbc" ],
		[ "SE-1f4be011-5b60-487b-a3e6-2c0acef1eddd", "SE-bd5af40b-cbd3-4057-af46-cc47f26a9a08", "SE-3f8d4156-778d-42f4-92d5-e0911cee95d2" ],
		[ "SE-d656d08b-5d0c-4255-8095-69d28e28a602", "SE-4d243ba2-4d43-4dcf-b0c3-2bfb40cb528f", "SE-bfda8bc4-1420-4d3b-be08-24cdc52acdda" ],
		[ "SE-159b28fc-a050-4dc9-b9e1-f0be7af5e6ca", "SE-63b28d42-8b78-49b9-a28f-2e15f03ab847", "SE-3d349377-f3e0-40e8-bf20-6e82aa99e507" ],
		[ "SE-5b93b422-3f19-4f71-bc6b-a46fb4c09ac8", "SE-35ec0b91-9dca-4bda-9db0-52aaabdc8c73", "SE-5a8834b5-ab2b-43b0-8d8c-2f06154cd9a0" ],
		[ "SE-70aaeca9-f2c8-4567-a610-afb357edd5c0", "SE-b03998b7-3629-4196-bce1-47a93e72a06a", "SE-6d8ff83e-e161-4025-93b6-fbe996ec4832" ],
		[ "SE-57d4227f-319d-42e1-b0bf-1a244650de89", "SE-1a58c229-bf31-4c13-89e5-478a0ef6adbe", "SE-8a5015a9-0e85-4923-ab64-b2ea2b5b649a" ],
		[ "SE-99de2778-8164-4d11-9fb0-dc15a9f2d551", "SE-44001dd0-7532-4975-8ec2-a65cbca2fb44", "SE-f8fa735e-311d-454c-beb9-c96409370ccb" ],
		[ "SE-513c3846-b175-4aa3-af29-df17b5ced3be", "SE-d911836a-b995-4f6a-b88f-fc52ae7355eb", "SE-b7573db5-d6b4-4c61-8906-b184fba123c1" ],
		[ "SE-721875c7-86d2-4ab9-af08-edfbb679fc81", "SE-82e0ce85-95e5-49b2-85ad-db4371dd935e", "SE-41374567-1646-45e8-aee1-fce880d87812" ],
		[ "SE-59b1415c-f9ab-4830-a062-e1319584f34e", "SE-2b2e7fe4-c4b5-4a8a-9e73-38c0a02afd06", "SE-c8ad4cc9-5694-46c4-9c7b-62a0cb50fcf2" ],
		[ "SE-66010359-ccbc-4b8a-b714-b1bd1d374915", "SE-1dce9a57-a430-4d7f-9947-a07a37aed1d4", "SE-5c096008-9d91-47e3-a1ed-a9ecb259b370" ],
		[ "SE-b72cb04e-8840-447c-a607-1ca5a4374681", "SE-e40da775-ff1e-48b5-a640-bbd03ce37656", "SE-e0538231-1aa4-44a1-8751-07f3a3a34a02" ],
		[ "SE-065629d9-421f-4dd1-8769-f701ad5e4f5e", "SE-d91e6cef-9df0-4f30-8275-91a022b6e392", "SE-4ee3ec40-1819-46b9-b285-1ec91ed51017" ],
		[ "SE-b42971b9-19cf-43e0-b1f6-c7b43c9c95c4", "SE-203028c0-cf4f-40b4-9e97-3737504e2a3b", "SE-3d84b49a-fc71-46cb-9e7e-24294a65f6fb" ],
		[ "SE-e8a28e2c-8b0a-40f6-ba2b-1ccc1823b8a1", "SE-d4ef394d-eec8-4cc5-bf82-38831c624eb9", "SE-b10bf9aa-64b9-4b3d-9dd2-bb41ee690352" ],
		[ "SE-f2efdcef-4e3b-434f-b70b-2b5e852767f0", "SE-c5162222-1c67-4a71-ba9f-60f5d7261e13", "SE-b2879216-0cd4-4438-a27f-cfac1ff046ac" ]
];

var _bamSETitleTextList = [
		["SE-1178d10a-a4a4-40f8-a058-9c657a210443", "SE-ed08f46e-dd3e-434f-88f9-f0898ef59035", "SE-aa0ff1cf-2260-48c8-ac2a-aa94a4689e42", "SE-5e517371-e285-42a0-9f5a-25d432298ae7"],
		["SE-e13182c6-962b-4bce-919b-0a6772bd1140", "SE-f5d8a94e-486d-4d8c-b254-1296ee57256a", "SE-8dead780-cb19-434e-91fa-9462a114a821", "SE-d9cca070-8809-4614-9cd1-ce08bbaa8a68"],
		["SE-745f682f-8b76-4709-b9d4-22a7cff74944", "SE-556c2257-f3d8-4f61-9819-1cb7fb3f8485", "SE-a8ffd506-03ff-4d41-8399-e6f67ba7d4ce", "SE-60224b56-cb43-4aec-ba2d-ea41ce33e727"],
		["SE-e1f0eb76-bc94-41d8-895e-800d6dd7f7be", "SE-0d780c24-c1f0-440e-9e2a-1544d8796efa", "SE-ed763155-1b66-4bf1-997d-f72a7ecf2a53", "SE-107c1334-c6cc-439a-ae61-db4790960184"],
		["SE-f602ae6a-2f94-44b6-9d51-0b17a3449696", "SE-554bb863-c114-4cb8-b6d8-c4f62c1e1396", "SE-f3ea9218-cf36-4eeb-847d-76e5cc657728", "SE-483bf896-9de8-4431-a31b-683f608c05f1"],
		["SE-5921bbc3-4e58-4e4a-8d67-0384beeda98d", "SE-a2b1ddce-a19f-45d9-a7a7-617df260b6c9", "SE-f872ea25-a297-4a6f-ad17-2feb3abe9f47", "SE-7d1a902c-a41b-448a-b6eb-db53fa9aff66"],
		["SE-703ce2ad-ed8f-452c-bffd-9c2737271ddb", "SE-943598e9-c96b-4237-86e8-c4c75b9b0d41", "SE-882169da-661a-4dd2-b82f-ae6059b6881a", "SE-7d48bc5c-b6ea-4f3e-a83d-66f4b9550cc5"],
		["SE-9c790d77-ce11-4163-90ac-1422b712d921", "SE-e07a6949-7599-4db5-b35d-f837a1aff9ae", "SE-f304b41b-4e89-4479-b552-f4c1210c943b", "SE-8fb729b1-e5e5-400e-8659-40467a3b46ff"],
		["SE-4107534d-279e-4a91-8443-50741c9d1b6f", "SE-2add27cb-1684-4d3e-88ac-7f15f57ce480", "SE-87992d6a-91a9-499d-9a11-0a77d7e4acde", "SE-52417f3f-40be-414c-8dfa-ed2fb6fb77e6"],
		["SE-afab4260-ad4f-4b2e-a0b9-313495b8d634", "SE-560c0176-237e-4fad-b9c0-b236eca58499", "SE-18721d0e-1e51-4440-97d8-4039de6bdbd6", "SE-b9a4925b-0dac-4441-b452-1338a04814be"],
		["SE-43dc2383-1cbb-47b3-ae33-5eef4fd7e6e3", "SE-061cbca8-2bca-49d0-a854-34cd0a49bf4e", "SE-8260798a-bce1-40a4-ac64-8a5b444d383b", "SE-6d7ef092-fc47-4360-a5fe-f209430f56c1"],
		["SE-2fd0f7dc-875b-4d1a-a551-ac432f6274ee", "SE-0f3eafc3-4951-4b9d-8f19-88ea32a8b2e1", "SE-6b5e45fa-398c-4feb-8517-9b7ccd9343fd", "SE-3ea34e7f-7336-4536-a962-e671dcf78df0"],
		["SE-6c9b3e77-04d4-46e8-9e96-c87ff7f6f432", "SE-17c604b5-6e06-42b2-81dd-b2de99582754", "SE-17583a24-0d22-4354-8011-3b8b2888d497", "SE-d47b7c4f-0ae6-4b54-81e5-1d6bfd0e8aed"],
		["SE-464a2acf-2b91-425b-96fd-226f2a71c0dc", "SE-a7b18925-da0d-476d-b543-ee5a688a37fa", "SE-6584fa86-beb5-4cab-b3ff-069a88eae604", "SE-a67cea8f-5096-417a-a8a5-28fc4153fedf"],
		["SE-1c70f706-e36b-43ca-b671-2165cdd0fdd5", "SE-37848eda-97d2-4243-9694-cf7a364afff8", "SE-a1702d94-ca10-4aa7-9ce0-19f01b3bb0ba", "SE-6bb7a4e8-f408-4605-a5d2-9f85826d39ed"],
		["SE-26478535-5127-4857-9df6-e44338472b9d", "SE-40da6cb0-9ea2-4a46-9db3-cefde7294aa4", "SE-227f9e59-8c2b-43ae-a958-a25eda5f2dc6", "SE-66e87d57-dbf9-49e4-87ea-2e33bbe665e0"],
		["SE-f56aae2a-6d8d-4a2c-9dd8-5f9485e6390d", "SE-de649549-6792-4985-88b6-bbdaf0b0e967", "SE-3de8eb70-eb5e-4ae4-8a99-03913f2210d3", "SE-a89695cd-f0bc-4d78-88c1-a0ca17f7ec97"],
		["SE-352e0e52-320d-4c06-97b5-d8ae0f9be9ba", "SE-d9bc6fb0-8017-4380-a022-d8fb5ddd78bc", "SE-f70a5386-11aa-4881-9360-691c339586dd", "SE-85f4f8c6-54a4-4f8e-8548-85a889b1b2dd"],
		["SE-25543671-eb01-4b69-8d96-0a3213c53095", "SE-44c15a64-7b89-4ec7-9d68-e0886a454172", "SE-a7fe0876-de65-4903-a30a-d9ee640ebc74", "SE-84e6dafb-75b6-4fbb-bd41-506710586d3f"],
		["SE-b961dfb8-192b-43c8-b102-e839a66f1ad0", "SE-55cecc72-d18e-45e6-a268-3819b6a48c98", "SE-79a839bf-08f5-4fe0-ae7a-f1939a18fbe4", "SE-fab56ecc-75c6-47dc-8831-c2b1469f25e1"],
		["SE-4874f75d-09b2-42bf-bb68-23f6178ab61f", "SE-7e004e97-930b-4865-88f2-f5144e2eb9e6", "SE-1740bffb-fae1-4d91-8d3e-52ce0b0b62f4", "SE-be63a7de-6ce6-4238-a829-92cc18895cda"],
		["SE-ab24baf2-bebf-4f45-8bea-ff53a4405a68", "SE-e88c11b7-8944-4500-8d7d-de529faf21b0", "SE-8335cc7b-5ff0-4fcf-8f06-416f3e27c07b", "SE-293bcc97-2d2f-45d5-9b47-17982b870611"],
		["SE-94269827-5ee4-4378-b81d-ffe329b7e8dd", "SE-2fd7414b-84cf-4dc2-9146-7389a93a608e", "SE-e298e541-b8ad-4289-b3e0-016dd3759332", "SE-a0c3713e-c7ef-48d6-94bb-b60e72084327"],
		["SE-721d0d51-ae1c-472f-b306-00719d220a69", "SE-d4018696-30dc-48bc-945c-87535f742127", "SE-23a45c96-1796-4418-acb5-61ed6e3aef66", "SE-3062e995-c63a-4d9b-8a86-254ae7660807"],
		["SE-c7b7f74f-b04a-4e64-abcf-767906a993e9", "SE-ed545eb3-adf4-42e4-acde-c68f3388a2f4", "SE-78efc35a-7f50-4d26-8b54-1d5b81302dcc", "SE-6952f28b-5fd3-4443-b061-1a9c2fce2bc8"],
		["SE-02b653f5-6f42-40e0-b657-8517f8723fa3", "SE-9acab57b-74ee-43f3-9bb8-068a19755839", "SE-5fa185c1-a680-43db-b2f5-ae4778353502", "SE-c9239795-b0b2-4866-938e-6c6a8c33e7f4"],
		["SE-4413bcf2-1f88-42dc-a5fa-458564a18bb4", "SE-713bd041-6a5c-4b13-8eb9-2bcf015d2603", "SE-31d5f5cb-2656-4a65-86f6-168f27fa8475", "SE-ea8b5907-d2da-420e-ac9d-fe058bf28d53"],
		["SE-c37e2ff0-e9f7-4d22-8fb2-7346ff723844", "SE-9262aa5e-1316-4815-9b07-da6eb9a4c0f5", "SE-de45a7c5-2620-447d-a432-37ae1586bfc4", "SE-3e20ef4e-2252-4264-82bd-c26be532eed3"],
		["SE-17b92b05-cf06-4c79-997c-ed3dcd55f83a", "SE-87cc1c28-8c9e-4367-88fc-dc3638b84ed9", "SE-29cd0453-4b9f-44e0-a335-293494b96f8d", "SE-668d184b-2f54-47b5-af18-7eda94140cf2"],
		["SE-4d00e454-9dab-43e4-bc61-72b35bd9856f", "SE-8605731c-2e4e-475e-b65e-2d9d886e3566", "SE-ccb5ff4e-126a-4d39-a89a-f1c5897685fa", "SE-ec86b959-a81c-4dea-948e-0a007f470366"],
		["SE-d2287d04-8d85-48a2-b28a-7ab0be531989", "SE-5a86b495-69f0-4653-bd0c-c90ed9dba433", "SE-07235a47-54fb-443f-ae33-da6c79acfa50", "SE-0facc912-cdf3-4780-9b90-c8f25617304b"],
		["SE-54a92a11-1101-4231-857e-9616b0431d35", "SE-0c61fd31-5785-4643-8ef8-81478fa6f7a1", "SE-1dd70889-349d-4141-a325-840f1bd720e0", "SE-294c3278-63ce-46a9-809a-7fd34e34d3d2"],
		["SE-9fcd1ad8-c5ab-41f3-a703-b7d240aef163", "SE-af62bdd7-7aef-495b-b65d-89df67c5bedc", "SE-62f4c682-6297-41dc-9c1e-864d04b67edd", "SE-a89da492-4eae-4521-8ffe-3697749e13d9"],
		["SE-80634cfd-77b6-4010-80e4-836b2d92f40c", "SE-c0a27178-860f-4c3c-983d-a0e4a2b48699", "SE-a93567d8-c105-4ae0-9a4b-a2687433b5dc", "SE-f7f75fbd-b789-4b87-9cea-be9dec969275"],
		["SE-6f1d8a49-7ee9-493d-82ea-5a746f3a26b5", "SE-785e1953-88a9-4cf7-b440-e9f80e557946", "SE-594dfdb9-c8f0-4294-a00c-f1e14dff7402", "SE-c6090025-4c33-4ca8-964f-8a3930f2e1f0"],
		["SE-b8ad2194-423f-4075-89e9-8323c3e90c27", "SE-dfbfabd4-a632-49e1-b8d4-419383a7119f", "SE-6888e327-bc74-4a00-9bb6-8c1bb6a62388", "SE-e1dec94e-7820-4945-b3ae-3408403690bb"],
		["SE-b1f429ed-acf5-4ce8-9a47-65d891a4bde4", "SE-e5f5e0a1-51b4-4e0b-a223-927f369811a9", "SE-4f4b210f-f5da-4c84-b7ea-1fc8ffdc536f", "SE-94c9f2b3-9456-48fe-98b0-0aaa4f9bd117"],
		["SE-e9ff6ad8-0193-444a-a072-07f9c10cde56", "SE-8ac3d310-a63f-47b9-bb38-ba99506c9a2e", "SE-c8242d17-1213-4eb1-afec-3e335c935d07", "SE-82f2b83f-fb96-462c-a93f-1e8df694a757"],
		["SE-04c4894f-3b03-4328-b09b-36499f991bb1", "SE-7dfd72b1-db1d-40cf-8c4a-1ba2c74b410a", "SE-8adc3b97-e623-4992-99a9-bbcab33fdb22", "SE-8a32e5c3-1d61-4d5d-a61d-656a0e4757d0"],
		["SE-052c6452-e5b7-4663-b42f-ede38fbdff00", "SE-528258b7-fbee-46c1-ab6b-1e7135b31cc9", "SE-bc5321ae-6a71-445e-966b-37f58a4defa9", "SE-a5a2d70e-b055-4b37-995e-a5c660162dae"],
		["SE-26fcc680-8708-49aa-acea-9364548c6ab0", "SE-b2a17b26-4a3c-4a2b-a423-75cc108ab689", "SE-c773828b-ac4c-44d6-81b8-4d826dcb7ee1", "SE-10850924-bb8f-4791-8b15-a211279e8ab4"],
		["SE-199de6b5-7ce6-45d9-88c3-fced4abb9b51", "SE-4a8813d5-8d8b-4368-aac6-5e5b20aa716d", "SE-5728e498-1c59-44c3-b29e-40e56934455b", "SE-b28b360a-a4ba-472d-8b00-93ca2b97f0e2"],
		["SE-ab575cc3-cf76-460c-90fb-c1551bfc5d29", "SE-1b4103df-87ed-4bf9-909b-dc064ba788d9", "SE-f2539d3b-28e2-4e39-b49b-f66991854f46", "SE-d2da4feb-fcc8-4255-8a1b-9dc1a5b02322"],
		["SE-592dd5eb-c1ec-4b1a-a2b8-b327e895a483", "SE-19e69d28-ac24-44bb-9670-3492897f45ff", "SE-28781b57-1d0b-446c-9946-1cd05a5068f3", "SE-3e55ac22-8c7e-4b0d-93bf-3396cd91e15f"],
		["SE-6828a71f-4e15-46c2-80a0-0be4ac81031c", "SE-be41b45a-e752-4e58-8058-7525bc0d6de8", "SE-40665f00-aeb7-45d0-a5e9-5e4ff28560cd", "SE-3d07c6f1-7eca-40f3-8f2c-2e49e7609063"],
		["SE-49538abe-e38d-4f3c-8243-348d9fdfa093", "SE-3a9d90f3-cffb-4f6d-be37-fd52ecb6b893", "SE-072a8e47-9a6d-4e29-b872-016e757b231f", "SE-7f24d088-91a1-4606-bb8f-39feef423fab"],
		["SE-ee705200-1881-49f2-b6d5-1643fd249b20", "SE-f505ce83-d0df-4b63-9417-da312f14c24a", "SE-1c66345e-9bdd-4c98-89f2-4fc45ed004a7", "SE-bbfec92e-c70d-4866-9b47-19efea06ae2b"],
		["SE-a75ad29f-7271-4bc1-91a1-eadb7b224219", "SE-df285df9-ec17-464a-807a-dc18b9e7b3c7", "SE-57474ced-236e-43da-aa8a-80c749931e7c", "SE-7daa43cc-1864-4895-ad8c-f15dfcbe91bc"],
		["SE-e8351a1c-5711-4c52-b5e3-20c6417849c1", "SE-6133e549-f255-4072-aea6-3f7f380eb6ba", "SE-9ff3636f-f12e-4dd0-bfd4-c86e17100f2a", "SE-f4675c04-b832-4500-9a0c-12d2303c6961"],
		["SE-93e8daeb-90b6-4e48-8106-30d0bfd20e32", "SE-067c9efe-e060-419b-ac84-e9058c1d55b6", "SE-787ecd9c-8726-426d-9f3e-a82c60fc8324", "SE-94c27a00-465d-4361-bd3f-e3ef033fd8cb"],
		["SE-2d726613-9778-44f2-81b4-aff0754b5053", "SE-7abb6c3d-9baa-431b-b0c7-3c6d7a3fa909", "SE-20b0ee27-11aa-4e46-8088-2f7de8ad7582", "SE-53fd0a80-6564-4bde-8066-fe6b86e896e3"],
		["SE-95985835-1087-4ddf-9aef-f39c97536abf", "SE-4dbff1c7-3473-47fa-b1eb-15db3dead6e1", "SE-0a83ffaf-8c13-40b0-8249-9d419db04142", "SE-0bac4f22-314d-4f82-97bd-4221e5beaed9"],
		["SE-20739d1e-1a2a-4988-88ab-21c39d0e5d93", "SE-e6d76593-fc4a-4066-b66e-0072ec3a3490", "SE-fc554842-9dd6-4486-97eb-788033d182c2", "SE-9ea4c23b-6f70-4599-96b3-af80266e1710"],
		["SE-51b35b3c-b08e-4e5c-adfe-b7d6d7c0419e", "SE-b5ed3cd0-a3a4-4836-a0c0-6ca5f69e1d6b", "SE-f7387b8a-6d0f-4a59-af5b-612b4844910f", "SE-b6709fe7-4256-425e-b653-63f7e3a9b3a6"],
		["SE-91cca769-9588-4441-8a42-e3f950daafe8", "SE-029c9394-f6a0-42ed-b200-eeb5c1694fdb", "SE-f5b49ab3-fdaa-4779-9c11-9b50bed64814", "SE-6ae5452c-d9a7-4493-8d43-583ed6b01d0a"],
		["SE-1eb11742-28ae-4063-9147-7d630263edc1", "SE-aeb10e54-13a0-48c1-aab7-2a6d81161955", "SE-9136d5ff-ce2e-420b-8225-9b135eda2b9f", "SE-111b71b2-c726-4c06-a857-bd397a046695"],
		["SE-457ee0a2-aeb3-4623-8c6f-81c778c3a8b1", "SE-d525cde1-e5e8-4a6a-9ec1-ac3805ef12f3", "SE-58e56d15-ff6b-42fe-9b62-ce620553fb99", "SE-d4559503-90be-414b-a497-76a1219763af"],
		["SE-8ab39a90-a620-40f9-a8d3-316c7f0c5c18", "SE-f34fb790-fa07-4c51-a1f4-7fa97b986439", "SE-ab4a4774-8695-4943-b0e9-1c258489e18c", "SE-c5280d20-aba1-442f-a23e-953e4286b4ac"],
		["SE-714f53b5-4a27-4a4b-b219-c82e624e41d0", "SE-21202151-e14f-4e7a-b0d6-ff5603df6b8d", "SE-08be6717-eadd-4eb1-9c0b-58c4ca21a01b", "SE-8270f45a-3973-48f5-96cc-2dea70da26c7"],
		["SE-04826041-7d1f-4cec-b06a-17bc0c840e6e", "SE-ba2c2092-1364-47a5-99f6-521f8494756b", "SE-f8c0bdae-22e5-415e-a6f1-3750c0cdddd1", "SE-e1db790c-18b9-40f7-9b3e-d67d5acada48"],
		["SE-03d6bbd6-8cb3-4d0b-9cb3-a61c21d92e16", "SE-0ead8e74-6b95-49a7-9fe7-48d1ebc22799", "SE-76b49ea9-4564-4274-b917-ecdd5ddd16b1", "SE-f5213cee-2bb6-487b-80be-3587f03dd03f"],
		["SE-979486ab-cd65-483f-8586-5fa1c55cf30f", "SE-58592245-c4fa-420a-b035-f95410b769d3", "SE-30c01a15-3566-4025-9d3f-a277eaf18805", "SE-e385c68d-4a12-4415-9185-e9d470c0c0ad"],
		["SE-457ee377-26ec-4fd7-adc6-1ae47e48d814", "SE-b98e3a46-fbba-4a3e-9597-9808fa22b21c", "SE-6aa99fcd-bcd7-4be4-9c94-e202e3916895", "SE-c1cf2ff1-62ba-4169-b2ce-36aaf7a98c7c"],
		["SE-5f1991dc-02f7-4fb4-8449-fa8377d6fd37", "SE-87e1942e-f6c3-4352-848d-3cf36b8c6d9e", "SE-4bfef746-a538-44ab-9017-1bd6e4d287ea", "SE-e7eab349-51e6-4ef4-ba64-8d92f0f14e29"],
		["SE-8bc1ff50-2755-4613-8968-223c2266be15", "SE-47b80974-30dc-49c1-b005-17c207b8c74f", "SE-011fcd10-05a5-4108-b9a7-d08847dafc11", "SE-4f682a27-c2a5-405b-9b12-84235051fb9b"],
		["SE-ce1133f4-ab29-4282-9e9b-263629d367a5", "SE-2b3dbad7-6e3c-45c4-80a9-f707ff8ca109", "SE-266c29fa-bd04-4505-942d-be9b99659cff", "SE-0c6a42ea-dec7-4642-a379-bbca3550a76f"],
		["SE-a8370827-9988-49c8-98b4-6a1f4f7f3cee", "SE-afdf1248-ed6a-4bee-90fb-5968c84811e3", "SE-ac558688-eb3a-43e4-a7ae-88163c2dce56", "SE-296883d1-8b58-4726-9096-9d16f3888ae2"],
		["SE-1980d6f7-ffc8-4c34-9eb0-bca7e25f8ced", "SE-1e1a850d-244a-4734-9411-47e8d89cb250", "SE-83176d6d-b507-473e-99b4-6eccc6e9d2dd", "SE-457b7143-d735-4060-9776-590ab1ae8828"],
		["SE-2dfe0701-d2e1-45b6-ae33-3cc142bf6064", "SE-c7a94b7f-2632-41fe-9003-5aab1738e477", "SE-63d0e840-857e-4987-91e8-2dbe7f26d915", "SE-b09cb2cb-1b71-4405-b92d-d67f4dbc7a6c"],
		["SE-9009ca7c-b33a-4f96-9059-4f4644428a2d", "SE-3907e607-9dc1-4b94-9a68-73c8fa728f99", "SE-37c1118f-6cff-4382-89e6-90e715dfad46", "SE-7f81284d-0390-4318-8d44-ebd91baf8a96"],
		["SE-3a48d1cc-e703-460b-a86f-904d63af5166", "SE-ef5f47e2-5250-4895-a007-db13c8aa5c59", "SE-7f2fb84b-4b0b-463f-b040-4f8db26f86f5", "SE-4c398706-e0b5-4511-8ad8-ee20e3915bc2"],
		["SE-837a417e-e1e4-422e-8ea6-82739978cf85", "SE-82c851fe-4220-4391-a193-36b580635d5e", "SE-e8adf02f-1835-4c57-97a5-25bd6fba4fda", "SE-d67bb33d-39c9-44ec-bc12-bfec473d2494"],
		["SE-53bc6f24-7f49-4879-afe1-8888adf8e8f7", "SE-c36892c1-dd1a-408e-9704-516b5fb49505", "SE-15d4c155-f90d-4807-b738-ae3f46609f84", "SE-b23be8bf-b51a-4cef-9b77-82cac1cb692f"],
		["SE-7330cd97-8c2a-47a2-915a-5d37e9f0caaa", "SE-0e3c9eb9-d1f6-49b1-a79b-cbe4f0e4cc33", "SE-ccc8485a-1784-4c6d-825b-168488c7dabc", "SE-3fd97b69-d78c-497e-b381-45b6b0c630af"],
		["SE-c22bc54a-c591-4f28-b71e-0ea28e6ea0bd", "SE-112777c1-3e5b-4157-a02d-2277f2e6d811", "SE-371e5534-8721-4790-9542-6e64f78f396e", "SE-ad0de7b8-0fc1-4a57-b305-c5b874ed82cd"],
		["SE-29b0aba2-5225-4c15-ac26-9deaa2859e1a", "SE-2f083e46-3cbd-4e73-be0e-4cb6fe9b30a0", "SE-f4bbeb6f-3b79-438a-9f0e-78cb088dd056", "SE-cf511fee-9882-4039-8c39-ca956d5c650f"],
		["SE-4e6f1a1c-570d-4c33-8a97-f4f5759280b3", "SE-f6facfb3-019f-46a3-9e1e-b0c49668cf1a", "SE-e4391330-dc1a-47c7-86c8-b516258837b1", "SE-efdd00a2-2578-435a-a479-a0dca006203a"],
		["SE-f8c2e70f-bc2b-44b9-bd62-8f45854b36c9", "SE-3bfb21e8-d5b4-4b5b-a479-cf811d3a9d9f", "SE-ba0c9b61-54e6-4726-b7f4-f8c084647c63", "SE-d35bda4d-90ca-4471-bb1d-ca0fe51db529"],
		["SE-b04a27c3-384d-4435-9241-18cdc21ee03a", "SE-9147e7ef-b4c0-4982-8897-c71cd233bd63", "SE-1c0e69a8-4c93-4a19-946d-131ec0a1b89c", "SE-7cce6197-271a-43d9-9224-4ce27a1ecb10"],
		["SE-de6036e0-c4e0-4135-a4ef-cd402550a7dd", "SE-ca89361f-0f30-4f3a-a913-91ae1ab60731", "SE-de499369-141c-4714-b5b0-eec7e43766fa", "SE-091962c1-0957-442b-b5ab-711fbee1181e"],
		["SE-831690a3-92d7-41a0-97be-cdd79422a6fa", "SE-2b1b5da8-f562-401a-b893-275db91a3722", "SE-0603d32c-4e79-49b6-a7be-f1dd2de840ae", "SE-f29306fa-0588-44bc-8465-c4d074355681"],
		["SE-391f1148-4051-4732-b26f-5b6450d69848", "SE-e397472c-e2c1-41fc-9acb-8bec2e610db2", "SE-4e62d62f-1dd2-4804-bfbf-11e067a74530", "SE-07049fcf-736a-4146-93fa-91c24dc003a8"],
		["SE-cf4191b0-0c70-41a9-97c9-6a7c319aa806", "SE-c80334d3-c56a-4a58-b0d3-56f5da2ef22c", "SE-d2bf8f54-d188-4690-b240-2fbfd7185fe5", "SE-296e28aa-8ca4-43f5-9720-9b16537294f1"],
		["SE-5a54c359-8933-4950-9654-ef316fc417f7", "SE-f80fb133-8fc9-420b-a318-d25f671883b2", "SE-0f8921cd-b0be-451b-8f52-ef076b4af34a", "SE-4921107a-a9c7-485b-9e94-8a7e6e2771bc"],
		["SE-fea11712-1357-4a43-857d-027ae10717cd", "SE-e04f0fd6-81e6-4736-a61c-6e6ad50aed90", "SE-d12c6192-d845-4595-809c-3578c774731a", "SE-80ebd4bd-782f-44f0-977f-8653129e1143"],
		["SE-87a7e316-17b7-41b1-a08f-e54fa382a307", "SE-9f217602-b872-4aa0-ab0a-5c2e5396fa8d", "SE-1356c9bd-4fc0-4bab-a2fb-269e180f48eb", "SE-600a29d7-8e05-4746-b073-dcbf77b4b04b"],
		["SE-c7fc0f70-a2df-4c6e-866c-c95e7517ce6d", "SE-7ef0910e-9827-4597-acd8-5a2d2c0e5a21", "SE-2853c8be-aa01-4f3b-89f6-e606484b0266", "SE-903b1564-ef90-4145-95ef-efcb962bde99"],
		["SE-1545d02a-a784-48eb-956e-304c8eaa9bc3", "SE-4a4d9168-9bdc-460d-b6e3-1706a77933a8", "SE-15b42e95-cbe4-4858-b9c1-a191fce1a0c8", "SE-ad8126cc-b219-485d-b081-34e41a923996"],
		["SE-7c9799e3-89b6-4372-bdb3-5b030f099ded", "SE-8e866107-fb7f-4bec-9560-dc30421537ed", "SE-30bccc8b-5548-496c-aae0-414da6480bcc", "SE-ad9d4286-a5a3-42cc-94e6-69133b422688"],
		["SE-a823d987-84bd-4291-af1a-2f80e1b62ed0", "SE-c9aaef10-69c1-4b30-b26b-d859c34ec1fa", "SE-8c9c9989-8ab9-4c4f-b900-90304d21a944", "SE-e512422a-bcd0-4ec0-8979-343ea12739ce"],
		["SE-2cca6552-f96d-46aa-b006-790e269da9ba", "SE-3a878f9c-229d-4910-aaf9-df7b2cd71673", "SE-f446a987-e3f4-4e57-a321-7a95f1cb5395", "SE-e743d581-78f1-474c-af65-fa60d5e19de9"],
		["SE-9fbe2d74-16ff-4a0d-a086-e393c5598ec2", "SE-5c7c7e03-3990-4022-ab74-29e1175ee049", "SE-6ce43970-30a3-485e-b514-d190049d354a", "SE-807faa3e-f915-4488-bbb0-f8c1315b77c3"],
		["SE-cdc13af0-cc25-496b-8012-4800a784ad8d", "SE-3d22ca03-dcf1-4ab5-8f31-b29c14093cf6", "SE-d5cedcfe-60e1-4e68-b0cf-3070bae83240", "SE-0ce719af-b008-471f-aea4-f916ec6a5073"],
		["SE-edbd63c7-76d7-4315-bd4b-293ca13b15f1", "SE-f187a3b4-7ece-4406-b09a-fca26790b1fd", "SE-ca3fa997-497b-4056-88bc-c7589b7a300c", "SE-2a5e3c57-538d-4f94-9121-c38c0e3a8b08"],
		["SE-3ea69963-e5cb-4b20-bf13-6a6c72e14235", "SE-24b4da51-afee-4fb8-a7c9-57a4f958a773", "SE-5784f1bd-d3d6-426d-8ad0-b3edc3df0a68", "SE-ca116d4b-b716-40e2-aa3a-f018c70dc2fd"],
		["SE-c712cfb3-dcce-4a06-9690-6ff18ecd57cb", "SE-3838e4c7-a863-4798-9fa6-dafe51c1640a", "SE-94e574e7-c7d1-40bf-8dc8-08b45f36260e", "SE-9b7501aa-d652-48eb-b60f-321d2ea19881"],
		["SE-4cbd15d1-29d6-49a5-84b4-59575fed0234", "SE-087a2454-a339-4298-a1d7-ee2d5db3d727", "SE-9d2ed07a-591c-4e49-9bfc-ec2a8b72d0b2", "SE-660e48e7-eaa6-4be7-89e5-92ab63daa4b1"],
		["SE-f7af9027-6a1c-42f9-a8d9-540c7371c7cc", "SE-71842f2c-2b3d-4ad5-ad24-f81f5961dc31", "SE-cc2f58f2-422f-4a9f-b58e-b08dabe9f921", "SE-1280e14d-c010-439c-83e8-8a2f0edf89cf"],
		["SE-83b7775a-c6d3-4011-9b07-dbe40aa9e4b7", "SE-2e562b5c-ccd1-41a9-8516-04abc3f4e70a", "SE-9ffcc2cd-50de-4e22-b07d-f9dfe34c2f33", "SE-17ccff97-e9f1-4981-bb9e-933e87421209"],
		["SE-86b54a9c-e724-443d-ad79-9e8ff87ee587", "SE-0398fe30-ff4f-4528-8ccf-80bc341c6085", "SE-7c887c0d-112e-48b6-a5a8-c6ba17a73f2a", "SE-7343a9a4-df1d-406d-a42e-e4065c4d68bc"],
		["SE-869ce8ca-c462-48eb-b457-bffc26480dfc", "SE-52bbed7f-d91c-482d-b13e-a24b136dfd4b", "SE-f42d6948-5f89-45ee-8ccf-22ef944d9417", "SE-d3f0ab0f-b6f2-4d6b-a52c-003d03a4884c"],
		["SE-b487ac49-d482-4be7-aba8-fc7a67912519", "SE-1dffa914-634b-44e5-b04a-2ccf8d4c99ca", "SE-4bb1b972-9415-4846-866b-b6113703c980", "SE-b64be3d7-80a3-43fe-acba-a21517a96a96"],
		["SE-1f3fd983-8c56-417f-a94d-02bd2dd17e22", "SE-f63f3898-945e-4b4b-bae3-2ce719445b52", "SE-8d2cb157-96a5-4391-a046-68b3bbee373e", "SE-9c124c69-c13a-473e-a395-e7d0bcc56e8a"],
		["SE-abf6776b-29b8-4650-b085-3fb464ad10e1", "SE-dde16dda-34b1-434b-b4a0-d7bf3e1d48b5", "SE-934521b1-688d-4f00-bd06-8e6ece86dc32", "SE-aac7abed-8b64-4efb-ba53-1136217ea501"],
		["SE-3073b579-7fda-47aa-a1ea-900db0000d1f", "SE-0ef95a29-f0e6-4b77-893d-4743fefd6ca1", "SE-6005c251-043d-4dab-914b-c5b7463ad74f", "SE-935c3e85-ad82-4692-b704-2627313a6fa6"],
		["SE-faa9ce4f-7d46-43a4-a12e-bc5b164f62c1", "SE-95be6f71-cbf1-4739-a378-d426b3181a37", "SE-1bb3596d-33cf-42dc-876d-5a64de34f494", "SE-23feb4e7-fcf7-4f85-af54-ab91843ccb96"],
		["SE-14fd97a8-cfc9-4b14-8765-b0c5cfadb66d", "SE-70dd8730-b8a4-4e5c-8049-c6bd1d636d37", "SE-01c26508-5e45-4e7a-bf74-efe8c5cafb36", "SE-ee9fe5fb-39f6-488f-8349-f7c26b3f71c7"]
		[ "SE-2a0bb435-8b96-48ba-9261-55f78c5bfc23", "SE-2ff0f594-5848-4a5e-bcda-0980dca2f72f", "SE-378d6c45-99aa-4625-b552-2ee51e0929a3", "SE-33204b66-2171-40ed-9249-83e709fae9e6" ],
		[ "SE-6bcc9cd1-1b45-4eb7-8df3-5b592a06eba7", "SE-13b27714-3bc8-417e-9a41-e98e81f97c36", "SE-e7804bf8-ce62-44dd-a416-1fe77a274926", "SE-a0dbccae-30e5-49f9-94ce-54a631c363f8" ],
		[ "SE-0023c15b-b9b4-4af4-9747-a72e5dcce28f", "SE-d2852ce0-21f8-4c18-a7b6-e3ccfcefd9dc", "SE-0b33163e-bdc1-41a8-96eb-caf8a0cd656a", "SE-3ca770f0-70b8-41bd-905b-ac03cb58a8d6" ],
		[ "SE-b6bcbb09-21cc-410e-b956-8a37bd497c8d", "SE-67fd157c-51b8-4d53-b361-da147ec7df1f", "SE-42b6d10f-0fc6-4949-9142-def47110762e", "SE-7d996168-658e-4cd8-a8a6-18b0ce568dea" ],
		[ "SE-d00e9365-15d6-4312-ae5a-14ec3a9ddeeb", "SE-0ddc072b-5d3f-4618-81c3-9c4df20b7767", "SE-a93146af-30d5-4886-b407-7b75541b6cf1", "SE-bedf516e-66c3-408a-9dc6-8b65cdb8ddb6" ],
		[ "SE-a0b5d475-571b-4713-b30d-73ecd934c17d", "SE-590875c4-40b4-4263-afd1-458e8f2691be", "SE-fef70ab6-3657-4fdc-bc91-b59a1bd938a6", "SE-af9a24a5-2095-40f6-9456-545e9c315676" ],
		[ "SE-a403e499-842a-4dc0-93b6-203e9b8d709b", "SE-e2570442-d3c2-496b-8e7e-17510b2bcb3e", "SE-8aae975d-d32d-4f22-a7b1-e0e7a7f64f52", "SE-8216553f-cd55-4da9-8b36-7e624fec2c15" ],
		[ "SE-f942c7af-8452-425f-8139-256fe99deb86", "SE-21ed5dce-8140-4013-88f0-58eeb8c3f7e0", "SE-a62fa428-e830-4bbe-954b-273d64bf1006", "SE-3567ef67-a4cd-4174-94b8-dd9586955945" ],
		[ "SE-0746bdf3-bd49-4e82-a519-8fa3bfa73a72", "SE-ed012d3b-8b0c-4690-bc37-b405535dd41c", "SE-81c0494c-7ea2-4123-8b45-50cf66bc7e14", "SE-07ecd7c1-3679-4104-ac56-80f1f80aac26" ],
		[ "SE-2cad83f6-6fd9-4416-b7cb-5b4950e195ea", "SE-f361a9e2-1fda-4873-858e-49df137ae97b", "SE-72a3e3bd-a6e3-4f2e-b184-9f791995a5e0", "SE-4d1dbacf-f103-42ce-9835-88bcf641f9e9" ],
		[ "SE-3d0a21f1-ba6e-48f6-8576-6e22a6d7cdbd", "SE-7f12f93c-3fa4-4d4d-afa4-febcbcc53e36", "SE-a690e0a1-cbc5-4509-acd5-eeb7fc30fce3", "SE-bfa088e5-707b-4166-be3b-29cdacb92774" ],
		[ "SE-44d0a929-fe37-43e4-8b6e-0d4a60967a82", "SE-b3b029a7-1659-46a7-b87d-bac30047b45e", "SE-3d92c05b-c093-46e8-8ec5-e08c1b81a515", "SE-ac43c8f2-328b-4100-a566-561fa4a323ee" ],
		[ "SE-0f426d69-e888-4b43-aeaa-9518aa6981a6", "SE-943516f1-972c-479d-8bf4-e7c3125ccc7f", "SE-ff49953f-1294-497f-a0a5-5dc8f068ac65", "SE-f3732156-00eb-492c-8209-feedd1b2dc63" ],
		[ "SE-4422beea-937a-46f0-943a-779acc1fe43b", "SE-94226c42-693f-480f-8759-6efc002208fb", "SE-c7412210-7441-4aa2-8965-1d7f423f9244", "SE-4498a333-332c-4d46-8013-56b3aaae8d62" ],
		[ "SE-b0f9689b-901b-4539-9845-1f6ded9dfe3a", "SE-84c3fbd4-122c-49c0-9f68-fb564e959de3", "SE-d8ba9f83-a0a9-498a-a0e1-896a5e86a4ba", "SE-68a7d78f-84ca-4377-afcc-c1aa115f5d0c" ],
		[ "SE-21b0c54b-ebe0-45e5-bc30-54155eee8b5d", "SE-cd074df9-7655-4abf-8e17-6d0386740bc8", "SE-f07644c4-7a3f-4fc2-8fba-1b4bfcea8ea7", "SE-81f06570-778f-48ba-a5c3-411602e54d67" ],
		[ "SE-8df58300-4829-48d8-983a-4d2fd3c54d6b", "SE-a0a28694-f621-4cdf-bcc0-19555d704ace", "SE-374e285a-3f89-4b52-a894-727eec6a385c", "SE-fcef74b7-bc49-48a0-b270-6901d9a29b2d" ],
		[ "SE-ad3c8ba7-adf4-41db-9510-90c78bb5f22a", "SE-9de33e1a-218e-489f-a092-81b06dacd2b9", "SE-e7d8315f-0aed-4db6-be02-7fd525713ded", "SE-310e8f73-b3f7-4dcf-a23f-98a90d3f773c" ],
		[ "SE-04bb3841-9d34-4150-8ba6-88b88abefad7", "SE-c9f5fc82-ecbb-4de8-95b2-fdad27767590", "SE-82d55a25-d0f6-42cf-b24e-c9e60dd2fe77", "SE-4b1936ef-fc67-4c04-9a7a-54c0b466d0b0" ],
		[ "SE-f0bd7126-1ea9-4dfc-92d6-44dce9f42c71", "SE-a44fe79a-a051-47b3-af22-dbab26965689", "SE-b56167d6-afc8-4c69-a3d9-a07ac3f2bd5a", "SE-5f5febd0-e9ec-4604-99b2-7bc35fddacee" ],
		[ "SE-494357a4-898f-40be-b2f5-9232ed30ca90", "SE-93176b50-ec26-4e26-b45f-5c797896f2f7", "SE-32eed194-61ff-4426-b1f2-a812ac69b1e6", "SE-34939065-6bb7-495b-a55a-b985db80a638" ],
		[ "SE-c6b6acb2-bdf1-4f70-b673-acd58b5093d0", "SE-28988d3e-7966-4328-8782-1bbf162b5cfb", "SE-77491376-49f3-482e-8bb3-4a06f342cd43", "SE-9a1b53d5-c732-4af7-b257-0d39d37c690e" ],
		[ "SE-bca1660c-497e-419b-909e-7bc951970dd1", "SE-29b668a6-b78c-4ecb-9391-ee4f73cde57f", "SE-d0fb74db-660f-4c52-bd09-a60690b2b72f", "SE-5ca28679-d1bb-4425-af4f-709ecef2104c" ],
		[ "SE-a12312e9-2c44-4af2-860f-5aabafc0bb80", "SE-04c0575a-7e22-4b11-a1af-7ff20993441d", "SE-424d1b53-e4af-492b-b38d-1c624bc87b43", "SE-cbfe232a-8222-4087-a400-11420b525835" ],
		[ "SE-210288b1-56c0-412f-8850-d870b88003b1", "SE-67c240d7-2d51-46bf-ae36-3d0a71e426d1", "SE-1c4b26d6-db34-4285-b239-47f2dbc495cd", "SE-3ad8c1da-a7c3-4c3b-a55f-ba30d21f858b" ],
		[ "SE-6000928c-4493-4a1b-8153-d83f7f672461", "SE-57b18ba1-b6b2-40b3-b724-994912f0295a", "SE-2d59b0c8-60ab-4747-b59b-7065edd49cf2", "SE-f61fd3a9-8e49-4a09-8dd5-af8b4bfa70e9" ],
		[ "SE-c04eddb5-a50a-4050-94cf-f1985f232511", "SE-44f70044-fb7c-4058-9b52-c54fe9b1c97c", "SE-3a9923bd-cbd4-4c75-93ae-834d473da8a2", "SE-78d7a2fb-a45a-424c-a14d-72777242d91f" ],
		[ "SE-6594c74c-d826-42d1-9333-30219d94b3ea", "SE-9563f5c4-e612-49b3-a024-203222883213", "SE-37948a4b-b00f-48e9-897f-a94660a47717", "SE-be4faebf-8fd8-4966-b198-bd7f60f88e50" ],
		[ "SE-f3fed08b-eb9c-4f58-a65c-57d70ce573e8", "SE-98227a6d-0d22-421a-9e47-d27f9e6baf39", "SE-25ef5337-f964-4c68-832f-2fd8799153d3", "SE-79431321-e648-4d35-832b-323e3e2b2418" ],
		[ "SE-693dcbea-bb6b-45cc-8b60-e3cf00bd8b59", "SE-95ee210e-213c-45be-bbdb-fd3fbf948ef2", "SE-06e813b5-f50b-423e-a481-6ff6f1bac1d0", "SE-f37e4af3-0e98-47ab-90a2-db7ffc4cc2a1" ],
		[ "SE-ef62bff0-a6eb-4360-8d45-023dfdac734d", "SE-d7adccfd-6009-4a65-b664-901bae376ea6", "SE-5c3a992e-973b-40d7-ae4f-9faab68523df", "SE-5da1eccf-fa0a-475f-af9a-3e931cd65456" ],
		[ "SE-15715fcc-907c-47c1-8d79-3acba8621d69", "SE-8691c035-71f2-4215-8cd1-b729cd3a24b8", "SE-d1a3fc74-f0c1-47fc-98be-a003cfe18155", "SE-10493679-3a2c-400f-a85e-3fbb36e60087" ],
		[ "SE-a545d1c3-3535-466b-9087-fffb191d8822", "SE-be4e1bfa-5007-47ab-9bb1-b57c75917ba1", "SE-cf9efe4d-5e8a-4b2f-be12-7c3c7ebd0a6f", "SE-64540655-b37c-48fb-b0e2-1e5ced074fe6" ],
		[ "SE-2cf436d3-4fc5-49f1-b817-d1c641aa9cf7", "SE-9c07cf3a-d643-4fd9-8170-8bebe4541100", "SE-da7905d8-8bbf-436f-8798-6985322b6458", "SE-b81cef24-4408-4126-9153-bfc210db5623" ],
		[ "SE-2a4b0c27-7b07-4323-b6a0-5226b1349a52", "SE-6eb3f066-9952-4018-8218-a53b96cfeda7", "SE-27653f75-0076-485b-b761-332da78adbf9", "SE-8e1f4819-48f3-40d1-8bf9-bbb95893420b" ],
		[ "SE-a06c2525-80eb-4aa3-bfb8-b73572ac7927", "SE-0cf4142d-acb4-4aa4-99c4-f414daf5b8b9", "SE-ffde250c-0a44-4ed6-b0a4-5482b4d349ae", "SE-e9d7dd5b-5ff7-4db8-9f9b-b572aef5c8f4" ],
		[ "SE-4333f5d1-197b-4c23-ac84-3bb676dcd9ff", "SE-ad49defe-dd53-4395-b5bc-9bcf53a2913b", "SE-66844f34-3199-4c1b-b980-3e246ab5e524", "SE-d8554dba-37b3-4eab-bafc-bc64b4922581" ],
		[ "SE-0315504a-ea29-45b6-988f-8d9f39b43d70", "SE-7d4d4220-016a-4431-a384-9b6bbbfdd4f7", "SE-4e6133d9-3d61-476d-94eb-afd52b526cae", "SE-cdb6b9f6-a45f-463b-b178-9de057110a38" ],
		[ "SE-c93d1e48-8e1f-4d68-a6f4-2a2eb3170b55", "SE-8b997083-a1f3-4651-8ffb-d9e4ac8d7c06", "SE-2b2c61d0-0451-4041-99bd-9b0aece004e9", "SE-a2d5e8ed-81b5-4000-ac4c-5afdadd62c97" ],
		[ "SE-d3c8649a-297d-48c7-b0fb-8914fcce52a1", "SE-988a92a3-8578-4235-a5d2-e45f8353fbb8", "SE-58c03e00-490d-438c-98d6-250f5d79cbf3", "SE-a707bb10-03ec-4856-86b5-1f3f42f58c56" ],
		[ "SE-04fd95d1-227c-4817-add7-acbe90c41e84", "SE-228e1e82-1ab4-4cca-85cc-4834c7348baa", "SE-668f43a0-7178-4c0e-b435-23fe2cd7302f", "SE-71f284cd-97d8-4f70-82e6-1fb2a0a8e76d" ],
		[ "SE-55217625-d55a-45ef-a33b-1587d08ae3f6", "SE-14b54214-6a3f-446d-a88b-d645052bacf8", "SE-d104807f-45f9-415f-b241-929ae80e5cbc", "SE-43bdbab3-e0b1-41c5-a8ed-8bfa225b6b58" ],
		[ "SE-b38df88b-7b71-4ca6-b325-9f7cf69e48a5", "SE-427a903b-75e4-4f38-b9f8-428e7c372525", "SE-1f2283df-a458-4595-8b19-c13502536b97", "SE-35902794-2f0c-42ac-b7ad-bf91f2df50b2" ],
		[ "SE-424e84e5-4a68-483a-be47-f137c57bb109", "SE-59323837-02ca-4e61-98e9-9cb53455daff", "SE-43b2bdce-1443-4568-99c6-42fed1427c0c", "SE-f069dbf7-2b1a-4cdf-8919-54e38a320f62" ],
		[ "SE-d3aa19ea-f0da-4607-8d66-b94786e22e1a", "SE-46add4dc-1aed-4ce2-8360-ac48f1a2ceb5", "SE-a1680c8c-bce7-4918-bbdc-1441e96a205d", "SE-59996e47-a9ff-442b-a648-b47247e1eb57" ],
		[ "SE-afe18dd8-4fd1-4dac-84f2-afa8b18b86a4", "SE-f3311574-cf2c-4e0a-81a9-cd0fd5afbe89", "SE-e4d5a693-ec1f-4c99-a4c1-c4c9543fb58b", "SE-a2bb4286-ea06-492e-83bb-f8c6f7745fa0" ],
		[ "SE-e29c8f4b-607b-42cc-bcc1-a8d0ae5e2069", "SE-5e1d2437-a09a-45ac-a59d-07f9f10d2efb", "SE-a1d02720-d5a7-4279-af08-a399fbc1fa8f", "SE-e7103e16-f6ae-4c15-a80f-2eeb58e3fc42" ],
		[ "SE-a29625fe-14c0-45ac-9905-c134e718c24b", "SE-66987fce-a5da-427e-8f56-6f54040d13aa", "SE-74b31fc7-716c-4fb5-91ca-31f4573ec8eb", "SE-34120bea-51a8-4b94-8af1-4554e11cf595" ],
		[ "SE-76f900a0-71df-4b2c-9302-8e8ab4b2d815", "SE-a2fd71c6-f805-45af-a15b-ba7831f249dd", "SE-b47124af-19b8-42b2-aa2b-1778128ce4ba", "SE-d6512bb0-cb52-465b-bde5-bd7d798d04b2" ],
		[ "SE-bc7274ac-37f5-438a-8315-290abf10ca39", "SE-1875d350-05e3-4b70-8f48-dd37bfa46a52", "SE-c3160d34-87f4-4efa-b838-25b0f64f0679", "SE-dc2e1417-cfab-46c4-9aba-3228c45271ac" ],
];


function shuffleRange(start, end) {
    // start부터 end까지의 숫자로 배열 생성
    const arr = Array.from({ length: end - start + 1 }, (_, i) => start + i);
    
    for (let i = arr.length - 1; i > 0; i--) {
        // 0부터 i 사이의 랜덤한 인덱스 선택
        const j = Math.floor(Math.random() * (i + 1));
        // 두 요소 교환
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    
    return arr;
}

function CheckVersion()
{
	let url = _bamVersionURL;

    const timestamp = new Date().getTime();  // 현재 시간을 사용하여 타임스탬프 생성
    url = `${url}?timestamp=${timestamp}`;

    let resultText = requestHttpGet(url, null);
	console.log("Server Standard Version : " + resultText);

	if(_bamVersion == resultText)
	{
		return true;
	}

	//alert("히든 플러스 버전이 일치하지 않습니다.");

	return false;
}

function isInteger(value) {
    return !isNaN(value) && parseInt(value) === value;
}

// 쿠키 설정 함수
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // 며칠 후로 만료일 설정
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (encodeURIComponent(value) || "") + expires + "; path=/";
}

// 쿠키 읽기 함수
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';'); // 쿠키를 세미콜론으로 분리
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim(); // 공백 제거
        if (c.indexOf(nameEQ) === 0) {
            return decodeURIComponent(c.substring(nameEQ.length, c.length)); // 해당 쿠키 값 반환
        }
    }
    return null; // 해당 쿠키가 없으면 null 반환
}

// 쿠키 삭제 함수
function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
}

function tmp_post_form(path, params, method='post') {
    const form = document.createElement('form');
    form.method = method;
    form.action = path;

    for (const key in params) {
        if (params.hasOwnProperty(key)) {
            const hiddenField = document.createElement('input');
            hiddenField.type = 'hidden';
            hiddenField.name = key;
            hiddenField.value = params[key];

            form.appendChild(hiddenField);
        }
    }

    document.body.appendChild(form);
    form.submit();
}

function randomRange(start, end)
{
    return Math.floor((Math.random() * (end-start+1)) + start);
}

function isLoginBlog()
{   
    let url = "https://blog.naver.com/isLogin.nhn";
    let resultText = requestHttpGet(url, null);

    if(resultText.indexOf("LOGIN") >= 0)
    {
        return true;
    }

    return false;
}

function requestHttpGet(url, referer)
{
    var xmlHttp = new XMLHttpRequest();
    // xmlHttp.onreadystatechange = function() {
    //     if(this.status == 200 && this.readyState == this.DONE) {
    //         // 요청한 데이터를 문자열로 반환함.
    //         console.log(xmlHttp.responseText);
    //     }
    // };

    //xmlHttp.open("GET", "https://blog.naver.com/PostWriteFormManagerOptions.naver?blogId=1t9nfjukdwg86ap&logNo=223105218887", true);
    xmlHttp.open("GET", url, false);

    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // if(referer != null)
    // {
    //     xmlHttp.setRequestHeader("Referer", referer);
    // }

    xmlHttp.send();

    return xmlHttp.responseText;
}

function requestHttpPost(path, params, referer) {
    var xmlHttp = new XMLHttpRequest();
    // xmlHttp.onreadystatechange = function() {
    //     if(this.status == 200 && this.readyState == this.DONE) {
    //         // 요청한 데이터를 문자열로 반환함.
    //         console.log(xmlHttp.responseText);
    //     }
    // };

    //xmlHttp.open("GET", "https://blog.naver.com/PostWriteFormManagerOptions.naver?blogId=1t9nfjukdwg86ap&logNo=223105218887", true);

    let postParam = "";

    for (const key in params) {
        if (params.hasOwnProperty(key)) {
            if(postParam.length > 0)
            {
                postParam += "&";
            }
            postParam += key;
            postParam += "=";
            let value =  params[key];
            value = encodeURIComponent(value);
            postParam += value;
        }
    }


    xmlHttp.open("POST", path, false);

    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    // if(referer != null)
    // {
    //     xmlHttp.setRequestHeader("Referer", referer);
    // }

    // xmlHttp.setRequestHeader("Referer", "https://blog.naver.com/1t9nfjukdwg86ap/postupdate?logNo=223105218887");    

    xmlHttp.send(postParam);    

    return xmlHttp.responseText;
}

function splitParagraph(source, paragraphCount) {
	const splitters = ['.', '!', '?'];

    // 텍스트를 단어별로 나눔
    const parts = source.split(' ');

    const wordCount = parts.length;
    const limitWordCountStd = Math.floor(wordCount / paragraphCount); // 각 단락당 단어 수 계산
    let limitWordCount = limitWordCountStd;

    let cParagraph = 0;
    let cWord = 0;

    // 빈 배열을 초기화 (paragraghCount 수만큼 빈 문자열로 초기화)
    const contents = new Array(paragraphCount).fill('');

    // 단어를 순차적으로 처리
    parts.forEach(part => {
        let isFound = false;

        // `splitters` 배열을 순회하며 해당 단어의 끝이 split자와 일치하는지 확인
        splitters.forEach(spliter => {
            if (part.endsWith(spliter)) {
                isFound = true;
            }
        });

        // 각 단락에 단어 추가
        if (contents[cParagraph].length > 0) {
            contents[cParagraph] += ' ';
        }
        contents[cParagraph] += part;
        cWord++;

        // 끝이 split자와 일치하면 단락을 분리
        if (isFound) {
            if (cParagraph + 1 >= paragraphCount) {
                // 마지막 단락에서는 아무것도 하지 않음
            } else {
                if (cWord >= limitWordCount) {
                    limitWordCount += limitWordCountStd;
                    cParagraph++;
                }
            }
        }
    });

    return contents;
}

function splitParagraphByLength(source, maxLength) {
  // 문장 단위 분리 (구두점 기준)
  const sentences = source.match(/[^.!?]+[.!?]/g) || [source];
  const contents = [];
  let currentParagraph = '';

  for (let i = 0; i < sentences.length; i++) {
    const sentence = sentences[i].trim();

    // 만약 문단 개수가 3개 채워져 있다면 → 마지막 문단에 나머지 전부 추가
    if (contents.length >= 3) {
      const remainingSentences = sentences.slice(i).join(' ').trim();
      if (remainingSentences) {
        contents.push(remainingSentences);
      }
      break;
    }

    // 현재 문단에 붙여도 글자 수 제한 이하인지 확인
    if ((currentParagraph + ' ' + sentence).trim().length <= maxLength) {
      currentParagraph = (currentParagraph + ' ' + sentence).trim();
    } else {
      // 현재 문단 저장 후 새로운 문단 시작
      if (currentParagraph) contents.push(currentParagraph);
      currentParagraph = sentence;
    }
  }

  // 루프 후 마지막 부분 처리
  if (currentParagraph && contents.length < 4) {
    contents.push(currentParagraph);
  }

  return contents;
}

function extractTailByCharCount(fullText, charLimit = 100) {
  // 1. 앞뒤 공백을 제거하고, 하나 이상의 공백/줄바꿈을 기준으로 단어 배열을 생성합니다.
  const words = fullText.trim().split(/\s+/);

  let charCount = 0;
  let splitIndex = words.length; // 기본적으로는 전체를 의미하도록 설정

  // 2. 단어 배열의 뒤에서부터 앞으로 순회합니다.
  for (let i = words.length - 1; i >= 0; i--) {
    const word = words[i];
    charCount += word.length; // 공백 제외, 단어의 문자 수만 더함

    // 3. 문자 수 합계가 제한을 넘으면, 현재 단어의 위치를 기록하고 반복을 중단합니다.
    if (charCount > charLimit) {
      splitIndex = i;
      break;
    }
    
    // 4. 모든 단어를 더해도 제한을 넘지 않으면, 전체 텍스트가 추출 대상이 됩니다.
    // 이 경우 splitIndex는 0이 됩니다.
    if (i === 0) {
        splitIndex = 0;
    }
  }

  // 5. 기록된 위치(splitIndex)를 기준으로 원본 배열을 두 부분으로 나눕니다.
  const remainingWords = words.slice(0, splitIndex);
  const extractedWords = words.slice(splitIndex);

  // 6. 각 배열을 다시 문자열로 합쳐서 결과를 반환합니다.
  return {
    remainingText: remainingWords.join(' '),
    extractedText: extractedWords.join(' '),
  };
}

function splitParagraphByWordLengthNoSpace(source, paragraphCnt, maxLength) {
  // 띄어쓰기 기준으로 단어 분리
  const words = source.split(/\s+/);
  const contents = [];
  let currentParagraph = '';

  // 글자 수 계산 (공백 제외)
  const getLengthNoSpace = (text) => text.replace(/\s+/g, '').length;

  for (let i = 0; i < words.length; i++) {
    const word = words[i].trim();
    if (!word) continue; // 빈 단어 스킵

    // 이미 문단이 3개면 → 나머지 단어 다 붙여서 마지막 문단으로
    if (contents.length >= (paragraphCnt-1)) {
      const remainingWords = [currentParagraph, ...words.slice(i)].join(' ').trim();
      if (remainingWords) contents.push(remainingWords);
      break;
    }

    if (!currentParagraph) {
      // 첫 단어는 무조건 추가
      currentParagraph = word;
    } else {
      const newParagraph = (currentParagraph + ' ' + word).trim();
      if (getLengthNoSpace(newParagraph) > maxLength) {
        // 기준 초과하면 이번 단어까지 포함하고 문단 확정
        contents.push(newParagraph);
        currentParagraph = '';
      } else {
        // 아직 기준 이하면 계속 누적
        currentParagraph = newParagraph;
      }
    }
  }

  // 마지막 문단 처리
  if (currentParagraph && contents.length < paragraphCnt) {
    contents.push(currentParagraph);
  }

  return contents;
}

function splitParagraphBySentenceAndLength(source, paragraphCnt, maxLength) {
  // 문장 단위 분리 (.!? 등으로 구분)
  //const sentences = source.match(/[^.!?]+[.!?]/g) || [source]; 
  const sentences = source.match(/[^.!?~,]+[.!?~,]/g) || [source];
  const contents = [];
  let currentParagraph = '';

  // 글자 수 계산 (공백 제외)
  const getLengthNoSpace = (text) => text.replace(/\s+/g, '').length;

  for (let i = 0; i < sentences.length; i++) {
    const sentence = sentences[i].trim();
    if (!sentence) continue; 

    // 1. 단락 개수 제한 로직: 최대 단락 수에 도달하면 나머지 모두를 마지막 단락에 포함
    if (contents.length >= (paragraphCnt - 1)) {
      // 현재 누적 중인 단락(currentParagraph)과 남아있는 모든 문장을 합침
      const remainingSentences = [currentParagraph, ...sentences.slice(i)].join(' ').trim();
      
      if (remainingSentences) contents.push(remainingSentences);
      break;
    }

    if (!currentParagraph) {
      // 첫 문장은 무조건 추가
      currentParagraph = sentence;
    } else {
      // 현재 단락에 새 문장을 추가했을 때의 길이 확인
      const newParagraph = (currentParagraph + ' ' + sentence).trim();
      
      if (getLengthNoSpace(newParagraph) > maxLength) {
        // *** 2. 길이 초과 (수정된 로직) ***
        // 초과를 유발한 문장을 포함한 newParagraph를 현재 단락으로 확정
        contents.push(newParagraph); 
        currentParagraph = ''; // 다음 문장부터 새 단락 시작
      } else {
        // 3. 길이 미만: 문장 누적
        currentParagraph = newParagraph;
      }
    }
  }

  // 루프 종료 후 마지막 남은 문단 처리
  // 단락 개수 제한에 걸리지 않고 루프가 끝난 경우, 잔여 내용을 마지막 단락으로 확정
  // (수정된 로직에서는 길이 초과 시 currentParagraph가 비워지므로, 이 로직은 루프가 끝까지 돌았을 때만 실행됩니다.)
  if (currentParagraph && contents.length < paragraphCnt) {
    contents.push(currentParagraph);
  }

  return contents;
}

function splitParagraphByLengthNoSpace(source, maxLength) {
  // 문장 단위 분리 (구두점 기준)
  const sentences = source.match(/[^.!?]+[.!?]/g) || [source];
  const contents = [];
  let currentParagraph = '';

  // 글자 수 계산 (공백 제외)
  const getLengthNoSpace = (text) => text.replace(/\s+/g, '').length;

  for (let i = 0; i < sentences.length; i++) {
    const sentence = sentences[i].trim();

    // 이미 문단이 3개면 → 나머지를 전부 마지막 문단에 넣기
    if (contents.length >= 3) {
      const remainingSentences = sentences.slice(i).join(' ').trim();
      if (remainingSentences) {
        contents.push(remainingSentences);
      }
      break;
    }

    if (!currentParagraph) {
      // 첫 문장은 무조건 넣음
      currentParagraph = sentence;
    } else {
      const newParagraph = (currentParagraph + ' ' + sentence).trim();
      if (getLengthNoSpace(newParagraph) > maxLength) {
        // 초과하면 이번 문장을 포함한 상태로 문단 확정
        contents.push(newParagraph);
        currentParagraph = '';
      } else {
        // 아직 기준 이하이면 누적
        currentParagraph = newParagraph;
      }
    }
  }

  // 마지막 남은 문단 처리
  if (currentParagraph && contents.length < 4) {
    contents.push(currentParagraph);
  }

  return contents;
}

function splitParagraph2Sentence(source, maxParagraphCount) {
  const sentences = source.match(/[^.!?]+[.!?]/g) || [source];
  const contents = [];

  for (let i = 0; i < sentences.length; i += 2) {
    if (contents.length < maxParagraphCount - 1) {
      const paragraph = sentences.slice(i, i + 2).join(' ').trim();
      if (paragraph) {
        contents.push(paragraph);
      }
    } else {
      const remainingSentences = sentences.slice(i);
      const lastParagraph = remainingSentences.join(' ').trim();
      if (lastParagraph) {
        contents.push(lastParagraph);
      }
      break;
    }
  }

  return contents;
}

//function splitParagraph2FixedSentence(text, sentenceCount) {
//	// 문장 단위로 분할 (.!? 등으로 구분)
//	const sentences = text.match(/[^.!?]+[.!?]?/g) || [];
//  
//	// 요청된 개수만큼의 문장을 반환합니다.
//	return sentences.slice(0, sentenceCount);
//}

function splitParagraph2FixedSentence(text, sentenceCnt) {
  // 문장 단위로 분할 (.!? 등으로 구분)
  const sentences = text.match(/[^.!?]+[.!?]?/g) || [];
  const result = [];
  let tmpSentences = [];

  sentences.forEach((sentence, idx) => {
    tmpSentences.push(sentence.trim());

    // sentenceCnt 개 만큼 모이면 하나의 문단으로 추가
    if (tmpSentences.length >= sentenceCnt) {
      result.push(tmpSentences.join(" "));
      tmpSentences = [];
    }
  });

  // 잔여 문장 처리
  if (tmpSentences.length > 0) {
    result.push(tmpSentences.join(" "));
  }

  return result;
}

function splitAndFilterLongSentences(text) {
	// 문장 단위로 분할 (.!? 등으로 구분)
	const sentences = text.match(/[^.!?]+[.!?]?/g) || [];

	const result = [];

	let tmpText = "";
	let tmpTextCnt = 0;

	sentences.forEach(sentence => {
		// 단어 단위로 분할 (띄어쓰기 기준)
		const words = sentence.trim().split(/\s+/);

		// 단어들을 붙여서 글자 수 계산
		const joined = words.join('');

		tmpTextCnt += joined.length;
		tmpText += sentence;

		//if (tmpTextCnt >= 200) {
		if (tmpTextCnt >= 150) {
			result.push(tmpText);
			tmpTextCnt = 0;
			tmpText = "";
		}
	});

	// tmpText 잔여분 처리
	if(tmpTextCnt > 0)
	{
		result.push(tmpText);
		tmpTextCnt = 0;
		tmpText = "";
	}

	return result;
}

function replaceNodeContent(source, replaceSE) {
    let injectNodeText = _bamInjectNodeText;

    // 각 자리 표시자를 실제 값으로 교체
    injectNodeText = injectNodeText.replace("[BSE1]", replaceSE[0]);
    injectNodeText = injectNodeText.replace("[BSE2]", replaceSE[1]);
    injectNodeText = injectNodeText.replace("[BSE3]", replaceSE[2]);
    injectNodeText = injectNodeText.replace("[BSE4]", replaceSE[3]);
    injectNodeText = injectNodeText.replace("[BCONTENT]", source);

    return injectNodeText;
}

function replaceNodeContentFontStyle(source, replaceSE) {
    let injectNodeText = _bamInjectNodeTextFontStyle;

    // 각 자리 표시자를 실제 값으로 교체
    injectNodeText = injectNodeText.replace("[BSE1]", replaceSE[0]);
    injectNodeText = injectNodeText.replace("[BSE2]", replaceSE[1]);
    injectNodeText = injectNodeText.replace("[BSE3]", replaceSE[2]);
    injectNodeText = injectNodeText.replace("[BSE4]", replaceSE[3]);
    injectNodeText = injectNodeText.replace("[BCONTENT]", source);

    return injectNodeText;
}

function replaceNodeContentFontStyleBold(source, replaceSE) {
    let injectNodeText = _bamInjectNodeTextFontStyleBold;

    // 각 자리 표시자를 실제 값으로 교체
    injectNodeText = injectNodeText.replace("[BSE1]", replaceSE[0]);
    injectNodeText = injectNodeText.replace("[BSE2]", replaceSE[1]);
    injectNodeText = injectNodeText.replace("[BSE3]", replaceSE[2]);
    injectNodeText = injectNodeText.replace("[BSE4]", replaceSE[3]);
    injectNodeText = injectNodeText.replace("[BCONTENT]", source);

    return injectNodeText;
}

function replaceNodeTitleFontStyle(source, replaceSE, targetSource) {
    let injectNodeText = targetSource;

	source = source.replace(/"/g, "'");

    // 각 자리 표시자를 실제 값으로 교체
    injectNodeText = injectNodeText.replace("[BSE1]", replaceSE[0]);
    injectNodeText = injectNodeText.replace("[BSE2]", replaceSE[1]);
    injectNodeText = injectNodeText.replace("[BSE3]", replaceSE[2]);
    injectNodeText = injectNodeText.replace("[BSE4]", replaceSE[3]);
    injectNodeText = injectNodeText.replace("[BCONTENT]", source);

    return injectNodeText;
}

function replaceParagraphContent(replaceSE) {
    let injectNodeText = _bamInjectNodeTextParagraph;

    // 각 자리 표시자를 실제 값으로 교체
    injectNodeText = injectNodeText.replace("[BSE1]", replaceSE[0]);
    injectNodeText = injectNodeText.replace("[BSE2]", replaceSE[1]);
    injectNodeText = injectNodeText.replace("[BSE3]", replaceSE[2]);
    injectNodeText = injectNodeText.replace("[BSE4]", replaceSE[3]);

    return injectNodeText;
}

function replaceParagraphDetailContent(source, replaceSE) {
    let injectNodeText = _bamInjectNodeTextParagraphDetail;

    // 각 자리 표시자를 실제 값으로 교체
    injectNodeText = injectNodeText.replace("[BSE1]", replaceSE[0]);
    injectNodeText = injectNodeText.replace("[BSE2]", replaceSE[1]);
    injectNodeText = injectNodeText.replace("[BSE3]", replaceSE[2]);
    injectNodeText = injectNodeText.replace("[BSE4]", replaceSE[3]);
    injectNodeText = injectNodeText.replace("[BCONTENT]", source);

    return injectNodeText;
}

function replaceQuotationContent(source, replaceSE) {
    let injectNodeText = _bamInjectNodeTextQuotation;

    // 각 자리 표시자를 실제 값으로 교체
    injectNodeText = injectNodeText.replace("[BSE1]", replaceSE[0]);
    injectNodeText = injectNodeText.replace("[BSE2]", replaceSE[1]);
    injectNodeText = injectNodeText.replace("[BSE3]", replaceSE[2]);
    injectNodeText = injectNodeText.replace("[BSE4]", replaceSE[3]);
    injectNodeText = injectNodeText.replace("[BCONTENT]", source);

    return injectNodeText;
}

function replaceImageNodeContent(replaceSE) {
    let injectNodeText = _bamInjectImageNodeText;

    // 각 자리 표시자를 실제 값으로 교체
    injectNodeText = injectNodeText.replace("[BSE1]", replaceSE[0]);
    injectNodeText = injectNodeText.replace("[BSE2]", replaceSE[1]);
    //injectNodeText = injectNodeText.replace("[BSE3]", replaceSE[2]);

    return injectNodeText;
}

function replaceImageNodeDetailContent(replaceSE) {
    let injectNodeText = _bamInjectImageNodeDetailText;

    // 각 자리 표시자를 실제 값으로 교체
    injectNodeText = injectNodeText.replace("[BSE3]", replaceSE[2]);

    return injectNodeText;
}

function GetReplaceTitle()
{
    let bamTitle = document.getElementById("bamTitle");
	let bamTitleValue = bamTitle.value;
	//bamTitleValue = bamTitleValue.replace("\n", '\\n').replace("\t", "\\t");
	bamTitleValue = removeControlCharacters(bamTitleValue);
    return bamTitleValue;
}

function removeControlCharacters(str) {
    return str.replace(/[\x00-\x1F\x7F]/g, '');  // 제어 문자를 제거
}

function GetReplaceContent()
{
    let bamContents = document.getElementById("bamContents");
	let bamContentsValue = bamContents.value;
	bamContentsValue = removeControlCharacters(bamContentsValue);
	//bamContentsValue = bamContentsValue.replace("\n", '\\n').replace("\t", "\\t");
	//bamContentsValue = bamContentsValue.replace("\n", '').replace("\t", "");

    return bamContentsValue;
}

function GetIntroTitle(idx)
{
    let bamIntroTitle = document.getElementById("bamIntroTitle" + idx);
	let bamIntroTitleValue = bamIntroTitle.value;
	bamIntroTitleValue = removeControlCharacters(bamIntroTitleValue);

    return bamIntroTitleValue;
}

function GetSubIntroTitle(idx)
{
    let bamSubIntroTitle = document.getElementById("bamSubIntroTitle" + idx);
	let bamSubIntroTitleValue = bamSubIntroTitle.value;
	bamSubIntroTitleValue = removeControlCharacters(bamSubIntroTitleValue);

    return bamSubIntroTitleValue;
}

function GetCloseTitle(idx)
{
    let bamCloseTitle = document.getElementById("bamCloseTitle" + idx);
	let bamCloseTitleValue = bamCloseTitle.value;
	bamCloseTitleValue = removeControlCharacters(bamCloseTitleValue);

    return bamCloseTitleValue;
}

function GetSubTitle(idx)
{
    let bamSubTitle = document.getElementById("bamSubTitle" + idx);
	let bamSubTitleValue = bamSubTitle.value;
	bamSubTitleValue = removeControlCharacters(bamSubTitleValue);

    return bamSubTitleValue;
}

function GetSub1Content(idx)
{
    let bamSub1Content = document.getElementById("bamSub1Content" + idx);
	let bamSub1ContentValue = bamSub1Content.value;
	bamSub1ContentValue = removeControlCharacters(bamSub1ContentValue);

    return bamSub1ContentValue;
}

function GetSub2Content(idx)
{
    let bamSub2Content = document.getElementById("bamSub2Content" + idx);
	let bamSub2ContentValue = bamSub2Content.value;
	bamSub2ContentValue = removeControlCharacters(bamSub2ContentValue);

    return bamSub2ContentValue;
}

function GetSub3Content(idx)
{
    let bamSub3Content = document.getElementById("bamSub3Content" + idx);
	let bamSub3ContentValue = bamSub3Content.value;
	bamSub3ContentValue = removeControlCharacters(bamSub3ContentValue);

    return bamSub3ContentValue;
}

function GetSub4Content(idx)
{
    let bamSub4Content = document.getElementById("bamSub4Content" + idx);
	let bamSub4ContentValue = bamSub4Content.value;
	bamSub4ContentValue = removeControlCharacters(bamSub4ContentValue);

    return bamSub4ContentValue;
}

function GetSub5Content(idx)
{
    let bamSub5Content = document.getElementById("bamSub5Content" + idx);
	let bamSub5ContentValue = bamSub5Content.value;
	bamSub5ContentValue = removeControlCharacters(bamSub5ContentValue);

    return bamSub5ContentValue;
}

function GetSub6Content(idx)
{
    let bamSub6Content = document.getElementById("bamSub6Content" + idx);
	let bamSub6ContentValue = bamSub6Content.value;
	bamSub6ContentValue = removeControlCharacters(bamSub6ContentValue);

    return bamSub6ContentValue;
}

function GetSub7Content(idx)
{
    let bamSub7Content = document.getElementById("bamSub7Content" + idx);
	let bamSub7ContentValue = bamSub7Content.value;
	bamSub7ContentValue = removeControlCharacters(bamSub7ContentValue);

    return bamSub7ContentValue;
}

function GetSub8Content(idx)
{
    let bamSub8Content = document.getElementById("bamSub8Content" + idx);
	let bamSub8ContentValue = bamSub8Content.value;
	bamSub8ContentValue = removeControlCharacters(bamSub8ContentValue);

    return bamSub8ContentValue;
}

function GetEndTitle(idx)
{
    let bamEndTitle = document.getElementById("bamEndTitle" + idx);
	let bamEndTitleValue = bamEndTitle.value;
	bamEndTitleValue = removeControlCharacters(bamEndTitleValue);

    return bamEndTitleValue;
}

function IsChangeTitle()
{
    let isChangeTitleElem = document.getElementById("bamCheckTitleChange");
    return isChangeTitleElem.checked;
}

function IsChangeContents()
{
    let isChangeContentsElem = document.getElementById("bamCheckContentsChange");
    return isChangeContentsElem.checked;
}

function IsChangeSlideImage()
{
    let isChangeSlideImageElem = document.getElementById("bamCheckSlideImageChange");
    return isChangeSlideImageElem.checked;
}

function IsCheckedHiddeRadioButton()
{
	const radioButtons = document.getElementsByName('bamMode');
	let selectedValue = null;

	// 각 라디오 버튼을 순회합니다.
	for (let i = 0; i < radioButtons.length; i++) {
		if (radioButtons[i].checked) {
			selectedValue = radioButtons[i].value; // 선택된 버튼의 값을 저장
			break; // 하나만 선택되므로 루프 종료
		}
	}

	console.log("selected radio button " + selectedValue);

	if(selectedValue == "trust")
	{
		return false;
	}

	return true;
}



function IsRemoveHiddenSlideImage()
{
//    let isRemoveHiddenSlideImageElem = document.getElementById("bamCheckSlideImageRemove");
//    return isRemoveHiddenSlideImageElem.checked;
	return false;
}

function IsRemoveHidden()
{
    let isRemoveHiddenElem = document.getElementById("bamCheckHiddenRemove");
    return isRemoveHiddenElem.checked;
	return false;
}

function GetSlideImageCountStart()
{
    let bamSlideImageCountStart = document.getElementById("bamSlideImageCountStart");
	let resVal = parseFloat(bamSlideImageCountStart.value); 
    return resVal;
}

function GetSlideImageCountEnd()
{
    let bamSlideImageCountEnd = document.getElementById("bamSlideImageCountEnd");
	let resVal = parseFloat(bamSlideImageCountEnd.value); 
    return resVal;
}


function SetCheckboxValue(id, val)
{
	let tmpElem = document.getElementById(id);
	if(tmpElem)
	{
		if(val == "true")
			tmpElem.checked = true;
		else
			tmpElem.checked = false;
	}
}

function GetTextValue(id)
{
	let tmpElem = document.getElementById(id);
	return tmpElem.value;
}

function SetTextValue(id, val)
{
	let tmpElem = document.getElementById(id);
	if(tmpElem)
	{
		tmpElem.value = val;
	}
}

function SetNumberValue(id, val)
{
    let tmpElem = document.getElementById(id);

	let resVal = 0;

	//if( isInteger(val) )
	{

		resVal = parseInt(val);
		if(isNaN(resVal))
		{
			resVal = 0;
		}
	}

	tmpElem.value = resVal;
}

function OpenInitValue()
{
	//if( getCookie("bamCheckTitleChange") == null && getCookie("bamCheckContentsChange") == null && getCookie("bamCheckSlideImageChange") == null )
	if( getCookie("bamCheckTitleChange") == null )
	{
		SetCheckboxValue("bamCheckTitleChange", "false");
		SetCheckboxValue("bamCheckContentsChange", "true");
		SetCheckboxValue("bamCheckSlideImageChange", "true");
		SetCheckboxValue("bamCheckSlideImageRemove", "false");
		SetCheckboxValue("bamCheckHiddenRemove", "false");

		SetNumberValue("bamSlideImageCountStart", "5");
		SetNumberValue("bamSlideImageCountEnd", "10");
	}
	else
	{
		SetCheckboxValue("bamCheckTitleChange", getCookie("bamCheckTitleChange"));
		SetCheckboxValue("bamCheckContentsChange", getCookie("bamCheckContentsChange"));
		SetCheckboxValue("bamCheckSlideImageChange", getCookie("bamCheckSlideImageChange"));
		SetCheckboxValue("bamCheckSlideImageRemove", getCookie("bamCheckSlideImageRemove"));
		SetCheckboxValue("bamCheckHiddenRemove", getCookie("bamCheckHiddenRemove"));

		SetNumberValue("bamSlideImageCountStart", getCookie("bamSlideImageCountStart"));
		SetNumberValue("bamSlideImageCountEnd", getCookie("bamSlideImageCountEnd"));		

/*
		SetTextValue("bamIntroTitle1", getCookie("bamIntroTitle1"));

		SetTextValue("bamSubTitle1", getCookie("bamSubTitle1"));
		SetTextValue("bamSubTitle2", getCookie("bamSubTitle2"));
		SetTextValue("bamSubTitle3", getCookie("bamSubTitle3"));
		SetTextValue("bamSubTitle4", getCookie("bamSubTitle4"));
		SetTextValue("bamSubTitle5", getCookie("bamSubTitle5"));


		SetTextValue("bamEndTitle1", getCookie("bamEndTitle1"));
		SetTextValue("bamEndTitle2", getCookie("bamEndTitle2"));
		SetTextValue("bamEndTitle3", getCookie("bamEndTitle3"));
		SetTextValue("bamEndTitle4", getCookie("bamEndTitle4"));
		SetTextValue("bamEndTitle5", getCookie("bamEndTitle5"));
		SetTextValue("bamEndTitle6", getCookie("bamEndTitle6"));

		SetTextValue("bamCloseTitle1", getCookie("bamCloseTitle1"));
		*/

	}
}

function SaveInitValue()
{
	if(IsChangeTitle())
		setCookie("bamCheckTitleChange", "true", 365);
	else
		setCookie("bamCheckTitleChange", "false", 365);

	if(IsChangeContents())
		setCookie("bamCheckContentsChange", "true", 365);
	else
		setCookie("bamCheckContentsChange", "false", 365);

	if(IsChangeSlideImage())
		setCookie("bamCheckSlideImageChange", "true", 365);
	else
		setCookie("bamCheckSlideImageChange", "false", 365);

	if(IsRemoveHiddenSlideImage())
		setCookie("bamCheckSlideImageRemove", "true", 365);
	else
		setCookie("bamCheckSlideImageRemove", "false", 365);

	if(IsRemoveHidden())
		setCookie("bamCheckHiddenRemove", "true", 365);
	else
		setCookie("bamCheckHiddenRemove", "false", 365);

	setCookie("bamSlideImageCountStart", GetSlideImageCountStart(), 365);
	setCookie("bamSlideImageCountEnd", GetSlideImageCountEnd(), 365);

/*
	setCookie("bamIntroTitle1", GetTextValue("bamIntroTitle1"), 365);

	setCookie("bamSubTitle1", GetTextValue("bamSubTitle1"), 365);
	setCookie("bamSubTitle2", GetTextValue("bamSubTitle2"), 365);
	setCookie("bamSubTitle3", GetTextValue("bamSubTitle3"), 365);
	setCookie("bamSubTitle4", GetTextValue("bamSubTitle4"), 365);
	setCookie("bamSubTitle5", GetTextValue("bamSubTitle5"), 365);


	setCookie("bamEndTitle1", GetTextValue("bamEndTitle1"), 365);
	setCookie("bamEndTitle2", GetTextValue("bamEndTitle2"), 365);
	setCookie("bamEndTitle3", GetTextValue("bamEndTitle3"), 365);
	setCookie("bamEndTitle4", GetTextValue("bamEndTitle4"), 365);
	setCookie("bamEndTitle5", GetTextValue("bamEndTitle5"), 365);
	setCookie("bamEndTitle6", GetTextValue("bamEndTitle6"), 365);

	setCookie("bamCloseTitle1", GetTextValue("bamCloseTitle1"), 365);
	*/
}

function makeRefererUrl()
{
    let naverid = _bamNaverId;
    let logNo = _bamLogNo;    
    _bamReferer = "https://blog.naver.com/" + naverid + "/postupdate?logNo=" + logNo;
}

// === 카페 입출력 (blog과 동일한 문서모델 구조 재사용) ===
function requestCafeGet(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.withCredentials = true;
    try { xhr.setRequestHeader("x-cafe-product", "pc"); } catch(e){}
    try { xhr.setRequestHeader("accept", "application/json, text/plain, */*"); } catch(e){}
    xhr.send();
    return xhr.responseText;
}

function requestCafePostJson(url, body) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, false);
    xhr.withCredentials = true;
    try { xhr.setRequestHeader("Content-Type", "application/json"); } catch(e){}
    try { xhr.setRequestHeader("x-cafe-product", "pc"); } catch(e){}
    try { xhr.setRequestHeader("accept", "application/json, text/plain, */*"); } catch(e){}
    xhr.send(body);
    if (xhr.status < 200 || xhr.status >= 300) {
        console.log("cafe save status " + xhr.status + " : " + xhr.responseText);
        return null;
    }
    return xhr.responseText;
}

// art= 파라미터(JWT)에서 cafeId/articleId 추출
function bamDecodeArtParam() {
    try {
        let m = location.href.match(/[?&]art=([^&]+)/);
        if (!m) return null;
        let art = decodeURIComponent(m[1]);
        let parts = art.split('.');
        for (let i = 0; i < parts.length; i++) {
            try {
                let s = parts[i].replace(/-/g, '+').replace(/_/g, '/');
                while (s.length % 4) s += '=';
                let obj = JSON.parse(atob(s));
                if (obj && obj.cafeId && obj.articleId) return { cafeId: String(obj.cafeId), articleId: String(obj.articleId) };
            } catch (e) {}
        }
    } catch (e) {}
    return null;
}

function ParseCafePostURL() {
    _bamPostUrl = location.href;
    _bamCafeId = ""; _bamArticleId = ""; _bamMenuId = "1";
    let u = location.href;

    // 1) 숫자형: /cafes/{cafeId}/articles/{articleId} (ca-fe/f-e)
    let m = u.match(/\/cafes\/(\d+)\/articles\/(\d+)/);
    if (m) { _bamCafeId = m[1]; _bamArticleId = m[2]; }

    // 2) ArticleRead.nhn?clubid=&articleid=
    if (!_bamCafeId || !_bamArticleId) {
        let c = u.match(/clubid=(\d+)/i); let a = u.match(/articleid=(\d+)/i);
        if (c) _bamCafeId = _bamCafeId || c[1];
        if (a) _bamArticleId = _bamArticleId || a[1];
    }

    // 3) 공유링크 art= JWT (짧은주소 cafe.naver.com/{slug}/{articleId}?art=...)
    if (!_bamCafeId || !_bamArticleId) {
        let art = bamDecodeArtParam();
        if (art) { _bamCafeId = _bamCafeId || art.cafeId; _bamArticleId = _bamArticleId || art.articleId; }
    }

    // 4) 짧은주소 글번호 + 페이지 HTML에서 cafeId 최후 추출
    if (!_bamArticleId) {
        let am = u.match(/cafe\.naver\.com\/[^\/?#]+\/(\d+)/);
        if (am) _bamArticleId = am[1];
    }
    if (!_bamCafeId) {
        try {
            let h = document.documentElement.innerHTML;
            let cm = h.match(/["']?cafeId["']?\s*[:=]\s*"?(\d{4,})/);
            if (cm) _bamCafeId = cm[1];
        } catch (e) {}
    }

    let mid = u.match(/menuid=(\d+)/i); if (mid) _bamMenuId = mid[1];

    if (!_bamCafeId || !_bamArticleId) {
        alert("카페 글 정보를 찾지 못했습니다.\n글 상세 화면에서 실행하세요.");
        return false;
    }
    return true;
}

function ParseCafeDocumentModel() {
    try {
        let url = "https://apis.cafe.naver.com/editor/v2/cafes/" + _bamCafeId + "/editor?articleId=" + _bamArticleId + "&from=pc";
        let source = requestCafeGet(url);
        let root = JSON.parse(source);
        let r = root["result"];

        let contentJson = r["article"]["contentJson"];
        _bamDocumentModel = JSON.parse(contentJson);

        _bamCafeSubject = r["article"]["subject"] || "";
        if (r["selectedMenu"] && r["selectedMenu"]["menu"]) _bamMenuId = r["selectedMenu"]["menu"]["menuId"];
        _bamCafeOptions = r["options"] || {};

        // 깨진 null/undefined 컴포넌트 제거 (복구 + 안전)
        if (_bamDocumentModel && _bamDocumentModel["document"] && Array.isArray(_bamDocumentModel["document"]["components"])) {
            _bamDocumentModel["document"]["components"] = _bamDocumentModel["document"]["components"].filter(function(c){ return c !== null && c !== undefined; });
        }
        return true;
    } catch (ex) {
        console.log("ParseCafeDocumentModel Exception : " + ex);
        return false;
    }
}

function PostCafeContent() {
    try {
        // 키 순서 정렬(블로그와 동일 처리)
        const priorityKeys = ['id', '@ctype', 'layout'];
        const reordered = reorderObjectRecursively(_bamDocumentModel, priorityKeys);
        let contentJson = JSON.stringify(reordered);

        let subject = _bamCafeSubject;
        if (IsChangeTitle()) { let t = GetReplaceTitle(); if (t && t.length > 0) subject = t; }

        let opt = _bamCafeOptions || {};
        let article = {
            "cafeId": Number(_bamCafeId),
            "contentJson": contentJson,
            "from": "pc",
            "headId": 0,
            "menuId": Number(_bamMenuId),
            "subject": subject,
            "tagList": [],
            "editorVersion": 4,
            "parentId": 0,
            "open": (opt.open !== undefined ? opt.open : false),
            "naverOpen": (opt.naverOpen !== undefined ? opt.naverOpen : true),
            "externalOpen": (opt.externalOpen !== undefined ? opt.externalOpen : true),
            "enableComment": (opt.enableComment !== undefined ? opt.enableComment : true),
            "enableScrap": (opt.enableScrap !== undefined ? opt.enableScrap : true),
            "enableCopy": (opt.enableCopy !== undefined ? opt.enableCopy : true),
            "useAutoSource": (opt.useAutoSource !== undefined ? opt.useAutoSource : false),
            "cclTypes": (opt.cclTypes || []),
            "useCcl": false
        };

        let body = JSON.stringify({ "article": article });
        let url = "https://apis.cafe.naver.com/editor/v2.0/cafes/" + _bamCafeId + "/articles/" + _bamArticleId;
        let source = requestCafePostJson(url, body);
        if (source === null) return false;

        // 명시적 오류 표기가 있으면 실패 처리
        try {
            let rr = JSON.parse(source);
            if (rr && (rr["error"] || rr["errorCode"] || rr["isSuccess"] === false)) return false;
        } catch (e) {}
        return true;
    } catch (ex) {
        console.log("PostCafeContent Exception : " + ex);
        return false;
    }
}

function bamInitCafe() {
    if (window.self !== window.top) return;      // 최상위 프레임만
    if (document.getElementById("bamhobakExecute")) return;
    if (!document.body) return;

    var btn = document.createElement("button");
    btn.innerHTML = "🌰 히든 실행";
    btn.id = "bamhobakExecute";
    btn.type = "button";
    var base = 'position:fixed;top:120px;right:24px;z-index:2147483000;display:inline-flex;align-items:center;gap:6px;'
        + 'padding:10px 20px;background:linear-gradient(135deg,#2E9E5B,#27ae60);color:#fff;font-weight:bold;font-size:14px;'
        + 'line-height:1;border:none;border-radius:24px;cursor:pointer;box-shadow:0 4px 12px rgba(46,158,91,0.4);'
        + 'transition:all 0.15s ease;letter-spacing:0.3px;';
    btn.setAttribute('style', base);
    btn.addEventListener('mouseenter', function(){ btn.setAttribute('style', base + 'filter:brightness(1.06);transform:translateY(-1px);'); });
    btn.addEventListener('mouseleave', function(){ btn.setAttribute('style', base); });
    btn.addEventListener("click", open_hidden_program);

    document.body.appendChild(btn);
    initPopupLayer();
}

function ParsePostURL()
{
    if (_bamIsCafe) return ParseCafePostURL();

    // -- 초기화
    _bamPostUrl = "";
    _bamNaverId = "";
    _bamLogNo = "";
    _bamReferer = "";

    let postUrl = window.location.href;
    if(postUrl.length == 0)
    {
        return false;
    }

	/*
	if(IsChangeContents())
	{
		if(GetReplaceContent().length == 0)
		{
			alert("히든 내용을 입력하세요.");
			return false;
		}		
	}
	*/

    _bamPostUrl = postUrl;

    let tempNaverID = "";
    let tempLogNo = "";

    if(postUrl.indexOf("blog.naver.com") >= 0)
    {
        postUrl = postUrl.replace("https://blog.naver.com/", "");
        postUrl = postUrl.replace("http://blog.naver.com/", "");
    }

    let posSplash = postUrl.indexOf("/");
    if(posSplash >= 0)
    {
        tempNaverID = postUrl.substring(0, posSplash);
        tempLogNo = postUrl.substring(posSplash + 1);        
    }
    else
    {
        return false;
    }

    _bamNaverId = tempNaverID;
    _bamLogNo = tempLogNo;

    makeRefererUrl();

    return true;
}

function LoginAction()
{
    if (_bamIsCafe) return true;
    return isLoginBlog();
}

function ParsePopulationParams()
{
    if (_bamIsCafe) return true;

    let naverid = _bamNaverId;
    let logNo = _bamLogNo;
    let referer = _bamReferer;

    let url = "https://blog.naver.com/PostWriteFormManagerOptions.naver?blogId=" + naverid + "&logNo=" + logNo;
    let post = {
        'blogId':naverid,
        'logNo':logNo
    };

    try
    {
        let source = requestHttpPost(url, post, referer);

        rootObj = JSON.parse(source);
        let configuration = rootObj["result"]["formView"]["postConfiguration"];
        let populationMeta = rootObj["result"]["formView"]["postFormMeta"];
        let editorSource = rootObj["result"]["formView"]["editorSource"];

        let resultObject = {
            "configuration": configuration,
            "populationMeta": populationMeta,
            "editorSource": editorSource
        };

        _bamPopulationParams = {
            "blogId": naverid,
            "productApiVersion": "v1",
            "populationParams": JSON.stringify(resultObject)
        };

        
    }
    catch(ex)
    {
        _bamPopulationParams = {};
        console.log("ParsePopulationParams Exception : " + ex);
        return false;
    }

    return true;
}

function ParseDocumentModel()
{
    if (_bamIsCafe) return ParseCafeDocumentModel();

    let naverid = _bamNaverId;
    let logNo = _bamLogNo;
    let referer = _bamReferer;

    let url = "https://blog.naver.com/PostWriteFormSeOptions.naver?blogId=" + naverid + "&logNo=" + logNo;
    let post = {
        'blogId':naverid,
        'logNo':logNo
    };

    try
    {
        let source = requestHttpPost(url, post, referer);

        rootObj = JSON.parse(source);
        let modelText = rootObj["result"]["documentModel"];

		_bamDocumentModel = JSON.parse(modelText);

		// 과거 버그로 저장된 null/undefined 컴포넌트 제거 (수정 먹통 글 복구 + 안전)
		if (_bamDocumentModel && _bamDocumentModel["document"] && Array.isArray(_bamDocumentModel["document"]["components"]))
		{
			_bamDocumentModel["document"]["components"] = _bamDocumentModel["document"]["components"].filter(function(c){ return c !== null && c !== undefined; });
		}
    }
    catch(ex)
    {
        _bamDocumentModel = {};
		_bamDocumentModel = JSON.parse(_bamDocumentModel);

        console.log("ParseDocumentModel Exception : " + ex);
        return false;
    }

    return true;
}

function GetDocumentModelTitle() {

	let documentTitle = "";

    try
    {
		let rootObj = _bamDocumentModel;

		rootObj["document"]["components"].forEach(component => {
			if(component["@ctype"] == "documentTitle")
			{
				documentTitle = component["title"][0]["nodes"][0]["value"];
			}
		});
    }
    catch(ex)
    {
        console.log("GetDocumentModelTitle Exception : " + ex);
    }

    return documentTitle;
}

var _documentTitleNode;

function SaveDocumentModelTitle()
{
	
	try
    {
		let rootObj = _bamDocumentModel;

		rootObj["document"]["components"].forEach(component => {
			if(component["@ctype"] == "documentTitle")
			{
				_documentTitleNode = component;
			}
		});
    }
    catch(ex)
    {
        console.log("SaveDocumentModelTitle Exception : " + ex);
    }
}

function AnalysisDocumentModelTitle() {

    try
    {
        //let rootObj = JSON.parse(_bamDocumentModel);
		let rootObj = _bamDocumentModel;

		rootObj["document"]["components"].forEach(component => {
			if(component["@ctype"] == "documentTitle")
			{
				if(IsChangeTitle())
				{
					component["title"][0]["nodes"][0]["value"] = GetReplaceTitle();	
				}
			}
		});

//        let rootObjText = JSON.stringify(rootObj);
        
//        _bamDocumentModel = JSON.parse(rootObjText);
    }
    catch(ex)
    {
        console.log("AnalysisDocumentModelTitle Exception : " + ex);
        return false;
    }

    return true;
}

function InspectDocumentModel(inspectSEList)
{
    try
    {
        //rootObj = JSON.parse(_bamDocumentModel);
		let rootObj = _bamDocumentModel;

        let componentsObject = rootObj["document"]["components"];
        
		 // 삭제할 컴포넌트를 저장할 배열
        let removeComponents = [];

		
		componentsObject.forEach(jComponent => {
			if(jComponent["@ctype"] == "table" || jComponent["@ctype"] == "text" || jComponent["@ctype"] == "quotation")
			{
				let id = jComponent["id"];

				//for(let seObject of _bamSEList)
				for(let seObject of inspectSEList)					
                {                
                    if(id == seObject[0])
                    {
						removeComponents.push(jComponent);
					}
				}
			}
		});

        // 삭제할 컴포넌트 제거
        removeComponents.forEach(removeObject => {
            let index = componentsObject.indexOf(removeObject);
            if (index !== -1) {
                componentsObject.splice(index, 1);
            }
        });


		// 히든 인용구 중 등록된 아이디에 없는 인용구 처리(본문 복사시 발생)
		let removeHiddenComponents = [];

		componentsObject.forEach(jComponent => {
			if (jComponent["@ctype"] === "quotation" && jComponent["layout"].includes("se-blind") ) 
			{
				removeHiddenComponents.push(jComponent);
			}
			else if(jComponent["@ctype"] === "text")
			{
				let isBlindNode = false;

				jComponent["value"].forEach(textNode =>{
					if(textNode["style"] !== undefined && textNode["style"]["align"] !== undefined)
					{
						if( textNode["style"]["align"].includes("se-blind") )
						{
							isBlindNode = true;
							return true;
						}
					}
				});

				if(isBlindNode)
				{
					removeHiddenComponents.push(jComponent);
				}
			}
		});

		// 삭제할 컴포넌트 제거
        removeHiddenComponents.forEach(removeObject => {
            let index = componentsObject.indexOf(removeObject);
            if (index !== -1) {
                componentsObject.splice(index, 1);
            }
        });

//        let rootObjText = JSON.stringify(rootObj);
        
//        _bamDocumentModel = JSON.parse(rootObjText);
    }
    catch(ex)
    {
        console.log("InspectDocumentModel Exception : " + ex);
        return false;
    }

    return true;
}

function RemoveHiddenImageDocumentModel()
{
    try
    {
		let rootObj = _bamDocumentModel;

        let componentsObject = rootObj["document"]["components"];
        
		 // 삭제할 컴포넌트를 저장할 배열
        let removeComponents = [];
		
		componentsObject.forEach(jComponent => {
			if(jComponent["@ctype"] == "imageGroup" && jComponent["layout"].includes("se-blind"))
			{
				removeComponents.push(jComponent);
			}
		});

        // 삭제할 컴포넌트 제거
        removeComponents.forEach(removeObject => {
            let index = componentsObject.indexOf(removeObject);
            if (index !== -1) {
                componentsObject.splice(index, 1);
            }
        });


        let rootObjText = JSON.stringify(rootObj);
        
        _bamDocumentModel = JSON.parse(rootObjText);
    }
    catch(ex)
    {
        console.log("RemoveHiddenImageDocumentModel Exception : " + ex);
        return false;
    }

    return true;
}

function RemoveHiddenTableDocumentModel()
{
    try
    {
		let rootObj = _bamDocumentModel;

        let componentsObject = rootObj["document"]["components"];
        
		 // 삭제할 컴포넌트를 저장할 배열
        let removeComponents = [];
		componentsObject.forEach(jComponent => {
			if (jComponent["@ctype"] === "table" && jComponent["borderInlineStyle"].includes("absolute") ) {
				removeComponents.push(jComponent);
			}
		});

        // 삭제할 컴포넌트 제거
        removeComponents.forEach(removeObject => {
            let index = componentsObject.indexOf(removeObject);
            if (index !== -1) {
                componentsObject.splice(index, 1);
            }
        });


//        let rootObjText = JSON.stringify(rootObj);
        
//        _bamDocumentModel = JSON.parse(rootObjText);
    }
    catch(ex)
    {
        console.log("RemoveHiddenImageDocumentModel Exception : " + ex);
        return false;
    }

    return true;
}

function RemoveHiddenTextDocumentModel()
{
    try
    {
		let rootObj = _bamDocumentModel;

        let componentsObject = rootObj["document"]["components"];
        
		 // 삭제할 컴포넌트를 저장할 배열
        let removeComponents = [];
		componentsObject.forEach(jComponent => {

			if(jComponent["@ctype"] == "text")
			{

                let shouldRemove = false;

                // 2. value 속성이 있고 배열인지 확인 (문단 리스트)
                if (jComponent["value"] && Array.isArray(jComponent["value"])) {
                    
                    // 각 문단(paragraph) 순회
                    for (let paragraph of jComponent["value"]) {
                        
                        // nodes 속성이 있고 배열인지 확인 (노드 리스트)
                        if (paragraph["nodes"] && Array.isArray(paragraph["nodes"])) {
                            
                            // 각 노드(node) 순회
                            for (let node of paragraph["nodes"]) {
                                
                                // 3. 스타일 및 폰트 패밀리 확인
                                // 노드에 style이 있고, fontFamily가 있으며, 그 값에 'se-title-cover'가 포함된 경우
                                if (node["style"] && 
                                    node["style"]["fontFamily"] && 
                                    node["style"]["fontFamily"].indexOf("se-title-cover") > -1) {
                                    
                                    shouldRemove = true;
                                    break; // 노드를 찾았으므로 더 이상 내부 루프를 돌 필요 없음
                                }
                            }
                        }
                        if (shouldRemove) break; // 삭제 대상이면 문단 루프도 중단
                    }
                }

                // 4. 삭제 대상으로 판별되었으면 배열에 추가
                if (shouldRemove) {
                    removeComponents.push(jComponent);
                }
			}

		});

        // 삭제할 컴포넌트 제거
        removeComponents.forEach(removeObject => {
            let index = componentsObject.indexOf(removeObject);
            if (index !== -1) {
                componentsObject.splice(index, 1);
            }
        });


//        let rootObjText = JSON.stringify(rootObj);
        
//        _bamDocumentModel = JSON.parse(rootObjText);
    }
    catch(ex)
    {
        console.log("RemoveHiddenImageDocumentModel Exception : " + ex);
        return false;
    }

    return true;
}

function ExtractHiddenText()
{
	ParsePostURL();

    let naverid = _bamNaverId;
    let logNo = _bamLogNo;

	let url = `https://blog.naver.com/PostView.naver?blogId=${naverid}&logNo=${logNo}`;

	let resultText = requestHttpGet(url, null);

	// DOMParser를 사용하여 HTML 파싱
	const parser = new DOMParser();
	const doc = parser.parseFromString(resultText, 'text/html');

	// 제목 추출
	const titleNode = doc.querySelector('div.se-title-text');
	let title = "";
	if (titleNode) {
		title = titleNode.textContent.trim();
	}

	let replaceTitle = title;
	let replaceContent = "";

	let isExtract = false;

	// Table 개체 찾기
	for (let i = 0; i < _bamSEList.length; i++) {
		const seObject = _bamSEList[i];
		const divNode = doc.getElementById(seObject[3]); // seObject[3]이 ID를 나타낸다고 가정

		if (divNode) {

			if (replaceContent.length > 0) {
				replaceContent += " ";
			}
			replaceContent += divNode.textContent.trim();
			isExtract = true;
		}
	}


	// Paragraph 개체 찾기
	for (let i = 0; i < _bamSEList.length; i++) {
		const seObject = _bamSEList[i];
		const divNode = doc.getElementById(seObject[1]); // seObject[1]이 ID를 나타낸다고 가정

		if (divNode) {
			
			if (divNode.textContent == '\u200B')
			{
				continue;
			}
			
			if (replaceContent.length > 0) {
				replaceContent += " ";
			}
			//console.log(divNode.textContent);
			replaceContent += divNode.textContent.trim();
			isExtract = true;
		}
	}

	SetTextValue("bamTitle", replaceTitle);
	SetTextValue("bamContents", replaceContent);


	let foundTitleNodeCount = 0;

	let introTitleNo = 1;
	let subIntroTitleNo = 8;
	let subTitleNo = 8;
	let subSub1ContentNo = 8;
	let subSub2ContentNo = 8;
	let subSub3ContentNo = 8;
	let subSub4ContentNo = 8;
	let subSub5ContentNo = 8;
	let subSub6ContentNo = 8;
	let subSub7ContentNo = 8;
	let subSub8ContentNo = 8;
	let closeTitleNo = 1;

	

	// Tilte Node 개체 찾기
	for (let i = 0; i < _bamSETitleTextList.length; i++) {
		const seObject = _bamSETitleTextList[i];
		const divNode = doc.getElementById(seObject[1]); // seObject[1]이 ID를 나타낸다고 가정		

		if (divNode) {

			console.log("se object: " + seObject[1]);
			

			let foundText = divNode.textContent;
			foundTitleNodeCount++;


			if (divNode.textContent == '\u200B')
			{
				continue;
			}

//			const regex = /^\d+[\.\)]\s+/;  
//			foundText = foundText.replace(regex, '');

			// 인덱스(위치) 기반 매핑 - 빈 슬롯을 건너뛰어도 정확히 복원됨
			// 0:인사말제목 | 1..16:인사말내용 | 17..24:소제목 | 25..152:소제목내용(내용16 x 그룹8)
			if(i === 0)
			{
				SetTextValue("bamIntroTitle1", foundText);
			}
			else if(i <= 16)
			{
				SetTextValue("bamSubIntroTitle" + i, foundText);
			}
			else if(i <= 24)
			{
				SetTextValue("bamSubTitle" + (i - 16), foundText);
			}
			else if(i <= 152)
			{
				let c = Math.floor((i - 25) / 8) + 1;
				let g = ((i - 25) % 8) + 1;
				SetTextValue("bamSub" + c + "Content" + g, foundText);
			}
//			else if(foundTitleNodeCount <= introTitleNo + subIntroTitleNo + subTitleNo + subSub1ContentNo + subSub2ContentNo + subSub3ContentNo + subSub4ContentNo + closeTitleNo)
//			{
//				preAccum = introTitleNo + subIntroTitleNo + subTitleNo + subSub1ContentNo + subSub2ContentNo + subSub3ContentNo + subSub4ContentNo;
//				// 끝인사
//				SetTextValue("bamCloseTitle" + (foundTitleNodeCount - preAccum), foundText);
//			}
		}
	}

}

function AttachJsonNodeCustomPosition1() {
    try {
        let ReplaceContent = GetReplaceContent();

        let pCnt = 20;	// 최대 문단수 20개

        const contents = splitParagraph2Sentence(ReplaceContent, pCnt); // SplitParagraph 함수는 변환된 코드에 있어야 합니다.

		if( contents.length < pCnt)
		{
			pCnt = contents.length;
		}


        let nodeTexts = [];

        let cCnt = 0;
		let cTitleCnt = 4;


		let randomIndex = randomRange(0, _bamSEList.length - 1 - pCnt - cTitleCnt);
		//let randomIndex = randomRange(0, 5 - 1);

		let titleText = _documentTitleNode["title"][0]["nodes"][0]["value"];

		let titleQuotationNode = [];
		for(let i = 0; i < cTitleCnt; i++)
		{
			// 인용구 준비		
			//let addTitleText = replaceQuotationContent(getWordAt(titleText, i), _bamSEList[randomIndex++]);
			let addTitleText = replaceQuotationContent(getRandomWord(titleText), _bamSEList[randomIndex++]);			
			let addTitleTextObject = JSON.parse(addTitleText);
			titleQuotationNode.push(addTitleTextObject);
		}


        // ReplaceNodeContent 함수는 변환된 코드에 있어야 합니다.
        for (let i = 0; i < pCnt; i++) {
            nodeTexts[i] = replaceNodeContent(contents[i], _bamSEList[randomIndex + i]);
        }

		let rootObj = _bamDocumentModel;

        if (rootObj) {

			let componentsObject = rootObj["document"]["components"];

			let imageComponents = [];
		

			componentsObject.forEach(jComponent => {
				if (jComponent["@ctype"] === "imageGroup" && jComponent["layout"].includes("slide") ) {
					imageComponents.push(jComponent);
				}
            });

			let lastImageComponents = imageComponents.slice(-3);

			for(let imageCnt = 0; imageCnt < lastImageComponents.length; imageCnt++)
			{
				componentsObject.splice(componentsObject.indexOf(lastImageComponents[imageCnt]), 0, titleQuotationNode[imageCnt]);		// 앞에 삽입

				for(let i = 0; i < 5; i++)
				{
					if (nodeTexts[cCnt] !== undefined) 
					{
						let nodeObject = JSON.parse(nodeTexts[cCnt++]);
						componentsObject.splice(componentsObject.indexOf(lastImageComponents[imageCnt]), 0, nodeObject);		// 앞에 삽입
					}
				}
			}


			componentsObject.push(titleQuotationNode[titleQuotationNode.length -1]);

            // 삽입하지 못한 텍스트 몰아 넣기
            for (let i = cCnt; i < pCnt; i++) {
                let lastAddObject = JSON.parse(nodeTexts[i]);
                componentsObject.push(lastAddObject);
            }

	        let rootObjText = JSON.stringify(rootObj);

        
	        _bamDocumentModel = JSON.parse(rootObjText);

            return true;
        }
    } catch (ex) {
        console.log("AttachJsonNode3 Exception : " + ex);
        return false;
    }

    return false;
}

function AttachJsonNodeCustomPosition2() {
    try {
        let ReplaceContent = GetReplaceContent();

        let pCnt = 5;	// 최대 문단수 5개

		const contents = splitParagraphByWordLengthNoSpace(ReplaceContent, 5, 360);	// 360자 단위로 5개 문단으로 쪼개기

		if( contents.length < pCnt)
		{
			pCnt = contents.length;
		}


        let nodeTexts = [];

        let cCnt = 0;
		let cTitleCnt = 5;


		let randomIndex = randomRange(0, _bamSEList.length - 1 - pCnt - cTitleCnt);
		//let randomIndex = randomRange(0, 5 - 1);

		let titleText = _documentTitleNode["title"][0]["nodes"][0]["value"];

		let titleQuotationNode = [];
		for(let i = 0; i < cTitleCnt; i++)
		{
			// 인용구 준비		
			let addTitleText = replaceQuotationContent(getWordNormalizedAt(titleText, i), _bamSEList[randomIndex++]);
			let addTitleTextObject = JSON.parse(addTitleText);
			titleQuotationNode.push(addTitleTextObject);
		}


        // ReplaceNodeContent 함수는 변환된 코드에 있어야 합니다.
        for (let i = 0; i < pCnt; i++) {
			if( contents[i] !== undefined )
			{
				nodeTexts[i] = replaceNodeContent(contents[i], _bamSEList[randomIndex + i]);
			}
            
        }

		let rootObj = _bamDocumentModel;

        if (rootObj) {

			let componentsObject = rootObj["document"]["components"];

			let imageComponents = [];
		

			componentsObject.forEach(jComponent => {
				if (jComponent["@ctype"] === "imageGroup" && jComponent["layout"].includes("slide") ) {
					imageComponents.push(jComponent);
				}
            });

			let lastImageComponents = imageComponents.slice(-4);

			for(let imageCnt = 0; imageCnt < lastImageComponents.length; imageCnt++)
			{
				componentsObject.splice(componentsObject.indexOf(lastImageComponents[imageCnt]), 0, titleQuotationNode[imageCnt]);		// 앞에 삽입


				if (nodeTexts[cCnt] !== undefined) 
				{
					let nodeObject = JSON.parse(nodeTexts[cCnt++]);
					componentsObject.splice(componentsObject.indexOf(lastImageComponents[imageCnt]), 0, nodeObject);		// 앞에 삽입
				}

			}


			componentsObject.push(titleQuotationNode[titleQuotationNode.length -1]);

            // 삽입하지 못한 텍스트 몰아 넣기
            for (let i = cCnt; i < pCnt; i++) {
				if( nodeTexts[i] !== undefined )
				{
					let lastAddObject = JSON.parse(nodeTexts[i]);
					componentsObject.push(lastAddObject);					
				}
            }

	        let rootObjText = JSON.stringify(rootObj);

        
	        _bamDocumentModel = JSON.parse(rootObjText);

            return true;
        }
    } catch (ex) {
        console.log("AttachJsonNode3 Exception : " + ex);
        return false;
    }

    return false;
}

function AttachJsonNodeTrust1() {
    try {
        let ReplaceContent = GetReplaceContent();

		let rootObj = _bamDocumentModel;

		let componentsObject = rootObj["document"]["components"];


		// Extra 삽입
		let extraTargetComponents = [];
		componentsObject.forEach(jComponent => {
			if (jComponent["@ctype"] === "imageGroup" || jComponent["@ctype"] === "image" || jComponent["@ctype"] === "imageStrip") {
			//if(jComponent["@ctype"] == "imageGroup" && jComponent["layout"].includes("se-blind")) {
				extraTargetComponents.push(jComponent);
			}
		});


		//*** Start of Title
		let iCnt = 0;
		let tCnt = 0;

		let s1Cnt = 0;
		let s2Cnt = 0;

		let eCnt = 0;

		let indexOfHiddenIntroTitle = [1];
		let indexOfHiddenSubTitle = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
		let indexOfHiddenSub1Content = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
		let indexOfHiddenSub2Content = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

		let randomTitleIndex = randomRange(0, _bamSETitleTextList.length - indexOfHiddenIntroTitle.length - indexOfHiddenSubTitle.length - indexOfHiddenSub1Content.length - indexOfHiddenSub2Content.length - 1);

		let introTitleNodeObjects = [];
		let closeTitleNodeObjects = [];
		let subTitleNodeObjects = [];
		let sub1ContentNodeObjects = [];
		let sub2ContentNodeObjects = [];

		// IntroTitle 노드 정의
		for(let i = 0; i < indexOfHiddenIntroTitle.length; i++)
		{
			let introTitleValue = GetIntroTitle(i + 1);

			//if( introTitleValue !== undefined && introTitleValue !== "" )
			if( introTitleValue !== undefined )
			{
				let paragraphText = replaceNodeTitleFontStyle(introTitleValue, _bamSETitleTextList[randomTitleIndex++], _bamInjectNodeIntroTitleFontStyle);

				introTitleNodeObjects[i] = JSON.parse(paragraphText);
			}            
		}

		// SubTitle 노드 정의
		for(let i = 0; i < 10; i++)
		{
			let subTitleValue = GetSubTitle(i + 1);

			//if( subTitleValue !== undefined && subTitleValue !== "" )
			if( subTitleValue !== undefined )
			{

				let paragraphText = replaceNodeTitleFontStyle(subTitleValue, _bamSETitleTextList[randomTitleIndex++], _bamInjectNodeSubTitleFontStyle);

				subTitleNodeObjects[i] = JSON.parse(paragraphText);
			}            
		}

		// Sub1Content 노드 정의
		for(let i = 0; i < 10; i++)
		{
			let sub1ContentValue = GetSub1Content(i + 1);

			//if( subTitleValue !== undefined && subTitleValue !== "" )
			if( sub1ContentValue !== undefined )
			{

				let paragraphText = replaceNodeTitleFontStyle(sub1ContentValue, _bamSETitleTextList[randomTitleIndex++], _bamInjectNodeTextFontStyle);

				sub1ContentNodeObjects[i] = JSON.parse(paragraphText);
			}            
		}

		// Sub2Content 노드 정의
		for(let i = 0; i < 10; i++)
		{
			let sub2ContentValue = GetSub2Content(i + 1);

			//if( subTitleValue !== undefined && subTitleValue !== "" )
			if( sub2ContentValue !== undefined )
			{

				let paragraphText = replaceNodeTitleFontStyle(sub2ContentValue, _bamSETitleTextList[randomTitleIndex++], _bamInjectNodeTextFontStyle);

				sub2ContentNodeObjects[i] = JSON.parse(paragraphText);
			}            
		}



		// CloseTitle 노드 정의
		for(let i = 0; i < 1; i++)
		{
			let closeTitleValue = GetCloseTitle(i + 1);

			//if( introTitleValue !== undefined && introTitleValue !== "" )
			if( closeTitleValue !== undefined )
			{
				let paragraphText = replaceNodeTitleFontStyle(closeTitleValue, _bamSETitleTextList[randomTitleIndex++], _bamInjectNodeIntroTitleFontStyle);

				closeTitleNodeObjects[i] = JSON.parse(paragraphText);
			}            
		}


		// 입력 (introTitle)
		for(let i = 0; i < indexOfHiddenIntroTitle.length; i++)
		{
			let index = indexOfHiddenIntroTitle[i] - 1;

			if( extraTargetComponents[index] !== undefined )
			{
				if( introTitleNodeObjects[iCnt] !== undefined )
				{
					let nodeObject = introTitleNodeObjects[iCnt];

					componentsObject.splice(componentsObject.indexOf(extraTargetComponents[index]), 0, nodeObject);		// 앞에 삽입
					//componentsObject.splice(componentsObject.indexOf(extraTargetComponents[index]) + 1, 0, nodeObject);		// 뒤에 삽입
				}
				iCnt++;
			}
		}



		// 입력 (subTitle)
		for(let i = 0; i < indexOfHiddenSubTitle.length; i++)
		{
			let index = indexOfHiddenSubTitle[i] - 1;

			if( extraTargetComponents[index] !== undefined )
			{
				if( subTitleNodeObjects[tCnt] !== undefined )
				{
					let nodeObject = subTitleNodeObjects[tCnt];

					componentsObject.splice(componentsObject.indexOf(extraTargetComponents[index]), 0, nodeObject);		// 앞에 삽입
					//componentsObject.splice(componentsObject.indexOf(extraTargetComponents[index]) + 1, 0, nodeObject);		// 뒤에 삽입
				}
				tCnt++;
			}
		}

		// 입력 (sub1Content)
		for(let i = 0; i < indexOfHiddenSub1Content.length; i++)
		{
			let index = indexOfHiddenSub1Content[i] - 1;

			if( extraTargetComponents[index] !== undefined )
			{
				if( sub1ContentNodeObjects[s1Cnt] !== undefined )
				{
					let nodeObject = sub1ContentNodeObjects[s1Cnt];

					componentsObject.splice(componentsObject.indexOf(extraTargetComponents[index]), 0, nodeObject);		// 앞에 삽입
					//componentsObject.splice(componentsObject.indexOf(extraTargetComponents[index]) + 1, 0, nodeObject);		// 뒤에 삽입
				}
				s1Cnt++;
			}
		}

		// 입력 (sub2Content)
		for(let i = 0; i < indexOfHiddenSub2Content.length; i++)
		{
			let index = indexOfHiddenSub2Content[i] - 1;

			if( extraTargetComponents[index] !== undefined )
			{
				if( sub2ContentNodeObjects[s2Cnt] !== undefined )
				{
					let nodeObject = sub2ContentNodeObjects[s2Cnt];

					componentsObject.splice(componentsObject.indexOf(extraTargetComponents[index]), 0, nodeObject);		// 앞에 삽입
					//componentsObject.splice(componentsObject.indexOf(extraTargetComponents[index]) + 1, 0, nodeObject);		// 뒤에 삽입
				}
				s2Cnt++;
			}
		}



		// 끝인사 삽입
		for(let i = 0; i < closeTitleNodeObjects.length; i++)
		{
			if( closeTitleNodeObjects[i] !== undefined )
			{
				
				let closeTitleAddObject = closeTitleNodeObjects[i];
				componentsObject.push(closeTitleAddObject);
			}
		}

		return true;

    } catch (ex) {
        console.log("AttachJsonNodeTrust1 Exception : " + ex);
        return false;
    }

    return false;
}

function AttachJsonNodeTrust2() {
    try {
        let ReplaceContent = GetReplaceContent();

		let rootObj = _bamDocumentModel;

		let componentsObject = rootObj["document"]["components"];


		// Extra 삽입
		let extraTargetComponents = [];
		componentsObject.forEach(jComponent => {
			if (jComponent["@ctype"] === "imageGroup" || jComponent["@ctype"] === "image" || jComponent["@ctype"] === "imageStrip") {
			//if(jComponent["@ctype"] == "imageGroup" && jComponent["layout"].includes("se-blind")) {
				extraTargetComponents.push(jComponent);
			}
		});


		//*** Start of Title
		let iCnt = 0;
		let tCnt = 0;

		let s1Cnt = 0;
		let s2Cnt = 0;
		let s3Cnt = 0;
		let s4Cnt = 0;
		let s5Cnt = 0;
		let s6Cnt = 0;
		let s7Cnt = 0;
		let s8Cnt = 0;

		let eCnt = 0;

		let indexOfHiddenIntroTitle = [1];
		let indexOfHiddenSubTitle = [2, 3, 4, 5, 6, 7, 8, 9];
		let indexOfHiddenSub1Content = [2, 3, 4, 5, 6, 7, 8, 9];
		let indexOfHiddenSub2Content = [2, 3, 4, 5, 6, 7, 8, 9];
		let indexOfHiddenSub3Content = [2, 3, 4, 5, 6, 7, 8, 9];
		let indexOfHiddenSub4Content = [2, 3, 4, 5, 6, 7, 8, 9];
		let indexOfHiddenSub5Content = [2, 3, 4, 5, 6, 7, 8, 9];
		let indexOfHiddenSub6Content = [2, 3, 4, 5, 6, 7, 8, 9];
		let indexOfHiddenSub7Content = [2, 3, 4, 5, 6, 7, 8, 9];
		let indexOfHiddenSub8Content = [2, 3, 4, 5, 6, 7, 8, 9];

		//let randomTitleIndex = randomRange(0, _bamSETitleTextList.length - indexOfHiddenIntroTitle.length - indexOfHiddenSubTitle.length - indexOfHiddenSub1Content.length - indexOfHiddenSub2Content.length - indexOfHiddenSub3Content.length - indexOfHiddenSub4Content.length - 1);
		let randomTitleIndex = 0;

		console.log("randomTitleIndex: " + randomTitleIndex);

		let introTitleNodeObjects = [];
		let subIntroTitleNodeObjects = [];

		let closeTitleNodeObjects = [];
		let subTitleNodeObjects = [];
		let sub1ContentNodeObjects = [];
		let sub2ContentNodeObjects = [];
		let sub3ContentNodeObjects = [];
		let sub4ContentNodeObjects = [];
		let sub5ContentNodeObjects = [];
		let sub6ContentNodeObjects = [];
		let sub7ContentNodeObjects = [];
		let sub8ContentNodeObjects = [];


		// IntroTitle 노드 정의
		for(let i = 0; i < indexOfHiddenIntroTitle.length; i++)
		{
			let introTitleValue = GetIntroTitle(i + 1);

			//if( introTitleValue !== undefined && introTitleValue !== "" )
			if( introTitleValue !== undefined && introTitleValue.trim() !== "" )
			{
				let paragraphText = replaceNodeTitleFontStyle(introTitleValue, _bamSETitleTextList[randomTitleIndex], _bamInjectNodeIntroTitleFontStyle);

				introTitleNodeObjects[i] = JSON.parse(paragraphText);
			}            
			randomTitleIndex++;
		}


		// SubIntroTitle 노드 정의 (인사말 내용 1..16)
		for(let i = 0; i < 16; i++)
		{
			let el = document.getElementById('bamSubIntroTitle' + (i + 1));
			let subIntroTitleValue = el ? removeControlCharacters(el.value) : undefined;

			if( subIntroTitleValue !== undefined && subIntroTitleValue.trim() !== "" )
			{
				let paragraphText = replaceNodeTitleFontStyle(subIntroTitleValue, _bamSETitleTextList[randomTitleIndex], _bamInjectNodeTextFontStyle);
				subIntroTitleNodeObjects[i] = JSON.parse(paragraphText);
			}
			randomTitleIndex++;
		}


		// SubTitle 노드 정의
		for(let i = 0; i < 8; i++)
		{
			let subTitleValue = GetSubTitle(i + 1);

			//if( subTitleValue !== undefined && subTitleValue !== "" )
			if( subTitleValue !== undefined && subTitleValue.trim() !== "" )
			{

				let paragraphText = replaceNodeTitleFontStyle(subTitleValue, _bamSETitleTextList[randomTitleIndex], _bamInjectNodeSubTitleFontStyle);

				subTitleNodeObjects[i] = JSON.parse(paragraphText);
			}            
			randomTitleIndex++;
		}

		// 내용 노드 정의 (내용번호 c=1..16, 그룹 g=1..8)
		let contentNodeObjects = [];
		for (let c = 1; c <= 16; c++)
		{
			contentNodeObjects[c] = [];
			for (let i = 0; i < 8; i++)
			{
				let el = document.getElementById('bamSub' + c + 'Content' + (i + 1));
				let val = el ? removeControlCharacters(el.value) : undefined;
				if (val !== undefined && val.trim() !== "")
				{
					let paragraphText = replaceNodeTitleFontStyle(val, _bamSETitleTextList[randomTitleIndex], _bamInjectNodeTextFontStyle);
					contentNodeObjects[c][i] = JSON.parse(paragraphText);
				}
				randomTitleIndex++;
			}
		}


//		// CloseTitle 노드 정의
//		for(let i = 0; i < 1; i++)
//		{
//			let closeTitleValue = GetCloseTitle(i + 1);
//
//			//if( introTitleValue !== undefined && introTitleValue !== "" )
//			if( closeTitleValue !== undefined )
//			{
//				let paragraphText = replaceNodeTitleFontStyle(closeTitleValue, _bamSETitleTextList[randomTitleIndex], _bamInjectNodeIntroTitleFontStyle);
//
//				closeTitleNodeObjects[i] = JSON.parse(paragraphText);
//			}            
//			randomTitleIndex++;
//		}



		// 입력 (introTitle)
		for(let i = 0; i < indexOfHiddenIntroTitle.length; i++)
		{
			let index = indexOfHiddenIntroTitle[i] - 1;

			if( extraTargetComponents[index] !== undefined )
			{
				if( introTitleNodeObjects[iCnt] !== undefined )
				{
					let nodeObject = introTitleNodeObjects[iCnt];

					componentsObject.splice(componentsObject.indexOf(extraTargetComponents[index]), 0, nodeObject);		// 앞에 삽입
					//componentsObject.splice(componentsObject.indexOf(extraTargetComponents[index]) + 1, 0, nodeObject);		// 뒤에 삽입


					for(let j = 0; j < subIntroTitleNodeObjects.length; j++)
					{
						let subNodeObject = subIntroTitleNodeObjects[j];
						if( subNodeObject === undefined ) continue;		// 빈 칸(구멍)은 건너뜀 - null 컴포넌트 방지

						componentsObject.splice(componentsObject.indexOf(extraTargetComponents[index]), 0, subNodeObject);		// 앞에 삽입
					}

				}
				iCnt++;
			}
		}


		// 입력 (subTitle)
		for(let i = 0; i < indexOfHiddenSubTitle.length; i++)
		{
			let index = indexOfHiddenSubTitle[i] - 1;

			if( extraTargetComponents[index] !== undefined )
			{
				if( subTitleNodeObjects[tCnt] !== undefined )
				{
					let nodeObject = subTitleNodeObjects[tCnt];

					componentsObject.splice(componentsObject.indexOf(extraTargetComponents[index]), 0, nodeObject);		// 앞에 삽입
					//componentsObject.splice(componentsObject.indexOf(extraTargetComponents[index]) + 1, 0, nodeObject);		// 뒤에 삽입
				}
				tCnt++;
			}
		}

		// 내용 삽입 (내용번호 c=1..16)
		let indexOfHiddenContent = [2, 3, 4, 5, 6, 7, 8, 9];
		for (let c = 1; c <= 16; c++)
		{
			let cCnt = 0;
			for (let i = 0; i < indexOfHiddenContent.length; i++)
			{
				let index = indexOfHiddenContent[i] - 1;
				if (extraTargetComponents[index] !== undefined)
				{
					if (contentNodeObjects[c][cCnt] !== undefined)
					{
						let nodeObject = contentNodeObjects[c][cCnt];
						componentsObject.splice(componentsObject.indexOf(extraTargetComponents[index]), 0, nodeObject);
					}
					cCnt++;
				}
			}
		}

		// 이미지 슬롯 수(availSlots)보다 많은 소제목/내용은 짤리지 않고 본문 맨 아래에 순서대로 이어붙임
		let availSlots = 0;
		for (let i = 0; i < indexOfHiddenContent.length; i++)
		{
			if (extraTargetComponents[indexOfHiddenContent[i] - 1] !== undefined) availSlots++;
		}
		for (let g = availSlots; g < 8; g++)
		{
			if (subTitleNodeObjects[g] !== undefined)
				componentsObject.push(subTitleNodeObjects[g]);

			for (let c = 1; c <= 16; c++)
			{
				if (contentNodeObjects[c] !== undefined && contentNodeObjects[c][g] !== undefined)
					componentsObject.push(contentNodeObjects[c][g]);
			}
		}


//		// 끝인사 삽입
//		for(let i = 0; i < closeTitleNodeObjects.length; i++)
//		{
//			if( closeTitleNodeObjects[i] !== undefined )
//			{
//				let closeTitleAddObject = closeTitleNodeObjects[i];
//				componentsObject.push(closeTitleAddObject);
//			}
//		}

		return true;

    } catch (ex) {
        console.log("AttachJsonNodeTrust2 Exception : " + ex);
        return false;
    }

    return false;
}

function AttachJsonNodeCustomPosition9() {
    try {
        let ReplaceContent = GetReplaceContent();

		let rootObj = _bamDocumentModel;

		let componentsObject = rootObj["document"]["components"];


		// Extra 삽입
		let extraTargetComponents = [];
		componentsObject.forEach(jComponent => {
			if (jComponent["@ctype"] === "imageGroup" || jComponent["@ctype"] === "image" || jComponent["@ctype"] === "imageStrip") {
			//if(jComponent["@ctype"] == "imageGroup" && jComponent["layout"].includes("se-blind")) {
				extraTargetComponents.push(jComponent);
			}
		});




		//*** Start of Hidden Text
		let indexOfHiddenText = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];


        let pCnt = 4;	// 최대 문단수 4개
        let cCnt = 0;


		// 별도 입력 카운트 구하기
		pCnt = Math.floor(extraTargetComponents.length);
		pCnt = Math.min(pCnt, indexOfHiddenText.length);
		pCnt = pCnt + 1;		// 마지막 1개를 포함


		// 마지막 문단 준비
		let resObj = extractTailByCharCount(ReplaceContent, 50);		// 마지막 문단 100단기준으로 추출

		let lastNodeText = resObj.extractedText;		
		ReplaceContent = resObj.remainingText;

		let lastNodeObject = undefined;


		// 문단 준비
		let pContents = splitParagraphBySentenceAndLength(ReplaceContent, 100, 50);	// 80자씩 나누기 (구두점.!?를 기준으로)

		pCnt = pContents.length;


		let randomIndex = randomRange(0, _bamSEList.length - 1 - pCnt - 1);	// 마지막 문단 1도 추가로 제외해야됨

		let nodeObjects = [];

        // ReplaceNodeContent 함수는 변환된 코드에 있어야 합니다.
        for (let i = 0; i < pContents.length; i++) {
			if( pContents[i] !== undefined )
			{
				let paragraphText = "";

				if (i % 2 !== 0) {
					// Bold (짝수 일때)
					paragraphText = replaceNodeContentFontStyleBold(pContents[i], _bamSEList[randomIndex++]);
				}
				else
				{
					// 일반 (홀수 일때)
					paragraphText = replaceNodeContentFontStyle(pContents[i], _bamSEList[randomIndex++]);
				}

				nodeObjects[i] = JSON.parse(paragraphText);
			}            
        }

		// 마지막 문단 입력 준비
		if(lastNodeText && lastNodeText.length > 0)
		{
			let paragraphText = replaceNodeContentFontStyle(lastNodeText, _bamSEList[randomIndex++]);
			lastNodeObject = JSON.parse(paragraphText);
		}



		// 별도 입력 삽입
		for(let i = 0; i < indexOfHiddenText.length; i++)
		{
			let index = indexOfHiddenText[i] - 1;

			if( extraTargetComponents[index] !== undefined )
			{
				for(let j = 0; j < 3; j++)
				{
					if( nodeObjects[cCnt] !== undefined )
					{
						let nodeObject = nodeObjects[cCnt];

						componentsObject.splice(componentsObject.indexOf(extraTargetComponents[index]), 0, nodeObject);		// 앞에 삽입
						//componentsObject.splice(componentsObject.indexOf(extraTargetComponents[index]) + 1, 0, nodeObject);		// 뒤에 삽입
					}
					cCnt++;					
				}
			}
		}

		// 마지막 슬라이드
		let insertTargetComponent = extraTargetComponents[extraTargetComponents.length - 1];

		if( insertTargetComponent !== undefined )
		{
			for (let i = cCnt; i < pCnt; i++) {

				if( nodeObjects[i] !== undefined )
				{
					let lastAddObject = nodeObjects[i];
					componentsObject.splice(componentsObject.indexOf(insertTargetComponent), 0, lastAddObject);		// 앞에 삽입
				}

				cCnt++;
			}

		}
		// 삽입하지 못한 텍스트 몰아 넣기
		/*
		for (let i = cCnt; i < pCnt; i++) {

			if( nodeObjects[i] !== undefined )
			{
				let lastAddObject = nodeObjects[i];
				componentsObject.push(lastAddObject);
			}

			cCnt++;
		}
		*/

		// 마지막 문단 삽입
		if(lastNodeObject !== undefined)
		{
			componentsObject.push(lastNodeObject);
		}

		return true;

    } catch (ex) {
        console.log("AttachJsonNode8 Exception : " + ex);
        return false;
    }

    return false;
}

function AttachJsonNodeCustomPosition8() {
    try {
        let ReplaceContent = GetReplaceContent();

		let rootObj = _bamDocumentModel;

		let componentsObject = rootObj["document"]["components"];


		// Extra 삽입
		let extraTargetComponents = [];
		componentsObject.forEach(jComponent => {
			if (jComponent["@ctype"] === "imageGroup" || jComponent["@ctype"] === "image" || jComponent["@ctype"] === "imageStrip") {
			//if(jComponent["@ctype"] == "imageGroup" && jComponent["layout"].includes("se-blind")) {
				extraTargetComponents.push(jComponent);
			}
		});


		//*** Start of Title
		let iCnt = 0;
		let tCnt = 0;
		let eCnt = 0;

		let indexOfHiddenIntroTitle = [1];
		let indexOfHiddenSubTitle = [2, 3, 4, 5, 6];
		let randomTitleIndex = randomRange(0, _bamSETitleTextList.length - indexOfHiddenIntroTitle.length - indexOfHiddenSubTitle.length - 6);		// 대략적으로 10 앞이면 될듯.

		let introTitleNodeObjects = [];
		let closeTitleNodeObjects = [];
		let subTitleNodeObjects = [];
		let endTitleNodeObjects = [];

		// IntroTitle 노드 정의
		for(let i = 0; i < indexOfHiddenIntroTitle.length; i++)
		{
			let introTitleValue = GetIntroTitle(i + 1);

			//if( introTitleValue !== undefined && introTitleValue !== "" )
			if( introTitleValue !== undefined )
			{
				let paragraphText = replaceNodeTitleFontStyle(introTitleValue, _bamSETitleTextList[randomTitleIndex++], _bamInjectNodeIntroTitleFontStyle);

				introTitleNodeObjects[i] = JSON.parse(paragraphText);
			}            
		}

		// SubTitle 노드 정의
		for(let i = 0; i < 5; i++)
		{
			let subTitleValue = GetSubTitle(i + 1);

			//if( subTitleValue !== undefined && subTitleValue !== "" )
			if( subTitleValue !== undefined )
			{
//				if( subTitleValue !== "")
//				{
//					subTitleValue = (i+1) + ". " + subTitleValue;
//				}

				let paragraphText = replaceNodeTitleFontStyle(subTitleValue, _bamSETitleTextList[randomTitleIndex++], _bamInjectNodeSubTitleFontStyle);

				subTitleNodeObjects[i] = JSON.parse(paragraphText);
			}            
		}

		// EndTitle 노드 정의
		for(let i = 0; i < 6; i++)
		{
			let endTitleValue = GetEndTitle(i + 1);

			//if( endTitleValue !== undefined && endTitleValue !== "" )
			if( endTitleValue !== undefined  )
			{
//				if(i > 0)
//				{
//					if(endTitleValue !== "")
//					{
//						endTitleValue = i + ") " + endTitleValue;
//					}
//				}

				//let paragraphText = replaceNodeTitleFontStyle(endTitleValue, _bamSETitleTextList[randomTitleIndex++], _bamInjectNodeEndTitleFontStyle);
				//endTitleNodeObjects[i] = JSON.parse(paragraphText);

				let nodeStyle = _bamInjectNodeEndTitleFontStyle1;

				if(i == 0)
				{
					nodeStyle = _bamInjectNodeEndTitleFontStyle1;
				}
				else
				{
					nodeStyle = _bamInjectNodeEndTitleFontStyle2;
				}

				let paragraphText = replaceNodeTitleFontStyle(endTitleValue, _bamSETitleTextList[randomTitleIndex++], nodeStyle);
				endTitleNodeObjects[i] = JSON.parse(paragraphText);
			}            
		}

		// CloseTitle 노드 정의
		for(let i = 0; i < 1; i++)
		{
			let closeTitleValue = GetCloseTitle(i + 1);

			//if( introTitleValue !== undefined && introTitleValue !== "" )
			if( closeTitleValue !== undefined )
			{
				let paragraphText = replaceNodeTitleFontStyle(closeTitleValue, _bamSETitleTextList[randomTitleIndex++], _bamInjectNodeIntroTitleFontStyle);

				closeTitleNodeObjects[i] = JSON.parse(paragraphText);
			}            
		}


		// 입력 (introTitle)
		for(let i = 0; i < indexOfHiddenIntroTitle.length; i++)
		{
			let index = indexOfHiddenIntroTitle[i] - 1;

			if( extraTargetComponents[index] !== undefined )
			{
				if( introTitleNodeObjects[iCnt] !== undefined )
				{
					let nodeObject = introTitleNodeObjects[iCnt];

					componentsObject.splice(componentsObject.indexOf(extraTargetComponents[index]), 0, nodeObject);		// 앞에 삽입
					//componentsObject.splice(componentsObject.indexOf(extraTargetComponents[index]) + 1, 0, nodeObject);		// 뒤에 삽입
				}
				iCnt++;
			}
		}

/*
		// 끝제목 입력(EndTitle)
		let endTitleIndex = indexOfHiddenIntroTitle[0] - 1;
		let insertEndTitleTargetComponent = extraTargetComponents[endTitleIndex];

		if( insertEndTitleTargetComponent !== undefined )
		{
			for(let i = 0; i < 6; i++)
			{
				if( endTitleNodeObjects[eCnt] !== undefined )
				{
					let endTitleAddObject = endTitleNodeObjects[eCnt];
					componentsObject.splice(componentsObject.indexOf(insertEndTitleTargetComponent), 0, endTitleAddObject);		// 앞에 삽입
				}

				eCnt++;
			}
		}
*/



		// 입력 (subTitle)
		for(let i = 0; i < indexOfHiddenSubTitle.length; i++)
		{
			let index = indexOfHiddenSubTitle[i] - 1;

			if( extraTargetComponents[index] !== undefined )
			{
				if( subTitleNodeObjects[tCnt] !== undefined )
				{
					let nodeObject = subTitleNodeObjects[tCnt];

					componentsObject.splice(componentsObject.indexOf(extraTargetComponents[index]), 0, nodeObject);		// 앞에 삽입
					//componentsObject.splice(componentsObject.indexOf(extraTargetComponents[index]) + 1, 0, nodeObject);		// 뒤에 삽입
				}
				tCnt++;
			}
		}



		//*** Start of Hidden Text
		let indexOfHiddenText = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];		


        let pCnt = 4;	// 최대 문단수 4개
        let cCnt = 0;


		// 별도 입력 카운트 구하기
		pCnt = Math.floor(extraTargetComponents.length);
		pCnt = Math.min(pCnt, indexOfHiddenText.length);
		pCnt = pCnt + 1;		// 마지막 1개를 포함


		// 마지막 문단 준비
		let resObj = extractTailByCharCount(ReplaceContent, 50);		// 마지막 문단 100단기준으로 추출

		let lastNodeText = resObj.extractedText;		
		ReplaceContent = resObj.remainingText;

		let lastNodeObject = undefined;


		// 문단 준비
		//let pContents = splitParagraphBySentenceAndLength(ReplaceContent, pCnt, 500);	// 500자씩 나누기 (구두점.!?를 기준으로)
		let pContents = splitParagraphBySentenceAndLength(ReplaceContent, 100, 80);	// 80자씩 나누기 (구두점.!?를 기준으로)

		pCnt = pContents.length;


		let randomIndex = randomRange(0, _bamSEList.length - 1 - pCnt - 1);	// 마지막 문단 1도 추가로 제외해야됨

		let nodeObjects = [];

        // ReplaceNodeContent 함수는 변환된 코드에 있어야 합니다.
        for (let i = 0; i < pContents.length; i++) {
			if( pContents[i] !== undefined )
			{
				let paragraphText = "";

				if (i % 2 !== 0) {
					// Bold (짝수 일때)
					paragraphText = replaceNodeContentFontStyleBold(pContents[i], _bamSEList[randomIndex++]);
				}
				else
				{
					// 일반 (홀수 일때)
					paragraphText = replaceNodeContentFontStyle(pContents[i], _bamSEList[randomIndex++]);
				}

				nodeObjects[i] = JSON.parse(paragraphText);
			}            
        }

		// 마지막 문단 입력 준비
		if(lastNodeText && lastNodeText.length > 0)
		{
			let paragraphText = replaceNodeContentFontStyle(lastNodeText, _bamSEList[randomIndex++]);
			lastNodeObject = JSON.parse(paragraphText);
		}



		// 별도 입력 삽입
		for(let i = 0; i < indexOfHiddenText.length; i++)
		{
			let index = indexOfHiddenText[i] - 1;

			if( extraTargetComponents[index] !== undefined )
			{
				for(let j = 0; j < 2; j++)
				{
					if( nodeObjects[cCnt] !== undefined )
					{
						let nodeObject = nodeObjects[cCnt];

						componentsObject.splice(componentsObject.indexOf(extraTargetComponents[index]), 0, nodeObject);		// 앞에 삽입
						//componentsObject.splice(componentsObject.indexOf(extraTargetComponents[index]) + 1, 0, nodeObject);		// 뒤에 삽입
					}
					cCnt++;					
				}
			}
		}

		// 마지막 슬라이드
		let insertTargetComponent = extraTargetComponents[extraTargetComponents.length - 1];

		if( insertTargetComponent !== undefined )
		{
			for (let i = cCnt; i < pCnt; i++) {

				if( nodeObjects[i] !== undefined )
				{
					let lastAddObject = nodeObjects[i];
					componentsObject.splice(componentsObject.indexOf(insertTargetComponent), 0, lastAddObject);		// 앞에 삽입
				}

				cCnt++;
			}

			/*
			// 끝제목
			for(let i = 0; i < 6; i++)
			{
				if( endTitleNodeObjects[eCnt] !== undefined )
				{
					let endTitleAddObject = endTitleNodeObjects[eCnt];
					componentsObject.splice(componentsObject.indexOf(insertTargetComponent), 0, endTitleAddObject);		// 앞에 삽입
				}

				eCnt++;
			}
			*/
		}

		// 삽입하지 못한 텍스트 몰아 넣기
		/*
		for (let i = cCnt; i < pCnt; i++) {

			if( nodeObjects[i] !== undefined )
			{
				let lastAddObject = nodeObjects[i];
				componentsObject.push(lastAddObject);
			}

			cCnt++;
		}
		*/

		// 마지막 문단 삽입
		if(lastNodeObject !== undefined)
		{
			componentsObject.push(lastNodeObject);
		}

		// 끝제목 삽입
		for(let i = 0; i < 6; i++)
		{
			if( endTitleNodeObjects[eCnt] !== undefined )
			{
				
				let endTitleAddObject = endTitleNodeObjects[eCnt];
				componentsObject.push(endTitleAddObject);
			}

			eCnt++;
		}

		// 끝인사 삽입
		for(let i = 0; i < closeTitleNodeObjects.length; i++)
		{
			if( closeTitleNodeObjects[i] !== undefined )
			{
				
				let closeTitleAddObject = closeTitleNodeObjects[i];
				componentsObject.push(closeTitleAddObject);
			}
		}

		return true;

    } catch (ex) {
        console.log("AttachJsonNode8 Exception : " + ex);
        return false;
    }

    return false;
}

function AttachJsonNodeCustomPosition7() {
    try {
        let ReplaceContent = GetReplaceContent();

		let rootObj = _bamDocumentModel;

		let componentsObject = rootObj["document"]["components"];


		// Extra 삽입
		let extraTargetComponents = [];
		componentsObject.forEach(jComponent => {
			if (jComponent["@ctype"] === "imageGroup" || jComponent["@ctype"] === "image" || jComponent["@ctype"] === "imageStrip") {				
				extraTargetComponents.push(jComponent);
			}
		});


		// 히든 본문 삽입 오브젝트 획득
		let hiddenComponents = [];
		componentsObject.forEach(jComponent => {
			if (jComponent["@ctype"] === "table" && jComponent["borderInlineStyle"].includes("absolute") ) {
				hiddenComponents.push(jComponent);
			}
		});

		//let indexOfHiddenText = [1, 2, 3, 4, 6, 7, 8, 9, 11, 12, 13, 14];
		let indexOfHiddenText = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

		
		//let indexOfHiddenImage = [5, 10];
		let indexOfHiddenImage = [];


        let pCnt = 4 * 3;	// 최대 문단수 5개
        let cCnt = 0;

		let cExtraQuotationCnt = 14;		// 별도 입력 (본문 사용)
		let cExQuoCnt = 0;

		// 별도 입력 카운트 구하기
		cExtraQuotationCnt = Math.floor(extraTargetComponents.length);

		cExtraQuotationCnt = Math.min(cExtraQuotationCnt, 14);


		let randomIndex = randomRange(0, _bamSEList.length - 1 - pCnt - cExtraQuotationCnt - 1);	// 마지막 문단 1도 추가로 제외해야됨


		// 마지막 문단 준비
		let resObj = extractTailByCharCount(ReplaceContent, 100);		// 마지막 문단 100단기준으로 추출

		let lastNodeText = resObj.extractedText;		
		ReplaceContent = resObj.remainingText;

		let lastNodeObject = undefined;

		// 문단 준비
		let pContents = splitParagraphByWordLengthNoSpace(ReplaceContent, pCnt + indexOfHiddenText.length, 150);	// 150자씩 문단으로 나누기		


		let nodeObjects = [];

        // ReplaceNodeContent 함수는 변환된 코드에 있어야 합니다.
        for (let i = 0; i < pContents.length; i++) {
			if( pContents[i] !== undefined )
			{
				let paragraphText = replaceNodeContentFontStyle(pContents[i], _bamSEList[randomIndex++]);
				//let paragraphText = replaceNodeContent(i + " ::: " + pContents[i + cExtraQuotationCnt], _bamSEList[randomIndex++]);

				nodeObjects[i] = JSON.parse(paragraphText);
			}            
        }

		// 마지막 문단 입력 준비
		if(lastNodeText && lastNodeText.length > 0)
		{
			let paragraphText = replaceNodeContentFontStyle(lastNodeText, _bamSEList[randomIndex++]);
			lastNodeObject = JSON.parse(paragraphText);
		}


		// 별도 입력 삽입
		for(let i = 0; i < indexOfHiddenText.length; i++)
		{
			let index = indexOfHiddenText[i] - 1;

			if( extraTargetComponents[index] !== undefined )
			{
				if( nodeObjects[cCnt] !== undefined )
				{
					let nodeObject = nodeObjects[cCnt];
					componentsObject.splice(componentsObject.indexOf(extraTargetComponents[index]), 0, nodeObject);		// 앞에 삽입
				}
				cCnt++;
			}
		}


		// 최초 슬라이드
		let changeTargetComponent = hiddenComponents[0];

		if( changeTargetComponent !== undefined )
		{
			// Title 뒤에 삽입
			let addTargetTitleComponents = null;

			// 첫 인용구 아래 없으면 본문 맨위(타이틀 뒤)			
			componentsObject.forEach(component => {
				if(component["@ctype"] == "quotation")
				{
					if(addTargetTitleComponents == null)
					{
						addTargetTitleComponents = component;
					}
				}
			});

			if(addTargetTitleComponents == null)
			{
				componentsObject.forEach(component => {
					if(component["@ctype"] == "documentTitle")
					{
						if(addTargetTitleComponents == null)
						{
							addTargetTitleComponents = component;
						}
					}
				});
			}

			if(addTargetTitleComponents !== undefined && addTargetTitleComponents !== null)
			{
				let removeIndex = componentsObject.indexOf(changeTargetComponent);
				if (removeIndex !== -1) {
					// 기존 위치에서 삭제
					componentsObject.splice(removeIndex, 1);

					// 타겟(첫 인용구 혹은 타이틀) 뒤로 삽입
					componentsObject.splice(componentsObject.indexOf(addTargetTitleComponents) + 1, 0, changeTargetComponent);

					hiddenComponents = hiddenComponents.slice(1);
				}
			}
		}


		// 슬라이드 이미지 위치 조정
		for(let i = 0; i < indexOfHiddenImage.length; i++)
		{
			let index = indexOfHiddenImage[i] - 1;

			if( extraTargetComponents[index] !== undefined )
			{
				if( hiddenComponents[0] !== undefined )
				{
					let targetComponent = hiddenComponents[0];
					let positionComponet = extraTargetComponents[index];

					let removeIndex = componentsObject.indexOf(targetComponent);
					if (removeIndex !== -1) {
						// 기존 위치에서 삭제
						componentsObject.splice(removeIndex, 1);

						// 타겟의 앞에 위치
						componentsObject.splice(componentsObject.indexOf(positionComponet), 0, targetComponent);

						hiddenComponents = hiddenComponents.slice(1);
					}
				}
			}
		}

		// 나머지 슬라이드부터 앞에 1개씩 노드 추가
		for(let i = 0; i < hiddenComponents.length; i++)
		{
			for(let j = 0; j < 1; j++)
			{
				if( nodeObjects[cCnt] !== undefined )
				{
					let nodeObject = nodeObjects[cCnt];	
					//componentsObject.splice(componentsObject.indexOf(insertTargetComponent) + 1 + j, 0, nodeObject);		// 뒤에 삽입
					componentsObject.splice(componentsObject.indexOf(hiddenComponents[i]), 0, nodeObject);		// 앞에 삽입
				}
				cCnt++;
			}
		}

		// 삽입하지 못한 텍스트 몰아 넣기
		for (let i = cCnt; i < pCnt; i++) {

			if( nodeObjects[i] !== undefined )
			{
				let lastAddObject = nodeObjects[i];
				componentsObject.push(lastAddObject);
			}

			cCnt++;
		}


		if(lastNodeObject !== undefined)
		{
			componentsObject.push(lastNodeObject);
		}

		return true;

    } catch (ex) {
        console.log("AttachJsonNode7 Exception : " + ex);
        return false;
    }

    return false;
}

function AttachJsonNodeCustomPosition6() {
    try {
        let ReplaceContent = GetReplaceContent();

		let rootObj = _bamDocumentModel;

		let componentsObject = rootObj["document"]["components"];


		// Extra 삽입
		let extraTargetComponents = [];
		componentsObject.forEach(jComponent => {
			if (jComponent["@ctype"] === "imageGroup" || jComponent["@ctype"] === "image" || jComponent["@ctype"] === "imageStrip") {				
				extraTargetComponents.push(jComponent);
			}
		});


		// 히든 본문 삽입 오브젝트 획득
		let hiddenComponents = [];
		componentsObject.forEach(jComponent => {
			if (jComponent["@ctype"] === "table" && jComponent["borderInlineStyle"].includes("absolute") ) {
				hiddenComponents.push(jComponent);
			}
		});

		let indexOfHiddenText = [1, 2, 4, 5, 7, 8, 10, 11];
		let indexOfHiddenImage = [3, 6, 9, 12]


        let pCnt = 4 * 3;	// 최대 문단수 5개
        let cCnt = 0;

		let cExtraQuotationCnt = 12;		// 별도 입력 (본문 사용)
		let cExQuoCnt = 0;

		// 별도 입력 카운트 구하기
		cExtraQuotationCnt = Math.floor(extraTargetComponents.length);

		cExtraQuotationCnt = Math.min(cExtraQuotationCnt, 12);


		let randomIndex = randomRange(0, _bamSEList.length - 1 - pCnt - cExtraQuotationCnt);



		// 문단 준비
		let pContents = splitParagraphByWordLengthNoSpace(ReplaceContent, pCnt + indexOfHiddenText.length, 200);	// 200자씩 문단으로 나누기		


		let nodeObjects = [];

        // ReplaceNodeContent 함수는 변환된 코드에 있어야 합니다.
        for (let i = 0; i < pContents.length; i++) {
			if( pContents[i] !== undefined )
			{
				let paragraphText = replaceNodeContent(pContents[i], _bamSEList[randomIndex++]);
				//let paragraphText = replaceNodeContent(i + " ::: " + pContents[i + cExtraQuotationCnt], _bamSEList[randomIndex++]);

				nodeObjects[i] = JSON.parse(paragraphText);
			}            
        }


		// 별도 입력 삽입
		for(let i = 0; i < indexOfHiddenText.length; i++)
		{
			let index = indexOfHiddenText[i] - 1;

			if( extraTargetComponents[index] !== undefined )
			{
				if( nodeObjects[cCnt] !== undefined )
				{
					let nodeObject = nodeObjects[cCnt];
					componentsObject.splice(componentsObject.indexOf(extraTargetComponents[index]), 0, nodeObject);		// 앞에 삽입
				}
				cCnt++;
			}
		}

		// 최초 슬라이드
		let changeTargetComponent = hiddenComponents[0];

		if( changeTargetComponent !== undefined )
		{
			// Title 뒤에 삽입
			let addTargetTitleComponents = null;

			// 첫 인용구 아래 없으면 본문 맨위(타이틀 뒤)			
			componentsObject.forEach(component => {
				if(component["@ctype"] == "quotation")
				{
					if(addTargetTitleComponents == null)
					{
						addTargetTitleComponents = component;
					}
				}
			});

			if(addTargetTitleComponents == null)
			{
				componentsObject.forEach(component => {
					if(component["@ctype"] == "documentTitle")
					{
						if(addTargetTitleComponents == null)
						{
							addTargetTitleComponents = component;
						}
					}
				});
			}

			if(addTargetTitleComponents !== undefined && addTargetTitleComponents !== null)
			{
				let removeIndex = componentsObject.indexOf(changeTargetComponent);
				if (removeIndex !== -1) {
					// 기존 위치에서 삭제
					componentsObject.splice(removeIndex, 1);

					// 타겟(첫 인용구 혹은 타이틀) 뒤로 삽입
					componentsObject.splice(componentsObject.indexOf(addTargetTitleComponents) + 1, 0, changeTargetComponent);

					hiddenComponents = hiddenComponents.slice(1);
				}
			}
		}

		// 슬라이드 이미지 위치 조정
		for(let i = 0; i < indexOfHiddenImage.length; i++)
		{
			let index = indexOfHiddenImage[i] - 1;

			if( extraTargetComponents[index] !== undefined )
			{
				if( hiddenComponents[0] !== undefined )
				{
					let targetComponent = hiddenComponents[0];
					let positionComponet = extraTargetComponents[index];

					let removeIndex = componentsObject.indexOf(targetComponent);
					if (removeIndex !== -1) {
						// 기존 위치에서 삭제
						componentsObject.splice(removeIndex, 1);

						// 타겟의 앞에 위치
						componentsObject.splice(componentsObject.indexOf(positionComponet), 0, targetComponent);

						hiddenComponents = hiddenComponents.slice(1);
					}
				}
			}
		}

		// 나머지 슬라이드부터 앞에 2개씩 노드 추가
		for(let i = 0; i < hiddenComponents.length; i++)
		{
			for(let j = 0; j < 2; j++)
			{
				if( nodeObjects[cCnt] !== undefined )
				{
					let nodeObject = nodeObjects[cCnt];	
					//componentsObject.splice(componentsObject.indexOf(insertTargetComponent) + 1 + j, 0, nodeObject);		// 뒤에 삽입
					componentsObject.splice(componentsObject.indexOf(hiddenComponents[i]), 0, nodeObject);		// 앞에 삽입
				}
				cCnt++;
			}
		}

		// 삽입하지 못한 텍스트 몰아 넣기
		for (let i = cCnt; i < pCnt; i++) {

			if( nodeObjects[i] !== undefined )
			{
				let lastAddObject = nodeObjects[i];
				componentsObject.push(lastAddObject);
			}

			cCnt++;
		}


		return true;

    } catch (ex) {
        console.log("AttachJsonNode6 Exception : " + ex);
        return false;
    }

    return false;
}

function AttachJsonNodeCustomPosition5() {
    try {
        let ReplaceContent = GetReplaceContent();

		let rootObj = _bamDocumentModel;

		let componentsObject = rootObj["document"]["components"];


		// Extra 삽입
		let extraTargetComponents = [];
		componentsObject.forEach(jComponent => {
			if (jComponent["@ctype"] === "imageGroup" || jComponent["@ctype"] === "image" || jComponent["@ctype"] === "imageStrip") {				
				extraTargetComponents.push(jComponent);
			}
		});


		// 히든 본문 삽입 오브젝트 획득
		let hiddenComponents = [];
		componentsObject.forEach(jComponent => {
			if (jComponent["@ctype"] === "table" && jComponent["borderInlineStyle"].includes("absolute") ) {
				hiddenComponents.push(jComponent);
			}
		});


        let pCnt = 4 * 3;	// 최대 문단수 5개
        let cCnt = 0;

		let cExtraQuotationCnt = 12;		// 별도 입력 (본문 사용)
		let cExQuoCnt = 0;

		// 별도 입력 카운트 구하기
		cExtraQuotationCnt = Math.floor(extraTargetComponents.length);

		cExtraQuotationCnt = Math.min(cExtraQuotationCnt, 12);


		let randomIndex = randomRange(0, _bamSEList.length - 1 - pCnt - cExtraQuotationCnt - 1); // 마지막 문단 1도 추가로 제외해야됨
		

		// 마지막 문단 준비
		let resObj = extractTailByCharCount(ReplaceContent, 100);		// 마지막 문단 100단기준으로 추출

		let lastNodeText = resObj.extractedText;		
		ReplaceContent = resObj.remainingText;

		let lastNodeObject = undefined;


		// 문단 준비
		let pContents = splitParagraphByWordLengthNoSpace(ReplaceContent, pCnt + cExtraQuotationCnt, 150);	// 150자씩 문단으로 나누기

		
		// 별도 입력 문구 준비
		let extraNodeObjects = [];
		for(let i = 0; i < cExtraQuotationCnt; i++)
		{
			let extractedSentence = pContents[i];

			if(extractedSentence == undefined || extractedSentence.length == 0)
			{
				extraNodeObjects[i] = undefined;
			}
			else
			{
				let extraText = replaceNodeContent(extractedSentence, _bamSEList[randomIndex++]);
				//let extraText = replaceNodeContent(i + " /// " + extractedSentence, _bamSEList[randomIndex++]);

				extraNodeObjects[i] = JSON.parse(extraText);
			}
		}


		if( (pContents.length - cExtraQuotationCnt) < pCnt)
		{
			pCnt = pContents.length - cExtraQuotationCnt;
		}

		let nodeObjects = [];

        // ReplaceNodeContent 함수는 변환된 코드에 있어야 합니다.
        for (let i = 0; i < pCnt; i++) {
			if( pContents[i + cExtraQuotationCnt] !== undefined )
			{
				let paragraphText = replaceNodeContent(pContents[i + cExtraQuotationCnt], _bamSEList[randomIndex++]);
				//let paragraphText = replaceNodeContent(i + " ::: " + pContents[i + cExtraQuotationCnt], _bamSEList[randomIndex++]);

				nodeObjects[i] = JSON.parse(paragraphText);
			}            
        }

		// 마지막 문단 입력 준비
		if(lastNodeText && lastNodeText.length > 0)
		{
			let paragraphText = replaceNodeContent(lastNodeText, _bamSEList[randomIndex++]);
			lastNodeObject = JSON.parse(paragraphText);
		}

		// 별도 입력 삽입
		for(let i = 0; i < cExtraQuotationCnt; i++)
		{
			let index = i+1;

			if (extraNodeObjects[i] !== undefined && extraTargetComponents[index] !== undefined)
			{
				let nodeObject = extraNodeObjects[i];
				componentsObject.splice(componentsObject.indexOf(extraTargetComponents[index]), 0, nodeObject);		// 앞에 삽입
				//console.log("extra insert: " + index);
			}
		}

		// 마지막 전전전 슬라이드
		let changeTargetComponent = hiddenComponents[hiddenComponents.length - 4];

		if( changeTargetComponent !== undefined )
		{
			// Title 뒤에 삽입
			let addTargetTitleComponents = null;

			componentsObject.forEach(component => {
				if(component["@ctype"] == "documentTitle")
				{
					if(addTargetTitleComponents == null)
					{
						addTargetTitleComponents = component;
					}
				}
			});

			if(addTargetTitleComponents !== undefined && addTargetTitleComponents !== null)
			{
				let removeIndex = componentsObject.indexOf(changeTargetComponent);
				if (removeIndex !== -1) {
					// 기존 위치에서 삭제
					componentsObject.splice(removeIndex, 1);

					// 타이틀 뒤로 삽입
					componentsObject.splice(componentsObject.indexOf(addTargetTitleComponents) + 1, 0, changeTargetComponent);
				}
			}
		}

		// 마지막 전전 슬라이드
		let insertTargetComponent = hiddenComponents[hiddenComponents.length - 3];

		if( insertTargetComponent !== undefined )
		{
			for(let j = 0; j < 2; j++)
			{
				if( nodeObjects[cCnt] !== undefined )
				{
					let nodeObject = nodeObjects[cCnt];	
					//componentsObject.splice(componentsObject.indexOf(insertTargetComponent) + 1 + j, 0, nodeObject);		// 뒤에 삽입
					componentsObject.splice(componentsObject.indexOf(insertTargetComponent), 0, nodeObject);		// 앞에 삽입
				}
				cCnt++;
			}
		}

		// 마지막 전 슬라이드
		insertTargetComponent = hiddenComponents[hiddenComponents.length - 2];

		if( insertTargetComponent !== undefined )
		{
			for(let j = 0; j < 2; j++)
			{
				if( nodeObjects[cCnt] !== undefined )
				{
					let nodeObject = nodeObjects[cCnt];	
					//componentsObject.splice(componentsObject.indexOf(insertTargetComponent) + 1 + j, 0, nodeObject);		// 뒤에 삽입
					componentsObject.splice(componentsObject.indexOf(insertTargetComponent), 0, nodeObject);		// 앞에 삽입
				}
				cCnt++;
			}
		}


		// 마지막 슬라이드
		insertTargetComponent = hiddenComponents[hiddenComponents.length - 1];

		if( insertTargetComponent !== undefined )
		{
			//for(let j = 0; j < 2; j++)
			for (let j = cCnt; j < pCnt; j++)
			{
				if( nodeObjects[cCnt] !== undefined )
				{
					let nodeObject = nodeObjects[cCnt];	
					//componentsObject.splice(componentsObject.indexOf(insertTargetComponent) + 1 + j, 0, nodeObject);		// 뒤에 삽입
					componentsObject.splice(componentsObject.indexOf(insertTargetComponent), 0, nodeObject);		// 앞에 삽입
				}
				cCnt++;
			}
		}


		// 삽입하지 못한 텍스트 몰아 넣기
		for (let i = cCnt; i < pCnt; i++) {

			if( nodeObjects[i] !== undefined )
			{
				let lastAddObject = nodeObjects[i];
				componentsObject.push(lastAddObject);
			}

			cCnt++;
		}

		if(lastNodeObject !== undefined)
		{
			componentsObject.push(lastNodeObject);
		}

//		let rootObjText = JSON.stringify(rootObj);

	
//		_bamDocumentModel = JSON.parse(rootObjText);

		return true;

    } catch (ex) {
        console.log("AttachJsonNode5 Exception : " + ex);
        return false;
    }

    return false;
}

function AttachJsonNodeCustomPosition4() {
    try {
        let ReplaceContent = GetReplaceContent();

		let rootObj = _bamDocumentModel;

		let componentsObject = rootObj["document"]["components"];


		// 히든처리된 이미지 슬라이드 찾기
		let hiddenImageSlideTargetComponents = [];
		componentsObject.forEach(jComponent => {
			if (jComponent["@ctype"] === "imageGroup" && jComponent["layout"].includes("se-blind")) {
				hiddenImageSlideTargetComponents.push(jComponent);
			}
		});

		if(hiddenImageSlideTargetComponents[0] !== undefined)
		{
			let index = componentsObject.indexOf(hiddenImageSlideTargetComponents[0]);
            if (index !== -1) {
                componentsObject.splice(index, 1);
            }
		}

		// Extra 인용구 삽입
		let extraTargetComponents = [];
		componentsObject.forEach(jComponent => {
			if (jComponent["@ctype"] === "imageGroup" || jComponent["@ctype"] === "image" || jComponent["@ctype"] === "formula" || jComponent["@ctype"] === "oglink" ) {
				extraTargetComponents.push(jComponent);
			}
		});



        let pCnt = 4;	// 최대 문단수 5개
        let cCnt = 0;
		let cQuotationCnt = 4;

		let cExtraQuotationCnt = 2;		// 별도 입력 인용구 (본문 사용)
		let cExQuoCnt = 0;

		// 별도 인용구 입력 카운트 구하기
		cExtraQuotationCnt = Math.floor(extraTargetComponents.length / 5);
		console.log("cExtraQuotationCnt: " + cExtraQuotationCnt);

		cExtraQuotationCnt = Math.min(cExtraQuotationCnt, 3);


		let randomIndex = randomRange(0, _bamSEList.length - 1 - pCnt - cQuotationCnt - (pCnt*5*3) - cExtraQuotationCnt);		// 4*3: 90자씩 4번 들어가고 뒤에 줄내림 2번 추가


		// 문단 준비
		let contents = splitParagraphByWordLengthNoSpace(ReplaceContent, pCnt, 450);	// 450자 단위로 4개 문단으로 쪼개기

		if( contents.length < pCnt)
		{
			pCnt = contents.length;
			cQuotationCnt = contents.length;
		}

		let nodeObjects = [];

		let titleQuotationNode = [];

        // ReplaceNodeContent 함수는 변환된 코드에 있어야 합니다.
        for (let i = 0; i < pCnt; i++) {
			if( contents[i] !== undefined )
			{
				// 인용구 준비
				let words = contents[i].split(' ');
				let extracted = words.slice(0, 4);
				let extractedSentence = extracted.join(' ');

				let remaining = words.slice(4);
				let remainingSentence = remaining.join(' ');

				contents[i] = remainingSentence;

				let addTitleText = replaceQuotationContent(extractedSentence, _bamSEList[randomIndex++]);
				let addTitleTextObject = JSON.parse(addTitleText);
				titleQuotationNode.push(addTitleTextObject);
				// End of 인용구 준비

				let paragraphText = replaceParagraphContent(_bamSEList[randomIndex++]);
				nodeObjects[i] = JSON.parse(paragraphText);

				const paragraphDetails = splitParagraphByWordLengthNoSpace(contents[i], 5, 90);	// 90자 단위로 4개 문단으로 쪼개기

				if(paragraphDetails.length == 0)
				{
					nodeObjects[i] = undefined;
				}

				for(let j = 0; j < paragraphDetails.length; j++)
				{
					let pDetailNodeText = replaceParagraphDetailContent(paragraphDetails[j], _bamSEList[randomIndex++]);
					let pDetailNodeEnterText1 = replaceParagraphDetailContent("", _bamSEList[randomIndex++]);
					let pDetailNodeEnterText2 = replaceParagraphDetailContent("", _bamSEList[randomIndex++]);

					let addDetailObject1 = JSON.parse(pDetailNodeText);
					let addDetailObject2 = JSON.parse(pDetailNodeEnterText1);
					let addDetailObject3 = JSON.parse(pDetailNodeEnterText2);

					nodeObjects[i].value.push(addDetailObject1);
					nodeObjects[i].value.push(addDetailObject2);
					nodeObjects[i].value.push(addDetailObject3);
				}
			}
            
        }


		// Title 뒤에 삽입
		let addTargetTitleComponents = null;

		componentsObject.forEach(component => {
			if(component["@ctype"] == "documentTitle")
			{
				if(addTargetTitleComponents == null)
				{
					addTargetTitleComponents = component;
				}
			}
		});

		if(addTargetTitleComponents != null)
		{
			if (nodeObjects[cCnt] !== undefined)
			{
				let nodeObject = nodeObjects[cCnt];
				componentsObject.splice(componentsObject.indexOf(addTargetTitleComponents) + 1, 0, nodeObject);		// 뒤에 삽입
			}

			if( titleQuotationNode[cCnt] !== undefined )
			{
				componentsObject.splice(componentsObject.indexOf(addTargetTitleComponents) + 1, 0, titleQuotationNode[cCnt]);		// 뒤에 삽입
			}					

			if(hiddenImageSlideTargetComponents[0] !== undefined)
			{
				componentsObject.splice(componentsObject.indexOf(addTargetTitleComponents) + 1, 0, hiddenImageSlideTargetComponents[0]);		// 뒤에 삽입
			}

			cCnt++;
		}
		// End of Title 뒤에 삽입


		for(let i = 0; i < cExtraQuotationCnt; i++)
		{
			let index = (i+1) * 5 -1;


			if (nodeObjects[cCnt] !== undefined)
			{
				let nodeObject = nodeObjects[cCnt];
				componentsObject.splice(componentsObject.indexOf(extraTargetComponents[index]) + 1, 0, nodeObject);		// 뒤에 삽입
			}

			if( titleQuotationNode[cCnt] !== undefined )
			{
				componentsObject.splice(componentsObject.indexOf(extraTargetComponents[index]) + 1, 0, titleQuotationNode[cCnt]);		// 뒤에 삽입
			}					

			cCnt++;
		}




		// 히든 본문(인용구 포함) 삽입
		let imageComponents = [];
		componentsObject.forEach(jComponent => {
			if (jComponent["@ctype"] === "imageGroup" && jComponent["layout"].includes("slide") ) {
				imageComponents.push(jComponent);
			}
		});


		// 마지막 전 슬라이드 앞에 2번 입력
		let insertTargetComponent = imageComponents[imageComponents.length - 2];

		if( insertTargetComponent !== undefined )
		{
			let insertTotalCount = Math.max(0, pCnt - cCnt - 2);

			//for(let i = 0; i < pCnt; i++)
			for(let i = 0; i < insertTotalCount; i++)
			{
				if( titleQuotationNode[i] !== undefined )
				{
					componentsObject.splice(componentsObject.indexOf(insertTargetComponent), 0, titleQuotationNode[i]);		// 앞에 삽입
				}					


				if (nodeObjects[i] !== undefined)
				{
					let nodeObject = nodeObjects[i];
					componentsObject.splice(componentsObject.indexOf(insertTargetComponent), 0, nodeObject);		// 앞에 삽입
				}					

				cCnt++;
			}
		}

		// 마지막 슬라이드 앞에 나머지 입력
		insertTargetComponent = imageComponents[imageComponents.length - 1];

		if( insertTargetComponent !== undefined )
		{
			for(let i = cCnt; i < pCnt; i++)
			{
				if( titleQuotationNode[i] !== undefined )
				{
					componentsObject.splice(componentsObject.indexOf(insertTargetComponent), 0, titleQuotationNode[i]);		// 앞에 삽입
				}					


				if (nodeObjects[i] !== undefined)
				{
					let nodeObject = nodeObjects[i];
					componentsObject.splice(componentsObject.indexOf(insertTargetComponent), 0, nodeObject);		// 앞에 삽입
				}					

				cCnt++;
			}
		}

		// 삽입하지 못한 텍스트 몰아 넣기
		for (let i = cCnt; i < pCnt; i++) {
			
			if(titleQuotationNode[i] !== undefined)
			{
				componentsObject.push(titleQuotationNode[i]);
			}


			if( nodeObjects[i] !== undefined )
			{
				let lastAddObject = nodeObjects[i];
				componentsObject.push(lastAddObject);					
			}

			cCnt++;
		}

		let rootObjText = JSON.stringify(rootObj);

	
		_bamDocumentModel = JSON.parse(rootObjText);

		return true;

    } catch (ex) {
        console.log("AttachJsonNode4 Exception : " + ex);
        return false;
    }

    return false;
}

function AttachJsonNodeCustomPosition3() {
    try {
        let ReplaceContent = GetReplaceContent();

		let rootObj = _bamDocumentModel;

		let componentsObject = rootObj["document"]["components"];


		// Extra 인용구 삽입
		let extraTargetComponents = [];
		componentsObject.forEach(jComponent => {
			if (jComponent["@ctype"] === "imageGroup" || jComponent["@ctype"] === "image" || jComponent["@ctype"] === "formula" || jComponent["@ctype"] === "oglink" ) {
				extraTargetComponents.push(jComponent);
			}
		});



        let pCnt = 4;	// 최대 문단수 5개
        let cCnt = 0;
		let cQuotationCnt = 4;

		let cExtraQuotationCnt = 2;		// 별도 입력 인용구 (본문 사용)
		let cExQuoCnt = 0;

		// 별도 인용구 입력 카운트 구하기
		cExtraQuotationCnt = Math.floor(extraTargetComponents.length / 5);
		console.log("cExtraQuotationCnt: " + cExtraQuotationCnt);


		let randomIndex = randomRange(0, _bamSEList.length - 1 - pCnt - cQuotationCnt - (pCnt*5*3) - cExtraQuotationCnt);		// 4*3: 90자씩 4번 들어가고 뒤에 줄내림 2번 추가

		// Extra 인용구 준비
		let extraQuotationNode = [];
		for(let i = 0; i < cExtraQuotationCnt; i++)
		{
			// 인용구 준비
			let words = ReplaceContent.split(' ');
			let extracted = words.slice(0, 4);
			let extractedSentence = extracted.join(' ');

			let remaining = words.slice(4);
			let remainingSentence = remaining.join(' ');

			ReplaceContent = remainingSentence;

			if(extractedSentence !== undefined && extractedSentence !== "")
			{
				let addTitleText = replaceQuotationContent(extractedSentence, _bamSEList[randomIndex++]);
				let addTitleTextObject = JSON.parse(addTitleText);
				extraQuotationNode.push(addTitleTextObject);				
			}
		}

		for(let i = 0; i < extraQuotationNode.length; i++)
		{
			let index = (i+1) * 5 -1;
			componentsObject.splice(componentsObject.indexOf(extraTargetComponents[index]) + 1, 0, extraQuotationNode[cExQuoCnt++]);
		}


		// 문단 준비
		let contents = splitParagraphByWordLengthNoSpace(ReplaceContent, pCnt, 450);	// 450자 단위로 4개 문단으로 쪼개기

		if( contents.length < pCnt)
		{
			pCnt = contents.length;
			cQuotationCnt = contents.length;
		}

		let nodeObjects = [];


		let titleText = _documentTitleNode["title"][0]["nodes"][0]["value"];

		let titleQuotationNode = [];

        // ReplaceNodeContent 함수는 변환된 코드에 있어야 합니다.
        for (let i = 0; i < pCnt; i++) {
			if( contents[i] !== undefined )
			{
				// 인용구 준비
				let words = contents[i].split(' ');
				let extracted = words.slice(0, 4);
				let extractedSentence = extracted.join(' ');

				let remaining = words.slice(4);
				let remainingSentence = remaining.join(' ');

				contents[i] = remainingSentence;

				let addTitleText = replaceQuotationContent(extractedSentence, _bamSEList[randomIndex++]);
				let addTitleTextObject = JSON.parse(addTitleText);
				titleQuotationNode.push(addTitleTextObject);
				// End of 인용구 준비

				let paragraphText = replaceParagraphContent(_bamSEList[randomIndex++]);
				nodeObjects[i] = JSON.parse(paragraphText);

				const paragraphDetails = splitParagraphByWordLengthNoSpace(contents[i], 5, 90);	// 90자 단위로 4개 문단으로 쪼개기

				for(let j = 0; j < paragraphDetails.length; j++)
				{
					let pDetailNodeText = replaceParagraphDetailContent(paragraphDetails[j], _bamSEList[randomIndex++]);
					let pDetailNodeEnterText1 = replaceParagraphDetailContent("", _bamSEList[randomIndex++]);
					let pDetailNodeEnterText2 = replaceParagraphDetailContent("", _bamSEList[randomIndex++]);

					let addDetailObject1 = JSON.parse(pDetailNodeText);
					let addDetailObject2 = JSON.parse(pDetailNodeEnterText1);
					let addDetailObject3 = JSON.parse(pDetailNodeEnterText2);

					nodeObjects[i].value.push(addDetailObject1);
					nodeObjects[i].value.push(addDetailObject2);
					nodeObjects[i].value.push(addDetailObject3);
				}
			}
            
        }






		// 히든 본문(인용구 포함) 삽입
		let imageComponents = [];
		componentsObject.forEach(jComponent => {
			if (jComponent["@ctype"] === "imageGroup" && jComponent["layout"].includes("slide") ) {
				imageComponents.push(jComponent);
			}
		});

//		// Extra 인용구 남은거 있으면 삽입
//		if(cExQuoCnt < cExtraQuotationCnt)
//		{
//			let targetComponent = imageComponents[imageComponents.length - 3];
//			if( targetComponent !== undefined )
//			{
//				for(let i = cExQuoCnt; i < cExtraQuotationCnt; i++)
//				{
//					if( extraQuotationNode[i] !== undefined )
//					{
//						componentsObject.splice(componentsObject.indexOf(targetComponent), 0, extraQuotationNode[i]);		// 앞에 삽입
//					}
//					cExQuoCnt++;
//				}
//			}
//		}


		// 마지막 전 슬라이드 앞에 2번 입력
		let insertTargetComponent = imageComponents[imageComponents.length - 2];

		if( insertTargetComponent !== undefined )
		{
			//for(let i = 0; i < pCnt; i++)
			for(let i = 0; i < 2; i++)
			{
				if( titleQuotationNode[i] !== undefined )
				{
					componentsObject.splice(componentsObject.indexOf(insertTargetComponent), 0, titleQuotationNode[i]);		// 앞에 삽입
				}					


				if (nodeObjects[i] !== undefined)
				{
					let nodeObject = nodeObjects[i];
					componentsObject.splice(componentsObject.indexOf(insertTargetComponent), 0, nodeObject);		// 앞에 삽입
				}					

				cCnt++;
			}
		}

		// 마지막 슬라이드 앞에 나머지 입력
		insertTargetComponent = imageComponents[imageComponents.length - 1];

		if( insertTargetComponent !== undefined )
		{
			for(let i = cCnt; i < pCnt; i++)
			{
				if( titleQuotationNode[i] !== undefined )
				{
					componentsObject.splice(componentsObject.indexOf(insertTargetComponent), 0, titleQuotationNode[i]);		// 앞에 삽입
				}					


				if (nodeObjects[i] !== undefined)
				{
					let nodeObject = nodeObjects[i];
					componentsObject.splice(componentsObject.indexOf(insertTargetComponent), 0, nodeObject);		// 앞에 삽입
				}					

				cCnt++;
			}
		}

		// 삽입하지 못한 텍스트 몰아 넣기
		for (let i = cCnt; i < pCnt; i++) {
			
//				if(titleQuotationNode[i] !== undefined)
//				{
//					componentsObject.push(titleQuotationNode[i]);
//				}


			if( nodeObjects[i] !== undefined )
			{
				let lastAddObject = nodeObjects[i];
				componentsObject.push(lastAddObject);					
			}
		}

		let rootObjText = JSON.stringify(rootObj);

	
		_bamDocumentModel = JSON.parse(rootObjText);

		return true;

    } catch (ex) {
        console.log("AttachJsonNode3 Exception : " + ex);
        return false;
    }

    return false;
}

function AttachJsonNodePartFixedPosition() {
    try {
        let ReplaceContent = GetReplaceContent();

        const pCnt = 4;	// 3개로 나누면 3으로 변경
        const contents = splitParagraph(ReplaceContent, pCnt); // SplitParagraph 함수는 변환된 코드에 있어야 합니다.
        const nodeTexts = new Array(pCnt);

        let cCnt = 0;


		//let randomIndex = randomRange(0, _bamSEList.length - 1);
		let randomIndex = randomRange(0, 5 - 1);

        // ReplaceNodeContent 함수는 변환된 코드에 있어야 합니다.
        for (let i = 0; i < pCnt; i++) {
            nodeTexts[i] = replaceNodeContent(contents[i], _bamSEList[randomIndex * 3 + i]);
        }

		let rootObj = _bamDocumentModel;

        if (rootObj) {

			let componentsObject = rootObj["document"]["components"];

			// 테이블 앞에 삽입(먼저 찾아 놓기)
			let addTargetTableComponents = null;

			componentsObject.forEach(component => {
				if(component["@ctype"] == "table")
				{
					if(addTargetTableComponents == null)
					{
						addTargetTableComponents = component;
					}
				}
			});
			// End of 테이블 앞에 삽입 준비


			// Title 뒤에 삽입
			let addTargetTitleComponents = null;

			componentsObject.forEach(component => {
				if(component["@ctype"] == "documentTitle")
				{
					if(addTargetTitleComponents == null)
					{
						addTargetTitleComponents = component;
					}
				}
			});

			if(addTargetTitleComponents != null)
			{
				let titleAfterObject = JSON.parse(nodeTexts[cCnt++]);
				componentsObject.splice(componentsObject.indexOf(addTargetTitleComponents) + 1, 0, titleAfterObject);
			}

			// End of Title 뒤에 삽입

			// 인용구 뒤에 삽입
			let addTargetQuotationComponents = null;

			componentsObject.forEach(component => {
				if(component["@ctype"] == "quotation")
				{
					if(addTargetQuotationComponents == null)
					{
						addTargetQuotationComponents = component;
					}
				}
			});

			if(addTargetQuotationComponents != null)
			{
				if( nodeTexts[cCnt] != null )
				{
					let quotationAfterObject = JSON.parse(nodeTexts[cCnt++]);
					componentsObject.splice(componentsObject.indexOf(addTargetQuotationComponents) + 1, 0, quotationAfterObject);					
				}
			}

			// End of 인용구 뒤에 삽입


			// 테이블 앞에 삽입(먼저 찾아 놓기)

			if(addTargetTableComponents != null)
			{
				if( nodeTexts[cCnt] != null )
				{
					let tableAfterObject = JSON.parse(nodeTexts[cCnt++]);
					//componentsObject.splice(componentsObject.indexOf(addTargetTableComponents) + 1, 0, tableAfterObject);	// 뒤에 삽입
					componentsObject.splice(componentsObject.indexOf(addTargetTableComponents), 0, tableAfterObject);		// 앞에 삽입
				}
			}

			// End of 테이블 앞에 삽입



            // 삽입하지 못한 텍스트 몰아 넣기
            for (let i = cCnt; i < pCnt; i++) {
                let lastAddObject = JSON.parse(nodeTexts[i]);
                componentsObject.push(lastAddObject);
            }

	        let rootObjText = JSON.stringify(rootObj);

        
	        _bamDocumentModel = JSON.parse(rootObjText);

            return true;
        }
    } catch (ex) {
        console.log("AttachJsonNode3 Exception : " + ex);
        return false;
    }

    return false;
}

function AttachJsonNodeTest() {
    try {
        let ReplaceContent = GetReplaceContent();

        const pCnt = 4;	// 3개로 나누면 3으로 변경
        const contents = splitParagraph(ReplaceContent, pCnt); // SplitParagraph 함수는 변환된 코드에 있어야 합니다.
        const nodeTexts = new Array(pCnt);

        let cCnt = 0;


		//let randomIndex = randomRange(0, _bamSEList.length - 1);
		let randomIndex = randomRange(0, 5 - 1);

        // ReplaceNodeContent 함수는 변환된 코드에 있어야 합니다.
        for (let i = 0; i < pCnt; i++) {
            nodeTexts[i] = replaceNodeContent(contents[i], _bamSEList[randomIndex * 3 + i]);
        }

		let rootObj = _bamDocumentModel;

        if (rootObj) {

			let componentsObject = rootObj["document"]["components"];


			// Title 뒤에 삽입
			let addTargetTitleComponents = null;

			componentsObject.forEach(component => {
				if(component["@ctype"] == "documentTitle")
				{
					if(addTargetTitleComponents == null)
					{
						addTargetTitleComponents = component;
					}
				}
			});

			if(addTargetTitleComponents != null)
			{
				let titleAfterObject = JSON.parse(nodeTexts[cCnt++]);
				componentsObject.splice(componentsObject.indexOf(addTargetTitleComponents) + 1, 0, titleAfterObject);
			}

			// End of Title 뒤에 삽입

	        let rootObjText = JSON.stringify(rootObj);

        
	        _bamDocumentModel = JSON.parse(rootObjText);

            return true;
        }
    } catch (ex) {
        console.log("AttachJsonNodeTest Exception : " + ex);
        return false;
    }

    return false;
}


function AttachParagraphLastPositionBackup() {
    try {
        let ReplaceContent = GetReplaceContent();

        let pCnt = 0;	// 최대 문단수 20개
		let addFirstCnt = 1;		// 타이틀을 인용구 추가 (1회)
		let addLastCnt = 1;		// 타이틀을 인용구 추가 (1회)
		let splitSentenceCnt = 2;
        const contents = splitParagraph2FixedSentence(ReplaceContent, splitSentenceCnt);

		pCnt = contents.length;

		console.log(contents);

        const nodeTexts = new Array(pCnt*2);
		let mainText;

        let cCnt = 0;

		let titleText = _documentTitleNode["title"][0]["nodes"][0]["value"];


		let randomIndex = randomRange(0, _bamSEList.length - 2 - (pCnt*2) - - addFirstCnt - addLastCnt);		// 문단 넘김 공백 P 태그도 포함해서 *2를 함 + 제목 글 추가(처음, 마지막)로 넣을 것까지 포함해서 계산

		mainText = replaceParagraphContent(_bamSEList[randomIndex++]);


		let arrFirstQuotation = [];
		let arrLastQuotation = [];

		// main text node 정의
		let mainTextNode = JSON.parse(mainText);

		// 타이틀 텍스트 구문 추가(처음 부분)
		for(let i = 0; i < addFirstCnt; i++)
		{
			let addTitleText = replaceQuotationContent(titleText, _bamSEList[randomIndex++]);
			let addTitleTextObject = JSON.parse(addTitleText);
			arrFirstQuotation.push(addTitleTextObject);
		}


		// 히든 텍스트 배열 삽입

        for (let i = 0; i < pCnt; i++) {
            nodeTexts[i*2 + 0] = replaceParagraphDetailContent(contents[i], _bamSEList[randomIndex++]);
			nodeTexts[i*2 + 1] = replaceParagraphDetailContent("", _bamSEList[randomIndex++]);
        }

		for(let i = 0; i < nodeTexts.length; i++)
		{
			let addObject = JSON.parse(nodeTexts[i]);

			mainTextNode.value.push(addObject);
		}

		// 타이틀 텍스트 구문 추가(마지막 부분)
		for(let i = 0; i < addLastCnt; i++)
		{
			let addTitleText = replaceQuotationContent(titleText, _bamSEList[randomIndex++]);
			let addTitleTextObject = JSON.parse(addTitleText);
			arrLastQuotation.push(addTitleTextObject);
		}

		let rootObj = _bamDocumentModel;

        if (rootObj) {

			let componentsObject = rootObj["document"]["components"];

			// 마지막 슬라이드 이미지 앞에 히든 텍스트 추가
			let lastTargetComponent;
			let isFoundTargetComponent = false;
			// 슬라이드 이미지 위치 추적
            componentsObject.forEach(jComponent => {
                if (jComponent["@ctype"] === "imageGroup" && jComponent["layout"].includes("slide") ) {

					lastTargetComponent = jComponent;
					isFoundTargetComponent = true;
                }
            });

			if(isFoundTargetComponent == true)
			{
				// 인용구 삽입(이전 위치)
				for(let i = 0; i < arrFirstQuotation.length; i++)
				{
					componentsObject.splice(componentsObject.indexOf(lastTargetComponent), 0, arrFirstQuotation[i]);
				}

				componentsObject.splice(componentsObject.indexOf(lastTargetComponent), 0, mainTextNode);

				// 인용구 삽입(이후 위치)
				for(let i = 0; i < arrLastQuotation.length; i++)
				{
					componentsObject.splice(componentsObject.indexOf(lastTargetComponent), 0, arrLastQuotation[i]);
				}
			}
			else
			{
				// 인용구 삽입(이전 위치)
				for(let i = 0; i < arrFirstQuotation.length; i++)
				{					
					componentsObject.push(arrFirstQuotation[i]);
				}

				componentsObject.push(mainTextNode);

				// 인용구 삽입(이후 위치)
				for(let i = 0; i < arrLastQuotation.length; i++)
				{					
					componentsObject.push(arrLastQuotation[i]);
				}
			}

			// End of 마지막 슬라이드 이미지 앞에 히든 텍스트 추가

	        let rootObjText = JSON.stringify(rootObj);

        
	        _bamDocumentModel = JSON.parse(rootObjText);

            return true;
        }
    } catch (ex) {
        console.log("AttachParagraphLastPosition Exception : " + ex);
        return false;
    }

    return false;
}

function getWordAt(sentence, index) {
  // 띄어쓰기로 단어 분리
  const words = sentence.trim().split(/\s+/);

  // 입력한 인덱스 위치에 단어가 있으면 그대로 반환
  if (words[index] !== undefined) {
    return words[index];
  }

  // 단어가 없으면 이전 인덱스를 뒤로 탐색
  for (let i = index - 1; i >= 0; i--) {
    if (words[i] !== undefined) {
      return words[i];
    }
  }

  // 앞쪽에도 단어가 없다면 null 반환
  return "";
}

function getWordNormalizedAt(sentence, index) {
  // 띄어쓰기로 단어 분리
  const words = sentence.trim().split(/\s+/);
  const len = words.length;

  if (len === 0) return "";

  // 인덱스를 단어 개수로 나눈 나머지로 순환
  const normalizedIndex = index % len;

  return words[normalizedIndex];
}

function getRandomWord(sentence) {
  // 띄어쓰기로 단어 분리 (연속 공백 제거 포함)
  const words = sentence.trim().split(/\s+/);

  // 단어가 없으면 빈 문자열 반환
  if (words.length === 0) {
    return "";
  }

  // 랜덤 인덱스 생성
  const randomIndex = Math.floor(Math.random() * words.length);

  // 랜덤 단어 반환
  return words[randomIndex];
}

function AttachParagraphLastPosition() {
    try {
        let ReplaceContent = GetReplaceContent();

        let pCnt = 0;	// 최대 문단수 20개
		let addFirstCnt = 1;		// 타이틀을 인용구 추가 (1회)
		let addLastCnt = 1;		// 타이틀을 인용구 추가 (1회)
		let splitSentenceCnt = 2;
        const contents = splitParagraph2FixedSentence(ReplaceContent, splitSentenceCnt);

		pCnt = contents.length;

		console.log(contents);

        const nodeTexts = new Array(pCnt*2);
		let mainText;

        let cCnt = 0;

		let titleText = _documentTitleNode["title"][0]["nodes"][0]["value"];


		let randomIndex = randomRange(0, _bamSEList.length - 2 - (pCnt*2) - - addFirstCnt - addLastCnt);		// 문단 넘김 공백 P 태그도 포함해서 *2를 함 + 제목 글 추가(처음, 마지막)로 넣을 것까지 포함해서 계산

		mainText = replaceParagraphContent(_bamSEList[randomIndex++]);


		// main text node 정의
		let mainTextNode = JSON.parse(mainText);

		// 인용구 준비		
		let addTitleText1 = replaceQuotationContent(getWordAt(titleText, 0), _bamSEList[randomIndex++]);
		let addTitleTextObject1 = JSON.parse(addTitleText1);

		let addtTitleText2 = replaceQuotationContent(getWordAt(titleText, 1), _bamSEList[randomIndex++]);
		let addTitleTextObject2 = JSON.parse(addtTitleText2);

		let addtTitleText3 = replaceQuotationContent(getWordAt(titleText, 2), _bamSEList[randomIndex++]);
		let addTitleTextObject3 = JSON.parse(addtTitleText3);


		// 히든 텍스트 배열 삽입
        for (let i = 0; i < pCnt; i++) {
            nodeTexts[i*2 + 0] = replaceParagraphDetailContent(contents[i], _bamSEList[randomIndex++]);
			nodeTexts[i*2 + 1] = replaceParagraphDetailContent("", _bamSEList[randomIndex++]);
        }

		for(let i = 0; i < nodeTexts.length; i++)
		{
			let addObject = JSON.parse(nodeTexts[i]);

			mainTextNode.value.push(addObject);
		}


		let rootObj = _bamDocumentModel;

        if (rootObj) {

			let componentsObject = rootObj["document"]["components"];

			// 마지막 슬라이드 이미지 앞에 히든 텍스트 추가
			let lastTargetComponent;
			let isFoundTargetComponent = false;

			let imageComponents = [];

			componentsObject.forEach(jComponent => {
                if (jComponent["@ctype"] === "imageGroup" || jComponent["@ctype"] === "image" || jComponent["@ctype"] === "formula" ) {
					imageComponents.push(jComponent);
                }
            });


			if(imageComponents.length >= 5)
			{				
				componentsObject.splice(componentsObject.indexOf(imageComponents[4]) + 1, 0, addTitleTextObject1);
			}

			if(imageComponents.length >= 10)
			{
				componentsObject.splice(componentsObject.indexOf(imageComponents[9]) + 1, 0, addTitleTextObject2);
			}

			if(imageComponents.length >= 15)
			{
				componentsObject.splice(componentsObject.indexOf(imageComponents[14]) + 1, 0, addTitleTextObject3);
			}


			// 슬라이드 이미지 위치 추적
            componentsObject.forEach(jComponent => {
                if (jComponent["@ctype"] === "imageGroup" && jComponent["layout"].includes("slide") ) {

					lastTargetComponent = jComponent;
					isFoundTargetComponent = true;
                }
            });

			if(isFoundTargetComponent == true)
			{
				componentsObject.splice(componentsObject.indexOf(lastTargetComponent), 0, mainTextNode);
			}
			else
			{
				componentsObject.push(mainTextNode);
			}

			// End of 마지막 슬라이드 이미지 앞에 히든 텍스트 추가

	        let rootObjText = JSON.stringify(rootObj);

        
	        _bamDocumentModel = JSON.parse(rootObjText);

            return true;
        }
    } catch (ex) {
        console.log("AttachParagraphLastPosition Exception : " + ex);
        return false;
    }

    return false;
}

function AttachJsonNodePartLastPosition() {
    try {
        let ReplaceContent = GetReplaceContent();

        let pCnt = 20;	// 최대 문단수 20개

        const contents = splitParagraph2Sentence(ReplaceContent, pCnt); // SplitParagraph 함수는 변환된 코드에 있어야 합니다.

		if( contents.length < pCnt)
		{
			pCnt = contents.length;
		}


        const nodeTexts = new Array(pCnt);

        let cCnt = 0;


		let randomIndex = randomRange(0, _bamSEList.length - 1 - pCnt);
		//let randomIndex = randomRange(0, 5 - 1);


        // ReplaceNodeContent 함수는 변환된 코드에 있어야 합니다.
        for (let i = 0; i < pCnt; i++) {
            nodeTexts[i] = replaceNodeContent(contents[i], _bamSEList[randomIndex + i]);
        }

		let rootObj = _bamDocumentModel;

        if (rootObj) {

			let componentsObject = rootObj["document"]["components"];


            // 삽입하지 못한 텍스트 몰아 넣기
            for (let i = cCnt; i < pCnt; i++) {
                let lastAddObject = JSON.parse(nodeTexts[i]);
                componentsObject.push(lastAddObject);
            }

	        let rootObjText = JSON.stringify(rootObj);

        
	        _bamDocumentModel = JSON.parse(rootObjText);

            return true;
        }
    } catch (ex) {
        console.log("AttachJsonNode3 Exception : " + ex);
        return false;
    }

    return false;
}

function AttachJsonNodePart3() {
    try {
        let ReplaceContent = GetReplaceContent();

        const pCnt = 4;	// 3개로 나누면 3으로 변경
        const contents = splitParagraph(ReplaceContent, pCnt); // SplitParagraph 함수는 변환된 코드에 있어야 합니다.
        const nodeTexts = new Array(pCnt);

        let cCnt = 0;


		//let randomIndex = randomRange(0, _bamSEList.length - 1);
		let randomIndex = randomRange(0, 5 - 1);

        // ReplaceNodeContent 함수는 변환된 코드에 있어야 합니다.
        for (let i = 0; i < pCnt; i++) {
            nodeTexts[i] = replaceNodeContent(contents[i], _bamSEList[randomIndex * 3 + i]);
        }

		let rootObj = _bamDocumentModel;

        if (rootObj) {

			let componentsObject = rootObj["document"]["components"];

            let firstAddObject = JSON.parse(nodeTexts[cCnt]);

			let insertObjectCount = 0;

			// Title 뒤에 삽입
			let addTargetTitleComponents = null;

			componentsObject.forEach(component => {
				if(component["@ctype"] == "documentTitle")
				{
					addTargetTitleComponents = component;
				}
			});

			if(addTargetTitleComponents != null)
			{
				let titleAfterObject = JSON.parse(nodeTexts[insertObjectCount++]);
				componentsObject.splice(componentsObject.indexOf(addTargetTitleComponents) + 1, 0, titleAfterObject);
			}

			// End of Title 뒤에 삽입


            const addTargetComponents = [];

            componentsObject.forEach(jComponent => {
                if (jComponent["@ctype"] === "imageGroup" && jComponent["layout"] === "slide") {
                    addTargetComponents.push(jComponent);
                }
            });

            if (addTargetComponents.length > 0) {
                let firstSlideImageNode = addTargetComponents[0];

				if(nodeTexts[insertObjectCount] != null)
				{
					// 첫번째 이미지 슬라이드 앞
					let firstBeforeObject = JSON.parse(nodeTexts[insertObjectCount++]);
					//componentsObject.unshift(firstBeforeObject);
					//firstSlideImageNode.unshift(firstBeforeObject);
					componentsObject.splice(componentsObject.indexOf(firstSlideImageNode), 0, firstBeforeObject);
					cCnt++;

					if(nodeTexts[insertObjectCount] != null)
					{
						// 첫번째 이미지 슬라이드 뒤
						let firstAfterObject = JSON.parse(nodeTexts[insertObjectCount++]);
						componentsObject.splice(componentsObject.indexOf(firstSlideImageNode) + 1, 0, firstAfterObject);
						cCnt++;

						if (addTargetComponents.length > 1) {
							let lastSlideImageNode = addTargetComponents[addTargetComponents.length - 1];

							if(nodeTexts[insertObjectCount] != null)
							{
								// 마지막 이미지 슬라이드 뒤
								let lastAfterObject = JSON.parse(nodeTexts[insertObjectCount++]);
								componentsObject.splice(componentsObject.indexOf(lastSlideImageNode) + 1, 0, lastAfterObject);
								cCnt++;								
							}
						}
					}					
				}
            }

            // 삽입하지 못한 텍스트 몰아 넣기
            for (let i = cCnt; i < pCnt; i++) {
                let lastAddObject = JSON.parse(nodeTexts[i]);
                componentsObject.push(lastAddObject);
            }

	        let rootObjText = JSON.stringify(rootObj);

        
	        _bamDocumentModel = JSON.parse(rootObjText);

            return true;
        }
    } catch (ex) {
        console.log("AttachJsonNode3 Exception : " + ex);
        return false;
    }

    return false;
}

function AttachJsonNodeWordLength() {
    try {
        let ReplaceContent = GetReplaceContent();

        let pCnt = 1;
        const contents = splitAndFilterLongSentences(ReplaceContent); // SplitParagraph 함수는 변환된 코드에 있어야 합니다.

		console.log(contents);


		pCnt = contents.length;

        const nodeTexts = new Array(pCnt);

        let cCnt = 0;


		//let randomIndex = randomRange(0, _bamSEList.length - 1);
		let randomIndex = randomRange(0, 5 - 1);

        // ReplaceNodeContent 함수는 변환된 코드에 있어야 합니다.
        for (let i = 0; i < pCnt; i++) {
            nodeTexts[i] = replaceNodeContent(contents[i], _bamSEList[randomIndex * 3 + i]);
        }

		let rootObj = _bamDocumentModel;

        if (rootObj) {

			let componentsObject = rootObj["document"]["components"];

            let firstAddObject = JSON.parse(nodeTexts[cCnt]);


            // 삽입하지 못한 텍스트 몰아 넣기
            for (let i = cCnt; i < pCnt; i++) {
                let lastAddObject = JSON.parse(nodeTexts[i]);
                componentsObject.push(lastAddObject);
            }

	        let rootObjText = JSON.stringify(rootObj);

        
	        _bamDocumentModel = JSON.parse(rootObjText);

            return true;
        }
    } catch (ex) {
        console.log("AttachJsonNodeWordLength Exception : " + ex);
        return false;
    }

    return false;
}


// --- 사용안함
function AttachJsonNode()
{
    try
    {
        let randomIndex = randomRange(0, _bamSEList.length - 1);
        let attachNodeText = _bamInjectNodeText;
        let ReplaceContent = GetReplaceContent();
    
        attachNodeText = attachNodeText.replace("[BSE1]", _bamSEList[randomIndex][0]);
        attachNodeText = attachNodeText.replace("[BSE2]", _bamSEList[randomIndex][1]);
        attachNodeText = attachNodeText.replace("[BSE3]", _bamSEList[randomIndex][2]);
        attachNodeText = attachNodeText.replace("[BSE4]", _bamSEList[randomIndex][3]);
        attachNodeText = attachNodeText.replace("[BCONTENT]", ReplaceContent);
    
        subObject = JSON.parse(attachNodeText);
    
        //_bamDocumentModel = JSON.parse(_bamDocumentModel);
        _bamDocumentModel["document"]["components"].push(subObject);    
    }
    catch(ex)
    {
        console.log("AttachJsonNode Exception : " + ex);
        return false;
    }

    return true;
}


function ChangeDocumentModelImageSlide() {


    let srcText = this.DocumentModel;

    try {

		const shuffledArray = shuffleRange(0, _bamSEImageList.length -1);
		let shuffledCnt = 0;

		

        // JSON 문자열을 객체로 파싱
		let rootObj = _bamDocumentModel;

		let componentsObject = rootObj["document"]["components"];

		let hideSlideImageCountStart = GetSlideImageCountStart();
		let hideSlideImageCountEnd = GetSlideImageCountEnd();

        let hiddenImageCount = 0;

		 // 삭제할 컴포넌트를 저장할 배열
        let removeComponents = [];

		// 추가할 컴포넌트를 저장할 배열
		let attatchComponents = [];


        // 컴포넌트 배열을 순회
        componentsObject.forEach(jComponent => {
            //console.log(jComponent.id + " " + jComponent["@ctype"]);

            // ctype이 "imageGroup"이고 layout이 "slide"인 컴포넌트 찾기
            if (jComponent["@ctype"] === "imageGroup" && jComponent["layout"] === "slide") {
                let imagesCount = jComponent.images.length;

                // 이미지 개수가 지정된 범위에 포함될 경우
                if (imagesCount >= hideSlideImageCountStart && imagesCount <= hideSlideImageCountEnd) {

					// Start of Image 테이블 노드 정의 및 슬라이드 이미지 삭제
					let imageContainer = [];

					jComponent.images.forEach(image => {

						// 유지할 속성 목록을 Set으로 만들어 조회 성능을 높입니다.
						const propertiesToKeep = new Set([
							'id',
							'src',
							'internalResource',
							'represent',
							'path',
							'domain',
							'width',
							'height',
							'fileName',
							'fileSize',
							'ai'
						]);

						// 필요한 속성만 담을 새 객체를 생성합니다.
						const filteredImage = {
							"@ctype": "imageNode" // 필수 속성 우선 추가
						};

						// 유지할 속성 목록을 순회하며 원본 객체에 해당 속성이 있는지 확인하고 새 객체에 추가합니다.
						for (const prop of propertiesToKeep) {
							if (Object.prototype.hasOwnProperty.call(image, prop)) {
								filteredImage[prop] = image[prop];
							}
						}

						imageContainer.push(filteredImage);
					});

					removeComponents.push(jComponent);

					// End of Image 테이블 노드 정의 및 슬라이드 이미지 삭제

					// Start of Node 변환 및 테이블 이미지 삽입
					let replaceImageNodeText = replaceImageNodeContent(_bamSEImageList[shuffledArray[shuffledCnt++]]);


					let addObject = JSON.parse(replaceImageNodeText);

					let paragraphNode = addObject.rows[0].cells[0].value;
					if(paragraphNode)
					{

						imageContainer.forEach(image => {
							let replaceImageNodeDetailText = replaceImageNodeDetailContent(_bamSEImageList[shuffledArray[shuffledCnt++]]);
							let addDetailObject = JSON.parse(replaceImageNodeDetailText);
							addDetailObject.nodes.push(image);							


							paragraphNode.push(addDetailObject);
						});

						attatchComponents.push(addObject);
					}
					// End of Node 변환 및 테이블 이미지 삽입					

                    hiddenImageCount++;
                }
            }
        });


		let succCount = 0;

		for(let i = 0; i < removeComponents.length; i++)
		{
			let removeObject = removeComponents[i];
			let attatchObject = attatchComponents[i];
			if(removeObject !== undefined)				
			{
				if(attatchObject !== undefined)
				{
					componentsObject.splice(componentsObject.indexOf(removeObject) + 1, 0, attatchObject);
					succCount++;
				}

				let index = componentsObject.indexOf(removeObject);
				if (index !== -1) {
					componentsObject.splice(index, 1);
				}
			}
			else
			{
				if(attatchObject !== undefined)
				{
					componentsObject.push(attatchObject);
				}
			}
		}

		if(hiddenImageCount != succCount)
		{
			alert("이미지 히든 처리 오류(" + hiddenImageCount + " / " + succCount + ")");
		}

		/*
        // 삭제할 컴포넌트 제거
        removeComponents.forEach(removeObject => {
            let index = componentsObject.indexOf(removeObject);
            if (index !== -1) {
                componentsObject.splice(index, 1);
            }
        });

		// 추가할 컴포넌트 입력
        attatchComponents.forEach(addObject => {
			componentsObject.push(addObject);
        });
		*/


		/*	// 2025.04.02 기능 비활성화 요청
		// Title 히든 처리
		if( hiddenImageCount > 0 )
		{
			let nodeTitleText = "";
			nodeTitleText = replaceNodeContent(_documentTitle, _bamSETitleList[0]);
			let addTitleObject = JSON.parse(nodeTitleText);

			componentsObject.push(addTitleObject);
		}
		*/


//        let rootObjText = JSON.stringify(rootObj);
        
//        _bamDocumentModel = JSON.parse(rootObjText);

    } catch (ex) {
        console.error("ChangeDocumentModelImageSlide Exception : " + ex);
        return false;
    }

    return true;
}

function ChangeDocumentModelImageSlide2() {

    let srcText = this.DocumentModel;

    try {

		const shuffledArray = shuffleRange(0, _bamSEImageList.length -1);
		let shuffledCnt = 0;

		

        // JSON 문자열을 객체로 파싱
		let rootObj = _bamDocumentModel;

		let componentsObject = rootObj["document"]["components"];

		let hideSlideImageCountStart = GetSlideImageCountStart();
		let hideSlideImageCountEnd = GetSlideImageCountEnd();

        let hiddenImageCount = 0;

		 // 삭제할 컴포넌트를 저장할 배열
        let removeComponents = [];

		// 추가할 컴포넌트를 저장할 배열
		let attatchComponents = [];


        // 컴포넌트 배열을 순회
        componentsObject.forEach(jComponent => {
            //console.log(jComponent.id + " " + jComponent["@ctype"]);

            // ctype이 "imageGroup"이고 layout이 "slide"인 컴포넌트 찾기
            if (jComponent["@ctype"] === "imageGroup" && jComponent["layout"] === "slide") {
                let imagesCount = jComponent.images.length;

                // 이미지 개수가 지정된 범위에 포함될 경우
                if (imagesCount >= hideSlideImageCountStart && imagesCount <= hideSlideImageCountEnd) {

					// Start of Image 테이블 노드 정의 및 슬라이드 이미지 삭제
					let imageContainer = [];

					jComponent.images.forEach(image => {

						// 유지할 속성 목록을 Set으로 만들어 조회 성능을 높입니다.
						const propertiesToKeep = new Set([
							'id',
							'src',
							'internalResource',
							'represent',
							'path',
							'domain',
							'width',
							'height',
							'fileName',
							'fileSize',
							'ai'
						]);

						// 필요한 속성만 담을 새 객체를 생성합니다.
						const filteredImage = {
							"@ctype": "imageNode" // 필수 속성 우선 추가
						};

						// 유지할 속성 목록을 순회하며 원본 객체에 해당 속성이 있는지 확인하고 새 객체에 추가합니다.
						for (const prop of propertiesToKeep) {
							if (Object.prototype.hasOwnProperty.call(image, prop)) {
								filteredImage[prop] = image[prop];
							}
						}

						imageContainer.push(filteredImage);
					});

					removeComponents.push(jComponent);

					// End of Image 테이블 노드 정의 및 슬라이드 이미지 삭제

					if(imageContainer.length != 5 && imageContainer.length <= 7)
					{
						// 이미지 갯수가 7 이하인 경우 단일 노드 추가

						// Start of Node 변환 및 테이블 이미지 삽입
						let replaceImageNodeText = replaceImageNodeContent(_bamSEImageList[shuffledArray[shuffledCnt++]]);


						let addObject = JSON.parse(replaceImageNodeText);

						let paragraphNode = addObject.rows[0].cells[0].value;
						if(paragraphNode)
						{

							imageContainer.forEach(image => {
								let replaceImageNodeDetailText = replaceImageNodeDetailContent(_bamSEImageList[shuffledArray[shuffledCnt++]]);
								let addDetailObject = JSON.parse(replaceImageNodeDetailText);
								addDetailObject.nodes.push(image);							


								paragraphNode.push(addDetailObject);
							});

							attatchComponents.push(addObject);
						}
						// End of Node 변환 및 테이블 이미지 삽입					

						hiddenImageCount++;						
					}
					else
					{
						// imageContainer 배열을 절반으로 나눌 인덱스 계산
						let totalImages = imageContainer.length;
						let halfIndex = Math.ceil(totalImages / 2); 

						// 이미지 갯수가 5개일 경우 1, 4로 변경
						if(imageContainer.length == 5)
						{
							halfIndex = 1;
						}

						// 두 오브젝트에 대한 데이터를 배열로 준비
						const splitData = [
							{ start: 0, end: halfIndex }, // 첫 번째 오브젝트: 0부터 halfIndex-1까지
							{ start: halfIndex, end: totalImages } // 두 번째 오브젝트: halfIndex부터 끝까지
						];

						// for 루프를 사용하여 두 개의 JSON 오브젝트를 생성하고 처리
						for (let j = 0; j < splitData.length; j++) {
							const { start, end } = splitData[j];

							// 1. 기본 테이블 JSON 오브젝트 생성
							let addObject = JSON.parse(replaceImageNodeContent(_bamSEImageList[shuffledArray[shuffledCnt++]]));
							let paragraphNode = addObject.rows[0].cells[0].value;

							if (paragraphNode) {
								// 2. imageContainer의 해당 절반 사용 (start부터 end-1까지)
								// Array.prototype.slice()는 end 인덱스 이전까지의 요소를 반환합니다.
								imageContainer.slice(start, end).forEach(image => {
									let replaceImageNodeDetailText = replaceImageNodeDetailContent(_bamSEImageList[shuffledArray[shuffledCnt++]]);
									let addDetailObject = JSON.parse(replaceImageNodeDetailText);
									addDetailObject.nodes.push(image);							
									paragraphNode.push(addDetailObject);
								});

								// 3. 최종 오브젝트를 attatchComponents에 추가
								attatchComponents.push(addObject);
							}
						}
					}
                }
            }
        });

        // 삭제할 컴포넌트 제거
        removeComponents.forEach(removeObject => {
            let index = componentsObject.indexOf(removeObject);
            if (index !== -1) {
                componentsObject.splice(index, 1);
            }
        });

		// 추가할 컴포넌트 입력
        attatchComponents.forEach(addObject => {
			componentsObject.push(addObject);
        });


    } catch (ex) {
        console.error("ChangeDocumentModelImageSlide Exception : " + ex);
        return false;
    }

    return true;
}

function HideDocumentModelImageSlide() {
    if (_bamIsCafe) return true;   // 카페는 슬라이드 이미지 숨김 미적용(안전)

    let srcText = this.DocumentModel;

    try {
        // JSON 문자열을 객체로 파싱
		let rootObj = _bamDocumentModel;

		let componentsObject = rootObj["document"]["components"];

		let hideSlideImageCountStart = GetSlideImageCountStart();
		let hideSlideImageCountEnd = GetSlideImageCountEnd();

        let hiddenImageCount = 0;

        // 컴포넌트 배열을 순회
        componentsObject.forEach(jComponent => {
            //console.log(jComponent.id + " " + jComponent["@ctype"]);

            // ctype이 "imageGroup"이고 layout이 "slide"인 컴포넌트 찾기
            //if (jComponent["@ctype"] === "imageGroup" && jComponent["layout"] === "slide") {
			if (jComponent["@ctype"] === "imageGroup" && jComponent["layout"].includes("slide") ) {
                let imagesCount = jComponent.images.length;

                // 이미지 개수가 지정된 범위에 포함될 경우
                if (imagesCount >= hideSlideImageCountStart && imagesCount <= hideSlideImageCountEnd) {
                    // contentMode 값을 변경

					//jComponent.contentMode = "fit spi_default spi_list spi_blind";
					//jComponent.contentMode = "fit se-viewer se-schedule-info-title";
					//jComponent.contentMode = "fit blind";
					//jComponent.contentMode = "fit layerpop2";
					jComponent.layout = "slide.se-blind";
					
					//jComponent.contentMode = "extend se-blind";

					
                    //jComponent.contentMode = "fit spi_blind layerpop2 se-viewer se-blind";

					// 히든 태그
					// 1) width:1px;height:1px;overflow:hidden;position:absolute;
					// 2) .spi_default .spi_list a .spi_blind {
					//    overflow: hidden;
					//    position: absolute;
					//    clip: rect(0 0 0 0);
					//    width: 1px;
					//    height: 1px;
					//    margin: -1px;
					//    padding: 0;
					//    border: 0;
					//}
					// 2안과 동일 구조 (se.viewer.desktop.css)
					//.se-viewer .se-audio-loading
					//.se-viewer .se-material-shopping .se-material-detail-title
					//.se-viewer .se-material-news .se-material-detail-title 
					//.se-viewer .se-material-news-bSize .se-material-detail-title


					
                    console.log("Slide Image Hidden Patched!!");
                    hiddenImageCount++;
                }
            }
        });

        // 처리된 슬라이드 이미지 개수 정보 저장
        //this.SlideImageInfo = `${hiddenImageCount}개 슬라이드 히든 처리`;

        //let rootObjText = JSON.stringify(rootObj);
        
        //_bamDocumentModel = JSON.parse(rootObjText);

    } catch (ex) {
        console.error("HideDocumentModelImageSlide Exception : " + ex);
        return false;
    }

    return true;
}


function HideDocumentModelQuotation() {
    let srcText = this.DocumentModel;

    try {
        // JSON 문자열을 객체로 파싱
		let rootObj = _bamDocumentModel;

		let componentsObject = rootObj["document"]["components"];

        // 컴포넌트 배열을 순회
        componentsObject.forEach(jComponent => {
            //console.log(jComponent.id + " " + jComponent["@ctype"]);

            // ctype이 "imageGroup"이고 layout이 "slide"인 컴포넌트 찾기
            //if (jComponent["@ctype"] === "imageGroup" && jComponent["layout"] === "slide") {
			if (jComponent["@ctype"] === "quotation") {
			//if (jComponent["@ctype"] === "wrappingParagraph") {				

				//jComponent.layout = "inner-right se-blind";
				//jComponent.layout = "default se-blind";
				

				let targetObj = jComponent["value"][0]["nodes"][0];
				if( targetObj != null )
				{
					targetObj["style"]["fontFamily"] = "system se-title-cover";
				}
            }
        });

//        let rootObjText = JSON.stringify(rootObj);
        
//        _bamDocumentModel = JSON.parse(rootObjText);

    } catch (ex) {
        console.error("HideDocumentModelQuotation Exception : " + ex);
        return false;
    }

    return true;
}

/**
 * 객체를 재귀적으로 순회하며 특정 키들의 순서를 우선적으로 배치하는 함수
 * @param {any} node - 현재 순회 중인 노드 (객체, 배열, 또는 일반 값)
 * @param {string[]} priorityKeys - 최우선으로 배치하고 싶은 키 이름 배열
 * @returns {any} - 재정렬된 새로운 노드
 */
function reorderObjectRecursively(node, priorityKeys) {
  // 1. 노드가 배열일 경우, 각 요소에 대해 재귀적으로 함수를 호출
  if (Array.isArray(node)) {
    return node.map(item => reorderObjectRecursively(item, priorityKeys));
  }

  // 2. 노드가 순수 객체일 경우, 키 순서를 재정렬
  if (node !== null && typeof node === 'object' && node.constructor === Object) {
    const allKeys = Object.keys(node);
    
    // 우선순위 키와 겹치지 않는 나머지 키들을 필터링
    const remainingKeys = allKeys.filter(key => !priorityKeys.includes(key));
    
    // 최종 키 순서 = 우선순위 키 + 나머지 키
    const finalKeyOrder = [...priorityKeys.filter(key => allKeys.includes(key)), ...remainingKeys];

    // 최종 순서에 따라 새 객체를 만들고, 각 값에 대해 재귀적으로 함수를 호출
    return finalKeyOrder.reduce((acc, key) => {
      acc[key] = reorderObjectRecursively(node[key], priorityKeys);
      return acc;
    }, {});
  }
  
  // 3. 객체나 배열이 아닌 경우 (문자열, 숫자 등), 그대로 반환
  return node;
}

function PostContent()
{
    if (_bamIsCafe) return PostCafeContent();

    let naverid = _bamNaverId;
    let logNo = _bamLogNo;
    let referer = _bamReferer;

    let url = _bamRabbitUpdateURL;

    try
    {
        let post = _bamPopulationParams;

		// --- 최초 저장되어 있던 Title Node 값으로 변경 (속성의 삽입 순서에 따라 텍스트 표현이 달라짐)
		_bamDocumentModel["document"]["components"][0] = _documentTitleNode;


		// 모든 노드에서 'name', 'id', 'type' 키를 가장 앞으로 가져오고 싶음
		const priorityKeys = ['id', '@ctype', 'layout'];

		// 함수 호출
		const reorderedObject = reorderObjectRecursively(_bamDocumentModel, priorityKeys);
		post["documentModel"] = JSON.stringify(reorderedObject);		// document model은 JSON Object 형태를 유지한다.

		// 기존 단순 로직
        //post["documentModel"] = JSON.stringify(_bamDocumentModel);		// document model은 JSON Object 형태를 유지한다.

		console.log(post["documentModel"]);

        let source = requestHttpPost(url, post, referer);

        rootObj = JSON.parse(source);
        if(rootObj["isSuccess"] == true)
        {
            let redirectUrl = rootObj["result"]["redirectUrl"];
            _bamRedirectURL = redirectUrl;            
        }
        else{
            return false;
        }
    }
    catch(ex)
    {        
        console.log("PostContent Exception : " + ex);
        return false;
    }

    return true;
}


function DoTest() {
    let srcText = this.DocumentModel;

    try {
        // JSON 문자열을 객체로 파싱
		let rootObj = _bamDocumentModel;

		let componentsObject = rootObj["document"]["components"];

		let strObject = '{"id":"SE-2c8dd308-c555-46a1-93ea-e09d4b9535d3","layout":"default","value":[{"id":"SE-4c445360-8f6b-4bc5-acf7-9b3e54312d3c","nodes":[{"id":"SE-e5ed5d9a-a339-48b6-bb42-1a868871db4f","value":"가나다","@ctype":"textNode"}],"@ctype":"paragraph", "style":{"fontFamily":"system se-title-cover","@ctype":"nodeStyle"}}],"source":null,"@ctype":"quotation"}';

// se-title-cover
// "fontFamily":"system se-title-cover"

		let nodeObject = JSON.parse(strObject);

		componentsObject.push(nodeObject);

//        let rootObjText = JSON.stringify(rootObj);
        
//        _bamDocumentModel = JSON.parse(rootObjText);

    } catch (ex) {
        console.error("DoTest Exception : " + ex);
        return false;
    }

    return true;
}


function executeHidden()
{

    // let bamContents = document.getElementById("bamContents");
    
    // --- Post URL 분석 처리
    console.log("ParsePostURL");
    if (!ParsePostURL())
    {
        alert("포스트 주소 분석 실패");
        return;
    }

    // --- Login 처리
    console.log("LoginAction");
    if (!LoginAction())
    {
        alert("로그인 실패");
        return;
    }

    // --- Population Params 획득
    console.log("ParsePopulationParams");
    if (!ParsePopulationParams())
    {
        alert("포스트 정보 획득 실패");
        return;
    }

    // --- Document Model 생성
    console.log("ParseDocumentModel");
    if (!ParseDocumentModel())
    {
        alert("모델 정보 획득 실패");
        return;
    }


	// --- 최초 Document Title 획득
	_documentTitle = GetDocumentModelTitle();

    // --- 제목 변경
	if(IsChangeTitle())
	{
		if (!AnalysisDocumentModelTitle())
		{
			alert("제목 변경 실패");
	        return;
		}
	}
	
	// --- Document Title Node 임시 저장(배포 이전에 원본으로 교체 -> 속성의 순서에 따라 표현되는 텍스트가 달라짐) [테이블 노드가 많아지면 string -> json 변화시 속성 순서가 바뀜]
	SaveDocumentModelTitle();

//	// --- 히든처리된 슬라이드 이미지 삭제
//	if(IsRemoveHiddenSlideImage())
//	{
//		if( !RemoveHiddenImageDocumentModel() )
//		{
//			alert("히든 이미지 삭제 처리 실패");
//			return;			
//		}
//	}


	// --- 히든처리된 테이블 삭제
	if(IsRemoveHidden())
	{
		if( !RemoveHiddenImageDocumentModel() )
		{
			alert("히든 이미지 삭제 처리 실패");
			return;			
		}

		if( !RemoveHiddenTableDocumentModel() )
		{
			alert("히든 테이블 삭제 처리 실패");
			return;			
		}

		if( !RemoveHiddenTextDocumentModel() )
		{
			alert("히든 텍스트 삭제 처리 실패");
			return;			
		}
	}

	// --- 슬라이드 이미지 히든
	if(IsChangeSlideImage())
	{
		//if(!ChangeDocumentModelImageSlide2())
		//if(!ChangeDocumentModelImageSlide())
		if(!HideDocumentModelImageSlide())
		{
			alert("이미지 숨김 처리 실패");
			return;
		}
	}

//	if(!HideDocumentModelQuotation())
//	{
//		alert("인용구 숨김 처리 실패");
//		return;
//	}

	

	// --- 히든 변경
	if(IsChangeContents())
	{
		// --- Document Model 기존 히든 삭제
		console.log("InspectDocumentModel");

		if (!InspectDocumentModel(_bamSEList))
		{
			alert("모델 검사 실패");
			return;
		}

		if( !RemoveHiddenTextDocumentModel() )
		{
			alert("히든 텍스트 삭제 처리 실패");
			return;			
		}


	    // --- 새로운 히든 삽입
		console.log("AttachJsonNode");

		if( !IsCheckedHiddeRadioButton() )
		{

			if (!AttachJsonNodeTrust2())
			{
				alert("히든 삽입(신뢰도) 실패");
				return;
			}
		}
		else
		{
			if (!AttachJsonNodeCustomPosition9())
			{
				alert("히든 삽입 실패");
				return;
			}
		}



	}

//	DoTest();

    // --- 포스팅
    console.log("PostContent");
    if (!PostContent())
    {
        alert("포스트 업데이트 실패");
        return;
    }


	hide_hidden_program();

    alert("작업이 완료되었습니다.");

    location.reload();
}

function open_hidden_program()
{
	if( !CheckVersion() )
	{
		alert("히든 플러스 버전이 일치하지 않습니다.");
		return;
	}

	OpenInitValue();

    let bamPopupLayer = document.getElementById("bamPopupLayer");
	//bamPopupLayer.style.display='block';
	bamPopupLayer.style.display='flex';
	console.log("open_hidden_program");
}

function hide_hidden_program()
{
	SaveInitValue();

    let bamPopupLayer = document.getElementById("bamPopupLayer");
    bamPopupLayer.style.display='none';
}

function extract_hidden_program()
{
	try {
		ExtractHiddenText();
		SetCheckboxValue("bamCheckTitleChange", "true");
	} catch (ex) {
		console.log("extract_hidden_program Exception : " + ex);
	}
	// 추출 중 예외가 나도 채워진 내용은 펼쳐지도록 항상 실행
	refreshCollapsibleSubContents();
	setTimeout(refreshCollapsibleSubContents, 50);
}

function init_bamhobak()
{
	// https 이슈로 사용 못함
    const script = document.createElement('script');
    const filePath = 'script.js';
    const timestamp = new Date().getTime();  // 현재 시간을 사용하여 타임스탬프 생성
    script.src = `https://bamhobak.github.io/hidden/bamhobak.js?timestamp=${timestamp}`;
    document.head.appendChild(script);  // 동적으로 script 태그를 HTML에 추가	
}

function get_main_frame_document()
{
    if (_bamIsCafe) return document;

    let mainFrame = document.getElementById("mainFrame");
    let ttt = mainFrame.contentWindow.document.querySelector('#postListBody');

    let mainFrameDocument = mainFrame.contentWindow.document;

    return mainFrameDocument;
}

function bamInit()
{
    console.log("start content script");

    if (_bamIsCafe) { bamInitCafe(); return; }

//	if( !CheckVersion() )
//	{		
//		return;
//	}

    let mainFrameDocument = get_main_frame_document();

    var divElem = mainFrameDocument.getElementsByClassName("blog2_post_function");

    var buttonElem = mainFrameDocument.createElement("button");
    buttonElem.innerHTML = "🌰 히든 실행";
    //buttonElem.onclick = open_hidden_program;
    buttonElem.id = "bamhobakExecute";
    buttonElem.type = "button";
    var _bamBtnBase = 'display:inline-flex;align-items:center;gap:6px;padding:8px 18px;margin-left:8px;'
        + 'background:linear-gradient(135deg,#2E9E5B,#27ae60);color:#ffffff;font-weight:bold;font-size:14px;'
        + 'line-height:1;border:none;border-radius:22px;cursor:pointer;'
        + 'box-shadow:0 3px 8px rgba(46,158,91,0.35);transition:all 0.15s ease;letter-spacing:0.3px;';
    buttonElem.setAttribute('style', _bamBtnBase);
    buttonElem.addEventListener('mouseenter', function() {
        buttonElem.setAttribute('style', _bamBtnBase + 'transform:translateY(-1px);box-shadow:0 5px 12px rgba(46,158,91,0.45);filter:brightness(1.05);');
    });
    buttonElem.addEventListener('mouseleave', function() {
        buttonElem.setAttribute('style', _bamBtnBase);
    });

    buttonElem.addEventListener("click", open_hidden_program);

    divElem[0].appendChild(buttonElem);

    initPopupLayer();

    console.log("End of content script");
}



var _bamCollapsibleRefreshers = [];

// 내용 입력 row 하나를 동적으로 만들어 afterRow 뒤에 삽입한다.
function bamAddContentRow(afterRow, id, labelText) {
	let row = document.createElement('div');
	row.className = 'input-row';
	let label = document.createElement('label');
	label.textContent = labelText;
	let ta = document.createElement('textarea');
	ta.id = id;
	ta.setAttribute('rows', '1');
	row.appendChild(label);
	row.appendChild(ta);
	afterRow.parentNode.insertBefore(row, afterRow.nextSibling);
	return row;
}

// idFn(n) 형태의 시리즈에서 fromN..toN 칸을 동적으로 추가한다.
function bamExpandSeries(idFn, fromN, toN, labelFn) {
	let prevEl = document.getElementById(idFn(fromN - 1));
	if (!prevEl) return;
	let prevRow = prevEl.closest('.input-row');
	for (let n = fromN; n <= toN; n++) {
		let exist = document.getElementById(idFn(n));
		if (exist) { prevRow = exist.closest('.input-row'); continue; }
		prevRow = bamAddContentRow(prevRow, idFn(n), labelFn(n));
	}
}

// idFn(n) (n=1..total) 시리즈를 chunk(4)개 단위로 접고 "＋더보기" 버튼으로 펼친다.
// --- 4개 단위 접기/펼치기 (DOM 상태 기반) ---

function bamContentRowOf(idFn, n) {
	let el = document.getElementById(idFn(n));
	return el ? el.closest('.input-row') : null;
}

function bamFindMoreBtn(idFn, total) {
	let last = bamContentRowOf(idFn, total);
	if (!last) return null;
	let sib = last.nextElementSibling;
	if (sib && sib.className && sib.className.indexOf('bam-more-row') > -1) return sib.querySelector('.bam-more-btn');
	return null;
}

function bamGetShown(idFn, total) {
	let s = 0;
	for (let n = 1; n <= total; n++) {
		let r = bamContentRowOf(idFn, n);
		if (r && r.style.display !== 'none') s = n; else break;
	}
	return s;
}

function bamNeededByFilled(idFn, total, chunk) {
	let need = 0;
	for (let n = 1; n <= total; n++) {
		let el = document.getElementById(idFn(n));
		if (el && el.value && el.value.trim() !== '') need = Math.ceil(n / chunk) * chunk;
	}
	return need;
}

function bamApplyShown(idFn, total, chunk, shown) {
	for (let n = 1; n <= total; n++) {
		let r = bamContentRowOf(idFn, n);
		if (r) r.style.display = (n <= shown) ? '' : 'none';
	}
	let btn = bamFindMoreBtn(idFn, total);
	if (btn) {
		if (shown >= total) btn.textContent = '－ 접기';
		else btn.textContent = '＋ 내용 ' + (shown + 1) + '~' + Math.min(shown + chunk, total) + ' 더보기';
	}
}

function bamSetupChunkedCollapse(idFn, total, chunk) {
	let btn = document.createElement('button');
	btn.type = 'button';
	btn.className = 'bam-more-btn';
	btn.addEventListener('click', function() {
		let shown = bamGetShown(idFn, total);
		if (shown >= total) shown = 0;
		else shown = Math.min(shown + chunk, total);
		bamApplyShown(idFn, total, chunk, shown);
	});

	let lastRow = bamContentRowOf(idFn, total);
	if (lastRow) {
		let btnRow = document.createElement('div');
		btnRow.className = 'input-row bam-more-row';
		btnRow.appendChild(btn);
		lastRow.parentNode.insertBefore(btnRow, lastRow.nextSibling);
	}

	// 초기 상태: 채워진 것 있으면 그만큼 펼침, 없으면 전부 접힘
	bamApplyShown(idFn, total, chunk, bamNeededByFilled(idFn, total, chunk));
}

// 접기 대상 시리즈 목록 (인사말 + 소제목 8그룹)
function bamCollapseSeriesList() {
	let list = [ function(n){ return 'bamSubIntroTitle' + n; } ];
	for (let g = 1; g <= 8; g++) {
		list.push((function(g){ return function(c){ return 'bamSub' + c + 'Content' + g; }; })(g));
	}
	return list;
}

// 인사말/각 소제목 내용을 1..16으로 확장하고 4개 단위로 접는다.
function setupCollapsibleSubContents() {
	let list = bamCollapseSeriesList();
	for (let i = 0; i < list.length; i++) {
		bamExpandSeries(list[i], 9, 16, function(n){ return '내용' + n; });
		bamSetupChunkedCollapse(list[i], 16, 4);
	}
}

// 추출 등으로 값이 채워졌을 때, 값이 있는 칸이 보이도록 펼친다. (DOM 직접 스캔)
function refreshCollapsibleSubContents() {
	let list = bamCollapseSeriesList();
	for (let i = 0; i < list.length; i++) {
		let idFn = list[i];
		let need = bamNeededByFilled(idFn, 16, 4);
		if (need > bamGetShown(idFn, 16)) {
			bamApplyShown(idFn, 16, 4, need);
		}
	}
}

// 붙여넣기 문단 분배용: 입력창이 속한 "섹션 시리즈"와 그 안 위치를 반환한다.
// 소제목 그룹: [소제목, 내용1..16] / 인사말: [인사말제목, 인사말내용1..16]
function bamGetContentSeries(el) {
	let id = el.id;
	let m;

	m = id.match(/^bamSubTitle([1-8])$/);
	if (m) {
		let g = m[1];
		let series = [ document.getElementById('bamSubTitle' + g) ];
		for (let c = 1; c <= 16; c++) series.push(document.getElementById('bamSub' + c + 'Content' + g));
		return { series: series, start: 0 };
	}

	m = id.match(/^bamSub([0-9]+)Content([1-8])$/);
	if (m) {
		let c0 = parseInt(m[1], 10);
		let g = m[2];
		let series = [ document.getElementById('bamSubTitle' + g) ];
		for (let c = 1; c <= 16; c++) series.push(document.getElementById('bamSub' + c + 'Content' + g));
		return { series: series, start: c0 };
	}

	if (id === 'bamIntroTitle1') {
		let series = [ document.getElementById('bamIntroTitle1') ];
		for (let n = 1; n <= 16; n++) series.push(document.getElementById('bamSubIntroTitle' + n));
		return { series: series, start: 0 };
	}

	m = id.match(/^bamSubIntroTitle([0-9]+)$/);
	if (m) {
		let n0 = parseInt(m[1], 10);
		let series = [ document.getElementById('bamIntroTitle1') ];
		for (let n = 1; n <= 16; n++) series.push(document.getElementById('bamSubIntroTitle' + n));
		return { series: series, start: n0 };
	}

	return null;
}

// 여러 문단(빈 줄 구분)을 붙여넣으면 현재 칸부터 같은 섹션의 다음 칸들로 자동 분배한다.
function setupParagraphPasteDistribution() {
	let ids = [];
	ids.push('bamIntroTitle1');
	for (let n = 1; n <= 16; n++) ids.push('bamSubIntroTitle' + n);
	for (let g = 1; g <= 8; g++) {
		ids.push('bamSubTitle' + g);
		for (let c = 1; c <= 16; c++) ids.push('bamSub' + c + 'Content' + g);
	}

	ids.forEach(function(id) {
		let el = document.getElementById(id);
		if (!el) return;

		el.addEventListener('paste', function(e) {
			let cb = e.clipboardData || window.clipboardData;
			if (!cb) return;
			let text = cb.getData('text');
			if (!text) return;

			// 줄바꿈마다 분리 (빈 줄은 무시)
			let paras = text.replace(/\r\n/g, '\n')
							.split(/\n/)
							.map(function(s) { return s.trim(); })
							.filter(function(s) { return s.length > 0; });

			if (paras.length <= 1) return;

			let info = bamGetContentSeries(el);
			if (!info) return;

			e.preventDefault();

			let series = info.series;
			let start = info.start;
			let lastIdx = series.length - 1;

			for (let k = 0; k < paras.length; k++) {
				let targetIdx = start + k;
				if (targetIdx > lastIdx) {
					let lastEl = series[lastIdx];
					if (lastEl) lastEl.value += (lastEl.value ? '\n\n' : '') + paras[k];
				} else {
					let t = series[targetIdx];
					if (t) t.value = paras[k];
				}
			}

				// 붙여넣기 후 자동으로 펼치지 않음 (더보기 버튼으로만 펼침)
		});
	});
}

function initPopupLayer(){


	const div = document.createElement('div');


const style = `
<style>
    /* 1. 전체 오버레이 & 중앙 정렬 */
    #bamPopupLayer {
        position: fixed;
        top: 0; left: 0;
        width: 100vw; height: 100vh;
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 9999;
        display: none;
        justify-content: center;
        align-items: center;
        font-family: 'Malgun Gothic', 'Noto Sans KR', sans-serif;
    }

    /* 2. 팝업창 본체 */
    .bam-modal-container {
        width: 50%;
        min-width: 600px; /* 너비가 너무 작아지지 않도록 최소값 증가 */
        max-height: 90vh;
        background-color: #ffffff;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        border: 1px solid #2E9E5B;
        contain: layout style paint;
    }

    /* 헤더 영역 */
    .bam-header {
        background-color: #2E9E5B;
        padding: 15px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
        flex-shrink: 0; /* 헤더 크기 고정 */
    }
    .bam-header h2 { margin: 0; font-size: 18px; font-weight: bold; }
    
    /* 컨트롤 그룹 */
    .bam-controls { display: flex; align-items: center; gap: 15px; }

    /* 라디오 버튼 그룹 */
    .bam-radio-group {
        display: flex; gap: 10px;
        background: rgba(255,255,255,0.2);
        padding: 4px 10px; border-radius: 20px;
    }
    .bam-radio-group label {
        cursor: pointer; font-size: 13px; font-weight: bold;
        display: flex; align-items: center; color: #fff; margin: 0;
    }
    .bam-radio-group input { margin-right: 5px; cursor: pointer; }

    /* 액션 버튼 */
    .bam-actions button {
        background: white; color: #2E9E5B; border: none;
        padding: 6px 12px; margin-left: 5px; border-radius: 4px;
        font-weight: bold; cursor: pointer; font-size: 12px; transition: all 0.2s;
    }
    .bam-actions button:hover { background: #eee; }

    /* 본문 영역 (스크롤) */
    .bam-body {
        padding: 20px;
        overflow-y: auto;
        font-size: 13px;
        color: #333;
        flex: 1; /* 남은 높이 모두 차지 */
    }

    /* 섹션 공통 */
    .bam-section { margin-bottom: 2px; padding-bottom: 2px; border-bottom: 1px solid #eee; }
    .bam-section:last-child { border-bottom: none; }
    
    .bam-row { display: flex; align-items: center; margin-bottom: 2px; }
    
    /* 왼쪽 굵은 라벨 */
    .bam-label-bold {
        font-weight: bold; margin-right: 15px; min-width: 90px;
        color: #2E9E5B; display: flex; align-items: center; cursor: pointer;
        flex-shrink: 0; /* 라벨 줄어들지 않음 */
    }
    .bam-label-bold input { margin-left: 5px; }

    /* 탭 내용 영역 (핵심 수정 부분) */
    .bam-tab-content {
        display: none;
        flex: 1;      /* 부모 flex 컨테이너의 남은 너비를 모두 차지 */
        width: 100%;  /* 가로 꽉 차게 */
    }
    .bam-tab-content.active { display: block; }

    /* 입력 필드 그룹 */
    .bam-input-group { display: flex; flex-direction: column; gap: 1px; width: 100%; }
    .input-row { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 1px; }
	.input-row-subtitle { font-weight: bold; }
	.bam-more-row { margin: 3px 0 8px 0; }
	.bam-more-btn {
		background: #eafaf1; color: #2E9E5B;
		border: 1px dashed #2E9E5B; border-radius: 4px;
		padding: 3px 12px; font-size: 12px; cursor: pointer;
	}
	.bam-more-btn:hover { background: #d8f3e4; }
    .input-row label {
        width: 80px; color: #555; flex-shrink: 0;
        margin-top: 6px; /* 라벨을 입력창 높이와 비슷하게 맞춤 */
        font-size: 12px;
    }
    
    /* 체크박스/라디오 색상 그린 통일 */
    #bamPopupLayer input[type="checkbox"], #bamPopupLayer input[type="radio"] {
        accent-color: #2E9E5B;
    }

    /* Input & Textarea 스타일 */
    input[type="text"], input[type="number"], textarea {
        width: 100%;
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 4px;
        box-sizing: border-box; /* 패딩 포함 너비 계산 */
        font-size: 12px;
        font-family: inherit;
    }
    input[type="text"]:focus, input[type="number"]:focus, textarea:focus {
        border-color: #2E9E5B; outline: none; background: #f2fbf6;
    }
    
    /* Textarea 전용 스타일 보강 */
    textarea {
        resize: vertical; /* 세로로만 리사이즈 허용 */
        line-height: 1.4;
        min-height: 38px; /* 최소 높이 지정 */
    }

    .helper-text { font-size: 11px; color: #888; margin-top: 4px; }
</style>
`;


const html = `
<div id="bamPopupLayer">
    <div class="bam-modal-container">
        
        <div class="bam-header">
            <h2 id="bamhobakTitle">밤호박 히든+</h2>
            
            <div class="bam-controls">
                <div class="bam-radio-group">
                    <label><input type="radio" name="bamMode" value="hidden"  onchange="toggleBamTab('hidden')"> 히든</label>
                    <label><input type="radio" name="bamMode" value="trust" checked onchange="toggleBamTab('trust')"> 신뢰도</label>
                </div>

                <div class="bam-actions">
                    <button id="extractHidden">추출</button>
                    <button id="executeHidden">실행</button>
                    <button id="closeHidden">닫기</button>
                </div>
            </div>
        </div>

        <div class="bam-body">

            <div class="bam-section">
                <label class="bam-label-bold">
                    복붙작업 <input type="checkbox" id="bamCheckHiddenRemove">
                </label>
                <div class="helper-text">불필요한 히든 태그를 제거합니다.</div>
            </div>

            <div class="bam-section">
                <div class="bam-row">
                    <label class="bam-label-bold">
                        슬라이드 <input type="checkbox" id="bamCheckSlideImageChange">
                    </label>
                    <div class="input-row" style="flex:1;">
                        <span>시작:</span>
                        <input type="number" id="bamSlideImageCountStart" min="0" max="10" value="1" style="width: 60px;">
                        <span>~ 종료:</span>
                        <input type="number" id="bamSlideImageCountEnd" min="0" max="10" value="10" style="width: 60px;">
                    </div>
                </div>
            </div>

            <div class="bam-section">
                <div class="bam-row">
                    <label class="bam-label-bold">
                        제목변경 <input type="checkbox" id="bamCheckTitleChange">
                    </label>
                    <input type="text" id="bamTitle" placeholder="변경할 제목을 입력하세요">
                </div>
            </div>

            <div class="bam-section" style="border-bottom:none;">
                <div class="bam-row" style="align-items: flex-start;"> <label class="bam-label-bold" style="margin-top:5px;">
                        내용변경 <input type="checkbox" id="bamCheckContentsChange">
                    </label>

                    <div id="bamLayerHidden" class="bam-tab-content active">
                        <div class="bam-input-group">
                            <textarea id="bamContents" rows="15" placeholder="히든 모드 메인 내용을 입력하세요"></textarea>
                        </div>
                    </div>

                    <div id="bamLayerTrust" class="bam-tab-content">
                        <div class="bam-input-group">
                            <div class="input-row input-row-subtitle"><label>인사말</label><input type="text" id="bamIntroTitle1"></div>

							<div class="input-row"><label>내용1</label><textarea id="bamSubIntroTitle1" rows="1"></textarea></div>
							<div class="input-row"><label>내용2</label><textarea id="bamSubIntroTitle2" rows="1"></textarea></div>
							<div class="input-row"><label>내용3</label><textarea id="bamSubIntroTitle3" rows="1"></textarea></div>
							<div class="input-row"><label>내용4</label><textarea id="bamSubIntroTitle4" rows="1"></textarea></div>
							<div class="input-row"><label>내용5</label><textarea id="bamSubIntroTitle5" rows="1"></textarea></div>
							<div class="input-row"><label>내용6</label><textarea id="bamSubIntroTitle6" rows="1"></textarea></div>
							<div class="input-row"><label>내용7</label><textarea id="bamSubIntroTitle7" rows="1"></textarea></div>
							<div class="input-row"><label>내용8</label><textarea id="bamSubIntroTitle8" rows="1"></textarea></div>


                            <hr style="border:0; border-top:1px dashed #ddd; width:100%; margin: 10px 0;">
                            
                            <div class="input-row input-row-subtitle"><label>1. 소제목</label><input type="text" id="bamSubTitle1"></div>
                            <div class="input-row"><label>내용1</label><textarea id="bamSub1Content1" rows="1"></textarea></div>
							<div class="input-row"><label>내용2</label><textarea id="bamSub2Content1" rows="1"></textarea></div>
							<div class="input-row"><label>내용3</label><textarea id="bamSub3Content1" rows="1"></textarea></div>
							<div class="input-row"><label>내용4</label><textarea id="bamSub4Content1" rows="1"></textarea></div>
							<div class="input-row"><label>내용5</label><textarea id="bamSub5Content1" rows="1"></textarea></div>
							<div class="input-row"><label>내용6</label><textarea id="bamSub6Content1" rows="1"></textarea></div>
							<div class="input-row"><label>내용7</label><textarea id="bamSub7Content1" rows="1"></textarea></div>
							<div class="input-row"><label>내용8</label><textarea id="bamSub8Content1" rows="1"></textarea></div>
                            
                            <div class="input-row input-row-subtitle"><label>2. 소제목</label><input type="text" id="bamSubTitle2"></div>
                            <div class="input-row"><label>내용1</label><textarea id="bamSub1Content2" rows="1"></textarea></div>
							<div class="input-row"><label>내용2</label><textarea id="bamSub2Content2" rows="1"></textarea></div>
							<div class="input-row"><label>내용3</label><textarea id="bamSub3Content2" rows="1"></textarea></div>
							<div class="input-row"><label>내용4</label><textarea id="bamSub4Content2" rows="1"></textarea></div>
							<div class="input-row"><label>내용5</label><textarea id="bamSub5Content2" rows="1"></textarea></div>
							<div class="input-row"><label>내용6</label><textarea id="bamSub6Content2" rows="1"></textarea></div>
							<div class="input-row"><label>내용7</label><textarea id="bamSub7Content2" rows="1"></textarea></div>
							<div class="input-row"><label>내용8</label><textarea id="bamSub8Content2" rows="1"></textarea></div>
                            
                            <div class="input-row input-row-subtitle"><label>3. 소제목</label><input type="text" id="bamSubTitle3"></div>
                            <div class="input-row"><label>내용1</label><textarea id="bamSub1Content3" rows="1"></textarea></div>
							<div class="input-row"><label>내용2</label><textarea id="bamSub2Content3" rows="1"></textarea></div>
							<div class="input-row"><label>내용3</label><textarea id="bamSub3Content3" rows="1"></textarea></div>
							<div class="input-row"><label>내용4</label><textarea id="bamSub4Content3" rows="1"></textarea></div>
							<div class="input-row"><label>내용5</label><textarea id="bamSub5Content3" rows="1"></textarea></div>
							<div class="input-row"><label>내용6</label><textarea id="bamSub6Content3" rows="1"></textarea></div>
							<div class="input-row"><label>내용7</label><textarea id="bamSub7Content3" rows="1"></textarea></div>
							<div class="input-row"><label>내용8</label><textarea id="bamSub8Content3" rows="1"></textarea></div>
                            
                            <div class="input-row input-row-subtitle"><label>4. 소제목</label><input type="text" id="bamSubTitle4"></div>
                            <div class="input-row"><label>내용1</label><textarea id="bamSub1Content4" rows="1"></textarea></div>
							<div class="input-row"><label>내용2</label><textarea id="bamSub2Content4" rows="1"></textarea></div>
							<div class="input-row"><label>내용3</label><textarea id="bamSub3Content4" rows="1"></textarea></div>
							<div class="input-row"><label>내용4</label><textarea id="bamSub4Content4" rows="1"></textarea></div>
							<div class="input-row"><label>내용5</label><textarea id="bamSub5Content4" rows="1"></textarea></div>
							<div class="input-row"><label>내용6</label><textarea id="bamSub6Content4" rows="1"></textarea></div>
							<div class="input-row"><label>내용7</label><textarea id="bamSub7Content4" rows="1"></textarea></div>
							<div class="input-row"><label>내용8</label><textarea id="bamSub8Content4" rows="1"></textarea></div>
                            
                            <div class="input-row input-row-subtitle"><label>5. 소제목</label><input type="text" id="bamSubTitle5"></div>
                            <div class="input-row"><label>내용1</label><textarea id="bamSub1Content5" rows="1"></textarea></div>
							<div class="input-row"><label>내용2</label><textarea id="bamSub2Content5" rows="1"></textarea></div>
							<div class="input-row"><label>내용3</label><textarea id="bamSub3Content5" rows="1"></textarea></div>
							<div class="input-row"><label>내용4</label><textarea id="bamSub4Content5" rows="1"></textarea></div>
							<div class="input-row"><label>내용5</label><textarea id="bamSub5Content5" rows="1"></textarea></div>
							<div class="input-row"><label>내용6</label><textarea id="bamSub6Content5" rows="1"></textarea></div>
							<div class="input-row"><label>내용7</label><textarea id="bamSub7Content5" rows="1"></textarea></div>
							<div class="input-row"><label>내용8</label><textarea id="bamSub8Content5" rows="1"></textarea></div>
                            
                            <div class="input-row input-row-subtitle"><label>6. 소제목</label><input type="text" id="bamSubTitle6"></div>
                            <div class="input-row"><label>내용1</label><textarea id="bamSub1Content6" rows="1"></textarea></div>
							<div class="input-row"><label>내용2</label><textarea id="bamSub2Content6" rows="1"></textarea></div>
							<div class="input-row"><label>내용3</label><textarea id="bamSub3Content6" rows="1"></textarea></div>
							<div class="input-row"><label>내용4</label><textarea id="bamSub4Content6" rows="1"></textarea></div>
							<div class="input-row"><label>내용5</label><textarea id="bamSub5Content6" rows="1"></textarea></div>
							<div class="input-row"><label>내용6</label><textarea id="bamSub6Content6" rows="1"></textarea></div>
							<div class="input-row"><label>내용7</label><textarea id="bamSub7Content6" rows="1"></textarea></div>
							<div class="input-row"><label>내용8</label><textarea id="bamSub8Content6" rows="1"></textarea></div>
                            
                            <div class="input-row input-row-subtitle"><label>7. 소제목</label><input type="text" id="bamSubTitle7"></div>
                            <div class="input-row"><label>내용1</label><textarea id="bamSub1Content7" rows="1"></textarea></div>
							<div class="input-row"><label>내용2</label><textarea id="bamSub2Content7" rows="1"></textarea></div>
							<div class="input-row"><label>내용3</label><textarea id="bamSub3Content7" rows="1"></textarea></div>
							<div class="input-row"><label>내용4</label><textarea id="bamSub4Content7" rows="1"></textarea></div>
							<div class="input-row"><label>내용5</label><textarea id="bamSub5Content7" rows="1"></textarea></div>
							<div class="input-row"><label>내용6</label><textarea id="bamSub6Content7" rows="1"></textarea></div>
							<div class="input-row"><label>내용7</label><textarea id="bamSub7Content7" rows="1"></textarea></div>
							<div class="input-row"><label>내용8</label><textarea id="bamSub8Content7" rows="1"></textarea></div>
                            
                            <div class="input-row input-row-subtitle"><label>8. 소제목</label><input type="text" id="bamSubTitle8"></div>
                            <div class="input-row"><label>내용1</label><textarea id="bamSub1Content8" rows="1"></textarea></div>
							<div class="input-row"><label>내용2</label><textarea id="bamSub2Content8" rows="1"></textarea></div>
							<div class="input-row"><label>내용3</label><textarea id="bamSub3Content8" rows="1"></textarea></div>
							<div class="input-row"><label>내용4</label><textarea id="bamSub4Content8" rows="1"></textarea></div>
							<div class="input-row"><label>내용5</label><textarea id="bamSub5Content8" rows="1"></textarea></div>
							<div class="input-row"><label>내용6</label><textarea id="bamSub6Content8" rows="1"></textarea></div>
							<div class="input-row"><label>내용7</label><textarea id="bamSub7Content8" rows="1"></textarea></div>
							<div class="input-row"><label>내용8</label><textarea id="bamSub8Content8" rows="1"></textarea></div>


                            <hr style="border:0; border-top:1px dashed #ddd; width:100%; margin: 10px 0;">
                        </div>
                    </div>

                </div>
            </div>

        </div> </div>
</div>
`;

//							<div class="input-row input-row-subtitle"><label>끝인사</label><input type="text" id="bamCloseTitle1"></div>

	// 스크립트에 삽입할 때 사용
	document.body.insertAdjacentHTML('beforeend', style + html);

	// 2. 탭 전환 기능을 위한 전역 함수 정의
	// (템퍼몽키는 샌드박스 환경이라 window 객체에 등록해야 HTML의 onchange에서 호출 가능할 수 있습니다)
	window.toggleBamTab = function(mode) {
		const hiddenTab = document.getElementById('bamLayerHidden');
		const trustTab = document.getElementById('bamLayerTrust');
		
		if (mode === 'hidden') {
			hiddenTab.classList.add('active');
			trustTab.classList.remove('active');
			// 제목 등 UI 텍스트 변경이 필요하면 여기서 처리
			document.getElementById('bamhobakTitle').innerText = '밤호박 히든+ ver.' + _bamVersion;
		} else {
			hiddenTab.classList.remove('active');
			trustTab.classList.add('active');
			// 제목 변경 예시
			document.getElementById('bamhobakTitle').innerText = '밤호박 신뢰도+ ver.' + _bamVersion;
		}
	};


	// addEventListener로 이벤트 리스너 추가
	const executeButton = document.getElementById('executeHidden');
	executeButton.addEventListener('click', executeHidden);

	const closeButton = document.getElementById('closeHidden');
	closeButton.addEventListener('click', hide_hidden_program);

	const extractButton = document.getElementById('extractHidden');
	extractButton.addEventListener('click', extract_hidden_program);

	// 소제목 내용5~8 접기/펼치기 초기화
	setupCollapsibleSubContents();

	// 여러 문단 붙여넣기 자동 분배
	setupParagraphPasteDistribution();


	const titleSpan = document.getElementById('bamhobakTitle');

	// 최초 Layer 선택
	const hiddenTab = document.getElementById('bamLayerHidden');
	const trustTab = document.getElementById('bamLayerTrust');
	hiddenTab.classList.remove('active');
	trustTab.classList.add('active');

	titleSpan.innerText = "밤호박 히든+ ver." + _bamVersion;

}