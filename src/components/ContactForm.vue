<template>
    <div class="tittle">
      <h1>For more Information </h1>
      <h4>Please do contact me on the following form:</h4>

      
    </div>

    <div class="contact">
        <label for="">Name</label>
        <input type="text" placeholder="Enter Name" required>
        <label for="">Email</label>
        <input type="text" placeholder="Enter Email Address" required>
        <label for="">Contact no.</label>
        <input type="number" placeholder="Enter Number" required>
        <label for="">Message</label>
        <textarea
                  cols="20"
                  rows="5"
                  placeholder="type message"
                ></textarea>
        <button id="btn">submit</button>

    </div>
  </template>

  <style scoped>
  .tittle{
    color: #7CFC00;
  }
  label{
    color: #7CFC00;
  }
  .contact{
    width: 10rem;
    margin-left: 33rem;
  }
  button{
    color: #7CFC00;
    font-size: 22px;
  }
</style>

<script>

</script>