//button variable
const btn = document.getElementById("btn1");
// input variable 
const input = document.getElementById("input-form").value;
//form variable
const form = document.getElementById("form-data");

const handleFormSubmit = (event) => {
    event.preventDefault();
    //function to get data
    const data = formToJSON(form.elements);
   

}

form.addEventListener("submit", handleFormSubmit);

//extract the values
//retrieve data
let elements;

const formToJSON = (elements) =>
    [].reduce.call(
      elements,
      (data, element) => {
        data[element.name] = element.value;
        return data;
      },
      {}
    );

// btn.addEventListener("submit", () => {
//     e.preventDefault();


   


//     // window.open('mailto:ajjawi_amer@hotmail.com?subject=subject&body=${input.value}');
//     // const formToJson = elements = [].reduce.call(elements, (data, element))

// })