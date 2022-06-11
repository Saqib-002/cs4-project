const str="saq123@";
const regex=/(\w+\d+\W+){1}|(\w+\W+\d+){1}|(\d+\w+\W+){1}|(\d+\W+\w+){1}|(\W+\w+\d+){1}|(\W+\d+\w+){1}|(\d+\w+\W+){1}|(\d+\W+\w+){1}/;

if(regex.test(str)){
    console.log("reg.test(a)")
}
//1,2,3
//1,3,2
//2,1,3
//2,3,1
//3,1,2
//3,2,1
//2,1,3
//2,3,1
