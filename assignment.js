function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}

var result = kilometerToMeter(5);
console.log(result);


function budgetCalculator(watch, mobile, laptop) {
    var watch = watch * 50;
    var mobile = mobile * 100;
    var laptop = laptop * 500;
    var total = watch + mobile + laptop;
    return total;
}
var result = budgetCalculator(4, 5, 6);
console.log(result);


function hotelCost(day) {
    if (day <= 10) {
        var fainal = day * 100;
    }
    else if (day <= 20) {
        var firstPart = 10 * 100;
        var remaining = day - 10;
        var secondPart = remaining * 80;
        var fainal = firstPart + secondPart;

    }
    else {
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = day - 20;
        var thirdPart = remaining * 50;
        var fainal = firstPart + secondPart + thirdPart;
    }
    return fainal;
}
var result = hotelCost(31);
console.log(result);




function megaFriend(friends) {
    var largestName = friends[0];
    for (var i = 0; i < friends.length; i++) {
        if (typeof (friends[i]) != "string") {
            return 'pls input correct name';
        }
        if (friends[i].length > largestName.length) {
            largestName = friends[i];
        }

    }
    return largestName;
}
var largestFriendName = megaFriend(['agun', 'sadekur', 'golap', 'pulok', 'rahimuddinMiya']);
console.log(largestFriendName);
