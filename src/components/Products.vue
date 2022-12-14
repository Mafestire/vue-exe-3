<template>

   <h2 id="pro" >PRODUCTS</h2>

   <div class="show" v-for="item in women"  :key="item">
        <img :src="item.image">
        <div class="tittle">{{item.name}}</div>
        <div class="price">R {{item.price}}</div>
        <div class="id">{{item.id}}</div>
        <div class="butn"><button v-on:click="purchaseConform">Purchase</button></div>
   </div>
</template>
<script>
export default {
    data(){
        return{
            women: [
    {
        name: 'Slick Dress',
        id: 1,
        price: 350,
        image: 'https://i.postimg.cc/V659Kn4Q/slick.jpg'
    },
    {
        name: 't-shirt Dress',
        id: 2,
        price: 290,
        image: 'https://i.postimg.cc/zXdzrhFP/t-shit-dress.jpg'
    },
    {
        name: '2 piece basket-ball',
        id: 3,
        price: 420,
        image: 'https://i.postimg.cc/rmWsypwR/stippped.jpg' 
    },
    {
        name: 'Shacket',
        id: 4,
        price: 500,
        image: 'https://i.postimg.cc/qvvyQ21J/Shacket-2sided.webp'
    }]
    }}
}
// methods: {
//     purchaseConform() {
      
//     }
// };
</script>
<style scoped>
    img{
        width: 10rem;
    }
    .show{
        width: 15rem;
        background-color: #32CD32;    
        margin-bottom: 5rem;
        margin-left: 30rem;
        padding: 20px;
    }
    button{
        font-size: 20px;
        background-color: #7CFC00;
    }

</style>