const canvas = document.getElementById("tetris");
const context = canvas.getContext("2d");

context.fillStyle= '#000'; 
context.fillRect(0,0 , canvas.Width, canvas.height);

function fetchIssues()
{
    var issues = JSON.parse(localStorage.getItem(issues));
    var issuesListe = document.getElementById("issuesList");

    issuesListe.innerHTML = "";

    for(var i = 0; i<issues.legth; i++)
    {
        var id = issues[i].id;
        var desc = issues[i].id;
        var severity = issues[i].severity;
        var status = issues[i].status;

        issuesListe.innerHTML += "<div class = "";
    }
}
