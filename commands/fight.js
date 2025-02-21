const Eris = require("eris");
const Constants = Eris.Constants;
const getOptionValue = require("../utils/eris/getOptionValue");
const toTitleCase = require("../utils/common/string/toTitleCase");

module.exports = {
  name: 'fight',
  description: 'Generates an epic battle between you and whoever you mention/write.',
  options: [
    {
      "name": "opponent",
      "description": "Name of opponent you wish to face.",
      "type": Constants.ApplicationCommandOptionTypes.STRING,
      "required": true,
    }
  ],
  async generator(interaction) {
    // WARNING FROM FUTURE ME. The following code is from the old bot and is very, very old. 
    // I recommend you don't look at this mess for your own sanity. You have been warned...

    //Removes the ~fight from the users message to get the name of the person they wish to fight
    var str = ` ${getOptionValue(interaction.data.options, "opponent")}`;
    
    //Decides the type of battle that will take place
    let weaponTypeRand
    if (str === "") {
      weaponTypeRand = "Failed"
    } else if (str === " yui funami" || str === " Yui Funami"|| str === " YUI FUNAMI"|| str === " Yui funami"|| str === " yui Funami"|| str === " funami yui"|| str === " Funami Yui"|| str === " Funami yui"|| str === " funami Yui"|| str === " FUNAMI YUI"|| str === " yUi fUnAmI"|| str === " <@!655409004024954910>"){
      weaponTypeRand = "Yuimode"
    } else {
      weaponTypeRand = (Math.floor(Math.random() * 3) + 1)
    }
    
    const numberList = `123456789`
    const alphabet = `abcdefghijklmnopqrstuvwxyz`
    let randomletter = alphabet[Math.floor(Math.random()*alphabet.length)];
    let randomletter2 = alphabet[Math.floor(Math.random()*alphabet.length)];
    let randomletter3 = alphabet[Math.floor(Math.random()*alphabet.length)];
    let randomletter4 = alphabet[Math.floor(Math.random()*alphabet.length)];
    let randomletter5 = alphabet[Math.floor(Math.random()*alphabet.length)];
    let randomletter6 = alphabet[Math.floor(Math.random()*alphabet.length)];
    let randomletter7 = alphabet[Math.floor(Math.random()*alphabet.length)];
    let randomletter8 = alphabet[Math.floor(Math.random()*alphabet.length)];
    let randomNumber = numberList[Math.floor(Math.random()*numberList.length)];
    
    let planetName = `${randomletter}${randomletter2}${randomletter3}${randomletter4}${randomletter5}${randomletter6}${randomletter7} ${randomNumber}`
    let animalName1 = `${randomletter6}${randomletter5}${randomletter}${randomletter7}`
    let animalName2 = `${randomletter8}${randomletter}${randomletter4}${randomletter3}${randomletter7}${randomletter6}`
    
    //Person randomisers
    let personDecide = [(Math.random())];
    let decidedPerson
    if (personDecide >= 0.5) {
      decidedPerson = str
    } else if (personDecide < 0.5) {
      decidedPerson = toTitleCase(interaction.member.username)
    }
    
    //Noun randomisers and lists
    let foodDrinkList = [`bread`, `nutrient paste`, `milk chocolate`, `dark chocolate`, `white chocolate`, `water`, `lemonade`, `coffee`, `tea`, `hotdogs`, `salad`, `cake`, `rum raisin ice cream`, `apples`, `chips`, `fries`, `burgers`]
    let gamesList = [`Minecraft`, `Football`, `Golf`, `Roblox`, `Osu!`, `Tetris`, `Animal Crossing`, `Namori Quest`]
    let yuruList = [`Akari`, `Chinatsu`, `Kyoko`, `Ayano`, `Chitose`, `Mari`, `Chizuru`, `Akari and Kyoko`, `Kyoko and Chinatsu`, `Akari, kyoko and Chinatsu`, `Chizuru and Chitose`, `Chitose and Ayano`]
    let yryrSeasonList = [`Yuru Yuri Season 1`, `Yuru Yuri Season 2`, `Yuru Yuri Season 3`, `Yuru Yuri Nachuyachumi`, `Yuru Yuri Nachuyachumi+`, `Mini Yuri`, `Yuru Yuri 10th anniversary`]
    let yryrEps
    
    let foodDrinkRand = foodDrinkList[Math.floor(Math.random()*foodDrinkList.length)];
    let foodDrinkRand2 = foodDrinkList[Math.floor(Math.random()*foodDrinkList.length)];
    let foodDrinkRand3 = foodDrinkList[Math.floor(Math.random()*foodDrinkList.length)];
    let gamesRand = gamesList[Math.floor(Math.random()*gamesList.length)];
    let yuruRand = yuruList[Math.floor(Math.random()*yuruList.length)];
    let yryrRand = yryrSeasonList[Math.floor(Math.random()*yryrSeasonList.length)];
    let yryrEpsRand
    
    //Yuru Yuri episode randomiser
    if (yryrRand === `Yuru Yuri Season 1`) {
      yryrEps = [`episode 1`, `episode 2`, `episode 3`, `episode 4`, `episode 5`, `episode 6`, `episode 7`, `episode 8`, `episode 9`, `episode 10`, `episode 11`, `episode 12`]
      yryrEpsRand = yryrEps[Math.floor(Math.random()*yryrEps.length)];
    } else if (yryrRand === `Yuru Yuri Season 2`) {
      yryrEps = [`episode 1`, `episode 2`, `episode 3`, `episode 4`, `episode 5`, `episode 6`, `episode 7`, `episode 8`, `episode 9`, `episode 10`, `episode 11`, `episode 12`]
      yryrEpsRand = yryrEps[Math.floor(Math.random()*yryrEps.length)];
    } else if (yryrRand === `Yuru Yuri Season 3`) {
      yryrEps = [`episode 1`, `episode 2`, `episode 3`, `episode 4`, `episode 5`, `episode 6`, `episode 7`, `episode 8`, `episode 9`, `episode 10`, `episode 11`, `episode 12`]
      yryrEpsRand = yryrEps[Math.floor(Math.random()*yryrEps.length)];
    } else if (yryrRand === `Yuru Yuri Nachuyachumi`) {
      yryrEps = [`OVA`]
      yryrEpsRand = yryrEps[Math.floor(Math.random()*yryrEps.length)];
    } else if (yryrRand === `Yuru Yuri Nachuyachumi+`) {
      yryrEps = [`episode 1`, `episode 2`]
      yryrEpsRand = yryrEps[Math.floor(Math.random()*yryrEps.length)];
    } else if (yryrRand === `Mini Yuri`) {
      yryrEps = [`episode 1`, `episode 2`, `episode 3`, `episode 4`]
      yryrEpsRand = yryrEps[Math.floor(Math.random()*yryrEps.length)];
    } else if (yryrRand === `Yuru Yuri 10th anniversary`) {
      yryrEps = [`OVA`]
      yryrEpsRand = yryrEps[Math.floor(Math.random()*yryrEps.length)]
    }
    
    
    //Adjective lists
    let sizeAdjectives = [`small`, `large`, `big`, `little`, `tiny`, `huge`, `long`, `short`, `miniscule`, `massive`, `normal`, `gargantuan`]
    let conditionAdjectives = [`shoddy`, `broken`, `legendary`, `common`, `rare`, `modified`, `crappy`, `dangerous`, `strong`, `powerful`, `weak`, `deadly`]
    let emotionList = [`disbelief`, `shock`, `terror`, `happiness`, `awe`, `sadness`, `disappointment`]
    let colours = [`red`, `purple`, `blue`, `green`, `orange`, `yellow`, `brown`, `black`, `white`, `grey`]
    let descriptionList = [`scarce`, `unusual`, `beautiful`, `glowing`, `bright`, `pretty`, `smelly`, `ugly`, `calm`, `dense`]
    let animalDescriptions = [`feathered`, `scaled`, `winged`, `slimy`, `amphibious`, `fluffy`, `horned`]
    
    
    //Adjective Randomisers
    let sizeRand = sizeAdjectives[Math.floor(Math.random()*sizeAdjectives.length)];
    let sizeRand2 = sizeAdjectives[Math.floor(Math.random()*sizeAdjectives.length)];
    let sizeRand3 = sizeAdjectives[Math.floor(Math.random()*sizeAdjectives.length)];
    let sizeRand4 = sizeAdjectives[Math.floor(Math.random()*sizeAdjectives.length)];
    let sizeRand5 = sizeAdjectives[Math.floor(Math.random()*sizeAdjectives.length)];
    let conditionRand = conditionAdjectives[Math.floor(Math.random()*conditionAdjectives.length)];
    let conditionRand2 = conditionAdjectives[Math.floor(Math.random()*conditionAdjectives.length)];
    let conditionRand3 = conditionAdjectives[Math.floor(Math.random()*conditionAdjectives.length)];
    let emotionRand = emotionList[Math.floor(Math.random()*emotionList.length)];
    let colourRand = colours[Math.floor(Math.random()*colours.length)];
    let colourRand2 = colours[Math.floor(Math.random()*colours.length)];
    let colourRand3 = colours[Math.floor(Math.random()*colours.length)];
    let colourRand4 = colours[Math.floor(Math.random()*colours.length)];
    let colourRand5 = colours[Math.floor(Math.random()*colours.length)];
    let descriptionRand = descriptionList[Math.floor(Math.random()*descriptionList.length)];
    let animalDescriptionRand = animalDescriptions[Math.floor(Math.random()*animalDescriptions.length)];
    let animalDescriptionRand2 = animalDescriptions[Math.floor(Math.random()*animalDescriptions.length)];
    //Verb lists
    let crowdResponses = [`cheers`, `boo's`, `stares in ${emotionRand}`, `roars`]
    //Verb Randomisers
    let crowdRand = crowdResponses[Math.floor(Math.random()*crowdResponses.length)];
    
    //List of unarmed attack types and their randomisers
    let attackTypesBody = [`punches`, "kicks", `slaps`, `repeatedly punches`, `repeatedly kicks`, `headbutts`, `repeatedly slaps`, `super punches`, `mega kicks`, `rapidly slaps`, `elbows`, `smacks`, `karate chops`, `knees`, `double punches`, `pokes`, `roundhouse kicks`, `flying kicks`, `jabs`, `rapidly pokes`]
    let bodyAttackRand = attackTypesBody[Math.floor(Math.random()*attackTypesBody.length)];
    let bodyAttackRand2 = attackTypesBody[Math.floor(Math.random()*attackTypesBody.length)];
    let bodyAttackRand3 = attackTypesBody[Math.floor(Math.random()*attackTypesBody.length)];
    
    //Parts of the body and randomisers for them
    let bodyParts = [`face`, `left arm`, `left leg`, `right arm`, `right leg`, `left shoulder`, `right shoulder`, `back`, `chest`, `left hand`, `right hand`, `left foot`, `right foot`, `left ear`, `right ear`, `tongue`, `stomach`, `waist`, `left buttock`, `nose`, `right buttock`, `mouth`, `chin`, `neck`, `elbow`, `left knee`, `right knee`, `forehead`, `cheek`, `throat`]
    let bodyPartsRand = bodyParts[Math.floor(Math.random()*bodyParts.length)];
    let bodyPartsRand2 = bodyParts[Math.floor(Math.random()*bodyParts.length)];
    let bodyPartsRand3 = bodyParts[Math.floor(Math.random()*bodyParts.length)];
    let bodyPartsRand4 = bodyParts[Math.floor(Math.random()*bodyParts.length)];
    let bodyPartsRand5 = bodyParts[Math.floor(Math.random()*bodyParts.length)];
    let bodyPartsRand6 = bodyParts[Math.floor(Math.random()*bodyParts.length)];
    
    //Responses to attacks
    let responseList = [`stagger backwards`, `shout in pain`, `fall over`, `recieve a bruise`, `gain multiple bruises`, `get angry`, `go berserk`, `get a fracture`, `wince`, `get irritated`]
    let responseListRand = responseList[Math.floor(Math.random()*responseList.length)];
    let responseListRand2 = responseList[Math.floor(Math.random()*responseList.length)];
    let responseListRand3 = responseList[Math.floor(Math.random()*responseList.length)];
    //Round 1 (No weapons)
    let round1 = `The combatants enter the ${sizeRand} battle arena. Immediately ${toTitleCase(interaction.member.username)} ${bodyAttackRand}${str} in their ${bodyPartsRand}, causing them to ${responseListRand}.${str} ${bodyAttackRand2} ${toTitleCase(interaction.member.username)} in the ${bodyPartsRand2}, making them ${responseListRand2}.`
    let round1v2 = `Both combatants enter the ${sizeRand} battle dome, both feeling ${emotionRand} as they approach each other. Quickly, ${toTitleCase(interaction.member.username)} ${bodyAttackRand}${str} in their ${bodyPartsRand}, causing them to ${responseListRand}.${str} ${bodyAttackRand2} ${toTitleCase(interaction.member.username)} aiming for their ${bodyPartsRand2} but they miss.`
    let round1v3 = `The fighters enter the ${sizeRand} fighting ring. Both are feeling ${emotionRand} as they get closer and closer to one another. ${toTitleCase(interaction.member.username)} ${bodyAttackRand}${str} aiming directly for their ${bodyPartsRand}, but they miss!.${str} ${bodyAttackRand2} ${toTitleCase(interaction.member.username)} in the ${bodyPartsRand2}, making them ${responseListRand2}.`
    //Round 1 End
    let round1Rand = (Math.floor(Math.random() * 3) + 1)
    if (round1Rand === 2) {
      round1 = round1v2
    } else if(round1Rand === 3) {
      round1 = round1v3
    }
    
    
    //More violent responses to an attack
    let responseListEXTREME = [`bleeds profusely`, `vomits blood`, `has their eyeballs shoot out`, `falls unconscious for a few moments`]
    let extremeResponseRand = responseListEXTREME[Math.floor(Math.random()*responseListEXTREME.length)];
    let extremeResponseRand2 = responseListEXTREME[Math.floor(Math.random()*responseListEXTREME.length)];
    
    
    
    //Special finishing moves that the winner does to the loser
    let winConditions = [`rips off their opponents`, `does a flip and cuts off their opponents`, `tears off their opponents`, `shoves ${foodDrinkRand} down their opponents throat then kicks their`]
    let winConditions2 = [`throws them into a pit of lava`, `chucks the rest of their corpse into a food and drink processing machine, turning their opponent into ${foodDrinkRand2}`, `throws them into a vat of acid`, `drowns their opponent in ${foodDrinkRand2}`]
    let afterBattle = [`buys some ${conditionRand3} ${foodDrinkRand3} with their hard earned money`, `loots the remains of the body, finding some ${foodDrinkRand3}`, `has a party to celebrate`, `prays to our goddess, Yui Funami`, `goes to watch ${yryrRand} ${yryrEpsRand}`]
    
    let winConditions1Rand = winConditions[Math.floor(Math.random()*winConditions.length)];
    let winConditions2Rand = winConditions2[Math.floor(Math.random()*winConditions2.length)];
    afterBattleRand = afterBattle[Math.floor(Math.random()*afterBattle.length)];
    //A reason of why the loser lost to the opponent and the randomisers
    let deathReason = [`ran out of limbs to be removed`, `became too weak to continue fighting`, `ran out of health potions`, `got low on health points`, `lost the ability to move`, `slipped and couldn't get back up`]
    let deathReasonRand = deathReason[Math.floor(Math.random()*deathReason.length)];
    
    
    
    // If it's a sharp melee fight //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (weaponTypeRand === 1) {
      //List of bladed weapons
      let weaponsListSharp = [`sword`, `dagger`, `diamond sword`, `golden sword`, `iron sword`, `wooden sword`, `stone sword`, `claymore`, `machete`, `greatsword`, `longsword`, `rapier`, `katana`]
      let weaponListSharpRand = weaponsListSharp[Math.floor(Math.random()*weaponsListSharp.length)];
      let weaponListSharpRand2 = weaponsListSharp[Math.floor(Math.random()*weaponsListSharp.length)];
      
      //Types of attack for sharp weapons
      let sharpWeaponAttacks = ['slice', `slash`, `swing at`, `stab`]
      let sharpWeaponAttackRand = sharpWeaponAttacks[Math.floor(Math.random()*sharpWeaponAttacks.length)];
      let sharpWeaponAttackRand2 = sharpWeaponAttacks[Math.floor(Math.random()*sharpWeaponAttacks.length)];
      let sharpWeaponAttackRand3 = sharpWeaponAttacks[Math.floor(Math.random()*sharpWeaponAttacks.length)];
      
      //Round 2 start
      let round2 = ` ${toTitleCase(interaction.member.username)} finds a ${conditionRand} ${weaponListSharpRand} and picks it up! They ${sharpWeaponAttackRand}${str}'s ${bodyPartsRand3} and${str} ${extremeResponseRand}.${str} turns around and spots a ${conditionRand2} ${weaponListSharpRand2}! They quickly grab it and ${sharpWeaponAttackRand2} ${toTitleCase(interaction.member.username)}'s ${bodyPartsRand4}. ${toTitleCase(interaction.member.username)} ${extremeResponseRand2}.`
      
      let winnerDecide = [(Math.random())];
      // Decides which side wins
      if (winnerDecide >= 0.5) {
        
        //message author wins
        let finalRound = ` ${toTitleCase(interaction.member.username)} uses their ${weaponListSharpRand} to constantly ${sharpWeaponAttackRand3}${str}. Eventually,${str} ${deathReasonRand}. ${toTitleCase(interaction.member.username)} ${winConditions1Rand} ${bodyPartsRand5} and ${winConditions2Rand}. The crowd ${crowdRand} and ${toTitleCase(interaction.member.username)} ${afterBattleRand}.`
        
        interaction.createFollowup({
          embeds: [{
            title: `**${toTitleCase(interaction.member.username)} VS${str}**`,
            color: 0xbb0a1e,
            description: round1 + round2 + finalRound,
            image: {
              url: `https://funamibot.s3.eu-central-2.amazonaws.com/battles/blade.png`
            },
            footer: {
              text: "An epic battle between you and another person."
            }
          }]
        });
      } else if (winnerDecide < 0.5) {
        
        //Opponent wins
        let finalRound = `${str} uses their ${weaponListSharpRand2} to constantly ${sharpWeaponAttackRand3} ${toTitleCase(interaction.member.username)}. After a while, ${toTitleCase(interaction.member.username)} ${deathReasonRand}.${str} ${winConditions1Rand} ${bodyPartsRand5} and ${winConditions2Rand}. The crowd ${crowdRand} and${str} ${afterBattleRand}.`
        
        interaction.createFollowup({
          embeds: [{
            title: `**${toTitleCase(interaction.member.username)} VS${str}**`,
            color: 0xbb0a1e,
            description: round1 + round2 + finalRound,
            image: {
              url: `https://funamibot.s3.eu-central-2.amazonaws.com/battles/blade.png`
            },
            footer: {
              text: "An epic battle between you and another person."
            }
          }]
        });
      }
      //Sharp melee fight end
      
      // If it's a gun fight ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    } else if (weaponTypeRand === 2) {
      
      //List of gun weapons
      let weaponsListGun = [`pistol`, `shotgun`, `minigun`, `machine gun`, `toilet roll launcher`, `rifle`, `laser gun`, `nailgun`]
      let weaponListGunRand = weaponsListGun[Math.floor(Math.random()*weaponsListGun.length)];
      let weaponListGunRand2 = weaponsListGun[Math.floor(Math.random()*weaponsListGun.length)];
      
      //List of gun weapon attacks
      let gunWeaponAttacks = ['shoot', `fire at`, `blast`, `constantly fire at`]
      let gunAttackRand = gunWeaponAttacks[Math.floor(Math.random()*gunWeaponAttacks.length)];
      let gunAttackRand2 = gunWeaponAttacks[Math.floor(Math.random()*gunWeaponAttacks.length)];
      let gunAttackRand3 = gunWeaponAttacks[Math.floor(Math.random()*gunWeaponAttacks.length)];
      
      //Round 2 start
      let round2 = ` ${toTitleCase(interaction.member.username)} finds a ${weaponListGunRand} and picks it up! They ${gunAttackRand}${str}'s ${bodyPartsRand3} and${str} ${extremeResponseRand}.${str} turns around and spots a ${weaponListGunRand2}! They quickly grab it and ${gunAttackRand2} ${toTitleCase(interaction.member.username)}'s ${bodyPartsRand4}. ${toTitleCase(interaction.member.username)} ${extremeResponseRand2}.`
      
      
      let winnerDecide = [(Math.random())];
      // Decides which side wins
      if (winnerDecide >= 0.5) {
        let finalRound = ` ${toTitleCase(interaction.member.username)} uses their ${weaponListGunRand} to constantly ${gunAttackRand3}${str}. Eventually,${str} ${deathReasonRand}. ${toTitleCase(interaction.member.username)} ${winConditions1Rand} ${bodyPartsRand5} and ${winConditions2Rand}. The crowd ${crowdRand} and ${toTitleCase(interaction.member.username)} ${afterBattleRand}.`
        
        interaction.createFollowup({
          embeds: [{
            title: `**${toTitleCase(interaction.member.username)} VS${str}**`,
            color: 0xbb0a1e,
            description: round1 + round2 + finalRound,
            image: {
              url: `https://funamibot.s3.eu-central-2.amazonaws.com/battles/gun.png`
            },
            footer: {
              text: "An epic battle between you and another person."
            }
          }]
        });
      } else if (winnerDecide < 0.5) {
        let finalRound = `${str} uses their ${weaponListGunRand2} to constantly ${gunAttackRand3} ${toTitleCase(interaction.member.username)}. After a while, ${toTitleCase(interaction.member.username)} ${deathReasonRand}.${str} ${winConditions1Rand} ${bodyPartsRand5} and ${winConditions2Rand}. The crowd ${crowdRand} and ${str} ${afterBattleRand}.`
        
        interaction.createFollowup({
          embeds: [{
            title: `**${toTitleCase(interaction.member.username)} VS${str}**`,
            color: 0xbb0a1e,
            description: round1 + round2 + finalRound,
            image: {
              url: `https://funamibot.s3.eu-central-2.amazonaws.com/battles/gun.png`
            },
            footer: {
              text: "An epic battle between you and another person."
            }
          }]
        });
      }
      //Gun fight end
      
      //If it's a Space fight ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    } else if (weaponTypeRand === 3) {
      
      //List of space weapons
      let weaponsListSpaceGun = [`laser pistol`, `laser shotgun`, `laser minigun`, `laser machine gun`, `laser murder cannon`, `laser rifle`, `laser gun`, `fire extinguisher`]
      let weaponListSpaceGunRand = weaponsListSpaceGun[Math.floor(Math.random()*weaponsListSpaceGun.length)];
      let weaponListSpaceGunRand2 = weaponsListSpaceGun[Math.floor(Math.random()*weaponsListSpaceGun.length)];
      
      //List of space gun weapon attacks
      let gunWeaponAttacks = ['shoot', `fire at`, `blast`, `constantly fire at`]
      let gunAttackRand = gunWeaponAttacks[Math.floor(Math.random()*gunWeaponAttacks.length)];
      let gunAttackRand2 = gunWeaponAttacks[Math.floor(Math.random()*gunWeaponAttacks.length)];
      let gunAttackRand3 = gunWeaponAttacks[Math.floor(Math.random()*gunWeaponAttacks.length)];
      
      //Other generations
      let planetDesc = [`flora`, `water`, `ocean`, `grass`]
      let planetDescRand = planetDesc[Math.floor(Math.random()*planetDesc.length)];
      let landingType = [`ship`, `shuttle`, `battle cruiser`, `station`, `cruiser`, `mothership`]
      let landingTypeRand = landingType[Math.floor(Math.random()*landingType.length)];
      
      let spaceTransport = [`teleporter`, `${sizeRand2} spaceship`]
      let landingPlaces = [`in the docks of a ${conditionRand2}, ${sizeRand3} space ${landingTypeRand}.`, `on planet ${planetName}. A mainly ${colourRand} surfaced planet. The skies are ${colourRand2} and the ${planetDescRand} is ${colourRand3} and ${descriptionRand}.`]
      
      let landingPlaceRand = landingPlaces[Math.floor(Math.random()*landingPlaces.length)];
      let spaceTransportRand = spaceTransport[Math.floor(Math.random()*spaceTransport.length)];
      
      let winnerDecide = [(Math.random())];
      //Round 2 start
      let round2 = ` Both opponents leap onto their ${spaceTransportRand}s and fly off into space to continue their battle. They both land ${landingPlaceRand}`
      
      if(landingPlaceRand === `in the docks of a ${conditionRand2}, ${sizeRand3} space ${landingTypeRand}.`) {
        //Variables and randomisers
        let shipSides = [`floor`, `ceiling`, `wall`]
        let spaceSideRand = shipSides[Math.floor(Math.random()*shipSides.length)];
        let shipRooms = [`dining area`, `kitchen`, `bedroom`, `bathroom`, `weapons bay`, `storage room`, `dock`]
        let shipRoomRand = shipRooms[Math.floor(Math.random()*shipRooms.length)];
        let roomItems
        let roomObjects
        let finisher2
        
        if (shipRoomRand === `dining area`) {
          roomItems = [`metal chair`, `knife`, `fork`, `spoon`, `space plant`, `food tray`]
          roomObjects = [`vending machine`, `metal table`, `metal chair`, `space plant`]
          finisher2 = [`jams their opponents ${bodyPartsRand5} into the vending machine door and buys many drinks. The drinks fall on the oppenents ${bodyPartsRand5}, killing them`, `slams their opponent against a table, breaking the table and killing the opponent`]
        } else if (shipRoomRand === `kitchen`) {
          roomItems = [`kitchen knife`, `spaceship baking mat`, `wooden spoon`, `pot`, `fridge magnet`, `kettle`, `cyber toaster`]
          roomObjects = [`cyber fridge`, `space coffee machine`, `sink`, `space microwave`, `cyber cupboard`, `dishwasher`]
          finisher2 = [`throws their opponents body in the furnace`, `covers their opponents ${bodyPartsRand5} in nutrient paste and lights it on fire`]
        } else if (shipRoomRand === `bedroom`) {
          roomItems = [`pillow`, `blanket`, `lamp`]
          roomObjects = [`bed`, `desk`]
          finisher2 = [`hides their opponents body under the bed`]
        } else if (shipRoomRand === `bathroom`) {
          roomItems = [`toilet brush`, `shampoo bottle`, `toilet paper`, `toothbrush`]
          roomObjects = [`sink`, `toilet`, `shower`, `bathtub`]
          finisher2 = ['does a backflip and stuffs their opponents body into the toilet', `flushes their opponent down the toilet`]
        } else if (shipRoomRand === `weapons bay`) {
          roomItems = [`ammo crate`, `metal helmet`, `stunstick`]
          roomObjects = [`gun rack`, `missile control panel`]
          finisher2 = [`throws their opponent into the ships missile system and launches them into space`]
        } else if (shipRoomRand === `storage room`) {
          roomItems = [`crate`, `box of nutrient paste`]
          roomObjects = [`shelf`, `stack of crates`]
          finisher2 = [`throws their opponent so hard into the ${spaceSideRand} that they go through it`, `beats their opponent to death with a crate of`]
        } else if (shipRoomRand === `dock`) {
          roomObjects = [`wall`]
          roomItems = [`fire extinguisher`]
          finisher2 = [`opens the airlock, letting their opponent get sucked into space`]
        }
        let roomItemsRand = roomItems[Math.floor(Math.random()*roomItems.length)];
        let roomItemsRand2 = roomItems[Math.floor(Math.random()*roomItems.length)];
        let roomObjectsRand = roomObjects[Math.floor(Math.random()*roomObjects.length)];
        let roomObjectsRand2 = roomObjects[Math.floor(Math.random()*roomObjects.length)];
        let roomObjectsRand3 = roomObjects[Math.floor(Math.random()*roomObjects.length)];
        let roomObjectsRand4 = roomObjects[Math.floor(Math.random()*roomObjects.length)];
        let roomObjectsRand5 = roomObjects[Math.floor(Math.random()*roomObjects.length)];
        
        let responseList2 = [`stagger backwards into a ${roomObjectsRand}`, `shout in pain`, `fall over and smack into a ${roomObjectsRand2}`, `recieve a bruise`, `gain multiple bruises`, `get angry and hit a ${roomObjectsRand3}`, `wince`, `get irritated and smash a ${roomObjectsRand4}`]
        let responseList2Rand = responseList2[Math.floor(Math.random()*responseList2.length)];
        let responseList2Rand2 = responseList2[Math.floor(Math.random()*responseList2.length)];
        
        
        
        let round2v2 = `${toTitleCase(interaction.member.username)} and${str} both meet in the ${shipRoomRand} to do battle. ${toTitleCase(interaction.member.username)} quickly grabs a ${conditionRand2} ${roomItemsRand} that they spotted. They hit ${str} on the ${bodyPartsRand3} with the ${roomItemsRand} which makes them ${responseList2Rand}.${str} grabs the nearest object which happens to be a ${conditionRand} ${roomItemsRand2}. They throw the ${roomItemsRand2} at ${toTitleCase(interaction.member.username)}, making them ${responseList2Rand2}!`
        
        let finisher1 = [`pulls off their opponents ${bodyPartsRand4}`, `rips their opponents ${bodyPartsRand4} off`, `melts their opponents ${bodyPartsRand4} off with a laser`]
        
        let finisher1Rand = finisher1[Math.floor(Math.random()*finisher1.length)];
        let finisher2Rand = finisher2[Math.floor(Math.random()*finisher2.length)];
        
        
        
        
        
        let damageCost = (Math.floor(Math.random() * 10000000))
        let shipPopulation = (Math.floor(Math.random() * 1000000))
        
        let endingList = [`goes on a murderous rampage and kills the ${shipPopulation} other people on the ${landingTypeRand}, no witnesses`, `has to pay £${damageCost} for the damages caused and then goes back to earth to have some rest.`]
        let endingRand = endingList[Math.floor(Math.random()*endingList.length)];
        
        
        // Decides which side wins
        if (winnerDecide >= 0.5) {
          
          
          
          let finalRound = ` Suddenly, ${toTitleCase(interaction.member.username)} finds a ${weaponListSpaceGunRand} on the ${roomObjectsRand5}. They ${gunAttackRand}${str} until${str} ${deathReasonRand}. ${toTitleCase(interaction.member.username)} ${finisher1Rand} and ${finisher2Rand}. After they have won against${str}, ${toTitleCase(interaction.member.username)} ${endingRand}`
          
          interaction.createFollowup({
            embeds: [{
              title: `**${toTitleCase(interaction.member.username)} VS${str}**`,
              color: 0xbb0a1e,
              description: round1 + round2 + round2v2 + finalRound,
              image: {
                url: `https://funamibot.s3.eu-central-2.amazonaws.com/battles/space.png`
              },
              footer: {
                text: "An epic battle between you and another person."
              }
            }]
          });
        } else if (winnerDecide < 0.5) {
          
          let finalRound = ` Suddenly,${str} finds a ${weaponListSpaceGunRand} on the ${roomObjectsRand5}. They ${gunAttackRand} ${toTitleCase(interaction.member.username)} until ${toTitleCase(interaction.member.username)} ${deathReasonRand}.${str} ${finisher1Rand} and ${finisher2Rand}. After they have won against ${toTitleCase(interaction.member.username)},${str} ${endingRand}`
          
          interaction.createFollowup({
            embeds: [{
              title: `**${toTitleCase(interaction.member.username)} VS${str}**`,
              color: 0xbb0a1e,
              description: round1 + round2 + round2v2 + finalRound,
              image: {
                url: `https://funamibot.s3.eu-central-2.amazonaws.com/battles/space.png`
              },
              footer: {
                text: "An epic battle between you and another person."
              }
            }]
          });
          //space fight v1 end
        }
        
      } else if (landingPlaceRand === `on planet ${planetName}. A mainly ${colourRand} surfaced planet. The skies are ${colourRand2} and the ${planetDescRand} is ${colourRand3} and ${descriptionRand}.`) {
        
        let planetModifiers = [`acid rain`, `deadly monsters`, `huge pits`]
        let planetFinisher2
        let planetHazard
        let modifierDetection
        let planetHazardOutcomes
        let planetModifierRand = planetModifiers[Math.floor(Math.random()*planetModifiers.length)];
        
        if (planetModifierRand === `acid rain`) {
          planetFinisher2 = [`rips off their opponents Hazard Protection Suit and the incredibly acidic rain melts their body`]
          planetHazard = [`trips and almost breaks their Hazard Protection Suit`]
          planetHazardOutcomes = [`leaves ${decidedPerson} on the ground for a few seconds. The fall caused ${sizeRand2} holes to form in the ${bodyPartsRand3} of their hazard protection suit, allowing a very ${sizeRand2} amount of acid rain to seep through the suit and burn ${decidedPerson}'s ${bodyPartsRand3}`]
          modifierDetection = [`is a cloud of extremely acidic rain approacing. They both immediately put on their Hazard Protection Suits before battle`]
          planetEndings = [`pulls out their umbrella and goes for a walk`, `hops back on the ${spaceTransportRand} and heads home`]
        } else if (planetModifierRand === `huge pits`) {
          planetFinisher2 = [`thows their opponent into a pit`]
          planetHazard = [`almost falls into a seemingly endless pit`, `gets close to falling into a deep, dark pit`]
          planetHazardOutcomes = [`causes them freeze in terror`, `causes them to panic`]
          modifierDetection = [`are huge pits covering the surface of this planet`]
          planetEndings = [`hops back on the ${spaceTransportRand} and heads home`]
        } else if (planetModifierRand === `deadly monsters`) {
          planetFinisher2 = [`throws their opponent to the planets monsters who eat them alive`, `feeds their opponent to the ${animalName1}`]
          planetHazard = [`gets attacked by a ${animalName1}. A ${colourRand4}, ${animalDescriptionRand2} monster`]
          planetHazardOutcomes = [`distracts them`, `forces them to fight off the monster. ${decidedPerson} ${bodyAttackRand3} the monster in its ${bodyPartsRand3} which makes it ${responseListRand3}`]
          modifierDetection = [`are dangerous creatures that inhabit this planet`, `are deadly lifeforms on this planet`]
          planetEndings = [`hops back on the ${spaceTransportRand} and heads home`, `constructs a place were they house many species of weird animal they found on ${planetName}, such as ${sizeRand5}, ${colourRand5}, ${animalDescriptionRand} creatures called  ${animalName2}`, `keeps some ${sizeRand5}, ${colourRand5}, ${animalDescriptionRand} animals called ${animalName2} that they found on ${planetName} as pets`]
        }
        
        let modifierDetectionRand = modifierDetection[Math.floor(Math.random()*modifierDetection.length)];
        let planetHazardRand = planetHazard[Math.floor(Math.random()*planetHazard.length)];
        let hazardOutcomesRand = planetHazardOutcomes[Math.floor(Math.random()*planetHazardOutcomes.length)];
        let planetFinisher2Rand = planetFinisher2[Math.floor(Math.random()*planetFinisher2.length)];
        let planetEndingRand = planetEndings[Math.floor(Math.random()*planetEndings.length)];
        
        
        let round2v2 = ` Both fighters quickly notice that there ${modifierDetectionRand}. ${toTitleCase(interaction.member.username)} pulls out their ${weaponListSpaceGunRand}! ${toTitleCase(interaction.member.username)} begins to ${gunAttackRand}${str}'s ${bodyPartsRand4},${str} ${extremeResponseRand}.${decidedPerson} ${planetHazardRand} which ${hazardOutcomesRand}.${str} pulls out their ${weaponListSpaceGunRand2} and begins to ${gunAttackRand2} ${toTitleCase(interaction.member.username)}'s ${bodyPartsRand5}, ${toTitleCase(interaction.member.username)} ${extremeResponseRand2}.`
        
        let winnerDecide = [(Math.random())];
        // Decides which side wins
        if (winnerDecide >= 0.5) {
          let finalRound = ` ${toTitleCase(interaction.member.username)} starts to ${gunAttackRand3}${str} relentlessly until${str} ${deathReasonRand}. ${toTitleCase(interaction.member.username)} ${winConditions1Rand} ${bodyPartsRand6} and ${planetFinisher2Rand}. After defeating${str}, ${toTitleCase(interaction.member.username)} ${planetEndingRand}.`
          
          interaction.createFollowup({
            embeds: [{
              title: `**${toTitleCase(interaction.member.username)} VS${str}**`,
              color: 0xbb0a1e,
              description: round1 + round2 + round2v2 + finalRound,
              image: {
                url: `https://funamibot.s3.eu-central-2.amazonaws.com/battles/space.png`
              },
              footer: {
                text: "An epic battle between you and another person."
              }
            }]
          });
        } else if (winnerDecide < 0.5) {
          let finalRound = `${str} starts to ${gunAttackRand3} ${toTitleCase(interaction.member.username)} relentlessly until ${toTitleCase(interaction.member.username)} ${deathReasonRand}.${str} ${winConditions1Rand} ${bodyPartsRand6} and ${planetFinisher2Rand}. After defeating ${toTitleCase(interaction.member.username)},${str} ${planetEndingRand}.`
          
          interaction.createFollowup({
            embeds: [{
              title: `**${toTitleCase(interaction.member.username)} VS${str}**`,
              color: 0xbb0a1e,
              description: round1 + round2 + round2v2 + finalRound,
              image: {
                url: `https://funamibot.s3.eu-central-2.amazonaws.com/battles/space.png`
              },
              footer: {
                text: "An epic battle between you and another person."
              }
            }]
          });
          //space fight end
        }
      }
      
      
      
    } else if(weaponTypeRand === `Yuimode`) {
      let round1v999 = `${toTitleCase(interaction.member.username)} attempts to kill Yui Funami but Yui beats up ${toTitleCase(interaction.member.username)} and obliterates their ${bodyPartsRand}. ${toTitleCase(interaction.member.username)}'s ${bodyPartsRand} ends up getting pretty messed up.`
      
      interaction.createFollowup({
        embeds: [{
          title: `**${toTitleCase(interaction.member.username)} VS Yui**`,
          color: 0xbb0a1e,
          description: round1v999,
          footer: {
            text: "You getting epicly defeated by Yui."
          }
        }]
      });
      
    } else {
      interaction.createFollowup({
        embeds: [{
          title: `**${toTitleCase(interaction.member.username)} VS Absolutely nobody!**`,
          color: 0xbb0a1e,
        }]
      });
    }
    
    
    
    
    
    
    
    
    
  },
};
