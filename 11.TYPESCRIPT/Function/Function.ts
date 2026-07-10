function fruit(): number {
    return 10;
}


function simple(): boolean {
    return true;
}


function complex(): number | string | boolean {

    let data: number = 10;
    let name: string = "Rishi Mittal";
    let type: string = "age";


    if (type === "age") {
        return data;
    } 
    else if (type === "name") {
        return name;
    } 
    else {
        return true;
    }

}


function anything(): any {

    return "Anything can come here";

}


// testing

console.log(fruit());

console.log(simple());

console.log(complex());

console.log(anything());