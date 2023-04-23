const express = require('express')
const { getAllStats,
    pveKills,
    npcKills,
    pveDistance,
    npcDistance,
    headshots,
    deaths,
    suicides,
    killDeathRatio,
    timesWounded,
    timesHealed,
    heliHits,
    heliKills,
    apcHits,
    apcKills,
    barrelsDestroyed,
    explosivesThrown,
    arrowsFired,
    bulletsFired,
    rocketsLaunched,
    dropsLooted,
    structuresBuilt,
    structuresDemolished,
    itemsDeployed,
    itemsCrafted,
    entitiesRepaired,
    resourcesGathered,
    plantsGathered,
    getPlayerStats
    } = require('./stats.controller')

const statsRouter = express.Router()

statsRouter.get('/', getAllStats)
statsRouter.get('/pvekills', pveKills)
statsRouter.get('/npckills', npcKills)
statsRouter.get('/pvedistance', pveDistance)
statsRouter.get('/npcdistance', npcDistance)
statsRouter.get('/headshots', headshots)
statsRouter.get('/deaths', deaths)
statsRouter.get('/suicides', suicides)
statsRouter.get('/kdr', killDeathRatio)
statsRouter.get('/wounded', timesWounded)
statsRouter.get('/healed', timesHealed)
statsRouter.get('/helihits', heliHits)
statsRouter.get('/helikills', heliKills)
statsRouter.get('/apcHits', apcHits)
statsRouter.get('/apckills', apcKills)
statsRouter.get('/barrelsdestroyed', barrelsDestroyed)
statsRouter.get('/explosivesthrown', explosivesThrown)
statsRouter.get('/arrowsfired', arrowsFired)
statsRouter.get('/bulletsfired', bulletsFired)
statsRouter.get('/rocketslaunched', rocketsLaunched)
statsRouter.get('/dropslooted', dropsLooted)
statsRouter.get('/structuresbuilt', structuresBuilt)
statsRouter.get('/structuresdemolished', structuresDemolished)
statsRouter.get('/itemsdeployed', itemsDeployed)
statsRouter.get('/itemsdeployed', itemsDeployed)
statsRouter.get('/itemscrafted', itemsCrafted)
statsRouter.get('/entitiesrepaired', entitiesRepaired)
statsRouter.get('/resourcesgathered', resourcesGathered)
statsRouter.get('/plantsgathered', plantsGathered)
statsRouter.get('/player/:username', getPlayerStats)

module.exports = statsRouter