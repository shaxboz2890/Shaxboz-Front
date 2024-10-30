// let num = 5;

// while (num < 10) {
//     console.log(num)
//     num++

// }



// do{
//     console.log(num);
//     num++
// }
// while (num < 0);


// for (let i = 1; i < 8; i++) {
//    console.log(i);

// };

// let num = 50

// for (let i = 1; i < 8; i++) {
//    console.log(num);
//    num++
// };



// for (let i = 1; i <= 10; i++) {
//        if(i === 6) {
//         break
//       //   continue
//        }

//        console.log(i);

//  };


// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);  
//      }; 
//  };





//  let result = '';

//  const length = 7;

//  for (let i = 1; i < length; i++) {
//     console.log(i);
//     for (let j = 0; j < i; j++) {
//        result += "*"
//      }
//      result  +=  '\n';

//  };
// console.log(result);




// for (let i = 2; i <= 2;  i++) {
//    if(i === 8) {
//     break
//   //   continue
//    }

//    console.log(i);

// };



// for(let i = 20; i >= 12; i--){
//    if(i === 12){
//       break

//    }
//    console.log(i);
// }


// for (let i = 1; i <= 22; i++) {
//    if(i%2 === 0){

//       console.log(i);
//    }
// }    




// function repeatHalves(test_string, n) {

//     const mid = Math.ceil(test_string.length / 2);


//     const firstHalf = test_string.slice(0, mid);
//     const secondHalf = test_string.slice(mid);


//     const repeatedFirstHalf = firstHalf.repeat(n);
//     const repeatedSecondHalf = secondHalf.repeat(n);


//     return repeatedFirstHalf + repeatedSecondHalf;
// }


// console.log(repeatHalves("Hello world", 2)); 
// console.log(repeatHalves("Vladimir", 3));


// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','')

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies:{},
//     actors:{},
//     geners:[],
//     privat:false
// };

// const a = prompt('Один из последних просмотренных фильмов', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов', ''), 
//       d = prompt('На сколько оцените его?', '')

//     personalMovieDB.movies[a] = b;
//     personalMovieDB.movies[c] = d;


//     console.log(personalMovieDB);

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: true
};


for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', '');
    const b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");  
}

console.log(personalMovieDB);
 