'use strict';

// { id: 1, opts: ['Uri blew up the green balloon', 'Sharon blew up the green balloon'], correctOptIndex: 1, color: '#248748' },
// { id: 2, opts: ['Ron blew up the yellow balloon', 'Ron\'s dad blew up the yellow balloon'], correctOptIndex: 2, color: '#f7e702' },
// { id: 3, opts: ['Sigalit blew up the purple balloon', 'Sigalit cat blew up the purple balloon'], correctOptIndex: 2, color: '#a84aa3' },
// { id: 4, opts: ['Ruthie blew up the blue balloon', 'Alon blew up the blue balloon'], correctOptIndex: 1, color: '#1b99d8' },
// { id: 5, opts: ['Alon blew up the red balloon', 'Ron\'s dad blew up the red balloon'], correctOptIndex: 1, color: '#e00007' }

var gQuests = [];
var gCurrQuestIdx = 0;
var gCorrectAnswers = 1;
var elMsg = document.querySelector('.msg');

function initGame() {

    setMessage(false);
    createQuests();
    renderQuest();
}


function createQuests() {
    gCurrQuestIdx = 0;
    gCorrectAnswers = 1;
    gQuests[0] = {
        id: 1,
        opts: ['Uri blew up the green balloon', 'Sharon blew up the green balloon'],
        correctOptIndex: 1,
        backgroundColor: '#248748',
        color: '#ffffff'
    };
    gQuests[1] = {
        id: 2,
        opts: ['Ron blew up the yellow balloon', 'Ron\'s dad blew up the yellow balloon'],
        correctOptIndex: 2,
        backgroundColor: '#f7e702',
        color: '#000000'
    };
    gQuests[2] = {
        id: 3,
        opts: ['Sigalit blew up the purple balloon', 'Sigalit cat blew up the purple balloon'],
        correctOptIndex: 2,
        backgroundColor: '#a84aa3',
        color: '#ffffff'
    };
    gQuests[3] = {
        id: 4,
        opts: ['Ruthie blew up the blue balloon', 'Alon blew up the blue balloon'],
        correctOptIndex: 1,
        backgroundColor: '#1b99d8',
        color: '#ffffff'
    };
    gQuests[4] = {
        id: 5,
        opts: ['Alon blew up the red balloon', 'Ron\'s dad blew up the red balloon'],
        correctOptIndex: 1,
        backgroundColor: '#e00007',
        color: '#ffffff'
    };

}


function renderQuest() {

    var elBody = document.querySelector('.body');
    elBody.style.backgroundColor = gQuests[gCurrQuestIdx].backgroundColor;

    var elBox = document.querySelector('.box');
    elBox.style.display = 'block';

    var elAnswer1 = document.querySelector('.one');
    elAnswer1.style.display = 'block';
    elAnswer1.innerText = gQuests[gCurrQuestIdx].opts[0];
    elAnswer1.style.backgroundColor = gQuests[gCurrQuestIdx].backgroundColor;   
    elAnswer1.style.color = gQuests[gCurrQuestIdx].color;

    var elAnswer2 = document.querySelector('.two');
    elAnswer2.style.display = 'block';
    elAnswer2.innerText = gQuests[gCurrQuestIdx].opts[1];
    elAnswer2.style.backgroundColor = gQuests[gCurrQuestIdx].backgroundColor;
    elAnswer2.style.color = gQuests[gCurrQuestIdx].color;
    if (gCurrQuestIdx === 1) elMsg.style.color = gQuests[gCurrQuestIdx].color;
    else elMsg.style.color = gQuests[gCurrQuestIdx].backgroundColor;

    var elImg = document.querySelector('.img');
    var imgNum = gCurrQuestIdx + 1;
    var imgName = 'img/' + imgNum + '.png';
    elImg.src = imgName;
    elImg.style.display = 'block';
    elImg.style.borderColor = gQuests[gCurrQuestIdx].color;

}

function checkAnswer(optIdx) {

    if (optIdx === gQuests[gCurrQuestIdx].correctOptIndex) {
        setMessage(false);
        if (gCurrQuestIdx !== 4) {
            gCurrQuestIdx++;
            gCorrectAnswers++;
            renderQuest();
        } else {
            
            var msg = '\nYou answer ' + gCorrectAnswers + ' correct answers';
            setMessage(true,msg );
            if(gCorrectAnswers > 3){
                var applauseSound = new Audio('audio/Applause.wav');
                applauseSound.play();    
            }
            gCurrQuestIdx = 0;
            var elStartBtn = document.querySelector('.start');
            elStartBtn.innerText = 'Start Again';


        }
    } else {
        
        setMessage(true, 'Wrong answer!');
        gCorrectAnswers--;
    }
}

function setMessage(msgStatus, msg) {
    // var elMsg = document.querySelector('.msg');
    if (msgStatus) {
        elMsg.style.display = 'block';
        elMsg.innerText = msg;
    } else {
        elMsg.style.display = 'none';
    }
}