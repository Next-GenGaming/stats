const connection = require('../../services/sql')

async function getAllStats(req, res) {
    const query = 'SELECT PlayerRankData_properties_UserID, PlayerRankData_properties_Name, PlayerRankData_properties_PVEKills, PlayerRankData_properties_PVEDistance, PlayerRankData_properties_NPCKills, PlayerRankData_properties_NPCDistance, PlayerRankData_properties_HeadShots, PlayerRankData_properties_Deaths, PlayerRankData_properties_Suicides, PlayerRankData_properties_KDR, PlayerRankData_properties_TimesWounded, PlayerRankData_properties_TimesHealed, PlayerRankData_properties_HeliHits, PlayerRankData_properties_HeliKills, PlayerRankData_properties_APCHits, PlayerRankData_properties_APCKills, PlayerRankData_properties_BarrelsDestroyed, PlayerRankData_properties_ArrowsFired, PlayerRankData_properties_BulletsFired, PlayerRankData_properties_RocketsLaunched, PlayerRankData_properties_DropsLooted, PlayerRankData_properties_StructuresBuilt, PlayerRankData_properties_StructuresDemolished, PlayerRankData_properties_ItemsDeployed, PlayerRankData_properties_ItemsCrafted,PlayerRankData_properties_EntitiesRepaired, PlayerRankData_properties_ResourcesGathered, PlayerRankData_properties_StructuresUpgraded, PlayerRankData_properties_FishCaught, PlayerRankData_properties_PlantsGathered FROM PlayerRanks'

    connection.query(query, (err, results) => {
        console.log('quering the db')
        if (err) {
            res.status(500).send('Error retrieving data')
            return
        }

        res.json(results)
    })
}

async function pveKills(req, res) {
    const query = 'SELECT PlayerRankData_properties_UserID, PlayerRankData_properties_Name, PlayerRankData_properties_PVEKills FROM PlayerRanks ORDER BY PlayerRankData_properties_PVEKills DESC'

    connection.query(query, (err, results) => {
        console.log('quering the db')
        if (err) {
            res.status(500).send('Error Retrieving data')
        }

        res.json(results)
    })
}

async function npcKills(req, res) {
    const query = 'SELECT PlayerRankData_properties_UserID, PlayerRankData_properties_Name, PlayerRankData_properties_NPCKills FROM PlayerRanks ORDER BY PlayerRankData_properties_NPCKills DESC'

    connection.query(query, (err, results) => {
        console.log('quering the db')
        if (err) {
            res.status(500).send('Error Retrieving data')
        }

        res.json(results)
    })
}

async function pveDistance(req, res) {
    const query = 'SELECT PlayerRankData_properties_UserID, PlayerRankData_properties_Name, PlayerRankData_properties_PVEDistance FROM PlayerRanks ORDER BY PlayerRankData_properties_PVEDistance DESC'

    connection.query(query, (err, results) => {
        console.log('quering the db')
        if (err) {
            res.status(500).send('Error Retrieving data')
        }

        res.json(results)
    })
}

async function npcDistance(req, res) {
    const query = 'SELECT PlayerRankData_properties_UserID, PlayerRankData_properties_Name, PlayerRankData_properties_NPCDistance FROM PlayerRanks ORDER BY PlayerRankData_properties_NPCDistance DESC'

    connection.query(query, (err, results) => {
        console.log('quering the db')
        if (err) {
            res.status(500).send('Error Retrieving data')
        }

        res.json(results)
    })
}

async function headshots(req, res) {
    const query = 'SELECT PlayerRankData_properties_UserID, PlayerRankData_properties_Name, PlayerRankData_properties_HeadShots FROM PlayerRanks ORDER BY PlayerRankData_properties_HeadShots DESC'

    connection.query(query, (err, results) => {
        console.log('quering the db')
        if (err) {
            res.status(500).send('Error Retrieving data')
        }

        res.json(results)
    })
}

