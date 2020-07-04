 const fs = require('fs')
 const chalk = require('chalk')


const addNotes = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.find((note) => note.title === title)

    if(!duplicateNotes){
        notes.push({
            title,
            body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('Note added Successfully!'));
        
    }else{
        console.log(chalk.red.inverse('Note is already Existing!'));
        
    }
   
  
}


const removeNote = (title) => {
  const notes = loadNotes()
  const notesToKeep  = notes.filter((note) => note.title!==title)
  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse('Note removed!'))
    saveNotes(notesToKeep)
} else {
    console.log(chalk.red.inverse('No note found!'))
} 
   
}

const listNote = () => {
    const notes = loadNotes()
    console.log(chalk.white.inverse('Your Notes'));
    notes.forEach(note => console.log(note.title))

    
}

const readNotes = (title) => {
    const notes = loadNotes();

    let note =  notes.find(note => note.title == title)   
  
    if(note) {
        console.log(chalk.yellow.inverse(note.title));   
        console.log(note.body);
        
    } else{
        console.log(chalk.red.inverse('Note not found'));
        
    }
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)

}


const loadNotes = () => {

    try{

        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON);

    }catch(e){

        return []

    }
  
   
}





module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNote,
    listNote: listNote,
    readNotes: readNotes
}