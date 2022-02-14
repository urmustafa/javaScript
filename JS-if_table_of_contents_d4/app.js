// if elseyapıları

// let score=50;

// if(score>50){
//     console.log('congralte');
// }else if(score==50){
//     console.log('fena değil');
// }//if(score==50){
// //     console.log('fena değil bu not')
// // }
// else{
//     console.log('daha çok çalışmalısın');
// }

// //ternary Operatör
// score>80 ? console.log('tebrikler'): console.log('daha çok çalışmalısın');

// let userName=prompt('lütfen adını giriniz');

// userName?console.log(`Hello ${userName}`):console.log('plase login');

//--
// const a=6%2;
// const b=a?'one':'two';
// console.log(a);
// console.log(b)

// let level=1;

// switch(level){
//     case 1:
//         console.log("title=level1");
//         break
//     case 2:
//         console.log("title=level2");
//         break    
// }

// console.log("switch çalıştı")


// let gun=prompt('gün giriniz');
// var text;
// gun=gun.toLowerCase();

// switch(gun){
//     case 'pazartesi': case'çarşamba': case'perşembe': case'cumartesi':
//         text='in class';
//         break;
//     case 'salı': case'cuma':
//         text='workshop';
//         break; 
//     case 'pazar':
//         text='tatil';
//         break;
//     default:
//         text='lütfen uygun yazınız?'    ;
//         break;

// }
// console.log(text);

let i=0,
sum=0;
while(i<6){
    sum=sum+i;
    console.log(sum)
    i++;
}

console.log(`total sum: ${sum}`);