async function deaths(req, res) {
    const query = 'SELECT PlayerRankData_properties_UserID, PlayerRankData_properties_Name, PlayerRankData_properties_Deaths FROM PlayerRanks ORDER BY PlayerRankData_properties_Deaths DESC'

    connection.query(query, (err, results) => {
        console.log('quering the db')
        if (err) {
            res.status(500).send('Error Retrieving data')
        }

        res.json(results)
    })
}

async function suicides(req, res) {
    const query = 'SELECT PlayerRankData_properties_UserID, PlayerRankData_properties_Name, PlayerRankData_properties_Suicides FROM PlayerRanks ORDER BY PlayerRankData_properties_Suicides DESC'

    connection.query(query, (err, results) => {
        console.log('quering the db')
        if (err) {
            res.status(500).send('Error Retrieving data')
        }

        res.json(results)
    })
}

async function killDeathRatio(req, res) {
    const query = 'SELECT PlayerRankData_properties_UserID, PlayerRankData_properties_Name, PlayerRankData_properties_KDR FROM PlayerRanks ORDER BY PlayerRankData_properties_KDR DESC'

    connection.query(query, (err, results) => {
        console.log('quering the db')
        if (err) {
            res.status(500).send('Error Retrieving data')
        }

        res.json(results)
    })
}

async function timesWounded(req, res) {
    const query = 'SELECT PlayerRankData_properties_UserID, PlayerRankData_properties_Name, PlayerRankData_properties_TimesWounded FROM PlayerRanks ORDER BY PlayerRankData_properties_TimesWounded DESC'

    connection.query(query, (err, results) => {
        console.log('quering the db')
        if (err) {
            res.status(500).send('Error Retrieving data')
        }

        res.json(results)
    })
}

async function timesHealed(req, res) {
    const query = 'SELECT PlayerRankData_properties_UserID, PlayerRankData_properties_Name, PlayerRankData_properties_TimesHealed FROM PlayerRanks ORDER BY PlayerRankData_properties_TimesHealed DESC'

    connection.query(query, (err, results) => {
        console.log('quering the db')
        if (err) {
            res.status(500).send('Error Retrieving data')
        }

        res.json(results)
    })
}

async function heliHits(req, res) {
    const query = 'SELECT PlayerRankData_properties_UserID, PlayerRankData_properties_Name, PlayerRankData_properties_HeliHits FROM PlayerRanks ORDER BY PlayerRankData_properties_HeliHits DESC'

    connection.query(query, (err, results) => {
        console.log('quering the db')
        if (err) {
            res.status(500).send('Error Retrieving data')
        }

        res.json(results)
    })
}

async function heliKills(req, res) {
    const query = 'SELECT PlayerRankData_properties_UserID, PlayerRankData_properties_Name, PlayerRankData_properties_HeliKills FROM PlayerRanks ORDER BY PlayerRankData_properties_HeliKills DESC'

    connection.query(query, (err, results) => {
        console.log('quering the db')
        if (err) {
            res.status(500).send('Error Retrieving data')
        }

        res.json(results)
    })
}

async function apcHits(req, res) {
    const query = 'SELECT PlayerRankData_properties_UserID, PlayerRankData_properties_Name, PlayerRankData_properties_APCHits FROM PlayerRanks ORDER BY PlayerRankData_properties_APCHits DESC'

    connection.query(query, (err, results) => {
        console.log('quering the db')
        if (err) {
            res.status(500).send('Error Retrieving data')
        }

        res.json(results)
    })
}

async function apcKills(req, res) {
    const query = 'SELECT PlayerRankData_properties_UserID, PlayerRankData_properties_Name, PlayerRankData_properties_APCKills FROM PlayerRanks ORDER BY PlayerRankData_properties_APCKills DESC'

    connection.query(query, (err, results) => {
        console.log('quering the db')
        if (err) {
            res.status(500).send('Error Retrieving data')
        }

        res.json(results)
    })
}

