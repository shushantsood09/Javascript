alert("Hi your script works!");
let a = prompt("Enter the valiue of a: ", 890);
a = Number.parseInt(a)
alert("You enter a of type " + ( typeof a));

let write = confirm("Do you want to write it to the page? ");

if (write){
    document.write(a);

}
else{
    document.write("Please allow me to wrute!!")
}