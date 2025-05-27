<template>



    <h2>Formulario de acceso:</h2>

    <form @submit.prevent="checkUser">


        <label for="username">Usuario:</label><br>
        <input v-model="username" id="username" type="text" placeholder="introduce tu usuario" required />
        <br><br>

        <label for="password">Password:</label><br>
        <input v-model="password" id="password" type="text" placeholder="introduce tu contraseña" required />
        <br><br>

        <button type="submit">Login</button>


    </form>


</template>


<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const username = ref('');

const password = ref('');



onMounted(() => {
  cargarUsuarios()
});

const usuarios = ref([]);

const cargarUsuarios = async () => {
  try {
    const response = await axios.get('/users.json');
    usuarios.value = response.data;
    console.log('usuarios fetched successfully:', usuarios.value);
    console.log('festival name:', usuarios.value[0].username);
  } catch (error) {
    console.error('Error al cargar los usuarios:', error);
  }
};




const checkUser = () => {
  const userFound = usuarios.value.find(
    user => user.username === username.value && user.password === password.value
  );

  if (userFound) {
    alert('Login correcto, Bienvenido, ' + userFound.username);
    username.value = '';
    password.value = '';
  } else {
    alert('Usuario o contraseña incorrectos.');
    username.value = '';
    password.value = '';
  }
};







</script>
