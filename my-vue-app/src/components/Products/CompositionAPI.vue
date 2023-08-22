<template>
    <div>
        <h4>USER</h4>
        {{ name }}
        <br>
        {{ users.fName }} {{ users.lName }}
        <br>
        <h4>ADMIN</h4>
        {{ admin.fName }} {{ admin.lName }}
        <br>
        <h4>COMPUTED IN COMPOSITION</h4>
        <br>
        {{ fullName }}
        <br>
        <button @click="changeName()">Change</button>
    </div>
</template>

<script>
import { ref, computed, watch } from 'vue';

export default {

    setup() {

        const users = ref({
            fName: 'Inacio',
            lName: 'Raimundo'
        })

        const admin = ref({
            fName: 'AdminUserName',
            lName: 'Inacio'
        })

        const fullName = computed(() => {
            return `${users.value.fName} - ${users.value.lName}`
        })

        watch(users, () => {
            console.log('Users Watched...')
        }, {deep: true})

        var name = 'COMPOSITIONS';

        // Metodos são transformados em funções
        const changeName = () => {
            alert('clicked...')
            name = 'COMPOSITIONS API'

            users.value.fName = 'Luis'
            users.value.lName = 'Calela'

            admin.value.fName = 'NewAdmin'
            admin.value.lName = 'Luis'
        }

        return {
            name,
            users,
            admin,
            computed,
            fullName,
            changeName,
        }
    }
}
</script>