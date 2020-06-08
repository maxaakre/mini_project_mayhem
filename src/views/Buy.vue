<template>
  <div class="wrapper">
    <div class="content">
    
      <h2>You are about to score some tickets to</h2>
      <h3></h3>
      <div class="input">
        <input type="text" class="ticketnumber" value="<Biljett nummer" />
        <button>Beställ</button>
      </div>
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

</style>