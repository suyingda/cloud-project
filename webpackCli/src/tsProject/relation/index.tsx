import React from "react";

interface Interface {
    name: string,
    age?: number
}

let a: Interface = {name: 'nameValue'}
for (let i in a) {
    console.log(i, a)
}


function Relation() {
    enum Direction {
        NORTH = 1,
        SOUTH = 3,
        EAST = 2,
        WEST,
    }

    let dir: Direction = Direction.NORTH;
    let SOUTH: Direction = Direction.SOUTH;
    let EAST: Direction = Direction.EAST;
    let WEST: Direction = Direction.WEST;
    console.log(dir)
    console.log(SOUTH)
    console.log(EAST)
    console.log(WEST)
    let a: Array<number | string> = [1, "2", 3, "4"];


    return <div>
        {dir}
        {SOUTH}
    </div>
}

export default Relation;
