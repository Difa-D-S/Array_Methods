// // DESTRUCTURING OBJECT

    // const student = {
    //     id: 1,
    //     firstName: "rahul",
    //     age: 21,
    //     department: "CS",
    //     address: {
    //         city: "TVM",
    //         country: "India",
    //     },
    // }

    // const name = student.name;
    // console.log(name);

        // const {firstName, age, department} = student;
        // console.log(name, age, department);

    // Another Method

        // const{name, age:rahulAge=25, department} = student;

        // const {address{city}} = student;
        // console.log(city);


// // SPREAD OPERATOR ( ... )
    
    // // 2 Array jointed to single Array using (...)

    // let ar1 = [10, 20, 30];
    // let ar2 = [40, 50, 60, 70];

    //         // let ar3 = ar1.concat(ar2);
    //         // console.log(ar3);

    //         // ar3.push(80);
    //         // console.log(ar3);

    // // let ar3 = [...ar1, ...ar2];
    // // console.log(ar3);

    // // ADD element
    // let ar3 = [100, ...ar1, ...ar2, 90];
    // console.log(ar3);


    // // Object also jointed together

    //     const obj1 = {
    //         id: 1,
    //         firstName: "rahul",
    //         age: 21,
    //         department: "CS",
    //     }

    //     const obj2 = {
    //         address: {
    //             city: "TVM",
    //             country: "India",
    //         },
    //     }

    // let obj3 = {...obj1, ...obj2};
    // console.log(obj3);



// // REST PARAMETERS

    // function sum(num1, num2){
    //     console.log(num1 + num2);
    // }

    // sum(2, 2);

        // function sum(num1, num2, ...nums){
        // let sum = 0;
        // for(let x of nums){
        //     sum = sum + x;
        // }
        // console.log(num1 + num2 + sum);
        // }

        // sum(2, 2, 4, 4);



// // SHORT CIRCUITING (AND Operator (&&)) if firs condition true then move to second condition

            // const price = 1000;

            // price > 500 && console.log("BUY");

            // console.log(0 && "suhail");
            // console.log(8 && "suhail");

            // console.log("hello" && 8 && "suhail");

        // // (OR Operator (||)) if first condition false move to second condition

            // const price = 1000;
            // price > 2000 || console.log("hello");

            // console.log(3 || "jonas");
            // console.log("" || "jonas");
            // console.log(true || 0);
            // console.log(undefined || null);

            // console.log(undefined || 0 || "" || "hello" || 23 || null);
            // console.log(2 || undefined || 0 || "" || "hello" || 23 || null); 



// // NULLISH COALESCING OPERATOR (??)

    // console.log(null ?? "Default Value");
    // console.log(0 ?? "Default Value");

    // const location1 = null ?? "India";
    // console.log(location1);

    // const location2 = 2 ?? "India";
    // console.log(location2);



// // For In & For OF Loops

    // For In (object)

        // const student = {
        //     id: 1,
        //     firstName: "rahul",
        //     age: 21,
        //     department: "CS",
        //     address: {
        //         city: "TVM",
        //         country: "India",
        //     },
        // }

        // for(let item in student){
        //     console.log(item);
        // }

        // for(let item in student){
        //     console.log(student[item]);
        // }


    // For of (Array)

        // const fruit = ["Orange", "Mango"];
        // for(let item of fruit){
        //     // console.log(item);

        //     if(item === "apple"){
        //         console.log("I got an apple");
        //     }
        //     else {
        //         fruit.push("apple");
        //         // console.log(item);
        //     }
        //     console.log(item);
        // }


    
// // Array Methods

    // Slice

        // let arr = [10, 20, 30, 40, 50];

        // console.log(arr.slice());
        // console.log(arr.slice(3));
        // console.log(arr.slice(2,5));
        // console.log(arr.slice(-1));
        // console.log(arr.slice(-2));

    // Spice

        // let arr = [10, 20, 30, 40, 50];
        // console.log(arr.splice(2));     // leave first 2 element and remove remaining element
        // console.log(arr);           // 10, 20
        // console.log(arr.splice(-1));    // delete last element
        // console.log(arr);           // 10

        // console.log(arr.splice(1, 3));      // based on index number it will remove 20, 30, 40 (index: 1, 2, 3)
        // console.log(arr);                // 10, 50


    // Concat

        // let arr1 = [10, 20, 30, 40, 50];
        // let arr2 = [10, 20, 30, 40, 50];

        // const letter = arr1.concat(arr2);
        // console.log(letter);


    // Joint Method

        // console.log(letter.join(" + "))


    // Reverse Method

        // let arr3 = [10, 20, 30, 40, 50];

        // console.log(arr3.reverse());
        // console.log(arr3);


    // Map Method

            // let employee = [
            //     {
            //         name: "Ram",
            //         age: 25,
            //     },
            //     {
            //         name: "Sai",
            //         age: 25,
            //     },
            //     {
            //         name: "John",
            //         age: 25,
            //     },
            // ];


            // let empName = employee.map((emp) => {
            //     return emp.name;
            // });

            // console.log(empName);


        // // Another one example

            // let price = [1000, 2000, 500, 7000, 8000];

            // const clearPrice = price.map((p) => {
            //     return p / 2;
            // });

            // console.log(clearPrice);
            // console.log(price);

    
    // //  Filter Method

        // let employee = [
        //         {
        //             name: "Ram",
        //             age: 40,
        //         },
        //         {
        //             name: "Sai",
        //             age: 30,
        //         },
        //         {
        //             name: "John",
        //             age: 35,
        //         },
        //     ];

        // const overAge = employee.filter((emp) => {
        //     return emp.age > 30;
        // });

        // console.log(overAge);


        // let price = [1000, 2000, 500, 7000, 8000];

        // const overPrice = price.filter((p) => {
        //     return p > 4000;
        // });

        // console.log(overPrice);


    
    // // Reduce Method

        
        // let employee = [
        //     {
        //         name: "Ram",
        //         age: 40,
        //         salary: 30000,
        //     },
        //     {
        //         name: "Sai",
        //         age: 30,
        //         salary: 10000,
        //     },
        //     {
        //         name: "John",
        //         age: 35,
        //         salary: 20000,
        //     },
        // ];

        // const totalSalary = employee.reduce((total, item) => {
        //     // console.log(item);
        //     // console.log(total);
        //     // return item.salary;
        //     return total + item.salary;
        // }, 0);

        // console.log(totalSalary);       