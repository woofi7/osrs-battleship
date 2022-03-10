<template>
  <span>{{ loading }}</span>
  <div class="table">
    <div class="table-cell" v-for="cell in cells" :key="cell">
      <span class="info-button" v-if="cell.title" v-on:click="info(cell.id)">
        <font-awesome-icon icon="info" />
      </span>
      <span class="title">{{ cell.title }}</span>
      <div class="images">
        <img v-for="image in cell.images" :key="image" :src="image.url">
      </div>
      <div v-if="cell.title" :id="cell.id" class="info-card">
        <p v-html="cell.desc"></p>
      </div>
      <div v-if="cell.hitsplat" class="hitsplat">
        <img v-if="cell.damage" src="https://osrsraidsqc.com/wp-content/uploads/2022/03/Damage_hitsplat-1.png">
        <img v-else src="https://osrsraidsqc.com/wp-content/uploads/2022/03/Tank_hitsplat.png">
        <span class="team">Attacked by <b>{{cell.team}}</b></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoardComponent",
  methods: {
    info: function(id) {
      let element = document.getElementById(id);
      if (element.style.opacity !== "1") {
        element.style.opacity = "1";
      }
      else {
        element.style.opacity = "0";
      }
    }
  },
  data() {
    return {
      loading: false,
      cells: []
    }
  },
  async created() {
    this.loading = true

    let dataUrl = "https://opensheet.elk.sh/1TB0ZWKY80s6bQ4n40j8yKo9id-m-SzEvPbrUpHJ3fhc/1";
    const response = await fetch(dataUrl);
    const data = await response.json();
    data.forEach(e => {
      if('images' in e)
        e.images = JSON.parse(e.images);
      if('hitsplat' in e && e.hitsplat !== null) {
        e.damage = e.hitsplat === "1";
      }
    });
    this.cells = data;

    this.loading = false;
  }
}
</script>

<style scoped>
.table {
  color: white;
  background-color: rgba(19, 19, 19, 0.79);
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-flow: row ;
  overflow: scroll;
  margin: 0 0 3em 0;
  padding: 0;
  min-width: 500px;
  width: 100%
;
}

.table-cell {
  box-sizing: border-box;
  padding: 0.5rem;
  overflow: hidden;
  border: solid white;
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  min-width: 150px;
  height: 125px;
}

.images {
  max-height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
}

.images img {
  flex: 1;
  max-height: 75%;
  width: 100%;
  min-width: 0;
  padding: 0.2rem;
  object-fit: scale-down;
}

.info-card {
  transition-duration: 500ms;
  opacity: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  z-index: 2;
  height: 100%;
  width: 100%;
}

.info-card p {
  margin: 0.5em;
}

.title {
  position: absolute;
  top: 10px;
  z-index: 1;
}

.info-button {
  cursor: pointer;
  background: dimgrey;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
  z-index: 3;
}
.info-button:hover {
  background: black;
}

.hitsplat {
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  height: 100%;
  width: 100%;
}

.hitsplat img {
  height: inherit;
  object-fit: scale-down;
}

.team {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0.5rem;
  font-size: 0.75em;
}
</style>
