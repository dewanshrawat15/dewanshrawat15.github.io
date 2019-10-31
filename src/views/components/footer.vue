<template>
    <v-footer style="padding-top: 25px; padding-bottom: 25px; background: #fff; padding-left: 40px; border-top: 1px solid rgba(0, 0, 0, 0.12);">
        <div>Designed and Developed by {{ profileJson.name }}</div>
        <v-spacer></v-spacer>
        <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
</template>

<script>
import profileDetailsJson from "../../assets/data/profile.json";
export default{
  data(){
    return {
      profileJson: profileDetailsJson
    }
  }
}
</script>
