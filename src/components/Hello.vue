<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <div style="height: 50px">
      <input style="height: 50px; width: 200px; padding: 5px; font-size: 24px; text-align: center; " type="button" v-on:click="getAnswer" value="Get Answer"/>
    </div>
    <div>
    <br />
    <img v-bind:src="imgsrc" />
    </div>
    <div style="font-size: 92px; font-weight: bold">{{answer}}</div>
    
    
  </div>
</template>

<script>
import Network from '../libs/network.js'

export default {
  name: 'hello',
  
  data () {
    return {
      msg: 'Click to get your answer',
      imgsrc: '',
      answer: ''
    }
  },
  created: function(){
    console.log('created');
    //this.getAnswer();
  },
  methods:{

    getAnswer: function(){
      var app = this;
        Network.fetch('https://yesno.wtf/api', function(res){
           app.imgsrc = res.image;
             app.answer = res.answer;
        })
    //     var req = new XMLHttpRequest();
    //     var app = this;
    //     req.onreadystatechange = function() {
    //       if(req.readyState === 4) { // done
    //       if(req.status === 200) { // complete	
    //         var res = JSON.parse(req.response);
    //         console.log(res);
    //         app.imgsrc = res.image;
    //         app.answer = res.answer;
    //       }
    //   }
    // };
    
    // req.open('GET', 'https://yesno.wtf/api', true);
    // req.send(null);

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
