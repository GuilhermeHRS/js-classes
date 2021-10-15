const scores = [50, 25, 0, 30, 100, 20, 10];

for(let i = 0; i < scores.length; i++) {

    if(scores[i] === 0){
        continue;
    }

    console.log('your score: ', scores [i]);
    if(scores[i] === 100){
        console.log('congrats, you got the top score!');
        break;
    }
}

//--------------------------------------------------

// --------------- TESTE
// for(let i = 0; i < 1000; i++) {
//     console.log('your score: ', i);
//     if(i === 1){
//         console.log('congrats, you got the top score!');
//         continue;
//     } else if (i === 995) {
//         console.log('congrats, you got the second score!');
//         break;
//     }
// }