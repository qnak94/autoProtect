/**
 * Created by Антон on 27.03.2017.
 */
function start() {
    write__res();
}

function analize__hit__level() {
    var res = 0;
    var hit__level = document.getElementById('hit__val').value;
    if(hit__level<20)
        res='GUARDED';
    else if(hit__level>=20 && hit__level<=50)
        res='WARNING';
    else
        res='ALARM!';
    return res
}
function write__res() {
    var hit__res = analize__hit__level();
    document.getElementById('hit__res').value=hit__res;
}