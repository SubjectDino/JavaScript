function my_Dictionary()
{
    var Extinct_Animal = {
        Genus:"Tyrannosaurus",
        Species:"Rex",
        TimePeriod: "Late Cretaceous",
        Extinct:66000000
    };
    delete Extinct_Animal.Extinct;
    document.getElementById("Dictionary").innerHTML = Extinct_Animal.Extinct;
}