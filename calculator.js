@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');
/**

Author: Codingscape
Watch Full Tutorial: https://www.youtube.com/watch?v=V4uAzjh9l7Y
Subscribe for More: https://www.youtube.com/c/codingscape?sub_confirmation=1

**/

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    height: 100vh;
    background: #961251;
    font-family: 'Poppins', sans-serif;
}

.wrapper{
    width: 540px;
    background: #FFFFFF;
    padding: 20px 25px;
    border-radius: 10px;
    box-shadow: 0 0 60px rgba(1, 0, 5, 0.15);

}

.wrapper h2{
    font-size: 28px;
    font-weight: 700;
}

.wrapper .div-bar{
    display: block;
    width: 120px;
    background: #961251;
    height: 6px;
    border-radius: 10px;
    margin: 10px 0px;
}

.wrapper .calculator{
    position: relative;
    flex-direction: row;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px 0px;
}


.calculator .calculator-input{
    position: relative;
    width: 50%;
    justify-content: space-around;
    padding: 5px 10px;
    display: block;
}

.calculator .calculator-input input{
    width: 100%;
    height: 40px;
    padding: 20px 14px;
    font-family: "Poppins",sans-serif;
    font-weight: 400;
    font-size: 18px;
    border: 1px solid #7d7d7d;
    border-radius: 4px;
}

.calculator .calculator-input input:focus{
    outline: none;
    border: 1px solid #961251;
}


.calculator .calculator-input label{
    color:#961251;
    font-size: 16px;
    padding: 2px 4px;
    font-weight: 500;
}

.calculator .calculator-input button {
    width: 100%;
    padding: 14px 16px;
    margin-top: 20px;
    font-weight: 700;
    cursor: pointer;
    font-family: "Poppins",sans-serif;
    background: #961251;
    border: 0;
    color: #FFFFFF;
    font-size: 14px;
    text-transform: uppercase;
    border-radius: 4px;
}

 /*chrome, safari, edge, opera*/
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button{
    -webkit-appearance: none;
    margin: 0;
}

/*Firefox*/

input[type=number]{
    -moz-appearance: textfield;
}

.wrapper .calculator-result{
    position: relative;
    display: block;
    padding: 10px;
    margin: 20px 0;
}
.wrapper .calculator-result ul{
    width: 100%;
    background: #96125110;
    padding: 10px 15px;
    border-radius: 5px;
}

.wrapper .calculator-result li{
    list-style: none;
    line-height: 28px;
    font-weight: 500;
    font-size: 18px;
}


.calculator-result .loan_emi{
    font-weight: 700;
    font-size: 22px;
    color: #961251;
}
.calculator-result .loan_principle,
.calculator-result .loan_interest_rate,
.calculator-result .loan_total{
    color: #333332;
    font-weight: 700;
    font-size: 22px;
}

.calculator-result canvas{
    padding: 20px;
}
