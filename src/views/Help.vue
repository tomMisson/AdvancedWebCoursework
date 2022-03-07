<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-8">
        <div class="help">
          <h1>How can we help you?</h1>
          <p>
            Please use the drop down list below to select what you need help
            with
          </p>
          <select
            v-model="help_item"
            class="form-select my-4"
            aria-label="Default select example"
          >
            <option value="default" selected disabled hidden>
              Select Help
            </option>
            <option value="1">How to Register</option>
            <option value="2">How to Login</option>
            <option value="3">How to view account</option>
            <option value="4">How to submit data</option>
            <option value="5">
              How to view, edit and delete the user submitted data
            </option>
            <option value="6">
              How to search cardiomyopathy types internally and externally
            </option>
            <option value="7">How to query data</option>
          </select>

          <div class="gif_display my-4">
            <div v-for="(video, index) in videos_link" :key="index">
              <div v-if="video.id == help_item">
                <p class="m-4">
                  {{ video.title }}
                </p>
                <div
                  style="
                    width: 100%;
                    height: 0px;
                    position: relative;
                    padding-bottom: 56.25%;
                  "
                >
                  <iframe
                    :src="video.src"
                    frameborder="0"
                    width="100%"
                    height="100%"
                    allowfullscreen
                    style="
                      width: 100%;
                      height: 100%;
                      position: absolute;
                      left: 0px;
                      top: 0px;
                      overflow: hidden;
                    "
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- Upload your video to https://streamable.com/ to get the link and paste it into the src like I have done-->
<script>
export default {
  data() {
    return {
      help_item: "default",
      videos_link: [
        {
          id: "1",
          title:
            'Please navigate to the "Login" tab on the top right and then click register, fill in the fields, a video demonstration is shown below:',
          src: "https://streamable.com/e/7dasfd",
        },
        {
          id: "2",
          title:
            'Please navigate to the "Login" tab on the top right and fill in the fields, a video demonstration is shown below:',
          src: "https://streamable.com/e/yp3fxw",
        },
        {
          id: "3",
          title:
            'Please navigate to the "Account" tab after you have logged in, a video demonstration is shown below:',
          src: "https://streamable.com/e/p1d01b",
        },
        {
          id: "4",
          title:
            'Please navigate to the "Submit Data" tab while hovering over the "Home" tab, a video demonstration is shown below:',
          src: "https://streamable.com/e/qasr1w",
        },
        {
          id: "5",
          title:
            'Please navigate to the "???" tab while hovering over the "Home" tab, a video demonstration is shown below:',
          src: "https://streamable.com/e/i9383n",
        },
        {
          id: "6",
          title:
            'Please navigate to the "Explore" tab, a video demonstration is shown below:',
          src: "https://streamable.com/e/chnz8r",
        },
        {
          id: "7",
          title:
            'Please navigate to the "Query Data" tab, a video demonstration is shown below:',
          src: "https://streamable.com/e/jty66w",
        },
      ],
    };
  },
};
</script>
