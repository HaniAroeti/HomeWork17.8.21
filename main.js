// תרגילי פונקציות STRING


// צרו תוכנית שמקבלת שם פרטי ושם משפחה מהמשתמש
// התוכנית מדפיסה את השם הארוך יותר

// let fullName="Hani Aroeti";
// function printLongName(){
// let firstName=prompt("please enter your  name");
// let lastName=prompt(`hi $`);

// if(firstName.length>lastName.length){
//     alert(firstName);
// }
// else{
//     alert(lastName);

// }
// }
// printLongName();

// להפרוך ליותר גנרי
// let firstName = prompt("please enter your  name");
// let lastName = prompt(`hi ${firstName} ,enter last name`);
// function printLongString(firstString, secondString){
//        if(firstName.length>secondString.length){
//         return firstString;// הפונקציה מחזירה את המידה ואשפר לשמור משתנה ולשמור לשימוש חוזר
//         }
//         else{
//             return secondString;

//         }
//     }
//     printLongName(firstString, secondString);

// צרו תוכנית שמקבלת שם פרטי ושם משחה מהמשתמש
// התוכנית מדפיסה באם השם הפרטי מכיל את התו 'a'
// התוכנית מדפיסה האם השם משפחה מכיל את הסטרינג 'api'
// let firstName = prompt("please enter your  name");
// let lastName = prompt(`hi ${firstName} ,enter last name`);
// if(firstName.indexOf('a')!=-1){
//     console.log('a');
//     return ('a')
// }
// else{
//     console.log("dosnt exist");
// }

// if(lastName.indexOf('api')!=-1){
//     console.log("api");

// }
// else{
//     console.log("dosnt exist");

// }
// let firstName = prompt("please enter your  name");
// let lastName = prompt(`hi ${firstName} ,enter last name`);
// // הפיתרון של יעקב:
// function isAexist(someString){
// if(someString.indexOf("a") !=-1){
//         return true;
//     }
//         return false;
//     }
//     function isApiExist(someString){
//     if(someString.indexOf("api") !=-1){ /// if(lastName.indexOf("api") >-1)אפשר גם לרשום
//         return true
// }
//     return false;
//     }
// console.log(isAexist(firstName));
// console.log(isApiExist(lastName));

//    function isExistGeneral(string1,string2){ /// ניסינו לעשות פונקציה שמחזירה את התוצאה של 2 הפונ הקודמות- לא חובה
//        var result1=isAexist(string1);
//        var result2=isApiexist(string2);
//        return result1 || result2;
//    }
//    isExistGeneral (firstName, lastName)

// צרו תוכנית שמקבלת שם מלא מהמשתמש
// התוכנית מדפיסה כמה תוים יש בשם
// התוכנית מדפיסה האם יש רווח בשם
// התוכנית מדפיסה את השם הפרטי והשם משפחה בנפרד
// אפשר להפוך את הפונקציה שמחזירה ולהפוך לתוכנית עם פונקציות נפרדות 

// let str=prompt("pls enter your full name");
// function getlengthString(strToCheck){
//     return strToCheck.length;

// }
// var strLength= getlengthString(str);/////======================
// console.log(getlengthString(str));


// function isSpace(strToCheck){
//     if(strToCheck.indexof(" ")>-1){
//     return true;
//     }
    
//         return false;
// }
// var isSpaceInStr=isSpace(str);////========
// console.log(`strLength:${strLength},isSpaceInStr:{isSpaceInStr}`);

// let str=prompt("pls enter your full name")
// function getFirstHalf(strToCheck){
//     var firstHalf=strToCheck.substring(0,strToCheck.indexOf(" "));
//     return firstHalf
   

// }
// function getLastHalf(strToCheck){
//     return strToCheck.substring(strToCheck.indexOf(" ")+1, strToCheck.length);
// }
// console.log(getFirstHalf(str));
// console.log(getLastHalf(str));

// printFirstHalf(str);

// 4.
//  צרו פונקציה שמקבלת סטרינג וב
// מידה והוא ארוך מ5 תווים היא מחזירה "long" אחרת "short".

// function longOrShortString (string){
//     if(string.length>5){
//              return "long";
//     }
//         return "short";
// }
// let result = longOrShortString("rjhyff");

// 5. צרו פונקציה שמקבלת שם של מדינה
//  ובמידה והשם קצר מ3 תווים היא מחזירה "yes" אחרת "no".

// function contryNameShortThen3 (countryName){
//     if(countryName.length<3){
//         console.log("yes");
//         return "yes"
//     }
//     console.log("no");
//     return "no"

// }
// contryNameShortThen3("rtyuinmv")

// 6. צרו פונקציה שמקבלת סטרינג ותו, 
// במידה והסטרינג ארוך מ6 תווים היא מחזירה
//  את הסטרינג אחרת היא מחזירה את המיקום של התו. 

// function stringLongOrInt (char, string){
//     if(string.length>6){
//             return string;
//         }
//        return int.indexOf(char);
//     }
// stringLongOrInt('t',"longer then six");



// 7. צרו פונקציה שמקבלת סטרינג ותו,
//  במידה והסטרינג מכיל את התו, היא
//   מחזירה את המיקום של התו אחרת היא מחזירה את הסטרינג.

// function chcekIfIntInString(string, char){
//         if(string.indexOf(char) == -1 ){
//         console.log(string);
//         return string;
//     }
//     else if (string.indexOf(char)){
//         console.log(string.indexOf(char));
//         return string;
//     }
// }
// chcekIfIntInString("hani aroeti",'t')


// 8- 
// כתבו פונקציה שמקבלת שם פרטי ושם משפחה
//  ומחזירה מחרוזת בפורמט הזה: האות הראשונה של השם הפרטי, נקודה,
//   רווח ואת שם המשפחה באותיות גדולות.    j. INNGI 

// function rtnShortCutNameAndCapitalLastName( firstName, lastName ){
//     return (firstName.match(/[A-Z]/)+ "." + " " + lastName.toUpperCase());
// }
// rtnShortCutNameAndCapitalLastName("Hani", "Aroeti")


// 9- 
// כתבו פונקציה שמקבלת 2 שמות משפחה 
// ומחזירה את השם משפחה 
// הארוך יותר ומדפיסה את השם המשפחה 
// הקצר יותר באותיות קטנות.

// function getPrintLastNames (LastName1, LastName2){
//     if(LastName1.length>LastName2.length){
//         console.log(LastName2);
//         return LastName1;
//     }
//     else if(LastName2>LastName1){
//         console.log(LastName1);
//         return LastName2;
//     }
// }
// getPrintLastNames("aroetiiiiiiiiiiii", "ohstrovski")

// 10.
// כתבו פונקציה שמקבלת שם ותו,
//  במידה והתו קיים בשם
//  הפונקציה מחזירה את השם, אחרת 
//  היא מדפיסה הודעה מתאימה.

// function ifCharAtName (name, char){
//     if(name.indexOf(char) == -1){
//     console.log("char isn't appears  at the name");
// }
//     else{
//     console.log(name);
//     return name;
//     }
// }
// ifCharAtName ("hani","z");