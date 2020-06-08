<template>
  <div class="wrapper">
    <img src="../assets/logo.png" alt="logo" />
    <div class="content">
      <h2>Where it´s @</h2>
      <h3>STAFF</h3>
      <div class="input">
        <input type="text" class="ticketnumber" />
        <p>Biljett nummer</p>
        <button>Verify ticket</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Sansita&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Fira+Mono&family=Fira+Sans:wght@100&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Fira+Mono&display=swap");
#app {
  width: 100%;
  height: 100vh;
}
.wrapper {
  position: relative;
  width: 375px;
  height: 100vh;

  background-color: #f39440;
}
img {
  position: absolute;
  width: 100px;
  height: 100px;
  left: 145px;
  top: 90px;
}
h2 {
  position: absolute;
  width: 181px;
  height: 52px;
  left: 140px;
  top: 180px;
  font-family: Sansita;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
}
h3 {
  position: absolute;
  width: 281px;
  height: 35px;
  left: 50px;
  top: 220px;
}
.ticketnumber {
  position: absolute;
  width: 310px;
  height: 140px;
  left: 32px;
  top: 310px;
  border: 2px solid #231f42;
  box-sizing: border-box;
  border-radius: 3px;
}
input {
  align-items: center;
  text-align: center;
  letter-spacing: 0.3em;
  background: #f39440;
  border: 2px solid #231f42;
  border-radius: 3px;
}
p {
  color: white;
  position: absolute;
  align-items: center;
  text-align: center;
  width: 100px;
  top: 290px;
  left: 140px;
  font-size: 25px;
  font-family: Fira Mono;
  font-style: uppercase;
  font-weight: bold;
  line-height: 30px;
  color: #090911;
}
button {
  position: absolute;
  width: 310px;
  height: 60px;
  left: 30px;
  top: 390px;
  font-size: 24px;
  font-family: fira, sans;
  background-color: #231f42;
  color: white;
  border-radius: 3px;
}
</style>
