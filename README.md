## Single source of truth FE

There are three processes to note:

## Generate types from graph schema
  `npm run graph`<br/>
  `npm run update-schema`<br/>
  `npm run generate-types-graph`<br/>

  To note the updates:<br/>
  update `graph.js` enum for status to include more/less statuses

## Generate types from swagger
  `npm run generate-types-swagger`

  To note the updates:<br/>
  update `swagger.json` enum for status (line 64) to include more/less statuses

## Start App
  `npm run start`
