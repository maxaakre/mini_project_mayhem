<template>
  <div class="wrapper">
    <div class="list">
      <div class="info">
        <div><p>NAMN</p></div>
        <div><p>VAR</p></div>
        <div><p>ANTAL PLATSER</p></div>
        <div><p>SÅLDA BILJETTER</p></div>
        
      </div>

      <div class="events"></div>
    </div>
    <div class="form">
      <h2>Add Event</h2>

        <div class="inputWide">
          <input type="text" class="wide" placeholder="Name">
          <input type="text" class="wide" placeholder="Where">
          <input type="text" class="wide" placeholder="Date">
        </div>

        <div class="inputQuad">
          <input type="text" class="half" placeholder="From Time">
          <input type="text" class="half" placeholder="To Time">
          <input type="text" class="half" placeholder="Tickets">
          <input type="text" class="half" placeholder="Price">
        </div>

        <button>Add the Event</button>


    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@200;500&display=swap');
.wrapper {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #231F42;
  height: 100vh;
  

  .list {
    width: 732px;
    height: 313px;
    border: 1px solid #000000;
    background: rgba(0, 0, 0, 0.3);

    .info{
        // border: 2px solid white; 
        display: flex;
        flex-flow: row;
        justify-content: space-evenly;
      p{
        color:#F56B9A;
      font-family: Fira Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 13px;
      }
      
    }
  }
  .form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 50px;
    
    width: 432px;
    background: rgba(0, 0, 0, 0.3);
    h2{
      color: #F56B9A;
      font-family: Fira Sans;
      font-style: normal;
      font-weight: bold;
      
    }

    .inputWide{
      display: flex;
      flex-direction: column;
      width: 100%;
      
      
      .wide{
        height: 40px;
        background: transparent;
        margin-bottom: 12px;
        border: 1px solid rgba(255, 255, 255, 0.7);
        border-radius: 3px;
      }
      .wide::placeholder {
        font-family: Fira Sans;
        font-style: normal;
        font-weight: 200;
        
      }
    }
    .inputQuad{
     
      margin: 0 auto -13px;
      
      .half{
        height: 40px;
        width: calc(100% / 2 - 16px);
        background: transparent;
        display: inline-block;
        border: 1px solid rgba(255, 255, 255, 0.7);
        border-radius: 3px;
        margin-right: 20px;
        margin-bottom: 13px;

        &:nth-child(2n){
          margin-right: 0;
        }

        .half::placeholder {
        font-family: Fira Sans;
        font-style: normal;
        font-weight: 200;
        
      }
      }
    }

    button{
        height: 40px;
        width: calc(100% / 2 - 16px);
        background: #F56B9A;
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.7);
        border-radius: 3px;

    }
  }
}
</style>