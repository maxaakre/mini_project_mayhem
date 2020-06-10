<template>
  <div class="container">
    <ol>
      <li>
        <div v-on:click="$emit('showTicket')" class="ticket-item">
          <div class="date">
            <h4 class="day">20</h4>
            <h4 class="month">APR</h4>
          </div>
          <div class="info">
            <h1>Band-Name</h1>
            <h5>venue</h5>
            <h3>1620</h3>
          </div>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'Event',
  methods:{
    showTicket(){
      console.log('123');
    }

  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background: #232042;
}
.html {
  font-size: 10px;
  font-family: Arial, Helvetica, sans-serif;
}

body {
  background: #232042;
}

.container {
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #232042;
  padding: 0;
  margin: 0;
}

ol {
  list-style: none;
}

li {
  padding-top: 5px;
}

.ticket-item {
  height: 120px;
  width: 320px;
  display: flex;
  justify-items: center;
  align-items: left;
}


.date {
  /* padding: 5px 5px; */
  width: 80px;
  height: 80px;
  border: 1px solid white;

}
.info {
  height: 80px;
  width: 240px;
  border-bottom: 1px solid snow;
  padding: 0 5px;
  margin: 0 15px;
}

h1 {
  font-family: sans-serif;
  font-size: 1.2rem;
  color: #fff;
  text-shadow: 0.1rem 0.1rem #f56c9a;
  text-align: left;
  padding: 5px 0;
}

h3 {
  color: #d0d0d0;
  font-size: 10px;
  text-align: left;
  font-weight: bold;
  padding: 5px 0;
}

.price {
  color: #37afab;
  font-size: 12px;
  text-align: left;
  font-weight: bold;
  text-align: right;
}
h4 {
  color: white;
  font-weight: bold;
  font-size: 1rem;
}
.day {
  padding:  20px 0 0 0;
}

h5 {
  color: #c6c5cc;
  font-style: oblique;
  font-size: 12px;
  font-style: normal;
  text-align: left;
  padding: 5px 0;
}
</style>