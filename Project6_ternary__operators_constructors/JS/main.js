function Ride_Function()
{
    var Height, Can_ride; // Sets up variable
    Height = document.getElementById("Height").value; //Height
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough"; // Can ride variable
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."; // Shows text
}