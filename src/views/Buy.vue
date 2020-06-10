<template>
  <div class="wrapper">
    <div class="content">
    
      <h2>You are about to score some tickets to</h2>
      <h3></h3>
      <div class="Artist-Name">
        </div>
       
        <div class="Event-Time">
        </div>
       
        <div class="Event-Place">
        </div>
        
         <div class="Ticket-Pris">
        </div>
        


        <button>Beställ</button>
      
    </div>
  </div>

</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

body{
    background: rgb(60, 36, 61);
}


 h2{
     position: absolute;
width: 202px;
height: 27px;
left: 87px;
top: 99px;

font-family: Fira Sans;
font-style: italic;
font-weight: normal;
font-size: 19px;
line-height: 23px;
text-align: center;

color: rgba(255, 255, 255, 0.8);

 }

 button{
     
position: absolute;
width: 310px;
height: 60px;
left: 33px;
top: 573px;

background: #37AEAB;
border-radius: 3px;
 }
.Artist-Name{
 position: absolute;
width: 281px;
height: 43px;
left: 51px;
top: 189px;

font-family: Sansita One;
font-style: normal;
font-weight: normal;
font-size: 35px;
line-height: 41px;
display: flex;
align-items: center;
text-align: center;

color: #F56B9A;
}



.Event-Time{
  position: absolute;
width: 284px;
height: 25px;
left: 49px;
top: 234px;

font-family: Fira Sans;
font-style: normal;
font-weight: bold;
font-size: 19px;
line-height: 23px;
display: flex;
align-items: center;
text-align: center;

color: #37AEAB;
}

.Event-Place{
  position: absolute;
width: 272px;
height: 37px;
left: 55px;
top: 257px;

font-family: Fira Sans;
font-style: italic;
font-weight: normal;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;

color: rgba(255, 255, 255, 0.7);

}

.Ticket-Pris{

position: absolute;
width: 145px;
height: 50px;
left: 115px;
top: 390px;

font-family: Fira Sans;
font-style: normal;
font-weight: bold;
font-size: 32px;
line-height: 38px;
display: flex;
align-items: center;
text-align: center;

color: #FFFFFF;

text-shadow: 1px 1px 0px #F56B9A;
}

</style>