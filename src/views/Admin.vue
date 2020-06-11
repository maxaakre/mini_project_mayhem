<template>
  <div class="wrapper">
    <div class="list">
      <div class="info">
        <div>
          <p>NAMN</p>
        </div>
        <div>
          <p>VAR</p>
        </div>
        <div>
          <p>ANTAL PLATSER</p>
        </div>
        <div>
          <p>SÅLDA BILJETTER</p>
        </div>
      </div>
      <div class="infoList">
        <div class="namn">
          <p>Lasse Stefanz</p>
          <p>namn 2</p>
          <p>namn 3</p>
          <p>namn 4</p>
        </div>
        <div class="var">
          <p>Kjell Härnqvist salen</p>
        </div>
        <div class="platser">
          <p>300</p>
        </div>
        <div class="biljetter">
          <p>125</p>
        </div>
      </div>
    </div>
    <div class="form">
      <h2>Add Event</h2>

      <div class="inputWide">
        <input type="text" class="wide" placeholder="Name" />
        <input type="text" class="wide" placeholder="Where" />
        <input type="text" class="wide" placeholder="Date" />
      </div>

      <div class="inputQuad">
        <input type="text" class="half" placeholder="From Time" />
        <input type="text" class="half" placeholder="To Time" />
        <input type="text" class="half" placeholder="Tickets" />
        <input type="text" class="half" placeholder="Price" />
      </div>

      <button>Add the Event</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@200;500&display=swap");
.wrapper {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #231f42;
  height: 100vh;

  .list {
    width: 732px;
    height: 313px;
    border: 1px solid #000000;
    background: rgba(0, 0, 0, 0.3);


    // borders exist to see wether all space has been used and is symmetrically alligned
    .info {
      // border: 2px solid white;
      display: flex;
      flex-flow: row;
      justify-content: space-evenly;
      font-size: 13px;
      p {
        color: #f56b9a;
        font-family: Fira Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 13px;
      }
    }

    .infoList {
      display: flex;
      flex-direction: row;
      max-width: 739px;
      max-height: 273px;
      // border: 1px solid white;
      .namn {
        max-width: 250px;
        width: 199px;
        // border: 1px solid red;
        display: flex;
        flex-flow: column;
        color: #ffff;

        font-family: Fira Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 24px;
      }
      .var {
        max-width: 184px;
        // border: 1px solid gold;
        width: 125px;
        font-family: Fira Sans;
        
        flex-flow: column;
        color: #ffff;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 16px;
        display: flex;
      }
      .platser{
        max-width: 184px;
        // border: 1px solid hotpink;
        width: 159px;
        flex-flow: column;
        color: #ffff;
        font-family: Fira Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 16px;
        display: flex;
      }
      .biljetter{
        max-width: 256px;
        // border: 1px solid greenyellow;
        width: 256px;
        flex-flow: column;
        color: #ffff;
        font-family: Fira Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 16px;
        display: flex;
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
    h2 {
      color: #f56b9a;
      font-family: Fira Sans;
      font-style: normal;
      font-weight: bold;
    }

    .inputWide {
      display: flex;
      flex-direction: column;
      width: 100%;

      .wide {
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
    .inputQuad {
      margin: 0 auto -13px;

      .half {
        height: 40px;
        width: calc(100% / 2 - 16px);
        background: transparent;
        display: inline-block;
        border: 1px solid rgba(255, 255, 255, 0.7);
        border-radius: 3px;
        margin-right: 20px;
        margin-bottom: 13px;

        &:nth-child(2n) {
          margin-right: 0;
        }

        .half::placeholder {
          font-family: Fira Sans;
          font-style: normal;
          font-weight: 200;
        }
      }
    }

    button {
      height: 40px;
      width: calc(100% / 2 - 16px);
      background: #f56b9a;
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.7);
      border-radius: 3px;
    }
  }
}
</style>