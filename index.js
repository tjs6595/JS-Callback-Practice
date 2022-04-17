const inventory = newInventory()
move(inventory).to(0, 0)

const character = newImage('assets/green-character/static.gif')

function handleDirectionChange(direction){
    if(direction === null){
        character.src = 'assets/green-character/static.gif'
    }
    if(direction === 'west'){
        character.src = 'assets/green-character/west.gif'
    }
    if(direction === 'north'){
        character.src = 'assets/green-character/north.gif'
    }
    if(direction === 'east'){
        character.src = 'assets/green-character/east.gif'
    }
    if(direction === 'south'){
        character.src = 'assets/green-character/south.gif'
    }
}

move(character).withArrowKeys(100, 250, handleDirectionChange)

//Bonus #3: In order to do this, I want to complete the following:
//          1.) Using z-index, I want to assign all objects a value of base 10. (Pillar = 10, Staff = 10, Shield = 20,
//                 Crate = 30, Pine = 30, Tree = 40, Sword = 50, and Well = 60)
//          2.) From there I would initially set a value for my green character's index to a value of 0.
//          3.) I would then use if statements that compare to the objects location to see if the character should be in front or in back.
//                 (Example: If character's y(or bottom) coordinate is less than 250, then the character's index would be 0.
//                             but if the characters y coordinate is above 250 and less than 334, I would set it to something between 10 and 20
//                             so it is in front of the Pillar and Staff, but behind all the other objects.)
//          4.) I would continue for all y-coordinate ranges.
//          5.) The problem is I can't access the y-coordinate while I am moving the character.
//
//console.log(character.element.style.left)


move(newImage('assets/tree.png')).to(200, 450)
//move(newImage('assets/tree.png')).withArrowKeys(200, 450)

move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)