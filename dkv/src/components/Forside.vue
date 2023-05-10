<template>
    <nav class="navbar">
     <div class="navbar-logo">
       <router-link to="/">DKV</router-link>
     </div>
     <div class="navbar-links" :class="{ 'is-open': isOpen }">
       <router-link to="/">Forside</router-link>
       <router-link to="/produkter">Produkter</router-link>
       <router-link to="/om-os">Om os</router-link>
       <router-link to="/kontakt">Kontakt</router-link>
     </div>
     <div class="navbar-toggle" @click="toggleMenu">
       <span></span>
       <span></span>
       <span></span>
     </div>
   </nav>

 </template>
 <script>
 export default {
   data() {
     return {
       isOpen: false
     };
   },
   methods: {
     toggleMenu() {
       this.isOpen = !this.isOpen;
     }
   }
 };
 </script>
 
 <style scoped>
 .navbar {
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 1rem;
   background-color: #e35a5a;
   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
   position: relative;
 }
 
 .navbar-logo {
   font-size: 1.5rem;
 }
 
 .navbar-links {
   display: flex;
   justify-content: center;
   align-items: center;
 }
 
 .navbar-links a {
   margin: 0 1rem;
   text-decoration: none;
   color: #333;
 }
 
 .navbar-toggle {
   cursor: pointer;
   display: none;
 }
 
 /* Stilarter for mobilvisning */
 
 @media only screen and (max-width: 768px) {
   .navbar-links {
     display: none;
     flex-direction: column;
     position: absolute;
     top: 100%;
     left: 0;
     width: 100%;
     background-color: #f8f8f8;
     padding: 1rem;
     box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
   }
 
   .navbar-links.is-open {
     display: flex;
   }
 
   .navbar-toggle {
     display: block;
   }
 
   .navbar-toggle span {
     display: block;
     width: 20px;
     height: 2px;
     margin: 4px;
     background-color: #333;
     transition: all 0.3s ease-in-out;
   }
 
   .navbar-toggle.is-open span:nth-child(1) {
     transform: rotate(45deg) translate(5px, 5px);
   }
 
   .navbar-toggle.is-open span:nth-child(2) {
     opacity: 0;
   }
 
   .navbar-toggle.is-open span:nth-child(3) {
     transform: rotate(-45deg) translate(5px, -5px);
   }
 }
 </style>