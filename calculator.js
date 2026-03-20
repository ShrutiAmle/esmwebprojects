function calculator(a,b,operator)
{
    if(operator === "addition")
    {
        return a+b;
    }
    else if(operator === "subtract")
    {
        return a-b;
    }
    else if(operator === "multiply")
    {
        return a*b;
    }
    else if(operator === "divide")
    {
        return a/b;

    }
    else
    {
        return "Invalid operation"
    }
}
console.log(calculator(10,7, "addition"))
console.log(calculator(17,6, "subtract"))
console.log(calculator(15,8, "multiply"))
console.log(calculator(1,5, "divide"))