function removeEntry(map, name){
    map = new Map(Object.entries(map))
    map.delete(name)
    return map
}

console.log(removeEntry({ piano: 300, tv: 100, skate: 50 }, "skate"))
console.log(removeEntry({ mirror: 500, painting: 1 }, "mirror"))
