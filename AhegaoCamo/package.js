class Mod
{
   constructor()
   {
		Logger.info("Loading: AhegaoCamo");
		ModLoader.onLoad ["AhegaoCamo"] = require("./src/ahegaocamo.js").onLoadMod;
   }
 
}
module.exports.Mod = new Mod();