let clientSection= document.querySelector(".client");
let productSection= document.querySelector(".products");
let cartSection= document.querySelector(".cart");

let username; //name of the user
let clientRestrictions; //restrictions specified by the user
let clientPreference;// user preference
let clientCart=[];  

let filteredItems=[]; //result of the filtering items by restrictions and preferences

//All items
let allItems=[
    {
        name:"Chicken",
        restrictions:["none"],
        preferences:["non-organic","all"],
        category:"meats",
        price:20,
        picture:"images/chicken.jpg",
    },
    {
        name:"Broccoli",
        restrictions:["vegetarian","gluten-free","none"],
        preferences:["organic","all"],
        category:"vegetables",
        price:7,
        picture:"images/broccoli.jpg",
    },
    {
        name:"Mushroom",
        restrictions:["vegetarian","gluten-free","none"],
        preferences:["non-organic","all"],
        category:"vegetables",
        price:8,
        picture:"images/mushroom.jpg",
    },
    {
        name:"Potato",
        restrictions:["vegetarian","gluten-free","none"],
        preferences:["non-organic","all"],
        category:"vegetables",
        price:10,
        picture:"images/potato.jpg",
    },
    {
        name:"Milk",
        restrictions:["none"],
        preferences:["organic","all"],
        category:"dairy",
        price:5,
        picture:"images/milk.png",
    },
    {
        name:"Pork",
        restrictions:["none"],
        preferences:["organic","non-organic","all"],
        category:"meats",
        price:30,
        picture:"images/pork.jpg",
    },
    {
        name:"Cheese",
        restrictions:["gluten-free","none"],
        preferences:["organic","all"],
        category:"dairy",
        price:10,
        picture:"images/cheese.jpg",
    },
    {
        name:"Tomato",
        restrictions:["vegetarian","gluten-free","none"],
        preferences:["organic","all"],
        category:"fruits",
        price:7,
        picture:"images/tomato.jpg",
    },
    {
        name:"Tofu",
        restrictions:["vegetarian","gluten-free","none"],
        preferences:["non-organic","all"],
        category:"vegetables",
        price:10,
        picture:"images/tofu.jpg",
    },
    {
        name:"Sausage",
        restrictions:["none"],
        preferences:["organic","all"],
        category:"meats",
        price:8,
        picture:"images/sausage.jpg",
    },
    {
        name:"Ice cream",
        restrictions:["gluten-free","none"],
        preferences:["non-organic","all"],
        category:"dairy",
        price:15,
        picture:"images/icecream.jpg",
    },
    {
        name:"Banana",
        restrictions:["none"],
        preferences:["organic","non-organic","all"],
        category:"fruits",
        price:10,
        picture:"images/banana.jpg",
    },

];


//sort items by price
allItems.sort((a,b)=>a.price-b.price);


//items will be the array we are going to work on
let items=allItems;



//this function helps change the main display depending on the section we want to access
function changeSection(sectionName) {
    // Reset font-weight and font-size for all menu options
    document.querySelectorAll('.customer, .productB, .cartB').forEach(function (element) {
        element.style.fontWeight = 'normal';
        element.style.fontSize = 'inherit';
    });

    // Hide/show sections based on the provided parameter (sectionName)
    if (sectionName == "client") {
        clientSection.style.display = "block";
        productSection.style.display = "none";
        cartSection.style.display = "none";
        document.querySelector('.clientNav').style.backgroundColor = 'rgb(6, 57, 38)';
        document.querySelector('.productsNav').style.backgroundColor = 'gray';
        document.querySelector('.cartNav').style.backgroundColor = 'gray';
        document.querySelector('.clientNav').style.borderBottomRightRadius="60px" ;
        document.querySelector('.clientNav').style.borderTopRightRadius="60px" ;
    } else if (sectionName == "products") {
        clientSection.style.display = "none";
        productSection.style.display = "block";
        cartSection.style.display = "none";
        document.querySelector('.clientNav').style.backgroundColor = 'rgb(6, 57, 38)';
        document.querySelector('.productsNav').style.backgroundColor = 'rgb(14, 91, 62)';
        document.querySelector('.cartNav').style.backgroundColor = 'gray';
        document.querySelector('.clientNav').style.borderBottomRightRadius="0px" ;
        document.querySelector('.clientNav').style.borderTopRightRadius="0px" ;
        document.querySelector('.productsNav').style.borderBottomRightRadius="60px" ;
        document.querySelector('.productsNav').style.borderTopRightRadius="60px" ;
    } else {
        clientSection.style.display = "none";
        productSection.style.display = "none";
        cartSection.style.display = "block";
        document.querySelector('.clientNav').style.backgroundColor = 'rgb(6, 57, 38)';
        document.querySelector('.productsNav').style.backgroundColor = 'rgb(14, 91, 62)';
        document.querySelector('.cartNav').style.backgroundColor = 'rgb(16, 125, 83)';
        document.querySelector('.clientNav').style.borderBottomRightRadius="0px" ;
        document.querySelector('.clientNav').style.borderTopRightRadius="0px" ;
        document.querySelector('.productsNav').style.borderBottomRightRadius="0px" ;
        document.querySelector('.productsNav').style.borderTopRightRadius="0px" ;
    }
}




