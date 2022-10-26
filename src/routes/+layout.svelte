<script>
	import { base } from '$app/paths';
</script>

<head>
	<title>Truong's portfolio website</title>
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
		rel="stylesheet"
	/>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
		integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer"
	/>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
	/>
</head>

<body>
	<div class="navBar">
		<nav>
			<h2 class="logo">
				<span class="firstName">Son Truong </span><span class="surName">Nguyen</span>
			</h2>
			<ul>
				<li><a href="{base}/">Main</a></li>
				<li><a href="{base}/about">About Me</a></li>
				<li><a href="{base}/photos">Photos</a></li>
				<li><a href="{base}/contact">Contact Me</a></li>
				<li><a href="{base}/funjoke">Fun Joke</a></li>
			</ul>
		</nav>

		<slot />
	</div>
</body>

<style>
	* {
		padding: 0;
		margin: 0;
		font-family: 'Josefin Sans', sans-serif;
		box-sizing: border-box;
	}

	body {
		text-align: center;
	}

	.navBar {
		height: 100vh;
		width: 100%;
		background-image: url({base}/bg.jpg);
		background-size: cover;
		background-position: center;
	}

	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 45px;
		padding-left: 8%;
		padding-right: 8%;
	}

	.logo {
		color: white;
		font-size: 35px;
		letter-spacing: 1px;
		cursor: pointer;
	}

	.firstName {
		color: rgb(161, 48, 48);
	}

	.surName {
		color: rgb(0, 0, 0);
	}

	nav ul li {
		list-style-type: none;
		display: inline-block;
		padding: 10px 25px;
	}

	nav ul li a {
		color: rgb(161, 48, 48);
		text-decoration: none;
		font-weight: bold;
		text-transform: capitalize;
	}

	nav ul li a:hover {
		color: rgb(0, 0, 0);
		font-weight: bold;
		transition: 0.4s;
	}
</style>