async function barrelsDestroyed(req, res) {
    const query = 'SELECT PlayerRankData_properties_UserID, PlayerRankData_properties_Name, PlayerRankData_properties_BarrelsDestroyed FROM PlayerRanks ORDER BY PlayerRankData_properties_BarrelsDestroyed DESC'

    connection.query(query, (err, results) => {
        console.log('quering the db')
        if (err) {
            res.status(500).send('Error Retrieving data')
        }

        res.json(results)
    })
}

async function explosivesThrown(req, res) {
    const query = 'SELECT PlayerRankData_properties_UserID, PlayerRankData_properties_Name, PlayerRankData_properties_ExplosivesThrown FROM PlayerRanks ORDER BY PlayerRankData_properties_ExplosivesThrown DESC'

    connection.query(query, (err, results) => {
        console.log('quering the db')
        if (err) {
            res.status(500).send('Error Retrieving data')
        }

        res.json(results)
    })
}

async function arrowsFired(req, res) {
    const query = 'SELECT PlayerRankData_properties_UserID, PlayerRankData_properties_Name, PlayerRankData_properties_ArrowsFired FROM PlayerRanks ORDER BY PlayerRankData_properties_ArrowsFired DESC'

    connection.query(query, (err, results) => {
        console.log('quering the db')
        if (err) {
            res.status(500).send('Error Retrieving data')
        }

        res.json(results)
    })
}

async function bulletsFired(req, res) {
    const query = 'SELECT PlayerRankData_properties_UserID, PlayerRankData_properties_Name, PlayerRankData_properties_BulletsFired FROM PlayerRanks ORDER BY PlayerRankData_properties_BulletsFired DESC'

    connection.query(query, (err, results) => {
        console.log('quering the db')
        if (err) {
            res.status(500).send('Error Retrieving data')
        }

        res.json(results)
    })
}

async function rocketsLaunched(req, res) {
    const query = 'SELECT PlayerRankData_properties_UserID, PlayerRankData_properties_Name, PlayerRankData_properties_RocketsLaunched FROM PlayerRanks ORDER BY PlayerRankData_properties_RocketsLaunched DESC'

    connection.query(query, (err, results) => {
        console.log('quering the db')
        if (err) {
            res.status(500).send('Error Retrieving data')
        }

        res.json(results)
    })
}

async function dropsLooted(req, res) {
    const query = 'SELECT PlayerRankData_properties_UserID, PlayerRankData_properties_Name, PlayerRankData_properties_DropsLooted FROM PlayerRanks ORDER BY PlayerRankData_properties_DropsLooted DESC'

    connection.query(query, (err, results) => {
        console.log('quering the db')
        if (err) {
            res.status(500).send('Error Retrieving data')
        }

        res.json(results)
    })
}

async function structuresBuilt(req, res) {
    const query = 'SELECT PlayerRankData_properties_UserID, PlayerRankData_properties_Name, PlayerRankData_properties_StructuresBuilt FROM PlayerRanks ORDER BY PlayerRankData_properties_StructuresBuilt DESC'

    connection.query(query, (err, results) => {
        console.log('quering the db')
        if (err) {
            res.status(500).send('Error Retrieving data')
        }

        res.json(results)
    })
}

async function structuresDemolished(req, res) {
    const query = 'SELECT PlayerRankData_properties_UserID, PlayerRankData_properties_Name, PlayerRankData_properties_StructuresDemolished FROM PlayerRanks ORDER BY PlayerRankData_properties_StructuresDemolished DESC'

    connection.query(query, (err, results) => {
        console.log('quering the db')
        if (err) {
            res.status(500).send('Error Retrieving data')
        }

        res.json(results)
    })
}