//retrieve the users informations, restrictions and preferences
function updateClientSection(){
    username=document.querySelector(".client input[name='username']").value; 

    let restrictionChecked=document.querySelectorAll(".client input[type='checkbox']:checked"); //select all the input where the box is checked
    if(restrictionChecked.length>0){
        clientRestrictions= Array.from(restrictionChecked).map(checkbox=>checkbox.value); //convert those elements in an array if at least a box was checkeed
    }else{
        clientRestrictions=["none"]; //set restriction to none if no boxes was checked
    }

    let preferenceChecked=document.querySelector(".client select[name='preference'] option:checked"); //select the option chosen by the user
    if(preferenceChecked){
        clientPreference= preferenceChecked.value; //retrieve the value associated to the option
    }

    //Make sure to put these functions in these orders otherwise, the cart won't update items properly when you update client preferncs
    updateProductSection("all",0);
    updateCartSection()

    //change the active section to the product section
    changeSection("products");
}

//Add an event listener to all the option of the list to filter by category
let categoryList=document.querySelector(".products select");
categoryList.addEventListener("change",function(){
    updateProductSection(this.value,0);
})

//render a new display depending on the user's preferences and restrictions
function updateProductSection(filter,byCategoryOrSearch){

    //empty the list 
    filteredItems=[];

    //add items that match user's preferences and restrictions to an array
    if (filter=="all"){
        for(let i=0;i<items.length;i++){
            let containCommonRestrictions=clientRestrictions.some(restriction=>items[i].restrictions.includes(restriction));
            if(containCommonRestrictions && items[i].preferences.includes(clientPreference) ){
                filteredItems.push(items[i]);
            }
        }
    }else {
        for(let i=0;i<items.length;i++){
            let containCommonRestrictions=clientRestrictions.some(restriction=>items[i].restrictions.includes(restriction));
            let condition1=byCategoryOrSearch==0 && containCommonRestrictions && items[i].preferences.includes(clientPreference) && items[i].category==filter;
            let condition2=byCategoryOrSearch==1 && (items[i].name.toLowerCase()==filter || items[i].name.toLowerCase().includes(filter));
            if(condition1 || condition2 ){
                filteredItems.push(items[i]);
                //and i gotta update the product category as well

            }
        }
    }
    

    const form=document.querySelector(".products form");
    const breakline=document.createElement("br");

    form.innerHTML="";
    

    //create labels, checkboxes and a submit button to add to the form
    for(let i=0;i<filteredItems.length;i++){

        //create an input
        const inputCheckbox=document.createElement("input");
        inputCheckbox.type="checkbox";
        inputCheckbox.name=filteredItems[i].name;
        inputCheckbox.value=filteredItems[i].name;

        //create image
        const image=document.createElement("img");
        //image.src=filteredItems[i].picture;
        if (filteredItems[i].picture=="") {
            image.src="images/tof1.jpeg";
        }
        else {
            image.src=filteredItems[i].picture;
        }
        image.style.width="50px";
        image.style.height="50px";
        


        // Create label for the checkbox
        const label = document.createElement("label");
        label.appendChild(inputCheckbox);
        label.appendChild(image);
        label.appendChild(document.createTextNode(filteredItems[i].name + " - " + filteredItems[i].price +" $"));

        //add a breakline for a nicer display
        const breakline=document.createElement("br");
        form.appendChild(label);
        form.appendChild(breakline);
    }

    //create and add a subnit button
    const submitBtn=document.createElement("input");
    submitBtn.type="button";
    submitBtn.value="Add items to cart";

    submitBtn.addEventListener("click",updateCartSection);
    form.appendChild(breakline);
    form.appendChild(submitBtn);


    //empty the list 
    filteredItems=[];

}


// create the cart based on what was selected in the product section
function updateCartSection(){
    //change the active section to the cart section
    changeSection("cart");
    
    //update the username and set the total to 0
    document.querySelector(".cart p").innerHTML="User:  "+ username;
    document.querySelector(".cart span").innerHTML="0";
    const ul=document.querySelector(".cart ul");
    ul.innerHTML=""
    let total=0
    let obj;

    ul.innerHTML="";

    let itemsChecked=document.querySelectorAll(".products input[type='checkbox']:checked");//select all input check by the customer
    if(itemsChecked.length>0){
        let cart= Array.from(itemsChecked).map(item=>item.value); //extract the values associated with those inputs
        for(let i=0;i<cart.length;i++){
            obj=transformIntoObject(cart[i]);//transform each item's name to the matching object
            clientCart.push(obj);// push the item(as an object now) to the customer's cart
        }
    }
     //calculate the user total and render every item on the display
     for(let i=0;i<clientCart.length;i++){  
        const li=document.createElement("li");
        li.appendChild(document.createTextNode(clientCart[i].name));
        ul.appendChild(li);
        total+=clientCart[i].price;
    }
    document.querySelector(".cart span").innerHTML=total;
}


function searchItem(){
    itemToSearch=document.querySelector("header input[type='search']").value.toLowerCase();

    //set the category to all
    document.querySelector(".products select").value="all";

    //put the filter price to the max
    filterByPrice(30);

    updateClientSection();//make sure to change the section where ever the cutomer is and set the customer preferences to the default one is nothing was set before
    updateProductSection(itemToSearch,1); 
    
}

function filterByPrice(priceMax){
    //filter by price
    items=allItems.filter((item)=>item.price<=priceMax);
    //update the number to be display aside the filter range
    document.getElementById("priceInput").value=priceMax;
    document.getElementById("price").value=priceMax;


    //update the product section after filtering
    let categoryDesired=document.querySelector(".products select").value;
    if(categoryDesired=="all"){
        updateProductSection("all",0);
    }else{
        updateProductSection(categoryDesired,0);
    }
    
}

//transform a string into an object
function transformIntoObject(name){
    for(let i=0; i<items.length;i++){
        if(name==items[i].name){
            return items[i];
        }
    }
}

