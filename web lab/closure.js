var game1 = "FOOTBALL"

function outer() {
    var activity = "SPORTS";
    var game = "Basketball";

    function act() {
        console.log("Name of the activity is:" + activity);
    }

    function gam() {
        console.log("Name of game is:" + game);
    }

    function concat() {
        console.log("Concat:   " + game1 + game);
    }
    act()
    gam()
    concat()

}
outer()