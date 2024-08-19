<script>
     import "../app.css";
     import Navbar from "../lib/components/navbar/navbar.svelte";
</script>

<svelte:head>
	<title>WiHi Blog</title>
</svelte:head>

<div>
    <Navbar/>
    <slot/>
</div>
