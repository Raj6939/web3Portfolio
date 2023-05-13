<template>
  <div class="container" align="center"> 
    <helmet-provider>
        <div>
            <helmet>
                <meta charSet="utf-8" />              
                <title>Social Share Preview – Check social media link previews</title>
                <meta name="description" content="Check how the link previews of a website look like on Facebook, Twitter, LinkedIn &amp; Pinterest. Use our ► debugger or install our ► free browser plugin!">
                <meta property="og:title" content="Social Share Preview – Check social media link previews">
                <meta property="og:description" content="Check how the link previews of a website look like on Facebook, Twitter, LinkedIn &amp; Pinterest. Use our ► debugger or ► free browser extensions!">
                <meta property="og:image" content="https://socialsharepreview.com/images/social-share-preview-og.jpg">
                <meta name="twitter:card" content="summary_large_image">
                <meta name="twitter:title" content="Social Share Preview – Check social media link previews">
                <meta name="twitter:description" content="Check how the link previews of a website look like on Facebook, Twitter, LinkedIn &amp; Pinterest. Use our ► debugger or install our ► free browser plugin!">                
                <meta name="twitter:image" content="https://socialsharepreview.com/images/social-share-preview-og.jpg">
            </helmet>
        </div>
    </helmet-provider>
    <table class="cert">
      
  <tr>
    <td align="center" class="crt_logo">
      <img src="../assets/hypersign.jpg" alt="logo">

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
    <!-- <ShareNetwork
    network="twitter"
    url="https://hypersign.id"
    title="HackDID Certification."
    description="Hey everyone, recently I have attended HackDID organized by hypersing.id. I won the hackathon first prize and was fun doing building on top of hypersign. Hey everyone.Hey everyoneHey everyone Say hi to Vite! A brand new, extremely fast development setup for Vue."
    quote="The hot reload is so fast it\'s near instant. - Evan You"
    hashtags="hypersignchain,hackDID,hypersignHackathon,DID,SSI"
    image="https://static.tildacdn.com/tild6539-3461-4438-b031-373266393834/Frame_333.jpg"
  >
    Share on Facebook
</ShareNetwork> -->

 <!-- <button @click="generateCert">Share</button> -->

  </tr>
</table>      
  </div>
</template>

<script>
import html2canvas from 'html2canvas';

// import ShareNetwork from "vue-social-sharing"
import { Helmet,HelmetProvider } from "@jnields/vue-helmet";
export default {
  name: "HomePage",
  components:{HelmetProvider, Helmet},
 
  data(){
    return{
      certificatePageUrl:'https://static.tildacdn.com/tild6539-3461-4438-b031-373266393834/Frame_333.jpg',
      pageTitle: 'My OG Title',
      pageDescription: 'My OG description here',
      ogImageUrl: 'https://ik.imagekit.io/ikmedia/backlit.jpg'
    }
  },
  created(){
    // this.getMetaInfo();
  },
  methods:{
    generateCert() {      
       const element = document.querySelector('.container');

      html2canvas(element).then(canvas => {
        // Convert canvas to PNG image data
        const imageData = canvas.toDataURL('image/png');

        // Create a temporary link element to download the PNG certificate
        const link = document.createElement('a');
        link.href = imageData;
        link.download = 'certificate.png';
        link.click();
      });
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
