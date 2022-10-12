<script type="text/typescript">
    export { }

    interface Joke {
      id: number;
      type: string;
      setup: string;
      punchline: string;
    }
    
    
    document.addEventListener("click", function (event) {
      // Checking if the button was clicked
      if (!(event.target! as HTMLButtonElement).matches("#button")) return;
    
      /*
      Here we send a request to the Joke API
      Then process the response into JSON
      Then pass the data to our renderJoke function.
      */
      fetch("https://official-joke-api.appspot.com/random_joke")
        .then((response) => response.json())
        .then((data: Joke) => renderJoke(data))
        .catch(() => renderError());
    });
    
    function renderJoke(data: Joke) {
      // Get text elements
      const setup = document.getElementById("setup")!;
      const punchline = document.getElementById("punchline")!;
      const error = document.getElementById("error")!;
    
      // Hide error and render jokes
      error.innerHTML = "";
      setup.innerHTML = data.setup;
      punchline.innerHTML = data.punchline;
    }
    
    function renderError() {
      const error = document.getElementById("error")!;
      error.innerHTML = "Whoops, something went wrong. Please try again later!";
    }
</script>

<div class="content">
    <h1>
        Some random jokes as you click the button
    </h1>
    <button id="button" type='button'>Get Joke</button>
    <p id="setup"></p>
    <p id="punchline"></p>
    <p id="error"></p>
</div>

<style>
  .content {
    position: absolute;
    top: 30%;
    left: 8%;
    width: 55vw;
}
</style>