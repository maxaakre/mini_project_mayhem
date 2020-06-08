<template>
  <div>

    <div class="wrapper">

      <div class="list"></div>

      <div class="form">
        <h3>Add event</h3>

        <div class="input">

          

          <input type="text" class="wideForm" placeholder="Name"/>
          <input type="text" class="wideForm" placeholder="Where"/>
          <input type="text" class="wideForm" placeholder="Date"/>

          
          
          <div class="textHalfs">

            <input type="text" placeholder="From time" class="inputHalfTime"/>
            <input type="text" placeholder="To time" class="inputHalfTime"/>
            <input type="text" class="ticketCash" placeholder="Tickets"/>
            <input type="text" class="ticketCash" placeholder="Price"/>

          </div>

          

            

          

        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "Admin",
  components: {}
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100&display=swap');
// All styling here will overwrite App.vue!
body {
  margin: 0;
  padding: 0;
}

.wrapper {
  background: #231f42;
  height: 100vh;
  margin: auto;
  // display: flex;
  // justify-content: center;
  // align-items: center;

  .list {
    position: absolute;
    width: 732px;
    height: 313px;
    left: 130px;
    top: 202px;

    background: rgba(0, 0, 0, 0.3);
    border: 1px solid #000000;
    box-sizing: border-box;
  }
  .form {
    position: absolute;
    width: 432px;
    height: 378px;
    left: 878px;
    top: 202px;

    background: rgba(0, 0, 0, 0.3);
    .input{
      display: flex;
      flex-direction: column;
      color: rgba(255, 255, 255, 0.6);
        font-family: Fira Sans;

      .wideForm{
        width: 90%;
        margin-bottom:13px;
        margin-left: 18px;
        height: 40px;
        background-color: transparent;
        border-radius: 3px;
        border: 1px solid rgba(255, 255, 255, 0.7);
        box-sizing: border-box;
        
      }


      .textHalfs{
      

        .inputHalfTime,.ticketCash{
          height: 40px;
        background-color: transparent;
        border-radius: 3px;
        border: 1px solid rgba(255, 255, 255, 0.7);
        
        }

        

        
      }
    }
  }
}
</style>