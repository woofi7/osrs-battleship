<template>
    <div class="table">
        <div class="table-cell" v-for="cell in cells" :key="cell">
            <span>{{cell.title}}</span>
            <div class="images">
                <div>
                    <img v-for="image in cell.images" :key="image" :src="image.url" :alt="image.alt">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BoardComponent",
        data() {
            return {
                cells: [
                    {title: "Test 1",
                        images: [
                            {url: "https://oldschool.runescape.wiki/images/thumb/Dagannoth_Rex.png/800px-Dagannoth_Rex.png", alt: "Berseker Ring"},
                            {url: "https://oldschool.runescape.wiki/images/Berserker_ring.png", alt: "Berseker Ring"},
                            {url: "https://oldschool.runescape.wiki/images/Archers_ring.png", alt: "Berseker Ring"},
                            {url: "https://oldschool.runescape.wiki/images/Warrior_ring.png", alt: "Berseker Ring"},
                            {url: "https://oldschool.runescape.wiki/images/Seers_ring.png", alt: "Berseker Ring"},
                        ]
                    },
                    {title: "Test 2"},
                    {title: "Test 3"},
                    {title: "Test 4"},
                    {title: "Test 5"},
                    {title: "Test 6"},
                ]
            }
        }
    }
</script>

<style scoped>
    .table {
        color: white;
        background-color: rgba(19, 19, 19, 0.79);
        display: flex;
        flex-wrap: wrap;
        margin: 0 0 3em 0;
        padding: 0;
        min-width: 500px;
    }

    .table-cell {
        width: 33%;
        box-sizing: border-box;
        padding: 0.8em 1.2em;
        overflow: hidden;
        border: solid white;
        display: flex;
        flex-grow: 1;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .images {
        display: flex;
        flex-wrap: wrap;
    }
    .images div {
        flex-grow: 1;
        width: fit-content;
    }

    .images div img {
        max-height: 100%;
        max-width: 50px;
        object-fit: cover;
        vertical-align: bottom;
    }

    tr:nth-child(even) td:nth-child(odd),
    tr:nth-child(odd) td:nth-child(even)  {
        background-color: black;
    }
</style>