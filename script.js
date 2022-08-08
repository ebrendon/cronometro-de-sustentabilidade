let hh = 0;
let mm = 0;
let ss = 0;

let totalsec = 0;
let totalmin = 0;
let totalhrs = 0;

let cron = 0;

const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const arvores = document.getElementById('arvores');
const fome = document.getElementById('fome');
const agua = document.getElementById('agua');
const lixo = document.getElementById('lixo');

const play = document.getElementById('play');

let trees = 0;
let pessoas = 0;

function start() {
    cron = setInterval(()=> {
        timer();
    }, 1000);
}

function pause() {
    clearInterval(cron);
    play.disabled = false;
}

function parar() {
    clearInterval(cron);

    hh = 0;
    mm = 0;
    ss = 0;
    totalsec = 0;
    totalmin = 0;
    totalhrs = 0;

    horas.textContent = '0' + hh;
    minutos.textContent = '0' + mm;
    segundos.textContent = '0' + ss;

    arvores.textContent = '-';
    fome.textContent = '-';
    agua.textContent = '-';
    lixo.textContent = '-';

    play.disabled = false;
}

function timer() {
    ss++;
    totalsec ++;

    if(ss == 60) {
        ss = 0;
        mm++;
        totalmin++;
    }

    if(mm == 60) {
        mm = 0;
        hh++;
        totalhrs++;
    }
    
    if(hh == 24) {
        hh = 0;
    }

    horas.textContent = (hh < 10 ? '0' + hh : hh);
    minutos.textContent = (mm < 10 ? '0' + mm : mm);
    segundos.textContent = (ss < 10 ? '0' + ss : ss);

    arvores.textContent = totalsec * 17;
    fome.textContent = totalmin * 11;
    agua.textContent = totalmin * 3;
    lixo.textContent = totalmin;

    play.disabled = true;
}