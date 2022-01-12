<template>
    <div class="logo-wrapper">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1024px-International_Pok%C3%A9mon_logo.svg.png"
            alt="PokemonLogo"
            class="pokelogo"
        />
    </div>
</template>

<script>
export default {
    name: "Home",
    components: {},
};
</script>
<style scoped>
/* Gracias Google */
.pokelogo
{
	position: absolute;
	max-width: 80%;
	top: 10%;
	left: 10%;
}
.pokelogo:empty
{
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-50%, -50%);
	-moz-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	-o-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
}

@media screen and (orientation: portrait) {
  .pokelogo { max-width: 90%; }
}

@media screen and (orientation: landscape) {
  .pokelogo { max-height: 90%; }
}
</style>