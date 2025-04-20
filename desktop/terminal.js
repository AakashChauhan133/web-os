let showterminal = 1;
function openTerminal()
{
    console.log(showterminal);
    if (showterminal == 1)
    {
        document.getElementById("terminalid").style.display = "block"
    }
    else
    {
        document.getElementById("terminalid").style.display = "none"
    }
    showterminal = showterminal * -1;
}