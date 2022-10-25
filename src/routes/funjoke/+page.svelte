<script type="text/typescript">
	export {};

	let loaded = false;
	let setup: string? = null;
	let punchline: string? = null;
	let error: string? = null;

	interface Joke {
		id: number;
		type: string;
		setup: string;
		punchline: string;
	}

	function renderJoke(data: Joke) {
		// console.log(data)
		setup = data.setup;
		punchline = data.punchline;
		error = '';
		loaded = true;
	}

	function renderError() {
		error = 'Whoops, something went wrong. Please try again later!';
		loaded = true;
	}

	function getJoke() {
		console.log('asdf')
		fetch('https://official-joke-api.appspot.com/random_joke')
			.then((response) => response.json())
			.then((data: Joke) => renderJoke(data))
			.catch(() => renderError());
	}
</script>

<div class="content">
	<h1>Some random jokes as you click the button</h1>
	<button id="button" type="button" on:click={getJoke}>Get Joke</button>
	{#if loaded}
		<p id="setup">{ setup }</p>
		<p id="punchline">{ punchline }</p>
		<p id="error">{ error }</p>
	{/if}
</div>

<style>
	.content {
		position: absolute;
		top: 30%;
		left: 8%;
		width: 55vw;
	}
</style>
