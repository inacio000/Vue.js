<template>
    <div>
        <div>
            Two-way data binding 
            <br/>
            v-model -> form
        </div>

        <!-- FORM INPUT -->
        <div class="inputClass">
            <label>Name</label>
            <input
                v-model="name"
                type="text"
            >
            {{ name }}
        </div>

        <!-- OPTIONS -->
        <div class="inputClass">
            <label>Sports</label>
            <select v-model="sports">
                <option value="football">Football</option>
                <option value="basketball">Basketball</option>
                <option value="skate">Skate</option>
                <option value="tennis">Tennis</option>
            </select>
            {{ sports }}
        </div>

        <!-- RADIO INPUT -->
        <div class="inputClass">
            <label>News</label>
            <div class="inputs radio">
                <span>
                    <input
                        v-model="newsLetter"
                        type="radio"
                        value="yes"
                    >Yes
                </span>
                <span>
                    <input
                        v-model="newsLetter"
                        type="radio"
                        value="no"
                    >No
                </span>
            </div>
            {{ newsLetter }}
        </div>


        <!-- CHECKBOX -->
        <div class="inputClass">
            <label>Contract</label>
            <div class="inputs checkbox">
                <span>
                    <input
                        v-model="contractValue"
                        type="checkbox"
                    >Accept
                </span>
            </div>
            {{ contractValue }}
        </div>


        <div class="inputClass">
            <label>News</label>
            <div class="inputs radio">
                <span>
                    <input
                        v-model="colors"
                        type="checkbox"
                        value="gray"
                    >Gray
                </span>
                <span>
                    <input
                        v-model="colors"
                        type="checkbox"
                        value="white"
                    >White
                </span>
            </div>
            {{ colors }}
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'Inacio Raimundo',
                sports: 'football',
                newsLetter: 'no',
                contractValue: false,
                colors: []
            }
        }
    } 
</script>

<style>
    .inputClass {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 1rem;
    }

    input {
        width: 150px;
    }

    input[type="radio"], input[type="checkbox"] {
        width: fit-content;
    }

    .inputs {
        width: 160px;
        border: 1px solid;

        display: flex;
    }

    .radio {
        justify-content: space-between;
    }

    .checkbox {
        justify-content: center;
    }
</style>