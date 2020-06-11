<template>
  <div class="wrapper">
    
    <div class="Heading">
      <h2>You are about to score some tickets to</h2>
    </div>

      <div class="Artist-Name">
            ARTIST
        </div>
       
        <div class="Event-Time">
          TIME
        </div>
          
        <div class="Event-Place">
          PLACE
        </div>
        
         <div class="Ticket-Pris">
           PRIS
        </div>
        


        <button>Beställ</button>
      
  
  </div>

</template>

<script>
export default {};
</script>

<style lang="scss" >

body{
    background: rgb(60, 36, 61);
}


 .Heading{
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

color: rgba(245, 92, 92, 0.8);

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
left: 120px;
top: 210px;

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
left: 120px;
top: 274px;

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
left: 120px;
top: 288px;

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
top: 370px;

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