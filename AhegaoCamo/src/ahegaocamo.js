"use strict";

class AhegaoCamo
{
	static onLoadMod() 
	{
		
		// Constants
		const mod = "AhegaoCamo";
		const db = `${ModLoader.getModPath(mod)}db/`;
		
		// THE MAIN JUICE
		AhegaoCamo.AddBottom(db, "Ahegao_Pants_1", "AddClothing/suits/pants_ahe1.bundle");
		//AhegaoCamo.AddTop(db, "Ahegao_Shirt_1", "AddClothing/suits/shirt_ahe1.bundle");
		
		
	}
	
	static AddTop(db, OutfitID, TopBundlePath, HandsBundlePath, handsBaseID)
	{
		// add top
		let NewTop = JsonUtil.clone(DatabaseServer.tables.templates.customization["5d28adcb86f77429242fc893"]);

        NewTop._id = OutfitID;
        NewTop._name = OutfitID;
        NewTop._props.Prefab.path = TopBundlePath;
        DatabaseServer.tables.templates.customization[OutfitID] = NewTop;
				
		// add suite
		let NewSuite = JsonUtil.clone(DatabaseServer.tables.templates.customization["5d1f623e86f7744bce0ef705"]);

        NewSuite._id = `${OutfitID}Suite`;
        NewSuite._name = `${OutfitID}Suite`;
		NewSuite._props.Body = OutfitID;
		NewSuite._props.Hands = `${OutfitID}Hands`;
		NewSuite._props.Side = ["Usec", "Bear", "Savage"];
        DatabaseServer.tables.templates.customization[`${OutfitID}Suite`] = NewSuite;
		
		// locale
		for (const localeID in DatabaseServer.tables.locales.global)
        {
            // en placeholder
			DatabaseServer.tables.locales.global[localeID].templates[`${OutfitID}Suite`] = JsonUtil.deserialize(VFS.readFile(`${db}locales/en.json`))[OutfitID];
			
			// actual locale
			if (VFS.exists(`${db}locales/${localeID}.json`)) {
				DatabaseServer.tables.locales.global[localeID].templates[`${OutfitID}Suite`] = JsonUtil.deserialize(VFS.readFile(`${db}locales/${localeID}.json`))[OutfitID];
			}
        }
		
		// add suite to the ragman
		DatabaseServer.tables.traders["5ac3b934156ae10c4430e83c"].suits.push({
			"_id": OutfitID,
			"tid": "5ac3b934156ae10c4430e83c",
			"suiteId": `${OutfitID}Suite`,
			"isActive": true,
			"requirements": {
				"loyaltyLevel": 0,
				"profileLevel": 0,
				"standing": 0,
				"skillRequirements": [],
				"questRequirements": [],
				"itemRequirements": [
					{
						"count": 0,
						"_tpl": "5449016a4bdc2d6f028b456f"
					}
				]
			}
		});
	}
	
	static AddBottom(db, OutfitID, BundlePath)
	{
		// add Bottom
		let NewBottom = JsonUtil.clone(DatabaseServer.tables.templates.customization["5d5e7f4986f7746956659f8a"]);

        NewBottom._id = OutfitID;
        NewBottom._name = OutfitID;
        NewBottom._props.Prefab.path = BundlePath;
        DatabaseServer.tables.templates.customization[OutfitID] = NewBottom;
		
		// add suite
		let NewSuite = JsonUtil.clone(DatabaseServer.tables.templates.customization["5cd946231388ce000d572fe3"]);

        NewSuite._id = `${OutfitID}Suite`;
        NewSuite._name = `${OutfitID}Suite`;
		NewSuite._props.Feet = OutfitID;
		NewSuite._props.Side = ["Usec", "Bear", "Savage"];
        DatabaseServer.tables.templates.customization[`${OutfitID}Suite`] = NewSuite;
		
		// locale
		for (const localeID in DatabaseServer.tables.locales.global)
        {
            // en placeholder
			DatabaseServer.tables.locales.global[localeID].templates[`${OutfitID}Suite`] = JsonUtil.deserialize(VFS.readFile(`${db}locales/en.json`))[OutfitID];
			
			// actual locale
			if (VFS.exists(`${db}locales/${localeID}.json`)) {
			DatabaseServer.tables.locales.global[localeID].templates[`${OutfitID}Suite`] = JsonUtil.deserialize(VFS.readFile(`${db}locales/en.json`))[OutfitID];
			}
        }
		
		// add suite to the ragman
		DatabaseServer.tables.traders["5ac3b934156ae10c4430e83c"].suits.push({
			"_id": OutfitID,
			"tid": "5ac3b934156ae10c4430e83c",
			"suiteId": `${OutfitID}Suite`,
			"isActive": true,
			"requirements": {
				"loyaltyLevel": 0,
				"profileLevel": 0,
				"standing": 0,
				"skillRequirements": [],
				"questRequirements": [],
				"itemRequirements": [
					{
						"count": 0,
						"_tpl": "5449016a4bdc2d6f028b456f"
					}
				]
			}
		});
	}
	
}
	
module.exports = AhegaoCamo;
