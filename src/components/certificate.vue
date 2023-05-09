<template>
  <div class="container" align="center"> 
     <vue-head>
      <meta property="og:title" content="My Certificate" />
      <meta property="og:description" content="Hack the DID from Hypersign" />
      <meta property="og:image" content="https://static.tildacdn.com/tild6539-3461-4438-b031-373266393834/Frame_333.jpg" />      
    </vue-head>      
    <table class="cert">
      
  <tr>
    <td align="center" class="crt_logo">
      <img src="https://pbs.twimg.com/profile_images/1589515775865675776/x3aQ_9e3_400x400.jpg" alt="logo">

    </td>
  </tr>
  <tr>
    <td align="center">
      <h1 class="crt_title">Certificate Of Participation in <br /> Hack The DID</h1>
        <h2>This Certificate is awarded to</h2>
        <h1 class="colorGreen crt_user">Raj Patil</h1>
        <h3 class="afterName">For his/her completion of HSE Awareness session
        </h3>
        <h3>Awarded on 1 March 2020 </h3>
    </td>
  </tr>
  <tr>
    <td align="center">
      <h3>Person Name </h3>
      <h3>Learning Lead</h3>
      <h3>Department Name</h3>
    </td>
  </tr>
</table>      
  </div>
</template>

<script>
import VueHead from 'vue-head';
export default {
  name: "CertifiCate",
  components:{VueHead},
  data(){
    return{
      head: {
    title: {
      inner: 'Your Page Title'
    },
    meta: [
      {
        name: 'description',
        content: 'Description of your webpage'
      },
      {
        property: 'og:title',
        content: 'Your Page Title'
      },
      {
        property: 'og:description',
        content: 'Description of your webpage'
      },
      {
        property: 'og:image',
        content: 'https://media.licdn.com/dms/image/C4D03AQGM3Z9dL6ZkoQ/profile-displayphoto-shrink_800_800/0/1655765136300?e=2147483647&v=beta&t=LuvfT4R4SwW7XmMEXo2e9SIrQ5uKlMs_2saK2Gi_iOI'
      },
      {
        property: 'og:url',
        content: 'URL of your webpage'
      },
      {
        property: 'og:type',
        content: 'website'
      }
    ]
  },
    }
  }
};
</script>

<style scoped>
.cert {
  /*   background-image: linear-gradient(190deg, #a170bd, #1b1927) !important; */
  border: 15px solid #0072c6;
  border-right: 15px solid #0894fb;
  border-left: 15px solid #0894fb;
  width: 700px;
  font-family: arial;
  color: #383737;
}

.crt_title {
  margin-top: 30px;
  font-family: "Satisfy", cursive;
  font-size: 40px;
  letter-spacing: 1px;
  color: #0060a9;
}
.crt_logo img {
  width: 130px;
  height: auto;
  margin: auto;
  padding: 30px;
}
.colorGreen {
  color: rgb(80, 54, 101);
}
.crt_user {
  display: inline-block;
  width: 80%;
  padding: 5px 25px;
  margin-bottom: 0px;
  padding-bottom: 0px;
  font-family: "Satisfy", cursive;
  font-size: 40px;
  border-bottom: 1px dashed #cecece;
}

.afterName {
  font-weight: 100;
  color: #383737;
}
.colorGrey {
  color: grey;
}
.certSign {
  width: 200px;
}

@media (max-width: 700px) {
  .cert {
    width: 100%;
  }
}

</style>
