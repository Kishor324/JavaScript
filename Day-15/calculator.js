const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {

        const value = button.innerText;
        console.log(value);

        // AC button
        if (value === "AC") {
            display.value = "";
        }

        // DEL button
        else if (value === "DEL") {
            display.value = display.value.slice(0, -1);
        }

        // 0 button this not work
        // else if (value === "0") {
        //     display.value = "0";
        // }

        // =
        else if (value === "=") {

            try {

                let expression = display.value
                    .replace(/×/g, "*")
                    .replace(/÷/g, "/")
                    .replace(/[−–—]/g, "-"); // Fixes special minus characters
                display.value = eval(expression);

                // Last character
                const lastChar = expression.slice(-1);
                console.log(lastChar);
                
                //How it works: If your expression is "5+3-", .slice(-1) grabs the trailing "-".The purpose: Developers use this to prevent bugs. For example, you can use lastChar to check if a user accidentally left an operator at the end (like 5+3+) or pressed two operators in a row (like 5++3), allowing you to block the error before eval() runs

            } catch (error) {

                display.value = "Error";

            }

        }

        // Other buttons
        else {
            display.value += value;
        }

    });
});