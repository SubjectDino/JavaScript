document.write(typeof "Word");
document.write(typeof 3);
document.write("10" + 5);

document.getElementById(2E310);
document.getElementById(-3E310);

document.write(10>2);
document.write(10<2);

console.log(2+2);

document.write(10==10);
document.write(3==11);

X = 10;
Y = 10;
document.write(X===Y);

X = 82;
Y = "82";
document.write(X===Y);

A = "Magnus"
B = "Magnus"
document.write(A===B);

document.write(5>2&&10>4);
document.write(5>10&&10>4);
document.write(5>10 || 10>4);
document.write(5>10 || 10>20);

function not_Function()
{
    document.getElementById("Not").innerHTML = !(5>10);
}