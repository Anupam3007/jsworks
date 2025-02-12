var yearCount={
    '2013':1,
    '2014':1,
    '2015':1,
    '2016':1,
    '2017':3,
    '2018':1,
    '2019':2
}

var years = Object.entries(yearCount)

// console.log(years);  // ['2016':1],['2017':3]

years.sort((y1,y2)=>y2[1]-y1[1])

console.log(years);
