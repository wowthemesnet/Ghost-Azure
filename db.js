var KnexMigrator = require('knex-migrator');
var knexMigrator = new KnexMigrator({
    knexMigratorFilePath: __dirname
});

// check your database health
knexMigrator.isDatabaseOK()
    .then(function () {
        // database is OK
    })
    .catch(function (err) {
        if (err.code === 'DB_NOT_INITIALISED') {
            knexMigrator.init();
        }

        if (err.code === 'DB_NEEDS_MIGRATION') {
            knexMigrator.migrate();
        }
    });
