  
const notes = require('./notes');
const yargs = require('yargs')

//customize the yargs version
yargs.version('1.1.0')

//create add comment
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title : {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: ' Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function( argv ){
     
        notes.addNotes(argv.title, argv.body)
    }

})

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title : {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }},
    handler: function(argv) {
        notes.removeNote(argv.title)
        
    }

})

yargs.command({
    command: 'list',
    describe: ' list all the notes ',
    handler: function(){
        console.log('Listing all the notes');
        
    }
})

yargs.command({
    command: 'read',
    describe : 'Read the notes',
    handler: function(){
        console.log('Reading all the notes');
        
    }
})

yargs.parse();



