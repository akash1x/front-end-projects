var bNum = document.querySelectorAll(".btn-num");
var displayResult = document.querySelector("#display")
var temp = "";
var sum = 0;
var nums = [];
for (var i = 0; i < bNum.length; i++) {
    bNum[i].addEventListener("click", function() {
        if (this.value != "=") {
            temp += this.value;
            displayResult.textContent = temp;
        } else if (this.value == "=") {

            if (temp.includes("+")) {
                nums = temp.split("+");
                for (var j = 0; j < nums.length; j++) {
                    sum += Number(nums[j]);
                }
                displayResult.textContent = sum;
                sum = 0;
                nums = [];

            } else if (temp.includes("-")) {
                nums = temp.split("-");
                for (var j = 0; j < nums.length; j++) {
                    sum = sum - Number(nums[j]);
                }
                displayResult.textContent = sum;
                sum = 0;
            }

        }
    })
}