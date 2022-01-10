<template>
    <div id="nav">
        <Menubar class="menu">
            <template #start>
                <div class="titulo">API-Pokémon</div>
            </template>

            <template #end>
                <ul id="lista">
                    <li v-for="(item, index) in items" :key="index">
                        <router-link :to="item.to">{{item.label}}</router-link>
                    </li>
                </ul>
            </template>
        </Menubar>
    </div>
</template>

<script>
import Menubar from "primevue/menubar";

export default {
    components: {
        Menubar,
    },
    props:['items']
};
</script>
<style scoped>
.titulo {
    margin-left: 3vh;
}

.menu {
    background-color: #7c7c7c;
    font-weight: bold;
    font-size: 2rem;
    color: whitesmoke;
    height: 7rem;
}

#lista li {
     display:inline;
     padding-left:3px;
     padding-right:3px;
     margin-right: 3vh;
}

#nav{
    margin-bottom: 3vh;
}

#nav a {
    text-decoration: none;
    color: whitesmoke;
}

#nav a.router-link-exact-active {
    color: #d3d3d3;
}
</style>