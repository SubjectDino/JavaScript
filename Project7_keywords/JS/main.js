function Vehicle(Make, Model, Year, Color) // Function for the base of Vehicle
{
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

// Variables for multiple names as well as assigning each variable put in function Vehicle
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); 
var Emily = new Vehicle("Jeep", "Trial Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() // Function for index.html
{
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a" + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}