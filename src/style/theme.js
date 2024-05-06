// 화이트 모드, 다크 모드
// 만들어놓고 필요할 때 가져다가 사용하는 형태

const theme = {};

// 변수처럼 사용하기 보다는 제공해주는 로직이 있음
theme.PALLETE = {
    primary : {
        main : "#ffd159",
        sub : "#fff4d8"
    },
    secondary : "#f1ebf5",
    white : "#fff",
    gray : {
        100 : "#f1ebf5",
        200 : "#aea8b2",
        300 : "#605866",
    },
    // error color
    error : "eb6144",
    background : {
        white : "#fff",
        gray : "#f1ebf5",
    }
}

theme.FONT_SIZE = {
    h1: "55px",
    h2: "40px",
    h3: "30px",
    h4: "21px",
    h5: "18px",
    h6: "16px",
    h7: "12px",
}

theme.FONT_WEIGHT = {
    thin: "100",
    regular: "400",
    blod: "800",
    
}

theme.FONT_LINE = {
    h1: "75px",
    h2: "55px",
    h3: "41px",
    h4: "29px",
    h5: "25px",
    h6: "22px",
    h7: "17px",
}


export default theme;