async function itemsDeployed(req, res) {
    const query = 'SELECT PlayerRankData_properties_UserID, PlayerRankData_properties_Name, PlayerRankData_properties_ItemsDeployed FROM PlayerRanks ORDER BY PlayerRankData_properties_ItemsDeployed DESC'

    connection.query(query, (err, results) => {
        console.log('quering the db')
        if (err) {
            res.status(500).send('Error Retrieving data')
        }

        res.json(results)
    })
}

async function itemsCrafted(req, res) {
    const query = 'SELECT PlayerRankData_properties_UserID, PlayerRankData_properties_Name, PlayerRankData_properties_ItemsCrafted FROM PlayerRanks ORDER BY PlayerRankData_properties_ItemsCrafted DESC'

    connection.query(query, (err, results) => {
        console.log('quering the db')
        if (err) {
            res.status(500).send('Error Retrieving data')
        }

        res.json(results)
    })
}

async function entitiesRepaired(req, res) {
    const query = 'SELECT PlayerRankData_properties_UserID, PlayerRankData_properties_Name, PlayerRankData_properties_EntitiesRepaired FROM PlayerRanks ORDER BY PlayerRankData_properties_EntitiesRepaired DESC'

    connection.query(query, (err, results) => {
        console.log('quering the db')
        if (err) {
            res.status(500).send('Error Retrieving data')
        }

        res.json(results)
    })
}

async function resourcesGathered(req, res) {
    const query = 'SELECT PlayerRankData_properties_UserID, PlayerRankData_properties_Name, PlayerRankData_properties_ResourcesGathered FROM PlayerRanks ORDER BY PlayerRankData_properties_ResourcesGathered DESC'

    connection.query(query, (err, results) => {
        console.log('quering the db')
        if (err) {
            res.status(500).send('Error Retrieving data')
        }

        res.json(results)
    })
}

async function plantsGathered(req, res) {
    const query = 'SELECT PlayerRankData_properties_UserID, PlayerRankData_properties_Name, PlayerRankData_properties_PlantsGathered FROM PlayerRanks ORDER BY PlayerRankData_properties_PlantsGathered DESC'

    connection.query(query, (err, results) => {
        console.log('quering the db')
        if (err) {
            res.status(500).send('Error Retrieving data')
        }

        res.json(results)
    })
}

async function getPlayerStats(req, res) {
    const username = req.params.username
    const query = 'SELECT PlayerRankData_properties_UserID, PlayerRankData_properties_Name, PlayerRankData_properties_PVEKills, PlayerRankData_properties_PVEDistance, PlayerRankData_properties_NPCKills, PlayerRankData_properties_NPCDistance, PlayerRankData_properties_HeadShots, PlayerRankData_properties_Deaths, PlayerRankData_properties_Suicides, PlayerRankData_properties_KDR, PlayerRankData_properties_TimesWounded, PlayerRankData_properties_TimesHealed, PlayerRankData_properties_HeliHits, PlayerRankData_properties_HeliKills, PlayerRankData_properties_APCHits, PlayerRankData_properties_APCKills, PlayerRankData_properties_BarrelsDestroyed, PlayerRankData_properties_ArrowsFired, PlayerRankData_properties_BulletsFired, PlayerRankData_properties_RocketsLaunched, PlayerRankData_properties_DropsLooted, PlayerRankData_properties_StructuresBuilt, PlayerRankData_properties_StructuresDemolished, PlayerRankData_properties_ItemsDeployed, PlayerRankData_properties_ItemsCrafted,PlayerRankData_properties_EntitiesRepaired, PlayerRankData_properties_ResourcesGathered, PlayerRankData_properties_StructuresUpgraded, PlayerRankData_properties_FishCaught, PlayerRankData_properties_PlantsGathered FROM PlayerRanks WHERE PlayerRankData_properties_Name = ?'
    console.log(username)
    connection.query(query, [username], (err, results) => {
        console.log('quering the db')
        if (err) {
            res.status(500).send('Error retrieving data')
            return
        }
        res.json(results)
    })
}

module.exports = {
    getAllStats,
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
    getPlayerStats,
}