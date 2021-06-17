
// DOM 선언
const playground = document.querySelector(".playground > ul");
const gameText = document.querySelector(".game-text");
const scoreDisplay = document.querySelector(".score");
const restartButton = document.querySelector(".game-text > button");

// Setting
const GAME_ROWS = 20;
const GAME_COLS = 10;

const BLOCKS = {
    tree: [
        [[1,0],[0,1],[1,1],[2,1]],
        [[1,0],[0,1],[1,1],[1,2]],
        [[2,1],[0,1],[1,1],[1,2]],
        [[2,1],[1,2],[1,1],[1,0]],
    ],
    square: [
        [[0,0],[0,1],[1,0],[1,1]],
        [[0,0],[0,1],[1,0],[1,1]],
        [[0,0],[0,1],[1,0],[1,1]],
        [[0,0],[0,1],[1,0],[1,1]],
    ],
    bar: [
        [[1,0],[2,0],[3,0],[4,0]],
        [[2,-1],[2,0],[2,1],[2,2]],
        [[1,0],[2,0],[3,0],[4,0]],
        [[2,-1],[2,0],[2,1],[2,2]],
    ],
    zee: [
        [[0,0],[1,0],[1,1],[2,1]],
        [[0,1],[1,0],[1,1],[0,2]],
        [[0,1],[1,1],[1,2],[2,2]],
        [[2,0],[2,1],[1,1],[1,2]],
    ],
    elLeft: [
        [[0,0],[0,1],[1,1],[2,1]],
        [[1,0],[1,1],[1,2],[0,2]],
        [[0,1],[1,1],[2,1],[2,2]],
        [[1,0],[2,0],[1,1],[1,2]],
    ],
    elRight: [
        [[1,0],[2,0],[1,1],[1,2]],
        [[0,0],[0,1],[1,1],[2,1]],
        [[0,2],[1,0],[1,1],[1,2]],
        [[0,1],[1,1],[2,1],[2,2]],
    ]
}

// variables 변수들
let score = 0;
let duration = 500; //블록이 떨어지는 시간
let downInterval; //초기화는 NULL값
let tempMovingItem; //moving을 실제로 시작하기전에 담아두는 용도


//다음 블록의 타입과 좌표등 정보 저장
const movingItem = {
    type:"",
    direction: 3, //화살표 방향기 눌렀을때 돌려주는거
    top: 0, //좌표 기준으로 어디까지 내려왔는지
    left: 0, //좌우 값
};



init();

// functions

function init(){
    //{... }는 그 안에 변수의 값만 가져와서 씀
    tempMovingItem = { ...movingItem};
    for(let i=0; i <  GAME_ROWS; i++){
        prependNewLine();
    }
    generateNewBlock();
}


//블록만들기
function prependNewLine(){
    const li = document.createElement("li");
    const ul = document.createElement("ul");
        for(let j=0; j < GAME_COLS; j++){
            const matrix = document.createElement("li");
            ul.prepend(matrix);
        }
        li.prepend(ul);
        playground.prepend(li);
}

//BLOCKS들이 그 값에 맞는 모양대로 그림이 나오도록
function renderBlocks(moveType=""){
    const {type, direction, top, left} = tempMovingItem;
    //움직이기 전 블록들의 클래스를 빼주는 과정
    const movingBlocks = document.querySelectorAll(".moving");
    movingBlocks.forEach(moving => {
        moving.classList.remove(type, "moving");
    });
    //forEach 는 반복문이 중간에 break 불가능 그래서 some 사용
    BLOCKS[type][direction].some(block => {
        const x = block[0] + left;
        const y = block[1] + top;
        // const xxx = 조건 ? 참일경우 : 거짓일경우 (둘중 해당되는거 변수에 들어감)
        const target = playground.childNodes[y] ? playground.childNodes[y].childNodes[0].childNodes[x] : null;
        //tatget이 빈값인지 아닌지 확인
        const isAvailable = checkEmpty(target);
        if(isAvailable){
            // target은 즉 li
        target.classList.add(type, "moving");
        } else {
            tempMovingItem = { ...movingItem};
            //위에 꽉 차면 게임오버
            if(moveType === 'retry'){
                clearInterval(downInterval);
                showGameoverText();
            }
            //재귀함수(에러가 발생할 수 있으니 이렇게), 이벤트 스택이 넘치는걸 방지
            setTimeout(()=>{
                renderBlocks('retry');
                if(moveType === "top"){
                    seizeBlock();
                }
            
            },0);
            //원하는 시점에 반복문 중지시키고 다시실행, 빈값이 있으면 return true 실행
            
            return true;
        }
    });
    movingItem.left = left;
    movingItem.top = top;
    movingItem.direction = direction;
}

// 밑에서 내려갈 수 없게하고 고정시킨다음 새로운 블록 만들기
function seizeBlock(){
    const movingBlocks = document.querySelectorAll(".moving");
    movingBlocks.forEach(moving => {
        moving.classList.remove("moving");
        moving.classList.add("seized");
    });
    checkMAtch();
}

function checkMAtch(){

    const childNodes = playground.childNodes;
    childNodes.forEach(child =>{
        let matched = true;
        child.children[0].childNodes.forEach(li=>{
            // 한칸이라도 비면
            if(!li.classList.contains("seized")){
                matched = false;
            }
        });
        if(matched){
            child.remove();
            prependNewLine();
            score = score + 50;
            scoreDisplay.innerText = score;
        }
    })

    generateNewBlock();
}

function generateNewBlock(){

    clearInterval(downInterval);
    downInterval = setInterval(()=>{
            moveBlock('top',1);
    },duration);

    const blockArray = Object.entries(BLOCKS);
    const randomIndex = Math.floor(Math.random() * blockArray.length);
    movingItem.type = blockArray[randomIndex][0];
    movingItem.top = 0;
    movingItem.left = 3;
    movingItem.direction = 0;
    tempMovingItem = {...movingItem};
    renderBlocks();
}

function checkEmpty(target){
    if(!target || target.classList.contains("seized")){
        return false;
    }
    return true;

}

function moveBlock(moveType, amount){
    tempMovingItem[moveType] += amount;
    renderBlocks(moveType);
}

function changeDirection(){
    const direction = tempMovingItem.direction;
    direction === 3? tempMovingItem.direction =0 : tempMovingItem.direction += 1;
    renderBlocks();

}

function dropBlock(){
    clearInterval(downInterval);
    downInterval = setInterval(()=>{
        moveBlock("top",1);
    },10);
}

function showGameoverText(){
    gameText.style.display = "flex";
}

// evnet hadling
document.addEventListener("keydown", e =>{
        switch(e.keyCode){
            case 39:
                moveBlock("left", 1);
                break;
            case 37:
                moveBlock("left", -1);
                break;
            case 40:
                moveBlock("top", 1);
                break;
            case 38:
                changeDirection();
                break;
            case 32:
                dropBlock();
                break;
            default:
                break;
        }
})

restartButton.addEventListener("click",()=>{
    playground.innerHTML = "";
    gameText.style.display = "none";
    init()
});

//https://www.youtube.com/watch?v=1lNy2mhvLFk 39:15까지 시청