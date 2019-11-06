<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div v-for="(item, i) in values" :key="i">
      <p>{{item}}</p>
    </div>
    <button @click="callApi">Call Api</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return {
      values: ["no data yet"]
    }
  },
  methods:{
    async callApi(){
      await axios.get("https://localhost:5000/api/values").then(response => {
        this.values = response.data;
      }).catch(error => {
        this.values.push("oops "+err);
      })
    }
  }
}
</script>
