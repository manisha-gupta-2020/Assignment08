//STEP 1 Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.

let favMovies = ["The Mummy", "Mission Impossible", "The Polar Express","Dhoom", "Spiderman"]
console.log(`Second movie in the array is: ${favMovies[1]}`)


//STEP 2
// Declare an array called movies using the function constructor method. Add the length of 5 into the constructor. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console to display the first movie in your array.
let movies = new Array(5)
movies[0] = "The Mummy"
movies[1] = "Mission Impossible"
movies[2] = "The Polar Express"
movies[3] = "Dhoom"
movies[4] = "Spiderman"
console.log(`First movie in the array is: ${movies[0]}`)


//STEP 3
// Copy your code from step 2. Add a new movie into the 3rd position within your array. Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.
// let movies = new Array(5)
// movies[0] = "The Mummy"
// movies[1] = "Mission Impossible"
// movies[2] = "The Polar Express"
// movies[3] = "Dhoom"
// movies[4] = "Spiderman"

// movies.splice(2,0,'Batman') //starting at position 2 delete zero elements and add Batman
// console.log(`length of movie array is: ${movies.length}`)

//STEP 4
// Declare an array called movies using literal notation(arrayname = []). Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.
// let movies = ["The Mummy", "Mission Impossible", "The Polar Express","Doom", "Spiderman"]
// delete movies[0];
// console.log(movies)


//STEP 5
// Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. Now, use a for/in loop to iterate through the array and display each movie within the console window.
// let movies = ["The Mummy", "Mission Impossible", "The Polar Express","Doom", "Spiderman","Frozen", "Moana"]

// for (m in movies){
//     console.log(movies[m])
// }

//STEP 6
// Copy the code from step 5. Now, use a for/of loop to iterate through the array and display each movie within the console window.
// let movies = ["The Mummy", "Mission Impossible", "The Polar Express","Doom", "Spiderman","Frozen", "Moana"]

// for (m of movies){
//     console.log(m)
// }


//STEP 7
// Copy the code from step 5. Using the for/of loop to iterate through the array, display each movie within the console window in a sorted view.

// let movies = ["The Mummy", "Mission Impossible", "The Polar Express","Doom", "Spiderman","Frozen", "Moana"]

// for (m of movies.sort()){
//     console.log(m)
// }


//STEP 8

// let movies = ["The Mummy", "Mission Impossible", "The Polar Express","Doom", "Spiderman","Frozen", "Moana"]
// let leastFavMovies = ["Doom","Haunted House","Maniac"]
// console.log(` Movies I like: \n`)
// for (m in movies){
//     console.log(` ${movies[m]}`)
// }
// console.log(` Movies I regret watching: \n`)
// for (mov in leastFavMovies){
//     console.log(` ${leastFavMovies[mov]}`)
// }

//STEP 9
// Copy the code from step 8. Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted
//console.log(movies.sort().reverse()) //first sort then reverse


// let movies = ["The Mummy", "Mission Impossible", "The Polar Express","Doom", "Spiderman","Frozen", "Moana"]
// let leastFavMovies = ["Doom","Haunted House","Maniac"]
// movies.concat(leastFavMovies)
// console.log(movies.reverse().sort()) // first reverse then sort


//STEP 10
// Copy the code from step 9. Use an array function to return just the last item in the array and display it within the console window.
// let lItem = movies.pop() //pop will return the last item but delete it as well so use slice

// let movies = ["The Mummy", "Mission Impossible", "The Polar Express","Doom", "Spiderman","Frozen", "Moana"]
// let leastFavMovies = ["Doom","Haunted House","Maniac"]
// movies.concat(leastFavMovies)
// console.log(movies.reverse().sort()) // first reverse then sort
// let lastItem = movies.slice(-1) //will slice the last element
// console.log(lastItem)



//STEP 11
// Copy the code from step 10. Remove the previous method and this time use a method to return just the first item in the array and display it within the console window.

// let movies = ["The Mummy", "Mission Impossible", "The Polar Express","Doom", "Spiderman","Frozen", "Moana"];
// let leastFavMovies = ["Doom","Haunted House","Maniac"]
// movies.concat(leastFavMovies)
// console.log(movies.reverse().sort()) // first reverse then sort
// let firstItem = movies.slice(0,1)
// console.log(firstItem)

//STEP 12

// let movies = ["The Mummy", "Mission Impossible", "The Polar Express","Doom", "Spiderman","Frozen", "Moana"];
// let newFavMovies = ['Star wars','Downtown Abbey','Magic Horse']
// let indiceList = [];
// // loop and stores indices of not liked movie in array. 
// movies.forEach(movie => {
//     if (movie == "Doom" || movie == "Spiderman" ){
//         indiceList.push(movies.indexOf(movie))
//     }
// })
// console.log('indice list is: ' + indiceList) // print indices to check result
//loop thru the indice list and asign values to the items from another array.

// for(let i=0; i < indiceList.length; i++){
//     // console.log(`indice list : ${indiceList[i]} and ${newFavMovies[i]}`)
//     movies[indiceList[i]] = newFavMovies[i];
// }

// console.log(movies)


//STEP 13

// let movies = [["The Mummy",1], ["Mission Impossible",2], ["The Polar Express",3],["Frozen",4], ["Moana",5]];
// let movieNames = ['test']
// movies.forEach(movie => {
//     // console.log(movie) // movie is the array element in multidimensional array
//     let movieName = movie.filter(item => {
//         console.log(item)
//         return typeof(item) === "string"    // return item from array element if it is a string
//     })
//     movieNames = movieNames.concat(movieName)    
//     })
// console.log(movieNames)


//STEP 14

// let employees  = ['ZAK','JESSICA','MARK','FRED','SALLY']
// let showEmployee = function(employee){
//     console.log('Employees: \n\n')
//     for( let emp of employee){
//         console.log(emp)
//     }
// }
// showEmployee(employees)

//STEP 15

// let filteredValues = []; //array to store filtered data from array
// function filterValues(dataArray){
//     for(let i=0; i < dataArray.length; i++){
//         //if value is not part of values to be filtered out add to filtered values
//         if (!(dataArray[i] === 'false') && !(dataArray[i] == null) && !(dataArray[i] == '0') && !(dataArray[i] == '')){ 
//             filteredValues = filteredValues.concat(dataArray[i])
//         }
//     }
//     return filteredValues; //return fltered values as an array
// } 
// console.log(filterValues([58, '', 'abcd', true, null, false, 0])); // passing array to function filterValues

//STEP 16

// function randomItem(numArray){
//     let i = Math.round((Math.random()*10),1) 
//     return numArray[i-1]
// }
// console.log(randomItem([3,5,7,9,12,33,55,66,75,34]))


//STEP 17

// function largestNumber(numArray){
//     let largestNum = numArray[0]
//     for( let num in numArray){
//         if(numArray[num] > largestNum){
//             largestNum = numArray[num];
//         }
//     }
//     return largestNum;
// }
// console.log(largestNumber([3,5,7,9,12,33,55,66,75,34]))